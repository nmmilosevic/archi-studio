import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { PricingCard } from "@/components/cards/PricingCard";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Plus } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/pricing",
    title: "Pricing — Transparent Packages for Architecture Studio Websites",
    description:
      "Clear, fixed pricing for website redesigns, local SEO, portfolio systems, and monthly care plans for architecture studios on the Costa del Sol.",
  });
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const pricing = {
    label: t("pricing.label"),
    heading: t("pricing.heading"),
    sub: t("pricing.sub"),
    vatNote: t("pricing.vatNote"),
    paymentNote: t("pricing.paymentNote"),
    cta: t("pricing.cta"),
    oneTime: Array.from({ length: 4 }, (_, i) => ({
      name: t(`pricing.oneTime.${i}.name`),
      price: t(`pricing.oneTime.${i}.price`),
      desc: t(`pricing.oneTime.${i}.desc`),
      includes: Array.from({ length: 12 }, (_, j) => {
        try { return t(`pricing.oneTime.${i}.includes.${j}`); } catch { return null; }
      }).filter(Boolean) as string[],
      notIncluded: Array.from({ length: 5 }, (_, j) => {
        try { return t(`pricing.oneTime.${i}.notIncluded.${j}`); } catch { return null; }
      }).filter(Boolean) as string[],
      cta: t(`pricing.oneTime.${i}.cta`),
      featured: i === 2,
    })),
    recurring: Array.from({ length: 3 }, (_, i) => ({
      name: t(`pricing.recurring.${i}.name`),
      price: t(`pricing.recurring.${i}.price`),
      desc: t(`pricing.recurring.${i}.desc`),
      includes: Array.from({ length: 7 }, (_, j) => {
        try { return t(`pricing.recurring.${i}.includes.${j}`); } catch { return null; }
      }).filter(Boolean) as string[],
    })),
    addons: Array.from({ length: 6 }, (_, i) => ({
      name: t(`pricing.addons.${i}.name`),
      price: t(`pricing.addons.${i}.price`),
    })),
  };

  const pricingFaq = [
    {
      q: "Are the prices fixed or estimates?",
      a: "Starting prices. The final quote depends on the number of pages, languages required, content readiness, and any custom requirements. All quotes are confirmed before work begins.",
    },
    {
      q: "How do payments work?",
      a: "For projects above €790: 50% at project start, 50% before launch. For the Audit Preview: 100% upfront. Monthly plans are billed on the first of each month.",
    },
    {
      q: "Is IVA included?",
      a: "No. All prices are shown excluding IVA. The applicable rate depends on your situation and will be detailed in the invoice.",
    },
    {
      q: "Can I upgrade from one plan to another?",
      a: "Yes. If you start with a Studio Refresh and want to expand to a Signature Website, the work already done is credited toward the larger project.",
    },
    {
      q: "What if I need something not listed here?",
      a: "Send us the details and we will put together a custom quote. Most non-standard requests can be handled as project add-ons.",
    },
  ];

  return (
    <>
      <PageHero
        label={pricing.label}
        heading={pricing.heading}
        subtext={pricing.sub}
      />

      {/* One-time projects */}
      <section className="py-16 md:py-24 bg-offwhite" aria-labelledby="onetime-heading">
        <Container>
          <div className="mb-10">
            <h2 id="onetime-heading" className="font-heading text-[28px] font-medium text-primary">
              Website design packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-charcoal/8">
            {pricing.oneTime.map((item, i) => (
              <PricingCard
                key={i}
                {...item}
                locale={locale}
                index={i}
              />
            ))}
          </div>

          {/* Notes */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-[12px] text-muted font-mono-label tracking-wide">
            <span>{pricing.vatNote}</span>
            <span className="hidden sm:block text-muted/30">|</span>
            <span>{pricing.paymentNote}</span>
          </div>
        </Container>
      </section>

      {/* Recurring */}
      <section className="py-16 md:py-24 bg-stone" aria-labelledby="recurring-heading">
        <Container>
          <div className="mb-10">
            <h2 id="recurring-heading" className="font-heading text-[28px] font-medium text-primary">
              Ongoing care and growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/8">
            {pricing.recurring.map((plan, i) => (
              <AnimatedText key={i} delay={i * 0.08} as="div">
                <div className="h-full p-7 md:p-9 bg-offwhite border-0 flex flex-col">
                  <div className="mb-5">
                    <h3 className="font-heading text-[20px] font-medium text-primary mb-1">
                      {plan.name}
                    </h3>
                    <div className="font-heading text-[32px] font-light text-primary mb-3 leading-tight">
                      {plan.price}
                    </div>
                    <p className="font-body text-[13px] text-muted leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="h-px bg-charcoal/8 mb-5" />

                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check className="h-3.5 w-3.5 text-bronze flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="font-body text-[13px] text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="w-full justify-center">
                    <Link href={`/${locale}/contact`}>{pricing.cta}</Link>
                  </Button>
                </div>
              </AnimatedText>
            ))}
          </div>
        </Container>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 bg-offwhite" aria-labelledby="addons-heading">
        <Container>
          <div className="max-w-3xl">
            <h2 id="addons-heading" className="font-heading text-[28px] font-medium text-primary mb-10">
              Extend any package
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-charcoal/8">
              {pricing.addons.map((addon, i) => (
                <div key={i} className="bg-offwhite p-5 flex items-center justify-between gap-4 hover:bg-stone transition-colors duration-200">
                  <div className="flex items-center gap-2.5">
                    <Plus className="h-3 w-3 text-bronze flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-[14px] text-primary">{addon.name}</span>
                  </div>
                  <span className="font-mono-label text-[11px] tracking-widest text-bronze whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-stone" aria-labelledby="pricing-faq-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2 id="pricing-faq-heading" className="font-heading text-[28px] font-medium text-primary">
                Questions about pricing
              </h2>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={pricingFaq} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <AnimatedTitle
              text="Ready to get a quote?"
              as="h2"
              className="text-display text-inverted"
            />
            <AnimatedText delay={0.1} as="div">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/contact`}>{pricing.cta}</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
