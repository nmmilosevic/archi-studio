"use client";

import { useMemo } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { assetPath } from "@/lib/paths";

interface ShowcaseItem {
  id: string;
  title: string;
  image: string;
  sizeClass: string;
  offsetClass: string;
  position?: string;
}

const items: ShowcaseItem[] = [
  {
    id: "home-system",
    title: "Homepage system",
    image: "/images/hero.png",
    sizeClass: "w-[320px] md:w-[420px] xl:w-[520px] aspect-[16/10]",
    offsetClass: "md:mt-0",
  },
  {
    id: "project-mobile",
    title: "Mobile project flow",
    image: "/images/heromock.png",
    sizeClass: "w-[190px] md:w-[220px] xl:w-[250px] aspect-[9/16]",
    offsetClass: "md:mt-10",
    position: "top",
  },
  {
    id: "portfolio-direction",
    title: "Portfolio direction",
    image: "/images/redesign-preview.png",
    sizeClass: "w-[300px] md:w-[380px] xl:w-[470px] aspect-[16/10]",
    offsetClass: "md:mt-4",
  },
  {
    id: "before-after-detail",
    title: "Editorial detail",
    image: "/images/after.png",
    sizeClass: "w-[280px] md:w-[340px] xl:w-[420px] aspect-[4/3]",
    offsetClass: "md:mt-14",
    position: "top",
  },
  {
    id: "dark-light-concept",
    title: "Dark-light concept",
    image: "/images/before.png",
    sizeClass: "w-[260px] md:w-[320px] xl:w-[390px] aspect-[5/4]",
    offsetClass: "md:mt-2",
    position: "top",
  },
  {
    id: "pricing-composition",
    title: "Presentation composition",
    image: "/images/pricing-img.png",
    sizeClass: "w-[300px] md:w-[380px] xl:w-[460px] aspect-[16/10]",
    offsetClass: "md:mt-12",
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
              <div
                className={clsx(
                  "relative overflow-hidden bg-stone shadow-[0_12px_30px_rgb(8_8_8/0.09)]",
                  item.sizeClass
                )}
              >
                <Image
                  src={assetPath(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: item.position ?? "center" }}
                  sizes="(min-width: 1440px) 520px, (min-width: 1024px) 36vw, (min-width: 768px) 50vw, 80vw"
                />
              </div>
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

