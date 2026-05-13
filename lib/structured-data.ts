import { BRAND, STUDIO_SEO } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const CORE_SERVICE_TYPES = [
  "Architecture Website Design",
  "Interior Design Website Design",
  "Luxury Studio Web Design",
] as const;

const EXTENDED_SERVICES = [
  "Architecture web design studio",
  "Architecture website agency",
  "Luxury architecture websites",
  "Interior design web design",
  "Web design Spain",
  "Marbella web design",
  "Costa del Sol web design",
  "Portfolio systems for architects",
  "Mobile-first project presentation",
  "CMS setup for architecture studios",
  "Technical SEO and local SEO",
] as const;

export function getGlobalStructuredData() {
  const orgDescription = `${STUDIO_SEO.name} (${STUDIO_SEO.alternateName}) is a premium architecture web design studio based in Spain, crafting luxury architecture websites and interior design studio websites for practices across Marbella, the Costa del Sol, and nationwide.`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: STUDIO_SEO.name,
        alternateName: [STUDIO_SEO.alternateName, BRAND.name],
        legalName: STUDIO_SEO.name,
        url: SITE_URL,
        description: orgDescription,
        email: BRAND.email,
        areaServed: [
          { "@type": "Country", name: "Spain" },
          { "@type": "AdministrativeArea", name: "Costa del Sol" },
          { "@type": "City", name: "Marbella" },
          { "@type": "City", name: "Málaga" },
          { "@type": "City", name: "Estepona" },
        ],
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/ref26.svg`,
        },
        sameAs: [
          BRAND.instagramLink,
          "https://www.linkedin.com/company/reframe-studio",
        ],
        serviceType: [...CORE_SERVICE_TYPES],
        knowsAbout: [...EXTENDED_SERVICES],
        makesOffer: CORE_SERVICE_TYPES.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: "Spain" },
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: STUDIO_SEO.name,
        alternateName: STUDIO_SEO.alternateName,
        description: orgDescription,
        inLanguage: ["es-ES", "en-US", "fr-FR"],
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: STUDIO_SEO.name,
        alternateName: STUDIO_SEO.alternateName,
        description:
          "Website redesign and digital presence for architecture and interior design studios in Spain — editorial web design, performance, and scalable portfolio systems.",
        url: SITE_URL,
        email: BRAND.email,
        telephone: "+34600000000",
        image: `${SITE_URL}/images/hero.png`,
        areaServed: [
          { "@type": "Country", name: "Spain" },
          { "@type": "AdministrativeArea", name: "Costa del Sol" },
          { "@type": "City", name: "Marbella" },
          { "@type": "City", name: "Estepona" },
          { "@type": "City", name: "Benahavís" },
          { "@type": "City", name: "Sotogrande" },
          { "@type": "City", name: "Málaga" },
          { "@type": "City", name: "Mijas" },
          { "@type": "City", name: "Fuengirola" },
          { "@type": "City", name: "Casares" },
        ],
        serviceType: [...CORE_SERVICE_TYPES, ...EXTENDED_SERVICES],
        parentOrganization: { "@id": ORG_ID },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#local-business`,
        name: STUDIO_SEO.name,
        alternateName: STUDIO_SEO.alternateName,
        url: SITE_URL,
        image: `${SITE_URL}/images/hero.png`,
        logo: `${SITE_URL}/ref26.svg`,
        description:
          "Reframe Studio (ReframeStudio) — web design for architecture and interior design studios in Marbella, Málaga, Estepona, and across the Costa del Sol, Spain.",
        email: BRAND.email,
        telephone: "+34600000000",
        areaServed: [
          { "@type": "City", name: "Marbella" },
          { "@type": "City", name: "Malaga" },
          { "@type": "City", name: "Estepona" },
          { "@type": "AdministrativeArea", name: "Costa del Sol" },
          { "@type": "Country", name: "Spain" },
        ],
        sameAs: [BRAND.instagramLink, "https://www.linkedin.com/company/reframe-studio"],
        parentOrganization: { "@id": ORG_ID },
      },
    ],
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
