import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyPageTemplate } from "@/components/work/CaseStudyPageTemplate";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import en from "@/content/en";

const VALID_SLUGS: readonly string[] = en.work.items.map((item) => item.slug);

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
  const labels = content.work.caseStudy;

  return <CaseStudyPageTemplate locale={locale} item={item} labels={labels} />;
}
