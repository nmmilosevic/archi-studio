import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/pricing",
    title: "Pricing — Architecture Website Redesigns Costa del Sol",
    description:
      "One clear offer for architecture and interior design studio website redesigns on the Costa del Sol. Full redesign and launch for €1,990.",
  });
}

const includes = [
  "Reframe Audit & full redesign",
  "Responsive, mobile-first layouts",
  "Portfolio Clarity structure",
  "Multilingual-ready setup",
  "Technical SEO foundation",
  "Vercel deployment",
  "Preview-first workflow",
  "Launch support",
];

const careIncludes = [
  "Hosting management on Vercel",
  "Portfolio uploads and updates",
  "Technical fixes and monitoring",
  "Analytics review",
  "Small content edits",
  "Monthly availability",
];

const faq = [
  {
    q: "Is the price fixed or an estimate?",
    a: "€1,990 is the fixed price for the Full Reframe & Launch offer. If the project requires unusual integrations, extensive copywriting, or a larger content system, that scope is agreed before work starts.",
  },
  {
    q: "How do payments work?",
    a: "50% at project start, 50% before launch. Monthly Portfolio Care is billed on the first of each month and can be cancelled with 30 days notice.",
  },
  {
    q: "Is IVA included?",
    a: "No. All prices are shown excluding IVA. The applicable rate will be detailed in the invoice.",
  },
  {
    q: "How long does the project take?",
    a: "Typically 2 to 4 weeks depending on scope and how quickly content and feedback are provided. The timeline is agreed before starting.",
  },
  {
    q: "What if I need something not listed?",
    a: "Send the details and the scope is confirmed before work starts. Additional languages, extra pages, and copy refinement can be added without changing the core offer.",
  },
];

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-charcoal pt-36 md:pt-44 pb-20 md:pb-28">
        <Container>
          <div className="max-w-[860px]">
            <AnimatedText
              as="p"
              className="font-body text-inverted/30 mb-7"
              delay={0.04}
            >
              Pricing · One fixed offer
            </AnimatedText>
            <AnimatedTitle
              text="One offer. One price."
              as="h1"
              className="text-section text-inverted mb-7"
            />
            <AnimatedText
              className="max-w-[520px] text-[17px] md:text-[18px] leading-[1.68] text-inverted/55"
              delay={0.18}
            >
              A complete website redesign and launch for architecture and interior design studios that need a stronger first impression online. No packages. No tiers.
            </AnimatedText>
          </div>
        </Container>
      </section>

      {/* ── At a glance ───────────────────────────────────── */}
      <section className="bg-stone border-b border-charcoal/8" aria-label="Services overview">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal/8">
          {/* Free review */}
          <div className="container-site py-10 md:py-12">
            <p className="font-body text-muted/45 mb-5">Free</p>
            <h3 className="font-heading text-[22px] font-medium text-primary mb-3 leading-tight">
              Website Review
            </h3>
            <p className="font-body text-[14px] text-muted leading-relaxed mb-8">
              A free expert review of your studio&apos;s website with written recommendations on what to fix first.
            </p>
            <div className="flex items-center justify-between border-t border-charcoal/8 pt-5">
              <span className="font-body text-muted/40">48h turnaround</span>
              <Link
                href={`/${locale}/audit`}
                className="font-body text-muted/55 hover:text-primary transition-colors"
              >
                Request →
              </Link>
            </div>
          </div>

          {/* Full Reframe */}
          <div className="bg-charcoal py-10 md:py-12 px-6 md:px-20 lg:px-[5rem]">
            <p className="font-body text-bronze mb-5">€1,990</p>
            <h3 className="font-heading text-[22px] font-medium text-inverted mb-3 leading-tight">
              Full Reframe
            </h3>
            <p className="font-body text-[14px] text-inverted/55 leading-relaxed mb-8">
              Complete website redesign and launch. Built around your portfolio, your studio, and your clients.
            </p>
            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <span className="font-body text-inverted/30">2 to 4 weeks</span>
              <Link
                href={`/${locale}/contact`}
                className="font-body text-inverted/55 hover:text-inverted transition-colors"
              >
                Get started →
              </Link>
            </div>
          </div>

          {/* Portfolio Care */}
          <div className="container-site py-10 md:py-12">
            <p className="font-body text-muted/45 mb-5">€149 / month</p>
            <h3 className="font-heading text-[22px] font-medium text-primary mb-3 leading-tight">
              Portfolio Care
            </h3>
            <p className="font-body text-[14px] text-muted leading-relaxed mb-8">
              Hosting, updates, portfolio uploads, and monthly maintenance after launch.
            </p>
            <div className="flex items-center justify-between border-t border-charcoal/8 pt-5">
              <span className="font-body text-muted/40">Cancel anytime</span>
              <Link
                href={`/${locale}/contact`}
                className="font-body text-muted/55 hover:text-primary transition-colors"
              >
                Discuss →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offer 01: Full Reframe & Launch ───────────────── */}
      <section className="py-24 md:py-36 bg-offwhite" aria-labelledby="offer-heading">
        <Container>
          <div className="flex items-center gap-5 mb-14 md:mb-16 pb-5 border-b border-charcoal/8">
            <span className="font-body text-muted/35">01</span>
            <span className="font-body text-muted/35">Full Reframe & Launch</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — price + description */}
            <AnimatedText delay={0.05} as="div">
              <h2
                id="offer-heading"
                className="text-section text-primary mb-8"
                style={{ maxWidth: "500px" }}
              >
                Full Reframe<br />& Launch
              </h2>

              <p className="font-body text-[16px] md:text-[17px] text-muted leading-[1.68] mb-12 max-w-[420px]">
                A focused redesign built around first impression, portfolio clarity, and a calm path to enquiry. Architecture work judged through a screen deserves presentation that matches the quality of the work itself.
              </p>

              <div className="mb-10">
                <div
                  className="font-heading font-medium text-primary leading-none"
                  style={{ fontSize: "clamp(72px,9vw,120px)", letterSpacing: "-0.025em" }}
                >
                  €1,990
                </div>
                <p className="font-body text-muted/45 mt-3">
                  Fixed price · Excluding IVA
                </p>
              </div>

              <div className="space-y-3 mb-12">
                {[
                  "50% at project start · 50% before launch",
                  "Typically 2 to 4 weeks",
                  "Reframe Preview–first workflow",
                ].map((term) => (
                  <div key={term} className="flex items-center gap-3.5">
                    <span className="h-px w-5 bg-bronze/50 flex-shrink-0" />
                    <span className="font-body text-[13px] text-muted">{term}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>Request a Reframe Audit</Link>
              </Button>
            </AnimatedText>

            {/* Right — deliverables */}
            <AnimatedText delay={0.15} as="div">
              <p className="font-body text-muted/40 mb-8">What it covers</p>
              <ul>
                {includes.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-5 py-4 border-b border-charcoal/8 first:border-t first:border-charcoal/8"
                  >
                    <span className="font-body text-muted/30 pt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-[14px] text-primary leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[13px] text-muted/45 leading-relaxed mt-8 italic">
                Not included: branding strategy, logo design, copywriting from scratch, photography, ecommerce, or advanced backend systems. If needed, scope is agreed before work starts.
              </p>
            </AnimatedText>

          </div>
        </Container>
      </section>

      {/* ── Offer 02: Portfolio Care ───────────────────────── */}
      <section className="py-24 md:py-32 bg-stone" aria-labelledby="care-heading">
        <Container>
          <div className="flex items-center gap-5 mb-14 md:mb-16 pb-5 border-b border-charcoal/8">
            <span className="font-body text-muted/35">02</span>
            <span className="font-body text-muted/35">Portfolio Clarity · Ongoing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div>
              <AnimatedTitle
                text="Keep it running, always."
                as="h2"
                id="care-heading"
                className="text-section text-primary mb-8"
              />
              <AnimatedText
                className="font-body text-[16px] md:text-[17px] text-muted leading-[1.68] max-w-[400px] mb-12"
                delay={0.1}
              >
                Portfolio Care keeps the site fast, updated, and maintained after launch. The work keeps moving — the website should too.
              </AnimatedText>

              <AnimatedText delay={0.15} as="div">
                <div className="mb-10">
                  <div
                    className="font-heading font-medium text-primary leading-none"
                    style={{ fontSize: "clamp(56px,7vw,96px)", letterSpacing: "-0.025em" }}
                  >
                    €149
                  </div>
                  <p className="font-body text-muted/45 mt-3">
                    Per month · Cancel anytime
                  </p>
                </div>

                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/contact`}>Discuss Portfolio Care</Link>
                </Button>
              </AnimatedText>
            </div>

            <AnimatedText delay={0.2} as="div">
              <p className="font-body text-muted/40 mb-8">What it covers</p>
              <ul>
                {careIncludes.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-5 py-4 border-b border-charcoal/8 first:border-t first:border-charcoal/8"
                  >
                    <span className="font-body text-muted/30 pt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-[14px] text-primary leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[13px] text-muted/45 leading-relaxed mt-8 italic">
                Can be added at launch or at any point after. No minimum contract period.
              </p>
            </AnimatedText>

          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-offwhite" aria-labelledby="pricing-faq-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <AnimatedTitle
                text="Common questions."
                as="h2"
                id="pricing-faq-heading"
                className="text-display text-primary"
              />
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={faq} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-charcoal" aria-label="Start with a Reframe Audit">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <AnimatedTitle
              text="Start with the current site."
              as="h2"
              className="text-section text-inverted"
            />
            <AnimatedText delay={0.1} as="div" className="flex-shrink-0">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/contact`}>Request a Reframe Audit</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
