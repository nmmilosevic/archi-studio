"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";

interface FinalCtaSectionProps {
  locale: string;
}

const finalCtaCopy = {
  en: {
    title: "Want your studio to feel more premium online?",
    body: "Send your current website. We’ll tell you what should change first.",
    button: "Request a quick audit",
  },
  fr: {
    title: "Votre studio doit paraître plus premium en ligne.",
    body: "Envoyez votre site actuel. Nous vous dirons ce qui doit changer en premier.",
    button: "Demander un audit rapide",
  },
  es: {
    title: "¿Quieres que tu estudio se vea más premium online?",
    body: "Envíanos tu web actual. Te diremos qué deberías cambiar primero.",
    button: "Solicitar una auditoría rápida",
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
    <section className="relative overflow-hidden bg-[#151311] py-20 text-inverted md:py-24" aria-labelledby="final-heading">
      <Container>
        <div className="relative z-10 max-w-[780px]">
          <div>
            <AnimatedTitle
              text={c.title}
              as="h2"
              id="final-heading"
              className="mb-5 max-w-[16ch] font-heading text-[clamp(32px,4.4vw,52px)] leading-[1.03] tracking-[-0.018em] text-inverted"
            />
            <AnimatedText className="text-support max-w-[640px] text-inverted/64" delay={0.12}>
              {c.body}
            </AnimatedText>
            <AnimatedText as="div" delay={0.2}>
              <div className="mt-7">
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href={`/${locale}/contact`}>{c.button}</Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </Container>
    </section>
  );
}
