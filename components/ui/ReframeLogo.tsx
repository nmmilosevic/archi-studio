"use client";

import { clsx } from "clsx";
import { assetPath } from "@/lib/paths";

interface ReframeLogoProps {
  className?: string;
}

export function ReframeLogo({ className }: ReframeLogoProps) {
  return (
    <span
      className={clsx("block h-7 w-[98px] bg-current", className)}
      style={{
        WebkitMaskImage: `url(${assetPath("/logoreframe.svg")})`,
        maskImage: `url(${assetPath("/logoreframe.svg")})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}
