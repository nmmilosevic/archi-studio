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
  const imageHeightClass = tall
    ? "h-[360px] sm:h-[430px] md:h-[520px]"
    : "h-[280px] sm:h-[330px] md:h-[400px]";

  const content = (
    <Link
      href={`/${locale}/work/${slug}`}
      className="group block cursor-pointer"
      aria-label={`View case study: ${title}`}
    >
      <div className="relative">
        <div className={`relative overflow-hidden bg-stone ${imageHeightClass}`}>
          <Image
            src={preview.src}
            alt={`${title} website redesign preview`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.024]"
            style={{ objectPosition: preview.position ?? "center" }}
            sizes="(min-width: 1440px) 420px, (min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-95" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-24px_54px_rgb(0_0_0/0.08)] transition-shadow duration-500 group-hover:shadow-[inset_0_-30px_62px_rgb(0_0_0/0.12)]" />
          <span className="absolute left-4 top-4 z-10 text-[12px] font-medium tracking-[0.02em] text-[#f3eee7]/72 md:left-5 md:top-5">
            {category}
          </span>
        </div>
      </div>
      <div className="pt-6 pb-9 md:pt-7 md:pb-12">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-card-title font-heading font-medium text-primary transition-all duration-350 ease-out group-hover:translate-y-[1px] group-hover:text-bronze">
            {title}
          </h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 flex-shrink-0 text-muted/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bronze"
            aria-hidden="true"
          />
        </div>
        <p className="text-support mt-4 max-w-[520px] text-muted/78">
          {result}
        </p>
        <p className="mt-6 text-[14px] font-medium tracking-[0.02em] text-primary/84">
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
