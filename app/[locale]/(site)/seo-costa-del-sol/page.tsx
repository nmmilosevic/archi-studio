import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

const SEO_PAGE_KW: Record<string, string[]> = {
  en: [
    "local SEO architecture studio",
    "Marbella interior design SEO",
    "Costa del Sol Google visibility",
    "multilingual hreflang",
  ],
  es: [
    "SEO local arquitectura",
    "posicionamiento Marbella",
    "Costa del Sol estudios",
  ],
  fr: [
    "SEO local architecture",
    "référencement Costa del Sol",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/seo-costa-del-sol",
    title: "Local SEO for architecture & interior studios — Costa del Sol",
    description:
      "How studios get found by high-intent clients across Marbella, Estepona, Benahavís, Sotogrande, and Málaga—local landing pages, GBP, technical SEO, and multilingual structure.",
    keywords: SEO_PAGE_KW[locale] ?? SEO_PAGE_KW.en,
  });
}

export default async function SEOPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const seoContent = content.seo;

  const seo = {
    ...seoContent,
    cities: seoContent.cities.map((city) => ({ ...city })),
    sections: seoContent.sections.map((section) => ({ ...section })),
  };

  return (
    <>
      <PageHero
        heading={seo.heading}
        subtext={seo.sub}
      />

      {/* Intro editorial section */}
      <section className="section-space-tight bg-offwhite" aria-label="SEO introduction">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedText
                className="font-heading text-[clamp(24px,2.2vw,32px)] font-light text-primary leading-snug mb-6"
                as="p"
              >
                Architecture clients search with location intent. If your studio
                is not in those results, it does not exist for them.
              </AnimatedText>
              <AnimatedText
                className="text-support font-body text-muted mb-5"
                delay={0.1}
              >
                A British buyer researching architects for their villa
                renovation types &ldquo;architecture studio Marbella&rdquo;. A French
                couple relocating to Sotogrande searches &ldquo;interior designer
                Sotogrande&rdquo;. A Norwegian investor looking for project management
                types &ldquo;villa renovation Estepona&rdquo;.
              </AnimatedText>
              <AnimatedText
                className="text-support font-body text-muted"
                delay={0.15}
              >
                These searches happen every day. The studios that appear are not
                necessarily the best - they are the ones that have been found
                and trusted by Google for that location and service.
              </AnimatedText>
            </div>
            <div className="space-y-6">
              {[
                { stat: "Local search", desc: "Accounts for over 46% of all Google searches - and most of these carry high commercial intent." },
                { stat: "Multilingual buyers", desc: "British, German, French, and Scandinavian buyers make up the majority of villa and interior design clients on the Costa del Sol." },
                { stat: "Zero visibility", desc: "Most architecture studios in the region rank for their own name and nothing else - invisible to everyone who has not already heard of them." },
              ].map((item, i) => (
                <AnimatedText key={i} delay={i * 0.1} as="div">
                  <div className="p-6 bg-stone border border-charcoal/8">
                    <div className="font-heading text-[20px] font-medium text-bronze mb-2">
                      {item.stat}
                    </div>
                    <p className="font-body text-[14px] text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* City grid */}
      <section className="section-space-tight bg-stone" aria-labelledby="cities-heading">
        <Container>
          <h2
            id="cities-heading"
            className="font-heading text-[28px] md:text-[36px] font-light text-primary mb-12"
          >
            Architecture studios across the Costa del Sol
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/8">
            {seo.cities.map((city) => (
              <div
                key={city.name}
                className="bg-offwhite p-7 group hover:bg-stone transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin
                    className="h-3.5 w-3.5 text-bronze/60 group-hover:text-bronze transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-[20px] font-medium text-primary">
                    {city.name}
                  </h3>
                </div>
                <p className="font-body text-[14px] text-muted leading-relaxed">
                  {city.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Editorial SEO sections */}
      <section className="section-space-tight bg-offwhite" aria-label="SEO detail sections">
        <Container>
          <div className="max-w-3xl">
            {seo.sections.map((section, i) => (
              <article
                key={i}
                className="mb-16 last:mb-0 pb-16 last:pb-0 border-b last:border-0 border-charcoal/8"
              >
                <AnimatedTitle
                  text={section.title}
                  as="h2"
                  className="font-heading text-[24px] md:text-[30px] font-medium text-primary mb-5 leading-tight"
                  delay={0.05}
                />
                <AnimatedText
                  className="font-body text-[15px] md:text-[16px] text-muted leading-relaxed"
                  delay={0.1}
                >
                  {section.body}
                </AnimatedText>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* What we deliver */}
      <section className="section-space-tight bg-stone" aria-labelledby="seo-deliver-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                id="seo-deliver-heading"
                className="font-heading text-[28px] md:text-[36px] font-light text-primary mb-5 leading-tight"
              >
                What local SEO work looks like in practice
              </h2>
            </div>
            <div>
              <div className="space-y-4">
                {[
                  {
                    title: "Local landing pages",
                    desc: "A dedicated page for each city you serve: Marbella, Estepona, Benahavís, Sotogrande. Each page targets the specific searches happening in that market.",
                  },
                  {
                    title: "Project pages as content",
                    desc: "Each completed project is structured as indexable content with location, scope, materials, and photography - rankable assets, not just gallery entries.",
                  },
                  {
                    title: "Technical SEO",
                    desc: "Page speed, Core Web Vitals, clean URLs, canonical tags, structured data markup, and proper image optimization across all pages.",
                  },
                  {
                    title: "Hreflang for multilingual",
                    desc: "Proper language and region targeting so your English, Spanish, and French pages each reach the right audience in search results.",
                  },
                  {
                    title: "Google Business Profile",
                    desc: "Full setup and optimization of your Google Business presence: category, description, services, photos, and consistent NAP data.",
                  },
                ].map((item, i) => (
                  <AnimatedText key={i} delay={i * 0.08} as="div">
                    <div className="border-l border-bronze/40 pl-5 py-1">
                      <h3 className="font-heading text-[16px] font-medium text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-[14px] text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-space-tight bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <AnimatedTitle
                text="Want your studio to appear in these searches?"
                as="h2"
                className="text-display text-inverted mb-2"
              />
              <AnimatedText
                className="font-body text-[14px] text-inverted/50"
                delay={0.1}
              >
                Start with a clear website review.
              </AnimatedText>
            </div>
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/contact`}>Request a website review</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
