import { getTranslations } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { generateMetadata as genMeta, localBusinessSchema } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

const copy = {
  en: {
    label: "Architecture website redesigns\nCosta del Sol",
    headline: "Your studio already looks premium. Your website should too.",
    sub: "Refined redesigns for architecture and interior design studios across Marbella, Estepona, Sotogrande, Benahavís and Málaga.",
    primary: "See redesign previews",
    secondary: "Request a redesign review",
    proof: "I do not start with a pitch. I start with a redesign.",
    proofBody:
      "Before talking about a project, I redesign part of your website first, deploy it on Vercel, and send you the live preview. The website you are viewing now exists to prove the level of taste, restraint, and execution behind that approach.",
    beforeTitle: "Most studios do not need more marketing. They need a better first impression.",
    beforeBody:
      "The preview makes the value visible before a proposal exists: cleaner hierarchy, stronger photography, clearer project storytelling, and a digital presence that feels aligned with the work.",
    processTitle: "The preview changes the conversation.",
    processBody:
      "The work starts where most proposals end: with something visible enough to judge.",
    processSteps: [
      "I redesign part of your website",
      "You review the preview",
      "I finalize the system",
      "We launch",
    ],
    offerTitle: "Full Website Redesign & Launch",
    offerIntro:
      "One fixed offer for studios whose online presence should carry the same care as their built work.",
    careTitle: "Website Care",
    finalTitle: "If your work already carries the quality, the website should not dilute it.",
    finalBody:
      "Send the current site. I will review the first impression and, when there is a clear opportunity, prepare the direction for a redesign preview.",
  },
  es: {
    label: "Rediseños web para arquitectura\nCosta del Sol",
    headline: "Tu estudio ya parece premium. Tu web también debería.",
    sub: "Rediseños refinados para estudios de arquitectura e interiorismo en Marbella, Estepona, Sotogrande, Benahavís y Málaga.",
    primary: "Ver previews de rediseño",
    secondary: "Solicitar revisión",
    proof: "No empiezo con una propuesta. Empiezo con un rediseño.",
    proofBody:
      "Antes de hablar de un proyecto, rediseño una parte de tu web, la despliego en Vercel y te envío la vista previa. Esta web existe para demostrar el nivel de gusto, calma y ejecución detrás de ese método.",
    beforeTitle: "La mayoría de los estudios no necesitan más marketing. Necesitan una mejor primera impresión.",
    beforeBody:
      "La preview hace visible el valor antes de la propuesta: mejor jerarquía, fotografía más fuerte, proyectos más claros y una presencia digital alineada con el trabajo.",
    processTitle: "La preview cambia la conversación.",
    processBody:
      "El trabajo empieza donde suelen terminar las propuestas: con algo visible que se puede juzgar.",
    processSteps: [
      "Rediseño parte de tu web",
      "Revisas la preview",
      "Finalizo el sistema",
      "Lanzamos",
    ],
    offerTitle: "Rediseño Web Completo & Lanzamiento",
    offerIntro:
      "Una oferta fija para estudios cuya presencia online debe tener el mismo cuidado que su obra construida.",
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
    proof: "Je ne commence pas par un pitch. Je commence par une refonte.",
    proofBody:
      "Avant de parler d'un projet, je refais une partie de votre site, je la déploie sur Vercel et je vous envoie l'aperçu. Ce site existe pour prouver le niveau de goût, de retenue et d'exécution derrière cette approche.",
    beforeTitle: "La plupart des studios n'ont pas besoin de plus de marketing. Ils ont besoin d'une meilleure première impression.",
    beforeBody:
      "La preview rend la valeur visible avant la proposition : hiérarchie plus claire, photographie plus forte, projets mieux racontés et présence digitale alignée avec le travail.",
    processTitle: "La preview change la conversation.",
    processBody:
      "Le travail commence là où les propositions se terminent souvent : avec quelque chose de visible à juger.",
    processSteps: [
      "Je refais une partie du site",
      "Vous révisez la preview",
      "Je finalise le système",
      "Nous lançons",
    ],
    offerTitle: "Refonte Complète & Lancement",
    offerIntro:
      "Une offre fixe pour les studios dont la présence en ligne doit porter le même soin que leur travail construit.",
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

function BrowserPreview({ variant }: { variant: "before" | "after" }) {
  const isAfter = variant === "after";

  return (
    <div className={isAfter ? "preview-after" : "preview-before"}>
      <div className="flex h-8 items-center gap-1.5 border-b border-current/10 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-current/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-current/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-current/15" />
      </div>
      {isAfter ? (
        <div className="grid h-[300px] grid-cols-[0.78fr_1fr] md:h-[430px]">
          <div className="flex flex-col justify-between p-5 md:p-8">
            <div>
              <div className="mb-8 h-px w-16 bg-current/30" />
              <div className="font-heading text-[32px] font-medium leading-[0.92] text-current md:text-[52px]">
                Villa
                <br />
                Portfolio
              </div>
            </div>
            <div className="space-y-2 font-mono-label text-[14px] uppercase tracking-widest text-current/55">
              <p>Benahavís</p>
              <p>Residential Architecture</p>
              <p>2026</p>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#cfc7ba]" />
            <div className="absolute bottom-6 left-6 right-10 h-24 border border-white/35 bg-white/10" />
          </div>
        </div>
      ) : (
        <div className="h-[300px] p-5 md:h-[430px] md:p-8">
          <div className="mb-5 h-8 w-40 bg-current/12" />
          <div className="mb-3 h-4 w-full bg-current/10" />
          <div className="mb-8 h-4 w-3/4 bg-current/10" />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="aspect-[4/3] bg-current/10" />
            ))}
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="h-7 bg-current/10" />
            <div className="h-7 bg-current/10" />
            <div className="h-7 bg-current/10" />
          </div>
        </div>
      )}
    </div>
  );
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
        <div className="absolute inset-y-0 right-0 hidden w-[46vw] bg-[#d5cdbf] md:block" aria-hidden="true" />
        <div className="absolute right-[8vw] top-24 hidden h-[58vh] w-[30vw] border border-white/35 bg-white/10 md:block" aria-hidden="true" />
        <Container className="relative z-10 grid h-full grid-cols-1 items-center gap-8 pb-8 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:pb-10 xl:pb-12">
          <div className="min-w-0">
            <AnimatedText as="div" className="mb-6 font-mono-label text-[14px] uppercase leading-[1.6] tracking-[0.12em] text-muted" delay={0.04}>
              {c.label.split("\n").map((line) => (
                <span key={line} className="block">{line}</span>
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
              <div className="h-[min(48dvh,440px)] overflow-hidden bg-[#bcb5a8]">
                <div className="grid h-full grid-rows-[1fr_auto]">
                  <div className="relative overflow-hidden bg-[#c9c1b4]">
                    <div className="absolute left-8 top-8 h-28 w-20 bg-white/15" />
                    <div className="absolute bottom-10 right-8 h-40 w-28 border border-white/40" />
                    <div className="absolute inset-x-8 bottom-8 h-px bg-white/45" />
                  </div>
                  <div className="border-t border-white/25 bg-[#121212] p-7 text-inverted">
                    <p className="max-w-[260px] font-heading text-[26px] font-medium leading-[0.96] xl:text-[32px]">
                      A private preview, sent before the pitch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedText>
        </Container>
      </section>

      <section id="previews" className="bg-charcoal py-24 text-inverted md:py-36" aria-labelledby="preview-heading">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={c.beforeTitle} as="h2" id="preview-heading" className="text-section max-w-[820px] text-inverted" />
            <AnimatedText className="max-w-[560px] text-[17px] leading-[1.65] text-inverted/62 lg:ml-auto" delay={0.12}>
              {c.beforeBody}
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
            <AnimatedText as="div" delay={0.08}>
              <div>
                <BrowserPreview variant="before" />
              </div>
            </AnimatedText>
            <AnimatedText as="div" delay={0.18}>
              <div>
                <BrowserPreview variant="after" />
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-stone py-20 md:py-28" aria-labelledby="process-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <AnimatedTitle text={c.processTitle} as="h2" id="process-heading" className="text-section max-w-[720px] text-primary" />
              <AnimatedText className="mt-7 max-w-[460px] text-[17px] leading-[1.65] text-muted" delay={0.1}>
                {c.processBody}
              </AnimatedText>
            </div>
            <div className="grid grid-cols-1 border-t border-charcoal/10 md:grid-cols-2">
              {c.processSteps.map((step, index) => (
                <AnimatedText key={step} as="div" delay={0.08 + index * 0.05}>
                  <div className={`min-h-[210px] border-b border-charcoal/10 py-8 md:px-8 ${index % 2 === 0 ? "md:border-r" : ""}`}>
                    <p className="mb-10 font-mono-label text-[14px] uppercase tracking-[0.12em] text-muted/55">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="max-w-[270px] font-heading text-[30px] font-medium leading-[0.98] text-primary md:text-[36px]">
                      {step}
                    </h3>
                  </div>
                </AnimatedText>
              ))}
            </div>
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
                <p className="font-heading text-[76px] font-medium leading-none text-primary md:text-[104px]">
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

      <section className="bg-stone py-20 md:py-28" aria-label="Costa del Sol locations">
        <Container>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
              {studios.map((studio) => (
                <span key={studio} className="font-heading text-[28px] font-medium leading-none text-primary/75 md:text-[38px]">
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
