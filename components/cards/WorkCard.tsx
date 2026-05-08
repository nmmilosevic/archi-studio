"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/paths";
import { caseStudyHeroAspectClass } from "@/lib/workScreenAspect";

interface WorkCardProps {
  slug: string;
  title: string;
  location?: string;
  result?: string;
  /** Same asset as case-study hero (`heroDesktop` from work content). */
  previewSrc: string;
  locale: string;
  index?: number;
}

export function WorkCard({
  slug,
  title,
  result = "Clearer presentation, stronger mobile experience, and a calmer path to enquiry.",
  previewSrc,
  locale,
  index = 0,
}: WorkCardProps) {
  const reduced = useReducedMotion();
  const previewSrcResolved = assetPath(previewSrc);
  const aspectClass = caseStudyHeroAspectClass(previewSrc);

  const content = (
    <Link
      href={`/${locale}/work/${slug}`}
      className="group block cursor-pointer"
      aria-label={`View case study: ${title}`}
    >
      <div className="relative">
        <div
          className={clsx(
            "relative w-full overflow-hidden bg-stone",
            aspectClass
          )}
        >
          <Image
            src={previewSrcResolved}
            alt={`${title} website redesign preview`}
            fill
            quality={92}
            className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.024]"
            sizes="(min-width: 1440px) 520px, (min-width: 1024px) 38vw, (min-width: 768px) 46vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-95" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-24px_54px_rgb(0_0_0/0.08)] transition-shadow duration-500 group-hover:shadow-[inset_0_-30px_62px_rgb(0_0_0/0.12)]" />
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
