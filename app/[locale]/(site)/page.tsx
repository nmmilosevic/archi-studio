import { getTranslations, setRequestLocale } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WorkCard } from "@/components/cards/WorkCard";
import { generateMetadata as genMeta, localBusinessSchema } from "@/lib/seo";
import { assetPath } from "@/lib/paths";
import { getContent } from "@/lib/getContent";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { HomeDiagnosisSection } from "@/components/sections/HomeDiagnosisSection";

interface Props {
  params: Promise<{ locale: string }>;
}

const copy = {
  en: {
    headline: "We structure how your studio is perceived online.",
    sub: "A clear digital presence for architecture and interior studios. From project presentation to contact flow, every page is built to support trust.",
    primary: "Start your website",
    secondary: "View work",
    workTitle: "Selected work systems for architecture studios.",
    workBody: "A few focused examples of clearer project presentation, stronger mobile rhythm, and a more confident first impression.",
    beforeTitle: "Your website should make your work feel as considered as the projects themselves.",
    beforeProblems: [
      "The work is not presented with enough clarity",
      "The mobile experience feels weak",
      "The contact path is not obvious enough",
    ],
    beforeBody: "Many studios have beautiful work, but their website makes it harder to trust, understand, or contact them.",
    reviewTitle: "Small website issues can make strong work feel average.",
    reviewBody: "We look at your positioning, project presentation, mobile experience, navigation, and contact flow, then show you what should change first.",
    offerTitle: "Simple pricing. Clear ownership.",
    offerIntro: "One fixed fee for a complete studio website, from strategy and design to launch.",
  },
  es: {
    headline: "Webs que reflejan la calidad del trabajo.",
    sub: "Diseñamos y construimos webs refinadas para estudios de arquitectura e interiorismo que quieren una presencia digital más sólida.",
    primary: "Empezar mi web",
    secondary: "Ver trabajos",
    heroProof: "Diseño a medida. Responsive. Precio claro.",
    workTitle: "Webs para estudios con trabajo que merece mostrarse bien.",
    workBody: "Ejemplos enfocados de portfolios más claros, mejor experiencia móvil y una primera impresión más sólida.",
    beforeTitle: "Tu web debería sentirse tan cuidada como tus proyectos.",
    beforeProblems: [
      "Las plantillas genéricas debilitan el posicionamiento",
      "Una mala experiencia móvil reduce la confianza",
      "Las webs difíciles de actualizar frenan al estudio",
    ],
    beforeBody: "Tus proyectos son detallados, cuidados y de alto nivel. Tu web debería sentirse igual.",
    reviewTitle: "¿No sabes qué le falta a tu web?",
    reviewBody: "Envíanos tu web actual y revisaremos dónde pierde claridad, confianza o clientes potenciales.",
    redesignTitle: "Diseño y desarrollo en un único sistema web claro.",
    redesignBody: "Un sistema claro con las páginas, estructura y presentación que tu estudio necesita.",
    redesignCta: "Empezar mi web",
    offerTitle: "Precios simples. Propiedad clara.",
    offerIntro: "Un precio claro para la web, con hosting y actualizaciones opcionales.",
  },
  fr: {
    headline: "Des sites qui reflètent la qualité du travail.",
    sub: "Nous concevons et construisons des sites raffinés pour les studios d’architecture et d’intérieur qui veulent une présence digitale plus solide.",
    primary: "Commencer le site",
    secondary: "Voir le travail",
    heroProof: "Design sur mesure. Responsive. Prix clair.",
    workTitle: "Des sites pour des studios dont le travail mérite d’être bien présenté.",
    workBody: "Quelques exemples ciblés de portfolios plus clairs, d’une meilleure expérience mobile et d’une première impression plus forte.",
    beforeTitle: "Votre site devrait être aussi soigné que vos projets.",
    beforeProblems: [
      "Les templates génériques affaiblissent le positionnement",
      "Une mauvaise expérience mobile réduit la confiance",
      "Les sites difficiles à mettre à jour ralentissent le studio",
    ],
    beforeBody: "Vos projets sont détaillés, soignés et haut de gamme. Votre site devrait donner la même impression.",
    reviewTitle: "Vous ne savez pas ce qui manque à votre site?",
    reviewBody: "Envoyez votre site actuel et nous verrons où il perd en clarté, confiance ou clients potentiels.",
    redesignTitle: "Conception et développement dans un système de site clair.",
    redesignBody: "Un système clair avec les pages, la structure et la présentation dont votre studio a besoin.",
    redesignCta: "Commencer le site",
    offerTitle: "Prix simples. Propriété claire.",
    offerIntro: "Un prix clair pour le site, avec hébergement et mises à jour optionnels.",
  },
} as const;

const pricingIncludes = [
  "Strategy and structure",
  "Custom website design",
  "Responsive build",
  "Basic SEO setup",
  "Contact form",
  "Launch support",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return genMeta({
    locale,
    path: "",
    title: "Architecture Website Redesigns Costa del Sol — REFRAME",
    description: t("sub"),
  });
}


export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = copy[locale as keyof typeof copy] ?? copy.en;
  const workItems = getContent(locale).work.items.slice(0, 3).map((item) => ({
    slug: item.slug,
    title: item.title,
    category: item.category,
    result: item.what.split(",")[0] + ".",
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      <section className="relative min-h-dvh overflow-hidden bg-stone pt-24 md:pt-28">
        <div className="absolute inset-y-0 right-0 hidden w-[46vw] md:block" aria-hidden="true">
          <Image
            src={assetPath("/images/hero.png")}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="46vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone via-stone/30 to-transparent" />
        </div>
        <Container className="relative z-10 grid min-h-[calc(100dvh-7rem)] grid-cols-1 items-center gap-12 pb-12 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:pb-16">
          <div className="min-w-0">
            <AnimatedTitle
              text={c.headline}
              as="h1"
              className="text-hero mb-5 max-w-none text-primary text-balance md:mb-6"
            />
            <AnimatedText className="text-support mb-7 max-w-[590px] text-muted md:mb-8" delay={0.18}>
              {c.sub}
            </AnimatedText>
            <AnimatedText as="div" delay={0.28}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={`/${locale}/contact`}>{c.primary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/work`}>{c.secondary}</Link>
                </Button>
              </div>
            </AnimatedText>
          </div>

          <AnimatedText as="div" delay={0.22} className="hidden min-w-0 md:block">
            <div className="relative ml-auto w-full max-w-[500px] xl:max-w-[540px]">
              <div className="relative h-[min(48dvh,440px)] overflow-hidden shadow-[0_24px_64px_rgb(10_10_10/0.10)]">
                <Image
                  src={assetPath("/images/heromock.png")}
                  alt="Example architecture studio website redesign"
                  fill
                  priority
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
            <AnimatedTitle text={c.workTitle} as="h2" id="work-preview-heading" className="text-section max-w-[860px] text-primary" />
            <AnimatedText className="text-support max-w-[560px] text-muted lg:ml-auto" delay={0.12}>
              {c.workBody}
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
            {workItems.map((item, i) => (
              <WorkCard
                key={item.slug}
                {...item}
                locale={locale}
                index={i}
                tall={i === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="previews" className="bg-charcoal section-space text-inverted" aria-labelledby="preview-heading">
        <Container>
          <div className="mb-[80px] grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={c.beforeTitle} as="h2" id="preview-heading" className="text-display max-w-[820px] text-inverted" />
            <AnimatedText as="div" className="max-w-[560px] lg:ml-auto" delay={0.12}>
              <p className="text-support mb-8 font-body text-inverted/62">{c.beforeBody}</p>
              <ul className="space-y-4">
                {(c.beforeProblems as readonly string[]).map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-bronze/55 flex-shrink-0" />
                    <span className="font-body text-[16px] leading-[1.6] text-inverted/65">{problem}</span>
                  </li>
                ))}
              </ul>
            </AnimatedText>
          </div>

          <AnimatedText as="div" delay={0.08}>
            <BeforeAfterSlider
              beforeSrc={assetPath("/images/before.png")}
              afterSrc={assetPath("/images/after.png")}
              beforeAlt="Architecture studio website before redesign"
              afterAlt="Architecture studio website after redesign"
              annotationLabels={[
                "Clearer first impression",
                "Better project hierarchy",
                "More premium perception",
                "Mobile-ready experience",
              ]}
              annotationRevealThreshold={58}
            />
          </AnimatedText>

        </Container>
      </section>

      <HomeDiagnosisSection
        locale={locale}
        title={c.reviewTitle}
        body={c.reviewBody}
        cta="Request a quick audit"
      />

      <section id="pricing" className="bg-charcoal section-space-loose text-inverted" aria-labelledby="offer-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:items-center lg:gap-10">
            <div className="order-2 lg:order-1 lg:pr-5">
              <AnimatedTitle text={c.offerTitle} as="h2" id="offer-heading" className="text-section mb-7 max-w-[700px] text-inverted" />
              <AnimatedText className="text-support mb-10 max-w-[560px] text-inverted/68" delay={0.1}>
                {c.offerIntro}
              </AnimatedText>
              <p className="mt-4 font-heading text-[clamp(66px,10vw,132px)] font-medium leading-[0.9] tracking-[-0.03em] text-inverted">
                €1,500
              </p>
              <p className="mt-3 font-body text-[18px] leading-relaxed text-inverted/76">
                One-time payment
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-8 w-full sm:w-auto">
                <Link href={`/${locale}/contact`}>
                  Start your website <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <div className="mt-8 grid gap-3 border-t border-white/12 pt-7">
                {pricingIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-clay" aria-hidden="true" />
                    <span className="text-[16px] leading-relaxed text-inverted/84">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 hidden lg:order-2 lg:block">
              <div className="relative aspect-[10/8] w-full overflow-hidden rounded-[14px]">
                <Image
                  src={assetPath("/images/pricing-img.png")}
                  alt="Website preview shown in pricing section"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 32vw, 100vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[0_28px_64px_rgb(0_0_0/0.38)]" />
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            <AnimatedText as="div" delay={0.16}>
              <div className="rounded-[12px] border border-white/12 bg-white/[0.03] p-5">
                <p className="text-[18px] font-medium text-inverted">Hosting package</p>
                <p className="mt-2 font-heading text-[34px] font-medium leading-none text-inverted">
                  €30<span className="ml-1 text-[15px] text-inverted/62">/month</span>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-inverted/64">
                  Managed hosting, maintenance, backups, and light support for your live website.
                </p>
              </div>
            </AnimatedText>
            <AnimatedText as="div" delay={0.2}>
              <div className="rounded-[12px] border border-white/12 bg-white/[0.03] p-5">
                <p className="text-[18px] font-medium text-inverted">Content updates</p>
                <p className="mt-2 font-heading text-[34px] font-medium leading-none text-inverted">
                  €120<span className="ml-1 text-[15px] text-inverted/62">/month</span>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-inverted/64">
                  Ongoing page updates, case study additions, content edits, and monthly refinements.
                </p>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

    </>
  );
}
