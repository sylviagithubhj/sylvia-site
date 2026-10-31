"""Add a `pv` (list preview) field to catalog.json from each DESIGN.md's YAML front matter.

Run from design-md/ after build_tokens.py:  python3 _tools/build_preview.py

pv = {btn: {bg, fg, r} | None, bg, point, font}
Only values written in the document are used. When a document has no primary
button with a resolvable color, btn is None and the list shows color chips instead.
"""
import glob, json, os, re

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COLOR = re.compile(r'^(#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))$')
BAD = re.compile(r'hover|pressed|press|active|focus|disabled|secondary|tertiary|ghost|outline|line|text|link|icon|weak|subtle|soft|neutral|small|xsmall|sm\b|xs\b|dark|inverse|danger|critical|destructive', re.I)
PREFER = ['button-primary', 'primary-button', 'button-cta', 'cta-button', 'cta', 'button-large', 'button-xlarge',
          'button-primary-app', 'button-primary-web', 'button-fill', 'button-filled', 'button-solid', 'button', 'button-medium']


def front(path):
    s = open(path, encoding='utf-8').read()
    m = re.match(r'^---\n(.*?)\n---\n', s, re.S)
    if not m:
        return None
    try:
        return yaml.safe_load(m.group(1)) or None
    except yaml.YAMLError:
        return None


def flat(d, prefix=''):
    """colors may be nested ({brand: {primary: '#..'}}); flatten to dotted and plain keys."""
    out = {}
    for k, v in (d or {}).items():
        key = prefix + str(k)
        if isinstance(v, dict):
            out.update(flat(v, key + '.'))
            if 'light' in v or 'value' in v:
                out[key] = v.get('value', v.get('light'))
        else:
            out[key] = v
            out.setdefault(str(k), v)
    return out


def resolve(v, table, depth=0):
    if v is None or depth > 5:
        return None
    v = str(v).strip()
    m = re.fullmatch(r'\{(?:colors|rounded|radius)\.([^}]+)\}', v)
    if m:
        return resolve(table.get(m.group(1)), table, depth + 1)
    return v


def color(v, colors):
    v = resolve(v, colors)
    return v if v and COLOR.match(v) else None


def radius(v, rounded):
    v = resolve(v, rounded)
    if v is None:
        return None
    if re.fullmatch(r'\d+(\.\d+)?', v):
        v += 'px'
    v = v.replace('pt', 'px')
    if re.fullmatch(r'\d+(\.\d+)?px|\d+%', v):
        n = float(v[:-2]) if v.endswith('px') else 999
        return '999px' if n >= 100 or v.endswith('%') else v
    return None


COLOR_PREF = re.compile(r'primary|brand-solid|solid-primary|filled-high|fill|cta|blue|mint', re.I)
SIZE_PREF = ['button-large', 'button-l', 'button-48', 'button-xlarge', 'button-xl', 'button-medium', 'button-m', 'button']


def button_parts(comp, colors, rounded):
    """Some documents split a button into a color entry (button-primary-fill) and size entries
    (button-large). Take the color from the best color entry and the corner from the same entry,
    or else from the main size entry."""
    keys = [k for k in comp if re.search(r'button|btn|cta', k, re.I) and isinstance(comp[k], dict)]
    for k in PREFER:
        if k in keys:
            keys.remove(k); keys.insert(0, k)
    with_color = [k for k in keys if not BAD.search(k.replace('fill', '')) and color(comp[k].get('backgroundColor') or comp[k].get('background'), colors)]
    with_color.sort(key=lambda k: 0 if COLOR_PREF.search(k) else 1)
    if not with_color:
        return None
    c = comp[with_color[0]]
    r = radius(c.get('rounded') or c.get('borderRadius') or c.get('radius'), rounded)
    if r is None:
        for k in SIZE_PREF:
            if k in comp and isinstance(comp[k], dict):
                r = radius(comp[k].get('rounded') or comp[k].get('borderRadius'), rounded)
                if r:
                    break
    return {'bg': color(c.get('backgroundColor') or c.get('background'), colors),
            'fg': color(c.get('textColor') or c.get('color'), colors), 'r': r}


def page_bg(colors):
    for k in ['background', 'bg', 'canvas', 'page', 'surface', 'bg-default', 'background-default', 'bg-layer-default',
              'bg.layer-default', 'layer-default', 'background.normal.normal', 'background-normal', 'surface-default', 'gray-0', 'white']:
        c = color(colors.get(k), colors)
        if c:
            return c
    return None


def rgb(h):
    m = re.fullmatch(r'#([0-9a-fA-F]{6})', h or '')
    if not m:
        return None
    n = int(m.group(1), 16)
    return n >> 16, (n >> 8) & 255, n & 255


def chroma(h):
    c = rgb(h)
    return max(c) - min(c) if c else 0


def lum(h):
    c = rgb(h)
    if not c:
        return None
    a = [x / 255 for x in c]
    a = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in a]
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]


def px(r):
    m = re.fullmatch(r'(\d+(?:\.\d+)?)px', r or '')
    return float(m.group(1)) if m else None


def pale(h):
    c = rgb(h)
    return bool(c) and min(c) > 225 and max(c) - min(c) < 20


def style_tags(it, btn, bg):
    """Style chips from document values only. Rules:
    다크 = page background luminance < 0.05
    무채색 = primary button is black or gray (a white button does not count; then every main color must be gray)
    둥근 = button corner >= 12px, 각진 = button corner <= 4px
    선명한 포인트 = primary button chroma >= 180"""
    tags = []
    L = lum(bg) if bg else None
    if L is not None and L < 0.05:
        tags.append('다크')
    b = btn['bg'] if btn and rgb(btn.get('bg')) else None
    if b and not pale(b):
        if chroma(b) < 24:
            tags.append('무채색')
    elif it.get('colors') and all(chroma(c) < 24 for c in it['colors'][:4] if rgb(c)):
        tags.append('무채색')
    r = px(btn and btn.get('r'))
    if r is not None and r >= 12:
        tags.append('둥근')
    elif r is not None and r <= 4:
        tags.append('각진')
    if b and chroma(b) >= 180:
        tags.append('선명한 포인트')
    return tags


def short_basis(b):
    b = (b or '').strip()
    return re.split(r'[(·]', b)[0].strip() if b else ''


def main():
    cat_path = os.path.join(ROOT, 'catalog.json')
    cat = json.load(open(cat_path, encoding='utf-8'))
    tl_path = os.path.join(ROOT, 'data', 'taglines.json')
    taglines = json.load(open(tl_path, encoding='utf-8')) if os.path.exists(tl_path) else {}
    with_btn = 0
    for it in cat['items']:
        d = front(os.path.join(ROOT, 'md', it['slug'] + '.md')) or {}
        colors = flat(d.get('colors'))
        rounded = {str(k): str(v) for k, v in (d.get('rounded') or d.get('radius') or {}).items() if not isinstance(v, dict)}
        comp = d.get('components') or {}
        btn = button_parts(comp, colors, rounded) if isinstance(comp, dict) else None
        with_btn += bool(btn)
        tok_path = os.path.join(ROOT, 'tokens', it['slug'] + '.json')
        tok = json.load(open(tok_path, encoding='utf-8')) if os.path.exists(tok_path) else {}
        st = tok.get('strengths') or []
        # logo file dropped into logos/ (any of these types), named by slug without the region prefix
        it.pop('logo', None)
        base = it['slug'].split('-', 1)[1]
        for ext in ('svg', 'png', 'webp', 'jpg'):
            if os.path.exists(os.path.join(ROOT, 'logos', base + '.' + ext)):
                it['logo'] = 'logos/' + base + '.' + ext
                break
        it['pv'] = {
            'btn': btn,
            'bg': page_bg(colors),
            'point': st[0]['title'] if st else '',
            'font': (tok.get('fonts') or [''])[0],
            'basis': short_basis(it.get('basis')),
            'tags': style_tags(it, btn, page_bg(colors)),
        }
        if it['slug'] in taglines:
            it['pv']['svc'], it['pv']['look'] = taglines[it['slug']]
    json.dump(cat, open(cat_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    print('items', len(cat['items']), 'with button', with_btn)


if __name__ == '__main__':
    main()
