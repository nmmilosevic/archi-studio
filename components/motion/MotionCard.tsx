"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp } from "@/lib/motion";
import { clsx } from "clsx";

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
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      }}
      className={clsx("cursor-default", className)}
    >
      {children}
    </motion.div>
  );
}
