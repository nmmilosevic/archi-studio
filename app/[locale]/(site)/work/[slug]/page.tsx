import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyPageTemplate } from "@/components/work/CaseStudyPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import en from "@/content/en";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";

const VALID_SLUGS: readonly string[] = en.work.items.map((item) => item.slug);

export function generateStaticParams() {
  return ["en", "es", "fr"].flatMap((locale) =>
    VALID_SLUGS.map((slug) => ({ locale, slug }))
  );
}

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

const PROJECT_SEO: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "villa-architecture-studio": {
    title: "Aurea Studio Website Concept | Reframe Studio",
    description:
      "Architecture studio website concept with editorial direction, structured project UX, mobile clarity, and immersive villa case studies.",
  },
  "casa-noma-marbella": {
    title: "Casa Noma Website Redesign | Reframe Studio",
    description:
      "Interior design website concept with warm editorial layouts, refined typography, immersive project stories, and a smooth mobile experience.",
  },
  "forma-sur-malaga": {
    title: "Forma Sur Website Identity | Reframe Studio",
    description:
      "Architecture website concept for a Malaga studio with a high-contrast identity, clear project navigation, mobile structure, and CMS.",
  },
  "terral-studio-estepona": {
    title: "Terral Studio Portfolio System | Reframe Studio",
    description:
      "Landscape studio website concept with Mediterranean art direction, image-led project flow, service context, mobile UX, and CMS.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getContent(locale);
  const index = VALID_SLUGS.indexOf(slug);

  if (index === -1) return {};

  const item = content.work.items[index];
  const seo = locale === "en" ? PROJECT_SEO[slug] : undefined;
  return buildPageMetadata({
    locale,
    path: `/work/${slug}`,
    title: seo?.title ?? `${item.title} | Reframe Studio`,
    description: seo?.description ?? item.summary,
    ogTitle: seo?.title ?? `${item.title} | Reframe Studio`,
    ogDescription: seo?.description ?? item.summary,
    twitterTitle: seo?.title ?? `${item.title} | Reframe Studio`,
    twitterDescription: seo?.description ?? item.summary,
    ogImage: item.heroDesktop,
    twitterImage: item.heroDesktop,
    keywords: [
      item.title,
      "architecture website",
      "interior design website",
      "website redesign",
      item.location,
    ],
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const index = VALID_SLUGS.indexOf(slug);

  if (index === -1) notFound();

  const item = content.work.items[index];
  const labels = content.work.caseStudy;
  const articleUrl = absoluteLocaleUrl(locale, `/work/${slug}`);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Projects", url: absoluteLocaleUrl(locale, "/work") },
    { name: item.title, url: articleUrl },
  ]);
  const articleText = [
    item.title,
    item.location,
    item.summary,
    labels.keyScreens,
    labels.whatChangedHeading,
    ...labels.whatChangedThemes,
    ...item.whatChanged.map((change) => change.body),
  ].join(" ");
  const articleJsonLd = articleSchema({
    locale,
    url: articleUrl,
    headline: item.title,
    description: item.summary,
    image: `${SITE_URL}${item.heroDesktop}`,
    datePublished: "2026-05-07T10:30:00+02:00",
    dateModified: "2026-07-30T15:30:00+02:00",
    wordCount: articleText.trim().split(/\s+/u).length,
    speakableSelectors: ["h1", ".case-study-summary"],
  });

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={articleJsonLd} />
      <CaseStudyPageTemplate locale={locale} item={item} labels={labels} />
    </>
  );
}
