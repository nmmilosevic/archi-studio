import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for REFRAME.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero heading="Cookie Policy" />

      <section className="py-16 bg-offwhite">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sand/60 border border-bronze/20 px-4 py-2.5 mb-10">
              <span className="font-body text-[14px] text-muted/70">
                Placeholder document. Review with a legal advisor before launch.
              </span>
            </div>

            <div className="space-y-10 font-body text-[15px] text-muted leading-relaxed">
              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  What are cookies
                </h2>
                <p>
                  Cookies are small text files stored on your device when you
                  visit a website. They help the website function correctly and
                  may be used to analyze traffic or remember your preferences.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  Cookies we use
                </h2>
                <p>
                  This website currently uses minimal functional cookies
                  necessary for the site to operate. We do not use advertising
                  or third-party tracking cookies at this time.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  Analytics
                </h2>
                <p>
                  We may use privacy-friendly analytics (such as Plausible or
                  Vercel Analytics) that do not require cookie consent under
                  GDPR. No personal data is collected by these tools.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  Managing cookies
                </h2>
                <p>
                  You can control and delete cookies through your browser
                  settings. Note that disabling certain cookies may affect the
                  functionality of the website.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  Contact
                </h2>
                <p>
                  For questions about our cookie policy, contact us at
                  hello@reframestudio.es.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
