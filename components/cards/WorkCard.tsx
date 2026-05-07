"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

interface WorkCardProps {
  slug: string;
  title: string;
  category: string;
  location: string;
  locale: string;
  index?: number;
  tall?: boolean;
}

export function WorkCard({
  slug,
  title,
  category,
  location,
  locale,
  index = 0,
  tall = false,
}: WorkCardProps) {
  const reduced = useReducedMotion();

  /*
    Art direction: Architecture editorial photography — Mediterranean villa atmosphere,
    warm natural light, stone/linen/wood/glass/concrete surfaces,
    Architectural Digest aesthetic, muted beige and warm stone tones.
    Replace placeholder with: project-specific photography.
  */
  const labels: Record<string, string> = {
    "villa-architecture-studio": "Villa architecture — terrace, stone, pool",
    "interior-design-marbella": "Interior design — warm materials, natural light",
    "renovation-studio-estepona": "Villa renovation — before/after, coastal",
    "project-page-system": "Portfolio system — project grid, editorial layout",
  };

  const content = (
    <Link
      href={`/${locale}/work/${slug}`}
      className="group block"
      aria-label={`View case study: ${title}`}
    >
      <div className="overflow-hidden">
        <div
          className={`relative overflow-hidden ${tall ? "h-[480px] md:h-[560px]" : "h-[320px] md:h-[400px]"} group-hover:opacity-95 transition-all duration-500`}
        >
          {/* Placeholder image */}
          <div className="absolute inset-0 bg-[#cfc7ba] group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="absolute inset-0 flex items-end p-5">
              <span
                className="font-mono-label text-[10px] text-muted/50 tracking-widest uppercase"
                aria-hidden="true"
              >
                {labels[slug] ?? title}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-7 border-b border-charcoal/10">
        <div className="flex items-center justify-between mb-3">
          <span className="section-label text-[10px] tracking-widest text-bronze">
            {category}
          </span>
          <span className="flex items-center gap-1 font-mono-label text-[10px] text-muted/60 tracking-wide">
            <MapPin className="h-2.5 w-2.5" aria-hidden="true" />
            {location}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-[22px] md:text-[28px] font-semibold text-primary leading-[1.02] group-hover:text-bronze transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight
            className="h-5 w-5 text-muted/40 group-hover:text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
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
      transition={{ delay: index * 0.1 }}
    >
      {content}
    </motion.div>
  );
}
