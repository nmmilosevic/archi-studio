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
      <div className="container-site py-18 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <Link
              href={`/${locale}`}
              className="font-heading text-[22px] font-semibold text-inverted mb-5 block hover:text-clay transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              aria-label={`${BRAND.name} — Home`}
            >
              {BRAND.name}
            </Link>
            <p className="font-body text-[15px] text-inverted/55 leading-[1.65] mb-8 max-w-[300px]">
              {t("tagline")}
            </p>
            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 font-body text-[14px] text-inverted/55 hover:text-inverted transition-colors duration-200 group"
                aria-label={`Email us at ${BRAND.email}`}
              >
                <Mail className="h-3.5 w-3.5 text-bronze group-hover:text-clay transition-colors" aria-hidden="true" />
                {t("email")}
              </a>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-body text-[14px] text-inverted/55 hover:text-inverted transition-colors duration-200 group"
                aria-label={`WhatsApp us at ${BRAND.whatsapp}`}
              >
                <MessageCircle className="h-3.5 w-3.5 text-bronze group-hover:text-clay transition-colors" aria-hidden="true" />
                {t("whatsapp")}
              </a>
            </div>
          </div>

          {/* Col 2: Sitemap */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="font-mono-label text-[14px] tracking-[0.12em] uppercase text-inverted/35 mb-5">
              {tNav("sitemap")}
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { key: "services", href: "/services" },
                  { key: "pricing", href: "/pricing" },
                  { key: "work", href: "/work" },
                  { key: "audit", href: "/audit" },
                  { key: "seo", href: "/seo-costa-del-sol" },
                  { key: "contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.key}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="font-body text-[14px] text-inverted/55 hover:text-inverted transition-colors duration-200"
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
            <h3 className="font-mono-label text-[14px] tracking-[0.12em] uppercase text-inverted/35 mb-5">
              Focus
            </h3>
            <ul className="space-y-3">
              {[
                "Redesign previews",
                "Architecture websites",
                "Interior design studios",
                "Portfolio clarity",
                "Mobile presentation",
                "Vercel launch",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${locale}/work`}
                    className="font-body text-[14px] text-inverted/55 hover:text-inverted transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Locations */}
          <div className="lg:col-span-3">
            <h3 className="font-mono-label text-[14px] tracking-[0.12em] uppercase text-inverted/35 mb-5">
              Costa del Sol
            </h3>
            <p className="font-body text-[14px] text-inverted/45 leading-[1.65]">
              {t("locations")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-site py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-body text-[14px] text-inverted/30">
              {t("copy")}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={`/${locale}/legal/privacy`}
                className="font-body text-[14px] text-inverted/30 hover:text-inverted/60 transition-colors duration-200"
              >
                {t("legal.privacy")}
              </Link>
              <Link
                href={`/${locale}/legal/terms`}
                className="font-body text-[14px] text-inverted/30 hover:text-inverted/60 transition-colors duration-200"
              >
                {t("legal.terms")}
              </Link>
              <Link
                href={`/${locale}/legal/cookies`}
                className="font-body text-[14px] text-inverted/30 hover:text-inverted/60 transition-colors duration-200"
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
