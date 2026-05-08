"use client";

import { useState, useEffect, startTransition } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { clsx } from "clsx";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { ReframeLogo } from "@/components/ui/ReframeLogo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-500",
          scrolled
            ? "bg-stone/92 backdrop-blur-md py-3"
            : "bg-transparent py-4 md:py-5"
        )}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
              aria-label={`${BRAND.name} — Home`}
            >
              <ReframeLogo />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-9"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => {
                const href = `/${locale}${link.href}`;
                const isActive = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <Link
                    key={link.key}
                    href={href}
                    className="nav-link"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(link.key as keyof ReturnType<typeof useTranslations<"nav">>)}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-6">
              <LanguageSwitcher />
              <Button asChild size="sm">
                <Link href={`/${locale}/contact`}>Start your website</Link>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden inline-flex min-h-11 min-w-11 items-center justify-center text-primary hover:text-bronze transition-colors duration-200 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
