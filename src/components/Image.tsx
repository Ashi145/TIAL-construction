import type { ResponsiveImage } from "../data/types";

type ImageProps = {
  image: ResponsiveImage;
  alt?: string;
  className?: string;
  /** Where the image sits in the layout — lets the browser pick a file size. */
  sizes?: string;
  /** Above-the-fold images load immediately; everything else loads lazily. */
  priority?: boolean;
};

export default function Image({ image, alt = "", className, sizes, priority = false }: ImageProps) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      draggable={false}
      className={className}
    />
  );
}
