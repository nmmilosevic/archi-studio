import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageTransition } from "@/components/motion/PageTransition";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <SiteHeader />
      <PageTransition>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </PageTransition>
      <SiteFooter />
    </>
  );
}
