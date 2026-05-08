"use client";

import { useMemo } from "react";
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
  title: string;
  image: typeof mediteraneanImage;
  offsetClass: string;
}

const items: ShowcaseItem[] = [
  {
    id: "mediteranean-style",
    title: "Mediterranean style",
    image: mediteraneanImage,
    offsetClass: "mt-0 md:mt-0",
  },
  {
    id: "organic-style",
    title: "Organic style",
    image: organicImage,
    offsetClass: "mt-6 md:mt-10",
  },
  {
    id: "avantforme-style",
    title: "Avantforme style",
    image: avantformeImage,
    offsetClass: "mt-2 md:mt-4",
  },
  {
    id: "futuristic-style",
    title: "Futuristic style",
    image: futuristicImage,
    offsetClass: "mt-8 md:mt-14",
  },
  {
    id: "japan-style",
    title: "Japan style",
    image: japanImage,
    offsetClass: "mt-1 md:mt-2",
  },
  {
    id: "luxury-style",
    title: "Luxury style",
    image: luxuryImage,
    offsetClass: "mt-7 md:mt-12",
  },
  {
    id: "modern-eco-style",
    title: "Modern eco style",
    image: modernEcoImage,
    offsetClass: "mt-3 md:mt-5",
  },
  {
    id: "parisian-style",
    title: "Parisian style",
    image: parisianImage,
    offsetClass: "mt-5 md:mt-10",
  },
  {
    id: "dark-luxury-style",
    title: "Dark luxury style",
    image: darkLuxuryImage,
    offsetClass: "mt-2 md:mt-2",
  },
];

export function SelectedWorkShowcase() {
  const reduced = useReducedMotion();
  const doubledItems = useMemo(() => [...items, ...items], []);

  return (
    <div className="showcaseRoot relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--color-offwhite)] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--color-offwhite)] to-transparent md:w-28" />

      <div className="overflow-hidden" aria-label="Selected work moving showcase">
        <div
          className={clsx(
            "showcaseTrack flex w-max items-start gap-6 px-1 py-3 md:gap-8 md:py-6",
            !reduced && "showcaseTrackAnimate"
          )}
        >
          {doubledItems.map((item, index) => (
            <article key={`${item.id}-${index}`} className={clsx("flex-shrink-0", item.offsetClass)}>
              <Image
                src={item.image}
                alt={item.title}
                className="h-auto w-auto max-h-[220px] md:max-h-[280px] xl:max-h-[340px] shadow-[0_12px_30px_rgb(8_8_8/0.09)]"
              />
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .showcaseTrackAnimate {
          animation: showcaseMarquee 90s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        @keyframes showcaseMarquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

