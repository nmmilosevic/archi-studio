"use client";

import { clsx } from "clsx";
import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  motionDistance,
  motionEase,
  motionViewport,
  uiReveal,
} from "@/lib/motion";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionCard({ children, className, delay = 0 }: MotionCardProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      variants={uiReveal}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={motionViewport}
      whileHover={{
        y: -motionDistance.control,
        transition: { type: "tween", duration: 0.3, ease: motionEase.out },
      }}
      className={clsx("cursor-default", className)}
    >
      {children}
    </m.div>
  );
}
