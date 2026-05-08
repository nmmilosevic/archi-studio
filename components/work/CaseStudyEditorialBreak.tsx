import { Container } from "@/components/ui/Container";

type Props = {
  quote: string;
};

export function CaseStudyEditorialBreak({ quote }: Props) {
  return (
    <section className="bg-charcoal py-[clamp(72px,10vw,120px)] text-inverted" aria-hidden={false}>
      <Container>
        <blockquote className="mx-auto max-w-[36ch] text-center">
          <p className="font-heading text-[clamp(22px,3.2vw,34px)] font-medium leading-[1.18] tracking-[-0.02em] text-inverted/92">
            {quote}
          </p>
        </blockquote>
      </Container>
    </section>
  );
}
