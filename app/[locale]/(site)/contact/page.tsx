import { setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { generateMetadata as genMeta } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { getContent } from "@/lib/getContent";
import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/contact",
    title: "Contact — REFRAME",
    description:
      "Request a redesign review from REFRAME. Architecture website redesigns for studios on the Costa del Sol.",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const contactContent = content.contact;

  const contact = {
    label: contactContent.label,
    heading: contactContent.heading,
    sub: contactContent.sub,
    locations: contactContent.locations,
    response: contactContent.response,
  };

  return (
    <>
      <PageHero
        label={contact.label}
        heading={contact.heading}
        subtext={contact.sub}
      />

      <section className="py-16 md:py-24 bg-offwhite" aria-label="Contact section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left info column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact details */}
              <div>
                <h2 className="font-heading text-[20px] font-medium text-primary mb-6">
                  Contact directly
                </h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    aria-label={`Email: ${BRAND.email}`}
                  >
                    <Mail
                      className="h-4 w-4 text-bronze flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-body text-[14px] text-muted group-hover:text-bronze transition-colors duration-200">
                      {BRAND.email}
                    </span>
                  </a>
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    aria-label={`WhatsApp: ${BRAND.whatsapp}`}
                  >
                    <MessageCircle
                      className="h-4 w-4 text-bronze flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-body text-[14px] text-muted group-hover:text-bronze transition-colors duration-200">
                      {BRAND.whatsapp}
                    </span>
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="border-l border-bronze/30 pl-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock
                    className="h-3.5 w-3.5 text-bronze"
                    aria-hidden="true"
                  />
                  <span className="font-mono-label text-[14px] tracking-widest text-bronze uppercase">
                    Response time
                  </span>
                </div>
                <p className="font-body text-[14px] text-muted leading-relaxed">
                  {contact.response}
                </p>
              </div>

              {/* Locations */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin
                    className="h-3.5 w-3.5 text-bronze"
                    aria-hidden="true"
                  />
                  <span className="font-mono-label text-[14px] tracking-widest text-bronze uppercase">
                    Service area
                  </span>
                </div>
                <p className="font-body text-[14px] text-muted leading-relaxed">
                  {contact.locations}
                </p>
              </div>

              {/* What to expect */}
              <div className="pt-4 border-t border-charcoal/8">
                <h3 className="font-heading text-[16px] font-medium text-primary mb-4">
                  What happens next
                </h3>
                <div className="space-y-3">
                  {[
                    "I review the current studio website",
                    "I look for the clearest first-impression gap",
                    "I reply within 24 hours with a direct next step",
                    "If there is a strong opportunity, the preview direction starts there",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-mono-label text-[14px] text-bronze tracking-widest flex-shrink-0 mt-0.5">
                        0{i + 1}
                      </span>
                      <span className="font-body text-[14px] text-muted leading-snug">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-3 bg-stone p-8 md:p-12">
              <h2 className="font-heading text-[24px] font-medium text-primary mb-8">
                Send the current site
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
