import { getGlobalStructuredData } from "@/lib/structured-data";
import { JsonLd } from "@/components/seo/JsonLd";

export function GlobalJsonLd() {
  return <JsonLd data={getGlobalStructuredData()} />;
}
