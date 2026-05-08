import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Container } from "@/components/ui/Container";

export type DiagnosisPoint = { label: string; detail: string };

type Props = {
  headingId: string;
  heading: string;
  sub: string;
  points: readonly DiagnosisPoint[];
};

export function CaseStudyDiagnosis({ headingId, heading, sub, points }: Props) {
  return (
    <section className="bg-stone section-space" aria-labelledby={headingId}>
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:pt-1">
            <AnimatedTitle text={heading.replace(/\.$/, "")} as="h2" id={headingId} className="text-display text-primary" />
            <p className="mt-6 max-w-[340px] text-[15px] leading-relaxed text-muted">{sub}</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-0 divide-y divide-charcoal/[0.08]">
              {points.map((p) => (
                <li key={p.label} className="flex flex-col gap-3 py-8 first:pt-0 md:flex-row md:gap-10 md:py-10">
                  <span className="shrink-0 font-heading text-[13px] font-medium uppercase tracking-[0.14em] text-bronze md:w-[200px]">
                    {p.label}
                  </span>
                  <p className="max-w-[540px] text-[17px] leading-[1.65] text-primary/90">{p.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
