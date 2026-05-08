import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import { assetPath } from "@/lib/paths";

const VALID_SLUGS = [
  "villa-architecture-studio",
  "interior-design-marbella",
  "renovation-studio-estepona",
  "project-page-system",
];

const results = [
  "Clearer project presentation",
  "More premium perception",
  "Better mobile experience",
  "Easier content management",
];

const systemItems = [
  { label: "Homepage", image: "/images/after.png" },
  { label: "Project page", image: "/images/redesign-preview.png" },
  { label: "Mobile version", image: "/images/heromock.png" },
  { label: "Contact flow", image: "/images/before.png" },
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
    title: `${content.work.items[index].title} | Website Case Study`,
    description: content.work.items[index].challenge,
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const index = VALID_SLUGS.indexOf(slug);

  if (index === -1) notFound();

  const item = content.work.items[index];
  const heroImage = index % 2 === 0 ? "/images/redesign-preview.png" : "/images/heromock.png";

  return (
    <>
      <section className="bg-charcoal pt-32 text-inverted md:pt-44">
        <Container>
          <Link
            href={`/${locale}/work`}
            className="mb-12 inline-flex items-center gap-2 text-[15px] text-inverted/45 transition-colors hover:text-bronze"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Work
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-6 text-[16px] text-bronze">{item.category}</p>
              <AnimatedTitle
                text={item.title}
                as="h1"
                className="text-section max-w-[920px] text-inverted"
              />
            </div>
            <AnimatedText
              className="max-w-[560px] text-[17px] leading-[1.65] text-inverted/62 lg:ml-auto"
              delay={0.12}
            >
              {item.location}. Website redesign, portfolio structure, mobile presentation, and contact flow.
            </AnimatedText>
          </div>
        </Container>

        <div className="mt-20">
          <div className="relative h-[58vh] min-h-[420px] overflow-hidden">
            <Image
              src={assetPath(heroImage)}
              alt={`${item.title} website preview`}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-28 md:py-40" aria-labelledby="context-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedTitle
              text="Context."
              as="h2"
              id="context-heading"
              className="text-display text-primary"
            />
            <p className="max-w-[720px] text-[19px] leading-[1.7] text-muted">
              {item.challenge}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-stone py-28 md:py-40" aria-labelledby="before-after-heading">
        <Container>
          <div className="mb-16 max-w-[760px]">
            <AnimatedTitle
              text="Before and after."
              as="h2"
              id="before-after-heading"
              className="text-display text-primary"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="border border-charcoal/10 bg-offwhite p-8 md:p-10">
              <h3 className="font-heading text-[34px] font-medium text-primary">Before</h3>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">
                The website did not make the studio’s work easy to understand, trust, or enquire about.
              </p>
            </div>
            <div className="border border-charcoal/10 bg-charcoal p-8 text-inverted md:p-10">
              <h3 className="font-heading text-[34px] font-medium text-inverted">After</h3>
              <p className="mt-6 text-[17px] leading-relaxed text-inverted/64">
                A calmer website system with clearer hierarchy, stronger project presentation, and better mobile rhythm.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-28 md:py-40" aria-labelledby="system-heading">
        <Container>
          <div className="mb-16 max-w-[820px]">
            <AnimatedTitle
              text="Website system."
              as="h2"
              id="system-heading"
              className="text-display text-primary"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {systemItems.map((system) => (
              <div key={system.label}>
                <div className="relative h-[320px] overflow-hidden bg-stone md:h-[420px]">
                  <Image
                    src={assetPath(system.image)}
                    alt={`${item.title} ${system.label}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <p className="mt-5 text-[18px] text-primary">{system.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone py-24 md:py-32" aria-labelledby="results-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <AnimatedTitle
              text="Results."
              as="h2"
              id="results-heading"
              className="text-display text-primary"
            />
            <div className="grid gap-5">
              {results.map((result) => (
                <div key={result} className="flex items-start gap-4 border-t border-charcoal/10 pt-5">
                  <Check className="mt-1 h-4 w-4 text-bronze" aria-hidden="true" />
                  <p className="text-[18px] text-primary">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-28 text-inverted md:py-40">
        <Container>
          <div className="mx-auto max-w-[820px] text-center">
            <AnimatedTitle
              text="Want your website to feel like this?"
              as="h2"
              className="text-section text-inverted"
            />
            <AnimatedText as="div" delay={0.16}>
              <Button asChild variant="secondary" size="lg" className="mt-10">
                <Link href={`/${locale}/audit`}>Request a website review</Link>
              </Button>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
