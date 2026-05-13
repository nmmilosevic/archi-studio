/** Public-facing studio name for SEO, schema.org, and metadata (logo wordmark may differ). */
export const STUDIO_SEO = {
  name: "REFRAME Studio",
  alternateName: "reframestudio",
} as const;

export const STUDIO_SEO_ALIASES = [
  "reframestudio",
  "reframe studio",
  "Reframe Studio",
  "REFRAME",
] as const;

export const PREFERRED_SEO_DESCRIPTION =
  "REFRAME is a web design studio for architecture and interior design firms, creating refined websites, portfolio systems, and presentation concepts.";

export const BRAND = {
  name: "REFRAME",
  tagline: "Architecture website redesigns for studios on the Costa del Sol.",
  email: "hello@reframestudio.es",
  instagram: "@reframe.stud",
  instagramLink: "https://instagram.com/reframe.stud",
  whatsapp: "+34 600 000 000",
  whatsappLink: "https://wa.me/34600000000",
};

export const CITIES = [
  "Marbella",
  "Estepona",
  "Benahavís",
  "Sotogrande",
  "Málaga",
  "Mijas",
  "Fuengirola",
  "Casares",
  "San Pedro",
  "Nueva Andalucía",
];

export const NAV_LINKS = [
  { key: "work", href: "/work" },
  { key: "contact", href: "/contact" },
] as const;

export const LOCALES = ["en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
