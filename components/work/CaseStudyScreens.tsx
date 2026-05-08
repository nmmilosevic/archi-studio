"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { assetPath } from "@/lib/paths";
import { Container } from "@/components/ui/Container";

export type CaseStudyScreen = {
  label: string;
  image: string;
};

type Props = {
  title: string;
  /** Accessible name for the section (not shown visually). */
  heading: string;
  screens: ReadonlyArray<CaseStudyScreen>;
};

/** Shared frame: equal aspect and height for both columns. */
const TILE_ASPECT = "aspect-[3/2]";

export function CaseStudyScreens({ title, heading, screens }: Props) {
  const labelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => {
    const trigger = openerRef.current;
    setOpenIndex(null);
    queueMicrotask(() => trigger?.focus());
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close]);

  const active = openIndex !== null ? screens[openIndex] : null;
  const [s1, s2] = [screens[0], screens[1]];

  const openAt = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    openerRef.current = e.currentTarget;
    setOpenIndex(index);
  };

  return (
    <section
      className="border-t border-charcoal/[0.05] bg-offwhite pb-[clamp(56px,9vw,100px)] pt-[clamp(40px,6vw,72px)]"
      aria-label={heading}
    >
      <Container>
        {s1 && s2 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
            {[s1, s2].map((s, i) => (
              <button
                key={`${s.image}-${i}`}
                type="button"
                className="group block w-full cursor-zoom-in text-left"
                onClick={(e) => openAt(i, e)}
                aria-haspopup="dialog"
                aria-expanded={openIndex === i}
                aria-controls={openIndex === i ? labelId : undefined}
              >
                <div
                  className={`relative w-full overflow-hidden bg-stone shadow-[0_16px_48px_rgb(16_12_9/0.07)] transition-shadow duration-300 group-hover:shadow-[0_22px_56px_rgb(16_12_9/0.1)] ${TILE_ASPECT}`}
                >
                  <Image
                    src={assetPath(s.image)}
                    alt={`${title} — ${s.label}`}
                    fill
                    quality={92}
                    className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 46vw, 100vw"
                  />
                </div>
                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-primary/50 md:mt-3.5">
                  {s.label}
                </p>
              </button>
            ))}
          </div>
        )}
      </Container>

      {active && (
        <div
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center px-3 py-4 sm:px-5 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
        >
          <button
            type="button"
            className="pointer-events-auto absolute inset-0 bg-charcoal/88 backdrop-blur-[2px]"
            aria-label="Close preview"
            onClick={close}
          />
          <div className="pointer-events-auto relative z-10 flex min-h-0 w-full max-w-none flex-col">
            <div className="mb-3 flex shrink-0 justify-end">
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-inverted/20 bg-charcoal/90 text-inverted shadow-[0_8px_24px_rgb(0_0_0/0.35)] transition-colors hover:bg-inverted/12 hover:text-bronze"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
            <div className="relative h-[min(86vh,1120px)] w-full min-h-[200px] min-w-0">
              <Image
                src={assetPath(active.image)}
                alt={`${title} ${active.label}`}
                fill
                quality={92}
                className="object-contain object-center"
                sizes="100vw"
                priority
              />
            </div>
            <p id={labelId} className="mt-4 text-center text-[15px] text-inverted/72">
              {active.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
