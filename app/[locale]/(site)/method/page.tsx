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
    title: "Method — How FORMA COSTA Builds Architecture Studio Websites",
    description:
      "Six clear steps from audit to launch. No surprises, no open-ended timelines. A structured process built for architecture and interior design studios.",
  });
}

export default async function MethodPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const method = {
    label: t("method.label"),
    heading: t("method.heading"),
    steps: Array.from({ length: 6 }, (_, i) => ({
      number: t(`method.steps.${i}.number`),
      title: t(`method.steps.${i}.title`),
      desc: t(`method.steps.${i}.desc`),
    })),
  };

  // Expanded step descriptions for the method page
  const expandedSteps = [
    {
      ...method.steps[0],
      detail: "We review your current website against a detailed checklist: visual credibility, mobile experience, navigation clarity, project presentation quality, contact flow, page speed, and local search visibility. You receive a written summary of what we find before any design work begins.",
    },
    {
      ...method.steps[1],
      detail: "Based on the audit, we define the pages needed, the visual direction, the content priorities, the SEO targets, and the conversion path. This is where we agree on scope, timeline, and deliverables before committing to design.",
    },
    {
      ...method.steps[2],
      detail: "We design in components: the typographic system, the color palette, the image layout approach, the navigation, the footer, the project page structure. Each component is reviewed before we move forward. Revision rounds are included.",
    },
    {
      ...method.steps[3],
      detail: "We build in Next.js with Tailwind CSS. The codebase is clean, fast, and maintainable. We include technical SEO from the start: proper heading structure, metadata, hreflang for multilingual, structured data, and image optimization.",
    },
    {
      ...method.steps[4],
      detail: "We connect your domain, configure your DNS, run Lighthouse performance checks, test across devices, review all metadata, submit the sitemap to Google Search Console, and prepare any outreach or launch materials you need.",
    },
    {
      ...method.steps[5],
      detail: "Optional but recommended. Monthly care plans cover hosting management, content edits, portfolio uploads, SEO improvements, and technical monitoring. You stay focused on architecture while the website stays sharp.",
    },
  ];

  return (
    <>
      <PageHero
        label={method.label}
        heading={method.heading}
        subtext="A clear structure that removes uncertainty from the process. You know exactly what happens at each stage, what is expected from you, and what you will have at the end."
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
                text="Structure creates better design."
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
                Most website projects fail because of unclear scope, poor
                communication, or a design process that starts too early. When
                the brief is vague, the design drifts. When there is no audit,
                problems get ignored. When there is no structure, timelines
                stretch.
              </AnimatedText>
              <AnimatedText
                className="font-body text-[16px] text-muted leading-relaxed"
                delay={0.18}
              >
                This six-step method exists to prevent all of that. The audit
                creates clarity. The direction phase aligns expectations. The
                design phase has clear revision points. The build phase delivers
                something testable. The launch phase is methodical. And the
                maintain phase keeps the investment working long-term.
              </AnimatedText>
              <AnimatedText
                className="font-body text-[16px] text-muted leading-relaxed"
                delay={0.26}
              >
                Architecture studios appreciate structure. A good brief produces
                better architecture. The same principle applies to digital work.
              </AnimatedText>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { figure: "48h", label: "Audit turnaround" },
                  { figure: "3–5w", label: "Typical build time" },
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
                text="Start with a free audit."
                as="h2"
                className="text-display text-inverted mb-2"
              />
              <AnimatedText
                className="font-body text-[14px] text-inverted/50"
                delay={0.1}
              >
                Step one of six. No commitment. Results in 48 hours.
              </AnimatedText>
            </div>
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/audit`}>Request your audit</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
