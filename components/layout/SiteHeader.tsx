"use client";

import { useState, useEffect } from "react";
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
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const contactPath = `/${locale}/contact`;
  const normalizedSegments = pathname.split("/").filter(Boolean);
  const isWorkRoute = normalizedSegments[0] === locale && normalizedSegments[1] === "work";
  const isWorkPage = isWorkRoute && normalizedSegments.length === 2;
  const isWorkDetailPage = isWorkRoute && normalizedSegments.length > 2;
  const isContactPage =
    (normalizedSegments[0] === locale && normalizedSegments[1] === "contact" && normalizedSegments.length === 2) ||
    pathname.startsWith(`${contactPath}/`);
  const useLightHeaderText = (isContactPage || isWorkDetailPage) && !scrolled;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLocaleChange(newLocale: string) {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
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
            ? "bg-stone/90 backdrop-blur-md py-3"
            : "bg-transparent py-4 md:py-5"
        )}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between gap-8 border-b border-transparent pb-1">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
              aria-label={`${BRAND.name} - Home`}
            >
              <span className="block h-8 w-[101px] overflow-hidden">
                <ReframeLogo light={useLightHeaderText} className="-ml-[6px] h-8 w-[113px]" />
              </span>
            </Link>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-5">
              <nav className="flex items-center gap-6" aria-label="Primary navigation">
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
              <span className={clsx("h-4 w-px", useLightHeaderText ? "bg-inverted/28" : "bg-charcoal/20")} aria-hidden="true" />
              <LanguageSwitcher light={useLightHeaderText} />
              <Button
                asChild
                size="sm"
                className={clsx(
                  "px-6 bg-inverted text-primary hover:bg-inverted/90 hover:text-primary"
                )}
              >
                <Link href={`/${locale}/contact`}>Start your website</Link>
              </Button>
            </div>

            {/* Mobile direct navigation */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href={`/${locale}/work`}
                className={clsx(
                  "text-[14px] transition-colors",
                  isWorkPage
                    ? "text-primary/86 hover:text-primary"
                    : useLightHeaderText
                      ? "text-inverted/80 hover:text-inverted"
                      : "text-primary/86 hover:text-primary"
                )}
              >
                {t("work")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className={clsx(
                  "text-[14px] transition-colors",
                  isWorkPage
                    ? "text-primary/86 hover:text-primary"
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
      </header>
    </>
  );
}
