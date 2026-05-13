/** Public-facing studio name for SEO, schema.org, and metadata (logo wordmark may differ). */
export const STUDIO_SEO = {
  name: "Reframe Studio",
  alternateName: "ReframeStudio",
} as const;

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
