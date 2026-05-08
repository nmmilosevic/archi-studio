"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Step {
  title: string;
  desc: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? undefined : stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="relative"
    >
      <div className="space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={`${step.title}-${index}`}
            variants={reduced ? undefined : fadeUp}
            className="relative py-8 border-b border-charcoal/8 last:border-0 group"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-[22px] font-medium text-primary mb-2 group-hover:text-bronze transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-body text-[15px] text-muted leading-relaxed max-w-2xl">
                {step.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
