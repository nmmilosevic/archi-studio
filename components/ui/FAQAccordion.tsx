"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  light?: boolean;
}

export function FAQAccordion({ items, className, light }: FAQAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={clsx("space-y-0", className)}
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className={clsx(
            "border-b",
            light
              ? "border-white/10"
              : "border-charcoal/10"
          )}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={clsx(
                "group flex w-full items-start justify-between py-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2",
                light
                  ? "text-inverted hover:text-clay"
                  : "text-primary hover:text-bronze"
              )}
            >
              <span className="font-body text-[15px] font-medium leading-snug pr-8">
                {item.q}
              </span>
              <ChevronDown
                className={clsx(
                  "mt-0.5 h-4 w-4 flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[state=open]:rotate-180",
                  light ? "text-clay" : "text-bronze"
                )}
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className={clsx(
              "overflow-hidden text-[14px] leading-relaxed",
              light ? "text-inverted/60" : "text-muted"
            )}
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            <div className="pb-5 pr-8">{item.a}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
