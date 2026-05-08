"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

interface ReframeLogoProps {
  className?: string;
  light?: boolean;
}

export function ReframeLogo({ className, light = false }: ReframeLogoProps) {
  return (
    <Image
      src={assetPath("/ref26.svg")}
      alt=""
      aria-hidden
      width={113}
      height={44}
      className={clsx(
        "block h-8 w-[113px] object-contain",
        light && "invert brightness-0",
        className
      )}
      priority
    />
  );
}
