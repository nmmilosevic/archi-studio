"use client";

import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeLocale = LOCALES.find((loc) => loc.code === locale) ?? LOCALES[0];
  const otherLocales = LOCALES.filter((loc) => loc.code !== locale);

  function handleSwitch(newLocale: string) {
    if (newLocale === locale) return;
    const localizedPath = pathname.replace(/^\/[^/]+(?=\/|$)/, `/${newLocale}`) || `/${newLocale}`;
    router.replace(localizedPath, { scroll: false });
    setOpen(false);
  }

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setOpen(true);
  }

  function closeMenuWithDelay() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, 140);
  }

  return (
    <div
      className="relative"
      role="navigation"
      aria-label="Language switcher"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuWithDelay}
    >
      <button
        type="button"
        aria-label="Select language"
        aria-expanded={open}
        className={clsx(
          "inline-flex min-h-9 items-center gap-1.5 px-3 font-body text-[13px] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 cursor-pointer",
          light ? "text-inverted" : "text-primary"
        )}
        onClick={() => {
          clearCloseTimer();
          setOpen((prev) => !prev);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) {
            setOpen(false);
          }
        }}
      >
        <span className="font-medium">{activeLocale.label}</span>
        <ChevronDown className={clsx("h-3.5 w-3.5 transition-transform duration-200 ease-out", open && "rotate-180")} />
      </button>

      <div
        className={clsx(
          "absolute right-0 top-full z-30 mt-1 min-w-[84px] origin-top overflow-hidden border shadow-[0_10px_24px_rgb(20_16_12/0.10)] transition-all duration-200 ease-out",
          light ? "border-inverted/30 bg-inverted/95" : "border-charcoal/12 bg-offwhite",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        )}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenuWithDelay}
      >
        <ul className="py-1">
          {otherLocales.map((loc) => (
            <li key={loc.code}>
              <button
                type="button"
                onClick={() => handleSwitch(loc.code)}
                className={clsx(
                  "block w-full px-3 py-2 text-left text-[13px] transition-colors duration-200 ease-out cursor-pointer",
                  light ? "text-primary hover:bg-charcoal/8" : "text-primary hover:bg-charcoal/6"
                )}
              >
                {loc.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
