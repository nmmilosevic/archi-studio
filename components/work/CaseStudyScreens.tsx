"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type Dispatch,
  type PointerEvent,
  type SetStateAction,
} from "react";
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

const SWIPE_THRESHOLD_PX = 56;

function useMobileLightboxSwipe(
  openIndex: number | null,
  previewCount: number,
  close: () => void,
  setOpenIndex: Dispatch<SetStateAction<number | null>>
) {
  const swipeStartRef = useRef<{ x: number; y: number; pointerId: number } | null>(null);

  const isMobileSwipeTarget = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  }, []);

  const handlePointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (openIndex === null || !isMobileSwipeTarget()) return;
      if (e.pointerType === "mouse") return;
      swipeStartRef.current = { x: e.clientX, y: e.clientY, pointerId: e.pointerId };
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [openIndex, isMobileSwipeTarget]
  );

  const endSwipe = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const start = swipeStartRef.current;
    if (!start || start.pointerId !== e.pointerId) return;
    swipeStartRef.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }

    if (!isMobileSwipeTarget() || e.pointerType === "mouse") return;

    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;

    if (Math.abs(dy) >= Math.abs(dx) && dy > SWIPE_THRESHOLD_PX) {
      close();
      return;
    }
    if (
      previewCount > 1 &&
      Math.abs(dx) > Math.abs(dy) &&
      Math.abs(dx) > SWIPE_THRESHOLD_PX
    ) {
      setOpenIndex((i) => {
        if (i === null) return null;
        return dx < 0 ? (i + 1) % previewCount : (i - 1 + previewCount) % previewCount;
      });
    }
  }, [close, isMobileSwipeTarget, previewCount, setOpenIndex]);

  const handlePointerCancel = useCallback((e: PointerEvent<HTMLDivElement>) => {
    if (swipeStartRef.current?.pointerId === e.pointerId) swipeStartRef.current = null;
  }, []);

  return { handlePointerDown, handlePointerUp: endSwipe, handlePointerCancel };
}

export function CaseStudyScreens({ title, heading, screens }: Props) {
  const labelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const previewScreenCount = Math.min(2, screens.length);

  const close = useCallback(() => {
    const trigger = openerRef.current;
    setOpenIndex(null);
    queueMicrotask(() => trigger?.focus());
  }, []);

  const { handlePointerDown, handlePointerUp, handlePointerCancel } = useMobileLightboxSwipe(
    openIndex,
    previewScreenCount,
    close,
    setOpenIndex
  );

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
          className="fixed inset-0 z-[70] flex cursor-default items-center justify-center px-3 py-4 sm:px-5 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          onClick={close}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-charcoal/88 backdrop-blur-[2px]"
            aria-hidden
          />
          <div
            className="relative z-10 flex min-h-0 w-full max-w-none cursor-auto flex-col"
            onClick={(e) => e.stopPropagation()}
          >
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
            <div
              className="relative h-[min(86vh,1120px)] w-full min-h-[200px] min-w-0 touch-none md:touch-auto"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
            >
              <Image
                src={assetPath(active.image)}
                alt={`${title} ${active.label}`}
                fill
                quality={92}
                className="pointer-events-none object-contain object-center select-none"
                sizes="100vw"
                priority
                draggable={false}
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
