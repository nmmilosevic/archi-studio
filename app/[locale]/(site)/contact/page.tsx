import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { BRAND } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

interface Props {
  params: Promise<{ locale: string }>;
}

const CONTACT_KW: Record<string, string[]> = {
  en: [
    "architecture website design contact",
    "architecture studio website",
    "interior design website",
    "landscape architecture website",
    "architecture website redesign",
  ],
  es: [
    "contacto diseño web arquitectura",
    "web estudio arquitectura",
    "web interiorismo",
    "rediseño web arquitectura",
  ],
  fr: [
    "contact site architecture",
    "site studio architecture",
    "site design intérieur",
    "refonte site architecture",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const keywords = CONTACT_KW[locale] ?? CONTACT_KW.en;
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: "Contact | Reframe Studio",
    description:
      "Contact Reframe Studio about an architecture website, interior design studio website, landscape architecture website, portfolio redesign, or search visibility review.",
    keywords,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Contact", url: absoluteLocaleUrl(locale, "/contact") },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
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
              Send your current website or project idea. We’ll reply with the clearest next step.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section
        id="contact-form"
        className="bg-offwhite pb-[clamp(70px,9vw,120px)] pt-[clamp(54px,7vw,96px)]"
        aria-label="Contact form"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="flex h-full flex-col lg:justify-center lg:pr-4">
              <h2 className="max-w-[14ch] font-heading text-[clamp(30px,3.25vw,45px)] font-medium leading-[1.08] tracking-[-0.025em] text-primary">
                The right website should help clients trust your work.
              </h2>
              <p className="mt-7 max-w-[46ch] text-[16px] leading-relaxed text-primary/70">
                We help architecture and interior studios present their work with more clarity, trust, and consistency across desktop and mobile.
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-8 inline-flex w-fit text-[15px] leading-relaxed text-primary/62 transition-colors hover:text-bronze"
              >
                {BRAND.email}
              </a>
            </div>

            <AnimatedText as="div" delay={0.12}>
              <div className="lg:pl-4">
                <div className="border border-charcoal/12 bg-stone/72 p-5 md:p-8">
                  <ContactForm />
                </div>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

    </>
  );
}
