import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { AuditForm } from "@/components/forms/AuditForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { generateMetadata as genMeta, faqSchema } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
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
  setRequestLocale(locale);
  const content = getContent(locale);
  const auditContent = content.audit;

  const audit = {
    ...auditContent,
    what: { ...auditContent.what, items: [...auditContent.what.items] },
    receive: { ...auditContent.receive, items: [...auditContent.receive.items] },
    who: { ...auditContent.who, items: [...auditContent.who.items] },
    issues: { ...auditContent.issues, items: [...auditContent.issues.items] },
    faq: auditContent.faq.map((item) => ({ ...item })),
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
      <section className="py-20 md:py-28 bg-offwhite" aria-label="Audit details">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[audit.what, audit.receive, audit.who, audit.issues].map(
              (block, blockIndex) => (
                <div
                  key={block.heading}
                  className="group relative min-h-[460px] overflow-hidden border border-charcoal/10 bg-stone p-7 transition-colors duration-500 hover:bg-offwhite md:p-8"
                >
                  <div className="absolute right-6 top-5 font-heading text-[72px] font-medium leading-none text-primary/[0.045]">
                    {String(blockIndex + 1).padStart(2, "0")}
                  </div>

                  <div className="mb-9 h-28 border border-charcoal/10 bg-[#cfc7ba]">
                    <div className="flex h-full items-end p-4">
                      <span className="h-px w-16 bg-primary/35" aria-hidden="true" />
                    </div>
                  </div>

                  <h2 className="font-heading text-[24px] font-semibold leading-[1.02] text-primary mb-7">
                    {block.heading}
                  </h2>

                  <ul className="space-y-4">
                    {block.items.map((item, i) => (
                      <li key={i} className="grid grid-cols-[24px_1fr] items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 items-center justify-center border border-charcoal/15 text-primary/70">
                          <CheckCircle2
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-body text-[15px] text-muted leading-[1.45]">
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
                Fill in the form and I will review your website within 48
                hours. No sales call required to receive the audit.
              </AnimatedText>

              {/* Testimonial-style note */}
              <div className="border-l border-bronze pl-5 mt-10">
                <p className="font-heading text-[18px] font-light text-primary italic leading-snug mb-2">
                  &ldquo;The audit gave us a clear picture of what was wrong and
                  why clients were leaving without contacting us.&rdquo;
                </p>
                <span className="font-mono-label text-[14px] tracking-widest text-muted/60 uppercase">
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
