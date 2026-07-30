import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getContent } from "@/lib/getContent";
import { breadcrumbSchema } from "@/lib/structured-data";
import { getPageCopy } from "@/lib/page-copy";

interface Props {
  params: Promise<{ locale: string }>;
}

const SERVICES_KW: Record<string, string[]> = {
  en: [
    "architecture website design",
    "architecture web design",
    "architecture studio website",
    "interior design studio website",
    "landscape architecture website",
    "architecture portfolio website",
    "website redesign for architecture studios",
  ],
  es: [
    "diseño web arquitectura",
    "web estudio arquitectura",
    "web estudio interiorismo",
    "web paisajismo",
    "portfolio arquitectura",
    "rediseño web arquitectura",
  ],
  fr: [
    "site web architecture",
    "site studio architecture",
    "site studio design intérieur",
    "site architecture paysagère",
    "portfolio architecture",
    "refonte site architecture",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getPageCopy(locale).metadata;
  return buildPageMetadata({
    locale,
    path: "/services",
    title: copy.servicesTitle,
    description: copy.servicesDescription,
    keywords: SERVICES_KW[locale] ?? SERVICES_KW.en,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const serviceContent = getContent(locale).services;
  const pageCopy = getPageCopy(locale).services;
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Services", url: absoluteLocaleUrl(locale, "/services") },
  ]);

  const services = {
    heading: serviceContent.heading,
    items: serviceContent.items.map((item) => ({
      ...item,
      deliverables: [...item.deliverables],
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PageHero
        heading={services.heading}
        subtext={pageCopy.sub}
      />

      {/* All services */}
      <section className="section-space-tight bg-offwhite" aria-label={pageCopy.listAria}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/8">
            {services.items.map((item, i) => (
              <ServiceCard key={i} {...item} index={i} />
            ))}
          </div>

          {/* Mid-CTA strip */}
          <div className="mt-16 py-12 border-y border-charcoal/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-[24px] font-medium text-primary mb-2">
                {pageCopy.reviewTitle}
              </h3>
              <p className="font-body text-[14px] text-muted">
                {pageCopy.reviewBody}
              </p>
            </div>
            <Button asChild size="md" className="flex-shrink-0">
              <Link href={`/${locale}/contact`} className="flex items-center gap-2">
                {pageCopy.reviewCta} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="section-space bg-stone" aria-labelledby="how-we-work-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedTitle
                text={pageCopy.processTitle}
                as="h2"
                id="how-we-work-heading"
                className="text-section text-primary"
              />
            </div>
            <div className="space-y-8">
              {pageCopy.processItems.map((item, i) => (
                <AnimatedUI key={i} delay={i * 0.1}>
                  <div className="border-l border-bronze pl-5">
                    <h3 className="font-heading text-[18px] font-medium text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-[14px] text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedUI>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing link */}
      <section className="section-space-tight bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <AnimatedTitle
                text={pageCopy.pricingTitle}
                as="h2"
                className="text-display text-inverted mb-2"
              />
              <AnimatedText
                className="font-body text-[14px] text-inverted/50"
                delay={0.1}
              >
                {pageCopy.pricingBody}
              </AnimatedText>
            </div>
            <AnimatedUI delay={0.2}>
              <Button asChild variant="secondary" size="md" className="flex-shrink-0">
                <Link href={`/${locale}/#pricing`} className="flex items-center gap-2">
                  {pageCopy.pricingCta} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </AnimatedUI>
          </div>
        </Container>
      </section>
    </>
  );
}
