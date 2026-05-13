"use client";

import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieBanner() {
  const { copy, acceptAll, rejectAll, openPreferences } = useCookieConsent();

  return (
    <section
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[480px] animate-fade-up rounded-[18px] border border-charcoal/10 bg-[rgb(245_241_235/0.9)] px-5 py-5 text-primary shadow-[0_24px_80px_rgb(11_11_11/0.16)] backdrop-blur-md md:bottom-6 md:left-auto md:right-6 md:mx-0"
      aria-labelledby="cookie-banner-title"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <h2
            id="cookie-banner-title"
            className="text-[19px] font-medium leading-tight tracking-normal"
          >
            {copy.bannerTitle}
          </h2>
          <p className="max-w-[58ch] text-[14px] leading-relaxed text-muted-custom">
            {copy.bannerText}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-3">
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-11 rounded-full border border-charcoal bg-charcoal px-4 text-[13px] font-medium text-inverted transition-colors hover:bg-[#24211d] focus-visible:outline-bronze"
          >
            {copy.acceptAll}
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="min-h-11 rounded-full border border-charcoal/55 bg-transparent px-4 text-[13px] font-medium text-primary transition-colors hover:border-charcoal hover:bg-charcoal/5 focus-visible:outline-bronze"
          >
            {copy.rejectAll}
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="min-h-11 rounded-full border border-transparent bg-transparent px-4 text-[13px] font-medium text-muted-custom transition-colors hover:bg-charcoal/5 hover:text-primary focus-visible:outline-bronze"
          >
            {copy.preferences}
          </button>
        </div>
      </div>
    </section>
  );
}
