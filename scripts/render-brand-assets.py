"""Rasterize the site SVG mark into og/favicon/app icons."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
NAVY = (14, 31, 40)
GREEN = (52, 183, 67)
WHITE = (243, 247, 245)
LEFT = (45, 184, 90)
RIGHT = (22, 130, 80)
INNER = (20, 92, 72)

# Same polygons as src/components/Logo.tsx (viewBox 0 0 80 80)
LEFT_PTS = [(40, 6), (12, 70), (40, 70), (32, 48)]
RIGHT_PTS = [(40, 6), (68, 70), (40, 70), (48, 48)]
INNER_PTS = [(40, 30), (53, 70), (27, 70)]


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

    mark = draw_mark(168, pad_ratio=0.04, transparent=True)
    display = font(["segoeuib.ttf", "arialbd.ttf"], 118)
    sub = font(["segoeui.ttf", "arial.ttf"], 36)

    arc = "ARC"
    subtitle = "Athletic Recovery Clinic"
    scratch = ImageDraw.Draw(og)
    arc_bbox = scratch.textbbox((0, 0), arc, font=display)
    sub_bbox = scratch.textbbox((0, 0), subtitle, font=sub)
    arc_w, arc_h = arc_bbox[2] - arc_bbox[0], arc_bbox[3] - arc_bbox[1]
    sub_w = sub_bbox[2] - sub_bbox[0]

    gap = 22
    row_w = mark.width + gap + arc_w
    row_left = (w - row_w) // 2
    row_top = 196

    og.paste(mark, (row_left, row_top + (arc_h - mark.height) // 2 + 8), mark)
    scratch = ImageDraw.Draw(og)
    scratch.text(
        (row_left + mark.width + gap, row_top),
        arc,
        font=display,
        fill=GREEN,
    )
    scratch.text(
        ((w - sub_w) // 2, row_top + arc_h + 36),
        subtitle,
        font=sub,
        fill=WHITE,
    )
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
    for leftover in (
        brand / "logo.png",
        brand / "logo-crop.png",
        brand / "logo-transparent.png",
    ):
        leftover.unlink(missing_ok=True)
    if brand.exists() and not any(brand.iterdir()):
        brand.rmdir()

    print("wrote og + icons, removed old brand screenshots")


if __name__ == "__main__":
    main()
