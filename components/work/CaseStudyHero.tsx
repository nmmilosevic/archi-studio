import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/paths";
import { caseStudyHeroAspectClass } from "@/lib/workScreenAspect";

type Props = {
  locale: string;
  title: string;
  location: string;
  summary: string;
  heroDesktop: string;
  desktopImageAlt: string;
};

export function CaseStudyHero({
  locale,
  title,
  location,
  summary,
  heroDesktop,
  desktopImageAlt,
}: Props) {
  return (
    <section className="overflow-hidden bg-charcoal pb-0 pt-32 text-inverted md:pt-44">
      <Container>
        <Link
          href={`/${locale}/work`}
          className="mb-10 inline-flex items-center gap-2 text-[15px] text-inverted/45 transition-colors hover:text-bronze md:mb-12"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Work
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-12">
          <div>
            <AnimatedTitle text={title} as="h1" className="text-page-title max-w-[18ch] text-inverted" />
            <p className="mt-5 text-[15px] text-inverted/48">{location}</p>
          </div>
          <AnimatedText className="text-support max-w-[720px] text-inverted/62 lg:ml-auto" delay={0.08}>
            {summary}
          </AnimatedText>
        </div>
      </Container>

      <div className="relative mt-8 w-full min-w-0 md:mt-10">
        <div
          className={clsx(
            "relative w-full overflow-hidden",
            caseStudyHeroAspectClass(heroDesktop)
          )}
        >
          <Image
            src={assetPath(heroDesktop)}
            alt={desktopImageAlt}
            fill
            priority
            fetchPriority="high"
            quality={92}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
