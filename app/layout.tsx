import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

const SITE_URL = "https://kkborca.rs";
const SITE_NAME = "KK Borča";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default: "KK Borča | Košarkaški klub Borča od 1996. godine",
    template: "%s | KK Borča",
  },

  description:
    "KK Borča je košarkaški klub iz Beograda koji od 1996. godine razvija mlade sportiste kroz kvalitetan stručni rad, disciplinu i ljubav prema košarci. Prijavite se za besplatan probni trening.",

  keywords: [
    "KK Borča",
    "Košarkaški klub Borča",
    "Borča",
    "košarka",
    "košarka Beograd",
    "košarka Borča",
    "košarkaški klub Beograd",
    "škola košarke",
    "škola košarke Borča",
    "košarka za decu",
    "košarka za dečake",
    "košarka za devojčice",
    "basketball Belgrade",
    "sportski klub",
    "probni trening",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  category: "sport",

  alternates: {
    canonical: "/",
  },

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

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "KK Borča | Košarkaški klub Borča od 1996. godine",
    description:
      "Košarkaški klub iz Beograda koji od 1996. godine razvija dečake i devojčice kroz stručni rad, sport, timski duh i zajedništvo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KK Borča – košarkaški klub iz Beograda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KK Borča | Košarkaški klub Borča",
    description:
      "Košarkaški klub iz Beograda koji od 1996. godine razvija dečake i devojčice kroz sport, timski duh i zajedništvo.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body>
        <GoogleAnalytics />
        <OrganizationSchema />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}