"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
] as const;

interface LanguageSwitcherProps {
  light?: boolean;
}

export function LanguageSwitcher({ light }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleSwitch(newLocale: string) {
    if (newLocale === locale) return;
    // Replace the current locale prefix in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div
      className="flex items-center gap-1"
      role="navigation"
      aria-label="Language switcher"
    >
      {LOCALES.map((loc, index) => (
        <span key={loc.code} className="flex items-center">
          <button
            onClick={() => handleSwitch(loc.code)}
            aria-label={`Switch to ${loc.label}`}
            aria-current={locale === loc.code ? "true" : undefined}
            className={clsx(
              "font-body text-[14px] tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 cursor-pointer",
              locale === loc.code
                ? light
                  ? "text-inverted font-medium"
                  : "text-primary font-medium"
                : light
                ? "text-inverted/40 hover:text-inverted/80"
                : "text-muted hover:text-primary"
            )}
          >
            {loc.label}
          </button>
          {index < LOCALES.length - 1 && (
            <span
              className={clsx(
                "mx-1.5 text-[14px] select-none",
                light ? "text-inverted/20" : "text-muted/30"
              )}
              aria-hidden="true"
            >
              /
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
