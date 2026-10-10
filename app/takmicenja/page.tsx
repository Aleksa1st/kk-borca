import type { Metadata } from "next";
import Link from "next/link";
import CompetitionCard from "@/components/competitions/CompetitionCard";
import { getActiveCompetitions } from "@/data/competitions";

const SITE_URL = "https://kkborca.rs";

export const metadata: Metadata = {
  title: "Takmičenja i rezultati – KK Borča",

  description:
    "Pratite aktuelna takmičenja naših selekcija i pristupite zvaničnim tabelama, rezultatima i rasporedima.",

  alternates: {
    canonical: `${SITE_URL}/takmicenja`,
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/takmicenja`,
    siteName: "KK Borča",
    title: "Takmičenja i rezultati KK Borča",
    description:
      "Pratite aktuelna takmičenja naših selekcija i pristupite zvaničnim tabelama, rezultatima i rasporedima.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Takmičenja i rezultati KK Borča",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Takmičenja i rezultati KK Borča",
    description:
      "Aktuelna takmičenja i zvanični rezultati selekcija KK Borča.",
    images: ["/og-image.png"],
  },
};

const season2025 = [
  "Mlađi pioniri U13 – Beogradska liga",
  "Pioniri U15 – Beogradska liga",
  "Kadeti U17 – prvi u grupi 5",
  "Juniori U18 – Beogradska liga",
  "Pionirke U15 – dva tima u Beogradskoj ligi",
  "Pionirke U15 – jedan tim 1/4 finale, drugi tim 1/8 finale",
];

export default function TakmicenjaPage() {
  const activeCompetitions = getActiveCompetitions();

  return (
    <main>
      {/* HERO */}
      <section className="bg-blue-950 px-6 pb-28 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Takmičenja i rezultati
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Takmičarski duh, razvoj i iskustvo.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Pratite aktuelna takmičenja naših selekcija i pristupite
            zvaničnim tabelama, rezultatima i rasporedima.
          </p>
        </div>
      </section>

      {/* AKTUELNA TAKMIČENJA */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Sezona 2026/27
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black text-blue-950 md:text-5xl">
            Aktuelna takmičenja
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            Na jednom mestu pratite takmičenja u kojima KK Borča trenutno
            učestvuje. Za tabelu, rezultate i zvanični raspored svakog
            takmičenja koristite direktan link ka organizatoru.
          </p>

          {activeCompetitions.length > 0 ? (
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {activeCompetitions.map((competition) => (
                <CompetitionCard
                  key={competition.id}
                  competition={competition}
                />
              ))}
            </div>
          ) : (
            <div className="mt-14 rounded-3xl bg-slate-100 p-10 text-center">
              <h3 className="text-2xl font-black text-blue-950">
                Takmičenja uskoro
              </h3>

              <p className="mt-3 text-lg text-slate-600">
                Podaci o aktuelnim takmičenjima biće uskoro dostupni.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ZVANIČNI PODACI */}
      <section className="bg-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
              Zvanični podaci
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Tabela, rezultati i raspored direktno kod organizatora.
            </h2>

            <p className="mt-6 text-xl leading-9 text-blue-100">
              Rezultate i plasmane nećemo ručno održavati na sajtu KK
              Borča. Kada je za određeno takmičenje dostupan zvaničan
              izvor, naša stranica vodi direktno do njega, kako biste
              uvek imali pristup najnovijim i zvanično objavljenim
              podacima.
            </p>
          </div>
        </div>
      </section>

      {/* PRETHODNA SEZONA */}
      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Sezona 2025/26
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black text-blue-950 md:text-5xl">
            Rezultati koji pokazuju kontinuitet rada.
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            Prethodna sezona donela je veliki broj takmičarskih utakmica
            našim mlađim selekcijama i nastavak razvoja igrača i igračica
            kroz ligaška takmičenja.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {season2025.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-lg font-bold leading-7 text-blue-950">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAZVOJNA GRUPA */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Razvojna grupa
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Prvi koraci pre prvih rezultata.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            U sezoni 2026/27 klub ima dve razvojne grupe za decu uzrasta
            od 6 do 10 godina. Fokus je na igri, motorici, koordinaciji,
            timskom duhu i ljubavi prema košarci.
          </p>

          <Link
            href="/postani-clan"
            className="mt-9 inline-block rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Prijavi se za besplatan trening
          </Link>
        </div>
      </section>
    </main>
  );
}