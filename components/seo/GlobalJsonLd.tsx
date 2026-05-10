import { getGlobalStructuredData } from "@/lib/structured-data";

export function GlobalJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getGlobalStructuredData()),
      }}
    />
  );
}
