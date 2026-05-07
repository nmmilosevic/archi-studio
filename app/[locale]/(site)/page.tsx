import { getTranslations } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { generateMetadata as genMeta, localBusinessSchema } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
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
    headline: "Your studio already looks premium. Your website should too.",
    sub: "Refined website redesigns for architecture and interior design studios across Marbella, Estepona, Sotogrande, Benahavís and Málaga.",
    primary: "See redesign previews",
    secondary: "Request a redesign review",
    heroMockLabel: "Website redesign preview",
    proof: "We do not start with a pitch. We start with a website preview.",
    proofBody:
      "Before talking about a project, we redesign part of the website first, deploy it on Vercel, and send the live preview. This site exists to prove the level of taste, restraint, and execution behind that approach.",
    beforeTitle: "Most studios do not need more marketing. They need a better first impression.",
    beforeBody:
      "A studio is often judged through its website before anyone sees the work in person. A dated layout, weak mobile experience, or unclear portfolio can lower trust before the first conversation.",
    redesignLabel: "Preview-led redesign",
    redesignTitle: "A redesign before the pitch.",
    redesignBody:
      "Most proposals ask you to imagine the result. We start with something visible: a focused website preview, deployed privately, so the new direction can be judged before the project begins.",
    redesignCta: "See preview examples",
    annotations: [
      { label: "Live preview", desc: "A private link showing the redesigned direction." },
      { label: "Clear comparison", desc: "The current website and the new direction become easy to compare." },
      { label: "Launch-ready system", desc: "If the direction feels right, the preview becomes the base for the final site." },
    ],
    offerTitle: "Full Website Redesign & Launch",
    offerIntro:
      "One clear price for studios that already have the work, but need a website that presents it properly.",
    careTitle: "Website Care",
    finalTitle: "If your work already carries the quality, the website should not dilute it.",
    finalBody:
      "Send the current website. We review the first impression and, when there is a clear opportunity, prepare the direction for a redesign preview.",
  },
  es: {
    label: "Rediseños web para arquitectura\nCosta del Sol",
    headline: "Tu estudio ya parece premium. Tu web también debería.",
    sub: "Rediseños refinados para estudios de arquitectura e interiorismo en Marbella, Estepona, Sotogrande, Benahavís y Málaga.",
    primary: "Ver previews de rediseño",
    secondary: "Solicitar revisión",
    heroMockLabel: "Preview de rediseño web",
    proof: "No empezamos con una propuesta. Empezamos con una preview web.",
    proofBody:
      "Antes de hablar de un proyecto, rediseño una parte de tu web, la despliego en Vercel y te envío la vista previa. Esta web existe para demostrar el nivel de gusto, calma y ejecución detrás de ese método.",
    beforeTitle: "La mayoría de los estudios no necesitan más marketing. Necesitan una mejor primera impresión.",
    beforeBody:
      "La preview hace visible el valor antes de la propuesta: mejor jerarquía, fotografía más fuerte, proyectos más claros y una presencia digital alineada con el trabajo.",
    redesignLabel: "Rediseño con preview primero",
    redesignTitle: "Un rediseño antes del pitch.",
    redesignBody:
      "La mayoría de las propuestas te piden que imagines el resultado. Empezamos con algo visible: una preview web enfocada, desplegada de forma privada, para que la nueva dirección pueda juzgarse antes de que el proyecto comience.",
    redesignCta: "Ver ejemplos de preview",
    annotations: [
      { label: "Preview en vivo", desc: "Un enlace privado que muestra la dirección de rediseño." },
      { label: "Comparación clara", desc: "La web actual y la nueva dirección se pueden comparar fácilmente." },
      { label: "Sistema listo para lanzar", desc: "Si la dirección convence, la preview se convierte en la base del sitio final." },
    ],
    offerTitle: "Rediseño Web Completo & Lanzamiento",
    offerIntro:
      "Un precio claro para estudios que ya tienen el trabajo, pero necesitan una web que lo presente correctamente.",
    careTitle: "Website Care",
    finalTitle: "Si tu trabajo ya tiene calidad, la web no debería rebajarla.",
    finalBody:
      "Envía la web actual. Revisaré la primera impresión y, cuando haya una oportunidad clara, prepararé la dirección para una preview de rediseño.",
  },
  fr: {
    label: "Refontes de sites d'architecture\nCosta del Sol",
    headline: "Votre studio paraît déjà premium. Votre site devrait aussi.",
    sub: "Refontes raffinées pour studios d'architecture et de design intérieur à Marbella, Estepona, Sotogrande, Benahavís et Málaga.",
    primary: "Voir les previews",
    secondary: "Demander une revue",
    heroMockLabel: "Preview de refonte web",
    proof: "Nous ne commençons pas par un pitch. Nous commençons par une preview web.",
    proofBody:
      "Avant de parler d'un projet, je refais une partie de votre site, je la déploie sur Vercel et je vous envoie l'aperçu. Ce site existe pour prouver le niveau de goût, de retenue et d'exécution derrière cette approche.",
    beforeTitle: "La plupart des studios n'ont pas besoin de plus de marketing. Ils ont besoin d'une meilleure première impression.",
    beforeBody:
      "La preview rend la valeur visible avant la proposition : hiérarchie plus claire, photographie plus forte, projets mieux racontés et présence digitale alignée avec le travail.",
    redesignLabel: "Refonte guidée par la preview",
    redesignTitle: "Une refonte avant le pitch.",
    redesignBody:
      "La plupart des propositions vous demandent d'imaginer le résultat. Nous commençons par quelque chose de visible : une preview web ciblée, déployée en privé, pour que la nouvelle direction puisse être jugée avant le projet.",
    redesignCta: "Voir les previews",
    annotations: [
      { label: "Preview en direct", desc: "Un lien privé montrant la direction de refonte." },
      { label: "Comparaison claire", desc: "Le site actuel et la nouvelle direction deviennent faciles à comparer." },
      { label: "Système prêt au lancement", desc: "Si la direction convient, la preview devient la base du site final." },
    ],
    offerTitle: "Refonte Complète & Lancement",
    offerIntro:
      "Un prix clair pour les studios qui ont déjà le travail, mais qui ont besoin d'un site capable de le présenter correctement.",
    careTitle: "Website Care",
    finalTitle: "Si votre travail porte déjà la qualité, le site ne doit pas l'affaiblir.",
    finalBody:
      "Envoyez le site actuel. Je réviserai la première impression et, lorsqu'il existe une opportunité claire, je préparerai la direction pour une preview de refonte.",
  },
} as const;

const includes = [
  "Refined website redesign",
  "Responsive layouts",
  "Project portfolio structure",
  "Mobile optimization",
  "Multilingual-ready setup",
  "Technical SEO foundation",
  "Vercel deployment",
  "Launch support",
];

const studios = ["Marbella", "Estepona", "Sotogrande", "Benahavís", "Málaga"];

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
            src="/images/hero.png"
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
              className="mb-6 font-mono-label text-[14px] uppercase leading-[1.6] tracking-[0.12em] text-muted"
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
            </AnimatedText>
          </div>

          <AnimatedText as="div" delay={0.22} className="hidden min-w-0 md:block">
            <div className="relative ml-auto w-full max-w-[500px] xl:max-w-[540px]">
              <div className="overflow-hidden border border-charcoal/10 bg-charcoal shadow-[0_28px_80px_rgb(17_17_17/0.22)]">
                <div className="flex h-9 items-center justify-between border-b border-white/10 px-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/18" />
                  </div>
                  <span className="font-mono-label text-[14px] uppercase tracking-[0.12em] text-white/45">
                    {c.heroMockLabel}
                  </span>
                </div>
                <div className="relative h-[min(48dvh,440px)] overflow-hidden bg-stone">
                  <Image
                    src="/images/heromock.png"
                    alt="Example architecture studio website redesign"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 1280px) 540px, 500px"
                  />
                </div>
              </div>
            </div>
          </AnimatedText>
        </Container>
      </section>

      <section id="previews" className="bg-charcoal py-24 text-inverted md:py-36" aria-labelledby="preview-heading">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={c.beforeTitle} as="h2" id="preview-heading" className="text-display max-w-[820px] text-inverted" />
            <AnimatedText className="max-w-[560px] text-[17px] leading-[1.65] text-inverted/62 lg:ml-auto" delay={0.12}>
              {c.beforeBody}
            </AnimatedText>
          </div>

          <AnimatedText as="div" delay={0.08}>
            <BeforeAfterSlider
              beforeSrc="/images/before.png"
              afterSrc="/images/after.png"
              beforeAlt="Architecture studio website before redesign"
              afterAlt="Architecture studio website after redesign"
            />
          </AnimatedText>

          {/* Architectural metadata strip */}
          <AnimatedText as="div" delay={0.28}>
            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/8 pt-5 sm:flex-row sm:items-center">
              <span className="font-mono-label text-[14px] uppercase tracking-[0.12em] text-inverted/35">
                CURRENT WEBSITE / REDESIGNED PREVIEW
              </span>
              <span className="font-mono-label text-[14px] uppercase tracking-[0.12em] text-inverted/35">
                WEBSITE PRESENTATION STUDY · COSTA DEL SOL
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
                className="mb-7 font-mono-label text-[14px] uppercase leading-none tracking-[0.12em] text-muted/60"
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
                    <span className="font-mono-label text-[14px] uppercase tracking-[0.12em] text-muted/45">
                      Private Vercel Preview
                    </span>
                  </div>
                  <Image
                    src="/images/redesign-preview.png"
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
                      <span className="mt-0.5 font-mono-label text-[14px] tracking-[0.12em] text-muted/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-mono-label text-[14px] uppercase tracking-[0.12em] text-primary max-md:col-start-2">
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
                <p className="mt-2 font-mono-label text-[14px] uppercase tracking-widest text-muted/60">
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
                    <p className="mt-1 font-mono-label text-[14px] uppercase tracking-widest text-muted/60">
                      per month
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-stone py-24 md:py-36 overflow-hidden" aria-label="Costa del Sol locations">
        <Container>
          <div className="mb-8">
            <span className="annotation-meta">Service area · Costa del Sol</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-1">
            {studios.map((studio) => (
              <span
                key={studio}
                className="font-heading font-medium leading-[0.90] tracking-normal text-primary/40 transition-colors duration-700 hover:text-primary/80 cursor-default"
                style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
              >
                {studio}
              </span>
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
                  <Link href={`/${locale}/audit`}>Request a redesign review</Link>
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
