import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Check } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
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
  "Better mobile readability",
  "Clearer project hierarchy",
  "Stronger studio presentation",
  "Easier navigation",
];

const systemItems = [
  { label: "Homepage", image: "/images/after.png" },
  { label: "Project page", image: "/images/redesign-preview.png" },
  { label: "Mobile experience", image: "/images/heromock.png" },
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
              <AnimatedTitle
                text={item.title}
                as="h1"
                className="text-page-title max-w-[16ch] text-inverted"
              />
            </div>
            <AnimatedText
              className="text-support max-w-[560px] text-inverted/62 lg:ml-auto"
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

      <section className="bg-offwhite pb-[clamp(56px,7vw,92px)] pt-[clamp(56px,7vw,92px)]" aria-labelledby="context-heading">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <AnimatedTitle
              text="The problem."
              as="h2"
              id="context-heading"
              className="text-display text-primary"
            />
            <p className="max-w-[640px] text-[17px] leading-relaxed text-muted">
              {item.challenge}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-stone section-space" aria-labelledby="before-after-heading">
        <Container>
          <div className="mb-16 max-w-[760px]">
            <AnimatedTitle
              text="The improvement."
              as="h2"
              id="before-after-heading"
              className="text-display text-primary"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-sand/16 p-8 md:p-10">
              <h3 className="text-card-title font-heading font-medium text-primary">Before</h3>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">
                The old website made the studio's work difficult to understand on mobile.
              </p>
            </div>
            <div className="border-l border-bronze/45 bg-charcoal p-8 text-inverted md:p-10">
              <h3 className="text-card-title font-heading font-medium text-inverted">After</h3>
              <p className="mt-6 text-[17px] leading-relaxed text-inverted/64">
                We simplified the structure, improved project presentation, and created a clearer navigation system.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite section-space" aria-labelledby="system-heading">
        <Container>
          <div className="mb-16 max-w-[820px]">
            <AnimatedTitle
              text="Key screens."
              as="h2"
              id="system-heading"
              className="text-display text-primary"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {systemItems.map((system) => (
              <div key={system.label} className="group cursor-pointer">
                <div className="relative h-[320px] overflow-hidden bg-stone transition-shadow duration-200 ease-out group-hover:shadow-[0_24px_48px_rgb(16_12_9/0.12)] md:h-[420px]">
                  <Image
                    src={assetPath(system.image)}
                    alt={`${item.title} ${system.label}`}
                    fill
                    className="object-cover object-top transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <p className="mt-5 text-[18px] text-primary transition-all duration-200 ease-out group-hover:translate-y-[2px]">{system.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone pb-[clamp(68px,8vw,108px)] pt-[clamp(58px,7vw,92px)]" aria-labelledby="results-heading">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <AnimatedTitle
              text="The result."
              as="h2"
              id="results-heading"
              className="text-display text-primary"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {results.map((result) => (
                <div key={result} className="flex min-h-[76px] items-center gap-3 border border-charcoal/12 bg-offwhite/64 p-4">
                  <Check className="h-4 w-4 text-bronze" aria-hidden="true" />
                  <p className="text-[16px] leading-relaxed text-primary">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
