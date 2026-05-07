import { getTranslations } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { generateMetadata as genMeta, localBusinessSchema } from "@/lib/seo";
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
    offerTitle: "Full Website Redesign & Launch",
    offerIntro:
      "One fixed offer for studios that want a refined digital presence without agency theatre.",
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
    offerTitle: "Rediseño Web Completo & Lanzamiento",
    offerIntro:
      "Una oferta fija para estudios que quieren una presencia digital refinada sin teatro de agencia.",
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
    offerTitle: "Refonte Complète & Lancement",
    offerIntro:
      "Une offre fixe pour les studios qui veulent une présence digitale raffinée sans théâtre d'agence.",
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
    title: "Architecture Website Redesigns Costa del Sol — FORMA COSTA",
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
              <div className="font-heading text-[34px] leading-[0.95] text-current md:text-[54px]">
                Villa
                <br />
                Portfolio
              </div>
            </div>
            <div className="space-y-2 font-mono-label text-[9px] uppercase tracking-widest text-current/55">
              <p>Benahavís</p>
              <p>Residential Architecture</p>
              <p>2026</p>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#ded4c4_0%,#9f9b8d_45%,#242722_100%)]" />
            <div className="absolute bottom-6 left-6 right-10 h-24 border border-white/35 bg-white/10 backdrop-blur-[1px]" />
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

      <section className="relative h-[95dvh] overflow-hidden bg-stone pt-24 md:pt-28">
        <div className="absolute inset-y-0 right-0 hidden w-[54vw] bg-[linear-gradient(135deg,#d9cdbb_0%,#b5a995_35%,#292b25_100%)] md:block" aria-hidden="true" />
        <div className="absolute right-[8vw] top-28 hidden h-[68vh] w-[31vw] border border-white/30 bg-white/10 md:block" aria-hidden="true" />
        <Container className="relative z-10 grid h-full grid-cols-1 items-end gap-12 pb-12 md:grid-cols-[1.06fr_0.94fr] md:pb-16">
          <div className="max-w-[760px]">
            <AnimatedText className="section-label mb-8 whitespace-pre-line" as="p">
              {c.label}
            </AnimatedText>
            <h1 className="text-hero mb-8 max-w-[720px] text-primary text-balance">
              {c.headline}
            </h1>
            <AnimatedText className="mb-10 max-w-[560px] text-[17px] leading-relaxed text-muted md:text-[18px]" delay={0.18}>
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

          <AnimatedText as="div" delay={0.22}>
            <div className="relative ml-auto w-full max-w-[560px] md:pb-12">
              <div className="aspect-[4/5] overflow-hidden bg-[linear-gradient(150deg,#ece5d8_0%,#c9bca8_42%,#54574c_100%)]">
                <div className="flex h-full flex-col justify-end p-6 md:p-8">
                  <div className="max-w-[260px] border-l border-white/50 pl-5 text-inverted">
                    <p className="font-heading text-[30px] leading-none md:text-[42px]">
                      Editorial previews for architecture studios.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-6 hidden w-[62%] bg-offwhite p-5 shadow-[0_24px_70px_rgba(22,22,22,0.12)] md:block">
                <p className="font-mono-label text-[10px] uppercase tracking-widest text-bronze">
                  Private Vercel preview
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  A live redesign direction sent before the studio commits to a full project.
                </p>
              </div>
            </div>
          </AnimatedText>
        </Container>
      </section>

      <section className="bg-offwhite py-20 md:py-32" aria-labelledby="proof-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <AnimatedText className="section-label" as="p">
              Redesign-first outreach
            </AnimatedText>
            <div>
              <AnimatedTitle text={c.proof} as="h2" id="proof-heading" className="text-section mb-7 max-w-[850px] text-primary" />
              <AnimatedText className="max-w-[680px] text-[17px] leading-relaxed text-muted" delay={0.12}>
                {c.proofBody}
              </AnimatedText>
            </div>
          </div>
        </Container>
      </section>

      <section id="previews" className="bg-charcoal py-20 text-inverted md:py-32" aria-labelledby="preview-heading">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={c.beforeTitle} as="h2" id="preview-heading" className="text-section max-w-[820px] text-inverted" />
            <AnimatedText className="max-w-[540px] text-[16px] leading-relaxed text-inverted/62 lg:ml-auto" delay={0.12}>
              {c.beforeBody}
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
            <AnimatedText as="div" delay={0.08}>
              <div>
                <p className="mb-3 font-mono-label text-[10px] uppercase tracking-widest text-inverted/45">
                  Before
                </p>
                <BrowserPreview variant="before" />
              </div>
            </AnimatedText>
            <AnimatedText as="div" delay={0.18}>
              <div>
                <p className="mb-3 font-mono-label text-[10px] uppercase tracking-widest text-bronze">
                  After preview
                </p>
                <BrowserPreview variant="after" />
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 md:py-32" aria-labelledby="offer-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div>
              <AnimatedText className="section-label mb-8" as="p">
                Fixed offer
              </AnimatedText>
              <AnimatedTitle text={c.offerTitle} as="h2" id="offer-heading" className="text-section mb-7 max-w-[700px] text-primary" />
              <AnimatedText className="mb-10 max-w-[460px] text-[16px] leading-relaxed text-muted" delay={0.1}>
                {c.offerIntro}
              </AnimatedText>
              <div className="mb-10">
                <p className="font-heading text-[76px] leading-none text-primary md:text-[104px]">
                  €1,990
                </p>
                <p className="mt-2 font-mono-label text-[10px] uppercase tracking-widest text-muted/60">
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
                    <h3 className="font-heading text-[30px] leading-tight text-primary">
                      {c.careTitle}
                    </h3>
                    <p className="mt-2 max-w-[340px] text-[14px] leading-relaxed text-muted">
                      Hosting management, technical checks, portfolio updates, analytics review and small content edits.
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="font-heading text-[44px] leading-none text-primary">€149</p>
                    <p className="mt-1 font-mono-label text-[10px] uppercase tracking-widest text-muted/60">
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
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <AnimatedText className="section-label" as="p">
              Costa del Sol studios
            </AnimatedText>
            <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
              {studios.map((studio) => (
                <span key={studio} className="font-heading text-[28px] leading-none text-primary/75 md:text-[38px]">
                  {studio}
                </span>
              ))}
            </div>
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
                  <a href="mailto:hello@formacosta.com">
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
