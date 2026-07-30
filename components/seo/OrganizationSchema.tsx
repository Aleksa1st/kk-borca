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

  image: "https://kkborca.rs/og-image.png",

  description:
    "Košarkaški klub Borča od 1996. godine. Treninzi košarke za dečake i devojčice uzrasta od 6 do 17 godina.",

  foundingDate: "1996",

  sport: "Basketball",

  email: "kkborca96@gmail.com",

  telephone: "+381642259373",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Vizeljska 1",
    postalCode: "11211",
    addressLocality: "Borča",
    addressRegion: "Beograd",
    addressCountry: "RS",
  },

  areaServed: {
    "@type": "Place",
    name: "Borča, Beograd, Srbija",
  },

  sameAs: [
    "https://www.instagram.com/kkborca/",
    "https://www.facebook.com/share/1CwBRnqDFt/",
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}