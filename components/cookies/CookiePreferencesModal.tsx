"use client";

import { X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  DEFAULT_COOKIE_CONSENT,
  type CookieConsentCategory,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const EDITABLE_CATEGORIES: CookieConsentCategory[] = [
  "analytics",
  "marketing",
];

export function CookiePreferencesModal() {
  const { copy, preferences, savePreferences, closePreferences } =
    useCookieConsent();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [draft, setDraft] = useState<CookieConsentPreferences>({
    ...DEFAULT_COOKIE_CONSENT,
    ...preferences,
    necessary: true,
  });

  const categories = useMemo<CookieConsentCategory[]>(
    () => ["necessary", ...EDITABLE_CATEGORIES],
    [],
  );

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePreferences();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";

      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      }
    };
  }, [closePreferences]);

  function toggleCategory(category: CookieConsentCategory) {
    if (category === "necessary") {
      return;
    }

    setDraft((current) => ({
      ...current,
      [category]: !current[category],
      necessary: true,
    }));
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end bg-charcoal/28 px-4 py-4 backdrop-blur-[2px] md:items-center md:justify-center"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePreferences();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        aria-describedby="cookie-preferences-intro"
        className="w-full max-w-[560px] rounded-[18px] border border-charcoal/10 bg-[rgb(245_241_235/0.9)] px-5 py-5 text-primary shadow-[0_28px_90px_rgb(11_11_11/0.22)] backdrop-blur-md motion-safe:animate-fade-up md:px-6 md:py-6"
      >
        <div className="flex items-start justify-between gap-4 border-b border-default pb-4">
          <div className="space-y-2">
            <h2
              id="cookie-preferences-title"
              className="text-[23px] font-medium leading-tight tracking-normal"
            >
              {copy.modalTitle}
            </h2>
            <p
              id="cookie-preferences-intro"
              className="max-w-[56ch] text-[14px] leading-relaxed text-muted-custom"
            >
              {copy.modalIntro}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closePreferences}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-muted-custom transition-colors hover:bg-charcoal/5 hover:text-primary"
            aria-label={copy.close}
          >
            <X aria-hidden="true" size={18} strokeWidth={1.6} />
          </button>
        </div>

        <div className="divide-y divide-[#d8d2ca]">
          {categories.map((category) => {
            const isNecessary = category === "necessary";
            const categoryCopy = copy.categories[category];

            return (
              <div
                key={category}
                className="grid grid-cols-[1fr_auto] gap-4 py-5"
              >
                <div className="space-y-1">
                  <h3 className="text-[16px] font-medium leading-snug tracking-normal">
                    {categoryCopy.title}
                  </h3>
                  <p className="max-w-[42ch] text-[13px] leading-relaxed text-muted-custom">
                    {categoryCopy.description}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={draft[category]}
                  aria-label={categoryCopy.title}
                  disabled={isNecessary}
                  onClick={() => toggleCategory(category)}
                  className="relative mt-1 h-7 w-12 rounded-full border border-charcoal/30 bg-[#d9d1c6] transition-colors aria-checked:bg-charcoal disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span
                    className="absolute left-1 top-1 size-5 rounded-full bg-stone shadow-[0_1px_4px_rgb(11_11_11/0.2)] transition-transform data-[checked=true]:translate-x-5"
                    data-checked={draft[category]}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col-reverse gap-2 border-t border-default pt-4 min-[420px]:flex-row min-[420px]:justify-end">
          <button
            type="button"
            onClick={closePreferences}
            className="min-h-11 rounded-full bg-transparent px-4 text-[13px] font-medium text-muted-custom transition-colors hover:bg-charcoal/5 hover:text-primary"
          >
            {copy.preferences}
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-11 rounded-full border border-charcoal bg-charcoal px-5 text-[13px] font-medium text-inverted transition-colors hover:bg-[#24211d]"
          >
            {copy.save}
          </button>
        </div>
      </div>
    </div>
  );
}
