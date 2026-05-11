import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { buildPageMetadata } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import { assetPath } from "@/lib/paths";

interface Props {
  params: Promise<{ locale: string }>;
}

const PRICING_KW: Record<string, string[]> = {
  en: [
    "architecture website price",
    "interior design website cost",
    "studio website package",
    "Marbella web design",
  ],
  es: [
    "precio web arquitectura",
    "presupuesto página estudio",
    "diseño web Costa del Sol",
  ],
  fr: ["tarif site architecture", "prix site studio design"],
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

  return (
    <>
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
            <AnimatedText as="div" delay={0.04} className="lg:pr-2">
              <AnimatedTitle
                text={home.offerTitle}
                as="h2"
                className="text-section mb-6 max-w-[620px] text-inverted"
              />
              <AnimatedText className="text-support mb-8 max-w-[560px] text-inverted/66" delay={0.1}>
                {home.offerPriceDetail}
              </AnimatedText>
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
            </AnimatedText>

            <div className="relative lg:pl-2">
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[12px]">
                <Image
                  src={assetPath("/images/mood.png")}
                  alt={home.moodImageAlt}
                  fill
                  loading="lazy"
                  className="object-contain object-center"
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[12px] shadow-[0_34px_80px_rgb(0_0_0/0.42)]" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3.5 md:grid-cols-2">
            <AnimatedText as="div" delay={0.14}>
              <div className="rounded-[12px] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[17px] font-medium text-inverted/92">{offer.hostingCard.title}</p>
                <p className="mt-2 font-heading text-[32px] font-medium leading-none text-inverted/95">
                  {offer.hostingCard.price}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-inverted/62">{offer.hostingCard.desc}</p>
              </div>
            </AnimatedText>
            <AnimatedText as="div" delay={0.18}>
              <div className="rounded-[12px] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[17px] font-medium text-inverted/92">{offer.contentCard.title}</p>
                <p className="mt-2 font-heading text-[32px] font-medium leading-none text-inverted/95">
                  {offer.contentCard.price}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-inverted/62">{offer.contentCard.desc}</p>
              </div>
            </AnimatedText>
          </div>
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
            <FAQAccordion items={[...content.pricingPage.faq]} />
          </div>
        </Container>
      </section>
    </>
  );
}
