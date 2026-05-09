import en from "@/content/en";
import es from "@/content/es";
import fr from "@/content/fr";

const content = { en, es, fr };

export function getContent(locale: string) {
  return content[locale as keyof typeof content] ?? es;
}
