import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { buildPrivacyMetadata } from "@/lib/legal-metadata";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPrivacyMetadata(locale);
}

export default async function PrivacyPage({ params }: Props) {
  await params;
  return (
    <>
      <PageHero heading="Privacy Policy" />

      <section className="py-16 bg-offwhite">
        <Container>
          <div className="max-w-2xl prose-custom">
            <div className="inline-flex items-center gap-2 bg-sand/60 border border-bronze/20 px-4 py-2.5 mb-10">
              <span className="font-body text-[14px] text-muted/70">
                Placeholder document. Review with a legal advisor before launch.
              </span>
            </div>

            <div className="space-y-10 font-body text-[15px] text-muted leading-relaxed">
              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  1. Who we are
                </h2>
                <p>
                  REFRAME is an independent redesign studio operating on the
                  Costa del Sol, Spain. It provides architecture website
                  redesigns for architecture and interior design studios.
                </p>
                <p className="mt-3">
                  Contact: hello@reframestudio.es
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  2. What data we collect
                </h2>
                <p>
                  We collect personal data only when you submit a form on this
                  website. This includes your name, email address, studio name,
                  city, website URL, and any message you provide.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  3. How we use your data
                </h2>
                <p>
                  We use your contact information solely to respond to your
                  enquiry or audit request. We do not share your data with third
                  parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  4. Data retention
                </h2>
                <p>
                  We retain your personal data for no longer than necessary to
                  fulfill the purpose for which it was collected.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  5. Your rights
                </h2>
                <p>
                  Under GDPR and applicable Spanish law, you have the right to
                  access, rectify, or delete your personal data. To exercise
                  these rights, contact us at hello@reframestudio.es.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  6. Cookies
                </h2>
                <p>
                  This website uses minimal cookies. See our Cookie Policy for
                  details.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  7. Updates
                </h2>
                <p>
                  This policy may be updated periodically. The latest version
                  will always be available at this URL.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
