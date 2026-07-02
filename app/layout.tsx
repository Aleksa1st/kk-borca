import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KK Borča",
  description: "Više od košarke. Omladinski košarkaški klub iz Borče.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}