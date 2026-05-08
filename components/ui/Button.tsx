"use client";

import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "inline-flex w-full sm:w-auto min-h-11 items-center justify-center rounded-full font-body font-medium tracking-[0.01em] transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        {
          "bg-charcoal text-inverted hover:bg-[#1a1a1a] hover:-translate-y-0.5": variant === "primary",
          "bg-bronze text-inverted hover:bg-[#7f664f] hover:-translate-y-0.5": variant === "secondary",
          "border border-charcoal/18 text-primary hover:border-charcoal/40 hover:bg-charcoal/4 bg-transparent":
            variant === "outline",
          "text-primary hover:text-bronze underline-offset-4 hover:underline bg-transparent":
            variant === "ghost",
        },
        {
          "text-[14px] px-5 py-2.5 min-h-11": size === "sm",
          "text-[15px] px-7 py-3.5 min-h-12": size === "md",
          "text-[16px] px-8 py-4 min-h-13 md:px-9": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
