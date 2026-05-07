import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, MapPin, Tag } from "lucide-react";

const VALID_SLUGS = [
  "villa-architecture-studio",
  "interior-design-marbella",
  "renovation-studio-estepona",
  "project-page-system",
];

export function generateStaticParams() {
  return ["en", "es", "fr"].flatMap((locale) =>
    VALID_SLUGS.map((slug) => ({ locale, slug }))
  );
}

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getContent(locale);

  const index = VALID_SLUGS.indexOf(slug);
  if (index === -1) return {};

  return genMeta({
    locale,
    path: `/work/${slug}`,
    title: `${content.work.items[index].title} | Website Redesign Study`,
    description: content.work.items[index].challenge,
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  const index = VALID_SLUGS.indexOf(slug);
  if (index === -1) notFound();

  const item = {
    title: content.work.items[index].title,
    category: content.work.items[index].category,
    location: content.work.items[index].location,
    challenge: content.work.items[index].challenge,
    what: content.work.items[index].what,
    slug,
  };

  const improvements = {
    visual: [
      "Sharper first-screen hierarchy around the studio's strongest work",
      "Warm editorial palette that supports photography without overpowering it",
      "Browser and mobile compositions designed for immediate credibility",
      "Portfolio pages with stronger rhythm, cropping, and whitespace",
    ],
    ux: [
      "Mobile-first presentation for owners opening the site from email or Instagram",
      "Clear enquiry path without burying the contact point",
      "Project structure that makes scope, location, and type easier to scan",
      "Fast-loading image strategy with stable preview dimensions",
    ],
    seo: [
      "Local landing pages targeting city-level searches",
      "Structured data for ProfessionalService schema",
      "Hreflang setup for EN/ES/FR versions",
      "Image alt structure and metadata around architecture website searches",
    ],
  };

  const previewImages = {
    hero: index % 2 === 0 ? assetPath("/images/redesign-preview.png") : assetPath("/images/heromock.png"),
    large: assetPath("/images/after.png"),
    detail: assetPath("/images/redesign-preview.png"),
    mobile: assetPath("/images/heromock.png"),
  };

  return (
    <>
      {/* Back link */}
      <div className="pt-28 pb-4 bg-stone">
        <Container>
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 font-mono-label text-[14px] tracking-widest text-muted/60 uppercase hover:text-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
          >
            <ArrowLeft className="h-3 w-3" aria-hidden="true" />
            Back to work
          </Link>
        </Container>
      </div>

      {/* Hero */}
      <section className="pt-6 pb-16 bg-stone" aria-label="Case study hero">
        <Container>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="flex items-center gap-1.5 font-mono-label text-[14px] tracking-widest text-bronze uppercase">
              <Tag className="h-3 w-3" aria-hidden="true" />
              {item.category}
            </span>
            <span className="flex items-center gap-1.5 font-mono-label text-[14px] tracking-widest text-muted/60 uppercase">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {item.location}
            </span>
          </div>

          <AnimatedTitle
            text={item.title}
            as="h1"
            className="text-section text-primary mb-6 max-w-3xl"
          />

          {/* Notice */}
          <div className="inline-flex items-center gap-2 bg-sand/60 border border-bronze/20 px-4 py-2.5 mb-12">
            <span className="font-mono-label text-[14px] tracking-widest text-muted/70 uppercase">
              Concept study — direction and execution demonstrated
            </span>
          </div>

          {/*
            Art direction: website redesign preview for an architecture/interior studio.
            Architecture imagery supports the interface; the product is the website.
          */}
          <div className="relative h-[420px] overflow-hidden border border-charcoal/10 bg-charcoal md:h-[560px]">
            <div className="flex h-10 items-center justify-between border-b border-white/10 px-4">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/28" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/16" />
              </div>
              <span className="font-mono-label text-[14px] uppercase tracking-[0.12em] text-white/45">
                Website redesign preview
              </span>
            </div>
            <div className="relative h-[calc(100%-40px)] overflow-hidden bg-stone">
              <Image
                src={previewImages.hero}
                alt={`${item.title} website redesign preview`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 80vw, 100vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge + What we did */}
      <section className="py-20 md:py-28 bg-offwhite" aria-labelledby="challenge-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 id="challenge-heading" className="font-heading text-[28px] md:text-[36px] font-light text-primary mb-6 leading-snug">
                What the studio was dealing with
              </h2>
              <p className="font-body text-[16px] text-muted leading-relaxed">
                {item.challenge}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-[28px] md:text-[36px] font-light text-primary mb-6 leading-snug">
                The website direction
              </h2>
              <p className="font-body text-[16px] text-muted leading-relaxed">
                {item.what}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Visual system */}
      <section className="py-20 bg-stone" aria-label="Visual design section">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Homepage redesign", size: "lg", src: previewImages.large },
              { label: "Project detail page", size: "md", src: previewImages.detail },
              { label: "Mobile presentation", size: "md", src: previewImages.mobile },
            ].map((img) => (
              <div
                key={img.label}
                className={`${img.size === "lg" ? "md:col-span-2 h-[360px]" : "h-[280px]"} relative overflow-hidden border border-charcoal/10 bg-charcoal group`}
                /*
                  Art direction: interface-led website screenshot. The architecture imagery supports the site preview.
                */
              >
                <Image
                  src={img.src}
                  alt={`${img.label} for ${item.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes={img.size === "lg" ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 30vw, 100vw"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
                  <span className="font-mono-label text-[14px] uppercase tracking-[0.12em] text-white/72">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Improvements breakdown */}
      <section className="py-20 md:py-28 bg-offwhite" aria-labelledby="improvements-heading">
        <Container>
          <h2 id="improvements-heading" className="font-heading text-[28px] md:text-[36px] font-light text-primary mb-14">
            What changed on the website
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal/8">
            {[
              { title: "Visual improvements", items: improvements.visual },
              { title: "UX improvements", items: improvements.ux },
              { title: "SEO improvements", items: improvements.seo },
            ].map((section) => (
              <div key={section.title} className="bg-offwhite p-7 md:p-9">
                <h3 className="font-heading text-[18px] font-medium text-primary mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-bronze flex-shrink-0 mt-1.5" aria-hidden="true" />
                      <span className="font-body text-[14px] text-muted leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <AnimatedTitle
                text="Could your website carry the work better?"
                as="h2"
                className="text-display text-inverted mb-2"
              />
              <AnimatedText
                className="font-body text-[14px] text-inverted/50"
                delay={0.1}
              >
                Start with a redesign review and see where the first impression is falling short.
              </AnimatedText>
            </div>
            <AnimatedText delay={0.2} as="div">
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/audit`}>Request a redesign review</Link>
                </Button>
                <Button asChild variant="outline" size="md" className="border-white/20 text-inverted hover:border-bronze hover:text-bronze">
                  <Link href={`/${locale}/work`}>Back to work</Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
