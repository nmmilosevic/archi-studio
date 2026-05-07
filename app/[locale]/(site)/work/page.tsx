import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { WorkCard } from "@/components/cards/WorkCard";
import { Container } from "@/components/ui/Container";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
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
        subtext="Website redesigns for architecture and interior design studios. Each project focuses on first impression, portfolio clarity, and mobile experience — making the work easier to understand and trust online."
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
            <AnimatedTitle
              text="Websites that match the quality of the work."
              as="h2"
              id="work-cta-heading"
              className="text-display text-primary mb-5"
            />
            <AnimatedText
              className="font-body text-[16px] text-muted leading-relaxed mb-8 max-w-[500px]"
              delay={0.1}
            >
              Send your website URL for a free review. We look at first impression, portfolio clarity, and mobile experience — and show you what a better version looks like.
            </AnimatedText>
            <AnimatedText delay={0.2} as="div">
              <div className="flex flex-wrap gap-4">
                <Button asChild size="md">
                  <Link href={`/${locale}/audit`}>Get a free website review</Link>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link href={`/${locale}/contact`}>Get in touch</Link>
                </Button>
              </div>
              <p className="mt-4 font-body text-[13px] text-muted/45">
                Free review · No commitment · Response within 48 hours
              </p>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
