"use client";

import { Layers2, Palette, Send, Smartphone } from "lucide-react";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const ICONS = [Layers2, Smartphone, Palette, Send] as const;

export type WhatChangedItem = {
  title?: string;
  body: string;
  contrast?: { before: string; after: string };
};

type Props = {
  headingId: string;
  sectionHeading: string;
  /** Four titles, fixed order: portfolio, mobile, positioning, inquiry */
  themes: readonly [string, string, string, string];
  items: readonly [WhatChangedItem, WhatChangedItem, WhatChangedItem, WhatChangedItem];
};

export function CaseStudyWhatChanged({ headingId, sectionHeading, themes, items }: Props) {
  const cells = items.map((item, i) => ({
    title: item.title ?? themes[i],
    ...item,
    Icon: ICONS[i] ?? Layers2,
  }));

  return (
    <section
      className="bg-stone-deep pb-[clamp(64px,10vw,112px)] pt-[clamp(64px,10vw,112px)]"
      aria-labelledby={headingId}
    >
      <Container>
        <div className="mb-16 max-w-[28ch] md:mb-20 lg:mb-24">
          <AnimatedTitle
            text={sectionHeading.replace(/\.$/, "")}
            as="h2"
            id={headingId}
            className="text-[clamp(30px,3.6vw,44px)] font-medium leading-[1.06] tracking-[-0.035em] text-primary"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-16 sm:grid-cols-2 lg:gap-x-20 lg:gap-y-[4.5rem]">
          {cells.map(({ title, body, contrast, Icon }) => (
            <article key={title} className="group min-w-0">
              <div className="flex items-center gap-5">
                <Icon
                  className="h-8 w-8 shrink-0 text-primary/[0.28] transition-colors duration-300 group-hover:text-bronze/55"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <h3 className="font-heading text-[clamp(18px,2vw,22px)] font-medium leading-[1.15] tracking-[-0.02em] text-primary">
                  {title}
                </h3>
              </div>
              <p className="mt-4 pl-[52px] text-[15px] leading-[1.68] text-primary/[0.72]">{body}</p>
              {contrast ? (
                <p className="mt-5 max-w-[52ch] pl-[52px] text-[11px] font-medium uppercase tracking-[0.16em] text-primary/38">
                  <span className="text-primary/48">{contrast.before}</span>
                  <span className="mx-2 inline-block text-bronze/40" aria-hidden="true">
                    —
                  </span>
                  <span className="text-primary/52">{contrast.after}</span>
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
