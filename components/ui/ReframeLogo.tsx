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
      width={124}
      height={48}
      className={clsx(
        "block h-[35px] w-[124px] object-contain",
        light && "invert brightness-0",
        className
      )}
      priority
    />
  );
}
