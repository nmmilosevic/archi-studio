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
      className="group block card-hover cursor-pointer"
      aria-label={`View case study: ${title}`}
    >
      <div className="relative transition-shadow duration-200 ease-out group-hover:shadow-[0_26px_56px_rgb(15_12_10/0.12)]">
        <div className={`relative overflow-hidden bg-stone ${tall ? "h-[390px] sm:h-[450px] md:h-[540px]" : "h-[270px] sm:h-[330px] md:h-[410px]"}`}>
          <Image
            src={preview.src}
            alt={`${title} website redesign preview`}
            fill
            className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: preview.position ?? "center" }}
            sizes="(min-width: 1440px) 420px, (min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 z-10 text-[13px] font-medium text-[#f3eee7]/84 md:left-5 md:top-5">
            {category}
          </span>
        </div>
      </div>
      <div className="border-b border-charcoal/10 pt-6 pb-8 md:pt-8 md:pb-11">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-card-title font-heading font-semibold text-primary transition-all duration-200 ease-out group-hover:translate-y-[2px] group-hover:text-bronze">
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
        <p className="mt-7 text-[15px] font-medium text-primary/88">
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
