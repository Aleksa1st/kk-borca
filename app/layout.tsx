import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://kkborca.rs"),

  title: {
    default: "KK Borča | Košarkaški klub Borča od 1996. godine",
    template: "%s | KK Borča",
  },

  description:
    "KK Borča je košarkaški klub iz Beograda koji od 1996. godine razvija mlade sportiste kroz kvalitetan stručni rad, disciplinu i ljubav prema košarci. Prijavite se za besplatan probni trening.",

  keywords: [
    "KK Borča",
    "Borča",
    "Košarka",
    "Košarkaški klub",
    "Škola košarke",
    "Košarka za decu",
    "Basketball Academy",
    "Basketball Belgrade",
    "Sportski klub",
    "Probni trening",
  ],

  authors: [
    {
      name: "KK Borča",
    },
  ],

  creator: "KK Borča",
  publisher: "KK Borča",

  alternates: {
    canonical: "https://kkborca.rs",
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://kkborca.rs",
    siteName: "KK Borča",

    title: "KK Borča | Košarkaški klub Borča od 1996. godine",

    description:
      "Pridružite se jednom od najdugovečnijih košarkaških klubova u Borči. Više od 160 aktivnih članova, stručni treneri i besplatan probni trening.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KK Borča",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KK Borča",
    description: "Košarkaški klub Borča od 1996. godine.",
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
        <OrganizationSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}