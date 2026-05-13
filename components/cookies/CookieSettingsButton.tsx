"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";

interface CookieSettingsButtonProps {
  className?: string;
}

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  const { copy, openPreferences } = useCookieConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      {copy.settings}
    </button>
  );
}
