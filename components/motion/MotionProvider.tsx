"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { defaultTransition } from "@/lib/motion";

interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={defaultTransition}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

