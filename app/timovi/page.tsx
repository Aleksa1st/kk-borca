import Link from "next/link";

const teams = [
  {
    title: "Razvojna grupa",
    age: "6–10 godina",
    badge: "Dečaci i devojčice",
    text: "Prvi susret sa košarkom kroz igru, pokret, koordinaciju, rad sa loptom i razvoj ljubavi prema sportu.",
  },
  {
    title: "Mlađi pioniri / Mlađe pionirke",
    age: "U13",
    badge: "Muške i ženske selekcije",
    text: "Razvoj osnovnih košarkaških elemenata, timske igre, discipline i prvih takmičarskih iskustava.",
  },
  {
    title: "Pioniri / Pionirke",
    age: "U15",
    badge: "Muške i ženske selekcije",
    text: "Napredniji rad na tehnici, taktici, individualnom razvoju i pripremi za ozbiljniji takmičarski nivo.",
  },
  {
    title: "Kadeti / Kadetkinje",
    age: "U17",
    badge: "Muške i ženske selekcije",
    text: "Razvoj odgovornosti, liderstva, takmičarskog karaktera i priprema za viši nivo košarke.",
  },
];

export default function TimoviPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 pb-28 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Timovi
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Svako dete ima svoje mesto u KK Borča.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Od prvih košarkaških koraka do takmičarskih selekcija, radimo sa
            dečacima i devojčicama kroz grupe prilagođene njihovom uzrastu,
            razvoju i ambiciji.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {teams.map((team) => (
            <div
              key={team.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-black text-blue-950">
                  {team.age}
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  {team.badge}
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-black text-blue-950">
                {team.title}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">{team.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Treninzi
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Raspored za sezonu biće objavljen pre početka priprema.
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-lg leading-8 text-slate-700">
              Treninzi se održavaju u tri školske sportske sale na teritoriji
              Borče i u Sportskoj hali Padinska Skela.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Tačan raspored treninga za sezonu 2026/27 biće objavljen pre
              početka sezone.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Ukoliko želite da vaše dete prisustvuje besplatnom probnom
              treningu, kontaktirajte nas putem kontakt forme, telefonom ili
              društvenih mreža. Rado ćemo vas uputiti u odgovarajuću selekciju
              i termin treninga.
            </p>

            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Kontakt za probni trening
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}