"""Make logos/{slug}.webp from the owner's logo pack (PNG_512_White, 512px squares).

Run from design-md/:  python3 _tools/build_logos.py <path to PNG_512_White>

Logos that are a colored square (an app icon) fill their whole tile: the icon is cut to its own
edge and the white corners/halo around it are painted with the icon's own edge color, so nothing
inside the icon is cropped. Other logos keep their white background.
"""
import glob, json, os, re, sys, unicodedata
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageStat

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KEEP = {'en-notion'}  # outlined logos that look wrong when filled
SOFT = {'en-wired'}  # blurry sources: a light sharpen helps until better files arrive
SIZE = 192


def norm(s):
    return re.sub(r'[\s().·]', '', unicodedata.normalize('NFC', s).lower())


def shape_mask(im):
    W = im.size[0]
    ink = ImageChops.difference(im, Image.new('RGB', im.size, (255, 255, 255))).convert('L').point(lambda v: 255 if v > 24 else 0)
    pad = Image.new('L', (W + 2, W + 2), 0); pad.paste(ink, (1, 1)); ImageDraw.floodfill(pad, (0, 0), 128)
    return pad.crop((1, 1, W + 1, W + 1)).point(lambda v: 0 if v == 128 else 255)


def edge_color(im, mask):
    """Most common color in a thin band just inside the icon's edge."""
    inner = mask.filter(ImageFilter.MinFilter(15))
    band = ImageChops.subtract(mask.filter(ImageFilter.MinFilter(5)), inner)
    px = [p for p, m in zip(im.get_flattened_data() if hasattr(im, 'get_flattened_data') else im.getdata(), band.get_flattened_data() if hasattr(band, 'get_flattened_data') else band.getdata()) if m]
    if not px:
        return None
    q = {}
    for r, g, b in px:
        k = (r // 8, g // 8, b // 8); q[k] = q.get(k, 0) + 1
    k = max(q, key=q.get)
    sel = [p for p in px if (p[0] // 8, p[1] // 8, p[2] // 8) == k]
    return tuple(sum(c[i] for c in sel) // len(sel) for i in range(3))


def fill_tile(im):
    W = im.size[0]
    m = shape_mask(im); bb = m.getbbox()
    if not bb:
        return None
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    fill = sum(m.crop(bb).histogram()[255:]) / (w * h)
    if not (w > 0.55 * W and h > 0.55 * W and abs(w - h) < 0.08 * W and (w < W - 8 or h < W - 8) and fill > 0.84):
        return None
    col = edge_color(im, m)
    if not col:
        return None
    side = min(max(w, h), W); cx, cy = (bb[0] + bb[2]) // 2, (bb[1] + bb[3]) // 2
    x0 = min(max(cx - side // 2, 0), W - side); y0 = min(max(cy - side // 2, 0), W - side)
    box = (x0, y0, x0 + side, y0 + side)  # stays inside the picture, so no black corners
    crop = im.crop(box); cm = m.crop(box).filter(ImageFilter.MinFilter(7)).filter(ImageFilter.GaussianBlur(1.2))
    return Image.composite(crop, Image.new('RGB', crop.size, col), cm)


def main(src):
    files = {norm(re.sub(r'^\d+_', '', os.path.basename(f)[:-4])): f for f in glob.glob(os.path.join(src, '*', '*.png'))}
    items = json.load(open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))['items']
    os.makedirs(os.path.join(ROOT, 'logos'), exist_ok=True)
    filled = []
    for it in items:
        im = Image.open(files[norm(it['name'])]).convert('RGB')
        out = None if it['slug'] in KEEP else fill_tile(im)
        if out is not None:
            filled.append(it['name'])
        out = (out or im).resize((SIZE, SIZE), Image.LANCZOS)
        if it['slug'] in SOFT:
            out = out.filter(ImageFilter.UnsharpMask(radius=2, percent=160, threshold=2))
        out.save(os.path.join(ROOT, 'logos', it['slug'].split('-', 1)[1] + '.webp'), 'WEBP', quality=92, method=6)
    print('filled', len(filled), filled)


if __name__ == '__main__':
    main(sys.argv[1])
