"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Step {
  number: string;
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
      {/* Bronze vertical line */}
      <div
        className="absolute left-[52px] top-8 bottom-8 w-px bg-bronze/20 hidden md:block"
        aria-hidden="true"
      />

      <div className="space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={reduced ? undefined : fadeUp}
            className="relative flex gap-8 md:gap-12 py-8 border-b border-charcoal/8 last:border-0 group"
          >
            {/* Step number */}
            <div className="flex-shrink-0 w-[72px] flex items-start justify-center pt-1">
              <div className="relative">
                <span
                  className="font-mono-label text-[11px] tracking-widest text-bronze block text-center"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className="w-2 h-2 rounded-full bg-bronze/40 mx-auto mt-2 group-hover:bg-bronze transition-colors duration-300" aria-hidden="true" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-heading text-[22px] font-medium text-primary mb-2 group-hover:text-bronze transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-body text-[15px] text-muted leading-relaxed max-w-2xl">
                {step.desc}
              </p>
            </div>

            {/* Index number large */}
            <div className="hidden lg:block absolute right-0 top-6 font-heading text-[80px] font-light text-charcoal/[0.03] select-none leading-none" aria-hidden="true">
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
