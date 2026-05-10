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
      "How REFRAME collects, uses, and stores personal data when you use our website or enquire about architecture and interior design web services.",
    keywords: [
      "REFRAME privacy",
      "architecture website studio",
      "data protection Spain",
      "GDPR",
      "Costa del Sol",
    ],
  },
  es: {
    title: "Política de privacidad",
    description:
      "Información sobre el tratamiento de datos personales al usar la web de REFRAME y solicitar servicios digitales para estudios de arquitectura.",
    keywords: [
      "privacidad REFRAME",
      "estudio web arquitectura",
      "protección de datos",
      "Costa del Sol",
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    description:
      "Modalités de traitement des données personnelles lors de l’utilisation du site REFRAME et des demandes liées aux sites de studios d’architecture.",
    keywords: [
      "confidentialité REFRAME",
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
      "Terms governing use of REFRAME’s website and engagement for website redesign services for architecture and interior design studios.",
    keywords: [
      "REFRAME terms",
      "website services agreement",
      "architecture studio web design",
    ],
  },
  es: {
    title: "Términos del servicio",
    description:
      "Condiciones de uso del sitio web de REFRAME y de los servicios de diseño y desarrollo web para estudios de arquitectura e interiorismo.",
    keywords: [
      "términos REFRAME",
      "contrato servicios web",
      "diseño web arquitectura",
    ],
  },
  fr: {
    title: "Conditions d’utilisation",
    description:
      "Conditions d’utilisation du site REFRAME et des prestations de conception web pour studios d’architecture et de design d’intérieur.",
    keywords: [
      "conditions REFRAME",
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
      "How REFRAME uses cookies and similar technologies on this architecture and design studio marketing website.",
    keywords: [
      "REFRAME cookies",
      "cookie policy",
      "analytics consent",
      "architecture website",
    ],
  },
  es: {
    title: "Política de cookies",
    description:
      "Uso de cookies y tecnologías similares en el sitio web de REFRAME, estudio de diseño web para arquitectura.",
    keywords: [
      "cookies REFRAME",
      "política cookies",
      "privacidad web",
    ],
  },
  fr: {
    title: "Politique relative aux cookies",
    description:
      "Informations sur les cookies et traceurs utilisés sur le site REFRAME, studio de sites pour l’architecture.",
    keywords: [
      "cookies REFRAME",
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
