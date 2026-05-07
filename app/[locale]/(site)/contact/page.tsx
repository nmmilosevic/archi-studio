import { setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { generateMetadata as genMeta } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { getContent } from "@/lib/getContent";
import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";

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
      "Send the current studio website. REFRAME reviews the first impression and, if there is a clear opportunity, prepares a private redesign preview.",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const c = content.contact;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-charcoal pt-36 pb-20 md:pt-44 md:pb-28">
        <Container>
          <div className="max-w-[860px]">
            <AnimatedTitle
              text={c.heading}
              as="h1"
              className="text-section text-inverted mb-7"
            />
            <AnimatedText
              className="max-w-[560px] text-[17px] md:text-[18px] leading-[1.68] text-inverted/60"
              delay={0.18}
            >
              {c.sub}
            </AnimatedText>
          </div>
        </Container>
      </section>

      {/* ── Body ──────────────────────────────────────────────────── */}
      <section className="bg-offwhite py-20 md:py-28" aria-label="Contact">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">

            {/* Left — editorial content */}
            <AnimatedText as="div" delay={0.06}>
              <div className="space-y-14">

                {/* What happens next */}
                <div>
                  <p className="annotation-meta mb-8" style={{ opacity: 0.45 }}>
                    What happens next
                  </p>
                  <div>
                    {(c.steps as readonly string[]).map((step, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[36px_1fr] gap-4 py-6 border-b border-charcoal/8 first:border-t first:border-charcoal/8"
                      >
                        <span className="font-mono-label text-[11px] tracking-[0.14em] text-bronze pt-[3px]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="font-body text-[15px] leading-[1.72] text-muted">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact links */}
                <div className="space-y-3">
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    aria-label={`Email: ${BRAND.email}`}
                  >
                    <Mail className="h-3.5 w-3.5 text-bronze flex-shrink-0" aria-hidden="true" />
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
                    <MessageCircle className="h-3.5 w-3.5 text-bronze flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-[14px] text-muted group-hover:text-bronze transition-colors duration-200">
                      {BRAND.whatsapp}
                    </span>
                  </a>
                </div>

                {/* Location + response */}
                <div className="space-y-2">
                  <p className="annotation-meta" style={{ opacity: 0.4 }}>
                    {c.response}
                  </p>
                  <p className="annotation-meta" style={{ opacity: 0.3 }}>
                    {c.locations}
                  </p>
                </div>

              </div>
            </AnimatedText>

            {/* Right — visual card + form */}
            <AnimatedText as="div" delay={0.14}>
              <div>

                {/* Visual: mini site comparison */}
                <div className="mb-8 grid grid-cols-2 gap-3" aria-hidden="true">
                  {/* Current site mockup */}
                  <div className="overflow-hidden border border-charcoal/10 opacity-50 grayscale">
                    <div className="flex h-7 items-center gap-1.5 border-b border-charcoal/10 px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-charcoal/25" />
                      <span className="h-1.5 w-1.5 rounded-full bg-charcoal/18" />
                      <span className="h-1.5 w-1.5 rounded-full bg-charcoal/12" />
                    </div>
                    <div className="bg-stone p-4 space-y-2.5">
                      <div className="h-2 bg-charcoal/20 w-1/2 rounded-none" />
                      <div className="h-1.5 bg-charcoal/12 w-full" />
                      <div className="h-1.5 bg-charcoal/10 w-4/5" />
                      <div className="mt-3 grid grid-cols-2 gap-1.5">
                        <div className="aspect-[4/3] bg-charcoal/10" />
                        <div className="aspect-[4/3] bg-charcoal/10" />
                        <div className="aspect-[4/3] bg-charcoal/8" />
                        <div className="aspect-[4/3] bg-charcoal/8" />
                      </div>
                    </div>
                    <div className="border-t border-charcoal/8 px-3 py-2">
                      <span className="font-mono-label text-[9px] tracking-[0.16em] uppercase text-muted/50">
                        Current site
                      </span>
                    </div>
                  </div>

                  {/* Reframed preview mockup */}
                  <div className="overflow-hidden border border-bronze/20">
                    <div className="flex h-7 items-center justify-between gap-1.5 border-b border-charcoal/80 bg-charcoal px-3">
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/12" />
                      </div>
                      <span className="font-mono-label text-[8px] tracking-widest uppercase text-white/30">
                        preview
                      </span>
                    </div>
                    <div className="bg-stone p-4 space-y-3">
                      <div className="h-px bg-bronze/40 w-8" />
                      <div className="font-heading text-[13px] font-medium leading-[0.92] text-primary">
                        Studio<br />Alonso
                      </div>
                      <div className="h-1.5 bg-charcoal/12 w-3/4" />
                      <div className="mt-2 aspect-[16/9] bg-sand/35" />
                    </div>
                    <div className="border-t border-charcoal/10 bg-stone px-3 py-2">
                      <span className="font-mono-label text-[9px] tracking-[0.16em] uppercase text-bronze/70">
                        Private preview
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form card */}
                <div className="bg-stone px-8 py-10 md:px-10 md:py-12">
                  <div className="mb-8">
                    <h2 className="font-heading text-[26px] font-medium leading-tight text-primary mb-3">
                      Send the current site.
                    </h2>
                    <p className="font-body text-[14px] leading-relaxed text-muted max-w-[400px]">
                      Share the website, location, and what feels wrong with the current presentation.
                    </p>
                  </div>
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
