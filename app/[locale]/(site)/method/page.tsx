import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/method",
    title: "Method — Redesign Previews for Architecture Studios",
    description:
      "A redesign-first method for architecture and interior design studio websites on the Costa del Sol.",
  });
}

export default async function MethodPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const method = {
    label: t("method.label"),
    heading: "The preview comes first.",
    steps: Array.from({ length: 4 }, (_, i) => ({
      number: t(`method.steps.${i}.number`),
      title: t(`method.steps.${i}.title`),
      desc: t(`method.steps.${i}.desc`),
    })),
  };

  const expandedSteps = [
    {
      ...method.steps[0],
      detail: "I review the current website and redesign a focused part of it: usually the homepage, hero area, or a project page. The goal is to make the first impression visible before a proposal exists.",
    },
    {
      ...method.steps[1],
      detail: "You receive a private Vercel preview and review the direction in the browser. This replaces abstract pitch decks with something concrete: typography, image hierarchy, spacing, motion, and mobile behavior.",
    },
    {
      ...method.steps[2],
      detail: "If the preview feels aligned with your studio, I turn the direction into a complete website system: responsive layouts, portfolio structure, multilingual-ready setup, technical SEO, and deployment preparation.",
    },
    {
      ...method.steps[3],
      detail: "The site is deployed, tested across devices, connected to the domain, and polished for launch. Optional Website Care keeps the system maintained after it goes live.",
    },
  ];

  return (
    <>
      <PageHero
        label={method.label}
        heading={method.heading}
        subtext="A quieter process for studios that want to see the design direction before committing to the full website."
      />

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-offwhite" aria-label="Process steps">
        <Container>
          <ProcessTimeline steps={expandedSteps} />
        </Container>
      </section>

      {/* Why this approach */}
      <section className="py-24 md:py-32 bg-stone" aria-labelledby="why-approach-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedTitle
                text="Proof creates a better conversation."
                as="h2"
                id="why-approach-heading"
                className="text-section text-primary"
              />
            </div>
            <div className="space-y-8">
              <AnimatedText
                className="font-body text-[16px] text-muted leading-relaxed"
                delay={0.1}
              >
                Architecture studios are visual businesses. A long proposal can
                explain intention, but a live preview shows taste, hierarchy,
                pace, and restraint immediately.
              </AnimatedText>
              <AnimatedText
                className="font-body text-[16px] text-muted leading-relaxed"
                delay={0.18}
              >
                The redesign-first method is intentionally direct. It gives the
                studio owner a real page to judge before the project becomes a
                commitment.
              </AnimatedText>
              <AnimatedText
                className="font-body text-[16px] text-muted leading-relaxed"
                delay={0.26}
              >
                From there, the full build becomes clearer: fewer assumptions,
                sharper decisions, and a website that feels closer to the
                studio&apos;s actual work.
              </AnimatedText>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { figure: "01", label: "Preview first" },
                  { figure: "2–4w", label: "Typical build" },
                  { figure: "3", label: "Locales supported" },
                ].map((stat) => (
                  <div key={stat.figure} className="text-center">
                    <div className="font-heading text-[36px] font-light text-bronze leading-none mb-1">
                      {stat.figure}
                    </div>
                    <div className="font-mono-label text-[10px] tracking-widest text-muted/60 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <AnimatedTitle
                text="Start with a redesign review."
                as="h2"
                className="text-display text-inverted mb-2"
              />
              <AnimatedText
                className="font-body text-[14px] text-inverted/50"
                delay={0.1}
              >
                Send the current website and I will review the first impression.
              </AnimatedText>
            </div>
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/audit`}>Request your review</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
