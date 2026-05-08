import { CaseStudyDiagnosis } from "@/components/work/CaseStudyDiagnosis";
import { CaseStudyEditorialBreak } from "@/components/work/CaseStudyEditorialBreak";
import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudyOverview } from "@/components/work/CaseStudyOverview";
import { CaseStudyResults } from "@/components/work/CaseStudyResults";
import { CaseStudyScreens } from "@/components/work/CaseStudyScreens";
import type en from "@/content/en";
import type es from "@/content/es";
import type fr from "@/content/fr";

export type CaseStudyWorkItem =
  | (typeof en.work.items)[number]
  | (typeof es.work.items)[number]
  | (typeof fr.work.items)[number];

export type CaseStudyLabels =
  | (typeof en.work)["caseStudy"]
  | (typeof es.work)["caseStudy"]
  | (typeof fr.work)["caseStudy"];

type Props = {
  locale: string;
  item: CaseStudyWorkItem;
  labels: CaseStudyLabels;
};

/**
 * Single layout for every `/work/[slug]` case study. Edit here to change all detail pages.
 */
export function CaseStudyPageTemplate({ locale, item, labels }: Props) {
  return (
    <>
      <CaseStudyHero
        locale={locale}
        title={item.title}
        location={item.location}
        summary={item.summary}
        heroDesktop={item.heroDesktop}
        desktopImageAlt={`${item.title} — desktop website preview`}
      />

      <CaseStudyOverview
        headingId="overview-heading"
        labels={{
          challenge: labels.challenge,
          approach: labels.approach,
          outcome: labels.outcome,
        }}
        challenge={item.challenge}
        approach={item.improvement}
        outcome={item.after}
      />

      <CaseStudyDiagnosis
        headingId="diagnosis-heading"
        heading={labels.diagnosis}
        sub={labels.diagnosisSub}
        points={item.diagnosisPoints}
      />

      <CaseStudyEditorialBreak quote={item.editorialQuote} />

      <CaseStudyScreens
        title={item.title}
        heading={labels.keyScreens}
        headingId="screens-heading"
        screens={item.screens}
      />

      <CaseStudyResults headingId="results-heading" heading={labels.result} outcomes={item.results} />
    </>
  );
}
