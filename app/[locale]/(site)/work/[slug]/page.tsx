import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, MapPin, Tag } from "lucide-react";

const VALID_SLUGS = [
  "villa-architecture-studio",
  "interior-design-marbella",
  "renovation-studio-estepona",
  "project-page-system",
];

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale });

  const index = VALID_SLUGS.indexOf(slug);
  if (index === -1) return {};

  return genMeta({
    locale,
    path: `/work/${slug}`,
    title: `${t(`work.items.${index}.title`)} | Concept Study`,
    description: t(`work.items.${index}.challenge`),
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale });

  const index = VALID_SLUGS.indexOf(slug);
  if (index === -1) notFound();

  const item = {
    title: t(`work.items.${index}.title`),
    category: t(`work.items.${index}.category`),
    location: t(`work.items.${index}.location`),
    challenge: t(`work.items.${index}.challenge`),
    what: t(`work.items.${index}.what`),
    slug,
  };

  const improvements = {
    visual: [
      "New typographic identity using Cormorant Garamond for headings",
      "Warm stone-based color palette aligned with Mediterranean context",
      "Full-bleed imagery with editorial proportions",
      "Asymmetric layout grid with generous whitespace",
    ],
    ux: [
      "Mobile-first approach with fluid typography",
      "Frictionless enquiry path from any page",
      "Project filtering by location and project type",
      "Fast loading with optimized image delivery",
    ],
    seo: [
      "Local landing pages targeting city-level searches",
      "Structured data for ProfessionalService schema",
      "Hreflang setup for EN/ES/FR versions",
      "Google Business Profile optimization",
    ],
  };

  return (
    <>
      {/* Back link */}
      <div className="pt-28 pb-4 bg-stone">
        <Container>
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 font-mono-label text-[11px] tracking-widest text-muted/60 uppercase hover:text-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
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
            <span className="flex items-center gap-1.5 font-mono-label text-[10px] tracking-widest text-bronze uppercase">
              <Tag className="h-3 w-3" aria-hidden="true" />
              {item.category}
            </span>
            <span className="flex items-center gap-1.5 font-mono-label text-[10px] tracking-widest text-muted/60 uppercase">
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
            <span className="font-mono-label text-[10px] tracking-widest text-muted/70 uppercase">
              Concept study — direction and execution demonstrated
            </span>
          </div>

          {/*
            Art direction: Cinematic editorial photography, Mediterranean villa,
            warm stone paving, pool, olive trees, golden hour. Architectural Digest mood.
            Muted beige and soft bronze. Clean minimal composition.
            Replace with: project-specific hero photography.
          */}
          <div className="h-[420px] md:h-[560px] bg-gradient-to-br from-sand via-[#DDD0BF] to-[#C9BAA6] relative overflow-hidden">
            <div className="absolute inset-0 flex items-end p-8">
              <span className="font-mono-label text-[10px] text-muted/40 tracking-widest uppercase">
                {item.location} — editorial photography placeholder
              </span>
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
                The scope of work
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
              { label: "Homepage redesign", size: "lg" },
              { label: "Project detail page", size: "md" },
              { label: "Mobile view", size: "md" },
            ].map((img) => (
              <div
                key={img.label}
                className={`${img.size === "lg" ? "md:col-span-2 h-[360px]" : "h-[280px]"} bg-gradient-to-br from-sand to-[#D4C9B8] relative overflow-hidden group`}
                /*
                  Art direction: Clean editorial website screenshots with warm stone palette,
                  Cormorant Garamond headings, generous whitespace, architecture photography.
                  Replace with: actual design screenshots.
                */
              >
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-mono-label text-[10px] text-muted/40 tracking-widest uppercase">
                    {img.label} — design preview placeholder
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
            What changed
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
                      <span className="font-body text-[13px] text-muted leading-relaxed">
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
                text="Want this for your studio?"
                as="h2"
                className="text-display text-inverted mb-2"
              />
              <AnimatedText
                className="font-body text-[14px] text-inverted/50"
                delay={0.1}
              >
                Start with a free audit and see what your site could become.
              </AnimatedText>
            </div>
            <AnimatedText delay={0.2} as="div">
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/audit`}>Request a free audit</Link>
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
