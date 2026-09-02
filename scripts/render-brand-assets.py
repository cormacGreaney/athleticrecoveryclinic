"""Rasterize the site SVG mark into og/favicon/app icons."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
NAVY = (14, 31, 40)
GREEN = (52, 183, 67)
WHITE = (243, 247, 245)
LEFT = (28, 125, 115)
RIGHT = (45, 184, 90)
INNER = (14, 31, 40)

# Same evenodd shape as src/components/Logo.tsx (viewBox 0 0 80 80)
LEFT_PTS = [(58, 5), (4, 74), (34, 74), (50, 33)]
RIGHT_PTS = [(58, 5), (76, 74), (60, 74), (50, 33)]
INNER_PTS = []


def scale_pts(pts, size, pad):
    usable = size - pad * 2
    s = usable / 80
    return [(pad + x * s, pad + y * s) for x, y in pts]


def draw_mark(size, bg=NAVY, pad_ratio=0.16, transparent=False):
    img = Image.new(
        "RGBA",
        (size, size),
        (0, 0, 0, 0) if transparent else bg + (255,),
    )
    draw = ImageDraw.Draw(img)
    pad = size * pad_ratio
    draw.polygon(scale_pts(LEFT_PTS, size, pad), fill=LEFT)
    draw.polygon(scale_pts(RIGHT_PTS, size, pad), fill=RIGHT)
    if INNER_PTS:
        draw.polygon(scale_pts(INNER_PTS, size, pad), fill=INNER)
    return img


def rounded_icon(size, radius_ratio=0.22):
    mark = draw_mark(size, pad_ratio=0.18)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, size - 1, size - 1),
        radius=int(size * radius_ratio),
        fill=255,
    )
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(mark, mask=mask)
    return out.convert("RGB")


def font(path_names, size):
    for name in path_names:
        path = Path(r"C:\Windows\Fonts") / name
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def make_og():
    w, h = 1200, 630
    og = Image.new("RGB", (w, h), NAVY)

    glow = Image.new("L", (w, h), 0)
    ImageDraw.Draw(glow).ellipse((260, -120, 940, 380), fill=70)
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    green = Image.new("RGB", (w, h), GREEN)
    og = Image.composite(green, og, glow)
    og = Image.blend(Image.new("RGB", (w, h), NAVY), og, 0.16)

    lockup = Image.open(PUBLIC / "logo-lockup.png").convert("RGBA")
    target_w = 780
    ratio = target_w / lockup.width
    lockup = lockup.resize(
        (target_w, int(lockup.height * ratio)),
        Image.Resampling.LANCZOS,
    )
    x = (w - lockup.width) // 2
    y = (h - lockup.height) // 2
    og.paste(lockup, (x, y), lockup)
    og.save(PUBLIC / "og.png", "PNG", optimize=True)


def main():
    make_og()
    for size, name in (
        (32, "favicon-32.png"),
        (48, "favicon-48.png"),
        (180, "apple-touch-icon.png"),
        (192, "icon-192.png"),
        (512, "icon-512.png"),
    ):
        rounded_icon(size).save(PUBLIC / name, "PNG", optimize=True)

    brand = PUBLIC / "brand"
    for leftover in brand.glob("*") if brand.exists() else []:
        leftover.unlink()
    if brand.exists():
        brand.rmdir()

    print("wrote og + icons, removed old brand screenshots")


if __name__ == "__main__":
    main()
