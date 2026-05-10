import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { AuditForm } from "@/components/forms/AuditForm";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata, faqSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

const reviewPoints = [
  "Positioning - can visitors quickly understand what your studio does?",
  "Project presentation",
  "Mobile experience",
  "Contact flow - is it easy for potential clients to contact you?",
];

const receive = [
  "A short written review",
  "Key problems found first",
  "Simple improvement suggestions",
  "Clear next step",
];

const who = [
  "Architecture studios",
  "Interior design studios",
  "Real estate developers",
  "Hospitality brands",
];

const faq = [
  {
    q: "Is the website review really free?",
    a: "Yes. The first review is free and does not require a project commitment.",
  },
  {
    q: "What will I receive?",
    a: "A short written review with the clearest issues and practical improvement suggestions.",
  },
  {
    q: "Do I need to commit to a project?",
    a: "No. If the website needs deeper work, we can discuss the €1,500 website design and build.",
  },
  {
    q: "How long does it take?",
    a: "Most reviews are sent within 48 hours.",
  },
];

const AUDIT_KW: Record<string, string[]> = {
  en: [
    "free website review",
    "architecture studio audit",
    "UX review interior design site",
  ],
  es: [
    "revisión web gratuita",
    "auditoría web arquitectura",
  ],
  fr: [
    "audit site web gratuit",
    "revue site architecture",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/audit",
    title: "Website review for architecture & interior studios",
    description:
      "A focused review of your studio website—first impression, mobile UX, portfolio clarity, and contact flow—with practical next steps.",
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
  const jsonLd = faqSchema(faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-stone pt-36 pb-24 md:pt-48 md:pb-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text="Get a clear audit of your studio website."
              as="h1"
              className="text-page-title max-w-[16ch] text-primary"
            />
            <div className="lg:ml-auto">
              <AnimatedText
                className="text-support max-w-[600px] text-muted"
                delay={0.12}
              >
                We review your current website and show where it loses trust, clarity, and potential clients.
              </AnimatedText>
              <AnimatedText as="div" delay={0.2}>
                <Button asChild size="lg" className="mt-10">
                  <Link href="#audit-form">Request a quick audit</Link>
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
              <AnimatedTitle text="We review the problems that affect trust." as="h2" id="review-heading" className="text-display text-primary" />
            </div>
            <div className="lg:col-span-2">
              <SimpleList items={reviewPoints} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-stone section-space" aria-labelledby="receive-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <AnimatedTitle text="You get clear, practical feedback." as="h2" id="receive-heading" className="text-display text-primary" />
              <div className="mt-12">
                <SimpleList items={receive} />
              </div>
            </div>
            <div>
              <AnimatedTitle text="Best for architecture and interior design studios." as="h2" className="text-display text-primary" />
              <div className="mt-12">
                <SimpleList items={who} />
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
                text="Not sure if your website is working hard enough?"
                as="h2"
                id="audit-form-heading"
                className="text-display text-primary"
              />
              <p className="text-support mt-8 max-w-[520px] text-muted">
                Send your current website. We’ll reply with the clearest issues and the best next step.
              </p>
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
