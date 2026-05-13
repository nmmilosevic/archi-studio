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
      "How Reframe Studio (ReframeStudio) collects, uses, and stores personal data when you use reframestudio.es or enquire about architecture and interior design web services.",
    keywords: [
      "Reframe Studio privacy",
      "ReframeStudio",
      "architecture website studio",
      "data protection Spain",
      "GDPR",
      "Costa del Sol",
    ],
  },
  es: {
    title: "Política de privacidad",
    description:
      "Información sobre el tratamiento de datos al usar la web de Reframe Studio (ReframeStudio) y solicitar servicios digitales para estudios de arquitectura.",
    keywords: [
      "privacidad Reframe Studio",
      "ReframeStudio",
      "estudio web arquitectura",
      "protección de datos",
      "Costa del Sol",
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    description:
      "Modalités de traitement des données lors de l’utilisation du site Reframe Studio (ReframeStudio) et des demandes liées aux sites de studios d’architecture.",
    keywords: [
      "confidentialité Reframe Studio",
      "ReframeStudio",
      "site web architecture",
      "données personnelles",
      "Costa del Sol",
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
      "Terms governing use of Reframe Studio’s website (reframestudio.es) and engagement for website redesign services for architecture and interior design studios.",
    keywords: [
      "Reframe Studio terms",
      "ReframeStudio",
      "website services agreement",
      "architecture studio web design",
    ],
  },
  es: {
    title: "Términos del servicio",
    description:
      "Condiciones de uso del sitio de Reframe Studio (ReframeStudio) y de los servicios de diseño web para estudios de arquitectura e interiorismo.",
    keywords: [
      "términos Reframe Studio",
      "ReframeStudio",
      "contrato servicios web",
      "diseño web arquitectura",
    ],
  },
  fr: {
    title: "Conditions d’utilisation",
    description:
      "Conditions d’utilisation du site Reframe Studio (ReframeStudio) et des prestations de conception web pour studios d’architecture et de design d’intérieur.",
    keywords: [
      "conditions Reframe Studio",
      "ReframeStudio",
      "services site web",
      "architecture Costa del Sol",
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
      "How Reframe Studio (ReframeStudio) uses cookies on this architecture and interior design studio marketing website.",
    keywords: [
      "Reframe Studio cookies",
      "ReframeStudio",
      "cookie policy",
      "analytics consent",
      "architecture website",
    ],
  },
  es: {
    title: "Política de cookies",
    description:
      "Uso de cookies en el sitio de Reframe Studio (ReframeStudio), estudio de diseño web para arquitectura.",
    keywords: [
      "cookies Reframe Studio",
      "ReframeStudio",
      "política cookies",
      "privacidad web",
    ],
  },
  fr: {
    title: "Politique relative aux cookies",
    description:
      "Cookies et traceurs sur le site Reframe Studio (ReframeStudio), studio de sites pour l’architecture.",
    keywords: [
      "cookies Reframe Studio",
      "ReframeStudio",
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
