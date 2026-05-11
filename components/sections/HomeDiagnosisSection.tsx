"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/paths";

export type DiagnosisPoint = {
  title: string;
  description: string;
};

interface HomeDiagnosisSectionProps {
  locale: string;
  title: string;
  body: string;
  cta: string;
  points: readonly DiagnosisPoint[];
  floatCards: readonly DiagnosisPoint[];
  imageAlt: string;
  /** Warm beige (default) or charcoal for dark band. Layout unchanged. */
  variant?: "warm" | "charcoal";
}

export function HomeDiagnosisSection({
  locale,
  title,
  body,
  cta,
  points,
  floatCards,
  imageAlt,
  variant = "warm",
}: HomeDiagnosisSectionProps) {
  const isCharcoal = variant === "charcoal";

  return (
    <section
      id="website-review"
      className={clsx(
        "section-space",
        isCharcoal
          ? "border-t border-white/[0.08] bg-charcoal text-inverted max-md:!pt-[100px] max-md:!pb-[100px]"
          : "bg-[#e8e2da]"
      )}
      aria-labelledby="website-review-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="self-start">
            <AnimatedTitle
              text={title}
              as="h2"
              id="website-review-heading"
              className={clsx("text-section mb-6 max-w-[640px]", isCharcoal ? "text-inverted" : "text-primary")}
            />
            <AnimatedText
              className={clsx("text-support max-w-[520px]", isCharcoal ? "text-inverted/62" : "text-muted")}
              delay={0.1}
            >
              {body}
            </AnimatedText>
            <AnimatedText as="div" delay={0.2} className="mt-8">
              <Button
                asChild
                size="lg"
                variant={isCharcoal ? "outline" : "primary"}
                className={
                  isCharcoal
                    ? "!border-inverted/35 !bg-transparent !text-inverted hover:!border-inverted/55 hover:!bg-inverted/6 focus-visible:ring-offset-charcoal"
                    : undefined
                }
              >
                <Link href={`/${locale}/contact`}>{cta}</Link>
              </Button>
            </AnimatedText>

            <div className="mt-10 space-y-5">
              {points.map((point, index) => (
                <AnimatedText key={point.title} as="div" delay={0.24 + index * 0.06}>
                  <div
                    className={clsx(
                      "border-l pl-4",
                      isCharcoal ? "border-inverted/22" : "border-charcoal/18"
                    )}
                  >
                    <p className={clsx("text-[18px] font-medium", isCharcoal ? "text-inverted" : "text-primary")}>
                      {point.title}
                    </p>
                    <p className={clsx("mt-2 text-[15px] leading-relaxed", isCharcoal ? "text-inverted/58" : "text-muted")}>
                      {point.description}
                    </p>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>

          <motion.div
            className="relative h-[430px] sm:h-[520px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute right-0 top-1/2 w-[88%] -translate-y-1/2 overflow-hidden rounded-[16px]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={assetPath("/images/imagesection.png")}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
              </div>
            </div>

            {floatCards[0] ? (
            <div
              className={clsx(
                "absolute left-0 top-[16%] w-[68%] rounded-[14px] p-4 shadow-[0_18px_44px_rgb(20_16_12/0.1)]",
                isCharcoal
                  ? "border border-white/12 bg-charcoal/85 text-inverted backdrop-blur-sm"
                  : "border border-charcoal/14 bg-offwhite/95"
              )}
            >
              <p className={clsx("text-[13px] font-medium", isCharcoal ? "text-inverted" : "text-primary")}>
                {floatCards[0].title}
              </p>
              <p className={clsx("mt-1 text-[13px] leading-relaxed", isCharcoal ? "text-inverted/65" : "text-muted")}>
                {floatCards[0].description}
              </p>
            </div>
            ) : null}
            {floatCards[1] ? (
            <div
              className={clsx(
                "absolute left-[9%] top-[47%] w-[66%] rounded-[14px] p-4 shadow-[0_18px_44px_rgb(20_16_12/0.1)]",
                isCharcoal
                  ? "border border-white/12 bg-charcoal/85 text-inverted backdrop-blur-sm"
                  : "border border-charcoal/14 bg-offwhite/95"
              )}
            >
              <p className={clsx("text-[13px] font-medium", isCharcoal ? "text-inverted" : "text-primary")}>
                {floatCards[1].title}
              </p>
              <p className={clsx("mt-1 text-[13px] leading-relaxed", isCharcoal ? "text-inverted/65" : "text-muted")}>
                {floatCards[1].description}
              </p>
            </div>
            ) : null}
            {floatCards[2] ? (
            <div
              className={clsx(
                "absolute right-[6%] bottom-[4%] w-[62%] rounded-[14px] p-4 shadow-[0_18px_44px_rgb(20_16_12/0.1)]",
                isCharcoal
                  ? "border border-white/12 bg-charcoal/85 text-inverted backdrop-blur-sm"
                  : "border border-charcoal/14 bg-offwhite/95"
              )}
            >
              <p className={clsx("text-[13px] font-medium", isCharcoal ? "text-inverted" : "text-primary")}>
                {floatCards[2].title}
              </p>
              <p className={clsx("mt-1 text-[13px] leading-relaxed", isCharcoal ? "text-inverted/65" : "text-muted")}>
                {floatCards[2].description}
              </p>
            </div>
            ) : null}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
