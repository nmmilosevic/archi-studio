import type { Metadata } from "next";
import { PREFERRED_SEO_DESCRIPTION, STUDIO_SEO } from "@/lib/constants";
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
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  keywords?: string[];
  ogImage?: string;
  twitterImage?: string;
  robots?: Metadata["robots"];
  canonical?: string;
};

function resolveOgImageUrl(ogImage: string): string {
  if (ogImage.startsWith("https://") || ogImage.startsWith("http://")) {
    return ogImage;
  }
  const path = ogImage.startsWith("/") ? ogImage : `/${ogImage}`;
  return `${SITE_URL}${path}`;
}

function withBrandSuffix(value: string): string {
  if (/reframe studio|reframe/i.test(value)) return value;
  return `${value} | ${STUDIO_SEO.name}`;
}

function withBrandDescription(description: string): string {
  const normalized = description.trim();
  if (!normalized) return PREFERRED_SEO_DESCRIPTION;
  return normalized;
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  keywords,
  ogImage = "/images/hero.png",
  twitterImage,
  robots = { index: true, follow: true },
  canonical,
}: PageSeoInput): Metadata {
  const alternates = buildAlternates(locale, path);
  const canonicalUrl = canonical ?? (alternates.canonical as string);
  const resolvedAlternates = {
    ...alternates,
    canonical: canonicalUrl,
  };
  const imageUrl = resolveOgImageUrl(ogImage);
  const twitterImageUrl = resolveOgImageUrl(twitterImage ?? ogImage);
  const resolvedTitle = withBrandSuffix(title);
  const resolvedDescription = withBrandDescription(description);
  const resolvedOgTitle = withBrandSuffix(ogTitle ?? title);
  const resolvedOgDescription = withBrandDescription(ogDescription ?? resolvedDescription);
  const resolvedTwitterTitle = withBrandSuffix(twitterTitle ?? resolvedOgTitle);
  const resolvedTwitterDescription = twitterDescription ?? resolvedOgDescription;
  const ogLocale = OG_LOCALE[locale] ?? OG_LOCALE.en;
  const alternateLocale = SEO_LOCALES.filter((l) => l !== locale).map(
    (l) => OG_LOCALE[l] ?? l
  );

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    alternates: resolvedAlternates,
    robots,
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      url: canonicalUrl,
      siteName: STUDIO_SEO.name,
      locale: ogLocale,
      alternateLocale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${STUDIO_SEO.name}: ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTwitterTitle,
      description: resolvedTwitterDescription,
      images: [twitterImageUrl],
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
