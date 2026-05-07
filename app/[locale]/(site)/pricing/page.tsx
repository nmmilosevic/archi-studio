import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/pricing",
    title: "Pricing — FORMA COSTA Website System for Architecture Studios",
    description:
      "One clear offer. A complete digital presence system for architecture and interior design studios on the Costa del Sol. €2,900.",
  });
}

const includes = [
  "Custom website design",
  "Responsive layouts — mobile, tablet, desktop",
  "Homepage",
  "Service pages",
  "Project portfolio structure",
  "About page",
  "Contact page",
  "Multilingual-ready structure",
  "Technical SEO foundation",
  "Animation system",
  "Vercel deployment",
  "Analytics setup",
  "Launch support",
  "2 revision rounds",
];

const notIncluded = [
  "Full branding strategy",
  "Logo design",
  "Copywriting from scratch",
  "Photography",
  "Ecommerce or advanced backend systems",
  "Unlimited revisions",
];

const careIncludes = [
  "Hosting management on Vercel",
  "Website updates and fixes",
  "Portfolio uploads",
  "Analytics checks",
  "Maintenance and monitoring",
  "Small content edits",
];

const faq = [
  {
    q: "Is the price fixed or an estimate?",
    a: "€2,900 is the fixed price for the FORMA COSTA Website System. If your project requires additional pages, a second language, or specific integrations, we will discuss those before work starts and agree on any additions in writing.",
  },
  {
    q: "How do payments work?",
    a: "50% at project start, 50% before launch. Monthly Website Care is billed on the first of each month and can be cancelled with 30 days notice.",
  },
  {
    q: "Is IVA included?",
    a: "No. All prices are shown excluding IVA. The applicable rate will be detailed in the invoice.",
  },
  {
    q: "How long does the project take?",
    a: "Typically 2 to 4 weeks depending on scope and how quickly content and feedback are provided. We agree on a timeline before starting.",
  },
  {
    q: "What if I need something not listed?",
    a: "Send us the details and we will put together a simple written proposal. Most requests — additional languages, extra pages, copywriting — can be handled as an agreed addition to the main project.",
  },
];

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <PageHero
        heading="One offer. One price. No guesswork."
        subtext="A complete digital presence system built specifically for architecture and interior design studios on the Costa del Sol."
      />

      {/* Main offer */}
      <section className="py-20 md:py-32 bg-offwhite" aria-labelledby="offer-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — editorial description */}
            <AnimatedText delay={0.05} as="div">
              <div>
                <h2
                  id="offer-heading"
                  className="font-heading text-[clamp(28px,4vw,48px)] font-light text-primary leading-tight mb-6"
                >
                  FORMA COSTA<br />Website System
                </h2>

                <p className="font-body text-[16px] md:text-[17px] text-muted leading-relaxed mb-10 max-w-[420px]">
                  A complete digital presence designed and built for your studio — from the first impression to the enquiry form. Clean, editorial, and built to last.
                </p>

                <div className="mb-10">
                  <div className="font-heading text-[clamp(48px,6vw,80px)] font-light text-primary leading-none tracking-tight">
                    €2,900
                  </div>
                  <p className="font-mono-label text-[11px] tracking-widest text-muted/60 uppercase mt-2">
                    Fixed price · Excluding IVA
                  </p>
                </div>

                <div className="space-y-2 mb-10 text-[13px] text-muted font-body">
                  <div className="flex items-center gap-3">
                    <span className="w-px h-4 bg-bronze/40 flex-shrink-0" />
                    50% upfront · 50% before launch
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-px h-4 bg-bronze/40 flex-shrink-0" />
                    Typically 2 to 4 weeks
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-px h-4 bg-bronze/40 flex-shrink-0" />
                    2 revision rounds included
                  </div>
                </div>

                <Button asChild size="lg">
                  <Link href={`/${locale}/contact`}>Start your project</Link>
                </Button>
              </div>
            </AnimatedText>

            {/* Right — what's in / what's not */}
            <AnimatedText delay={0.15} as="div">
              <div className="border border-charcoal/8 bg-stone p-8 md:p-10">
                <h3 className="font-mono-label text-[11px] tracking-widest text-bronze uppercase mb-6">
                  Included
                </h3>
                <ul className="space-y-3 mb-10">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="h-3.5 w-3.5 text-bronze flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="font-body text-[14px] text-primary leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-charcoal/8 mb-8" />

                <h3 className="font-mono-label text-[11px] tracking-widest text-muted/50 uppercase mb-5">
                  Not included
                </h3>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Minus
                        className="h-3.5 w-3.5 text-muted/40 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="font-body text-[14px] text-muted leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      {/* Website Care */}
      <section className="py-20 md:py-28 bg-stone" aria-labelledby="care-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedTitle
                text="Keep it running, always."
                as="h2"
                id="care-heading"
                className="font-heading text-[clamp(28px,4vw,48px)] font-light text-primary mb-5"
              />
              <AnimatedText
                className="font-body text-[16px] text-muted leading-relaxed max-w-[400px]"
                delay={0.1}
              >
                Website Care keeps your site fast, updated, and maintained — without you having to think about it. Add it at launch or any time after.
              </AnimatedText>
            </div>

            <AnimatedText delay={0.15} as="div">
              <div className="border border-charcoal/8 bg-offwhite p-8 md:p-10">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-[22px] font-medium text-primary mb-1">
                      Website Care
                    </h3>
                    <p className="font-body text-[13px] text-muted">
                      Monthly, cancel anytime
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-[36px] font-light text-primary leading-none">
                      €149
                    </div>
                    <p className="font-mono-label text-[10px] tracking-widest text-muted/50 uppercase mt-1">
                      per month
                    </p>
                  </div>
                </div>

                <div className="h-px bg-charcoal/8 mb-6" />

                <ul className="space-y-3 mb-8">
                  {careIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="h-3.5 w-3.5 text-bronze flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="font-body text-[14px] text-primary leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="w-full justify-center">
                  <Link href={`/${locale}/contact`}>Add Website Care</Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-offwhite" aria-labelledby="pricing-faq-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <AnimatedTitle
                text="Common questions."
                as="h2"
                id="pricing-faq-heading"
                className="font-heading text-[clamp(24px,3vw,36px)] font-light text-primary"
              />
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={faq} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <AnimatedTitle
              text="Ready to start?"
              as="h2"
              className="font-heading text-[clamp(32px,5vw,64px)] font-light text-inverted"
            />
            <AnimatedText delay={0.1} as="div">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/contact`}>Request a quote</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
