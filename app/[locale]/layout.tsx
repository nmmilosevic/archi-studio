import type { Metadata } from "next";
import { Fraunces, Inter, DM_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "@/app/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: false,
});

const LOCALES = ["en", "es", "fr"];

export const metadata: Metadata = {
  metadataBase: new URL("https://formacosta.com"),
  title: {
    default: "FORMA COSTA — Architecture Website Redesigns Costa del Sol",
    template: "%s | FORMA COSTA",
  },
  description:
    "Architecture website redesigns for architecture and interior design studios on the Costa del Sol.",
  icons: {
    icon: "/favicon.ico",
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

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${inter.variable} ${dmMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
