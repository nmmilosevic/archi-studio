import {
  BRAND,
  PREFERRED_SEO_DESCRIPTION,
  STUDIO_SEO_ALIASES,
} from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;
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

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "REFRAME Studio",
        alternateName: [...STUDIO_SEO_ALIASES],
        legalName: "REFRAME Studio",
        url: "https://reframestudio.es",
        description: orgDescription,
        email: BRAND.email,
        areaServed: [
          { "@type": "Country", name: "Spain" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Place", name: "International" },
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
        knowsAbout: [...KNOWS_ABOUT],
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
        name: "REFRAME Studio",
        alternateName: STUDIO_SEO_ALIASES[0],
        description: orgDescription,
        inLanguage: ["es-ES", "en-US", "fr-FR"],
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: "REFRAME Studio",
        alternateName: STUDIO_SEO_ALIASES[0],
        description: orgDescription,
        url: SITE_URL,
        email: BRAND.email,
        telephone: "+34600000000",
        image: `${SITE_URL}/images/hero.png`,
        areaServed: [
          { "@type": "Country", name: "Spain" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Place", name: "International" },
        ],
        serviceType: [...CORE_SERVICE_TYPES],
        knowsAbout: [...KNOWS_ABOUT],
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
