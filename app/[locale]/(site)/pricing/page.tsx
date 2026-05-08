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
              className="text-page-title max-w-[16ch] text-inverted"
            />
            <AnimatedText
              className="text-support max-w-[560px] text-inverted/62 lg:ml-auto"
              delay={0.12}
            >
              One clear website price, with optional hosting and update support.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite section-space" aria-labelledby="main-price-heading">
        <Container>
          <div className="mx-auto w-full max-w-[1280px] rounded-[24px] border border-charcoal/14 bg-charcoal p-6 text-inverted shadow-[0_20px_80px_rgb(11_11_11/0.16)] md:p-10 lg:p-12">
            <div className="grid gap-6 md:gap-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
                <AnimatedText as="div" delay={0.04} className="lg:pr-4">
                  <p className="text-[17px] text-inverted/68">Website Design + Development</p>
                  <h2 id="main-price-heading" className="mt-4 font-heading text-[clamp(66px,10vw,132px)] font-medium leading-[0.9] tracking-[-0.03em] text-inverted">
                    €1,500
                  </h2>
                  <p className="mt-3 text-[18px] leading-relaxed text-inverted/78">
                    One-time payment
                  </p>
                  <p className="text-support mt-6 max-w-[620px] text-inverted/72">
                    A complete website designed and developed for your studio. You own it once delivered.
                  </p>
                  <div className="mt-8">
                    <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                      <Link href={`/${locale}/contact`}>Start your website</Link>
                    </Button>
                  </div>
                  <div className="mt-8 border-t border-white/12 pt-7">
                    <CheckList items={mainIncludes} light />
                  </div>
                </AnimatedText>

                <div className="hidden rounded-[14px] border border-white/12 bg-[#efe7de] p-4 text-charcoal lg:block">
                  <div className="h-full rounded-[10px] border border-charcoal/14 bg-[#f7f2ea] p-3">
                    <div className="mb-3 h-4 w-20 rounded-full bg-charcoal/12" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded-md bg-charcoal/8" />
                      <div className="h-16 rounded-md bg-charcoal/6" />
                      <div className="h-24 rounded-md bg-charcoal/10" />
                      <div className="h-24 rounded-md bg-charcoal/7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AnimatedText as="div" delay={0.12} className="mt-20">
            <div className="mx-auto w-full max-w-[1280px]">
              <div className="mb-4">
                <h3 className="text-card-title font-heading font-medium text-primary">Ownership & Optional Support</h3>
                <p className="text-support mt-2 max-w-[760px] text-muted">
                  Your website is fully yours at delivery. Hosting and ongoing updates are available anytime if you want continued support.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[14px] border border-charcoal/12 bg-offwhite p-5 md:p-6">
                  <h3 className="text-card-title font-heading font-medium text-primary">Hosting & Maintenance</h3>
                  <p className="mt-3 font-heading text-[34px] font-medium leading-none text-primary">
                    €30<span className="text-[16px] text-muted">/month</span>
                  </p>
                  <p className="mt-2 text-[14px] text-muted">Billed yearly.</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    Optional hosting, domain connection, SSL and basic maintenance.
                  </p>
                </div>
                <div className="rounded-[14px] border border-charcoal/12 bg-offwhite p-5 md:p-6">
                  <h3 className="text-card-title font-heading font-medium text-primary">Monthly Website Updates</h3>
                  <p className="mt-3 font-heading text-[34px] font-medium leading-none text-primary">
                    €120<span className="text-[16px] text-muted">/month</span>
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">Optional text, image and small layout updates.</p>
                </div>
              </div>
            </div>
          </AnimatedText>
        </Container>
      </section>

      <section className="bg-offwhite section-space-tight" aria-labelledby="pricing-faq-heading">
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
