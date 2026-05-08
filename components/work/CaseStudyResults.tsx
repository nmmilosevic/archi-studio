import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Container } from "@/components/ui/Container";

type Props = {
  headingId: string;
  heading: string;
  outcomes: readonly string[];
};

export function CaseStudyResults({ headingId, heading, outcomes }: Props) {
  return (
    <section className="border-t border-charcoal/[0.06] bg-offwhite pb-[clamp(72px,10vw,120px)] pt-[clamp(64px,9vw,100px)]" aria-labelledby={headingId}>
      <Container>
        <AnimatedTitle
          text={heading.replace(/\.$/, "")}
          as="h2"
          id={headingId}
          className="text-display mb-16 max-w-[14ch] text-primary md:mb-20"
        />
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:gap-x-16">
          {outcomes.map((line) => (
            <p
              key={line}
              className="border-t border-bronze/35 pt-6 font-heading text-[clamp(18px,2.1vw,22px)] font-medium leading-snug tracking-[-0.015em] text-primary md:pt-7"
            >
              {line}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
