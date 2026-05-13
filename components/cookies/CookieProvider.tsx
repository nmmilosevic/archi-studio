"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocale } from "next-intl";
import {
  ALL_COOKIE_CONSENT,
  COOKIE_CONSENT_STORAGE_KEY,
  DEFAULT_COOKIE_CONSENT,
  type CookieConsentPreferences,
  createStoredCookieConsent,
  getCookieConsentCopy,
  parseStoredCookieConsent,
} from "@/lib/cookie-consent";
import { applyTrackingConsent, initializeGoogleConsentMode } from "@/lib/gtm";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookiePreferencesModal } from "@/components/cookies/CookiePreferencesModal";

interface CookieConsentContextValue {
  copy: ReturnType<typeof getCookieConsentCopy>;
  hasStoredConsent: boolean;
  isPreferencesOpen: boolean;
  preferences: CookieConsentPreferences;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookieConsentPreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const CookieConsentContext =
  createContext<CookieConsentContextValue | null>(null);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const copy = getCookieConsentCopy(locale);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [storedConsent, setStoredConsent] =
    useState<CookieConsentPreferences | null>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    initializeGoogleConsentMode();

    const stored = parseStoredCookieConsent(
      window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY),
    );

    if (stored) {
      applyTrackingConsent(stored.preferences);
    }

    const frameId = window.requestAnimationFrame(() => {
      if (stored) {
        setStoredConsent(stored.preferences);
      }

      setHasHydrated(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const savePreferences = useCallback(
    (preferences: CookieConsentPreferences) => {
      const next = createStoredCookieConsent(preferences);

      window.localStorage.setItem(
        COOKIE_CONSENT_STORAGE_KEY,
        JSON.stringify(next),
      );

      setStoredConsent(next.preferences);
      applyTrackingConsent(next.preferences);
      setIsPreferencesOpen(false);
    },
    [],
  );

  const acceptAll = useCallback(() => {
    savePreferences(ALL_COOKIE_CONSENT);
  }, [savePreferences]);

  const rejectAll = useCallback(() => {
    savePreferences(DEFAULT_COOKIE_CONSENT);
  }, [savePreferences]);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      copy,
      hasStoredConsent: storedConsent !== null,
      isPreferencesOpen,
      preferences: storedConsent ?? DEFAULT_COOKIE_CONSENT,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => setIsPreferencesOpen(false),
    }),
    [
      acceptAll,
      copy,
      isPreferencesOpen,
      rejectAll,
      savePreferences,
      storedConsent,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {hasHydrated && !storedConsent ? <CookieBanner /> : null}
      {hasHydrated && isPreferencesOpen ? <CookiePreferencesModal /> : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsentContext() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent must be used inside a CookieProvider component.",
    );
  }

  return context;
}
