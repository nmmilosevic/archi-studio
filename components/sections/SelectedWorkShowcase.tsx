"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import mediteraneanImage from "@/public/images/autoscroll/mediteranean.png";
import organicImage from "@/public/images/autoscroll/organic.png";
import avantformeImage from "@/public/images/autoscroll/avantforme.png";
import futuristicImage from "@/public/images/autoscroll/futuristic.png";
import japanImage from "@/public/images/autoscroll/japan.png";
import luxuryImage from "@/public/images/autoscroll/luxury.png";
import modernEcoImage from "@/public/images/autoscroll/modern-eco.png";
import parisianImage from "@/public/images/autoscroll/parisian.png";
import darkLuxuryImage from "@/public/images/autoscroll/dark-luxury.png";

interface ShowcaseItem {
  id: string;
  image: typeof mediteraneanImage;
  offsetClass: string;
}

const baseItems: ShowcaseItem[] = [
  {
    id: "mediteranean-style",
    image: mediteraneanImage,
    offsetClass: "mt-0 md:mt-0",
  },
  {
    id: "organic-style",
    image: organicImage,
    offsetClass: "mt-6 md:mt-10",
  },
  {
    id: "avantforme-style",
    image: avantformeImage,
    offsetClass: "mt-2 md:mt-4",
  },
  {
    id: "futuristic-style",
    image: futuristicImage,
    offsetClass: "mt-8 md:mt-14",
  },
  {
    id: "japan-style",
    image: japanImage,
    offsetClass: "mt-1 md:mt-2",
  },
  {
    id: "luxury-style",
    image: luxuryImage,
    offsetClass: "mt-7 md:mt-12",
  },
  {
    id: "modern-eco-style",
    image: modernEcoImage,
    offsetClass: "mt-3 md:mt-5",
  },
  {
    id: "parisian-style",
    image: parisianImage,
    offsetClass: "mt-5 md:mt-10",
  },
  {
    id: "dark-luxury-style",
    image: darkLuxuryImage,
    offsetClass: "mt-2 md:mt-2",
  },
];

type Props = {
  /** One label per showcase card, same order as the image strip. */
  styleLabels: readonly string[];
};

function buildItems(labels: readonly string[]) {
  if (labels.length !== baseItems.length) {
    throw new Error(
      `SelectedWorkShowcase: expected ${baseItems.length} style labels, got ${labels.length}`
    );
  }
  return baseItems.map((item, i) => ({
    ...item,
    title: labels[i] ?? "",
  }));
}

const AUTO_PAUSE_MS = 3200;
/** ~same perceived pace as the former 90s marquee over half the duplicated track */
const AUTO_SCROLL_PX_PER_SEC = 42;

export function SelectedWorkShowcase({ styleLabels }: Props) {
  const reduced = useReducedMotion();
  const items = useMemo(() => buildItems(styleLabels), [styleLabels]);
  const doubledItems = useMemo(() => [...items, ...items], [items]);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  /** Last scrollLeft we applied in the auto-scroll loop (async `scroll` events must not look like “user”). */
  const lastAutoScrollLeftRef = useRef(0);
  const pauseUntilRef = useRef(0);

  function pauseAutoScroll() {
    pauseUntilRef.current = Date.now() + AUTO_PAUSE_MS;
  }

  useEffect(() => {
    if (reduced) return;
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const left = el.scrollLeft;
      const expected = lastAutoScrollLeftRef.current;
      if (Math.abs(left - expected) <= 2) return;
      pauseAutoScroll();
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    let rafId = 0;
    let lastTs = 0;

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      if (Date.now() < pauseUntilRef.current) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const half = el.scrollWidth / 2;
      if (half > 0) {
        let next = el.scrollLeft + AUTO_SCROLL_PX_PER_SEC * dt;
        if (next >= half) next -= half;
        lastAutoScrollLeftRef.current = next;
        el.scrollLeft = next;
      }

      rafId = requestAnimationFrame(tick);
    };

    lastAutoScrollLeftRef.current = el.scrollLeft;
    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("scroll", onScroll);
    };
  }, [reduced]);

  return (
    <div className="showcaseRoot relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--color-offwhite)] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--color-offwhite)] to-transparent md:w-28" />

      <div
        ref={scrollerRef}
        className="overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0"
        aria-label="Selected work moving showcase"
        onPointerDown={reduced ? undefined : pauseAutoScroll}
        onWheel={
          reduced
            ? undefined
            : (e) => {
                if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 0.5) {
                  pauseAutoScroll();
                }
              }
        }
      >
        <div
          className={clsx(
            "showcaseTrack flex w-max items-start gap-6 px-1 py-3 md:gap-8 md:py-6"
          )}
        >
          {doubledItems.map((item, index) => (
            <article key={`${item.id}-${index}`} className={clsx("flex-shrink-0", item.offsetClass)}>
              <Image
                src={item.image}
                alt={item.title}
                draggable={false}
                loading="lazy"
                sizes="(max-width: 768px) 40vw, (max-width: 1280px) 280px, 340px"
                className="h-auto w-auto max-h-[220px] select-none md:max-h-[280px] xl:max-h-[340px] shadow-[0_12px_30px_rgb(8_8_8/0.09)]"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

