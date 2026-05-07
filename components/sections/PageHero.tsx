import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { clsx } from "clsx";

interface PageHeroProps {
  label?: string;
  heading: string;
  subtext?: string;
  variant?: "light" | "dark";
  children?: React.ReactNode;
}

export function PageHero({
  label,
  heading,
  subtext,
  variant = "light",
  children,
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={clsx(
        "pt-36 md:pt-44 pb-16 md:pb-20",
        isDark ? "bg-charcoal" : "bg-stone"
      )}
    >
      <div className="container-site">
        <div className="max-w-4xl">
          {label && (
            <AnimatedText
              as="p"
              className={clsx(
                "editorial-note mb-7",
                isDark ? "text-inverted/30" : "text-muted/50"
              )}
              delay={0.04}
            >
              {label}
            </AnimatedText>
          )}
          <AnimatedTitle
            text={heading}
            as="h1"
            className={clsx(
              "text-section mb-6 text-balance",
              isDark ? "text-inverted" : "text-primary"
            )}
          />

          {subtext && (
            <AnimatedText
              className={clsx(
                "font-body text-[16px] md:text-[18px] leading-relaxed max-w-2xl",
                isDark ? "text-inverted/60" : "text-muted"
              )}
              delay={0.2}
            >
              {subtext}
            </AnimatedText>
          )}

          {children && (
            <div className="mt-8">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
