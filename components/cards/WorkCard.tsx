"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

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

  const previews: Record<string, { src: string; label: string; position?: string }> = {
    "villa-architecture-studio": {
      src: assetPath("/images/redesign-preview.png"),
      label: "Homepage redesign preview",
    },
    "interior-design-marbella": {
      src: assetPath("/images/after.png"),
      label: "Editorial website direction",
      position: "top",
    },
    "renovation-studio-estepona": {
      src: assetPath("/images/before.png"),
      label: "Before-state website audit",
      position: "top",
    },
    "project-page-system": {
      src: assetPath("/images/heromock.png"),
      label: "Portfolio system preview",
      position: "top",
    },
  };
  const preview = previews[slug] ?? previews["villa-architecture-studio"];

  const content = (
    <Link
      href={`/${locale}/work/${slug}`}
      className="group block"
      aria-label={`View case study: ${title}`}
    >
      <div className="shadow-[0_20px_56px_rgb(10_10_10/0.09)] group-hover:shadow-[0_28px_72px_rgb(10_10_10/0.13)] transition-shadow duration-500">
        <div className={`relative overflow-hidden bg-stone ${tall ? "h-[480px] md:h-[560px]" : "h-[320px] md:h-[400px]"} transition-opacity duration-500 group-hover:opacity-95`}>
          <Image
            src={preview.src}
            alt={`${title} website redesign preview`}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            style={{ objectPosition: preview.position ?? "center" }}
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </div>
        <div className="h-px bg-bronze/35" aria-hidden="true" />
      </div>
      <p className="mt-3 font-mono-label text-[10px] tracking-[0.18em] uppercase text-muted/40">
        {preview.label}
      </p>

      <div className="pt-5 pb-7 border-b border-charcoal/10">
        <div className="flex items-center justify-between mb-3">
          <span className="section-label text-[14px] tracking-widest text-bronze">
            {category}
          </span>
          <span className="flex items-center gap-1 font-mono-label text-[14px] text-muted/60 tracking-wide">
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
