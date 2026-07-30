import Link from "next/link";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
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
      <AnimatedTitle
        text={title}
        as="h3"
        id={headingId}
        delay={0.12}
        className={
          dark
            ? "mb-5 font-heading text-[clamp(24px,2.4vw,32px)] font-medium leading-tight tracking-[-0.012em] text-inverted"
            : "mb-5 font-heading text-[clamp(24px,2.4vw,32px)] font-medium leading-tight tracking-[-0.012em] text-primary"
        }
      />

      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3">
        {cards.map((card, index) => (
          <AnimatedUI key={card.title} delay={0.16 + index * 0.04} className="h-full">
            <article
              className={
                dark
                  ? "flex h-full min-h-[260px] flex-col rounded-[12px] border border-white/10 bg-white/[0.02] p-5"
                  : "flex h-full min-h-[260px] flex-col rounded-[12px] border border-charcoal/10 bg-white/55 p-5"
              }
            >
              <AnimatedTitle
                text={card.title}
                as="h4"
                delay={0.24 + index * 0.04}
                className={
                  dark
                    ? "font-heading text-[22px] font-medium leading-tight text-inverted/92"
                    : "font-heading text-[22px] font-medium leading-tight text-primary"
                }
              />
              <AnimatedText
                delay={0.34 + index * 0.04}
                duration={0.72}
                className={
                  dark
                    ? "mt-3 text-[15px] leading-relaxed text-inverted/62"
                    : "mt-3 text-[15px] leading-relaxed text-muted"
                }
              >
                {card.desc}
              </AnimatedText>

              <div className="mt-auto pt-5">
                <div className="space-y-1.5">
                  {card.prices.map((price, priceIndex) => (
                    <AnimatedText
                      key={price}
                      delay={0.43 + index * 0.04 + priceIndex * 0.05}
                      duration={0.64}
                      className={
                        dark
                          ? "font-heading text-[18px] font-medium leading-snug text-inverted/95"
                          : "font-heading text-[18px] font-medium leading-snug text-primary"
                      }
                    >
                      {price}
                    </AnimatedText>
                  ))}
                </div>

                {card.cta ? (
                  <AnimatedUI delay={0.52 + index * 0.04}>
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
                  </AnimatedUI>
                ) : null}
              </div>
            </article>
          </AnimatedUI>
        ))}
      </div>
    </div>
  );
}
