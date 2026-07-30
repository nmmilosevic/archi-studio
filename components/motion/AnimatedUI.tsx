"use client";

import { m } from "framer-motion";
import { motionViewport, uiReveal } from "@/lib/motion";

interface AnimatedUIProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "li";
}

export function AnimatedUI({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: AnimatedUIProps) {
  return (
    <m.div
      variants={uiReveal}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={motionViewport}
    >
      <Tag className={className}>{children}</Tag>
    </m.div>
  );
}
