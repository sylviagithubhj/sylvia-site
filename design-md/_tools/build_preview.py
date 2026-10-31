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


def short_basis(b):
    b = (b or '').strip()
    return re.split(r'[(·]', b)[0].strip() if b else ''


def main():
    cat_path = os.path.join(ROOT, 'catalog.json')
    cat = json.load(open(cat_path, encoding='utf-8'))
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
        it['pv'] = {
            'btn': btn,
            'bg': page_bg(colors),
            'point': st[0]['title'] if st else '',
            'font': (tok.get('fonts') or [''])[0],
            'basis': short_basis(it.get('basis')),
        }
    json.dump(cat, open(cat_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    print('items', len(cat['items']), 'with button', with_btn)


if __name__ == '__main__':
    main()
