import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getContent } from "@/lib/getContent";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/services",
    title: "Services - Website Design & SEO for Architecture Studios",
    description:
      "Website redesign, interior design studio websites, local SEO, portfolio systems, hosting, and brand refinement for studios on the Costa del Sol.",
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const serviceContent = getContent(locale).services;

  const services = {
    heading: serviceContent.heading,
    items: serviceContent.items.map((item) => ({
      ...item,
      deliverables: [...item.deliverables],
    })),
  };

  return (
    <>
      <PageHero
        heading={services.heading}
        subtext="From website redesigns to local SEO foundations and portfolio systems, every service is built around how architecture and interior studios actually work and how their clients actually search."
      />

      {/* All services */}
      <section className="section-space-tight bg-offwhite" aria-label="Services list">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/8">
            {services.items.map((item, i) => (
              <ServiceCard key={i} {...item} index={i} />
            ))}
          </div>

          {/* Mid-CTA strip */}
          <div className="mt-16 py-12 border-y border-charcoal/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-[24px] font-medium text-primary mb-2">
                Not sure which fits?
              </h3>
              <p className="font-body text-[14px] text-muted">
                Request a website review and we will tell you what your studio website needs first.
              </p>
            </div>
            <Button asChild size="md" className="flex-shrink-0">
              <Link href={`/${locale}/contact`} className="flex items-center gap-2">
                Request a website review <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="section-space bg-stone" aria-labelledby="how-we-work-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedTitle
                text="Every engagement follows the same structure."
                as="h2"
                id="how-we-work-heading"
                className="text-section text-primary"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Review first",
                  desc: "Every project starts with a review of your current site, positioning, and goals. This shapes the direction and scope before any work begins.",
                },
                {
                  title: "Fixed deliverables",
                  desc: "No open-ended retainers disguised as projects. Each package has a defined scope so you know what you are getting before you sign.",
                },
                {
                  title: "Direct involvement",
                  desc: "You work directly with the designer and developer. No account managers. No handoff delays. Faster revisions and cleaner decisions.",
                },
                {
                  title: "Launch ready",
                  desc: "Every project ships with performance optimization, technical SEO setup, analytics configuration, and domain connection included.",
                },
              ].map((item, i) => (
                <AnimatedText key={i} delay={i * 0.1} as="div">
                  <div className="border-l border-bronze pl-5">
                    <h3 className="font-heading text-[18px] font-medium text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-[14px] text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing link */}
      <section className="section-space-tight bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <AnimatedTitle
                text="See the simple website price."
                as="h2"
                className="text-display text-inverted mb-2"
              />
              <AnimatedText
                className="font-body text-[14px] text-inverted/50"
                delay={0.1}
              >
                All packages, recurring plans, and add-ons with starting prices.
              </AnimatedText>
            </div>
            <AnimatedText delay={0.2} as="div">
              <Button asChild variant="secondary" size="md" className="flex-shrink-0">
                <Link href={`/${locale}/#pricing`} className="flex items-center gap-2">
                  View pricing <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
