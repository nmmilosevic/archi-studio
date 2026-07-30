"use client";

import { clsx } from "clsx";
import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { mediaReveal, motionViewport } from "@/lib/motion";

interface RevealMediaProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealMedia({
  children,
  className,
  delay = 0,
}: RevealMediaProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <m.div
        variants={mediaReveal}
        custom={delay}
        initial="hidden"
        whileInView="show"
        viewport={motionViewport}
        className="h-full w-full"
      >
        {children}
      </m.div>
    </div>
  );
}
