import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/archi-studio";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? repoBasePath : "",
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
      }
    : {}),
  images: {
    remotePatterns: [],
    ...(isGitHubPages ? { unoptimized: true } : {}),
  },
};

export default withNextIntl(nextConfig);
