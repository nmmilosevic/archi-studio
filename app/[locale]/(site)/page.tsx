import { getTranslations, setRequestLocale } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { generateMetadata as genMeta, localBusinessSchema } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

interface Props {
  params: Promise<{ locale: string }>;
}

const copy = {
  en: {
    headline: "Websites that match the quality of your work.",
    sub: "We design and build refined websites for architecture and interior design studios that want a stronger digital presence.",
    primary: "Start your website",
    secondary: "View pricing",
    heroProof: "Custom design. Responsive build. Clear pricing. Fast delivery.",
    beforeTitle: "Most architecture websites don't match the quality of the work.",
    beforeProblems: [
      "Generic templates weaken your positioning",
      "Poor mobile experience loses trust",
      "Hard-to-update websites slow you down",
    ],
    beforeBody: "Your projects are detailed, considered, and high-end. Your website should feel the same.",
    redesignTitle: "A complete website, designed and built for your studio.",
    redesignBody: "A clear website system with the pages, structure, and presentation your studio needs.",
    redesignCta: "Start your website",
    offerTitle: "Simple pricing. No hidden fees.",
    offerIntro: "One clear website price, with optional hosting and updates.",
    finalTitle: "See what your website could look like.",
    finalBody: "Send your current website and we’ll show you what could be improved.",
  },
  es: {
    headline: "Webs que reflejan la calidad del trabajo.",
    sub: "Diseñamos y construimos webs refinadas para estudios de arquitectura e interiorismo que quieren una presencia digital más sólida.",
    primary: "Empezar mi web",
    secondary: "Ver precios",
    heroProof: "Diseño a medida. Responsive. Precio claro. Entrega rápida.",
    beforeTitle: "La mayoría de webs de arquitectura no reflejan la calidad del trabajo.",
    beforeProblems: [
      "Las plantillas genéricas debilitan el posicionamiento",
      "Una mala experiencia móvil reduce la confianza",
      "Las webs difíciles de actualizar frenan al estudio",
    ],
    beforeBody: "Tus proyectos son detallados, cuidados y de alto nivel. Tu web debería sentirse igual.",
    redesignTitle: "Una web completa, diseñada y construida para tu estudio.",
    redesignBody: "Un sistema claro con las páginas, estructura y presentación que tu estudio necesita.",
    redesignCta: "Empezar mi web",
    offerTitle: "Precios simples. Sin costes ocultos.",
    offerIntro: "Un precio claro para la web, con hosting y actualizaciones opcionales.",
    finalTitle: "Mira en qué podría convertirse tu web.",
    finalBody: "Envía tu web actual y te mostraremos qué se puede mejorar.",
  },
  fr: {
    headline: "Des sites qui reflètent la qualité du travail.",
    sub: "Nous concevons et construisons des sites raffinés pour les studios d’architecture et d’intérieur qui veulent une présence digitale plus solide.",
    primary: "Commencer le site",
    secondary: "Voir les prix",
    heroProof: "Design sur mesure. Responsive. Prix clair. Livraison rapide.",
    beforeTitle: "La plupart des sites d'architecture ne reflètent pas la qualité du travail.",
    beforeProblems: [
      "Les templates génériques affaiblissent le positionnement",
      "Une mauvaise expérience mobile réduit la confiance",
      "Les sites difficiles à mettre à jour ralentissent le studio",
    ],
    beforeBody: "Vos projets sont détaillés, soignés et haut de gamme. Votre site devrait donner la même impression.",
    redesignTitle: "Un site complet, conçu et construit pour votre studio.",
    redesignBody: "Un système clair avec les pages, la structure et la présentation dont votre studio a besoin.",
    redesignCta: "Commencer le site",
    offerTitle: "Prix simples. Aucun frais caché.",
    offerIntro: "Un prix clair pour le site, avec hébergement et mises à jour optionnels.",
    finalTitle: "Voyez ce que votre site pourrait devenir.",
    finalBody: "Envoyez votre site actuel et nous vous montrerons ce qui peut être amélioré.",
  },
} as const;

const includes = [
  "Custom website design",
  "Responsive development",
  "Project portfolio pages",
  "CMS setup",
  "Contact form",
  "Basic SEO setup",
  "Vercel deployment",
  "5 pages included",
];

const cities = ["Marbella", "Estepona", "Sotogrande", "Benahavís", "Málaga"];

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
            <AnimatedText className="mb-7 max-w-[590px] text-[16px] leading-[1.65] text-muted md:mb-8 md:text-[18px]" delay={0.18}>
              {c.sub}
            </AnimatedText>
            <AnimatedText as="div" delay={0.28}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={`/${locale}/contact`}>{c.primary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/pricing`}>{c.secondary}</Link>
                </Button>
              </div>
              <p className="mt-6 font-body text-[15px] text-muted/60 leading-relaxed">
                {c.heroProof}
              </p>
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

      <section id="previews" className="bg-charcoal py-28 text-inverted md:py-44" aria-labelledby="preview-heading">
        <Container>
          <div className="mb-[80px] grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={c.beforeTitle} as="h2" id="preview-heading" className="text-display max-w-[820px] text-inverted" />
            <AnimatedText as="div" className="max-w-[560px] lg:ml-auto" delay={0.12}>
              <p className="mb-8 font-body text-[18px] leading-[1.65] text-inverted/62">{c.beforeBody}</p>
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
            />
          </AnimatedText>

        </Container>
      </section>

      <section className="bg-stone py-28 md:py-44" aria-labelledby="redesign-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:items-center">
            <div>
              <AnimatedTitle
                text={c.redesignTitle}
                as="h2"
                id="redesign-heading"
                className="text-section mb-8 max-w-[680px] text-primary"
              />
              <AnimatedText
                className="max-w-[520px] text-[17px] leading-[1.68] text-muted md:text-[18px]"
                delay={0.1}
              >
                {c.redesignBody}
              </AnimatedText>
            </div>

            <AnimatedText as="div" delay={0.14}>
              <div className="lg:pt-4">
                <div className="overflow-hidden border border-charcoal/10 bg-offwhite">
                  <div className="grid grid-cols-1 gap-x-12 gap-y-5 p-8 sm:grid-cols-2 md:p-10">
                    {includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-bronze" aria-hidden="true" />
                        <span className="text-[16px] leading-relaxed text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedText>

          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-28 md:py-44" aria-labelledby="offer-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div>
              <AnimatedTitle text={c.offerTitle} as="h2" id="offer-heading" className="text-section mb-7 max-w-[700px] text-primary" />
              <AnimatedText className="mb-12 max-w-[460px] text-[17px] leading-relaxed text-muted" delay={0.1}>
                {c.offerIntro}
              </AnimatedText>
              <div className="mb-10">
                <p className="font-heading text-[88px] font-medium leading-none text-primary">
                  €1,500
                </p>
                <p className="mt-4 font-body text-[16px] text-muted/70">
                  One-time website design and build.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>
                  Start your website <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <AnimatedText as="div" delay={0.14}>
              <div className="grid gap-5">
                <div className="border border-charcoal/10 p-8">
                  <h3 className="font-heading text-[28px] font-medium text-primary">Hosting & Maintenance</h3>
                  <p className="mt-5 font-heading text-[52px] font-medium leading-none text-primary">€30<span className="text-[18px] text-muted">/month</span></p>
                  <p className="mt-3 text-[15px] text-muted">Optional. Billed yearly.</p>
                </div>
                <div className="border border-charcoal/10 p-8">
                  <h3 className="font-heading text-[28px] font-medium text-primary">Monthly Website Updates</h3>
                  <p className="mt-5 font-heading text-[52px] font-medium leading-none text-primary">€120<span className="text-[18px] text-muted">/month</span></p>
                  <p className="mt-3 text-[15px] text-muted">Optional text, image and small layout updates.</p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-28 md:py-40 overflow-hidden" aria-label="Costa del Sol locations">
        <Container>
          <div className="mb-14 max-w-[760px]">
            <h2 className="text-display text-primary">Built for studios across the Costa del Sol.</h2>
          </div>

          <div>
            {cities.map((name) => (
              <div
                key={name}
                className="group flex items-baseline border-b border-charcoal/6 py-4 md:py-5 cursor-default"
              >
                <span
                  className="font-heading font-medium text-primary/45 group-hover:text-primary/75 transition-colors duration-500 leading-none"
                  style={{ fontSize: "clamp(40px, 6.5vw, 88px)", letterSpacing: "-0.02em" }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>

        </Container>
      </section>

      <section className="bg-charcoal py-24 text-inverted md:py-36" aria-labelledby="final-heading">
        <Container>
          <div className="mx-auto max-w-[920px] text-center">
            <AnimatedTitle text={c.finalTitle} as="h2" id="final-heading" className="text-section mb-8 text-inverted" />
            <AnimatedText className="mx-auto mb-12 max-w-[620px] text-[17px] leading-relaxed text-inverted/60" delay={0.12}>
              {c.finalBody}
            </AnimatedText>
            <AnimatedText as="div" delay={0.22}>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/audit`}>Request a website review</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/25 text-inverted hover:border-bronze hover:text-bronze">
                  <a href={`mailto:${BRAND.email}`}>
                    Email directly <ExternalLink className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
