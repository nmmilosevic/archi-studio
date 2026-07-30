import { setRequestLocale } from "next-intl/server";
import { WorkCard } from "@/components/cards/WorkCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/structured-data";
import { getPageCopy } from "@/lib/page-copy";

interface Props {
  params: Promise<{ locale: string }>;
}

const WORK_INDEX_KW: Record<string, string[]> = {
  en: [
    "architecture studio websites",
    "architecture portfolio website",
    "architecture website case studies",
    "interior design portfolio website",
    "landscape architecture website",
    "architecture website redesign examples",
  ],
  es: [
    "webs estudio arquitectura",
    "casos estudio web arquitectura",
    "portfolio interiorismo",
    "rediseño web ejemplos",
  ],
  fr: [
    "sites studio architecture",
    "études de cas site architecture",
    "portfolio design intérieur",
    "refonte web",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getPageCopy(locale).metadata;
  return buildPageMetadata({
    locale,
    path: "/work",
    title: copy.workTitle,
    description: copy.workDescription,
    keywords: WORK_INDEX_KW[locale] ?? WORK_INDEX_KW.en,
  });
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const workContent = content.work;
  const pageCopy = getPageCopy(locale).work;
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Projects", url: absoluteLocaleUrl(locale, "/work") },
  ]);

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
      <JsonLd data={breadcrumbs} />
      <section className="bg-stone pt-30 pb-18 md:pt-38 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text={pageCopy.heading}
              as="h1"
              className="text-page-title max-w-[16ch] text-primary"
            />
            <AnimatedText
              className="max-w-[560px] text-[16px] leading-relaxed text-muted lg:ml-auto"
              delay={0.12}
            >
              {pageCopy.sub}
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite pb-[clamp(76px,9vw,124px)] pt-[clamp(50px,7vw,90px)]" aria-label={pageCopy.gridAria}>
        <Container>
          <AnimatedTitle
            text={pageCopy.projectsHeading}
            as="h2"
            className="mb-12 max-w-[22ch] font-heading text-[clamp(24px,3vw,38px)] font-light leading-tight text-primary md:mb-16"
          />
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-14 md:gap-y-20">
            {work.items.map((item, i) => (
              <div key={item.slug} className={i % 2 === 1 ? "md:pt-12" : ""}>
                <WorkCard {...item} locale={locale} index={i} viewLabel={pageCopy.viewCaseStudy} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
