import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

const isGitHubPages = process.env.GITHUB_PAGES === "true";
/** Root (`""`) for custom domains or user/org Pages. `/repo` only for project Pages at github.io/repo. */
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? githubPagesBasePath : "",
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        ...(githubPagesBasePath
          ? {
              basePath: githubPagesBasePath,
              assetPrefix: githubPagesBasePath,
            }
          : {}),
      }
    : {}),
  images: {
    remotePatterns: [],
    /** Larger steps so `sizes` × DPR doesn’t cap at 384px (common retina blur). */
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512, 640, 768, 960],
    qualities: [75, 85, 92],
    formats: ["image/avif", "image/webp"],
    ...(isGitHubPages ? { unoptimized: true } : {}),
  },
};

export default withNextIntl(nextConfig);
