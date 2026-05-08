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
    label: "Architecture website redesigns\nCosta del Sol",
    headline: "Websites that match the quality of the work.",
    sub: "We help architecture and interior design studios across Costa del Sol improve their online presence. Better first impressions, clearer portfolios, and websites that win better clients.",
    primary: "See redesign examples",
    secondary: "Get a free website review",
    heroProof: "Free first review · No commitment · Response within 48 hours",
    heroMockLabel: "Redesign preview",
    beforeTitle: "Most architecture websites don't match the quality of the work.",
    beforeProblems: [
      "Outdated layouts that lose visitor trust within seconds",
      "Projects shown as image grids, not as curated stories",
      "Poor mobile experience when opened from a phone",
      "No clear path from interest to enquiry",
      "Generic templates that don't reflect the studio's real quality",
    ],
    beforeBody: "We redesign the website — and show you a live preview before any contract.",
    redesignLabel: "How it works",
    redesignTitle: "You see the new direction first.",
    redesignBody:
      "Before any contract, we redesign a key section of your website, deploy it as a private live preview, and send you the link. If it feels right, the preview becomes the foundation for the full website.",
    redesignCta: "See redesign examples",
    annotations: [
      { label: "Live preview", desc: "A private link to the redesigned website — deployed before any contract." },
      { label: "Side-by-side comparison", desc: "The current website and the new direction are easy to compare directly." },
      { label: "Launch-ready", desc: "If the direction feels right, the preview becomes the base for the final website." },
    ],
    offerTitle: "Full Website Redesign & Launch",
    offerIntro:
      "One fixed price. A complete website redesign for studios that need a stronger online presence.",
    careTitle: "Monthly Website Care",
    finalTitle: "See what your website could look like.",
    finalBody:
      "Send your website URL. We review it for free and show you a better version — before any commitment.",
  },
  es: {
    label: "Rediseños web para arquitectura\nCosta del Sol",
    headline: "Webs que reflejan la calidad del trabajo.",
    sub: "Ayudamos a estudios de arquitectura e interiorismo en la Costa del Sol a mejorar su presencia online. Mejor primera impresión, portfolios más claros y webs que atraen mejores clientes.",
    primary: "Ver ejemplos de rediseño",
    secondary: "Obtener revisión gratuita",
    heroProof: "Primera revisión gratuita · Sin compromiso · Respuesta en 48 horas",
    heroMockLabel: "Preview de rediseño",
    beforeTitle: "La mayoría de webs de arquitectura no reflejan la calidad del trabajo.",
    beforeProblems: [
      "Diseños desactualizados que pierden la confianza del visitante en segundos",
      "Proyectos mostrados como galerías, no como historias curadas",
      "Mala experiencia móvil al abrirla desde el teléfono",
      "Sin camino claro desde el interés hasta el contacto",
      "Plantillas genéricas que no reflejan la calidad real del estudio",
    ],
    beforeBody: "Rediseñamos la web — y te mostramos una preview antes de cualquier contrato.",
    redesignLabel: "Cómo funciona",
    redesignTitle: "Primero ves la nueva dirección.",
    redesignBody:
      "Antes de cualquier contrato, rediseñamos una sección clave de tu web, la desplegamos como preview privada y te enviamos el enlace. Si convence, esa preview se convierte en la base del sitio final.",
    redesignCta: "Ver ejemplos de rediseño",
    annotations: [
      { label: "Preview en vivo", desc: "Un enlace privado a la web rediseñada — desplegada antes de cualquier contrato." },
      { label: "Comparación directa", desc: "La web actual y la nueva dirección se comparan de forma sencilla." },
      { label: "Lista para lanzar", desc: "Si la dirección convence, la preview se convierte en la base del sitio final." },
    ],
    offerTitle: "Rediseño Web Completo & Lanzamiento",
    offerIntro:
      "Un precio fijo. Un rediseño web completo para estudios que necesitan una presencia online más sólida.",
    careTitle: "Mantenimiento Web Mensual",
    finalTitle: "Ve cómo podría ser tu web.",
    finalBody:
      "Envía la URL de tu web. La revisamos gratis y te mostramos una versión mejorada — sin ningún compromiso.",
  },
  fr: {
    label: "Refontes de sites d'architecture\nCosta del Sol",
    headline: "Des sites qui reflètent la qualité du travail.",
    sub: "Nous aidons les studios d'architecture et de design intérieur sur la Costa del Sol à améliorer leur présence en ligne. Meilleures premières impressions, portfolios plus clairs, sites qui attirent de meilleurs clients.",
    primary: "Voir les exemples",
    secondary: "Obtenir un avis gratuit",
    heroProof: "Premier avis gratuit · Sans engagement · Réponse sous 48 heures",
    heroMockLabel: "Aperçu de refonte",
    beforeTitle: "La plupart des sites d'architecture ne reflètent pas la qualité du travail.",
    beforeProblems: [
      "Des mises en page dépassées qui font perdre confiance en quelques secondes",
      "Des projets présentés comme des galeries, pas comme des récits soignés",
      "Une mauvaise expérience mobile quand on ouvre le site depuis un téléphone",
      "Pas de chemin clair entre l'intérêt et la prise de contact",
      "Des templates génériques qui ne reflètent pas la vraie qualité du studio",
    ],
    beforeBody: "Nous refondons le site — et vous montrons un aperçu avant tout contrat.",
    redesignLabel: "Comment ça marche",
    redesignTitle: "Vous voyez la nouvelle direction en premier.",
    redesignBody:
      "Avant tout contrat, nous refondons une section clé de votre site, la déployons en aperçu privé et vous envoyons le lien. Si la direction convient, cet aperçu devient la base du site final.",
    redesignCta: "Voir les exemples",
    annotations: [
      { label: "Aperçu en direct", desc: "Un lien privé vers le site refait — déployé avant tout contrat." },
      { label: "Comparaison directe", desc: "Le site actuel et la nouvelle direction sont faciles à comparer." },
      { label: "Prêt au lancement", desc: "Si la direction convient, l'aperçu devient la base du site final." },
    ],
    offerTitle: "Refonte Complète & Lancement",
    offerIntro:
      "Un prix fixe. Une refonte complète pour les studios qui ont besoin d'une présence en ligne plus solide.",
    careTitle: "Maintenance Web Mensuelle",
    finalTitle: "Voyez à quoi pourrait ressembler votre site.",
    finalBody:
      "Envoyez l'URL de votre site. Nous l'évaluons gratuitement et vous montrons une meilleure version — sans aucun engagement.",
  },
} as const;

const includes = [
  "Reframe Audit & full redesign",
  "Responsive layouts",
  "Portfolio Clarity structure",
  "Mobile-first presentation",
  "Multilingual-ready setup",
  "Technical SEO foundation",
  "Vercel deployment",
  "Launch support",
];

const studioCoords = [
  { name: "Marbella",    coord: "36° 30' N · 4° 53' W" },
  { name: "Estepona",   coord: "36° 25' N · 5° 08' W" },
  { name: "Sotogrande", coord: "36° 17' N · 5° 23' W" },
  { name: "Benahavís",  coord: "36° 31' N · 5° 03' W" },
  { name: "Málaga",     coord: "36° 43' N · 4° 25' W" },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      <section className="relative h-dvh overflow-hidden bg-stone pt-20 md:pt-24">
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
        <Container className="relative z-10 grid h-full grid-cols-1 items-center gap-8 pb-8 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:pb-10 xl:pb-12">
          <div className="min-w-0">
            <AnimatedText
              as="div"
              className="mb-6 font-body text-[14px] uppercase leading-[1.6] tracking-[0.12em] text-muted"
              delay={0.04}
            >
              {c.label.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </AnimatedText>
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
                  <Link href="#previews">{c.primary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/audit`}>{c.secondary}</Link>
                </Button>
              </div>
              <p className="mt-5 font-body text-[13px] text-muted/50 leading-relaxed">
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
              <div className="mt-3 flex items-center justify-between">
                <span className="h-px w-8 bg-bronze/35" aria-hidden="true" />
                <span className="font-body text-muted/45">{c.heroMockLabel}</span>
              </div>
            </div>
          </AnimatedText>
        </Container>
      </section>

      <section id="previews" className="bg-charcoal py-24 text-inverted md:py-36" aria-labelledby="preview-heading">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={c.beforeTitle} as="h2" id="preview-heading" className="text-display max-w-[820px] text-inverted" />
            <AnimatedText as="div" className="max-w-[560px] lg:ml-auto" delay={0.12}>
              <ul className="space-y-3 mb-7">
                {(c.beforeProblems as readonly string[]).map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-4 bg-bronze/55 flex-shrink-0" />
                    <span className="font-body text-[16px] leading-[1.6] text-inverted/65">{problem}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[14px] leading-[1.6] text-inverted/38">{c.beforeBody}</p>
            </AnimatedText>
          </div>

          {/* Perception diagnostic */}
          <AnimatedText as="div" delay={0.22}>
            <div className="mt-10 mb-10 border-t border-white/8 pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-5">
                {[
                  { label: "First Impression", note: "Impact in the first 3 seconds" },
                  { label: "Portfolio Clarity", note: "Whether work quality is legible" },
                  { label: "Mobile Rhythm", note: "Phone-screen experience" },
                  { label: "Digital Credibility", note: "Studio trust signals" },
                ].map(({ label, note }) => (
                  <div key={label}>
                    <p className="font-body text-bronze/65 mb-1.5">{label}</p>
                    <p className="font-body text-[12px] text-inverted/30 leading-snug">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedText>

          <AnimatedText as="div" delay={0.08}>
            <BeforeAfterSlider
              beforeSrc={assetPath("/images/before.png")}
              afterSrc={assetPath("/images/after.png")}
              beforeAlt="Architecture studio website before redesign"
              afterAlt="Architecture studio website after redesign"
            />
          </AnimatedText>

          {/* Architectural metadata strip */}
          <AnimatedText as="div" delay={0.28}>
            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/8 pt-5 sm:flex-row sm:items-center">
              <span className="font-body text-[14px] uppercase tracking-[0.12em] text-inverted/35">
                Perception Gap · Current vs. Reframe Preview
              </span>
              <span className="font-body text-[14px] uppercase tracking-[0.12em] text-inverted/35">
                First Impression Study · Costa del Sol
              </span>
            </div>
          </AnimatedText>
        </Container>
      </section>

      <section className="bg-stone py-24 md:py-36" aria-labelledby="redesign-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:items-center">
            <div>
              <AnimatedText
                as="p"
                className="mb-7 font-body text-[14px] uppercase leading-none tracking-[0.12em] text-muted/60"
                delay={0.04}
              >
                {c.redesignLabel}
              </AnimatedText>
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
              <AnimatedText as="div" delay={0.18}>
                <Button asChild variant="outline" size="md" className="mt-10">
                  <Link href="#previews">{c.redesignCta}</Link>
                </Button>
              </AnimatedText>
            </div>

            <AnimatedText as="div" delay={0.14}>
              <div className="lg:pt-4">
                <div className="overflow-hidden border border-charcoal/10 bg-offwhite">
                  <div className="flex h-10 items-center justify-between border-b border-charcoal/10 px-4">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/25" />
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/18" />
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/12" />
                    </div>
                    <span className="font-body text-[14px] uppercase tracking-[0.12em] text-muted/45">
                      Reframe Preview · Private
                    </span>
                  </div>
                  <Image
                    src={assetPath("/images/redesign-preview.png")}
                    alt="Architecture studio website redesign concept — editorial layout with oversized typography and immersive imagery"
                    width={1200}
                    height={900}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-8 border-t border-charcoal/10">
                  {c.annotations.map((item, i) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[42px_0.78fr_1fr] gap-5 border-b border-charcoal/8 py-5 max-md:grid-cols-[38px_1fr]"
                    >
                      <span className="mt-0.5 font-body text-[14px] tracking-[0.12em] text-muted/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-body text-[14px] uppercase tracking-[0.12em] text-primary max-md:col-start-2">
                        {item.label}
                      </p>
                      <p className="font-body text-[14px] leading-relaxed text-muted max-md:col-start-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>

          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-24 md:py-36" aria-labelledby="offer-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div>
              <AnimatedTitle text={c.offerTitle} as="h2" id="offer-heading" className="text-section mb-7 max-w-[700px] text-primary" />
              <AnimatedText className="mb-10 max-w-[460px] text-[16px] leading-relaxed text-muted" delay={0.1}>
                {c.offerIntro}
              </AnimatedText>
              <div className="mb-10">
                <p className="font-heading text-[88px] font-medium leading-none text-primary">
                  €1,990
                </p>
                <p className="mt-2 font-body text-[14px] uppercase tracking-widest text-muted/60">
                  Excluding IVA · launch support included
                </p>
              </div>
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>
                  Request a redesign review <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <AnimatedText as="div" delay={0.14}>
              <div className="border-y border-charcoal/10 py-8 md:py-10">
                <div className="grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-bronze" aria-hidden="true" />
                      <span className="text-[15px] leading-relaxed text-primary">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col justify-between gap-6 border-t border-charcoal/10 pt-8 md:flex-row md:items-end">
                  <div>
                    <h3 className="font-heading text-[30px] font-medium leading-tight text-primary">
                      {c.careTitle}
                    </h3>
                    <p className="mt-2 max-w-[340px] text-[14px] leading-relaxed text-muted">
                      Hosting management, technical checks, portfolio updates, analytics review and small content edits.
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="font-heading text-[44px] font-medium leading-none text-primary">€149</p>
                    <p className="mt-1 font-body text-[14px] uppercase tracking-widest text-muted/60">
                      per month
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 md:py-28 overflow-hidden" aria-label="Costa del Sol locations">
        <Container>
          <div className="flex items-center justify-between pb-5 mb-12 md:mb-14 border-b border-charcoal/8">
            <span className="font-body text-muted/45">Selected territory</span>
            <span className="font-body text-muted/30 hidden sm:block">36° N · Costa del Sol · Spain</span>
          </div>

          <div>
            {studioCoords.map(({ name, coord }) => (
              <div
                key={name}
                className="group flex items-baseline justify-between border-b border-charcoal/6 py-3.5 md:py-4 cursor-default"
              >
                <span
                  className="font-heading font-medium text-primary/14 group-hover:text-primary/60 transition-colors duration-500 leading-none"
                  style={{ fontSize: "clamp(40px, 6.5vw, 88px)", letterSpacing: "-0.02em" }}
                >
                  {name}
                </span>
                <span className="font-body text-muted/30 group-hover:text-muted/55 transition-colors duration-500 hidden sm:block">
                  {coord}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-charcoal/6 mt-1">
            <span className="font-body text-muted/30">Architecture & Interior Design Studios</span>
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
                  <Link href={`/${locale}/audit`}>Get a free website review</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/25 text-inverted hover:border-bronze hover:text-bronze">
                  <a href={`mailto:${BRAND.email}`}>
                    Email directly <ExternalLink className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <p className="mt-5 font-body text-[13px] text-inverted/35 text-center leading-relaxed">
                Free review · No commitment · Response within 48 hours
              </p>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
