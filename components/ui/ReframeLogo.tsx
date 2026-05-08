"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

interface ReframeLogoProps {
  className?: string;
}

export function ReframeLogo({ className }: ReframeLogoProps) {
  return (
    <Image
      src={assetPath("/logoreframe-20260508.png")}
      alt=""
      aria-hidden
      width={98}
      height={28}
      className={clsx("block h-7 w-[98px] object-contain", className)}
      priority
    />
  );
}
