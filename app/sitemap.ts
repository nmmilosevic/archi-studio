import type { MetadataRoute } from "next";
import en from "@/content/en";
import { absoluteLocaleUrl } from "@/lib/seo";
import { SEO_LOCALES } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PATHS = [
  "",
  "/work",
  "/contact",
  "/services",
  "/pricing",
  "/audit",
  "/seo-costa-del-sol",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
] as const;

const WORK_PATHS = en.work.items.map((item) => `/work/${item.slug}` as const);

function priorityFor(path: string): number {
  if (path === "") return 1;
  if (path.startsWith("/legal")) return 0.25;
  if (path.startsWith("/work/")) return 0.75;
  if (
    [
      "/work",
      "/contact",
      "/services",
      "/pricing",
      "/audit",
      "/seo-costa-del-sol",
    ].includes(path)
  ) {
    return 0.9;
  }
  return 0.7;
}

function changeFreq(
  path: string
): NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]> {
  if (path === "") return "weekly";
  if (path.startsWith("/legal")) return "yearly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...STATIC_PATHS, ...WORK_PATHS];
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of SEO_LOCALES) {
      entries.push({
        url: absoluteLocaleUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: changeFreq(path),
        priority: priorityFor(path),
      });
    }
  }

  return entries;
}
