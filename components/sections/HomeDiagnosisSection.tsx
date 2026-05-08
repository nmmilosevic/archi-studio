"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/paths";

interface HomeDiagnosisSectionProps {
  locale: string;
  title: string;
  body: string;
  cta: string;
}

const diagnosisPoints = [
  {
    title: "Positioning",
    description: "Your studio value should be understood in seconds, not guessed after scrolling.",
  },
  {
    title: "Project presentation",
    description: "Case studies need clearer hierarchy so each project feels intentional and premium.",
  },
  {
    title: "Contact flow",
    description: "From first impression to enquiry, each step should reduce friction and build trust.",
  },
] as const;

export function HomeDiagnosisSection({ locale, title, body, cta }: HomeDiagnosisSectionProps) {
  return (
    <section
      id="website-review"
      className="section-space bg-[#e8e2da]"
      aria-labelledby="website-review-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="self-start">
            <AnimatedTitle
              text={title}
              as="h2"
              id="website-review-heading"
              className="text-section mb-6 max-w-[640px] text-primary"
            />
            <AnimatedText className="text-support max-w-[520px] text-muted" delay={0.1}>
              {body}
            </AnimatedText>
            <AnimatedText as="div" delay={0.2} className="mt-8">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>{cta}</Link>
              </Button>
            </AnimatedText>

            <div className="mt-10 space-y-5">
              {diagnosisPoints.map((point, index) => (
                <AnimatedText key={point.title} as="div" delay={0.24 + index * 0.06}>
                  <div className="border-l border-charcoal/18 pl-4">
                    <p className="text-[18px] font-medium text-primary">{point.title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{point.description}</p>
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
                  alt="Website audit visual composition"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
              </div>
            </div>

            <div className="absolute left-0 top-[16%] w-[68%] rounded-[14px] border border-charcoal/14 bg-offwhite/95 p-4 shadow-[0_18px_44px_rgb(20_16_12/0.1)]">
              <p className="text-[13px] font-medium text-primary">Positioning</p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">Clarify what your studio is known for.</p>
            </div>
            <div className="absolute left-[9%] top-[47%] w-[66%] rounded-[14px] border border-charcoal/14 bg-offwhite/95 p-4 shadow-[0_18px_44px_rgb(20_16_12/0.1)]">
              <p className="text-[13px] font-medium text-primary">Project presentation</p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">Improve hierarchy and reading rhythm.</p>
            </div>
            <div className="absolute right-[6%] bottom-[4%] w-[62%] rounded-[14px] border border-charcoal/14 bg-offwhite/95 p-4 shadow-[0_18px_44px_rgb(20_16_12/0.1)]">
              <p className="text-[13px] font-medium text-primary">Contact flow</p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">Reduce friction from interest to enquiry.</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
