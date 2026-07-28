import { SiteHeader } from "@/components/layout/SiteHeader";
import { HomepageFooter } from "@/components/layout/HomepageFooter";
import { PageTransition } from "@/components/motion/PageTransition";
import { LocaleScrollRestorer } from "@/components/navigation/LocaleScrollRestorer";
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
      <LocaleScrollRestorer />
      <SiteHeader />
      <PageTransition>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </PageTransition>
      <FinalCtaSection locale={locale} />
      <HomepageFooter />
    </>
  );
}
