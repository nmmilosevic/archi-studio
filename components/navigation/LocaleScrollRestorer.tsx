"use client";

import { useEffect } from "react";
import { consumeLocaleScrollPosition } from "@/lib/locale-navigation";

export function LocaleScrollRestorer() {
  useEffect(() => {
    const scrollPosition = consumeLocaleScrollPosition();
    if (scrollPosition === null) return;

    window.history.scrollRestoration = "manual";

    const restorePosition = () => {
      const maxScrollY = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0
      );
      window.scrollTo({
        top: Math.min(scrollPosition.scrollY, maxScrollY),
        behavior: "auto",
      });
    };

    restorePosition();
    let secondFrame = 0;
    let cancelled = false;
    const firstFrame = window.requestAnimationFrame(() => {
      restorePosition();
      secondFrame = window.requestAnimationFrame(() => {
        restorePosition();
        window.history.scrollRestoration =
          scrollPosition.previousScrollRestoration;
      });
    });

    void document.fonts?.ready.then(() => {
      if (!cancelled) restorePosition();
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.history.scrollRestoration =
        scrollPosition.previousScrollRestoration;
    };
  }, []);

  return null;
}
