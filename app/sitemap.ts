import type { MetadataRoute } from "next";

const BASE_URL = "https://formacosta.com";
const LOCALES = ["en", "es", "fr"];

const PAGES = [
  "",
  "/services",
  "/pricing",
  "/method",
  "/work",
  "/audit",
  "/seo-costa-del-sol",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
];

const WORK_SLUGS = [
  "/work/villa-architecture-studio",
  "/work/interior-design-marbella",
  "/work/renovation-studio-estepona",
  "/work/project-page-system",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  [...PAGES, ...WORK_SLUGS].forEach((page) => {
    LOCALES.forEach((locale) => {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : page === "/audit" ? 0.9 : 0.7,
      });
    });
  });

  return entries;
}
