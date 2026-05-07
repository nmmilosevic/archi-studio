import type { Metadata } from "next";

const BASE_URL = "https://reframestud.io";

const localeNames: Record<string, string> = {
  en: "English",
  es: "Spanish",
  fr: "French",
};

export function generateAlternates(
  locale: string,
  path: string
): Metadata["alternates"] {
  const locales = ["en", "es", "fr"];
  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${BASE_URL}/${l}${path}`;
  });
  languages["x-default"] = `${BASE_URL}/en${path}`;
  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages,
  };
}

export function generateMetadata({
  locale,
  path,
  title,
  description,
  ogImage = "/og-image.png",
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const localeName = localeNames[locale] ?? "English";
  return {
    title,
    description,
    alternates: generateAlternates(locale, path),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}${path}`,
      siteName: "REFRAME",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `REFRAME — ${title}`,
        },
      ],
      locale: localeName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "REFRAME",
    description:
      "Architecture website redesigns for architecture and interior design studios on the Costa del Sol, Spain.",
    url: BASE_URL,
    email: "hello@reframestud.io",
    telephone: "+34600000000",
    areaServed: [
      "Marbella",
      "Estepona",
      "Benahavís",
      "Sotogrande",
      "Málaga",
      "Mijas",
      "Fuengirola",
      "Casares",
    ],
    serviceType: [
      "Website Redesign",
      "Architecture Studio Websites",
      "Interior Design Websites",
      "Local SEO",
      "Portfolio Systems",
    ],
  };
}

export function faqSchema(
  items: Array<{ q: string; a: string }>
) {
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
