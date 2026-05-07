export const BRAND = {
  name: "REFRAME",
  tagline: "Architecture website redesigns for studios on the Costa del Sol.",
  email: "hello@reframestud.io",
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
  { key: "pricing", href: "/pricing" },
  { key: "audit", href: "/audit" },
  { key: "contact", href: "/contact" },
] as const;

export const LOCALES = ["en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
