import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { breadcrumbSchema } from "@/lib/structured-data";

interface Props {
  params: Promise<{ locale: string }>;
}

const SEO_PAGE_KW: Record<string, string[]> = {
  en: [
    "Reframe Studio",
    "ReframeStudio",
    "local SEO architecture studio",
    "Marbella web design",
    "Costa del Sol web design",
    "web design Spain",
    "multilingual hreflang",
  ],
  es: [
    "Reframe Studio",
    "ReframeStudio",
    "SEO local arquitectura",
    "diseño web Marbella",
    "Costa del Sol",
    "diseño web España",
  ],
  fr: [
    "Reframe Studio",
    "ReframeStudio",
    "SEO local architecture",
    "design web Marbella",
    "référencement Costa del Sol",
    "design web Espagne",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);
  return buildPageMetadata({
    locale,
    path: "/seo-costa-del-sol",
    title: content.pageMeta.seoCostaDelSol.title,
    description: content.pageMeta.seoCostaDelSol.description,
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
    { name: "SEO", url: absoluteLocaleUrl(locale, "/seo-costa-del-sol") },
  ]);

  const seo = {
    ...seoContent,
    cities: seoContent.cities.map((city) => ({ ...city })),
    sections: seoContent.sections.map((section) => ({ ...section })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <PageHero heading={seo.heading} subtext={seo.sub} />

      <section className="section-space-tight bg-offwhite" aria-label="SEO introduction">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <AnimatedText
                className="font-heading text-[clamp(24px,2.2vw,32px)] font-light text-primary leading-snug mb-6"
                as="p"
              >
                {seoPage.introLead}
              </AnimatedText>
              <AnimatedText className="text-support font-body text-muted mb-5" delay={0.1}>
                {seoPage.introP1}
              </AnimatedText>
              <AnimatedText className="text-support font-body text-muted" delay={0.15}>
                {seoPage.introP2}
              </AnimatedText>
            </div>
            <div className="space-y-6">
              {seoPage.stats.map((item, i) => (
                <AnimatedText key={item.stat} delay={i * 0.1} as="div">
                  <div className="p-6 bg-stone border border-charcoal/8">
                    <div className="font-heading text-[20px] font-medium text-bronze mb-2">{item.stat}</div>
                    <p className="font-body text-[14px] text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedText>
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
                  <h3 className="font-heading text-[20px] font-medium text-primary">{city.name}</h3>
                </div>
                <p className="font-body text-[14px] text-muted leading-relaxed">{city.desc}</p>
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
                  <AnimatedText key={item.title} delay={i * 0.08} as="div">
                    <div className="border-l border-bronze/40 pl-5 py-1">
                      <h3 className="font-heading text-[16px] font-medium text-primary mb-1">{item.title}</h3>
                      <p className="font-body text-[14px] text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>
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
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/contact`}>{seoPage.ctaLabel}</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
