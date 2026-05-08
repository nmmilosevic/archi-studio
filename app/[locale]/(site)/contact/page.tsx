import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Mail, MessageCircle, Compass, LayoutPanelTop, Smartphone, AtSign } from "lucide-react";
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
  { label: "A clearer first impression of your studio", icon: Compass },
  { label: "Better project presentation", icon: LayoutPanelTop },
  { label: "A mobile experience that feels premium", icon: Smartphone },
  { label: "Easier navigation for clients", icon: Compass },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/contact",
    title: "Contact - REFRAME",
    description:
      "Tell us about your architecture studio website or interior design website.",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-charcoal pt-30 pb-20 text-inverted md:pt-40 md:pb-26">
        <Container>
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text="Tell us about your studio website."
              as="h1"
              className="text-page-title max-w-[16ch] text-inverted"
            />
            <AnimatedText
              className="max-w-[540px] text-[16px] leading-relaxed text-inverted/62 lg:ml-auto"
              delay={0.12}
            >
              Send your current website or project idea. We’ll reply with the best next step.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite pb-[clamp(70px,9vw,120px)] pt-[clamp(54px,7vw,96px)]" aria-label="Contact form">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="flex h-full flex-col">
              <h2 className="text-display font-heading font-medium text-primary">
                The right website should help clients trust your work.
              </h2>
              <div className="mt-8">
                <div className="grid gap-1">
                  {reassurance.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 border-b border-charcoal/10 py-3 last:border-b-0"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center text-bronze/95" aria-hidden="true">
                        <Icon className="h-7 w-7 flex-shrink-0" strokeWidth={1} />
                      </span>
                      <p className="text-[17px] leading-relaxed text-primary/92">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 hidden gap-2 lg:mt-auto lg:grid lg:pt-8">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="group inline-flex items-center gap-3 text-[17px] leading-relaxed text-primary/92 transition-colors hover:text-bronze"
                >
                  <Mail className="h-7 w-7 text-bronze/95" strokeWidth={1} aria-hidden="true" />
                  {BRAND.email}
                </a>
                <a
                  href={BRAND.instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-[17px] leading-relaxed text-primary/92 transition-colors hover:text-bronze"
                >
                  <AtSign className="h-7 w-7 text-bronze/95" strokeWidth={1} aria-hidden="true" />
                  {BRAND.instagram}
                </a>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-[17px] leading-relaxed text-primary/92 transition-colors hover:text-bronze"
                >
                  <MessageCircle className="h-7 w-7 text-bronze/95" strokeWidth={1} aria-hidden="true" />
                  {BRAND.whatsapp}
                </a>
              </div>
            </div>

            <AnimatedText as="div" delay={0.12}>
              <div className="border border-charcoal/20 bg-stone/72 p-5 md:p-8">
                <ContactForm />
              </div>
            </AnimatedText>

            <div className="mt-2 grid gap-2 lg:hidden">
              <a
                href={`mailto:${BRAND.email}`}
                className="group inline-flex items-center gap-3 text-[17px] leading-relaxed text-primary/92 transition-colors hover:text-bronze"
              >
                <Mail className="h-7 w-7 text-bronze/95" strokeWidth={1} aria-hidden="true" />
                {BRAND.email}
              </a>
              <a
                href={BRAND.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-[17px] leading-relaxed text-primary/92 transition-colors hover:text-bronze"
              >
                <AtSign className="h-7 w-7 text-bronze/95" strokeWidth={1} aria-hidden="true" />
                {BRAND.instagram}
              </a>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-[17px] leading-relaxed text-primary/92 transition-colors hover:text-bronze"
              >
                <MessageCircle className="h-7 w-7 text-bronze/95" strokeWidth={1} aria-hidden="true" />
                {BRAND.whatsapp}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
