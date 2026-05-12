import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { GlobalJsonLd } from "@/components/seo/GlobalJsonLd";
import { SITE_URL } from "@/lib/site";
import "@/app/globals.css";

const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID === ""
    ? undefined
    : (process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-W7V3NLV5");

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
    default: "Reframe Studio | Architecture & Interior Studio Websites",
    template: "%s",
  },
  description:
    "Premium websites for architecture and interior design studios. Editorial design, fast performance, mobile-first UX, and scalable project systems crafted for modern studios.",
  applicationName: "Reframe Studio",
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
        {GTM_ID ? (
          <>
            {/* Google Tag Manager */}
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            {/* End Google Tag Manager */}
          </>
        ) : null}
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
        {GTM_ID ? (
          <>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
            {/* End Google Tag Manager (noscript) */}
          </>
        ) : null}
        <GlobalJsonLd />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
