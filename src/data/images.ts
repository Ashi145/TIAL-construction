import { IMAGE_MANIFEST, type ImageEntry, type ImageKey } from "./image-manifest";
import type { ResponsiveImage } from "./types";

const BASE = import.meta.env.BASE_URL;

function toResponsiveImage(entry: ImageEntry): ResponsiveImage {
  const variants = [...entry.variants].sort((a, b) => a.width - b.width);
  const largest = variants[variants.length - 1];
  return {
    src: `${BASE}images/${largest.file}`,
    srcSet: variants.map((variant) => `${BASE}images/${variant.file} ${variant.width}w`).join(", "),
    width: largest.width,
    height: largest.height,
    source: entry.source,
  };
}

/**
 * Every image on the site, as a `src` + `srcSet` pair so the browser can pick
 * a size. Built from the generated manifest in `public/images/` — run
 * `python3 scripts/build-images.py` to regenerate.
 */
export const IMAGES: Record<ImageKey, ResponsiveImage> = Object.fromEntries(
  Object.entries(IMAGE_MANIFEST).map(([key, entry]) => [key, toResponsiveImage(entry)])
) as Record<ImageKey, ResponsiveImage>;

export type { ImageKey };
