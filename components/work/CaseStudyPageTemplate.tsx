import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudyScreens } from "@/components/work/CaseStudyScreens";
import { CaseStudyWhatChanged } from "@/components/work/CaseStudyWhatChanged";
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

      <CaseStudyScreens
        title={item.title}
        heading={labels.keyScreens}
        screens={item.screens}
      />

      <CaseStudyWhatChanged
        headingId="what-changed-heading"
        sectionHeading={labels.whatChangedHeading}
        themes={labels.whatChangedThemes}
        items={item.whatChanged}
      />
    </>
  );
}
