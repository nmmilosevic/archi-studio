import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import Link from "next/link";
import type { Metadata } from "next";
import { Search } from "lucide-react";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ locale: string }>;
}

const SEO_PAGE_KW: Record<string, string[]> = {
  en: [
    "architecture website SEO",
    "architecture studio search visibility",
    "architecture portfolio website",
    "interior design website SEO",
    "landscape architecture website",
    "multilingual hreflang",
  ],
  es: [
    "SEO web arquitectura",
    "visibilidad web estudio arquitectura",
    "portfolio arquitectura",
    "web interiorismo SEO",
  ],
  fr: [
    "SEO site architecture",
    "visibilité site studio architecture",
    "portfolio architecture",
    "site design intérieur SEO",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);
  return buildPageMetadata({
    locale,
    path: "/search-visibility",
    title: content.pageMeta.searchVisibility.title,
    description: content.pageMeta.searchVisibility.description,
    keywords: SEO_PAGE_KW[locale] ?? SEO_PAGE_KW.en,
  });
}

export default async function SEOPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const seoContent = content.seo;
  const seoPage = content.seoPage;
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Search visibility", url: absoluteLocaleUrl(locale, "/search-visibility") },
  ]);

  const seo = {
    ...seoContent,
    categories: seoContent.cities.map((category) => ({ ...category })),
    sections: seoContent.sections.map((section) => ({ ...section })),
  };
  const articleUrl = absoluteLocaleUrl(locale, "/search-visibility");
  const articleText = [
    seo.heading,
    seo.sub,
    seoPage.introLead,
    seoPage.introP1,
    seoPage.introP2,
    ...seo.categories.flatMap((category) => [category.name, category.desc]),
    ...seo.sections.flatMap((section) => [section.title, section.body]),
    ...seoPage.practiceItems.flatMap((item) => [item.title, item.desc]),
  ].join(" ");
  const articleJsonLd = articleSchema({
    locale,
    url: articleUrl,
    headline: seo.heading,
    description: content.pageMeta.searchVisibility.description,
    image: `${SITE_URL}/images/hero.png`,
    datePublished: "2026-05-07T10:30:00+02:00",
    dateModified: "2026-07-30T15:30:00+02:00",
    wordCount: articleText.trim().split(/\s+/u).length,
    speakableSelectors: ["h1", ".schema-summary", ".schema-answer"],
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={articleJsonLd} />
      <PageHero heading={seo.heading} subtext={seo.sub} />

      <section className="section-space-tight bg-offwhite" aria-label="SEO introduction">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <AnimatedText
                className="schema-summary font-heading text-[clamp(24px,2.2vw,32px)] font-light text-primary leading-snug mb-6"
                as="p"
              >
                {seoPage.introLead}
              </AnimatedText>
              <AnimatedText className="text-support font-body text-muted mb-5" delay={0.1}>
                {seoPage.introP1}
              </AnimatedText>
              <AnimatedText className="schema-answer text-support font-body text-muted" delay={0.15}>
                {seoPage.introP2}
              </AnimatedText>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium uppercase tracking-[0.12em] text-primary/44">
                <span>{seoPage.editorialByline}</span>
                <time dateTime="2026-07-30">{seoPage.editorialUpdated}</time>
              </div>
            </div>
            <div className="space-y-6">
              {seoPage.stats.map((item, i) => (
                <AnimatedUI key={item.stat} delay={i * 0.1}>
                  <div className="p-6 bg-stone border border-charcoal/8">
                    <div className="font-heading text-[20px] font-medium text-bronze mb-2">{item.stat}</div>
                    <p className="font-body text-[14px] text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedUI>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight bg-stone" aria-labelledby="cities-heading">
        <Container>
          <h2
            id="cities-heading"
            className="font-heading text-[28px] md:text-[36px] font-light text-primary mb-12"
          >
            {seoPage.citiesHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/8">
            {seo.categories.map((category) => (
              <div
                key={category.name}
                className="bg-offwhite p-7 group hover:bg-stone transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Search
                    className="h-3.5 w-3.5 text-bronze/60 group-hover:text-bronze transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-[20px] font-medium text-primary">{category.name}</h3>
                </div>
                <p className="font-body text-[14px] text-muted leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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

      <section className="section-space-tight bg-stone" aria-labelledby="seo-deliver-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                id="seo-deliver-heading"
                className="font-heading text-[28px] md:text-[36px] font-light text-primary mb-5 leading-tight"
              >
                {seoPage.practiceHeading}
              </h2>
            </div>
            <div>
              <div className="space-y-4">
                {seoPage.practiceItems.map((item, i) => (
                  <AnimatedUI key={item.title} delay={i * 0.08}>
                    <div className="border-l border-bronze/40 pl-5 py-1">
                      <h3 className="font-heading text-[16px] font-medium text-primary mb-1">{item.title}</h3>
                      <p className="font-body text-[14px] text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedUI>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight bg-offwhite" aria-labelledby="seo-sources-heading">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-t border-charcoal/10 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2
                id="seo-sources-heading"
                className="font-heading text-[24px] font-medium leading-tight text-primary md:text-[30px]"
              >
                {seoPage.sourcesHeading}
              </h2>
              <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-muted">
                {seoPage.sourcesIntro}
              </p>
            </div>
            <ul className="grid gap-3">
              {seoPage.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 border-b border-charcoal/10 py-3 text-[15px] text-primary transition-colors hover:text-bronze"
                  >
                    <span>{source.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-space-tight bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <AnimatedTitle text={seoPage.ctaHeading} as="h2" className="text-display text-inverted mb-2" />
              <AnimatedText className="font-body text-[14px] text-inverted/50" delay={0.1}>
                {seoPage.ctaSub}
              </AnimatedText>
            </div>
            <AnimatedUI delay={0.2}>
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/contact`}>{seoPage.ctaLabel}</Link>
              </Button>
            </AnimatedUI>
          </div>
        </Container>
      </section>
    </>
  );
}
