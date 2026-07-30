/** Public-facing studio name for SEO, schema.org, and metadata (logo wordmark may differ). */
export const STUDIO_SEO = {
  name: "REFRAME Studio",
  alternateName: "REFRAME",
} as const;

export const STUDIO_SEO_ALIASES = [
  "Reframe Studio",
  "REFRAME",
] as const;

export const PREFERRED_SEO_DESCRIPTION =
  "REFRAME is a web design studio for architecture, interior design, and landscape studios, creating refined websites, portfolio systems, and digital presentation concepts.";

export const BRAND = {
  name: "REFRAME",
  tagline: "Architecture website redesigns for design-led studios.",
  email: "hello@reframestudio.es",
  instagram: "@reframe.stud",
  instagramLink: "https://instagram.com/reframe.stud",
};

export const CITIES = [
  "Spain",
  "Europe",
  "International",
];

export const NAV_LINKS = [
  { key: "work", href: "/work" },
  { key: "contact", href: "/contact" },
] as const;

export const LOCALES = ["en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
