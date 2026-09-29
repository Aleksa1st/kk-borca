import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://kkborca.rs";

const WABA_SCHEDULE_URL =
  "https://waba-league.com/season/schedule-3/?leagueId=32033";

const WABA_STANDINGS_URL =
  "https://waba-league.com/season/standings/?leagueId=32033";

const WABA_ARTICLE_URL =
  "https://waba-league.com/waba-u15-sa-17-klubova/";

export const metadata: Metadata = {
  title: "Takmičenja i rezultati – Beogradske i WABA lige",

  description:
    "Pratite takmičenja, raspored i rezultate selekcija KK Borča u Beogradskim ligama i regionalnoj WABA U15 ligi u sezoni 2026/27.",

  alternates: {
    canonical: `${SITE_URL}/takmicenja`,
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/takmicenja`,
    siteName: "KK Borča",
    title:
      "Takmičenja i rezultati KK Borča | Beogradske lige i WABA U15",
    description:
      "Takmičenja, raspored i rezultati selekcija KK Borča u Beogradskim ligama i regionalnoj WABA U15 ligi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Takmičenja i rezultati selekcija KK Borča",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Takmičenja i rezultati KK Borča",
    description:
      "Pratite selekcije KK Borča u Beogradskim ligama i regionalnoj WABA U15 ligi.",
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

const season2026Boys = [
  "Mlađi pioniri U13",
  "Pioniri U15",
  "Kadeti U17",
  "Juniori U18",
];

const season2026Girls = [
  "Mlađe pionirke U13 – Beogradska liga",
  "Pionirke U15 – Kvalitetna Beogradska liga",
  "Pionirke U15 – WABA regionalna liga",
  "Kadetkinje U17 – Beogradska liga",
];

const wabaCountries = [
  "Italija",
  "Slovenija",
  "Hrvatska",
  "Bosna i Hercegovina",
  "Crna Gora",
  "Srbija",
];

export default function TakmicenjaPage() {
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
            Selekcije KK Borča učestvuju u Beogradskim ligama, regionalnoj
            WABA ligi i turnirima, sa ciljem da naši igrači i igračice
            stiču iskustvo, samopouzdanje i ljubav prema igri.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WABA_SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-yellow-400 px-8 py-4 text-center font-black text-blue-950 transition hover:bg-yellow-300"
            >
              WABA U15 raspored i rezultati ↗
            </a>

            <a
              href={WABA_STANDINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-white px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-blue-950"
            >
              WABA U15 tabela ↗
            </a>
          </div>
        </div>
      </section>

      {/* AKTUELNA SEZONA */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Sezona 2026/27
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black text-blue-950 md:text-5xl">
            Nova sezona, novi izazovi.
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            U sezoni 2026/27 selekcije KK Borča nastupaju u više uzrasnih
            kategorija. Poseban međunarodni izazov očekuje pionirke U15,
            koje predstavljaju klub u regionalnoj WABA ligi.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl font-black text-blue-950">
                  Dečaci
                </h3>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
                  2026/27
                </span>
              </div>

              <ul className="mt-7 space-y-4">
                {season2026Boys.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-semibold text-slate-700"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-blue-700 p-8 text-white shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-3xl font-black">
                  Devojčice
                </h3>

                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-black text-yellow-300">
                  2026/27
                </span>
              </div>

              <ul className="mt-7 space-y-4">
                {season2026Girls.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-semibold text-blue-50"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-300"
                      aria-hidden="true"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WABA U15 */}

      <section className="bg-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
                  WABA U15
                </p>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-100">
                  Sezona 2026/27
                </span>
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-black md:text-5xl">
                Pionirke KK Borča na regionalnoj sceni.
              </h2>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-blue-100">
                Pionirke KK Borča u sezoni 2026/27 nastupaju u regionalnoj
                WABA U15 ligi, koja okuplja 17 klubova iz šest zemalja.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
                Međunarodne utakmice pružaju našim igračicama priliku da
                odmere snage sa ekipama iz regiona, stiču dragoceno
                takmičarsko iskustvo i predstavljaju KK Borča i Srbiju na
                regionalnoj košarkaškoj sceni.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={WABA_SCHEDULE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-yellow-400 p-6 text-blue-950 transition hover:bg-yellow-300"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em]">
                    Zvanični WABA podaci
                  </p>

                  <p className="mt-2 text-xl font-black">
                    Raspored i rezultati ↗
                  </p>
                </a>

                <a
                  href={WABA_STANDINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white p-6 text-blue-950 transition hover:bg-blue-50"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
                    WABA U15
                  </p>

                  <p className="mt-2 text-xl font-black">
                    Aktuelna tabela ↗
                  </p>
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/vesti/pionirke-pocinju-waba-u15-2026"
                  className="inline-block rounded-full border-2 border-yellow-300 px-7 py-3 text-center font-black text-yellow-300 transition hover:bg-yellow-300 hover:text-blue-950"
                >
                  Nova WABA U15 sezona
                </Link>

                <Link
                  href="/vesti/pionirke-waba"
                  className="inline-block rounded-full border-2 border-blue-300 px-7 py-3 text-center font-black text-blue-100 transition hover:bg-blue-100 hover:text-blue-950"
                >
                  Više o učešću KK Borča
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 text-blue-950 shadow-2xl md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">
                WABA U15 2026/27
              </p>

              <div className="mt-5 flex items-end gap-4">
                <p className="text-7xl font-black text-blue-700">
                  17
                </p>

                <p className="pb-2 text-xl font-black">
                  klubova
                </p>
              </div>

              <p className="mt-3 text-lg leading-8 text-slate-600">
                Regionalno U15 takmičenje okuplja klubove iz šest zemalja.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {wabaCountries.map((country) => (
                  <div
                    key={country}
                    className="rounded-2xl bg-slate-100 px-5 py-4 font-bold text-slate-700"
                  >
                    {country}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <a
                  href={WABA_ARTICLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-blue-700 transition hover:text-blue-900"
                >
                  Zvanična WABA objava o U15 ligi ↗
                </a>
              </div>
            </div>
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