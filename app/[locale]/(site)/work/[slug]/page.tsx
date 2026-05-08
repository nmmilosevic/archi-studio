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
import { ArrowLeft } from "lucide-react";

const VALID_SLUGS = [
  "villa-architecture-studio",
  "interior-design-marbella",
  "renovation-studio-estepona",
  "project-page-system",
];

// Per-project copy keyed by slug
const projectCopy: Record<
  string,
  {
    quote: string;
    problems: string[];
    strategy: { label: string; detail: string }[];
  }
> = {
  "villa-architecture-studio": {
    quote: "Strong portfolio. Website that made it look like everyone else.",
    problems: [
      "No visual hierarchy on first load",
      "Mobile layout compressed the best photography",
      "No clear path from project to enquiry",
    ],
    strategy: [
      {
        label: "Homepage redesign",
        detail:
          "New hierarchy built around the studio's strongest photography.",
      },
      {
        label: "Project pages",
        detail:
          "Each project gets context, scope, and location — not just images.",
      },
      {
        label: "Mobile-first",
        detail: "Every layout tested on phone before desktop.",
      },
      {
        label: "Multilingual",
        detail: "EN/ES/FR structure ready for international clients.",
      },
    ],
  },
  "interior-design-marbella": {
    quote:
      "Beautiful interiors. Website that felt like a generic portfolio template.",
    problems: [
      "Atmosphere lost in compression",
      "No material or mood communication",
      "Contact buried three pages deep",
    ],
    strategy: [
      {
        label: "Art direction",
        detail:
          "Editorial palette and spacing that lets photography breathe.",
      },
      {
        label: "Portfolio flow",
        detail: "Projects presented with material context and scale.",
      },
      {
        label: "Contact path",
        detail: "Enquiry accessible from every project page.",
      },
      {
        label: "Local SEO",
        detail: "Structured for Marbella and Costa del Sol searches.",
      },
    ],
  },
  "renovation-studio-estepona": {
    quote:
      "A studio built on referrals. A website that couldn't close the gap for new clients.",
    problems: [
      "No clear service framing for international visitors",
      "No multilingual structure",
      "Portfolio with no trust-building context",
    ],
    strategy: [
      {
        label: "Clearer services",
        detail: "Renovation scope defined in plain language.",
      },
      {
        label: "Preview-led workflow",
        detail: "Client sees direction before committing.",
      },
      {
        label: "Multilingual",
        detail: "EN/ES foundations for international discovery.",
      },
      {
        label: "Trust structure",
        detail: "Portfolio built to inform, not just impress.",
      },
    ],
  },
  "project-page-system": {
    quote: "Dozens of projects. No consistent system to show them well.",
    problems: [
      "Inconsistent project formats",
      "No location or scope context",
      "Photography without narrative",
    ],
    strategy: [
      {
        label: "Reusable template",
        detail:
          "One strong system that works for every project type.",
      },
      {
        label: "Portfolio hierarchy",
        detail: "Scope, location, materials — always visible.",
      },
      {
        label: "Location metadata",
        detail: "Each project optimized for city-level search.",
      },
      {
        label: "Image-led layout",
        detail:
          "Photography presented at full resolution with editorial rhythm.",
      },
    ],
  },
};

const fallbackCopy = projectCopy["villa-architecture-studio"];

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

  const copy = projectCopy[slug] ?? fallbackCopy;

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

  const images = {
    hero:
      index % 2 === 0
        ? assetPath("/images/redesign-preview.png")
        : assetPath("/images/heromock.png"),
    large: assetPath("/images/after.png"),
    detail: assetPath("/images/redesign-preview.png"),
    mobile: assetPath("/images/heromock.png"),
    before: assetPath("/images/before.png"),
  };

  // Derive a clean title for line-break formatting
  const titleParts = item.title.split(" — ");
  const titleMain = titleParts[0] ?? item.title;
  const titleSub = titleParts[1];

  return (
    <>
      {/* ── HERO (charcoal) ─────────────────────────────────── */}
      <section
        className="bg-charcoal pt-32 md:pt-40 pb-0"
        aria-label="Case study hero"
      >
        <Container>
          {/* Back link */}
          <div className="mb-10">
            <Link
              href={`/${locale}/work`}
              className="inline-flex items-center gap-2 font-body text-inverted/30 hover:text-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            >
              <ArrowLeft className="h-3 w-3" aria-hidden="true" />
              All work
            </Link>
          </div>

          {/* Metadata row */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-body text-bronze">
              {item.category}
            </span>
            <span className="font-body text-inverted/20" aria-hidden="true">
              ·
            </span>
            <span className="font-body text-inverted/40">
              {item.location}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-section text-inverted mb-6 max-w-4xl">
            {titleMain}
            {titleSub && (
              <>
                <br />
                <span className="text-inverted/40">{titleSub}</span>
              </>
            )}
          </h1>

          {/* Sub-description */}
          <p className="font-body text-[16px] text-inverted/55 max-w-xl mb-8 leading-relaxed">
            {item.challenge.split(".")[0]}.
          </p>

          {/* Concept disclaimer */}
          <p className="font-body text-inverted/22 mb-14">
            Concept study — direction and execution demonstrated
          </p>
        </Container>

        {/* Hero image — full-width cinematic, transitions bg from charcoal to stone */}
        <div className="relative">
          <div className="h-[60vh] md:h-[75vh] overflow-hidden shadow-[0_32px_80px_rgb(10_10_10/0.15)] mx-0">
            <Image
              src={images.hero}
              alt={`${item.title} website redesign preview`}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </div>
          <div className="h-px bg-bronze/35 mx-6 md:mx-12 lg:mx-20" aria-hidden="true" />
          <div className="px-6 md:px-12 lg:px-20 pt-3 pb-0 bg-charcoal">
            <p className="font-body text-inverted/25">
              Homepage redesign preview
            </p>
          </div>
          {/* Gradient transition from charcoal to stone */}
          <div
            className="h-20 bg-gradient-to-b from-charcoal to-stone"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── SECTION 1: CONTEXT (offwhite) ───────────────────── */}
      <section
        className="py-24 md:py-32 bg-offwhite"
        aria-labelledby="context-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: index + label */}
            <div className="lg:col-span-4">
              <p className="font-body text-bronze/60 mb-5">01</p>
              <h2
                id="context-heading"
                className="font-heading text-[clamp(28px,4vw,44px)] font-medium text-primary leading-[0.95]"
              >
                The situation
              </h2>
            </div>
            {/* Right: challenge copy */}
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="font-body text-[16px] text-muted leading-relaxed">
                {item.challenge}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 2: THE PROBLEM (stone) ──────────────────── */}
      <section
        className="py-24 md:py-32 bg-stone"
        aria-labelledby="problem-heading"
      >
        <Container>
          {/* Large display quote */}
          <div className="max-w-[70%] mb-16">
            <AnimatedTitle
              text={copy.quote}
              as="h2"
              id="problem-heading"
              className="text-display text-primary"
            />
          </div>

          {/* Problem bullets as rows with bronze left-rule */}
          <div className="space-y-0 border-t border-border">
            {copy.problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-5 border-b border-border"
              >
                <span className="font-body text-bronze/50 mt-0.5 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-[15px] text-primary leading-snug pl-4 border-l border-bronze/30">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: STRATEGY (offwhite) ──────────────────── */}
      <section
        className="py-24 md:py-32 bg-offwhite"
        aria-labelledby="strategy-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: heading + what copy */}
            <div className="lg:col-span-5">
              <p className="font-body text-bronze/60 mb-5">03</p>
              <h2
                id="strategy-heading"
                className="font-heading text-[clamp(28px,4vw,44px)] font-medium text-primary leading-[0.95] mb-7"
              >
                Website direction
              </h2>
              <p className="font-body text-[15px] text-muted leading-relaxed">
                {item.what}
              </p>
            </div>

            {/* Right: numbered strategic decisions */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-0 border-t border-border">
                {copy.strategy.map((s, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[24px_1fr] gap-5 py-6 border-b border-border"
                  >
                    <span className="font-body text-bronze/50 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-heading text-[15px] font-medium text-primary mb-1">
                        {s.label}
                      </p>
                      <p className="font-body text-[14px] text-muted leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: DESIGN DIRECTION (stone) ─────────────── */}
      <section
        className="py-24 md:py-32 bg-stone"
        aria-labelledby="design-heading"
      >
        <Container>
          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body text-bronze/60 mb-4">04</p>
              <h2
                id="design-heading"
                className="font-heading text-[clamp(28px,4vw,44px)] font-medium text-primary leading-[0.95]"
              >
                Design direction
              </h2>
            </div>
          </div>

          {/* Asymmetric gallery row 1: large (2/3) + tall narrow (1/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Large image */}
            <div className="md:col-span-2 group">
              <div className="relative h-[340px] md:h-[480px] overflow-hidden shadow-[0_16px_40px_rgb(10_10_10/0.08)]">
                <Image
                  src={images.large}
                  alt={`${item.title} after-state redesign`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
              <div className="h-px bg-bronze/30 mt-0" aria-hidden="true" />
              <p className="mt-2.5 font-body text-muted/40">
                Homepage redesign
              </p>
            </div>

            {/* Tall narrow image */}
            <div className="group">
              <div className="relative h-[280px] md:h-[480px] overflow-hidden shadow-[0_16px_40px_rgb(10_10_10/0.08)]">
                <Image
                  src={images.detail}
                  alt={`${item.title} design detail`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="h-px bg-bronze/30 mt-0" aria-hidden="true" />
              <p className="mt-2.5 font-body text-muted/40">
                Project page detail
              </p>
            </div>
          </div>

          {/* Gallery row 2: two medium images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group">
              <div className="relative h-[260px] overflow-hidden shadow-[0_16px_40px_rgb(10_10_10/0.08)]">
                <Image
                  src={images.mobile}
                  alt={`${item.title} mobile layout`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="h-px bg-bronze/30" aria-hidden="true" />
              <p className="mt-2.5 font-body text-muted/40">
                Mobile layout
              </p>
            </div>
            <div className="group">
              <div className="relative h-[260px] overflow-hidden shadow-[0_16px_40px_rgb(10_10_10/0.08)]">
                <Image
                  src={images.before}
                  alt={`${item.title} before state audit`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="h-px bg-bronze/30" aria-hidden="true" />
              <p className="mt-2.5 font-body text-muted/40">
                Before audit
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 5: UX & RESPONSIVE (offwhite) ───────────── */}
      <section
        className="py-24 md:py-32 bg-offwhite"
        aria-labelledby="ux-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: UX copy */}
            <div className="lg:col-span-5">
              <p className="font-body text-bronze/60 mb-5">05</p>
              <h2
                id="ux-heading"
                className="font-heading text-[clamp(28px,4vw,44px)] font-medium text-primary leading-[0.95] mb-8"
              >
                What changed for the user
              </h2>
              <ul className="space-y-0 border-t border-border">
                {improvements.ux.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 py-5 border-b border-border"
                  >
                    <div
                      className="h-1 w-1 rounded-full bg-bronze flex-shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <p className="font-body text-[14px] text-muted leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: visual composition implying mobile + desktop */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative">
                {/* Desktop image */}
                <div className="relative h-[300px] overflow-hidden shadow-[0_16px_40px_rgb(10_10_10/0.08)]">
                  <Image
                    src={images.large}
                    alt={`${item.title} desktop layout`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 40vw, 80vw"
                  />
                </div>

                {/* Mobile image — offset, floating over desktop */}
                <div className="absolute -bottom-10 right-0 w-[38%] shadow-[0_24px_56px_rgb(10_10_10/0.18)] border border-border/50 z-10">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={images.mobile}
                      alt={`${item.title} mobile layout`}
                      fill
                      className="object-cover object-top"
                      sizes="25vw"
                    />
                  </div>
                </div>

                {/* Annotation */}
                <p className="font-body text-bronze/60 mt-3">
                  Desktop + mobile composition
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 6: WHAT CHANGED (stone) ─────────────────── */}
      <section
        className="py-24 md:py-32 bg-stone"
        aria-labelledby="changes-heading"
      >
        <Container>
          {/* Section header */}
          <div className="mb-14">
            <p className="font-body text-bronze/60 mb-5">06</p>
            <h2
              id="changes-heading"
              className="font-heading text-[clamp(28px,4vw,44px)] font-medium text-primary leading-[0.95]"
            >
              What changed on the website
            </h2>
          </div>

          {/* Three categories as vertical numbered items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/40">
            {[
              {
                label: "Visual",
                items: improvements.visual,
              },
              {
                label: "UX",
                items: improvements.ux,
              },
              {
                label: "SEO",
                items: improvements.seo,
              },
            ].map((category, ci) => (
              <div key={ci} className="bg-stone p-8 md:p-10">
                <p className="font-body text-bronze mb-6">
                  {String(ci + 1).padStart(2, "0")} — {category.label}
                </p>
                <ul className="space-y-0">
                  {category.items.map((item, ii) => (
                    <li
                      key={ii}
                      className="py-3.5 border-t border-border/60 first:border-t-0"
                    >
                      <p className="font-body text-[13px] text-muted leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 7: FINAL CTA (charcoal) ─────────────────── */}
      <section className="py-28 md:py-36 bg-charcoal" aria-label="Call to action">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedTitle
              text="Could your website carry the work this well?"
              as="h2"
              className="text-section text-inverted mb-5"
            />
            <AnimatedText delay={0.1} className="font-body text-[16px] text-inverted/50 mb-10">
              A free review is the first step. See where the first impression is
              falling short before committing to anything.
            </AnimatedText>

            <AnimatedText delay={0.2} as="div">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/audit`}>
                    Request a redesign review
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="md"
                  className="border-white/20 text-inverted hover:border-bronze hover:text-bronze"
                >
                  <Link href={`/${locale}/work`}>See more work</Link>
                </Button>
              </div>
            </AnimatedText>

            <p className="font-body text-inverted/22">
              Free review · No commitment · Response within 48 hours
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
