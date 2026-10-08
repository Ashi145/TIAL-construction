#!/usr/bin/env python3
"""Build the site's optimized image set.

Downloads the stock photography used by the site (Pexels) and re-encodes the
supplied originals into responsive WebP variants under public/images/.

The generated files are committed to the repository so the site build does not
depend on this script. Re-run it only when the image set changes:

    python3 scripts/build-images.py

Outputs
    public/images/<key>-<width>.webp   served image variants
    src/data/image-manifest.ts         typed manifest consumed by src/data/images.ts
"""

from __future__ import annotations

import json
import shutil
import sys
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images"
ORIGINALS = ROOT / "assets" / "originals"
MANIFEST_TS = ROOT / "src" / "data" / "image-manifest.ts"
CACHE = Path("/tmp/tial-image-cache")

# WebP quality per variant width: large photos sit behind dark overlays or are
# shown at full-bleed, smaller ones are card thumbnails.
QUALITY = {480: 78, 640: 78, 960: 76, 1280: 74, 1600: 72, 1920: 65, 320: 90}
DEFAULT_QUALITY = 78

LANDSCAPE = (1600, 1067)  # same 3:2 centre crop the site has always used
WIDE = (1600, 900)  # 16:9 hero crop

# key -> (pexels photo id, file extension, crop, widths)
EXTERNAL = {
    "heroCrane": (15183903, "jpeg", WIDE, [640, 1280, 1600]),
    "siteCranes": (5505119, "jpeg", LANDSCAPE, [640, 1280]),
    "highRise": (37431888, "jpeg", LANDSCAPE, [640, 1280]),
    "concreteBuilding": (1463917, "jpeg", LANDSCAPE, [640, 1280]),
    "highRiseCloud": (9370034, "jpeg", LANDSCAPE, [640, 1280]),
    "workersDiscuss": (8961034, "jpeg", LANDSCAPE, [640, 1280]),
    "workersSmiling": (8961068, "jpeg", LANDSCAPE, [640, 1280]),
    "shipyardWorkers": (37663550, "jpeg", LANDSCAPE, [640, 1280]),
    "helmetCloseup": (34965713, "jpeg", LANDSCAPE, [640, 1280]),
    "engineersSite": (8961065, "jpeg", LANDSCAPE, [640, 1280]),
    "blueprintReview": (8961133, "jpeg", LANDSCAPE, [640, 1280]),
    "roadWorkCrew": (34053335, "jpeg", LANDSCAPE, [640, 1280]),
    "roadMachinery": (34338597, "jpeg", LANDSCAPE, [640, 1280]),
    "roadRoller": (12274274, "jpeg", LANDSCAPE, [640, 1280]),
    "roadHeavyMachinery": (17605960, "jpeg", LANDSCAPE, [640, 1280]),
    "loader": (416988, "jpeg", LANDSCAPE, [640, 1280]),
    "excavatorSand": (33870733, "jpeg", LANDSCAPE, [640, 1280]),
    "excavatorSite": (20296265, "jpeg", LANDSCAPE, [640, 1280]),
    "apartmentBalconies": (29174529, "jpeg", LANDSCAPE, [640, 1280]),
    "apartmentFacade": (27459248, "jpeg", LANDSCAPE, [640, 1280]),
    "apartmentLowAngle": (25033113, "jpeg", LANDSCAPE, [640, 1280]),
    "interiorRoom": (7028110, "jpeg", LANDSCAPE, [640, 1280]),
    "interiorPainting": (6473966, "jpeg", LANDSCAPE, [640, 1280]),
    "teamDiscussion": (6566819, "jpeg", LANDSCAPE, [640, 1280]),
    "aerialMarket": (31619956, "jpeg", LANDSCAPE, [640, 1280]),
}

# key -> (source file inside assets/originals/, widths)
LOCAL = {
    "building1": ("building1.jpeg", [480, 640, 960]),
    "building2": ("building2.jpeg", [480, 640, 960]),
    "building4": ("building4.jpeg", [640, 1280, 1920]),
    "building5": ("buiding5.jpeg", [640, 1280]),
    "homepageBuilding": ("homepage-building.jpeg", [480, 640, 960]),
    "emmanuelOdea": ("civil-engineer.jpeg", [480, 960]),
    "managingDirector": ("managing Director.png", [480, 960]),
    "generalSecretary": ("general-secretary.jpeg", [480, 840]),
    "projectManager": ("project-manager.jpeg", [480, 960]),
}

# Brand assets: fixed display sizes, not part of the responsive ladder.
LOGO_SOURCE = "TIAL LOGO-W.png"
LOGO_WIDTHS = [320]
FAVICON_SIZE = 180


def pexels_url(photo_id: int, ext: str, crop: tuple[int, int]) -> str:
    w, h = crop
    return (
        f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.{ext}"
        f"?auto=compress&cs=tinysrgb&fit=crop&w={w}&h={h}"
    )


def fetch(url: str, dest: Path) -> Path:
    if dest.exists() and dest.stat().st_size > 10_000:
        return dest
    dest.parent.mkdir(parents=True, exist_ok=True)
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (site image build)"})
    for attempt in (1, 2):
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                data = response.read()
            if len(data) < 10_000:
                raise IOError(f"unexpectedly small response ({len(data)} bytes)")
            dest.write_bytes(data)
            return dest
        except Exception as exc:  # noqa: BLE001 - report and retry once
            if attempt == 2:
                raise
            print(f"    retry after {exc}")
    raise RuntimeError("unreachable")


def slug(key: str) -> str:
    out = []
    for i, char in enumerate(key):
        if char.isupper() and i > 0:
            out.append("-")
        out.append(char.lower())
    return "".join(out)


def write_variant(image: Image.Image, path: Path, width: int) -> tuple[int, int, int]:
    height = max(1, round(image.height * width / image.width))
    resized = image.resize((width, height), Image.Resampling.LANCZOS)
    quality = QUALITY.get(width, DEFAULT_QUALITY)
    resized.save(path, "WEBP", quality=quality, method=6)
    return width, height, path.stat().st_size


def build(key: str, source_file: Path, widths: list[int], manifest: dict) -> None:
    with Image.open(source_file) as image:
        image = image.convert("RGB") if image.mode not in ("RGB", "RGBA") else image
        variants = []
        for width in widths:
            if width > image.width:
                continue
            path = OUT_DIR / f"{slug(key)}-{width}.webp"
            w, h, size = write_variant(image, path, width)
            variants.append({"file": path.name, "width": w, "height": h, "bytes": size})
            print(f"    {path.name:34} {w}x{h:<5} {size / 1024:7.1f} KB")
        if not variants:
            raise SystemExit(f"{key}: no variants generated from {source_file}")
        manifest[key] = {"variants": variants}


def main() -> None:
    if OUT_DIR.exists():
        shutil.rmtree(OUT_DIR)
    OUT_DIR.mkdir(parents=True)
    manifest: dict = {}

    print(f"Downloading {len(EXTERNAL)} stock photos…")
    for key, (photo_id, ext, crop, widths) in EXTERNAL.items():
        url = pexels_url(photo_id, ext, crop)
        master = CACHE / f"{slug(key)}-master.jpg"
        try:
            fetch(url, master)
        except Exception as exc:  # noqa: BLE001
            raise SystemExit(f"failed to download {key}: {exc}")
        build(key, master, widths, manifest)
        manifest[key]["source"] = url

    print(f"\nRe-encoding {len(LOCAL)} supplied originals…")
    for key, (name, widths) in LOCAL.items():
        source = ORIGINALS / name
        if not source.exists():
            raise SystemExit(f"missing original: {source}")
        build(key, source, widths, manifest)

    print("\nBrand assets…")
    logo_source = ORIGINALS / LOGO_SOURCE
    with Image.open(logo_source) as logo:
        logo = logo.convert("RGBA")
        for width in LOGO_WIDTHS:
            path = OUT_DIR / f"logo-{width}.webp"
            height = round(logo.height * width / logo.width)
            logo.resize((width, height), Image.Resampling.LANCZOS).save(
                path, "WEBP", quality=90, method=6
            )
            manifest["logo"] = {
                "variants": [
                    {"file": path.name, "width": width, "height": height, "bytes": path.stat().st_size}
                ]
            }
            print(f"    {path.name:34} {width}x{height:<5} {path.stat().st_size / 1024:7.1f} KB")

        favicon = logo.resize((FAVICON_SIZE, FAVICON_SIZE), Image.Resampling.LANCZOS)
        favicon_path = ROOT / "public" / "favicon.png"
        favicon.save(favicon_path, "PNG", optimize=True)
        print(f"    favicon.png{'':<24} {FAVICON_SIZE}x{FAVICON_SIZE:<5} {favicon_path.stat().st_size / 1024:7.1f} KB")

    keys = sorted(manifest)
    lines = [
        "// AUTO-GENERATED by scripts/build-images.py — do not edit by hand.",
        "",
        "export type ImageVariant = { file: string; width: number; height: number; bytes: number };",
        "export type ImageEntry = { variants: ImageVariant[]; source?: string };",
        "",
        f"export type ImageKey =",
        *[f"  | {json.dumps(key)}" for key in keys],
        ";",
        "",
        "export const IMAGE_MANIFEST: Record<ImageKey, ImageEntry> = {",
    ]
    for key in keys:
        lines.append(f"  {json.dumps(key)}: {json.dumps(manifest[key])},")
    lines.append("};")
    lines.append("")
    MANIFEST_TS.write_text("\n".join(lines), encoding="utf-8")

    total = sum(v["bytes"] for entry in manifest.values() for v in entry["variants"])
    count = sum(len(entry["variants"]) for entry in manifest.values())
    print(f"\n{count} files, {total / 1024 / 1024:.2f} MB in public/images/")
    print(f"manifest: {MANIFEST_TS.relative_to(ROOT)}")


if __name__ == "__main__":
    sys.exit(main())
