import { permanentRedirect } from "next/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function LegacySeoPage({ params }: Props) {
  const { locale } = await params;
  permanentRedirect(`/${locale}/search-visibility`);
}
