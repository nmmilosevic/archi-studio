import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { generateMetadata as genMeta } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

const mainIncludes = [
  "Custom website design",
  "Responsive development",
  "Up to 5 pages",
  "CMS setup",
  "Contact form",
  "Basic SEO setup",
  "Vercel deployment",
];

const hostingIncludes = [
  "Hosting setup",
  "Domain connection",
  "SSL",
  "Monitoring",
  "Basic maintenance",
];

const updateIncludes = [
  "Text updates",
  "Image updates",
  "Small layout changes",
  "Priority support",
];

const faq = [
  {
    q: "Is hosting required?",
    a: "No. You can host the site yourself if you prefer.",
  },
  {
    q: "Are updates included?",
    a: "Small launch fixes are included. Ongoing updates are available for €120/month.",
  },
  {
    q: "How long does it take?",
    a: "Most websites can be launched in 2 to 4 weeks depending on content and feedback.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The €1,500 price gives you the full website design and build.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/pricing",
    title: "Pricing — Website Design for Architecture Studios",
    description:
      "Simple pricing for architecture and interior design studio websites. €1,500 one-time website design and development, with optional hosting and updates.",
  });
}

function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check
            className={light ? "mt-1 h-4 w-4 flex-shrink-0 text-clay" : "mt-1 h-4 w-4 flex-shrink-0 text-bronze"}
            aria-hidden="true"
          />
          <span className={light ? "text-[16px] leading-relaxed text-inverted/72" : "text-[16px] leading-relaxed text-primary"}>
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

  return (
    <>
      <section className="bg-charcoal pt-36 pb-24 text-inverted md:pt-48 md:pb-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text="Simple pricing for a better studio website."
              as="h1"
              className="text-section max-w-[920px] text-inverted"
            />
            <AnimatedText
              className="max-w-[560px] text-[18px] leading-[1.65] text-inverted/62 lg:ml-auto"
              delay={0.12}
            >
              One clear website price, with optional hosting and update support.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-28 md:py-44" aria-labelledby="main-price-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <AnimatedText as="div" delay={0.04}>
              <div className="bg-charcoal p-8 text-inverted md:p-12 lg:p-14">
                <p className="text-[17px] text-inverted/55">Website Design + Development</p>
                <h2 id="main-price-heading" className="mt-6 font-heading text-[clamp(48px,7vw,96px)] font-medium leading-none text-inverted">
                  €1,500
                </h2>
                <p className="mt-4 text-[18px] leading-relaxed text-inverted/70">
                  one-time
                </p>
                <p className="mt-10 max-w-[480px] text-[17px] leading-[1.65] text-inverted/62">
                  For studios that want to buy the full website design and build.
                </p>
                <div className="mt-10">
                  <Button asChild variant="secondary" size="lg">
                    <Link href={`/${locale}/contact`}>Start your website</Link>
                  </Button>
                </div>
                <p className="mt-8 border-t border-white/10 pt-6 text-[16px] leading-relaxed text-inverted/55">
                  You pay €1,500 once to own the website design and build.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText as="div" delay={0.12}>
              <div className="border-y border-charcoal/10 py-10 lg:py-14">
                <CheckList items={mainIncludes} />
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-stone py-24 md:py-36" aria-labelledby="addons-heading">
        <Container>
          <div className="mb-14 max-w-[720px]">
            <AnimatedTitle
              text="Optional add-ons."
              as="h2"
              id="addons-heading"
              className="text-display text-primary"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <AnimatedText as="div" delay={0.08}>
              <div className="h-full border border-charcoal/10 bg-offwhite p-8 md:p-10">
                <h3 className="font-heading text-[34px] font-medium leading-tight text-primary">
                  Hosting & Maintenance
                </h3>
                <p className="mt-7 font-heading text-[64px] font-medium leading-none text-primary">
                  €30<span className="text-[20px] text-muted">/month</span>
                </p>
                <p className="mt-4 text-[16px] text-muted">Billed yearly.</p>
                <div className="mt-10">
                  <CheckList items={hostingIncludes} />
                </div>
              </div>
            </AnimatedText>

            <AnimatedText as="div" delay={0.16}>
              <div className="h-full border border-charcoal/10 bg-offwhite p-8 md:p-10">
                <h3 className="font-heading text-[34px] font-medium leading-tight text-primary">
                  Monthly Website Updates
                </h3>
                <p className="mt-7 font-heading text-[64px] font-medium leading-none text-primary">
                  €120<span className="text-[20px] text-muted">/month</span>
                </p>
                <p className="mt-4 text-[16px] text-muted">Optional after launch.</p>
                <div className="mt-10">
                  <CheckList items={updateIncludes} />
                </div>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-24 md:py-32" aria-labelledby="pricing-faq-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedTitle
              text="Questions."
              as="h2"
              id="pricing-faq-heading"
              className="text-display text-primary"
            />
            <FAQAccordion items={faq} />
          </div>
        </Container>
      </section>
    </>
  );
}
