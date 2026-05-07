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
    title: "Pricing — Architecture Website Redesigns Costa del Sol",
    description:
      "One clear offer for architecture and interior design studio website redesigns on the Costa del Sol. Full redesign and launch for €1,990.",
  });
}

const includes = [
  "Refined website redesign",
  "Responsive layouts",
  "Project portfolio structure",
  "Mobile optimization",
  "Multilingual-ready setup",
  "Technical SEO foundation",
  "Vercel deployment",
  "Launch support",
];

const notIncluded = [
  "Full branding strategy",
  "Logo design",
  "Copywriting from scratch",
  "Photography",
  "Ecommerce or advanced backend systems",
  "Ongoing content publishing",
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
    a: "€1,990 is the fixed price for the Full Website Redesign & Launch offer. If the project requires unusual integrations, extensive copywriting, or a larger content system, that scope is agreed before work starts.",
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
    a: "Typically 2 to 4 weeks depending on scope and how quickly content and feedback are provided. The timeline is agreed before starting.",
  },
  {
    q: "What if I need something not listed?",
    a: "Send the details and I will confirm the cleanest scope before work starts. Additional languages, extra pages, and copy refinement can be added without changing the core offer.",
  },
];

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <PageHero
        heading="One fixed redesign offer."
        subtext="A complete website redesign and launch for architecture and interior design studios that need a stronger first impression online."
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
                  className="font-heading text-[clamp(36px,5vw,72px)] font-medium text-primary leading-[0.94] mb-6"
                >
                  Full Website<br />Redesign & Launch
                </h2>

                <p className="font-body text-[16px] md:text-[18px] text-muted leading-[1.65] mb-10 max-w-[460px]">
                  A focused redesign built around first impression, project storytelling, portfolio clarity, and a calm enquiry path.
                </p>

                <div className="mb-10">
                  <div className="font-heading text-[clamp(64px,8vw,112px)] font-medium text-primary leading-none tracking-normal">
                    €1,990
                  </div>
                  <p className="font-mono-label text-[14px] tracking-widest text-muted/60 uppercase mt-2">
                    Fixed price · Excluding IVA
                  </p>
                </div>

                <div className="space-y-2 mb-10 text-[14px] text-muted font-body">
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
                    Preview-first workflow
                  </div>
                </div>

                <Button asChild size="lg">
                  <Link href={`/${locale}/contact`}>Request a redesign review</Link>
                </Button>
              </div>
            </AnimatedText>

            {/* Right — what's in / what's not */}
            <AnimatedText delay={0.15} as="div">
              <div className="border border-charcoal/10 bg-stone p-8 md:p-10">
                <h3 className="font-mono-label text-[14px] tracking-widest text-muted/60 uppercase mb-6">
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

                <h3 className="font-mono-label text-[14px] tracking-widest text-muted/50 uppercase mb-5">
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
                className="font-heading text-[clamp(44px,6vw,88px)] font-medium text-primary mb-5"
              />
              <AnimatedText
                className="font-body text-[17px] text-muted leading-[1.65] max-w-[430px]"
                delay={0.1}
              >
                Website Care keeps the site fast, updated, and maintained after launch. Add it at launch or any time after.
              </AnimatedText>
            </div>

            <AnimatedText delay={0.15} as="div">
              <div className="border border-charcoal/10 bg-offwhite p-8 md:p-10">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-[22px] font-semibold text-primary mb-1">
                      Website Care
                    </h3>
                    <p className="font-body text-[14px] text-muted">
                      Monthly, cancel anytime
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-[40px] font-medium text-primary leading-none">
                      €149
                    </div>
                    <p className="font-mono-label text-[14px] tracking-widest text-muted/50 uppercase mt-1">
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
                <Link href={`/${locale}/contact`}>Discuss Website Care</Link>
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
                className="font-heading text-[clamp(36px,5vw,72px)] font-medium text-primary"
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
              text="Start with the current site."
              as="h2"
              className="font-heading text-[clamp(44px,6vw,88px)] font-medium text-inverted"
            />
            <AnimatedText delay={0.1} as="div">
              <Button asChild variant="secondary" size="lg">
                <Link href={`/${locale}/contact`}>Request a redesign review</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
