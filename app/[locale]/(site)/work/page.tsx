import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { WorkCard } from "@/components/cards/WorkCard";
import { Container } from "@/components/ui/Container";
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
    path: "/work",
    title: "Work — Concept Studies for Architecture Studio Websites",
    description:
      "Concept studies demonstrating the direction and execution available for architecture and interior design studio websites on the Costa del Sol.",
  });
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const work = {
    label: t("work.label"),
    heading: t("work.heading"),
    disclaimer: t("work.disclaimer"),
    items: Array.from({ length: 4 }, (_, i) => ({
      slug: t(`work.items.${i}.slug`),
      title: t(`work.items.${i}.title`),
      category: t(`work.items.${i}.category`),
      location: t(`work.items.${i}.location`),
    })),
  };

  return (
    <>
      <PageHero
        label={work.label}
        heading={work.heading}
        subtext={work.disclaimer}
      />

      <section className="py-16 md:py-24 bg-offwhite" aria-label="Work grid">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {work.items.map((item, i) => (
              <WorkCard
                key={item.slug}
                {...item}
                locale={locale}
                index={i}
                tall={i % 3 === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone" aria-labelledby="work-cta-heading">
        <Container>
          <div className="max-w-2xl">
            <AnimatedText
              className="font-heading text-[32px] md:text-[40px] font-light text-primary mb-4 leading-tight"
              as="p"
            >
              Ready to start your own project?
            </AnimatedText>
            <AnimatedText
              className="font-body text-[16px] text-muted leading-relaxed mb-8"
              delay={0.1}
            >
              Request a free audit of your current website or reach out directly
              to discuss your studio&apos;s digital presence.
            </AnimatedText>
            <AnimatedText delay={0.2} as="div">
              <div className="flex flex-wrap gap-4">
                <Button asChild size="md">
                  <Link href={`/${locale}/audit`}>Request a free audit</Link>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link href={`/${locale}/contact`}>Get in touch</Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
