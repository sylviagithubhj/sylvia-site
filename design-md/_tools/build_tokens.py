"""Read every md/*.md and write tokens/{slug}.json for the style preview.

Run from design-md/:  python3 _tools/build_tokens.py
Pulls colors (with group and usage), type scale, radius, spacing and font names
out of the DESIGN.md body tables/lists, falling back to the YAML front matter.
"""
import glob, json, os, re

try:
    import yaml
except ImportError:  # front matter is optional
    yaml = None

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COLOR_RE = re.compile(r'#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b|rgba?\([^)]*\)')
NUM_RE = re.compile(r'\d+(?:\.\d+)?')


def clean(s, n=160):
    s = re.sub(r'`\{[^}]*\}`\s*[—-]?\s*', '', s)
    s = re.sub(r'[*`]', '', s).strip(' :—-')
    s = re.sub(r'\s+', ' ', s)
    return s if len(s) <= n else s[:n - 1].rstrip() + '…'


def split_front(text):
    m = re.match(r'^---\n(.*?)\n---\n', text, re.S)
    if not m:
        return {}, text
    fm = m.group(1)
    data = {}
    if yaml:
        # one-line descriptions often hold unquoted colons; drop them, keep tokens
        safe = '\n'.join(l for l in fm.split('\n') if not re.match(r'^(name|description|version):(?!\s*[|>]\s*$)', l))
        safe = re.sub(r'^description:\s*[|>]\s*\n(?:[ \t]+.*\n?)*', '', safe, flags=re.M)
        try:
            data = yaml.safe_load(safe) or {}
        except Exception:
            data = {}
    return data, text[m.end():]


def sections(body):
    """Split into {h2 title: text}."""
    out, cur, buf = [], None, []
    for line in body.split('\n'):
        if line.startswith('## '):
            if cur is not None:
                out.append((cur, '\n'.join(buf)))
            cur, buf = line[3:].strip(), []
        elif cur is not None:
            buf.append(line)
    if cur is not None:
        out.append((cur, '\n'.join(buf)))
    return out


def find(secs, *keys):
    for t, s in secs:
        if any(k in t.lower() for k in keys):
            return s
    return ''


def tables(text):
    """Yield (group heading, header cells, rows) for each markdown table."""
    group, lines = '', text.split('\n')
    i = 0
    while i < len(lines):
        l = lines[i]
        if l.startswith('### '):
            group = clean(l[4:], 40)
        if l.strip().startswith('|') and i + 1 < len(lines) and re.match(r'^\s*\|[\s:|-]+\|\s*$', lines[i + 1]):
            head = [c.strip() for c in l.strip().strip('|').split('|')]
            rows, i = [], i + 2
            while i < len(lines) and lines[i].strip().startswith('|'):
                rows.append([c.strip() for c in lines[i].strip().strip('|').split('|')])
                i += 1
            yield group, head, rows
            continue
        i += 1


def col(head, *keys):
    for j, h in enumerate(head):
        if any(k in h.lower() for k in keys):
            return j
    return -1


# ---------- colors ----------
def colors_from_body(sec):
    groups, order = {}, []

    def add(g, item):
        g = g or '색상'
        if g not in groups:
            groups[g] = []
            order.append(g)
        if not any(x['name'] == item['name'] and x['value'] == item['value'] for x in groups[g]):
            groups[g].append(item)

    for g, head, rows in tables(sec):
        cl = col(head, '라이트', 'hex', 'value', '값', 'color')
        cd = col(head, '다크', 'dark')
        cr = col(head, '쓰임', 'role', 'usage', '용도')
        for r in rows:
            cells = r + [''] * (len(head) - len(r))
            light = COLOR_RE.search(cells[cl]) if cl >= 0 else None
            if not light:
                for c in cells[1:]:
                    light = COLOR_RE.search(c)
                    if light:
                        break
            if not light:
                continue
            dark = COLOR_RE.search(cells[cd]) if cd >= 0 else None
            add(g, {'name': clean(cells[0], 48), 'value': light.group(0),
                    'dark': dark.group(0) if dark else None,
                    'role': clean(cells[cr]) if cr >= 0 else ''})

    group = ''
    for line in sec.split('\n'):
        if line.startswith('### '):
            group = clean(line[4:], 40)
            continue
        m = re.match(r'^\s*[-*]\s+\*\*(.+?)\*\*\s*(.*)$', line)
        if not m:
            continue
        rest = m.group(2)
        found = [c for c in COLOR_RE.findall(rest)]
        if not found:
            continue
        paren = re.match(r'^\(([^)]*(?:\([^)]*\)[^)]*)*)\)\s*:?\s*(.*)$', rest)
        role = paren.group(2) if paren else rest.split(':', 1)[-1]
        add(group, {'name': clean(m.group(1), 48), 'value': found[0], 'dark': None, 'role': clean(role)})
    return [{'name': g, 'items': groups[g]} for g in order if groups[g]]


GROUP_HINTS = [('브랜드·강조', ('primary', 'brand', 'accent', 'link', 'cta')),
               ('상태', ('success', 'error', 'warning', 'danger', 'info', 'positive', 'negative')),
               ('바탕·선', ('canvas', 'surface', 'background', 'bg', 'hairline', 'border', 'divider')),
               ('글자', ('ink', 'text', 'body', 'mute', 'on-'))]


def colors_from_yaml(c):
    groups = {}
    for name, v in (c or {}).items():
        m = COLOR_RE.search(str(v))
        if not m:
            continue
        g = next((label for label, keys in GROUP_HINTS if any(k in name.lower() for k in keys)), '기타')
        groups.setdefault(g, []).append({'name': name, 'value': m.group(0), 'dark': None, 'role': ''})
    order = [g for g, _ in GROUP_HINTS] + ['기타']
    return [{'name': g, 'items': groups[g]} for g in order if g in groups]


# ---------- typography ----------
def num(s):
    m = NUM_RE.search(s or '')
    return float(m.group(0)) if m else None


def ratio(lh, size, head_px):
    if lh is None or not size:
        return None
    r = lh / size if (head_px or lh > 4) else lh
    return round(r, 2)


def type_from_body(sec):
    out = []
    for _, head, rows in tables(sec):
        cs = col(head, '크기', 'size')
        if cs < 0:
            continue
        cw, cl = col(head, '굵기', 'weight'), col(head, '행간', 'line')
        cr, cf = col(head, '쓰임', 'use', 'usage'), col(head, '글꼴', 'font')
        cn = 0
        lh_px = cl >= 0 and 'px' in head[cl].lower()
        for r in rows:
            cells = r + [''] * (len(head) - len(r))
            size = num(cells[cs])
            if not size or size > 200:
                continue
            w = re.search(r'\b[1-9]00\b', cells[cw]) if cw >= 0 else None
            lhc = cells[cl] if cl >= 0 else ''
            lh = num(lhc)
            out.append({'name': clean(cells[cn], 40), 'size': size,
                        'weight': int(w.group(0)) if w else None,
                        'lh': ratio(lh, size, lh_px or 'px' in lhc),
                        'family': clean(cells[cf], 60) if cf >= 0 else '',
                        'role': clean(cells[cr], 80) if cr >= 0 and cr != cn else ''})
        if out:
            break
    return out


def type_from_yaml(t):
    out = []
    for name, v in (t or {}).items():
        if not isinstance(v, dict):
            continue
        size = num(str(v.get('fontSize', '')))
        if not size:
            continue
        lhs = str(v.get('lineHeight', ''))
        w = re.search(r'[1-9]00', str(v.get('fontWeight', '')))
        out.append({'name': name, 'size': size, 'weight': int(w.group(0)) if w else None,
                    'lh': ratio(num(lhs), size, 'px' in lhs),
                    'family': str(v.get('fontFamily', '')).split(',')[0].strip().strip('"\''), 'role': ''})
    return out


def font_name(v):
    first = re.findall(r'`([^`]+)`', v)
    v = first[0] if first else v
    v = re.split(r'[,(（]', v)[0].strip().strip('"\' ')
    v = clean(v, 40)
    if not v or len(v) > 28 or re.search(r'^\d|px|:|system|확인|^-', v, re.I):
        return ''
    return v


def fonts(sec, yaml_type, typ):
    names = []
    for line in sec.split('\n'):
        m = re.match(r'^\s*[-*]\s+(\*\*[^*]+\*\*|글꼴|대체 글꼴)\s*:\s*(.+)$', line)
        if not m:
            continue
        label = m.group(1)
        if label == '대체 글꼴':
            continue
        if label.startswith('**') and '`' not in m.group(2):
            continue
        n = font_name(m.group(2))
        if n and n not in names:
            names.append(n)
        if len(names) >= 3:
            break
    if not names:
        for t in typ:
            n = font_name(t['family'])
            if n and n not in names:
                names.append(n)
    return names[:3]


# ---------- radius / spacing ----------
def px_list(line):
    return [x for x in re.findall(r'\d+(?:\.\d+)?px|9999px|50%', line)]


def radius_from_body(secs):
    out = []
    sec = find(secs, '모서리', '모양', 'radius', 'shape', 'depth', 'layout')
    for _, head, rows in tables(sec):
        cv = col(head, '값', 'value', 'radius')
        if cv < 0:
            continue
        for r in rows:
            cells = r + [''] * (len(head) - len(r))
            v = re.search(r'\d+(?:\.\d+)?px|9999px|50%', cells[cv])
            if v and ('px' in cells[cv]) and not COLOR_RE.search(cells[cv]):
                out.append({'name': clean(cells[0], 32), 'value': v.group(0)})
        if out:
            return out[:10]
    for _, s in secs:
        for line in s.split('\n'):
            if re.search(r'border radius|radius:', line, re.I):
                vals = px_list(line)
                if len(vals) >= 2:
                    return [{'name': v, 'value': v} for v in vals[:10]]
    return out


def spacing_from_body(secs):
    for _, s in secs:
        for line in s.split('\n'):
            if re.search(r'^#+\s*spacing|간격 단계|실제로 쓰는 여백|base unit|기본 단위', line, re.I):
                vals = px_list(line) or [v + 'px' for v in re.findall(r'\b\d{1,3}\b', line.split(':', 1)[-1])]
                if len(vals) >= 3:
                    return [{'name': v, 'value': v} for v in vals[:14]]
    return []


def yaml_scale(d):
    out = []
    for k, v in (d or {}).items():
        m = re.search(r'\d+(?:\.\d+)?px|9999px|50%', str(v))
        if m:
            out.append({'name': str(k), 'value': m.group(0)})
    return out[:14]


def build(path):
    text = open(path, encoding='utf-8').read()
    fm, body = split_front(text)
    secs = sections(body)
    csec = find(secs, 'color', 'colour', '색상', '색')
    tsec = find(secs, 'typography', '타이포', '글꼴')
    colors = colors_from_body(csec)
    if sum(len(g['items']) for g in colors) < 3 and fm.get('colors'):
        colors = colors_from_yaml(fm['colors'])
    # SylviaLab v2 files carry `source:` in front matter: their body tables hold the usage notes, so read those first.
    if fm.get('source'):
        typ = type_from_body(tsec) or type_from_yaml(fm.get('typography'))
    else:
        typ = type_from_yaml(fm.get('typography')) or type_from_body(tsec)
    typ.sort(key=lambda t: -t['size'])
    return {
        'fonts': fonts(tsec, fm.get('typography'), typ),
        'colors': colors,
        'type': typ[:24],
        'radius': yaml_scale(fm.get('rounded')) or radius_from_body(secs),
        'spacing': yaml_scale(fm.get('spacing')) or spacing_from_body(secs),
    }


def main():
    os.makedirs(os.path.join(ROOT, 'tokens'), exist_ok=True)
    report = []
    for p in sorted(glob.glob(os.path.join(ROOT, 'md', '*.md'))):
        slug = os.path.basename(p)[:-3]
        t = build(p)
        with open(os.path.join(ROOT, 'tokens', slug + '.json'), 'w', encoding='utf-8') as f:
            json.dump(t, f, ensure_ascii=False, separators=(',', ':'))
        report.append((slug, sum(len(g['items']) for g in t['colors']), len(t['colors']), len(t['type']),
                       len(t['radius']), len(t['spacing']), ', '.join(t['fonts'])))
    for r in report:
        print('%-22s colors=%3d groups=%2d type=%2d radius=%2d spacing=%2d  %s' % r)


if __name__ == '__main__':
    main()
