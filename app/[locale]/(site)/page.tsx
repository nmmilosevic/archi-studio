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

interface Props {
  params: Promise<{ locale: string }>;
}

const copy = {
  en: {
    headline: "Websites that match the quality of your work.",
    sub: "We design and build refined websites for architecture and interior design studios that want a stronger digital presence.",
    primary: "Start your website",
    secondary: "See the work",
    heroProof: "Custom design. Responsive build. Clear pricing.",
    workTitle: "Websites for studios with work worth showing properly.",
    workBody: "A few focused examples of clearer project presentation, stronger mobile rhythm, and a more confident first impression.",
    beforeTitle: "Your website should feel as considered as your projects.",
    beforeProblems: [
      "The work is not presented with enough clarity",
      "The mobile experience feels weak",
      "The contact path is not obvious enough",
    ],
    beforeBody: "Many studios have beautiful work, but their website makes it harder to trust, understand, or contact them.",
    reviewTitle: "Not sure what your website is missing?",
    reviewBody: "Send us your current website and we’ll review where it loses clarity, trust, or potential clients.",
    redesignTitle: "Designed and developed as one clear website system.",
    redesignBody: "A clear website system with the pages, structure, and presentation your studio needs.",
    redesignCta: "Start your website",
    offerTitle: "Simple pricing. Clear ownership.",
    offerIntro: "One clear website price, with optional hosting and updates.",
    finalTitle: "Ready to make your website feel like your work?",
    finalBody: "Send your current website or project idea. We’ll reply with the best next step.",
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
    finalTitle: "¿Listo para que tu web se sienta como tu trabajo?",
    finalBody: "Envía tu web actual o la idea del proyecto. Responderemos con el mejor siguiente paso.",
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
    finalTitle: "Prêt à faire ressentir votre site comme votre travail?",
    finalBody: "Envoyez votre site actuel ou votre idée de projet. Nous répondrons avec la meilleure prochaine étape.",
  },
} as const;

const includes = [
  "Custom website design",
  "Responsive development",
  "Up to 5 pages",
  "Project portfolio structure",
  "CMS setup",
  "Contact form",
  "Basic SEO setup",
  "Vercel deployment",
];

const pricingIncludes = [
  "Custom website design",
  "Responsive development",
  "Up to 5 pages",
  "CMS setup",
  "Contact form",
  "Basic SEO setup",
  "Vercel deployment",
];

const reviewPoints = [
  "Visual positioning",
  "Project presentation",
  "Mobile experience",
  "Navigation clarity",
  "Contact flow",
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

      <section className="bg-offwhite py-32 md:py-48" aria-labelledby="work-preview-heading">
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

      <section id="previews" className="bg-charcoal py-32 text-inverted md:py-48" aria-labelledby="preview-heading">
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
            />
          </AnimatedText>

        </Container>
      </section>

      <section id="website-review" className="bg-stone py-32 md:py-48" aria-labelledby="website-review-heading">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:items-center">
            <div>
              <AnimatedTitle
                text={c.reviewTitle}
                as="h2"
                id="website-review-heading"
                className="text-section mb-8 max-w-[680px] text-primary"
              />
              <AnimatedText
                className="text-support max-w-[520px] text-muted"
                delay={0.1}
              >
                {c.reviewBody}
              </AnimatedText>
              <AnimatedText as="div" delay={0.18}>
                <Button asChild size="lg" className="mt-10">
                  <Link href={`/${locale}/contact`}>Request a website review</Link>
                </Button>
              </AnimatedText>
            </div>

            <AnimatedText as="div" delay={0.14}>
              <div className="grid gap-5 border-y border-charcoal/10 py-8">
                {reviewPoints.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-3 h-px w-8 flex-shrink-0 bg-bronze/45" aria-hidden="true" />
                    <p className="text-[20px] leading-snug text-primary md:text-[24px]">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-32 md:py-48" aria-labelledby="redesign-heading">
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
                className="text-support max-w-[520px] text-muted"
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

      <section id="pricing" className="bg-stone py-36 md:py-52" aria-labelledby="offer-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <AnimatedTitle text={c.offerTitle} as="h2" id="offer-heading" className="text-section mb-7 max-w-[700px] text-primary" />
              <AnimatedText className="text-support mb-12 max-w-[500px] text-muted" delay={0.1}>
                {c.offerIntro}
              </AnimatedText>
              <div className="mb-10 border border-charcoal/12 bg-offwhite p-8 md:p-10">
                <p className="font-body text-[17px] text-muted">Website Design + Development</p>
                <p className="mt-5 font-heading text-[clamp(56px,8vw,104px)] font-medium leading-[0.94] text-primary">
                  €1,500
                </p>
                <p className="mt-4 font-body text-[17px] leading-relaxed text-muted/78">
                  One-time payment
                </p>
                <Button asChild size="lg" className="mt-8">
                  <Link href={`/${locale}/contact`}>
                    Start your website <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <div className="mt-10 grid gap-3">
                  {pricingIncludes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-bronze" aria-hidden="true" />
                      <span className="text-[16px] leading-relaxed text-primary">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-10 border-t border-charcoal/10 pt-6 text-[16px] leading-relaxed text-muted">
                  You own the website once delivered. Optional hosting and updates are available if needed.
                </p>
              </div>
            </div>

            <AnimatedText as="div" delay={0.14}>
              <div className="grid gap-4 lg:pt-16">
                <div className="border border-charcoal/10 bg-stone p-7">
                  <h3 className="font-heading text-[24px] font-medium text-primary">Hosting & Maintenance</h3>
                  <p className="mt-4 font-heading text-[40px] font-medium leading-none text-primary">€30<span className="text-[17px] text-muted">/month</span></p>
                  <p className="mt-2 text-[15px] text-muted">Optional. Billed yearly.</p>
                </div>
                <div className="border border-charcoal/10 bg-stone p-7">
                  <h3 className="font-heading text-[24px] font-medium text-primary">Monthly Website Updates</h3>
                  <p className="mt-4 font-heading text-[40px] font-medium leading-none text-primary">€120<span className="text-[17px] text-muted">/month</span></p>
                  <p className="mt-2 text-[15px] text-muted">Optional text, image and small layout updates.</p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-28 text-inverted md:py-40" aria-labelledby="final-heading">
        <Container>
          <div className="mx-auto max-w-[920px] text-center">
            <AnimatedTitle text={c.finalTitle} as="h2" id="final-heading" className="text-section mb-8 text-inverted" />
            <AnimatedText className="text-support mx-auto mb-12 max-w-[620px] text-inverted/60" delay={0.12}>
              {c.finalBody}
            </AnimatedText>
            <AnimatedText as="div" delay={0.22}>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="secondary" size="lg">
                  <Link href={`/${locale}/contact`}>Start your website</Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>
    </>
  );
}
