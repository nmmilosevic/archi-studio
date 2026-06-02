import type { MetadataRoute } from "next";
import en from "@/content/en";
import { absoluteLocaleUrl } from "@/lib/seo";
import { DEFAULT_LOCALE, SEO_LOCALES } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PATHS = [
  "",
  "/work",
  "/contact",
  "/services",
  "/pricing",
  "/audit",
  "/search-visibility",
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
      "/search-visibility",
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

function hreflangAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of SEO_LOCALES) {
    languages[loc] = absoluteLocaleUrl(loc, path);
  }
  languages["x-default"] = absoluteLocaleUrl(DEFAULT_LOCALE, path);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...STATIC_PATHS, ...WORK_PATHS];
  const entries: MetadataRoute.Sitemap = [
    {
      url: "https://reframestudio.es/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const path of paths) {
    for (const locale of SEO_LOCALES) {
      entries.push({
        url: absoluteLocaleUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: changeFreq(path),
        priority: priorityFor(path),
        alternates: { languages: hreflangAlternates(path) },
      });
    }
  }

  return entries;
}
