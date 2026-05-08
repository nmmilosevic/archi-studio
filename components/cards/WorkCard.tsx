"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

interface WorkCardProps {
  slug: string;
  title: string;
  category: string;
  location?: string;
  result?: string;
  locale: string;
  index?: number;
  tall?: boolean;
}

export function WorkCard({
  slug,
  title,
  category,
  result = "Clearer presentation, stronger mobile experience, and a calmer path to enquiry.",
  locale,
  index = 0,
  tall = false,
}: WorkCardProps) {
  const reduced = useReducedMotion();

  const previews: Record<string, { src: string; position?: string }> = {
    "villa-architecture-studio": {
      src: assetPath("/images/redesign-preview.png"),
    },
    "interior-design-marbella": {
      src: assetPath("/images/after.png"),
      position: "top",
    },
    "renovation-studio-estepona": {
      src: assetPath("/images/before.png"),
      position: "top",
    },
    "project-page-system": {
      src: assetPath("/images/heromock.png"),
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
        <div className={`relative overflow-hidden bg-stone ${tall ? "h-[380px] sm:h-[440px] md:h-[520px]" : "h-[260px] sm:h-[320px] md:h-[400px]"} transition-opacity duration-500 group-hover:opacity-95`}>
          <Image
            src={preview.src}
            alt={`${title} website redesign preview`}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
            style={{ objectPosition: preview.position ?? "center" }}
            sizes="(min-width: 1440px) 420px, (min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
          />
        </div>
        <div className="h-px bg-bronze/35" aria-hidden="true" />
      </div>
      <div className="border-b border-charcoal/10 pt-6 pb-8 md:pt-7 md:pb-10">
        <div className="mb-5">
          <span className="font-body text-[15px] text-bronze">
            {category}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-card-title font-heading font-semibold text-primary group-hover:text-bronze transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight
            className="h-5 w-5 text-muted/40 group-hover:text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1"
            aria-hidden="true"
          />
        </div>
        <p className="text-support mt-5 max-w-[520px] text-muted">
          {result}
        </p>
        <p className="mt-7 text-[15px] font-medium text-primary">
          View project
        </p>
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
