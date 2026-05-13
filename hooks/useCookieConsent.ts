"use client";

import { useCookieConsentContext } from "@/components/cookies/CookieProvider";

export function useCookieConsent() {
  return useCookieConsentContext();
}
