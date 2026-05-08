import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://reframestud.io";
const LOCALES = ["en", "es", "fr"];

const PAGES = [
  "",
  "/work",
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
        priority: page === "" ? 1 : 0.7,
      });
    });
  });

  return entries;
}
