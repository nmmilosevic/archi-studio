import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { WorkCard } from "@/components/cards/WorkCard";
import { Container } from "@/components/ui/Container";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
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
    title: "Work — Website Redesign Studies for Architecture Studios",
    description:
      "Website redesign studies demonstrating how architecture and interior design studio websites can be repositioned, clarified, and made more credible.",
  });
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const workContent = content.work;

  const work = {
    label: workContent.label,
    heading: workContent.heading,
    disclaimer: workContent.disclaimer,
    items: workContent.items.map((item) => ({
      slug: item.slug,
      title: item.title,
      category: item.category,
      location: item.location,
    })),
  };

  return (
    <>
      <PageHero
        label={work.label}
        heading={work.heading}
        subtext="Website redesign studies for architecture and interior design studios. The focus is not the buildings; it is how the work is presented, understood, and trusted online."
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
              Make the website easier to believe.
            </AnimatedText>
            <AnimatedText
              className="font-body text-[16px] text-muted leading-relaxed mb-8"
              delay={0.1}
            >
              Send the current site. We will review the first impression,
              portfolio clarity, mobile presentation, and the clearest path toward a redesign preview.
            </AnimatedText>
            <AnimatedText delay={0.2} as="div">
              <div className="flex flex-wrap gap-4">
                <Button asChild size="md">
                  <Link href={`/${locale}/audit`}>Request a redesign review</Link>
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
