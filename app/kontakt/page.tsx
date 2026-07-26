import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Kontakt KK Borča | Probni trening, članstvo i partnerstva",
  },

  description:
    "Kontaktirajte KK Borča za probni trening, članstvo, partnerstva ili informacije o treninzima. Telefon, e-mail, lokacije treninga i kontakt forma na jednom mestu.",

  alternates: {
    canonical: "https://www.kkborca.rs/kontakt",
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.kkborca.rs/kontakt",
    siteName: "KK Borča",
    title: "Kontakt KK Borča | Probni trening, članstvo i partnerstva",
    description:
      "Kontaktirajte KK Borča za probni trening, članstvo, partnerstva ili informacije o treninzima. Telefon, e-mail, lokacije treninga i kontakt forma na jednom mestu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kontakt KK Borča",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kontakt KK Borča",
    description:
      "Kontaktirajte KK Borča za probni trening, članstvo, partnerstva i informacije o treninzima.",
    images: ["/og-image.png"],
  },
};

const trainingLocations = [
  {
    name: "OŠ Rade Drainac",
    area: "Borča",
    mapsUrl: "https://maps.app.goo.gl/hW9jSMqdAEXogJDt5",
  },
  {
    name: "OŠ Stevan Sremac",
    area: "Borča",
    mapsUrl: "https://maps.app.goo.gl/bRGwCmquxyP9epcz8",
  },
  {
    name: "OŠ Jovan Ristić",
    area: "Borča",
    mapsUrl: "https://maps.app.goo.gl/ybiwoeWTHD95987M9",
  },
  {
    name: "Sportska hala Padinska Skela",
    area: "Padinska Skela",
    mapsUrl: "https://maps.app.goo.gl/LTxKqtgvbiWyoEur8",
  },
];

export default function KontaktPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 pb-28 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Kontakt
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Razgovarajmo.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Za probni trening, članstvo, partnerstvo ili bilo koje pitanje o
            radu kluba, javite nam se. Rado ćemo vam pomoći.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+381642259373"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
              <Phone size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-blue-950">
              Telefon
            </h2>

            <p className="mt-4 text-lg font-bold text-blue-700">
              064 225 9373
            </p>
          </a>

          <a
            href="mailto:kkborca96@gmail.com"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
              <Mail size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-blue-950">
              Email
            </h2>

            <p className="mt-4 break-all text-lg font-bold text-blue-700">
              kkborca96@gmail.com
            </p>
          </a>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
              <MapPin size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-blue-950">
              Adresa
            </h2>

            <p className="mt-4 text-lg font-semibold leading-7 text-slate-700">
              Vizeljska 1
              <br />
              11211 Borča
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
              <Building2 size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-blue-950">
              Podaci kluba
            </h2>

            <p className="mt-4 text-lg font-semibold text-slate-700">
              PIB: 102680006
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Sportske sale
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Treniramo na četiri lokacije.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              Treninzi se održavaju u tri školske sportske sale u Borči i u
              Sportskoj hali Padinska Skela.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {trainingLocations.map((location) => (
              <a
                key={location.name}
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                      {location.area}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-blue-950">
                      {location.name}
                    </h3>

                    <p className="mt-4 text-slate-600">
                      Otvori lokaciju u Google mapama
                    </p>
                  </div>

                  <ExternalLink
                    size={24}
                    className="shrink-0 text-blue-700 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-blue-700 px-8 py-8 text-white">
            <p className="text-lg leading-8">
              Tačan raspored treninga za sezonu 2026/27 biće objavljen pre
              početka sezone. Za informacije o odgovarajućoj selekciji i
              probnom treningu, kontaktirajte klub telefonom ili putem forme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Pošaljite poruku
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-blue-950 md:text-5xl">
              Kako možemo da vam pomognemo?
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-700">
              Izaberite temu i napišite poruku. Odgovorićemo vam u najkraćem
              mogućem roku.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <h3 className="text-xl font-black text-blue-950">
                  Probni trening i članstvo
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Pomoći ćemo vam da pronađete odgovarajuću grupu za uzrast
                  vašeg deteta.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black text-blue-950">
                  Partnerstvo
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Razgovarajmo o saradnji koja podržava razvoj mladih sportista.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black text-blue-950">
                  Opšte informacije
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Za pitanja o ekipama, takmičenjima i aktivnostima kluba.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
              Društvene mreže
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Pratite život KK Borča.
            </h2>

            <p className="mt-6 text-xl leading-9 text-blue-100">
              Fotografije, najave, rezultati i priče iz svih selekcija kluba.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row lg:justify-end">
            <a
              href="https://www.instagram.com/kkborca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-black text-blue-700 transition hover:bg-yellow-300 hover:text-blue-950"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-current text-sm font-black">
                IG
              </span>
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/1CwBRnqDFt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 font-black text-white transition hover:bg-white hover:text-blue-700"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-current text-lg font-black">
                f
              </span>
              Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Vidimo se na treningu.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            Prvi trening može biti početak velikog sportskog putovanja.
          </p>

          <Link
            href="/postani-clan"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Prijavite dete
          </Link>
        </div>
      </section>
    </main>
  );
}