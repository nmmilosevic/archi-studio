import { setRequestLocale } from "next-intl/server";
import { WorkCard } from "@/components/cards/WorkCard";
import { Container } from "@/components/ui/Container";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { buildPageMetadata } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

const WORK_INDEX_KW: Record<string, string[]> = {
  en: [
    "architecture website case studies",
    "interior design portfolio web",
    "website redesign examples",
    "Costa del Sol studios",
  ],
  es: [
    "casos estudio web arquitectura",
    "portfolio interiorismo",
    "rediseño web ejemplos",
  ],
  fr: [
    "études de cas site architecture",
    "portfolio design intérieur",
    "refonte web",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/work",
    title: "Selected work — website redesign studies",
    description:
      "Website redesign studies for architecture and interior design studios—clearer portfolios, stronger positioning, and more credible digital presentation.",
    keywords: WORK_INDEX_KW[locale] ?? WORK_INDEX_KW.en,
  });
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const workContent = content.work;

  const work = {
    items: workContent.items.map((item) => ({
      slug: item.slug,
      title: item.title,
      result: item.cardSummary,
      previewSrc: item.heroDesktop,
    })),
  };

  return (
    <>
      <section className="bg-stone pt-30 pb-18 md:pt-38 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text="Websites for studios with work worth showing properly."
              as="h1"
              className="text-page-title max-w-[16ch] text-primary"
            />
            <AnimatedText
              className="max-w-[560px] text-[16px] leading-relaxed text-muted lg:ml-auto"
              delay={0.12}
            >
              A clear look at how architecture and interior studios can present their work with more clarity, confidence, and visual quality.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite pb-[clamp(76px,9vw,124px)] pt-[clamp(50px,7vw,90px)]" aria-label="Work grid">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-14 md:gap-y-20">
            {work.items.map((item, i) => (
              <div key={item.slug} className={i % 2 === 1 ? "md:pt-12" : ""}>
                <WorkCard {...item} locale={locale} index={i} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
