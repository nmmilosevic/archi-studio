import { BRAND } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function getGlobalStructuredData() {
  const services = [
    "Website design for architecture studios",
    "Interior design studio websites",
    "Portfolio systems for architects",
    "Mobile-first project presentation",
    "CMS setup for architecture studios",
    "Technical SEO and local SEO",
  ];

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
        areaServed: "Costa del Sol, Spain",
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
        "@type": "CreativeAgency",
        "@id": `${SITE_URL}/#creative-agency`,
        name: "Reframe Studio",
        url: SITE_URL,
        logo: `${SITE_URL}/ref26.svg`,
        description:
          "Premium website design studio for architecture and interior design practices. Editorial direction, performance, and scalable portfolio systems.",
        areaServed: "Costa del Sol, Spain",
        serviceType: services,
        sameAs: [BRAND.instagramLink],
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
        image: `${SITE_URL}/images/hero.png`,
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
        serviceType: services,
        parentOrganization: { "@id": ORG_ID },
      },
    ],
  };
}
