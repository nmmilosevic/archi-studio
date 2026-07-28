import { SiteHeader } from "@/components/layout/SiteHeader";
import { HomepageFooter } from "@/components/layout/HomepageFooter";
import { LocaleContentTransition } from "@/components/motion/LocaleContentTransition";
import { PageTransition } from "@/components/motion/PageTransition";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { setRequestLocale } from "next-intl/server";

interface SiteLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <PageTransition>
        <LocaleContentTransition locale={locale}>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <FinalCtaSection locale={locale} />
          <HomepageFooter />
        </LocaleContentTransition>
      </PageTransition>
    </>
  );
}
