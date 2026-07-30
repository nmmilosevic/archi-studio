import {
  BRAND,
  PREFERRED_SEO_DESCRIPTION,
  STUDIO_SEO_ALIASES,
} from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const CORE_SERVICE_TYPES = [
  "Architecture Website Design",
  "Interior Design Website Design",
  "Landscape Architecture Website Design",
] as const;

const KNOWS_ABOUT = [
  "architecture websites",
  "interior design websites",
  "landscape architecture websites",
  "portfolio websites",
  "architecture portfolio websites",
  "architecture website redesign",
  "branding presentation systems",
] as const;

export function getGlobalStructuredData() {
  const orgDescription = PREFERRED_SEO_DESCRIPTION;
  const services = CORE_SERVICE_TYPES.map((name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    return {
      "@type": "Service",
      "@id": `${SITE_URL}/#${slug}`,
      name,
      serviceType: name,
      url: `${SITE_URL}/es/services/`,
      description: `${name} for architecture, interior design, and landscape studios.`,
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "Country", name: "Spain" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Place", name: "International" },
      ],
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "REFRAME Studio",
        alternateName: [...STUDIO_SEO_ALIASES],
        url: SITE_URL,
        description: orgDescription,
        email: BRAND.email,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: BRAND.email,
          url: `${SITE_URL}/es/contact/`,
          availableLanguage: ["Spanish", "English", "French"],
          areaServed: ["ES", "EU"],
        },
        areaServed: [
          { "@type": "Country", name: "Spain" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Place", name: "International" },
        ],
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/ref26.svg`,
        },
        sameAs: [BRAND.instagramLink],
        knowsAbout: [...KNOWS_ABOUT],
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@id": service["@id"] },
        })),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: "REFRAME Studio",
        alternateName: STUDIO_SEO_ALIASES[0],
        description: orgDescription,
        inLanguage: ["es-ES", "en-US", "fr-FR"],
        publisher: { "@id": ORG_ID },
      },
      ...services,
    ],
  };
}

const SCHEMA_LANGUAGE: Record<string, string> = {
  es: "es-ES",
  en: "en-US",
  fr: "fr-FR",
};

type ArticleSchemaInput = {
  locale: string;
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  wordCount: number;
  speakableSelectors: string[];
};

export function articleSchema({
  locale,
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  wordCount,
  speakableSelectors,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline,
    description,
    inLanguage: SCHEMA_LANGUAGE[locale] ?? SCHEMA_LANGUAGE.es,
    author: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "REFRAME Studio",
      url: `${SITE_URL}/`,
    },
    publisher: { "@id": ORG_ID },
    datePublished,
    dateModified,
    image,
    wordCount,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
