import Link from "next/link";

const wabaArticle =
  "https://waba-league.com/waba-u15-sa-17-klubova/";

const newsItems = [
  {
    category: "Nova sezona",
    title: "Pripreme za sezonu 2026/27",
    description:
      "KK Borča priprema dečačke i ženske selekcije za novu sezonu. Tačni termini treninga i raspored takmičenja biće objavljeni pre početka priprema.",
    date: "Sezona 2026/27",
  },
  {
    category: "Devojčice",
    title: "Pionirke KK Borča u regionalnoj WABA ligi",
    description:
      "Naše pionirke U15 nastupaće u regionalnoj WABA ligi, u kojoj učestvuje 17 klubova iz šest zemalja.",
    date: "Najava sezone",
    externalUrl: wabaArticle,
  },
  {
    category: "Rezultati",
    title: "Uspešna sezona mlađih pionirki",
    description:
      "Dve U13 ekipe KK Borča nastupale su u Beogradskoj ligi. Jedna ekipa stigla je do četvrtfinala, a druga do osmine finala.",
    date: "Sezona 2025/26",
  },
  {
    category: "Klub",
    title: "Trideset godina stvaranja generacija",
    description:
      "Od osnivanja 1996. godine kroz KK Borča prošlo je više od 2.500 dečaka i devojčica.",
    date: "1996–2026",
  },
];

export default function VestiPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Vesti
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Priče sa terena i iz života kluba.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Pratite najnovije informacije o ekipama, takmičenjima, rezultatima,
            putovanjima i aktivnostima KK Borča.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-blue-700 text-white shadow-xl">
              <img
                src="/images/home/devojcice-nas-ponos.jpg"
                alt="Pionirke KK Borča"
                className="h-80 w-full object-cover"
              />

              <div className="p-8">
                <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
                  Izdvajamo
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Pionirke KK Borča u regionalnoj WABA U15 ligi
                </h2>

                <p className="mt-5 leading-8 text-blue-100">
                  U sezoni 2026/27 naše pionirke U15 nastupaće u regionalnom
                  takmičenju sa 17 klubova iz šest zemalja.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/takmicenja"
                    className="rounded-full bg-yellow-400 px-7 py-3 text-center font-black text-blue-950 transition hover:bg-yellow-300"
                  >
                    Pogledaj takmičenja
                  </Link>

                  <a
                    href={wabaArticle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-white px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-blue-700"
                  >
                    WABA članak ↗
                  </a>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-bold uppercase tracking-[0.2em] text-blue-700">
                      {item.category}
                    </p>

                    <p className="text-sm font-semibold text-slate-500">
                      {item.date}
                    </p>
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-blue-950">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {item.externalUrl && (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block font-bold text-blue-700 transition hover:text-blue-900"
                    >
                      Pročitaj više na WABA sajtu ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-blue-950">
            Nova sezona, nove priče.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Tokom sezone ova stranica će donositi najave utakmica, rezultate,
            izveštaje, fotografije i informacije iz svih selekcija kluba.
          </p>
        </div>
      </section>
    </main>
  );
}