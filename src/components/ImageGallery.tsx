import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ResponsiveImage } from "../data/types";
import Image from "./Image";

const THUMBNAIL_SIZES = "(min-width: 640px) 33vw, 100vw";

export default function ImageGallery({ images, alt }: { images: ResponsiveImage[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowLeft") setOpenIndex((index) => (index === null ? 0 : (index - 1 + images.length) % images.length));
      if (event.key === "ArrowRight") setOpenIndex((index) => (index === null ? 0 : (index + 1) % images.length));
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View ${alt} photo ${index + 1}`}
            className="block h-48 w-full cursor-zoom-in overflow-hidden rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Image
              image={image}
              alt={`${alt} photo ${index + 1}`}
              sizes={THUMBNAIL_SIZES}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} photo viewer`}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close photo viewer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((index) => (index === null ? 0 : (index - 1 + images.length) % images.length));
                }}
                aria-label="Previous photo"
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((index) => (index === null ? 0 : (index + 1) % images.length));
                }}
                aria-label="Next photo"
                className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <figure className="max-w-full" onClick={(event) => event.stopPropagation()}>
            <Image
              image={images[openIndex]}
              alt={`${alt} photo ${openIndex + 1}`}
              sizes="100vw"
              priority
              className="max-h-[85vh] w-auto max-w-[92vw] object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-charcoal-300">
              {openIndex + 1} / {images.length}
            </figcaption>
          </figure>
        </div>
      )}

    </>
  );
}