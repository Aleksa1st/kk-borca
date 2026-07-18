const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "@id": "https://kkborca.rs/#organization",
  name: "Košarkaški klub Borča",
  alternateName: "KK Borča",
  url: "https://kkborca.rs",
  logo: {
    "@type": "ImageObject",
    url: "https://kkborca.rs/images/logo.png",
  },
  image: "https://kkborca.rs/og-image.jpg",
  description:
    "Košarkaški klub Borča od 1996. godine. Treninzi košarke za dečake i devojčice uzrasta od 8 do 17 godina.",
  foundingDate: "1996",
  sport: "Basketball",
  email: "mailto:kkborca96@gmail.com",
  areaServed: {
    "@type": "Place",
    name: "Borča, Beograd, Srbija",
  },
  sameAs: [],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}