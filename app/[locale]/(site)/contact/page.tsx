import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { BRAND } from "@/lib/constants";
import { generateMetadata as genMeta } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

const reassurance = [
  "Clear pricing",
  "Fast delivery",
  "Architecture-focused design",
  "Optional hosting and updates",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/contact",
    title: "Contact — REFRAME",
    description:
      "Tell REFRAME about your architecture or interior design studio website.",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-charcoal pt-36 pb-24 text-inverted md:pt-48 md:pb-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text="Tell us about your studio website."
              as="h1"
              className="text-section max-w-[920px] text-inverted"
            />
            <AnimatedText
              className="max-w-[560px] text-[18px] leading-[1.65] text-inverted/62 lg:ml-auto"
              delay={0.12}
            >
              Send your current website or project idea. We’ll reply with the best next step.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-28 md:py-40" aria-label="Contact form">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <h2 className="font-heading text-[38px] font-medium leading-tight text-primary">
                Start with the essentials.
              </h2>
              <div className="mt-12 grid gap-5">
                {reassurance.map((item) => (
                  <p key={item} className="border-t border-charcoal/10 pt-5 text-[18px] text-primary">
                    {item}
                  </p>
                ))}
              </div>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-12 inline-flex items-center gap-3 text-[16px] text-muted transition-colors hover:text-bronze"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {BRAND.email}
              </a>
            </div>

            <AnimatedText as="div" delay={0.12}>
              <div className="border border-charcoal/10 bg-stone p-6 md:p-10">
                <ContactForm />
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
