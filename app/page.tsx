import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutClub from "@/components/home/AboutClub";
import Statistics from "@/components/home/Statistics";
import Generations from "@/components/home/Generations";
import MoreThanBasketball from "@/components/home/MoreThanBasketball";
import ClubLife from "@/components/home/ClubLife";
import WabaHighlight from "@/components/home/WabaHighlight";
import ParentsChoose from "@/components/home/ParentsChoose";
import JoinClub from "@/components/home/JoinClub";
import PartnersPreview from "@/components/home/PartnersPreview";

const SITE_URL = "https://kkborca.rs";

export const metadata: Metadata = {
  title: "Košarkaški klub Borča od 1996. godine",

  description:
    "KK Borča je košarkaški klub iz Beograda koji od 1996. godine razvija dečake i devojčice kroz stručan rad, sport, timski duh i zajedništvo. Prijavite dete za besplatan probni trening.",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: "KK Borča",
    title: "KK Borča | Košarkaški klub Borča od 1996. godine",
    description:
      "Košarkaški klub iz Beograda koji od 1996. godine razvija mlade košarkaše i košarkašice kroz stručan rad, sport, timski duh i zajedništvo.",
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
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutClub />
      <Statistics />
      <Generations />
      <MoreThanBasketball />
      <ClubLife />
      <WabaHighlight />
      <ParentsChoose />
      <JoinClub />
      <PartnersPreview />
    </main>
  );
}