export const BRAND = {
  name: "FORMA COSTA",
  tagline: "Digital presence for architecture and interior studios on the Costa del Sol.",
  email: "hello@formacosta.com",
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
  { key: "services", href: "/services" },
  { key: "pricing", href: "/pricing" },
  { key: "method", href: "/method" },
  { key: "work", href: "/work" },
  { key: "audit", href: "/audit" },
  { key: "seo", href: "/seo-costa-del-sol" },
  { key: "contact", href: "/contact" },
] as const;

export const LOCALES = ["en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
