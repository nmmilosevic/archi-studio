import { LOCALES, type Locale } from "@/lib/constants";

const LOCALE_SCROLL_STORAGE_KEY = "reframe:locale-scroll-position";
const LOCALE_SCROLL_MAX_AGE_MS = 15_000;

interface LocaleScrollPosition {
  pathname: string;
  scrollY: number;
  savedAt: number;
  previousScrollRestoration: ScrollRestoration;
}

function normalizePathname(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (currentLocale && isLocale(currentLocale)) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }

  const localizedPath = segments.join("/");
  return localizedPath || `/${locale}`;
}

export function getLocalizedHref(pathname: string, locale: Locale): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${getLocalizedPathname(pathname, locale)}`;
}

export function navigateToLocale(pathname: string, locale: Locale): void {
  const localizedPath = getLocalizedHref(pathname, locale);

  try {
    const previousScrollRestoration = window.history.scrollRestoration;
    const scrollPosition: LocaleScrollPosition = {
      pathname: localizedPath,
      scrollY: window.scrollY,
      savedAt: Date.now(),
      previousScrollRestoration,
    };

    window.sessionStorage.setItem(
      LOCALE_SCROLL_STORAGE_KEY,
      JSON.stringify(scrollPosition)
    );
    window.history.scrollRestoration = "manual";
  } catch {
    // Navigation still works if storage or scroll restoration is unavailable.
  }

  window.location.assign(
    `${localizedPath}${window.location.search}${window.location.hash}`
  );
}

export function consumeLocaleScrollPosition(): LocaleScrollPosition | null {
  try {
    const storedValue = window.sessionStorage.getItem(
      LOCALE_SCROLL_STORAGE_KEY
    );

    if (!storedValue) return null;

    window.sessionStorage.removeItem(LOCALE_SCROLL_STORAGE_KEY);
    const scrollPosition = JSON.parse(storedValue) as LocaleScrollPosition;
    const isCurrentPage =
      normalizePathname(scrollPosition.pathname) ===
      normalizePathname(window.location.pathname);
    const isRecent =
      Date.now() - scrollPosition.savedAt <= LOCALE_SCROLL_MAX_AGE_MS;

    if (
      !isCurrentPage ||
      !isRecent ||
      !Number.isFinite(scrollPosition.scrollY) ||
      !["auto", "manual"].includes(scrollPosition.previousScrollRestoration)
    ) {
      return null;
    }

    return {
      ...scrollPosition,
      scrollY: Math.max(scrollPosition.scrollY, 0),
    };
  } catch {
    return null;
  }
}
