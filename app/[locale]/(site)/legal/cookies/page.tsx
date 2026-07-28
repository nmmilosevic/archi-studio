import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { buildCookiesMetadata } from "@/lib/legal-metadata";
import { getLegalContent } from "@/lib/legal-content";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildCookiesMetadata(locale);
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LegalDocumentPage document={getLegalContent(locale, "cookies")} />;
}
