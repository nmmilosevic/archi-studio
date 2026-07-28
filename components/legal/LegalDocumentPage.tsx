import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import type { LegalDocument } from "@/lib/legal-content";

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <PageHero heading={document.heading} />

      <section className="bg-offwhite py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="mb-10 inline-flex items-center gap-2 border border-bronze/20 bg-sand/60 px-4 py-2.5">
              <span className="font-body text-[14px] text-muted/70">
                {document.notice}
              </span>
            </div>

            <div className="space-y-10 font-body text-[15px] leading-relaxed text-muted">
              {document.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-4 font-heading text-[22px] font-medium text-primary">
                    {section.heading}
                  </h2>
                  <div className="space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
