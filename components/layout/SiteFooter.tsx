"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { BRAND, STUDIO_SEO } from "@/lib/constants";
import { ReframeLogo } from "@/components/ui/ReframeLogo";
import { getPageCopy } from "@/lib/page-copy";

export function SiteFooter() {
  const locale = useLocale();
  const tFooter = useTranslations("footer");
  const pageCopy = getPageCopy(locale);
  const pathname = usePathname();
  const homePath = `/${locale}`;

  /** Logo behavior: if on home, smooth-scroll to top; otherwise navigate to home. */
  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === homePath) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer
      className="bg-[#0f0e0c] pb-12 pt-12 text-inverted md:pb-14 md:pt-14"
      aria-label={`${STUDIO_SEO.name} — site footer`}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
          <div className="max-w-[360px]">
            <Link
              href={homePath}
              onClick={handleLogoClick}
              className="inline-block"
              aria-label={`${STUDIO_SEO.name} — ${tFooter("homeAria")}`}
            >
              <ReframeLogo light className="h-[42px] w-[150px]" />
            </Link>
            <p className="mt-4 text-[15px] leading-relaxed text-inverted/56">
              {tFooter("tagline")}
            </p>
            <p className="mt-3 max-w-[420px] text-[13px] leading-relaxed text-inverted/45">
              {pageCopy.footerBrandEntity}
            </p>
          </div>

          <div className="grid gap-3">
            <Link href={`/${locale}/work`} className="text-[15px] text-inverted/70 transition-colors hover:text-bronze">{tFooter("nav.work")}</Link>
            <Link href={`/${locale}/services`} className="text-[15px] text-inverted/70 transition-colors hover:text-bronze">{tFooter("nav.services")}</Link>
            <Link href={`/${locale}/pricing`} className="text-[15px] text-inverted/70 transition-colors hover:text-bronze">{tFooter("nav.pricing")}</Link>
            <Link href={`/${locale}/audit`} className="text-[15px] text-inverted/70 transition-colors hover:text-bronze">{tFooter("nav.audit")}</Link>
            <Link href={`/${locale}/contact`} className="text-[15px] text-inverted/70 transition-colors hover:text-bronze">{tFooter("nav.contact")}</Link>
          </div>

          <div className="grid gap-3 md:justify-self-end">
            <a
              href={`mailto:${BRAND.email}`}
              className="text-[15px] text-inverted/62 transition-colors hover:text-bronze"
            >
              {BRAND.email}
            </a>
            <CookieSettingsButton className="text-left text-[15px] text-inverted/62 transition-colors hover:text-bronze md:text-right" />
          </div>
        </div>
      </div>
    </footer>
  );
}
