"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { ReframeLogo } from "@/components/ui/ReframeLogo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaScrollProgress, setCtaScrollProgress] = useState(0);
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const homePath = `/${locale}`;
  const contactPath = `/${locale}/contact`;
  const normalizedSegments = pathname.split("/").filter(Boolean);
  const isWorkRoute = normalizedSegments[0] === locale && normalizedSegments[1] === "work";
  const isWorkPage = isWorkRoute && normalizedSegments.length === 2;
  const isWorkDetailPage = isWorkRoute && normalizedSegments.length > 2;
  const isContactPage =
    (normalizedSegments[0] === locale && normalizedSegments[1] === "contact" && normalizedSegments.length === 2) ||
    pathname.startsWith(`${contactPath}/`);
  const useLightHeaderText = (isContactPage || isWorkDetailPage) && !scrolled;
  const isHomePage = normalizedSegments.length === 1 && normalizedSegments[0] === locale;
  const ctaProgress = isHomePage ? ctaScrollProgress : scrolled ? 1 : 0;

  const updateScrollState = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 20);
    // Home navbar CTA appears progressively with scroll.
    const progress = Math.min(Math.max(y / 340, 0), 1);
    setCtaScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  useEffect(() => {
    updateScrollState();
    const rafId = window.requestAnimationFrame(updateScrollState);
    return () => window.cancelAnimationFrame(rafId);
  }, [pathname, updateScrollState]);

  function handleLocaleChange(newLocale: string) {
    if (newLocale === locale) return;
    const localizedPath = pathname.replace(/^\/[^/]+(?=\/|$)/, `/${newLocale}`) || `/${newLocale}`;
    router.replace(localizedPath, { scroll: false });
  }

  /** Logo behavior: if on home, smooth-scroll to top; otherwise navigate to home. */
  function handleLogoClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === homePath) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-500",
          scrolled
            ? "bg-[rgb(245_241_235/0.9)] backdrop-blur-md py-3"
            : "bg-transparent py-4 md:py-5"
        )}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between gap-8 border-b border-transparent pb-0">
            <div className="hidden lg:flex min-h-11 items-center gap-6">
              {/* Logo */}
              <Link
                href={homePath}
                onClick={handleLogoClick}
                className="inline-flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
                aria-label={`${BRAND.name} - Home`}
              >
                <span className="block h-[35px] w-[111px] overflow-hidden">
                  <ReframeLogo light={useLightHeaderText} className="-ml-[6px] h-[35px] w-[124px]" />
                </span>
              </Link>
              <nav className="flex h-11 items-center gap-6" aria-label="Primary navigation">
                {NAV_LINKS.map((link) => {
                  const href = `/${locale}${link.href}`;
                  const isActive = pathname === href || pathname.startsWith(`${href}/`);
                  return (
                    <Link
                      key={link.key}
                      href={href}
                      className={clsx(
                        "nav-link",
                        useLightHeaderText && "text-inverted/75 hover:!text-inverted aria-[current=page]:!text-inverted"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {t(link.key as keyof ReturnType<typeof useTranslations<"nav">>)}
                    </Link>
                  );
                })}
              </nav>
              <LanguageSwitcher light={useLightHeaderText} />
            </div>

            {/* Right side — flush to container right edge (same as page content) */}
            <div className="hidden lg:flex min-h-11 flex-shrink-0 items-center justify-end py-0.5">
              <div
                className={clsx(
                  "flex min-h-11 items-center justify-end transition-opacity duration-[500ms] ease-linear",
                  ctaProgress < 0.06 && "pointer-events-none"
                )}
                style={{ opacity: ctaProgress }}
              >
                <Button
                  asChild
                  size="sm"
                  className={clsx(
                    "px-6 whitespace-nowrap hover:-translate-y-0.5",
                    isContactPage && !scrolled
                      ? "!bg-inverted !text-primary hover:!bg-inverted hover:!text-primary"
                      : "!bg-charcoal !text-inverted hover:!bg-charcoal hover:!text-inverted"
                  )}
                >
                  <Link href={`/${locale}/contact`}>Start your website</Link>
                </Button>
              </div>
            </div>

            {/* Mobile direct navigation */}
            <div className="lg:hidden flex min-h-11 w-full items-center justify-between gap-3">
              <Link
                href={homePath}
                onClick={handleLogoClick}
                className="inline-flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
                aria-label={`${BRAND.name} - Home`}
              >
                <span className="block h-[35px] w-[111px] overflow-hidden">
                  <ReframeLogo light={useLightHeaderText} className="-ml-[6px] h-[35px] w-[124px]" />
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href={`/${locale}/work`}
                  aria-current={isWorkRoute ? "page" : undefined}
                  className={clsx(
                    "inline-flex h-9 items-center text-[14px] transition-colors",
                    isWorkRoute
                      ? useLightHeaderText
                        ? "font-medium text-inverted"
                        : "font-medium text-primary"
                      : useLightHeaderText
                        ? "text-inverted/80 hover:text-inverted"
                        : "text-primary/86 hover:text-primary"
                  )}
                >
                  {t("work")}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  aria-current={isContactPage ? "page" : undefined}
                  className={clsx(
                    "inline-flex h-9 items-center text-[14px] transition-colors",
                    isContactPage
                      ? useLightHeaderText
                        ? "font-medium text-inverted"
                        : "font-medium text-primary"
                      : useLightHeaderText
                        ? "text-inverted/80 hover:text-inverted"
                        : "text-primary/86 hover:text-primary"
                  )}
                >
                  {t("contact")}
                </Link>
                <div
                  className={clsx(
                    "relative h-9 w-[58px] border",
                    useLightHeaderText ? "border-inverted/35" : "border-charcoal/25"
                  )}
                >
                  <select
                    value={locale}
                    onChange={(event) => handleLocaleChange(event.target.value)}
                    className={clsx(
                      "absolute inset-0 h-full w-full appearance-none bg-transparent px-2 pr-6 text-[12px] cursor-pointer focus-visible:outline-none",
                      useLightHeaderText ? "text-inverted" : "text-primary"
                    )}
                    aria-label="Select language"
                  >
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                    <option value="fr">FR</option>
                  </select>
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "pointer-events-none absolute right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-b",
                      useLightHeaderText ? "border-inverted/75" : "border-primary/70"
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
