import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for FORMA COSTA digital studio.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero heading="Terms of Service" label="Legal" />

      <section className="py-16 bg-offwhite">
        <Container>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sand/60 border border-bronze/20 px-4 py-2.5 mb-10">
              <span className="font-mono-label text-[10px] tracking-widest text-muted/70 uppercase">
                Placeholder document. Review with a legal advisor before launch.
              </span>
            </div>

            <div className="space-y-10 font-body text-[15px] text-muted leading-relaxed">
              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  1. Services
                </h2>
                <p>
                  FORMA COSTA provides website design, local SEO, portfolio
                  systems, and related digital services for architecture and
                  interior design studios.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  2. Payment terms
                </h2>
                <p>
                  For one-time projects above €790: 50% due at project start,
                  50% due before delivery. Audit Preview product: 100% upfront.
                  Monthly care plans are billed monthly at the start of each
                  billing period.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  3. Revisions
                </h2>
                <p>
                  Each project package includes a defined number of revision
                  rounds as specified in the project agreement. Additional
                  revisions beyond the agreed scope are billed separately.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  4. Intellectual property
                </h2>
                <p>
                  Upon full payment, the client receives full ownership of the
                  final website deliverables. Design assets and source files
                  remain available for transfer upon request.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  5. Limitation of liability
                </h2>
                <p>
                  FORMA COSTA is not liable for any indirect, consequential, or
                  incidental damages arising from the use of services or
                  websites delivered.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-[22px] font-medium text-primary mb-4">
                  6. Governing law
                </h2>
                <p>
                  These terms are governed by the laws of Spain. Any disputes
                  shall be subject to the jurisdiction of the courts of Málaga.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
