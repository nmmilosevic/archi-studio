export const COOKIE_CONSENT_STORAGE_KEY = "reframe-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;

export type CookieConsentCategory = "necessary" | "analytics" | "marketing";

export type CookieConsentPreferences = Record<CookieConsentCategory, boolean>;

export interface StoredCookieConsent {
  version: number;
  updatedAt: string;
  preferences: CookieConsentPreferences;
}

export const DEFAULT_COOKIE_CONSENT: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const ALL_COOKIE_CONSENT: CookieConsentPreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
};

export const COOKIE_CONSENT_COPY = {
  en: {
    bannerTitle: "Cookies and analytics",
    bannerText:
      "We use essential cookies for the website to function properly and optional analytics cookies to understand how visitors use the site.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    preferences: "Preferences",
    settings: "Cookie settings",
    modalTitle: "Cookie preferences",
    modalIntro:
      "Choose which cookies you want to allow. Necessary cookies remain active to keep the website functional.",
    save: "Save preferences",
    close: "Close cookie preferences",
    categories: {
      necessary: {
        title: "Necessary cookies",
        description: "Required for core website functionality.",
      },
      analytics: {
        title: "Analytics cookies",
        description:
          "Help us understand traffic and improve the website experience.",
      },
      marketing: {
        title: "Marketing cookies",
        description:
          "Reserved for future advertising and campaign tracking tools.",
      },
    },
  },
} as const;

export type CookieConsentLocale = keyof typeof COOKIE_CONSENT_COPY;

export function getCookieConsentCopy(locale?: string) {
  if (locale && locale in COOKIE_CONSENT_COPY) {
    return COOKIE_CONSENT_COPY[locale as CookieConsentLocale];
  }

  return COOKIE_CONSENT_COPY.en;
}

export function createStoredCookieConsent(
  preferences: CookieConsentPreferences,
): StoredCookieConsent {
  return {
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    preferences: {
      ...preferences,
      necessary: true,
    },
  };
}

export function parseStoredCookieConsent(
  value: string | null,
): StoredCookieConsent | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<StoredCookieConsent>;

    if (
      parsed.version !== COOKIE_CONSENT_VERSION ||
      !parsed.preferences ||
      typeof parsed.preferences.analytics !== "boolean" ||
      typeof parsed.preferences.marketing !== "boolean"
    ) {
      return null;
    }

    return createStoredCookieConsent({
      necessary: true,
      analytics: parsed.preferences.analytics,
      marketing: parsed.preferences.marketing,
    });
  } catch {
    return null;
  }
}
