"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface CenteredHashAnchorProps {
  children: ReactNode;
  className?: string;
  id: string;
}

export function CenteredHashAnchor({
  children,
  className,
  id,
}: CenteredHashAnchorProps) {
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let firstFrame = 0;
    let secondFrame = 0;
    let settleTimer = 0;

    const centerAnchor = () => {
      if (window.location.hash !== `#${id}` || !anchorRef.current) return;

      const rect = anchorRef.current.getBoundingClientRect();
      const headerOffset = window.innerWidth >= 1024 ? 72 : 68;
      const availableHeight = window.innerHeight - headerOffset;
      const absoluteTop = window.scrollY + rect.top;
      const targetTop =
        rect.height <= availableHeight
          ? absoluteTop -
            headerOffset -
            (availableHeight - rect.height) / 2
          : absoluteTop - headerOffset;

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
      root.style.scrollBehavior = previousScrollBehavior;
    };

    const scheduleCenter = () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(settleTimer);

      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(centerAnchor);
      });
      settleTimer = window.setTimeout(centerAnchor, 500);
    };

    void document.fonts.ready.then(scheduleCenter);
    window.addEventListener("hashchange", scheduleCenter);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(settleTimer);
      window.removeEventListener("hashchange", scheduleCenter);
    };
  }, [id]);

  return (
    <div ref={anchorRef} id={id} className={className}>
      {children}
    </div>
  );
}
