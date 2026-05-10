import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { DEFAULT_LOCALE, SEO_LOCALES, SITE_URL } from "@/lib/site";

const OG_LOCALE: Record<string, string> = {
  es: "es_ES",
  en: "en_US",
  fr: "fr_FR",
};

/** Absolute URL for a locale path. Uses trailing slashes (GitHub Pages + Next `trailingSlash`). */
export function absoluteLocaleUrl(locale: string, pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed || trimmed === "/") {
    return `${SITE_URL}/${locale}/`;
  }
  const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${SITE_URL}/${locale}${path.endsWith("/") ? path : `${path}/`}`;
}

export function buildAlternates(
  locale: string,
  path: string
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const loc of SEO_LOCALES) {
    languages[loc] = absoluteLocaleUrl(loc, path);
  }
  languages["x-default"] = absoluteLocaleUrl(DEFAULT_LOCALE, path);
  return {
    canonical: absoluteLocaleUrl(locale, path),
    languages,
  };
}

export type PageSeoInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  robots?: Metadata["robots"];
};

function resolveOgImageUrl(ogImage: string): string {
  if (ogImage.startsWith("https://") || ogImage.startsWith("http://")) {
    return ogImage;
  }
  const path = ogImage.startsWith("/") ? ogImage : `/${ogImage}`;
  return `${SITE_URL}${path}`;
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  ogImage = "/og-image.png",
  robots = { index: true, follow: true },
}: PageSeoInput): Metadata {
  const alternates = buildAlternates(locale, path);
  const canonical = alternates.canonical as string;
  const imageUrl = resolveOgImageUrl(ogImage);
  const ogLocale = OG_LOCALE[locale] ?? OG_LOCALE.en;
  const alternateLocale = SEO_LOCALES.filter((l) => l !== locale).map(
    (l) => OG_LOCALE[l] ?? l
  );

  return {
    title,
    description,
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    alternates,
    robots,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND.name,
      locale: ogLocale,
      alternateLocale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
