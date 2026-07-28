import Link from "next/link";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";

interface PricingServiceCard {
  title: string;
  desc: string;
  prices: readonly string[];
  cta?: string;
}

interface PricingBeyondWebsiteProps {
  title: string;
  cards: readonly PricingServiceCard[];
  contactHref: string;
  headingId: string;
  variant?: "light" | "dark";
}

export function PricingBeyondWebsite({
  title,
  cards,
  contactHref,
  headingId,
  variant = "light",
}: PricingBeyondWebsiteProps) {
  const dark = variant === "dark";

  return (
    <div className="mt-12" aria-labelledby={headingId}>
      <AnimatedText as="div" delay={0.12}>
        <h3
          id={headingId}
          className={
            dark
              ? "mb-5 font-heading text-[clamp(24px,2.4vw,32px)] font-medium leading-tight tracking-[-0.012em] text-inverted"
              : "mb-5 font-heading text-[clamp(24px,2.4vw,32px)] font-medium leading-tight tracking-[-0.012em] text-primary"
          }
        >
          {title}
        </h3>
      </AnimatedText>

      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3">
        {cards.map((card, index) => (
          <AnimatedText key={card.title} as="div" delay={0.16 + index * 0.04} className="h-full">
            <article
              className={
                dark
                  ? "flex h-full min-h-[260px] flex-col rounded-[12px] border border-white/10 bg-white/[0.02] p-5"
                  : "flex h-full min-h-[260px] flex-col rounded-[12px] border border-charcoal/10 bg-white/55 p-5"
              }
            >
              <h4
                className={
                  dark
                    ? "font-heading text-[22px] font-medium leading-tight text-inverted/92"
                    : "font-heading text-[22px] font-medium leading-tight text-primary"
                }
              >
                {card.title}
              </h4>
              <p
                className={
                  dark
                    ? "mt-3 text-[15px] leading-relaxed text-inverted/62"
                    : "mt-3 text-[15px] leading-relaxed text-muted"
                }
              >
                {card.desc}
              </p>

              <div className="mt-auto pt-5">
                <div className="space-y-1.5">
                  {card.prices.map((price) => (
                    <p
                      key={price}
                      className={
                        dark
                          ? "font-heading text-[18px] font-medium leading-snug text-inverted/95"
                          : "font-heading text-[18px] font-medium leading-snug text-primary"
                      }
                    >
                      {price}
                    </p>
                  ))}
                </div>

                {card.cta ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={
                      dark
                        ? "mt-4 !border-white/20 !text-inverted hover:!border-white/45 hover:!bg-white/6"
                        : "mt-4"
                    }
                  >
                    <Link href={contactHref}>{card.cta}</Link>
                  </Button>
                ) : null}
              </div>
            </article>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
