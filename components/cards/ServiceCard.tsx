"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  deliverables: string[];
  index?: number;
}

export function ServiceCard({
  title,
  desc,
  deliverables,
  index = 0,
}: ServiceCardProps) {
  const reduced = useReducedMotion();

  const content = (
    <div className="group border border-charcoal/10 bg-offwhite p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-bronze/40 sm:p-7 md:p-9">
      <h3 className="text-card-title mb-4 font-heading font-semibold text-primary group-hover:text-bronze transition-colors duration-300">
        {title}
      </h3>

      <p className="text-support font-body text-muted mb-6">
        {desc}
      </p>

      <div className="h-px bg-charcoal/10 mb-6" />

      <ul className="space-y-2">
        {deliverables.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check
              className="h-3.5 w-3.5 text-bronze flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="font-body text-[14px] leading-relaxed text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (reduced) {
    return content;
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08 }}
    >
      {content}
    </motion.div>
  );
}
