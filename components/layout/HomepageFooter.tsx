"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { BRAND } from "@/lib/constants";
import { ReframeLogo } from "@/components/ui/ReframeLogo";

export function HomepageFooter() {
  const locale = useLocale();
  const tFooter = useTranslations("footer");
  const pathname = usePathname();
  const router = useRouter();
  const homePath = `/${locale}`;

  /** Desktop: scroll to top only when already on home. Mobile: always go home, or smooth-scroll if already there. */
  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    const isMobile =
      typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;

    if (isMobile) {
      event.preventDefault();
      if (pathname !== homePath) {
        router.push(homePath);
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname !== homePath) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#0f0e0c] pb-12 pt-12 text-inverted md:pb-14 md:pt-14" aria-label="Site footer">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="max-w-[360px]">
            <Link
              href={homePath}
              onClick={handleLogoClick}
              className="inline-flex items-start"
              aria-label={`${BRAND.name} - Home`}
            >
              <ReframeLogo light className="h-[42px] w-auto" />
            </Link>
            <p className="mt-4 text-[15px] leading-relaxed text-inverted/56">{tFooter("tagline")}</p>
          </div>

          <div className="grid gap-3 md:justify-self-end">
            <a
              href={`mailto:${BRAND.email}`}
              className="text-[15px] text-inverted/62 transition-colors hover:text-bronze"
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
