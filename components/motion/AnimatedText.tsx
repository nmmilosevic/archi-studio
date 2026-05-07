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

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function AnimatedText({
  children,
  className,
  delay = 0,
  duration = 1.0,
  as: Tag = "p",
}: AnimatedTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
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
