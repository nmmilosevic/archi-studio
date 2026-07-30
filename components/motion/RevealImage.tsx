"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { RevealMedia } from "@/components/motion/RevealMedia";

interface RevealImageProps {
  src?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
  fill?: boolean;
  delay?: number;
}

export function RevealImage({
  src,
  alt,
  className,
  wrapperClassName,
  priority = false,
  aspectRatio = "aspect-[4/3]",
  fill = false,
  delay = 0,
}: RevealImageProps) {
  if (!src) {
    return null;
  }

  return (
    <RevealMedia
      className={clsx(
        "relative overflow-hidden",
        !fill && aspectRatio,
        wrapperClassName
      )}
      delay={delay}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        className={clsx("object-cover", className)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </RevealMedia>
  );
}
