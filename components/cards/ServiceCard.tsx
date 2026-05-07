"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Check } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  desc: string;
  deliverables: string[];
  index?: number;
}

export function ServiceCard({
  number,
  title,
  desc,
  deliverables,
  index = 0,
}: ServiceCardProps) {
  const reduced = useReducedMotion();

  const content = (
    <div className="group border border-charcoal/10 bg-offwhite p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-bronze/40 md:p-9">
      {/* Number */}
      <span className="font-mono-label text-[11px] tracking-widest text-bronze mb-6 block">
        {number}
      </span>

      {/* Title */}
      <h3 className="font-heading text-[22px] md:text-[28px] font-semibold text-primary mb-4 leading-[1.02] group-hover:text-bronze transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-[15px] text-muted leading-[1.65] mb-6">
        {desc}
      </p>

      {/* Divider */}
      <div className="h-px bg-charcoal/10 mb-6" />

      {/* Deliverables */}
      <ul className="space-y-2">
        {deliverables.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check
              className="h-3.5 w-3.5 text-bronze flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="font-body text-[13px] text-muted">{item}</span>
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
