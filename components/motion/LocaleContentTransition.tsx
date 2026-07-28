"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LocaleContentTransitionProps {
  children: React.ReactNode;
  locale: string;
}

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function LocaleContentTransition({
  children,
  locale,
}: LocaleContentTransitionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={locale}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: reducedMotion ? 0 : 0.22,
            ease: EASE_OUT,
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
