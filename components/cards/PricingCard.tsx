"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  desc: string;
  includes: string[];
  notIncluded?: string[];
  cta: string;
  featured?: boolean;
  locale: string;
  index?: number;
}

export function PricingCard({
  name,
  price,
  desc,
  includes,
  notIncluded,
  cta,
  featured = false,
  locale,
  index = 0,
}: PricingCardProps) {
  const reduced = useReducedMotion();

  const content = (
    <div
      className={clsx(
        "relative flex flex-col h-full p-7 md:p-9 border transition-all duration-500",
        featured
          ? "border-bronze bg-offwhite"
          : "border-charcoal/10 bg-offwhite hover:border-bronze/40"
      )}
    >
      {featured && (
        <div className="absolute -top-3 left-8">
          <span className="inline-block bg-bronze text-inverted font-mono-label text-[10px] tracking-widest uppercase px-3 py-1">
            Most popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-[22px] font-semibold text-primary mb-1">
          {name}
        </h3>
        <div className="font-heading text-[40px] font-medium text-primary leading-tight mb-3">
          {price}
        </div>
        <p className="font-body text-[14px] text-muted leading-[1.65]">{desc}</p>
      </div>

      <div className="h-px bg-charcoal/10 mb-6" />

      {/* Includes */}
      <ul className="space-y-2.5 flex-1 mb-6">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check
              className="h-3.5 w-3.5 text-bronze flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="font-body text-[13px] text-muted">{item}</span>
          </li>
        ))}

        {notIncluded && notIncluded.length > 0 && (
          <>
            {notIncluded.map((item, i) => (
              <li key={`not-${i}`} className="flex items-start gap-2.5 opacity-40">
                <X
                  className="h-3.5 w-3.5 text-muted flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-body text-[13px] text-muted line-through">
                  {item}
                </span>
              </li>
            ))}
          </>
        )}
      </ul>

      {/* CTA */}
      <Button
        asChild
        variant={featured ? "secondary" : "outline"}
        className="w-full justify-center"
      >
        <Link href={`/${locale}/contact`}>{cta}</Link>
      </Button>
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
      className="h-full"
    >
      {content}
    </motion.div>
  );
}
