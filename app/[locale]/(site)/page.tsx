import { getTranslations, setRequestLocale } from "next-intl/server";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildPageMetadata } from "@/lib/seo";
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

const copy = {
  en: {
    headline: "We design websites for architecture and interior design studios.",
    sub: "Clear project presentation, better mobile experience, and a website that helps clients trust your studio.",
    primary: "Start your website",
    secondary: "View projects",
    workTitle: "Selected website systems for architecture studios.",
    workBody: "A curated set of redesign directions, portfolio systems, and presentation concepts.",
    beforeTitle: "Your website should help clients trust your work.",
    beforeProblems: [
      "Clearer project presentation",
      "Better mobile experience",
      "Easier navigation",
      "Stronger first impression",
    ],
    beforeBody: "Many architecture studio websites look good but are difficult to understand, slow on mobile, or unclear for new clients.",
    reviewTitle: "Small friction reduces trust.",
    reviewBody:
      "Not ready to commit? Send your current site—we’ll show where you lose clarity and trust. Straightforward notes, no hard sell.",
    offerTitle: "One clear investment for your studio.",
    offerPriceDetail:
      "Strategy, custom design, and development. One figure. One timeline. Everything you need to launch a site that reflects the quality of your work.",
    pricingOneTime: "One-time payment",
    auditCta: "Request a website review",
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
    reviewTitle: "La fricción reduce la confianza.",
    reviewBody:
      "¿Aún no quieres empezar? Envíanos tu web y te diremos dónde pierdes claridad y confianza. Notas útiles, sin presión.",
    redesignTitle: "Diseño y desarrollo en un único sistema web claro.",
    redesignBody: "Un sistema claro con las páginas, estructura y presentación que tu estudio necesita.",
    redesignCta: "Empezar mi web",
    offerTitle: "Una inversión clara para tu estudio.",
    offerPriceDetail:
      "Estrategia, diseño a medida y desarrollo. Una cifra. Un calendario. Lo esencial para publicar una web a la altura de tu trabajo.",
    pricingOneTime: "Pago único",
    auditCta: "Solicitar una revisión",
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
    reviewTitle: "Les frictions réduisent la confiance.",
    reviewBody:
      "Pas prêt à vous lancer ? Envoyez votre site : nous montrerons où vous perdez en clarté et en confiance. Des notes utiles, sans vente agressive.",
    redesignTitle: "Conception et développement dans un système de site clair.",
    redesignBody: "Un système clair avec les pages, la structure et la présentation dont votre studio a besoin.",
    redesignCta: "Commencer le site",
    offerTitle: "Un investissement clair pour votre studio.",
    offerPriceDetail:
      "Stratégie, design sur mesure et développement. Un montant. Un calendrier. L’essentiel pour un site à la hauteur de votre travail.",
    pricingOneTime: "Paiement unique",
    auditCta: "Demander une relecture du site",
  },
} as const;

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

const pricingIncludes = [
  "Website strategy",
  "Custom design",
  "Responsive development",
  "SEO basics",
  "Contact form",
  "Launch support",
];

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
  const c = copy[locale as keyof typeof copy] ?? copy.en;
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
            <AnimatedTitle text={c.workTitle} as="h2" id="work-preview-heading" className="text-section max-w-[860px] text-primary" />
            <AnimatedText className="text-support max-w-[560px] text-muted lg:ml-auto" delay={0.12}>
              {c.workBody}
            </AnimatedText>
          </div>

          <SelectedWorkShowcase />
        </Container>
      </section>

      <section id="previews" className="bg-charcoal section-space max-md:!pt-[100px] max-md:!pb-[100px] text-inverted" aria-labelledby="preview-heading">
        <Container>
          <div className="mb-[80px] grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <AnimatedTitle text={c.beforeTitle} as="h2" id="preview-heading" className="text-display max-w-[820px] text-inverted" />
            <AnimatedText as="div" className="max-w-[560px] lg:ml-auto" delay={0.12}>
              <p className="text-support mb-8 font-body text-inverted/62">{c.beforeBody}</p>
              <ul className="max-w-[500px] space-y-4.5">
                {(c.beforeProblems as readonly string[]).map((problem) => (
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
              beforeAlt="Architecture studio website before redesign"
              afterAlt="Architecture studio website after redesign"
              annotationLabels={[
                "Clearer first impression",
                "Better project presentation",
                "Easier navigation",
                "Better mobile experience",
              ]}
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
              <AnimatedTitle text={c.offerTitle} as="h2" id="offer-heading" className="text-section mb-6 max-w-[620px] text-primary" />
              <p className="font-heading text-[clamp(62px,9vw,122px)] font-medium leading-[0.9] tracking-[-0.03em] text-primary">
                €1,500
              </p>
              <p className="mt-2 font-body text-[18px] leading-relaxed text-muted">{c.pricingOneTime}</p>
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-primary/78">{c.offerPriceDetail}</p>
              <Button asChild size="lg" className="mt-7 w-full sm:w-auto">
                <Link href={`/${locale}/contact`}>
                  {c.primary} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 pt-1 sm:grid-cols-2">
                {pricingIncludes.map((item) => (
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
                  alt="Visual mood for the website offering"
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
                <p className="text-[17px] font-medium text-primary">Hosting package</p>
                <p className="mt-2 font-heading text-[32px] font-medium leading-none text-primary">
                  €30<span className="ml-1 text-[15px] text-muted">/month</span>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Hosting, updates, backups, and small fixes.
                </p>
              </div>
            </AnimatedText>
            <AnimatedText as="div" delay={0.2}>
              <div className="rounded-[12px] border border-charcoal/10 bg-white/55 p-5">
                <p className="text-[17px] font-medium text-primary">Content updates</p>
                <p className="mt-2 font-heading text-[32px] font-medium leading-none text-primary">
                  €120<span className="ml-1 text-[15px] text-muted">/month</span>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Extra pages and project uploads.
                </p>
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <HomeDiagnosisSection
        locale={locale}
        title={c.reviewTitle}
        body={c.reviewBody}
        cta={c.auditCta}
        variant="charcoal"
      />

    </>
  );
}
