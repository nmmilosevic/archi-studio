import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyPageTemplate } from "@/components/work/CaseStudyPageTemplate";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteLocaleUrl } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import en from "@/content/en";
import { breadcrumbSchema } from "@/lib/structured-data";

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
      "Contemporary website concept for an architecture studio. Bold editorial direction, structured project UX, and a calm premium atmosphere designed for immersive villa case studies.",
  },
  "casa-noma-marbella": {
    title: "Casa Noma Website Redesign | Reframe Studio",
    description:
      "Minimal Mediterranean website concept for a luxury interior design studio. Warm editorial layouts, refined typography, and immersive project presentation with a smooth mobile-first UX rhythm.",
  },
  "forma-sur-malaga": {
    title: "Forma Sur Website Identity | Reframe Studio",
    description:
      "Expressive website direction for an architecture studio in Malaga. High-contrast visual language, clear project navigation UX, and a confident urban atmosphere for portfolio storytelling.",
  },
  "terral-studio-estepona": {
    title: "Terral Studio Portfolio System | Reframe Studio",
    description:
      "Portfolio-led website system for a landscape and outdoor design studio. Mediterranean visual direction, image-first UX flow, and an atmospheric presentation tuned for mobile exploration.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getContent(locale);
  const index = VALID_SLUGS.indexOf(slug);

  if (index === -1) return {};

  const item = content.work.items[index];
  const seo = PROJECT_SEO[slug];
  return buildPageMetadata({
    locale,
    path: `/work/${slug}`,
    title: seo?.title ?? `${item.title} | Reframe Studio`,
    description: seo?.description ?? item.challenge,
    ogTitle: seo?.title ?? `${item.title} | Reframe Studio`,
    ogDescription: seo?.description ?? item.challenge,
    twitterTitle: seo?.title ?? `${item.title} | Reframe Studio`,
    twitterDescription: seo?.description ?? item.challenge,
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
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: absoluteLocaleUrl(locale, "") },
    { name: "Projects", url: absoluteLocaleUrl(locale, "/work") },
    { name: item.title, url: absoluteLocaleUrl(locale, `/work/${slug}`) },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <CaseStudyPageTemplate locale={locale} item={item} labels={labels} />
    </>
  );
}
