import { BRAND } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function getGlobalStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: BRAND.name,
        url: `${SITE_URL}/`,
        description: BRAND.tagline,
        email: BRAND.email,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/ref26.svg`,
        },
        sameAs: [
          BRAND.instagramLink,
          "https://www.linkedin.com/company/reframe-studio",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: BRAND.name,
        description: BRAND.tagline,
        inLanguage: ["es-ES", "en-US", "fr-FR"],
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: BRAND.name,
        description:
          "Website redesign and digital presence for architecture and interior design studios on the Costa del Sol, Spain.",
        url: SITE_URL,
        email: BRAND.email,
        telephone: "+34600000000",
        image: `${SITE_URL}/og-image.png`,
        areaServed: [
          { "@type": "AdministrativeArea", name: "Marbella" },
          { "@type": "AdministrativeArea", name: "Estepona" },
          { "@type": "AdministrativeArea", name: "Benahavís" },
          { "@type": "AdministrativeArea", name: "Sotogrande" },
          { "@type": "AdministrativeArea", name: "Málaga" },
          { "@type": "AdministrativeArea", name: "Mijas" },
          { "@type": "AdministrativeArea", name: "Fuengirola" },
          { "@type": "AdministrativeArea", name: "Casares" },
        ],
        serviceType: [
          "Website redesign",
          "Architecture studio websites",
          "Interior design websites",
          "Local SEO",
          "Portfolio systems",
        ],
        parentOrganization: { "@id": ORG_ID },
      },
    ],
  };
}
