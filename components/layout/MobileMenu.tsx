"use client";

import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS, type Locale } from "@/lib/constants";
import { getLocalizedPathname } from "@/lib/locale-navigation";
import { getPageCopy } from "@/lib/page-copy";
import { motionEase } from "@/lib/motion";
import { ReframeLogo } from "@/components/ui/ReframeLogo";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween" as const,
      duration: 0.38,
      delay: 0.08 + i * 0.06,
      ease: motionEase.out,
    },
  }),
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const navigationCopy = getPageCopy(locale).navigation;
  const pathname = usePathname();
  const router = useRouter();
  const reduced = useReducedMotion();

  function handleLocaleChange(newLocale: string) {
    if (newLocale === locale) return;
    onClose();
    router.replace(getLocalizedPathname(pathname, newLocale as Locale), {
      scroll: false,
    });
  }

  function handleLogoClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const homePath = `/${locale}`;
    if (pathname === homePath) {
      event.preventDefault();
      onClose();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "tween",
              duration: 0.36,
              ease: motionEase.opacity,
            }}
            className="fixed inset-0 z-40 bg-charcoal/45 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <m.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{
              type: "tween",
              duration: reduced ? 0.15 : 0.5,
              ease: motionEase.out,
            }}
            className="fixed inset-0 z-50 flex flex-col bg-charcoal text-inverted"
            role="dialog"
            aria-modal="true"
            aria-label={navigationCopy.menu}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-7 pb-3 sm:px-7 sm:pt-9">
              <div className="flex items-center">
                <Link
                  href={`/${locale}`}
                  onClick={handleLogoClick}
                  aria-label={navigationCopy.home}
                  className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                >
                  <ReframeLogo light className="h-[37px] w-[132px]" />
                </Link>
              </div>
              <button
                onClick={onClose}
                className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-inverted/68 transition-colors duration-200 hover:text-inverted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                aria-label={navigationCopy.closeMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-5 pt-8 pb-6 sm:px-7 sm:pt-10" aria-label={navigationCopy.mobile}>
              <ul className="space-y-4">
                {NAV_LINKS.map((link, i) => (
                  <m.li
                    key={link.key}
                    custom={i}
                    variants={itemVariants}
                    initial={reduced ? false : "hidden"}
                    animate="show"
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={onClose}
                      aria-current={
                        pathname === `/${locale}${link.href}` ||
                        pathname.startsWith(`/${locale}${link.href}/`)
                          ? "page"
                          : undefined
                      }
                      className={clsx("group inline-flex items-end gap-3 py-1")}
                    >
                      <span
                        className={clsx(
                          "font-heading text-[clamp(38px,10vw,56px)] leading-[0.9] tracking-[-0.015em] transition-colors duration-300",
                          pathname === `/${locale}${link.href}` || pathname.startsWith(`/${locale}${link.href}/`)
                            ? "text-inverted"
                            : "text-inverted/74 group-hover:text-inverted"
                        )}
                      >
                        {t(link.key as keyof ReturnType<typeof useTranslations<"nav">>)}
                      </span>
                      <span
                        aria-hidden="true"
                        className={clsx(
                          "mb-[0.34rem] h-px w-10 bg-bronze/65 transition-all duration-300",
                          pathname === `/${locale}${link.href}` || pathname.startsWith(`/${locale}${link.href}/`)
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        )}
                      />
                    </Link>
                  </m.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="px-5 pb-6 sm:px-7 sm:pb-7">
              <div className="flex items-center justify-between gap-4">
                <Link
                  href={`/${locale}/contact`}
                  onClick={onClose}
                  className="text-[14px] text-inverted/74 transition-colors hover:text-inverted"
                >
                  {t("contact")}
                </Link>
                <label className="flex items-center gap-2 text-[12px] text-inverted/62">
                  <span>{navigationCopy.language}</span>
                  <select
                    value={locale}
                    onChange={(event) => handleLocaleChange(event.target.value)}
                    className="min-h-10 rounded-full border border-inverted/25 bg-transparent px-3 text-[13px] text-inverted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    aria-label={navigationCopy.selectLanguage}
                  >
                    <option value="en" className="bg-charcoal text-inverted">EN</option>
                    <option value="es" className="bg-charcoal text-inverted">ES</option>
                    <option value="fr" className="bg-charcoal text-inverted">FR</option>
                  </select>
                </label>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
