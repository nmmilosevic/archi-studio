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
import { generateMetadata as genMeta } from "@/lib/seo";
import { assetPath } from "@/lib/paths";

interface Props {
  params: Promise<{ locale: string }>;
}

const mainIncludes = [
  "Strategy and structure",
  "Custom website design",
  "Responsive build",
  "Basic SEO setup",
  "Contact form",
  "Launch support",
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
              text="Simple pricing. Clear ownership."
              as="h1"
              className="text-page-title max-w-[16ch] text-inverted"
            />
            <AnimatedText
              className="text-support max-w-[560px] text-inverted/62 lg:ml-auto"
              delay={0.12}
            >
              One fixed fee for the complete website system, with optional ongoing support.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal section-space text-inverted" aria-labelledby="main-price-heading">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:items-center lg:gap-12">
            <AnimatedText as="div" delay={0.04} className="order-2 lg:order-1 lg:pr-4">
              <AnimatedTitle
                text="Simple pricing. Clear ownership."
                as="h2"
                className="text-section mb-7 max-w-[700px] text-inverted"
              />
              <AnimatedText className="text-support mb-10 max-w-[560px] text-inverted/68" delay={0.1}>
                One fixed fee for a complete studio website, from strategy and design to launch.
              </AnimatedText>
              <h2 id="main-price-heading" className="mt-4 font-heading text-[clamp(66px,10vw,132px)] font-medium leading-[0.9] tracking-[-0.03em] text-inverted">
                €1,500
              </h2>
              <p className="mt-3 text-[18px] leading-relaxed text-inverted/78">
                One-time payment
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

            <div className="relative order-1 hidden rounded-[14px] border border-white/14 bg-white/[0.03] p-3 lg:order-2 lg:block">
              <div className="relative aspect-[10/8] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={assetPath("/images/pricing-img.png")}
                  alt="Website preview shown in pricing section"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 32vw, 100vw"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            <AnimatedText as="div" delay={0.14}>
              <div className="rounded-[12px] border border-white/12 bg-white/[0.03] p-5">
                <p className="text-[18px] font-medium text-inverted">Hosting package</p>
                <p className="mt-2 font-heading text-[34px] font-medium leading-none text-inverted">
                  €30<span className="ml-1 text-[15px] text-inverted/62">/month</span>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-inverted/64">
                  Managed hosting, maintenance, backups, and light support for your live website.
                </p>
              </div>
            </AnimatedText>
            <AnimatedText as="div" delay={0.18}>
              <div className="rounded-[12px] border border-white/12 bg-white/[0.03] p-5">
                <p className="text-[18px] font-medium text-inverted">Content updates</p>
                <p className="mt-2 font-heading text-[34px] font-medium leading-none text-inverted">
                  €120<span className="ml-1 text-[15px] text-inverted/62">/month</span>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-inverted/64">
                  Ongoing page updates, case study additions, content edits, and monthly refinements.
                </p>
              </div>
            </AnimatedText>
          </div>
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
