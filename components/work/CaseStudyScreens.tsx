"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { X } from "lucide-react";
import { assetPath } from "@/lib/paths";
import {
  workScreenFrameLayoutClass,
  workScreenIsWideMobileComposition,
  workScreenThumbObjectClass,
  workScreenThumbnailAspectClass,
} from "@/lib/workScreenAspect";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export type CaseStudyScreen = {
  label: string;
  image: string;
};

type Props = {
  title: string;
  heading: string;
  headingId: string;
  screens: ReadonlyArray<CaseStudyScreen>;
};

export function CaseStudyScreens({ title, heading, headingId, screens }: Props) {
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
    <section className="bg-offwhite section-space" aria-labelledby={headingId}>
      <Container>
        <div className="mb-12 max-w-[720px] md:mb-16">
          <AnimatedTitle text={heading} as="h2" id={headingId} className="text-display text-primary" />
        </div>
      </Container>

      {s1 && s2 && (
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 lg:gap-y-16">
            <div className="lg:col-span-7">
              <button
                type="button"
                className="group w-full cursor-zoom-in text-left"
                onClick={(e) => openAt(0, e)}
                aria-haspopup="dialog"
                aria-expanded={openIndex === 0}
                aria-controls={openIndex === 0 ? labelId : undefined}
              >
                <div
                  className={clsx(
                    "relative w-full overflow-hidden bg-stone shadow-[0_20px_48px_rgb(16_12_9/0.08)] transition-shadow duration-300 group-hover:shadow-[0_28px_56px_rgb(16_12_9/0.12)]",
                    workScreenFrameLayoutClass(s1.image),
                    workScreenThumbnailAspectClass(s1.image)
                  )}
                >
                  <Image
                    src={assetPath(s1.image)}
                    alt={`${title} ${s1.label}`}
                    fill
                    quality={92}
                    className={clsx(
                      "pointer-events-none transition-transform duration-300 ease-out group-hover:scale-[1.012]",
                      workScreenThumbObjectClass(s1.image)
                    )}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                </div>
                <p className="mt-5 text-[17px] text-primary">{s1.label}</p>
              </button>
            </div>

            <div
              className={clsx(
                "flex flex-col justify-end",
                workScreenIsWideMobileComposition(s2.image)
                  ? "lg:col-span-5 lg:col-start-8"
                  : "lg:col-span-4 lg:col-start-9"
              )}
            >
              <button
                type="button"
                className="group w-full cursor-zoom-in text-left"
                onClick={(e) => openAt(1, e)}
                aria-haspopup="dialog"
                aria-expanded={openIndex === 1}
                aria-controls={openIndex === 1 ? labelId : undefined}
              >
                {workScreenIsWideMobileComposition(s2.image) ? (
                  <div
                    className={clsx(
                      "relative w-full overflow-hidden bg-stone shadow-[0_20px_48px_rgb(16_12_9/0.1)] transition-shadow duration-300 group-hover:shadow-[0_28px_56px_rgb(16_12_9/0.14)]",
                      workScreenFrameLayoutClass(s2.image),
                      workScreenThumbnailAspectClass(s2.image)
                    )}
                  >
                    <Image
                      src={assetPath(s2.image)}
                      alt={`${title} ${s2.label}`}
                      fill
                      quality={92}
                      className={clsx(
                        "pointer-events-none transition-transform duration-300 ease-out group-hover:scale-[1.012]",
                        workScreenThumbObjectClass(s2.image)
                      )}
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="relative mx-auto flex max-w-[320px] justify-center gap-3 sm:max-w-[360px] lg:mx-0 lg:max-w-none">
                    <div className="relative z-10 w-[46%] max-w-[150px] -rotate-[2deg] overflow-hidden shadow-[0_20px_40px_rgb(0_0_0/0.18)] sm:max-w-[170px]">
                      <div className="relative aspect-[853/1844] w-full sm:aspect-[2/3]">
                        <Image
                          src={assetPath(s2.image)}
                          alt=""
                          fill
                          quality={92}
                          className="object-cover object-top"
                          sizes="(min-width: 1024px) 220px, (min-width: 640px) 28vw, 42vw"
                        />
                      </div>
                    </div>
                    <div className="relative z-0 w-[46%] max-w-[150px] translate-y-6 rotate-[3deg] overflow-hidden shadow-[0_24px_48px_rgb(0_0_0/0.22)] sm:max-w-[170px] lg:translate-y-10">
                      <div className="relative aspect-[853/1844] w-full sm:aspect-[2/3]">
                        <Image
                          src={assetPath(s2.image)}
                          alt={`${title} ${s2.label}`}
                          fill
                          quality={92}
                          className="object-cover object-top"
                          sizes="(min-width: 1024px) 220px, (min-width: 640px) 28vw, 42vw"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <p className="mt-8 text-[17px] text-primary lg:mt-10">{s2.label}</p>
              </button>
            </div>
          </div>
        </Container>
      )}

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
