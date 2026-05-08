"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  annotationLabels?: string[];
  annotationRevealThreshold?: number;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before redesign",
  afterAlt = "After redesign",
  beforeObjectPosition = "top",
  afterObjectPosition = "top",
  annotationLabels = [],
  annotationRevealThreshold = 58,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(70);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const showAnnotations = position < annotationRevealThreshold;
  const mobileLabels = annotationLabels.slice(0, 3);
  const desktopPositions = [
    "left-[10%] top-[12%]",
    "right-[8%] top-[16%]",
    "left-[18%] bottom-[34%]",
    "right-[6%] bottom-[36%]",
    "left-[28%] bottom-[14%]",
    "right-[18%] bottom-[14%]",
  ];

  const update = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(Math.max(2, Math.min(98, ((clientX - left) / width) * 100)));
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    update(e.clientX);
    const move = (e: MouseEvent) => { if (dragging.current) update(e.clientX); };
    const up = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  }, [update]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    update(e.touches[0].clientX);
    const move = (ev: TouchEvent) => { ev.preventDefault(); update(ev.touches[0].clientX); };
    const end = () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);
  }, [update]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none cursor-ew-resize border border-white/10 bg-black/20 shadow-[0_36px_100px_rgb(0_0_0/0.28)]"
      style={{ aspectRatio: "3/2" }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      role="img"
      aria-label="Before and after redesign comparison — drag to reveal"
    >
      {/* After (base layer) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          style={{ objectPosition: afterObjectPosition }}
          sizes="(min-width: 1024px) 80vw, 100vw"
        />

        {annotationLabels.length > 0 && (
          <>
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              {annotationLabels.slice(0, 6).map((label, index) => (
                <span
                  key={label}
                  className={`absolute ${desktopPositions[index]} inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/32 px-3 py-1.5 text-[12px] font-medium leading-none text-white/90 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    showAnnotations
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-3 scale-95 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze/90" />
                  {label}
                </span>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-4 bottom-4 grid justify-items-end gap-2 md:hidden">
              {mobileLabels.map((label, index) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/38 px-3 py-1.5 text-[12px] font-medium leading-none text-white/92 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    showAnnotations
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-3 scale-95 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze/90" />
                  {label}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Before (clipped to handle) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          style={{ objectPosition: beforeObjectPosition }}
          sizes="(min-width: 1024px) 80vw, 100vw"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-px bg-white/82 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/95 shadow-[0_16px_40px_rgb(0_0_0/0.26)]">
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
            <path d="M6 6H1M1 6L4 3M1 6L4 9" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 6H19M19 6L16 3M19 6L16 9" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
