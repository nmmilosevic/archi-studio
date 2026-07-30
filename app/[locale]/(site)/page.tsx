import { setRequestLocale } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedUI } from "@/components/motion/AnimatedUI";
import { RevealMedia } from "@/components/motion/RevealMedia";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";
import { getContent } from "@/lib/getContent";
import { getPageCopy } from "@/lib/page-copy";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { HomeDiagnosisSection } from "@/components/sections/HomeDiagnosisSection";
import { SelectedWorkShowcase } from "@/components/sections/SelectedWorkShowcase";
import { PricingBeyondWebsite } from "@/components/sections/PricingBeyondWebsite";
import { CenteredHashAnchor } from "@/components/navigation/CenteredHashAnchor";

interface Props {
  params: Promise<{ locale: string }>;
}

const HOME_TITLE: Record<string, string> = {
  en: "Architecture Studio Website Design | Reframe Studio",
  es: "Diseño web para estudios de arquitectura | Reframe Studio",
  fr: "Sites web pour studios d'architecture | Reframe Studio",
};

const HOME_KEYWORDS: Record<string, string[]> = {
  en: [
    "architecture web design studio",
    "architecture website design",
    "architecture studio website",
    "interior design website",
    "landscape architecture website",
    "architecture portfolio website",
    "architecture website redesign",
  ],
  es: [
    "diseño web arquitectura",
    "web para estudio de arquitectura",
    "web interiorismo",
    "web paisajismo",
    "portfolio arquitectura",
    "rediseño web arquitectura",
  ],
  fr: [
    "site web architecture",
    "site studio architecture",
    "site design intérieur",
    "site architecture paysagère",
    "portfolio architecture",
    "refonte site architecture",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = HOME_TITLE[locale] ?? HOME_TITLE.en;
  const keywords = HOME_KEYWORDS[locale] ?? HOME_KEYWORDS.en;
  const description = getPageCopy(locale).metadata.homeDescription;
  return buildPageMetadata({
    locale,
    path: "",
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    ogImage: "/images/hero.png",
    twitterImage: "/images/hero.png",
    keywords,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const hero = content.hero;
  const home = content.home;
  const offer = home.simpleMarketingOffer;

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
            <AnimatedUI delay={0.28}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={`/${locale}/work`}>{hero.ctaPrimary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/contact`}>{hero.ctaSecondary}</Link>
                </Button>
              </div>
            </AnimatedUI>
          </div>

          <RevealMedia
            className="hidden min-w-0 md:block"
            delay={0.18}
          >
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
          </RevealMedia>
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
          <div className="mb-[clamp(72px,8vw,112px)] pt-[clamp(48px,5vw,72px)]">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:items-end lg:gap-[clamp(72px,8vw,144px)]">
              <div>
                <AnimatedTitle
                  text={home.beforeTitle}
                  as="h2"
                  id="preview-heading"
                  className="max-w-[900px] font-heading text-[clamp(40px,5.6vw,80px)] font-medium leading-[0.96] tracking-[-0.025em] text-inverted"
                />
              </div>

              <AnimatedUI delay={0.14}>
                <ol className="flex flex-col gap-8 md:gap-10 lg:gap-[clamp(36px,3.8vw,56px)]">
                  {home.beforeProblems.map((problem, index) => (
                    <li
                      key={problem}
                      className={`grid grid-cols-[3.25rem_1fr] items-start gap-4 md:grid-cols-[4.25rem_1fr] md:gap-5 ${
                        index === 1
                          ? "lg:ml-[clamp(28px,3.5vw,56px)]"
                          : index === 2
                            ? "lg:ml-[clamp(8px,1.25vw,20px)]"
                            : ""
                      }`}
                    >
                      <span
                        className="font-heading text-[30px] font-medium leading-[0.9] tracking-[-0.035em] text-bronze/90 md:text-[36px]"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="max-w-[30ch] font-body text-[17px] leading-[1.45] text-inverted/78 md:text-[19px]">
                        {problem}
                      </span>
                    </li>
                  ))}
                </ol>
              </AnimatedUI>
            </div>
          </div>

          <BeforeAfterSlider
            beforeSrc={assetPath("/images/avant1.png")}
            afterSrc={assetPath("/images/apres.png")}
            beforeAlt={home.beforeAfterBeforeAlt}
            afterAlt={home.beforeAfterAfterAlt}
            annotationLabels={[...home.beforeAfterLabels]}
            annotationRevealThreshold={58}
          />
        </Container>
      </section>

      <section
        className="border-t border-charcoal/10 bg-stone py-[clamp(86px,11vw,168px)] text-primary"
        aria-labelledby="pricing-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-14">
            <CenteredHashAnchor id="pricing" className="lg:pr-2">
              <AnimatedTitle
                text={home.offerTitle}
                as="h2"
                id="pricing-heading"
                className="text-section mb-6 max-w-[620px] text-primary"
              />
              <p className="font-heading text-[clamp(36px,6vw,72px)] font-medium leading-[0.95] tracking-[-0.03em] text-primary">
                {offer.price}
              </p>
              <p className="mt-2 font-body text-[18px] leading-relaxed text-muted">{home.offerPaymentLabel}</p>
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-primary/78">{home.offerPriceDetail}</p>
              <Button asChild size="lg" className="mt-7 w-full sm:w-auto">
                <Link href={`/${locale}/contact`}>
                  {content.nav.cta} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 pt-1 sm:grid-cols-2">
                {offer.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-bronze" aria-hidden="true" />
                    <span className="text-[16px] leading-relaxed text-primary/85">{item}</span>
                  </div>
                ))}
              </div>
            </CenteredHashAnchor>

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
          <PricingBeyondWebsite
            title={offer.addonsTitle}
            cards={offer.addonCards}
            contactHref={`/${locale}/contact`}
            headingId="design-beyond-heading"
          />
        </Container>
      </section>

      <HomeDiagnosisSection
        locale={locale}
        title={home.reviewTitle}
        body={home.reviewBody}
        cta={content.audit.form.cta}
        floatCards={home.diagnosisFloatCards}
        imageAlt={home.diagnosisImageAlt}
        variant="charcoal"
      />
    </>
  );
}
