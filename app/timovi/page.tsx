import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://kkborca.rs";

export const metadata: Metadata = {
  title: "Timovi i škola košarke za decu u Borči",

  description:
    "Upoznajte razvojne i takmičarske selekcije KK Borča za dečake i devojčice od 6 do 18 godina, kao i trenere koji vode naše ekipe.",

  alternates: {
    canonical: `${SITE_URL}/timovi`,
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/timovi`,
    siteName: "KK Borča",
    title: "Timovi i škola košarke za decu u Borči | KK Borča",
    description:
      "Upoznajte razvojne i takmičarske selekcije KK Borča za dečake i devojčice od 6 do 18 godina, kao i trenere koji vode naše ekipe.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Timovi i treneri KK Borča",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Timovi i treneri KK Borča",
    description:
      "Razvojne i takmičarske selekcije KK Borča i treneri koji vode naše ekipe.",
    images: ["/og-image.png"],
  },
};

const coaches = [
  {
    name: "Aćim Vujičić",
    role: "Sportski direktor i trener",
    image: "/images/home/Acim.jpg",
    teams: [
      "Razvojna grupa 1",
      "Razvojna grupa 2",
      "Mlađi pioniri U13",
    ],
  },
  {
    name: "Stefan Dinić",
    role: "Trener",
    image: "/images/home/Dimke.jpg",
    teams: ["Pioniri U15"],
  },
  {
    name: "Ivan Spasić",
    role: "Trener",
    image: "/images/home/Spale.jpg",
    teams: [
      "Mlađe pionirke U13",
      "Pionirke U15",
      "Kadetkinje U17",
    ],
  },
  {
    name: "Stefan Milenković",
    role: "Trener",
    image: "/images/home/pepa.jpg",
    teams: ["Kadeti U17", "Juniori U18"],
  },
];

export default function TimoviPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 pb-28 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Timovi i treneri
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Svako dete ima svoj tim. Svaki tim ima ljude koji ga vode.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Od prvih košarkaških koraka do juniorskog uzrasta, naše selekcije
            vode treneri koji prate razvoj svakog deteta kroz rad, disciplinu,
            igru i zajedništvo.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Stručni tim
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Treneri koji vode naše selekcije.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              Svaki trener vodi jednu ili više selekcija, sa jasnim fokusom na
              razvoj igrača i kontinuitet rada kroz uzrasne kategorije.
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-x-16">
            {coaches.slice(0, 2).map((coach) => (
              <article
                key={coach.name}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg"
              >
                <div className="absolute right-6 top-6 h-24 w-24 overflow-hidden rounded-full border-4 border-yellow-400 bg-white shadow-xl md:h-28 md:w-28">
                  <Image
                    src={coach.image}
                    alt={`${coach.name} – trener KK Borča`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                <div className="pr-28 md:pr-32">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                    {coach.role}
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-blue-950">
                    {coach.name}
                  </h3>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                    Vodi selekcije
                  </p>

                  <ul className="mt-4 space-y-3">
                    {coach.teams.map((team) => (
                      <li
                        key={team}
                        className="rounded-2xl bg-white px-5 py-4 text-lg font-bold text-blue-950 shadow-sm"
                      >
                        {team}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto my-16 max-w-md">
            <article className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-2xl">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-yellow-400 bg-white shadow-xl">
                <Image
                  src="/images/home/Bane-predsednik.jpg"
                  alt="Branislav Vujičić – predsednik KK Borča"
                  width={160}
                  height={160}
                  sizes="160px"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
                Predsednik kluba
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Branislav Vujičić
              </h3>

              <p className="mt-3 text-lg font-bold text-blue-100">
                Sportski koordinator
              </p>

              <p className="mx-auto mt-5 max-w-sm leading-7 text-blue-100">
                Koordinira sportski rad kluba i razvoj selekcija kroz
                zajednički sistem rada trenera i igrača.
              </p>
            </article>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16">
            {coaches.slice(2).map((coach) => (
              <article
                key={coach.name}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg"
              >
                <div className="absolute right-6 top-6 h-24 w-24 overflow-hidden rounded-full border-4 border-yellow-400 bg-white shadow-xl md:h-28 md:w-28">
                  <Image
                    src={coach.image}
                    alt={`${coach.name} – trener KK Borča`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                <div className="pr-28 md:pr-32">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                    {coach.role}
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-blue-950">
                    {coach.name}
                  </h3>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                    Vodi selekcije
                  </p>

                  <ul className="mt-4 space-y-3">
                    {coach.teams.map((team) => (
                      <li
                        key={team}
                        className="rounded-2xl bg-white px-5 py-4 text-lg font-bold text-blue-950 shadow-sm"
                      >
                        {team}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Selekcije
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Razvoj od prvog treninga do juniorske košarke.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                Dečaci
              </p>

              <h3 className="mt-4 text-3xl font-black text-blue-950">
                Muške selekcije
              </h3>

              <ul className="mt-7 space-y-4">
                <li className="rounded-2xl bg-slate-100 px-5 py-4 font-bold text-blue-950">
                  Razvojna grupa 1
                </li>
                <li className="rounded-2xl bg-slate-100 px-5 py-4 font-bold text-blue-950">
                  Razvojna grupa 2
                </li>
                <li className="rounded-2xl bg-slate-100 px-5 py-4 font-bold text-blue-950">
                  Mlađi pioniri U13
                </li>
                <li className="rounded-2xl bg-slate-100 px-5 py-4 font-bold text-blue-950">
                  Pioniri U15
                </li>
                <li className="rounded-2xl bg-slate-100 px-5 py-4 font-bold text-blue-950">
                  Kadeti U17
                </li>
                <li className="rounded-2xl bg-slate-100 px-5 py-4 font-bold text-blue-950">
                  Juniori U18
                </li>
              </ul>
            </article>

            <article className="rounded-3xl bg-blue-700 p-8 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
                Devojčice
              </p>

              <h3 className="mt-4 text-3xl font-black">
                Ženske selekcije
              </h3>

              <ul className="mt-7 space-y-4">
                <li className="rounded-2xl bg-white/10 px-5 py-4 font-bold">
                  Mlađe pionirke U13
                </li>
                <li className="rounded-2xl bg-white/10 px-5 py-4 font-bold">
                  Pionirke U15
                </li>
                <li className="rounded-2xl bg-white/10 px-5 py-4 font-bold">
                  Kadetkinje U17
                </li>
              </ul>

              <p className="mt-8 leading-8 text-blue-100">
                Ženske selekcije KK Borča nastupaju u beogradskim
                takmičenjima, dok pionirke U15 učestvuju i u regionalnoj WABA
                ligi.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Treninzi
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Raspored za sezonu biće objavljen pre početka priprema.
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8 shadow-lg">
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