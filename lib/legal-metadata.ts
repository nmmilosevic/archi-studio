import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

type Loc = "en" | "es" | "fr";

function locKey(locale: string): Loc {
  if (locale === "es" || locale === "fr") return locale;
  return "en";
}

const privacy: Record<
  Loc,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: "Privacy policy",
    description:
      "How Reframe Studio collects, uses, and stores personal data when you use reframestudio.es or enquire about architecture, interior design, and landscape studio web services.",
    keywords: [
      "Reframe Studio privacy",
      "architecture website studio",
      "data protection Spain",
      "GDPR",
    ],
  },
  es: {
    title: "Política de privacidad",
    description:
      "Información sobre el tratamiento de datos al usar la web de Reframe Studio y solicitar servicios digitales para estudios de arquitectura, interiorismo y paisajismo.",
    keywords: [
      "privacidad Reframe Studio",
      "estudio web arquitectura",
      "protección de datos",
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    description:
      "Modalités de traitement des données lors de l’utilisation du site Reframe Studio et des demandes liées aux sites de studios d’architecture, de design intérieur et de paysage.",
    keywords: [
      "confidentialité Reframe Studio",
      "site web architecture",
      "données personnelles",
    ],
  },
};

const terms: Record<
  Loc,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: "Terms of service",
    description:
      "Terms governing use of Reframe Studio’s website and engagement for website redesign services for architecture, interior design, and landscape studios.",
    keywords: [
      "Reframe Studio terms",
      "website services agreement",
      "architecture studio web design",
    ],
  },
  es: {
    title: "Términos del servicio",
    description:
      "Condiciones de uso del sitio de Reframe Studio y de los servicios de diseño web para estudios de arquitectura, interiorismo y paisajismo.",
    keywords: [
      "términos Reframe Studio",
      "contrato servicios web",
      "diseño web arquitectura",
    ],
  },
  fr: {
    title: "Conditions d’utilisation",
    description:
      "Conditions d’utilisation du site Reframe Studio et des prestations de conception web pour studios d’architecture, de design intérieur et de paysage.",
    keywords: [
      "conditions Reframe Studio",
      "services site web",
      "site architecture",
    ],
  },
};

const cookies: Record<
  Loc,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: "Cookie policy",
    description:
      "How Reframe Studio uses cookies on this architecture, interior design, and landscape studio website.",
    keywords: [
      "Reframe Studio cookies",
      "cookie policy",
      "analytics consent",
      "architecture website",
    ],
  },
  es: {
    title: "Política de cookies",
    description:
      "Uso de cookies en el sitio de Reframe Studio para estudios de arquitectura, interiorismo y paisajismo.",
    keywords: [
      "cookies Reframe Studio",
      "política cookies",
      "privacidad web",
    ],
  },
  fr: {
    title: "Politique relative aux cookies",
    description:
      "Cookies et traceurs sur le site Reframe Studio pour studios d’architecture, de design intérieur et de paysage.",
    keywords: [
      "cookies Reframe Studio",
      "politique cookies",
      "site architecture",
    ],
  },
};

export function buildPrivacyMetadata(locale: string): Metadata {
  const m = privacy[locKey(locale)];
  return buildPageMetadata({
    locale,
    path: "/legal/privacy",
    title: m.title,
    description: m.description,
    keywords: m.keywords,
  });
}

export function buildTermsMetadata(locale: string): Metadata {
  const m = terms[locKey(locale)];
  return buildPageMetadata({
    locale,
    path: "/legal/terms",
    title: m.title,
    description: m.description,
    keywords: m.keywords,
  });
}

export function buildCookiesMetadata(locale: string): Metadata {
  const m = cookies[locKey(locale)];
  return buildPageMetadata({
    locale,
    path: "/legal/cookies",
    title: m.title,
    description: m.description,
    keywords: m.keywords,
  });
}
