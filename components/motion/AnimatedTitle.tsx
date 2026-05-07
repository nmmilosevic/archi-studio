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

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
        staggerChildren: 0.14,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 22, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.1,
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
      viewport={{ once: true, margin: "-80px" }}
    >
      <Tag className={clsx("flex flex-wrap", className)} id={id}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.24em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
