import { LOCALES, type Locale } from "@/lib/constants";

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
