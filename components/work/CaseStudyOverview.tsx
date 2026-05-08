import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Container } from "@/components/ui/Container";

type Props = {
  headingId: string;
  labels: { challenge: string; approach: string; outcome: string };
  challenge: string;
  approach: string;
  outcome: string;
};

const headingClass =
  "font-heading text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.08] tracking-[-0.02em] text-primary";

export function CaseStudyOverview({
  headingId,
  labels,
  challenge,
  approach,
  outcome,
}: Props) {
  const blocks = [
    { k: "challenge", label: labels.challenge.replace(/\.$/, ""), body: challenge, level: "h2" as const },
    { k: "approach", label: labels.approach.replace(/\.$/, ""), body: approach, level: "h3" as const },
    { k: "outcome", label: labels.outcome.replace(/\.$/, ""), body: outcome, level: "h3" as const },
  ];

  return (
    <section
      className="border-t border-charcoal/[0.06] bg-offwhite pb-[clamp(64px,9vw,112px)] pt-[clamp(64px,9vw,112px)]"
      aria-labelledby={headingId}
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-x-10 md:gap-y-16 lg:gap-x-14">
          {blocks.map((b) => (
            <div key={b.k} className="max-w-[520px] md:max-w-none">
              {b.level === "h2" ? (
                <AnimatedTitle
                  text={b.label}
                  as="h2"
                  id={headingId}
                  className={headingClass}
                />
              ) : (
                <h3 className={headingClass}>{b.label}</h3>
              )}
              <p className="mt-6 text-[17px] leading-[1.65] text-muted md:mt-8">{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
