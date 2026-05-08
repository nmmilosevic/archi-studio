import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { AuditForm } from "@/components/forms/AuditForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Container } from "@/components/ui/Container";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { Button } from "@/components/ui/Button";
import { generateMetadata as genMeta, faqSchema } from "@/lib/seo";
import { assetPath } from "@/lib/paths";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

const pageCopy = {
  en: {
    label: "Website perception audit",
    heading: "Your website may already be shaping the wrong perception.",
    sub: "A focused review of how your architecture or interior design studio is presented online, from first impression and mobile experience to portfolio clarity and enquiry flow.",
    cta: "Request a redesign audit",
    visualLabel: "Diagnostic preview",
    visualTitle: "Most studios are judged through a screen before they are experienced in person.",
    visualBody:
      "The audit looks at how the website frames the work: what feels premium, what feels unclear, and where trust is lost before the first enquiry.",
    annotations: [
      ["Weak hierarchy", "The first screen does not make the studio's quality immediately legible."],
      ["Compressed portfolio", "Projects appear as images, not as considered architectural stories."],
      ["Unclear enquiry path", "The route from interest to contact is too quiet or too buried."],
      ["Mobile rhythm", "The website loses atmosphere when opened from an email or Instagram DM."],
      ["Outdated typography", "Spacing, type scale and contrast reduce perceived precision."],
    ],
    critiqueTitle: "A diagnostic of presentation, not a generic checklist.",
    critiqueBody:
      "A good studio website does not make the work better. It makes the quality easier to see. The review focuses on perception, clarity and the small digital signals that shape confidence before the first call.",
    points: [
      "First impression",
      "Portfolio structure",
      "Image hierarchy",
      "Mobile presentation",
      "Typography and spacing",
      "Contact flow",
      "Multilingual clarity",
      "Local trust signals",
    ],
    formTitle: "Request a redesign audit.",
    formBody:
      "Send your current website. I will review how the studio is perceived online and send clear recommendations on what should change first.",
    formNote:
      "The audit is written for architecture and interior design studios on the Costa del Sol. It focuses on presentation, not generic marketing theory.",
    faqTitle: "Audit questions",
    faq: [
      {
        q: "Is the audit really free?",
        a: "Yes. The first review and written recommendations are free. A full redesign preview or implementation is quoted separately.",
      },
      {
        q: "What will I receive?",
        a: "A concise written review of the website's first impression, portfolio clarity, mobile presentation, enquiry path and priority issues.",
      },
      {
        q: "Do I need to commit to a project?",
        a: "No. The audit stands on its own. If the direction is useful, we can discuss a redesign preview or full website launch.",
      },
      {
        q: "How long does it take?",
        a: "Most initial reviews are sent within 48 hours. Deeper redesign previews can take a few working days.",
      },
    ],
  },
  es: {
    label: "Auditoría de percepción web",
    heading: "Tu web puede estar creando una percepción equivocada.",
    sub: "Una revisión enfocada en cómo se presenta online tu estudio de arquitectura o interiorismo: primera impresión, móvil, claridad del portfolio y ruta de contacto.",
    cta: "Solicitar auditoría de rediseño",
    visualLabel: "Vista diagnóstica",
    visualTitle: "La mayoría de estudios se descubren en una pantalla antes de conocerse en persona.",
    visualBody:
      "La auditoría analiza cómo la web enmarca el trabajo: qué transmite calidad, qué resulta confuso y dónde se pierde confianza antes del primer contacto.",
    annotations: [
      ["Jerarquía débil", "La primera pantalla no hace legible la calidad del estudio."],
      ["Portfolio comprimido", "Los proyectos aparecen como imágenes, no como historias arquitectónicas."],
      ["Contacto poco claro", "El camino desde el interés hasta la consulta queda demasiado oculto."],
      ["Ritmo móvil", "La web pierde atmósfera al abrirse desde email o Instagram."],
      ["Tipografía desfasada", "Escala, espaciado y contraste reducen la sensación de precisión."],
    ],
    critiqueTitle: "Un diagnóstico de presentación, no una lista genérica.",
    critiqueBody:
      "Una buena web no mejora el trabajo. Hace que su calidad sea más fácil de ver. La revisión se centra en percepción, claridad y señales digitales que generan confianza antes de la primera llamada.",
    points: [
      "Primera impresión",
      "Estructura del portfolio",
      "Jerarquía de imagen",
      "Presentación móvil",
      "Tipografía y espaciado",
      "Ruta de contacto",
      "Claridad multilingüe",
      "Señales locales de confianza",
    ],
    formTitle: "Solicitar auditoría de rediseño.",
    formBody:
      "Envía tu web actual. Revisaré cómo se percibe el estudio online y enviaré recomendaciones claras sobre qué debería cambiar primero.",
    formNote:
      "La auditoría está pensada para estudios de arquitectura e interiorismo en la Costa del Sol. Se centra en presentación, no en teoría de marketing genérica.",
    faqTitle: "Preguntas sobre la auditoría",
    faq: [
      {
        q: "¿La auditoría es realmente gratuita?",
        a: "Sí. La primera revisión y las recomendaciones escritas son gratuitas. Una vista previa completa o la implementación se presupuestan aparte.",
      },
      {
        q: "¿Qué recibiré?",
        a: "Una revisión escrita y concisa de primera impresión, claridad del portfolio, presentación móvil, ruta de contacto y prioridades.",
      },
      {
        q: "¿Tengo que comprometerme a un proyecto?",
        a: "No. La auditoría funciona por sí sola. Si la dirección es útil, podemos hablar de una vista previa de rediseño o del lanzamiento completo.",
      },
      {
        q: "¿Cuánto tarda?",
        a: "La mayoría de revisiones iniciales se envían en 48 horas. Las vistas previas de rediseño más profundas pueden tardar algunos días laborables.",
      },
    ],
  },
  fr: {
    label: "Audit de perception web",
    heading: "Votre site façonne peut-être déjà la mauvaise perception.",
    sub: "Une revue ciblée de la manière dont votre studio d'architecture ou de design intérieur est présenté en ligne : première impression, mobile, clarté du portfolio et parcours de contact.",
    cta: "Demander un audit de refonte",
    visualLabel: "Diagnostic visuel",
    visualTitle: "La plupart des studios sont découverts sur écran avant d'être rencontrés en personne.",
    visualBody:
      "L'audit observe comment le site présente le travail : ce qui paraît premium, ce qui manque de clarté et où la confiance se perd avant la première demande.",
    annotations: [
      ["Hiérarchie faible", "Le premier écran ne rend pas immédiatement lisible la qualité du studio."],
      ["Portfolio compressé", "Les projets ressemblent à des images, pas à des récits architecturaux."],
      ["Contact peu clair", "Le passage de l'intérêt à la prise de contact est trop discret ou enterré."],
      ["Rythme mobile", "Le site perd son atmosphère depuis un email ou un DM Instagram."],
      ["Typographie datée", "Échelle, espacement et contraste diminuent la sensation de précision."],
    ],
    critiqueTitle: "Un diagnostic de présentation, pas une checklist générique.",
    critiqueBody:
      "Un bon site ne rend pas le travail meilleur. Il rend sa qualité plus facile à voir. La revue se concentre sur la perception, la clarté et les signaux digitaux qui créent la confiance avant le premier appel.",
    points: [
      "Première impression",
      "Structure du portfolio",
      "Hiérarchie des images",
      "Présentation mobile",
      "Typographie et espacement",
      "Parcours de contact",
      "Clarté multilingue",
      "Signaux locaux de confiance",
    ],
    formTitle: "Demander un audit de refonte.",
    formBody:
      "Envoyez votre site actuel. Je regarderai comment le studio est perçu en ligne et j'enverrai des recommandations claires sur ce qui devrait changer en premier.",
    formNote:
      "L'audit est pensé pour les studios d'architecture et de design intérieur sur la Costa del Sol. Il se concentre sur la présentation, pas sur une théorie marketing générique.",
    faqTitle: "Questions sur l'audit",
    faq: [
      {
        q: "L'audit est-il vraiment gratuit ?",
        a: "Oui. La première revue et les recommandations écrites sont gratuites. Un aperçu complet de refonte ou l'implémentation sont proposés séparément.",
      },
      {
        q: "Que vais-je recevoir ?",
        a: "Une revue écrite concise de la première impression, de la clarté du portfolio, du mobile, du parcours de contact et des priorités.",
      },
      {
        q: "Dois-je m'engager sur un projet ?",
        a: "Non. L'audit peut rester indépendant. Si la direction est utile, nous pouvons parler d'un aperçu de refonte ou d'un lancement complet.",
      },
      {
        q: "Combien de temps cela prend-il ?",
        a: "La plupart des premières revues sont envoyées sous 48 heures. Les aperçus de refonte plus poussés peuvent prendre quelques jours ouvrables.",
      },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    locale,
    path: "/audit",
    title: "Website Redesign Audit for Architecture Studios — REFRAME",
    description:
      "A focused review of how your architecture or interior design studio is perceived online, from first impression to portfolio clarity and enquiry flow.",
  });
}

export default async function AuditPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const audit = pageCopy[locale as keyof typeof pageCopy] ?? pageCopy.en;
  const jsonLd = faqSchema(audit.faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-stone pt-32 md:pt-44 pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <AnimatedText
                as="p"
                className="mb-7 font-body text-[14px] uppercase leading-[1.55] tracking-[0.12em] text-muted/65"
                delay={0.04}
              >
                {audit.label}
              </AnimatedText>
              <AnimatedTitle
                text={audit.heading}
                as="h1"
                className="text-section max-w-[920px] text-primary text-balance"
              />
            </div>

            <div className="lg:pb-2">
              <AnimatedText
                className="max-w-[610px] text-[17px] leading-[1.68] text-muted md:text-[19px]"
                delay={0.18}
              >
                {audit.sub}
              </AnimatedText>
              <AnimatedText as="div" delay={0.26}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg">
                    <Link href="#audit-form">{audit.cta}</Link>
                  </Button>
                  <p className="font-body text-[13px] text-muted/50">Free · No commitment</p>
                </div>
              </AnimatedText>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-20 text-inverted md:py-32" aria-labelledby="diagnostic-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <AnimatedText as="div" delay={0.04}>
              <div className="relative overflow-hidden border border-white/10 bg-stone text-primary shadow-[0_32px_100px_rgb(0_0_0/0.32)]">
                <div className="flex h-10 items-center justify-between border-b border-charcoal/10 px-4">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-charcoal/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-charcoal/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-charcoal/18" />
                  </div>
                  <span className="font-body text-[14px] uppercase tracking-[0.12em] text-muted/60">
                    website review
                  </span>
                </div>

                <div className="grid min-h-[620px] grid-cols-1 md:grid-cols-[0.86fr_1.14fr]">
                  <div className="relative min-h-[340px] overflow-hidden bg-[#d5ccbd] md:min-h-full">
                    <Image
                      src={assetPath("/images/before.png")}
                      alt="Architecture studio website before redesign audit"
                      fill
                      className="object-cover object-top opacity-75 saturate-[0.65]"
                      sizes="(min-width: 1024px) 470px, 100vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/28" />
                    <div className="absolute left-6 top-6 max-w-[220px] border border-white/25 bg-charcoal/70 px-4 py-3 text-inverted backdrop-blur-sm">
                      <span className="font-body text-[14px] uppercase tracking-[0.12em] text-inverted/55">
                        Current signal
                      </span>
                      <p className="mt-3 text-[16px] leading-[1.45] text-inverted/82">
                        The work is strong, but the page makes it harder to trust quickly.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-offwhite p-6 md:p-8">
                    <div className="mb-8 grid grid-cols-[1fr_88px] gap-4">
                      <div>
                        <span className="font-body text-[14px] uppercase tracking-[0.12em] text-muted/60">
                          perception map
                        </span>
                        <div className="mt-6 space-y-3">
                          <span className="block h-16 w-full bg-charcoal" />
                          <span className="block h-3 w-9/12 bg-charcoal/16" />
                          <span className="block h-3 w-7/12 bg-charcoal/12" />
                        </div>
                      </div>
                      <div className="h-32 bg-[#c7b49e]" />
                    </div>

                    <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d0c1]">
                      <Image
                        src={assetPath("/images/after.png")}
                        alt="Annotated architecture website redesign direction"
                        fill
                        className="object-cover object-top opacity-85"
                        sizes="(min-width: 1024px) 580px, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-offwhite via-transparent to-transparent" />
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-5">
                      {audit.annotations.slice(0, 4).map(([title, body], index) => (
                        <div key={title} className="border-t border-charcoal/10 pt-4">
                          <span className="font-body text-[14px] uppercase tracking-[0.12em] text-bronze">
                            {String(index + 1).padStart(2, "0")} {title}
                          </span>
                          <p className="mt-3 text-[14px] leading-[1.5] text-muted">
                            {body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedText>

            <div>
              <AnimatedText
                as="p"
                className="mb-7 font-body text-[14px] uppercase leading-none tracking-[0.12em] text-inverted/45"
                delay={0.08}
              >
                {audit.visualLabel}
              </AnimatedText>
              <AnimatedTitle
                text={audit.visualTitle}
                as="h2"
                id="diagnostic-heading"
                className="text-display mb-7 max-w-[720px] text-inverted"
                delay={0.04}
              />
              <AnimatedText className="max-w-[560px] text-[17px] leading-[1.68] text-inverted/62 md:text-[18px]" delay={0.16}>
                {audit.visualBody}
              </AnimatedText>

              <AnimatedText as="div" delay={0.24}>
                <div className="mt-10 space-y-4">
                  {audit.annotations.map(([title, body]) => (
                    <div key={title} className="grid grid-cols-[minmax(130px,0.36fr)_1fr] gap-5 border-t border-white/10 pt-4">
                      <span className="font-body text-[14px] uppercase tracking-[0.12em] text-clay/75">
                        {title}
                      </span>
                      <p className="text-[15px] leading-[1.55] text-inverted/58">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedText>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 md:py-32" aria-labelledby="audit-scope-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <AnimatedTitle
                text={audit.critiqueTitle}
                as="h2"
                id="audit-scope-heading"
                className="text-display mb-7 max-w-[760px] text-primary"
              />
              <AnimatedText className="max-w-[570px] text-[17px] leading-[1.68] text-muted md:text-[18px]" delay={0.12}>
                {audit.critiqueBody}
              </AnimatedText>
            </div>

            <AnimatedText as="div" delay={0.12}>
              <div className="grid grid-cols-1 border-t border-charcoal/10 md:grid-cols-2">
                {audit.points.map((point, index) => (
                  <div
                    key={point}
                    className="group grid min-h-[112px] grid-cols-[56px_1fr] items-start gap-5 border-b border-charcoal/10 py-6 md:pr-8"
                  >
                    <span className="font-body text-[14px] uppercase tracking-[0.12em] text-muted/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[22px] font-medium leading-[1.08] text-primary transition-colors duration-300 group-hover:text-bronze">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-stone py-20 md:py-32" id="audit-form" aria-labelledby="form-heading">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <AnimatedTitle
                text={audit.formTitle}
                as="h2"
                id="form-heading"
                className="text-display mb-7 max-w-[620px] text-primary"
              />
              <AnimatedText
                className="max-w-[540px] text-[17px] leading-[1.68] text-muted md:text-[18px]"
                delay={0.1}
              >
                {audit.formBody}
              </AnimatedText>

              <AnimatedText as="div" delay={0.18}>
                <div className="mt-12 border-t border-charcoal/10 pt-6">
                  <span className="font-body text-[14px] uppercase tracking-[0.12em] text-muted/55">
                    Costa del Sol studios
                  </span>
                  <p className="mt-4 max-w-[460px] text-[15px] leading-[1.65] text-muted">
                    {audit.formNote}
                  </p>
                </div>
              </AnimatedText>
            </div>

            <AnimatedText as="div" delay={0.12}>
              <div className="border border-charcoal/10 bg-offwhite p-6 md:p-10 lg:p-12">
                <AuditForm />
              </div>
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-16 md:py-24" aria-labelledby="audit-faq-heading">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2
                id="audit-faq-heading"
                className="text-display max-w-[520px] text-primary"
              >
                {audit.faqTitle}
              </h2>
            </div>
            <div>
              <FAQAccordion items={audit.faq} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
