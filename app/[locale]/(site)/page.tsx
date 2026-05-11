import { getTranslations, setRequestLocale } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { HomeDiagnosisSection } from "@/components/sections/HomeDiagnosisSection";
import { SelectedWorkShowcase } from "@/components/sections/SelectedWorkShowcase";

interface Props {
  params: Promise<{ locale: string }>;
}

const HOME_TITLE: Record<string, string> = {
  en: "Architecture & interior design studio websites — Costa del Sol",
  es: "Webs para estudios de arquitectura e interiorismo — Costa del Sol",
  fr: "Sites web pour studios d’architecture et d’intérieur — Costa del Sol",
};

const HOME_KEYWORDS: Record<string, string[]> = {
  en: [
    "architecture website design",
    "interior design studio website",
    "website redesign",
    "Marbella",
    "Estepona",
    "Costa del Sol",
    "portfolio website",
  ],
  es: [
    "diseño web arquitectura",
    "web estudio interiorismo",
    "rediseño web",
    "Marbella",
    "Costa del Sol",
    "portfolio arquitectura",
  ],
  fr: [
    "site web architecture",
    "studio design intérieur",
    "refonte site web",
    "Marbella",
    "Costa del Sol",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const title = HOME_TITLE[locale] ?? HOME_TITLE.en;
  const keywords = HOME_KEYWORDS[locale] ?? HOME_KEYWORDS.en;
  return buildPageMetadata({
    locale,
    path: "",
    title,
    description: t("sub"),
    keywords,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const hero = content.hero;
  const home = content.home;
  const featured = content.pricing.oneTime.find((p) => p.featured)!;
  const [hostingCare, studioCare] = content.pricing.recurring;

  return (
    <>
      <section id="top" className="relative min-h-dvh overflow-hidden bg-stone pt-20 md:pt-28">
        <div className="absolute inset-y-0 right-0 hidden w-[46vw] md:block" aria-hidden="true">
          <Image
            src={assetPath("/images/hero.png")}
            alt=""
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="46vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone via-stone/30 to-transparent" />
        </div>
        <Container className="relative z-10 grid min-h-[calc(100dvh-5rem)] grid-cols-1 items-center gap-12 pb-8 md:min-h-[calc(100dvh-7rem)] md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:pb-16">
          <div className="min-w-0">
            <AnimatedTitle
              text={hero.headline}
              as="h1"
              className="text-hero mb-5 max-w-none text-primary text-balance md:mb-6"
            />
            <AnimatedText className="text-support mb-7 max-w-[590px] text-muted md:mb-8" delay={0.18}>
              {hero.sub}
            </AnimatedText>
            <AnimatedText as="div" delay={0.28}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={`/${locale}/work`}>{hero.ctaPrimary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/contact`}>{hero.ctaSecondary}</Link>
                </Button>
              </div>
            </AnimatedText>
          </div>

          <AnimatedText as="div" delay={0.22} className="hidden min-w-0 md:block">
            <div className="relative ml-auto w-full max-w-[500px] xl:max-w-[540px]">
              <div className="relative h-[min(48dvh,440px)] overflow-hidden shadow-[0_24px_64px_rgb(10_10_10/0.10)]">
                <Image
                  src={assetPath("/images/heromock.png")}
                  alt={home.heroMockAlt}
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover object-top"
                  sizes="(min-width: 1280px) 540px, 500px"
                />
                <div className="absolute inset-x-0 bottom-0 h-px bg-bronze/40" aria-hidden="true" />
              </div>
            </div>
          </AnimatedText>
        </Container>
      </section>

      <section className="bg-offwhite section-space" aria-labelledby="work-preview-heading">
        <Container>
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text={home.workTitle}
              as="h2"
              id="work-preview-heading"
              className="text-section max-w-[860px] text-primary"
            />
            <AnimatedText className="text-support max-w-[560px] text-muted lg:ml-auto" delay={0.12}>
              {home.workBody}
            </AnimatedText>
          </div>

          <SelectedWorkShowcase styleLabels={home.showcaseLabels} />
        </Container>
      </section>

      <section
        id="previews"
        className="bg-charcoal section-space max-md:!pt-[100px] max-md:!pb-[100px] text-inverted"
        aria-labelledby="preview-heading"
      >
        <Container>
          <div className="mb-[80px] grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle
              text={home.beforeTitle}
              as="h2"
              id="preview-heading"
              className="text-display max-w-[820px] text-inverted"
            />
            <AnimatedText as="div" className="max-w-[560px] lg:ml-auto" delay={0.12}>
              <p className="text-support mb-8 font-body text-inverted/62">{home.beforeBody}</p>
              <ul className="max-w-[500px] space-y-4.5">
                {home.beforeProblems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span className="mt-[0.9rem] h-px w-3 bg-bronze/48 flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-[16px] leading-[1.65] text-inverted/68">{problem}</span>
                  </li>
                ))}
              </ul>
            </AnimatedText>
          </div>

          <AnimatedText as="div" delay={0.08}>
            <BeforeAfterSlider
              beforeSrc={assetPath("/images/avant1.png")}
              afterSrc={assetPath("/images/apres.png")}
              beforeAlt={home.beforeAfterBeforeAlt}
              afterAlt={home.beforeAfterAfterAlt}
              annotationLabels={[...home.beforeAfterLabels]}
              annotationRevealThreshold={58}
            />
          </AnimatedText>
        </Container>
      </section>

      <section
        id="pricing"
        className="border-t border-charcoal/10 bg-stone py-[clamp(86px,11vw,168px)] text-primary"
        aria-labelledby="offer-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="lg:pr-2">
              <AnimatedTitle
                text={home.offerTitle}
                as="h2"
                id="offer-heading"
                className="text-section mb-6 max-w-[620px] text-primary"
              />
              <p className="font-heading text-[clamp(36px,6vw,72px)] font-medium leading-[0.95] tracking-[-0.03em] text-primary">
                {featured.price}
              </p>
              <p className="mt-2 font-body text-[18px] leading-relaxed text-muted">{home.offerPaymentLabel}</p>
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-primary/78">{home.offerPriceDetail}</p>
              <Button asChild size="lg" className="mt-7 w-full sm:w-auto">
                <Link href={`/${locale}/contact`}>
                  {content.nav.cta} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 pt-1 sm:grid-cols-2">
                {featured.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-bronze" aria-hidden="true" />
                    <span className="text-[16px] leading-relaxed text-primary/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-2">
              <div className="relative aspect-[1/1] w-full">
                <Image
                  src={assetPath("/images/mood.png")}
                  alt={home.moodImageAlt}
                  fill
                  loading="lazy"
                  className="object-contain object-center"
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3.5 md:grid-cols-2">
            <AnimatedText as="div" delay={0.16}>
              <div className="rounded-[12px] border border-charcoal/10 bg-white/55 p-5">
                <p className="text-[17px] font-medium text-primary">{hostingCare.name}</p>
                <p className="mt-2 font-heading text-[32px] font-medium leading-none text-primary">{hostingCare.price}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{hostingCare.desc}</p>
              </div>
            </AnimatedText>
            <AnimatedText as="div" delay={0.2}>
              <div className="rounded-[12px] border border-charcoal/10 bg-white/55 p-5">
                <p className="text-[17px] font-medium text-primary">{studioCare.name}</p>
                <p className="mt-2 font-heading text-[32px] font-medium leading-none text-primary">{studioCare.price}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{studioCare.desc}</p>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <HomeDiagnosisSection
        locale={locale}
        title={home.reviewTitle}
        body={home.reviewBody}
        cta={content.audit.form.cta}
        points={home.diagnosisPoints}
        floatCards={home.diagnosisFloatCards}
        imageAlt={home.diagnosisImageAlt}
        variant="charcoal"
      />
    </>
  );
}
