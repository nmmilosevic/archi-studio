"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { clsx } from "clsx";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface RevealImageProps {
  src?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
  fill?: boolean;
}

export function RevealImage({
  src,
  alt,
  className,
  wrapperClassName,
  priority = false,
  aspectRatio = "aspect-[4/3]",
  fill = false,
}: RevealImageProps) {
  const reduced = useReducedMotion();

  const isPlaceholder = !src || src.startsWith("/images/");

  if (isPlaceholder) {
    return (
      <div
        className={clsx(
          "overflow-hidden relative",
          !fill && aspectRatio,
          wrapperClassName
        )}
      >
        {reduced ? (
          <div className={clsx(
            "w-full h-full bg-[#cfc7ba]",
            fill ? "absolute inset-0" : "min-h-[200px]"
          )} />
        ) : (
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className={clsx("w-full h-full", fill ? "absolute inset-0" : "")}
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className={clsx(
                "w-full bg-[#cfc7ba]",
                fill ? "absolute inset-0 h-full" : "h-full min-h-[200px]"
              )}
            />
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "overflow-hidden relative",
        !fill && aspectRatio,
        wrapperClassName
      )}
    >
      {reduced ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          className={clsx("object-cover", className)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="w-full h-full"
        >
          <motion.div
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
              fill={fill}
              priority={priority}
              className={clsx("object-cover", className)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
