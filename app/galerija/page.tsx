import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://kkborca.rs";

export const metadata: Metadata = {
  title: "Galerija – treninzi, utakmice i istorija kluba",

  description:
    "Pogledajte fotografije KK Borča kroz tri decenije: prve generacije, treninzi, utakmice, putovanja, uspesi i život kluba od 1996. godine.",

  alternates: {
    canonical: `${SITE_URL}/galerija`,
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/galerija`,
    siteName: "KK Borča",
    title: "Galerija KK Borča | Treninzi, utakmice i istorija kluba",
    description:
      "Pogledajte fotografije KK Borča kroz tri decenije: prve generacije, treninzi, utakmice, putovanja, uspesi i život kluba od 1996. godine.",
    images: [
      {
        url: "/images/home/kkborca-1996.png",
        alt: "Prva generacija igrača KK Borča iz 1996. godine",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Galerija KK Borča",
    description:
      "Fotografije prvih generacija, treninga, utakmica, putovanja i života KK Borča od 1996. godine.",
    images: ["/images/home/kkborca-1996.png"],
  },
};

const galleryPhotos = [
  {
    src: "/images/home/kkborca-1996.png",
    title: "Početak naše priče",
    year: "1996",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/home/Galerija-2008.jpg",
    title: "Generacije koje su rasle zajedno",
    year: "2008",
    size: "",
  },
  {
    src: "/images/home/galerija-2009.jpg",
    title: "Košarka, prijateljstvo i zajedništvo",
    year: "2009",
    size: "",
  },
  {
    src: "/images/home/galerija-1.jpg",
    title: "Treninzi koji grade karakter",
    year: "KK Borča",
    size: "md:col-span-2",
  },
  {
    src: "/images/home/galerija-2.jpg",
    title: "Radost zajedničke igre",
    year: "KK Borča",
    size: "",
  },
  {
    src: "/images/home/galerija-3.jpg",
    title: "Prvi košarkaški koraci",
    year: "KK Borča",
    size: "",
  },
  {
    src: "/images/home/galerija-4.jpg",
    title: "Tim na terenu i van njega",
    year: "KK Borča",
    size: "md:col-span-2",
  },
  {
    src: "/images/home/galerija-5.jpg",
    title: "Uspomene koje ostaju",
    year: "KK Borča",
    size: "",
  },
  {
    src: "/images/home/galerija-6.jpg",
    title: "Pobede koje slavimo zajedno",
    year: "KK Borča",
    size: "",
  },
  {
    src: "/images/home/galerija-7.jpg",
    title: "Više od košarke",
    year: "KK Borča",
    size: "md:col-span-2",
  },
];

export default function GalerijaPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 pb-28 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Galerija
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Trideset godina u fotografijama.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Treninzi, utakmice, putovanja, prijateljstva i generacije dece koje
            su zajedno odrastale u KK Borča.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Naše uspomene
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Svaka fotografija priča deo naše priče.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              Od prvih generacija do današnjih selekcija, kroz klub su prošli
              ljudi, prijateljstva i trenuci koji se pamte ceo život.
            </p>
          </div>

          <div className="mt-16 grid auto-rows-[280px] gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryPhotos.map((photo) => (
              <article
                key={`${photo.src}-${photo.title}`}
                className={`group relative overflow-hidden rounded-3xl bg-slate-200 shadow-lg ${photo.size}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                    {photo.year}
                  </p>

                  <h2 className="mt-2 text-2xl font-black">{photo.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Jedan klub. Hiljade priča.
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Najlepše uspomene nastaju zajedno.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            Košarka nas okuplja, ali su prijateljstva, zajednički trenuci i
            odrastanje ono što ostaje zauvek.
          </p>
        </div>
      </section>
    </main>
  );
}