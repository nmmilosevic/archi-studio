import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { AuditForm } from "@/components/forms/AuditForm";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata, faqSchema } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import { breadcrumbSchema } from "@/lib/structured-data";

interface Props {
  params: Promise<{ locale: string }>;
}

const AUDIT_KW: Record<string, string[]> = {
  en: ["free website review", "architecture studio audit", "UX review interior design site"],
  es: ["revisión web gratuita", "auditoría web arquitectura"],
  fr: ["audit site web gratuit", "revue site architecture"],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);
  return buildPageMetadata({
    locale,
    path: "/audit",
    title: content.pageMeta.audit.title,
    description: content.pageMeta.audit.description,
    keywords: AUDIT_KW[locale] ?? AUDIT_KW.en,
  });
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-5">
      {items.map((item) => (
        <li key={item} className="border-t border-charcoal/10 pt-5 text-[18px] text-primary">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function AuditPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const audit = content.audit;
  const faqItems = [...audit.faq];
  const jsonLd = faqSchema(faqItems);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Audit", url: absoluteLocaleUrl(locale, "/audit") },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <section className="bg-stone pt-36 pb-24 md:pt-48 md:pb-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={audit.heading} as="h1" className="text-page-title max-w-[18ch] text-primary" />
            <div className="lg:ml-auto">
              <AnimatedText className="text-support max-w-[600px] text-muted" delay={0.12}>
                {audit.sub}
              </AnimatedText>
              <AnimatedText as="div" delay={0.2}>
                <Button asChild size="lg" className="mt-10">
                  <Link href="#audit-form">{content.auditPage.scrollCta}</Link>
                </Button>
              </AnimatedText>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite section-space" aria-labelledby="review-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div>
              <AnimatedTitle
                text={audit.what.heading}
                as="h2"
                id="review-heading"
                className="text-display text-primary"
              />
            </div>
            <div className="lg:col-span-2">
              <SimpleList items={[...audit.what.items]} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-stone section-space" aria-labelledby="receive-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <AnimatedTitle
                text={audit.receive.heading}
                as="h2"
                id="receive-heading"
                className="text-display text-primary"
              />
              <div className="mt-12">
                <SimpleList items={[...audit.receive.items]} />
              </div>
            </div>
            <div>
              <AnimatedTitle text={audit.who.heading} as="h2" className="text-display text-primary" />
              <div className="mt-12">
                <SimpleList items={[...audit.who.items]} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite section-space" id="audit-form" aria-labelledby="audit-form-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <AnimatedTitle
                text={content.auditPage.formHeading}
                as="h2"
                id="audit-form-heading"
                className="text-display text-primary"
              />
              <p className="text-support mt-8 max-w-[520px] text-muted">{content.auditPage.formSub}</p>
            </div>
            <div className="border border-charcoal/10 bg-stone p-6 md:p-10">
              <AuditForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
