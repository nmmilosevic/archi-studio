import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CookieProvider } from "@/components/cookies/CookieProvider";
import { GlobalJsonLd } from "@/components/seo/GlobalJsonLd";
import {
  PREFERRED_SEO_DESCRIPTION,
  STUDIO_SEO,
} from "@/lib/constants";
import { SITE_URL } from "@/lib/site";
import "@/app/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-geist-sans",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: true,
  preload: true,
});

const LOCALES = ["en", "es", "fr"];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "REFRAME Studio | Architecture & Interior Design Website Design",
    template: "%s",
  },
  description: PREFERRED_SEO_DESCRIPTION,
  applicationName: STUDIO_SEO.name,
  keywords: [
    "architecture website design",
    "architecture studio website",
    "interior design website",
    "interior design studio website",
    "landscape architecture website",
    "architecture portfolio website",
    "architecture website redesign",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg?v=5`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg?v=5`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg?v=5`,
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={geistSans.variable}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg?v=5`} />
        <link
          rel="shortcut icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg?v=5`}
        />
      </head>
      <body>
        <GlobalJsonLd />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CookieProvider>{children}</CookieProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
