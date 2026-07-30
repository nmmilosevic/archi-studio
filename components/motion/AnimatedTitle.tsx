"use client";

import { Fragment, memo, useMemo } from "react";
import { m } from "framer-motion";
import {
  motionViewport,
  titleContainer,
  titleWord,
} from "@/lib/motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  delay?: number;
  id?: string;
}

export const AnimatedTitle = memo(function AnimatedTitle({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  id,
}: AnimatedTitleProps) {
  const words = useMemo(() => text.trim().split(/\s+/), [text]);
  const isPageTitle = Tag === "h1";

  return (
    <m.div
      variants={titleContainer}
      custom={delay}
      initial="hidden"
      animate={isPageTitle ? "show" : undefined}
      whileInView={isPageTitle ? undefined : "show"}
      viewport={isPageTitle ? undefined : motionViewport}
    >
      <Tag className={className} id={id} aria-label={text}>
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <span
              className="-mb-[0.08em] inline-block overflow-hidden pb-[0.08em] align-bottom"
              aria-hidden="true"
            >
              <m.span variants={titleWord} className="inline-block">
                {word}
              </m.span>
            </span>
            {index < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </Tag>
    </m.div>
  );
});
