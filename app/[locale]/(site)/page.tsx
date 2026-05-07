import { getTranslations } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { MotionCard } from "@/components/motion/MotionCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { WorkCard } from "@/components/cards/WorkCard";
import { PricingCard } from "@/components/cards/PricingCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { generateMetadata as genMeta, localBusinessSchema, faqSchema } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  MapPin,
  Zap,
  Globe,
  TrendingUp,
  Layout,
} from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return genMeta({
    locale,
    path: "",
    title: "FORMA COSTA — Premium Digital Studio for Architecture Studios",
    description: t("sub"),
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const hero = {
    label: t("hero.label"),
    headline: t("hero.headline"),
    sub: t("hero.sub"),
    ctaPrimary: t("hero.ctaPrimary"),
    ctaSecondary: t("hero.ctaSecondary"),
    proof: t("hero.proof"),
  };

  const problem = {
    heading: t("problem.heading"),
    body: t("problem.body"),
    cards: Array.from({ length: 6 }, (_, i) => ({
      title: t(`problem.cards.${i}.title`),
      desc: t(`problem.cards.${i}.desc`),
    })),
  };

  const beforeAfter = {
    label: t("beforeAfter.label"),
    heading: t("beforeAfter.heading"),
    body: t("beforeAfter.body"),
    cta: t("beforeAfter.cta"),
    before: t("beforeAfter.before"),
    after: t("beforeAfter.after"),
  };

  const services = {
    label: t("services.label"),
    heading: t("services.heading"),
    items: Array.from({ length: 6 }, (_, i) => ({
      number: t(`services.items.${i}.number`),
      title: t(`services.items.${i}.title`),
      desc: t(`services.items.${i}.desc`),
      deliverables: Array.from({ length: 7 }, (_, j) => {
        try { return t(`services.items.${i}.deliverables.${j}`); } catch { return null; }
      }).filter(Boolean) as string[],
    })),
  };

  const method = {
    label: t("method.label"),
    heading: t("method.heading"),
    steps: Array.from({ length: 6 }, (_, i) => ({
      number: t(`method.steps.${i}.number`),
      title: t(`method.steps.${i}.title`),
      desc: t(`method.steps.${i}.desc`),
    })),
  };

  const pricingLabel = t("pricing.label");
  const pricingHeading = t("pricing.heading");
  const pricingItems = Array.from({ length: 4 }, (_, i) => ({
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
  }));

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

  const seo = {
    label: t("seo.label"),
    heading: t("seo.heading"),
    sub: t("seo.sub"),
  };

  const faqItems = Array.from({ length: 7 }, (_, i) => ({
    q: t(`faq.${i}.q`),
    a: t(`faq.${i}.a`),
  }));

  const jsonLd = [localBusinessSchema(), faqSchema(faqItems)];

  return (
    <>
      {/* JSON-LD */}
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ========== HERO ========== */}
      <section
        className="relative min-h-[95svh] flex flex-col justify-end pb-16 md:pb-20 pt-28 overflow-hidden bg-stone"
        aria-label="Hero section"
      >
        {/* Background image grid — top right */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Large bg placeholder image */}
          <div className="absolute right-0 top-0 w-full md:w-[56%] h-full">
            <div className="relative w-full h-full bg-gradient-to-bl from-[#DDD0BF] via-sand to-stone" />
            {/* Subtle label */}
            <div className="absolute bottom-8 right-8">
              <span className="font-mono-label text-[10px] text-muted/30 tracking-widest uppercase">
                {/* Art direction: Mediterranean villa terrace, warm stone, pool reflection,
                    golden hour light, olive trees, Cordoba stone paving. Cinematic composition.
                    Replace with: villa-hero.jpg */}
                Architecture — Costa del Sol
              </span>
            </div>
          </div>
          {/* Gradient fade left */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone via-stone/95 to-transparent" />
          {/* Subtle top gradient */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-stone to-transparent" />
        </div>

        {/* Content */}
        <Container className="relative z-10">
          <div className="max-w-[640px]">
            {/* Headline */}
            <h1 className="text-hero text-primary mb-7 text-balance">
              {hero.headline}
            </h1>

            {/* Sub */}
            <AnimatedText
              className="font-body text-[16px] md:text-[18px] text-muted leading-relaxed mb-10 max-w-[520px]"
              delay={0.3}
            >
              {hero.sub}
            </AnimatedText>

            {/* CTAs */}
            <AnimatedText delay={0.45} as="div">
              <div className="flex flex-wrap gap-4 mb-10">
                <Button asChild size="lg">
                  <Link href={`/${locale}/audit`}>{hero.ctaPrimary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/method`}>{hero.ctaSecondary}</Link>
                </Button>
              </div>
            </AnimatedText>

          </div>
        </Container>

        {/* Floating audit card */}
        <div
          className="absolute bottom-12 right-8 hidden xl:block"
          aria-hidden="true"
        >
          <div className="bg-offwhite border border-charcoal/8 p-5 max-w-[220px] shadow-[0_4px_30px_rgba(22,22,22,0.06)]">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1.5 w-1.5 rounded-full bg-bronze" />
              <span className="font-mono-label text-[10px] tracking-widest text-bronze uppercase">
                Free audit
              </span>
            </div>
            <p className="font-heading text-[15px] text-primary leading-snug mb-1">
              Site review in 48h
            </p>
            <p className="font-body text-[12px] text-muted">
              No commitment required
            </p>
          </div>
        </div>

      </section>

      {/* ========== PROBLEM ========== */}
      <section className="py-24 md:py-32 bg-offwhite" aria-labelledby="problem-heading">
        <Container>
          <div className="max-w-3xl mb-16">
            <AnimatedTitle
              text={problem.heading}
              as="h2"
              id="problem-heading"
              className="text-section text-primary mb-6"
            />
            <AnimatedText
              className="font-body text-[16px] md:text-[18px] text-muted leading-relaxed"
              delay={0.15}
            >
              {problem.body}
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/8">
            {problem.cards.map((card, i) => {
              const icons = [Layout, Zap, Building2, MapPin, TrendingUp, Globe];
              const Icon = icons[i];
              return (
                <MotionCard
                  key={i}
                  className="bg-offwhite p-7 md:p-9 group hover:bg-stone transition-colors duration-300"
                  delay={i * 0.06}
                >
                  <Icon
                    className="h-5 w-5 text-bronze/60 mb-5 group-hover:text-bronze transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-[20px] font-medium text-primary mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-body text-[13px] text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </MotionCard>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========== BEFORE/AFTER ========== */}
      <section className="py-24 md:py-32 bg-stone" aria-labelledby="beforeafter-heading">
        <Container>
          <div className="max-w-xl mb-12">
            <AnimatedTitle
              text={beforeAfter.heading}
              as="h2"
              id="beforeafter-heading"
              className="text-section text-primary mb-5"
            />
            <AnimatedText
              className="font-body text-[16px] text-muted leading-relaxed mb-8"
              delay={0.15}
            >
              {beforeAfter.body}
            </AnimatedText>
            <AnimatedText delay={0.25} as="div">
              <Button asChild variant="outline" size="md">
                <Link href={`/${locale}/audit`}>{beforeAfter.cta}</Link>
              </Button>
            </AnimatedText>
          </div>

          {/* Before/After cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Before */}
            <AnimatedText delay={0.1} as="div">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-charcoal/70 text-inverted font-mono-label text-[10px] tracking-widest uppercase px-3 py-1.5 backdrop-blur-sm">
                    Before
                  </span>
                </div>
                <div className="h-[320px] md:h-[400px] bg-gradient-to-br from-[#C8C4BC] to-[#B0A898] flex items-end p-6 opacity-60 grayscale">
                  <p className="font-mono-label text-[10px] text-white/70 tracking-widest uppercase">
                    {beforeAfter.before}
                  </p>
                </div>
              </div>
            </AnimatedText>

            {/* After */}
            <AnimatedText delay={0.2} as="div">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-bronze text-inverted font-mono-label text-[10px] tracking-widest uppercase px-3 py-1.5">
                    After
                  </span>
                </div>
                <div className="h-[320px] md:h-[400px] bg-gradient-to-br from-sand to-[#D4C9B8] flex items-end p-6">
                  <p className="font-mono-label text-[10px] text-muted/60 tracking-widest uppercase">
                    {beforeAfter.after}
                  </p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-24 md:py-32 bg-offwhite" aria-labelledby="services-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <AnimatedTitle
                text={services.heading}
                as="h2"
                id="services-heading"
                className="text-section text-primary"
              />
            </div>
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="ghost">
                <Link href={`/${locale}/services`} className="flex items-center gap-2">
                  All services <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/8">
            {services.items.map((item, i) => (
              <ServiceCard key={i} {...item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ========== COLD REDESIGN OFFER ========== */}
      <section className="py-24 md:py-32 bg-charcoal" aria-labelledby="cold-offer-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedTitle
                text="I do not start with a pitch. I start with proof."
                as="h2"
                id="cold-offer-heading"
                className="text-section text-inverted mb-7"
              />
            </div>
            <div>
              <AnimatedText
                className="font-body text-[16px] text-inverted/60 leading-relaxed mb-8"
                delay={0.15}
              >
                Most agencies show you a portfolio and a proposal. I show you
                your website, redesigned. I pick a studio I want to work with,
                redesign a key page or section without being asked, deploy it to
                a private Vercel preview, and send you the link. No invoice. No
                commitment. Just evidence.
              </AnimatedText>
              <AnimatedText
                className="font-body text-[16px] text-inverted/60 leading-relaxed mb-8"
                delay={0.22}
              >
                If the direction feels right, we talk about turning it into
                your full website. If it does not, no problem. The preview was
                the conversation.
              </AnimatedText>
              <div className="space-y-3 mb-10">
                {[
                  "No pitch decks or agency credentials",
                  "A live redesign preview you can click through",
                  "The exact direction we would take your full site",
                  "A clear next step if you want to continue",
                ].map((point, i) => (
                  <AnimatedText key={i} delay={0.3 + i * 0.06} as="div">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="h-4 w-4 text-bronze flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="font-body text-[14px] text-inverted/60">
                        {point}
                      </span>
                    </div>
                  </AnimatedText>
                ))}
              </div>
              <AnimatedText delay={0.5} as="div">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/audit`}>Request a free audit</Link>
                </Button>
              </AnimatedText>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== FEATURED WORK ========== */}
      <section className="py-24 md:py-32 bg-stone" aria-labelledby="work-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
            <div>
              <AnimatedTitle
                text={work.heading}
                as="h2"
                id="work-heading"
                className="text-section text-primary"
              />
            </div>
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="ghost">
                <Link href={`/${locale}/work`} className="flex items-center gap-2">
                  All studies <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </AnimatedText>
          </div>

          <AnimatedText
            className="font-mono-label text-[11px] tracking-widest text-muted/50 uppercase mb-14 max-w-lg"
            delay={0.1}
          >
            {work.disclaimer}
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {work.items.map((item, i) => (
              <WorkCard
                key={item.slug}
                {...item}
                locale={locale}
                index={i}
                tall={i === 0 || i === 3}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ========== METHOD SNAPSHOT ========== */}
      <section className="py-24 md:py-32 bg-offwhite" aria-labelledby="method-heading">
        <Container>
          <div className="max-w-xl mb-16">
            <AnimatedTitle
              text={method.heading}
              as="h2"
              id="method-heading"
              className="text-section text-primary mb-5"
            />
            <AnimatedText
              className="font-body text-[16px] text-muted leading-relaxed"
              delay={0.15}
            >
              Every project follows a clear structure so you know exactly where
              you are and what comes next.
            </AnimatedText>
          </div>
          <ProcessTimeline steps={method.steps} />
          <div className="mt-12 pt-12 border-t border-charcoal/8 flex flex-wrap gap-4">
            <Button asChild size="md">
              <Link href={`/${locale}/method`}>Full method detail</Link>
            </Button>
            <Button asChild variant="outline" size="md">
              <Link href={`/${locale}/audit`}>Start with an audit</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* ========== PRICING TEASER ========== */}
      <section className="py-24 md:py-32 bg-stone" aria-labelledby="pricing-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <AnimatedTitle
                text={pricingHeading}
                as="h2"
                id="pricing-heading"
                className="text-section text-primary"
              />
            </div>
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="ghost">
                <Link href={`/${locale}/pricing`} className="flex items-center gap-2">
                  Full pricing <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </AnimatedText>
          </div>

          {/* Show Audit Preview + Signature only */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/8">
            {[pricingItems[0], pricingItems[2]].map((item, i) => (
              <PricingCard
                key={i}
                {...item}
                locale={locale}
                index={i}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <AnimatedText
              className="font-body text-[13px] text-muted mb-6"
              delay={0.2}
            >
              {t("pricing.vatNote")} {t("pricing.paymentNote")}
            </AnimatedText>
          </div>
        </Container>
      </section>

      {/* ========== SEO SECTION ========== */}
      <section className="py-24 md:py-32 bg-charcoal" aria-labelledby="seo-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedTitle
                text={seo.heading}
                as="h2"
                id="seo-heading"
                className="text-section text-inverted mb-5"
              />
              <AnimatedText
                className="font-body text-[16px] text-inverted/60 leading-relaxed mb-8"
                delay={0.15}
              >
                {seo.sub}
              </AnimatedText>
              <AnimatedText delay={0.25} as="div">
                <Button asChild variant="secondary" size="md">
                  <Link href={`/${locale}/seo-costa-del-sol`}>
                    SEO for architecture studios
                  </Link>
                </Button>
              </AnimatedText>
            </div>

            {/* Cities strip */}
            <div aria-label="Cities we serve">
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {[
                  "Marbella",
                  "Estepona",
                  "Benahavís",
                  "Sotogrande",
                  "Málaga",
                  "Mijas",
                  "Fuengirola",
                  "Casares",
                ].map((city) => (
                  <div
                    key={city}
                    className="bg-charcoal p-5 group hover:bg-[#1E1E1D] transition-colors duration-300"
                  >
                    <span className="font-heading text-[18px] text-inverted/70 group-hover:text-inverted transition-colors duration-300">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== TRUST SECTION ========== */}
      <section className="py-24 md:py-32 bg-offwhite" aria-labelledby="trust-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedTitle
                text="Deep niche focus. Personal attention. Clear communication."
                as="h2"
                id="trust-heading"
                className="text-section text-primary mb-5"
              />
            </div>
            <div>
              <AnimatedText
                className="font-body text-[16px] text-muted leading-relaxed mb-8"
                delay={0.1}
              >
                FORMA COSTA is a solo studio operating as an autónomo on the
                Costa del Sol. Every project is handled directly, with no
                account managers or junior designers between you and the work.
              </AnimatedText>

              <div className="space-y-5">
                {[
                  {
                    title: "Direct communication",
                    desc: "You speak with the person doing the work. No intermediaries, no ticket systems, no delays.",
                  },
                  {
                    title: "Architecture niche only",
                    desc: "Every project is for a studio in the built environment. The understanding of the work, the client, and the region is specific.",
                  },
                  {
                    title: "Costa del Sol specialist",
                    desc: "Local knowledge of the market, the buyer profile, and the competitive landscape gives the work a precision that generalists cannot match.",
                  },
                  {
                    title: "Transparent process",
                    desc: "Fixed-price packages, clear deliverables, and no surprise invoices at the end of the project.",
                  },
                ].map((trust, i) => (
                  <MotionCard key={i} delay={i * 0.08} className="bronze-line-left">
                    <h3 className="font-heading text-[18px] font-medium text-primary mb-1.5">
                      {trust.title}
                    </h3>
                    <p className="font-body text-[14px] text-muted leading-relaxed">
                      {trust.desc}
                    </p>
                  </MotionCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-24 md:py-32 bg-stone" aria-labelledby="faq-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <AnimatedTitle
                text="Common questions."
                as="h2"
                id="faq-heading"
                className="text-section text-primary mb-5"
              />
              <AnimatedText
                className="font-body text-[15px] text-muted leading-relaxed"
                delay={0.15}
              >
                Anything not covered here can be sent directly to{" "}
                <a
                  href="mailto:hello@formacosta.com"
                  className="text-bronze hover:text-clay underline underline-offset-2 transition-colors duration-200"
                >
                  hello@formacosta.com
                </a>
              </AnimatedText>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </Container>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-28 md:py-36 bg-charcoal" aria-labelledby="final-cta-heading">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedTitle
              text="Your studio's digital presence, done properly."
              as="h2"
              id="final-cta-heading"
              className="text-section text-inverted mb-7 text-balance"
            />
            <AnimatedText
              className="font-body text-[16px] md:text-[18px] text-inverted/55 leading-relaxed mb-12 max-w-xl mx-auto"
              delay={0.2}
            >
              Start with a free audit. Get a clear picture of where your site
              stands and what it could become. No commitment required.
            </AnimatedText>
            <AnimatedText delay={0.3} as="div">
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/audit`}>Request a free audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-inverted hover:border-bronze hover:text-bronze">
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
