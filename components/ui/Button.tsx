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
        "inline-flex min-h-11 items-center justify-center font-body font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        {
          "bg-charcoal text-inverted hover:bg-primary/85": variant === "primary",
          "bg-bronze text-inverted hover:bg-primary": variant === "secondary",
          "border border-charcoal/20 text-primary hover:border-primary hover:bg-primary hover:text-inverted bg-transparent":
            variant === "outline",
          "text-primary hover:text-bronze underline-offset-4 hover:underline bg-transparent":
            variant === "ghost",
        },
        {
          "text-[11px] px-4 py-2.5 tracking-[0.12em] uppercase": size === "sm",
          "text-[12px] px-6 py-3.5 tracking-[0.12em] uppercase": size === "md",
          "text-[12px] px-8 py-4 tracking-[0.12em] uppercase": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
