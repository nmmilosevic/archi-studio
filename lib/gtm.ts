import type { CookieConsentPreferences } from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __reframeGtmLoaded?: boolean;
    __reframeGaLoaded?: boolean;
  }
}

export const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID === ""
    ? undefined
    : (process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-W7V3NLV5");

export const GA_ID =
  process.env.NEXT_PUBLIC_GA_ID === ""
    ? undefined
    : process.env.NEXT_PUBLIC_GA_ID;

function getConsentValue(allowed: boolean) {
  return allowed ? "granted" : "denied";
}

export function initializeGoogleConsentMode() {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
}

export function updateGoogleConsentMode(preferences: CookieConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  initializeGoogleConsentMode();

  window.gtag?.("consent", "update", {
    analytics_storage: getConsentValue(preferences.analytics),
    ad_storage: getConsentValue(preferences.marketing),
    ad_user_data: getConsentValue(preferences.marketing),
    ad_personalization: getConsentValue(preferences.marketing),
  });
}

export function loadGoogleTagManager() {
  if (typeof window === "undefined" || !GTM_ID || window.__reframeGtmLoaded) {
    return;
  }

  initializeGoogleConsentMode();

  window.__reframeGtmLoaded = true;
  window.dataLayer?.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

export function loadGoogleAnalytics() {
  if (typeof window === "undefined" || !GA_ID || window.__reframeGaLoaded) {
    return;
  }

  initializeGoogleConsentMode();

  window.__reframeGaLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_ID, { anonymize_ip: true });
}

export function applyTrackingConsent(preferences: CookieConsentPreferences) {
  updateGoogleConsentMode(preferences);

  if (preferences.analytics) {
    loadGoogleTagManager();
    loadGoogleAnalytics();
  }
}
