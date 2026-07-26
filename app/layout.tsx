import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kkborca.rs"),

  title: {
    default: "KK Borča | Košarkaški klub Borča od 1996. godine",
    template: "%s | KK Borča",
  },

  description:
    "KK Borča je košarkaški klub iz Beograda koji od 1996. godine razvija mlade sportiste kroz kvalitetan stručni rad, disciplinu i ljubav prema košarci. Prijavite se za besplatan probni trening.",

  keywords: [
    "KK Borča",
    "Borča",
    "košarka",
    "košarkaški klub",
    "škola košarke",
    "košarka za decu",
    "basketball academy",
    "basketball Belgrade",
    "sportski klub",
    "probni trening",
  ],

  authors: [
    {
      name: "KK Borča",
    },
  ],

  creator: "KK Borča",
  publisher: "KK Borča",

  alternates: {
    canonical: "https://www.kkborca.rs",
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.kkborca.rs",
    siteName: "KK Borča",
    title: "KK Borča | Košarkaški klub Borča od 1996. godine",
    description:
      "Pridružite se jednom od najdugovečnijih košarkaških klubova u Borči. Više od 160 aktivnih članova, stručni treneri i besplatan probni trening.",
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
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
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