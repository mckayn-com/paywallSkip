import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Paywall Skip - Access News Without Limits",
    template: "%s | Paywall Skip",
  },
  description:
    "Bypass paywalls and access premium content from various news sites and publications for free with Paywall Skip.",
  keywords: [
    "paywall bypass",
    "free news access",
    "article reader",
    "premium content access",
  ],
  authors: [{ name: "Franco Canzani" }],
  creator: "Franco Canzani",
  publisher: "Paywall Skip",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paywallskip.com",
    siteName: "Paywall Skip",
    title: "Paywall Skip - Access News Without Limits",
    description:
      "Access premium news content without paywalls - free and easy.",
    images: [
      {
        url: "https://paywallskip.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Paywall Skip - Access News Without Limits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paywall Skip - Access News Without Limits",
    description:
      "Access premium news content without paywalls - free and easy.",
    images: ["https://paywallskip.com/opengraph-image"],
    creator: "@francocanzani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://paywallskip.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={karla.className}>
        {children}
        <Toaster />
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7474815095793448"
          crossOrigin="anonymous"
        />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Paywall Skip",
              "url": "https://paywallskip.com",
              "description": "Access premium news content without paywalls - free and easy.",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0"
              }
            }
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
