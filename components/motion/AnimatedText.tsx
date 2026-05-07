"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "p" | "div" | "span";
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  duration = 0.75,
  as: Tag = "p",
}: AnimatedTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}
