import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
import { RevealMedia } from "@/components/motion/RevealMedia";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { PricingBeyondWebsite } from "@/components/sections/PricingBeyondWebsite";
import { buildPageMetadata, faqSchema } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import { assetPath } from "@/lib/paths";
import { breadcrumbSchema } from "@/lib/structured-data";

interface Props {
  params: Promise<{ locale: string }>;
}

const PRICING_KW: Record<string, string[]> = {
  en: [
    "architecture website price",
    "interior design website cost",
    "studio website package",
    "architecture website redesign",
    "architecture portfolio website",
  ],
  es: [
    "precio web arquitectura",
    "presupuesto web estudio arquitectura",
    "rediseño web arquitectura",
    "portfolio arquitectura",
  ],
  fr: [
    "tarif site architecture",
    "prix site studio design",
    "refonte site architecture",
    "portfolio architecture",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);
  return buildPageMetadata({
    locale,
    path: "/pricing",
    title: content.pageMeta.pricing.title,
    description: content.pageMeta.pricing.description,
    keywords: PRICING_KW[locale] ?? PRICING_KW.en,
  });
}

function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            className={
              light ? "mt-1 h-4 w-4 flex-shrink-0 text-clay" : "mt-1 h-4 w-4 flex-shrink-0 text-bronze"
            }
            aria-hidden="true"
          />
          <span
            className={
              light ? "text-[16px] leading-relaxed text-inverted/72" : "text-[16px] leading-relaxed text-primary"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const home = content.home;
  const offer = home.simpleMarketingOffer;
  const pricingFaq = [...content.pricingPage.faq];
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Pricing", url: absoluteLocaleUrl(locale, "/pricing") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema(pricingFaq)} />
      <section className="bg-charcoal pt-36 pb-24 text-inverted md:pt-48 md:pb-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text={content.pricing.heading}
              as="h1"
              className="text-page-title max-w-[20ch] text-inverted"
            />
            <AnimatedText
              className="text-support max-w-[560px] text-inverted/62 lg:ml-auto"
              delay={0.12}
            >
              {content.pricing.sub}
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-[clamp(86px,11vw,168px)] text-inverted" aria-labelledby="main-price-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="lg:pr-2">
              <AnimatedTitle
                text={home.offerTitle}
                as="h2"
                className="text-section mb-6 max-w-[620px] text-inverted"
              />
              <AnimatedText className="text-support mb-8 max-w-[560px] text-inverted/66" delay={0.1}>
                {home.offerPriceDetail}
              </AnimatedText>
              <AnimatedUI delay={0.16}>
                <h2
                  id="main-price-heading"
                  className="font-heading text-[clamp(36px,6vw,72px)] font-medium leading-[0.95] tracking-[-0.03em] text-inverted"
                >
                  {offer.price}
                </h2>
                <p className="mt-2 text-[18px] leading-relaxed text-inverted/74">{home.offerPaymentLabel}</p>
                <div className="mt-7">
                  <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Link href={`/${locale}/contact`}>{content.nav.cta}</Link>
                  </Button>
                </div>
                <div className="mt-8 pt-1">
                  <CheckList items={[...offer.includes]} light />
                </div>
              </AnimatedUI>
            </div>

            <div className="relative lg:pl-2">
              <RevealMedia className="relative aspect-[1/1] w-full rounded-[12px]" delay={0.08}>
                <Image
                  src={assetPath("/images/mood.png")}
                  alt={home.moodImageAlt}
                  fill
                  loading="lazy"
                  className="object-contain object-center"
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                />
              </RevealMedia>
              <div className="pointer-events-none absolute inset-0 rounded-[12px] shadow-[0_34px_80px_rgb(0_0_0/0.42)]" />
            </div>
          </div>
          <PricingBeyondWebsite
            title={offer.addonsTitle}
            cards={offer.addonCards}
            contactHref={`/${locale}/contact`}
            headingId="design-beyond-pricing-heading"
            variant="dark"
          />
        </Container>
      </section>

      <section className="bg-offwhite section-space-tight" aria-labelledby="pricing-faq-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedTitle
              text={content.pricingPage.faqHeading}
              as="h2"
              id="pricing-faq-heading"
              className="text-display text-primary"
            />
            <FAQAccordion items={pricingFaq} />
          </div>
        </Container>
      </section>
    </>
  );
}
