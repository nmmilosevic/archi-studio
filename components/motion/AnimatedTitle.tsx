"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { clsx } from "clsx";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  delay?: number;
  id?: string;
}

export function AnimatedTitle({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  id,
}: AnimatedTitleProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  };

  const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE,
      },
    },
  };

  if (reduced) {
    return <Tag className={className} id={id}>{text}</Tag>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Tag className={clsx("flex flex-wrap", className)} id={id}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
