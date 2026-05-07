import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Mail, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function SiteFooter() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const tNav = useTranslations("footer.nav");

  return (
    <footer
      className="bg-charcoal text-inverted"
      aria-label="Site footer"
      role="contentinfo"
    >
      {/* ── Wordmark block ────────────────────────────────── */}
      <div className="container-site pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="editorial-note text-inverted/25 mb-8">
          Website Redesign · Architecture Studios
        </p>

        <Link
          href={`/${locale}`}
          className="block font-heading text-[clamp(56px,12vw,150px)] font-medium leading-[0.86] text-inverted transition-colors duration-500 hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
          aria-label={`${BRAND.name} — Home`}
        >
          {BRAND.name}
        </Link>

        <p className="mt-8 font-body text-[16px] md:text-[18px] leading-[1.45] text-inverted/45 max-w-[400px]">
          Architecture for the screen.
        </p>
      </div>

      {/* ── Nav grid ──────────────────────────────────────── */}
      <div className="container-site border-t border-white/8 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Col 1: Contact */}
          <div className="lg:col-span-4">
            <p className="editorial-note text-inverted/25 mb-6">
              Contact
            </p>
            <div className="space-y-3.5 mb-8">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 font-body text-[14px] text-inverted/55 hover:text-inverted transition-colors duration-200 group"
                aria-label={`Email us at ${BRAND.email}`}
              >
                <Mail className="h-3.5 w-3.5 text-bronze group-hover:text-clay transition-colors flex-shrink-0" aria-hidden="true" />
                {BRAND.email}
              </a>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-body text-[14px] text-inverted/55 hover:text-inverted transition-colors duration-200 group"
                aria-label={`WhatsApp us at ${BRAND.whatsapp}`}
              >
                <MessageCircle className="h-3.5 w-3.5 text-bronze group-hover:text-clay transition-colors flex-shrink-0" aria-hidden="true" />
                {BRAND.whatsapp}
              </a>
            </div>
            <p className="font-body text-[13px] leading-[1.65] text-inverted/30 max-w-[260px]">
              {t("tagline")}
            </p>
          </div>

          {/* Col 2: Sitemap */}
          <div className="lg:col-span-2 lg:col-start-7">
            <p className="editorial-note text-inverted/25 mb-6">
              {tNav("sitemap")}
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { key: "services", href: "/services" },
                  { key: "pricing", href: "/pricing" },
                  { key: "work", href: "/work" },
                  { key: "audit", href: "/audit" },
                  { key: "contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.key}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="font-body text-[14px] text-inverted/50 hover:text-inverted transition-colors duration-200"
                    >
                      {tNav(link.key as keyof ReturnType<typeof useTranslations<"footer.nav">>)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Focus */}
          <div className="lg:col-span-3">
            <p className="editorial-note text-inverted/25 mb-6">
              Focus
            </p>
            <ul className="space-y-3">
              {[
                { label: "Reframe Audit", href: "/contact" },
                { label: "Perception Gap Analysis", href: "/work" },
                { label: "First Impression System", href: "/work" },
                { label: "Portfolio Clarity", href: "/work" },
                { label: "Architecture for the Screen", href: "/work" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="font-body text-[14px] text-inverted/50 hover:text-inverted transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Territory */}
          <div className="lg:col-span-3">
            <p className="editorial-note text-inverted/25 mb-6">
              Territory
            </p>
            <p className="font-body text-[14px] leading-[1.65] text-inverted/45 mb-5">
              {t("locations")}
            </p>
            <p className="editorial-note text-inverted/20">
              36.5099° N · 4.8824° W
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div className="border-t border-white/6">
        <div className="container-site py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-body text-[13px] text-inverted/20">
              {t("copy")}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={`/${locale}/legal/privacy`}
                className="font-body text-[13px] text-inverted/20 hover:text-inverted/45 transition-colors duration-300"
              >
                {t("legal.privacy")}
              </Link>
              <Link
                href={`/${locale}/legal/terms`}
                className="font-body text-[13px] text-inverted/20 hover:text-inverted/45 transition-colors duration-300"
              >
                {t("legal.terms")}
              </Link>
              <Link
                href={`/${locale}/legal/cookies`}
                className="font-body text-[13px] text-inverted/20 hover:text-inverted/45 transition-colors duration-300"
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
