"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
import { RevealMedia } from "@/components/motion/RevealMedia";
import { Button } from "@/components/ui/Button";
import websiteReviewProcess from "@/public/images/website-review-process.png";

interface FinalCtaSectionProps {
  locale: string;
}

const finalCtaCopy = {
  en: {
    title: "Want your studio to feel more premium online?",
    body: "Send your current website. We’ll tell you what should change first.",
    button: "Request a quick audit",
    imageAlt: "Architecture website review materials with plans and natural samples",
  },
  fr: {
    title: "Votre studio doit paraître plus premium en ligne.",
    body: "Envoyez votre site actuel. Nous vous dirons ce qui doit changer en premier.",
    button: "Demander un audit rapide",
    imageAlt: "Documents d’analyse web avec plans et échantillons naturels",
  },
  es: {
    title: "¿Quieres que tu estudio se vea más premium online?",
    body: "Envíanos tu web actual. Te diremos qué deberías cambiar primero.",
    button: "Solicitar una auditoría rápida",
    imageAlt: "Materiales de revisión web con planos y muestras naturales",
  },
} as const;

export function FinalCtaSection({ locale }: FinalCtaSectionProps) {
  const c = finalCtaCopy[locale as keyof typeof finalCtaCopy] ?? finalCtaCopy.en;
  const pathname = usePathname();
  const isContactPage = pathname === `/${locale}/contact`;

  if (isContactPage) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden bg-[#151311] text-inverted"
      aria-labelledby="final-heading"
    >
      <Container>
        <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] lg:gap-16">
          <div className="relative z-10 flex flex-col justify-center py-[clamp(72px,9vw,132px)] lg:pr-4">
            <AnimatedTitle
              text={c.title}
              as="h2"
              id="final-heading"
              className="max-w-[12ch] font-heading text-[clamp(42px,5.2vw,72px)] leading-[0.98] tracking-[-0.024em] text-inverted"
            />

            <div className="mt-[clamp(36px,5vw,64px)] max-w-[500px]">
              <AnimatedText
                className="max-w-[42ch] text-[17px] leading-relaxed text-inverted/62"
                delay={0.18}
              >
                {c.body}
              </AnimatedText>
              <AnimatedUI delay={0.28}>
                <div className="mt-8">
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Link href={`/${locale}/contact`}>{c.button}</Link>
                  </Button>
                </div>
              </AnimatedUI>
            </div>
          </div>

          <RevealMedia
            delay={0.1}
            className="min-h-[360px] border border-white/10 lg:my-10 lg:min-h-[540px]"
          >
            <div className="relative h-full min-h-[360px] lg:min-h-[540px]">
              <Image
                src={websiteReviewProcess}
                alt={c.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
                loading="eager"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#151311]/45 to-transparent lg:block"
                aria-hidden="true"
              />
            </div>
          </RevealMedia>
        </div>
      </Container>
    </section>
  );
}
