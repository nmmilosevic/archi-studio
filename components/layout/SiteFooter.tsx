"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Mail, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function SiteFooter() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const tNav = useTranslations("footer.nav");

  return (
    <footer
      className="bg-[#111110] text-inverted"
      aria-label="Site footer"
      role="contentinfo"
    >
      {/* ── TOP BAND: brand statement ─────────────────────── */}
      <div className="border-b border-white/6 pb-14 md:pb-16">
        <div className="container-site pt-24 md:pt-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Link
              href={`/${locale}`}
              className="block font-heading text-[clamp(40px,6vw,80px)] font-medium leading-[0.88] text-inverted hover:text-bronze transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              aria-label={`${BRAND.name} — Home`}
            >
              {BRAND.name}
            </Link>
            <p className="font-body text-[16px] text-inverted/40 max-w-[280px] leading-relaxed">
              Premium websites for architecture studios.
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ─────────────────────────────────────── */}
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* LEFT: location + contact + philosophy */}
          <div className="lg:col-span-4">
            <p className="font-body text-inverted/25 mb-5">
              Based in
            </p>
            <p className="font-body text-[14px] text-inverted/50">
              Costa del Sol, Spain
            </p>
            <p className="font-body text-inverted/18 mt-1.5 mb-8">
              36.5099° N · 4.8824° W
            </p>

            <div className="space-y-3 mb-8">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 font-body text-[14px] text-inverted/50 hover:text-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze group"
                aria-label={`Email us at ${BRAND.email}`}
              >
                <Mail
                  className="h-3.5 w-3.5 text-bronze flex-shrink-0"
                  aria-hidden="true"
                />
                {BRAND.email}
              </a>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-body text-[14px] text-inverted/50 hover:text-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze group"
                aria-label={`WhatsApp us at ${BRAND.whatsapp}`}
              >
                <MessageCircle
                  className="h-3.5 w-3.5 text-bronze flex-shrink-0"
                  aria-hidden="true"
                />
                {BRAND.whatsapp}
              </a>
            </div>

            <p className="font-body text-[14px] italic text-inverted/28 max-w-[240px] leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* CENTER: sitemap navigation */}
          <div className="lg:col-span-3 lg:col-start-6">
            <p className="font-body text-inverted/25 mb-6">
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { key: "work", href: "/work" },
                  { key: "pricing", href: "/pricing" },
                  { key: "audit", href: "/audit" },
                  { key: "services", href: "/services" },
                  { key: "contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.key}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="font-body text-[14px] text-inverted/50 hover:text-inverted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    >
                      {tNav(
                        link.key as Parameters<typeof tNav>[0]
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="font-body text-inverted/18 mt-8">
              Website Redesigns · Costa del Sol
            </p>
          </div>

          {/* RIGHT: start a project CTA */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-body text-bronze mb-5">
              Start a project
            </p>
            <h2 className="font-heading text-[22px] font-medium text-inverted leading-tight mb-5">
              Every project starts with a free website review.
            </h2>
            <Button asChild variant="secondary" size="md">
              <Link href={`/${locale}/audit`}>
                Request a free review
              </Link>
            </Button>
            <p className="font-body text-inverted/25 mt-4">
              Free · No commitment · 48h response
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="font-body text-[13px] text-inverted/40 hover:text-inverted mt-6 block transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            >
              {BRAND.email}
            </a>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="container-site py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-body text-[12px] text-inverted/18">
              {t("copy")}
            </p>
            <div className="flex items-center gap-5">
              <Link
                href={`/${locale}/legal/privacy`}
                className="font-body text-[12px] text-inverted/18 hover:text-inverted/40 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              >
                {t("legal.privacy")}
              </Link>
              <Link
                href={`/${locale}/legal/terms`}
                className="font-body text-[12px] text-inverted/18 hover:text-inverted/40 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              >
                {t("legal.terms")}
              </Link>
              <Link
                href={`/${locale}/legal/cookies`}
                className="font-body text-[12px] text-inverted/18 hover:text-inverted/40 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              >
                {t("legal.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
