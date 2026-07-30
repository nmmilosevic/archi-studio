"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
import { RevealMedia } from "@/components/motion/RevealMedia";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motionViewport, uiReveal } from "@/lib/motion";
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
  floatCards: readonly DiagnosisPoint[];
  imageAlt: string;
  /** Warm beige (default) or charcoal for dark band. */
  variant?: "warm" | "charcoal";
}

const bubblePositions = [
  "left-0 top-[13%] w-[76%] sm:w-[68%] lg:-left-[2%]",
  "left-[7%] top-[46%] w-[78%] sm:w-[66%] lg:left-[4%]",
  "right-0 bottom-[4%] w-[74%] sm:w-[62%] lg:-right-[1%]",
] as const;

export function HomeDiagnosisSection({
  locale,
  title,
  body,
  cta,
  floatCards,
  imageAlt,
  variant = "warm",
}: HomeDiagnosisSectionProps) {
  const isCharcoal = variant === "charcoal";
  const reducedMotion = useReducedMotion();

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
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[minmax(300px,0.64fr)_minmax(0,1.36fr)] lg:items-center lg:gap-[clamp(56px,6vw,104px)]">
          <div className="self-center lg:pb-8">
            <AnimatedTitle
              text={title}
              as="h2"
              id="website-review-heading"
              className={clsx(
                "mb-7 max-w-[560px] font-heading text-[clamp(40px,4vw,58px)] font-medium leading-[0.98] tracking-[-0.02em]",
                isCharcoal ? "text-inverted" : "text-primary"
              )}
            />
            <AnimatedText
              className={clsx(
                "max-w-[460px] font-body text-[16px] leading-[1.7] md:text-[18px]",
                isCharcoal ? "text-inverted/62" : "text-muted"
              )}
              delay={0.1}
            >
              {body}
            </AnimatedText>
            <AnimatedUI delay={0.2} className="mt-9">
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
            </AnimatedUI>
          </div>

          <div className="relative h-[420px] sm:h-[560px] lg:h-[clamp(600px,48vw,700px)]">
            <RevealMedia
              className="absolute right-0 top-1/2 w-full -translate-y-1/2 rounded-[14px]"
              delay={0.08}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={assetPath("/images/imagesection.png")}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1536px) 860px, (min-width: 1024px) 62vw, 100vw"
                />
              </div>
            </RevealMedia>

            {floatCards.slice(0, 3).map((card, index) => (
              <m.div
                key={card.title}
                variants={reducedMotion ? undefined : uiReveal}
                custom={0.14 + index * 0.08}
                initial={reducedMotion ? undefined : "hidden"}
                whileInView={reducedMotion ? undefined : "show"}
                viewport={motionViewport}
                className={clsx(
                  "absolute rounded-[14px] p-4 shadow-[0_18px_44px_rgb(20_16_12/0.1)]",
                  bubblePositions[index],
                  isCharcoal
                    ? "border border-white/12 bg-charcoal/85 text-inverted backdrop-blur-sm"
                    : "border border-charcoal/14 bg-offwhite/95"
                )}
              >
                <p className={clsx("text-[13px] font-medium", isCharcoal ? "text-inverted" : "text-primary")}>
                  {card.title}
                </p>
                <p className={clsx("mt-1 text-[13px] leading-relaxed", isCharcoal ? "text-inverted/65" : "text-muted")}>
                  {card.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
