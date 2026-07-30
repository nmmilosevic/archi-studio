"use client";

import { AnimatePresence, m } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionDuration, motionEase } from "@/lib/motion";

interface LocaleContentTransitionProps {
  children: React.ReactNode;
  locale: string;
}

export function LocaleContentTransition({
  children,
  locale,
}: LocaleContentTransitionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <AnimatePresence initial={false} mode="popLayout">
        <m.div
          key={locale}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            type: "tween",
            duration: reducedMotion ? 0 : motionDuration.standard,
            ease: motionEase.opacity,
          }}
          className="w-full"
        >
          {children}
        </m.div>
      </AnimatePresence>
    </div>
  );
}
