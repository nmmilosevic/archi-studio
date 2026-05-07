import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { AuditForm } from "@/components/forms/AuditForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { generateMetadata as genMeta, faqSchema } from "@/lib/seo";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/audit",
    title: "Free Website Audit for Architecture Studios — Costa del Sol",
    description:
      "Get a free review of your architecture or interior design studio website. First impression, mobile, SEO, portfolio clarity, and conversion path reviewed within 48 hours.",
  });
}

export default async function AuditPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const audit = {
    label: t("audit.label"),
    heading: t("audit.heading"),
    sub: t("audit.sub"),
    what: {
      heading: t("audit.what.heading"),
      items: Array.from({ length: 8 }, (_, i) => {
        try { return t(`audit.what.items.${i}`); } catch { return null; }
      }).filter(Boolean) as string[],
    },
    receive: {
      heading: t("audit.receive.heading"),
      items: Array.from({ length: 5 }, (_, i) => {
        try { return t(`audit.receive.items.${i}`); } catch { return null; }
      }).filter(Boolean) as string[],
    },
    who: {
      heading: t("audit.who.heading"),
      items: Array.from({ length: 5 }, (_, i) => {
        try { return t(`audit.who.items.${i}`); } catch { return null; }
      }).filter(Boolean) as string[],
    },
    issues: {
      heading: t("audit.issues.heading"),
      items: Array.from({ length: 7 }, (_, i) => {
        try { return t(`audit.issues.items.${i}`); } catch { return null; }
      }).filter(Boolean) as string[],
    },
    faq: Array.from({ length: 3 }, (_, i) => ({
      q: t(`audit.faq.${i}.q`),
      a: t(`audit.faq.${i}.a`),
    })),
  };

  const jsonLd = faqSchema(audit.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label={audit.label}
        heading={audit.heading}
        subtext={audit.sub}
      />

      {/* What I review + What you receive */}
      <section className="py-16 md:py-24 bg-offwhite" aria-label="Audit details">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/8">
            {[audit.what, audit.receive, audit.who, audit.issues].map(
              (block) => (
                <div key={block.heading} className="bg-offwhite p-7 md:p-9">
                  <h2 className="font-heading text-[18px] font-medium text-primary mb-6">
                    {block.heading}
                  </h2>
                  <ul className="space-y-3">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="h-3.5 w-3.5 text-bronze flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="font-body text-[13px] text-muted leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* Form section */}
      <section
        className="py-16 md:py-24 bg-stone"
        id="audit-form"
        aria-labelledby="form-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                id="form-heading"
                className="font-heading text-[32px] md:text-[40px] font-light text-primary mb-5 leading-tight"
              >
                Tell us about your studio website.
              </h2>
              <AnimatedText
                className="font-body text-[15px] text-muted leading-relaxed mb-8"
                delay={0.1}
              >
                Fill in the form and we will review your website within 48
                hours. No sales call required to receive the audit.
              </AnimatedText>

              {/* Testimonial-style note */}
              <div className="border-l border-bronze pl-5 mt-10">
                <p className="font-heading text-[18px] font-light text-primary italic leading-snug mb-2">
                  &ldquo;The audit gave us a clear picture of what was wrong and
                  why clients were leaving without contacting us.&rdquo;
                </p>
                <span className="font-mono-label text-[10px] tracking-widest text-muted/60 uppercase">
                  Architecture studio, Marbella
                </span>
              </div>
            </div>

            <div className="bg-offwhite p-8 md:p-10">
              <AuditForm />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-offwhite" aria-labelledby="audit-faq-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2
                id="audit-faq-heading"
                className="font-heading text-[24px] font-medium text-primary"
              >
                Audit questions
              </h2>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={audit.faq} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
