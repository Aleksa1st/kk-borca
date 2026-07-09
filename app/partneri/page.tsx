import Link from "next/link";

const impactStats = [
  { number: "160+", label: "aktivne dece" },
  { number: "25", label: "treninga nedeljno" },
  { number: "8", label: "takmičarskih selekcija" },
  { number: "30", label: "godina tradicije" },
];

const packages = [
  {
    title: "Partner razvoja",
    text: "Podrška treninzima, opremi i svakodnevnom radu sa decom.",
  },
  {
    title: "Partner zajednice",
    text: "Podrška turnirima, humanitarnim akcijama i događajima u Borči.",
  },
  {
    title: "Digitalni partner",
    text: "Podrška razvoju Borča Basketball Academy platforme.",
  },
  {
    title: "Generalni partner",
    text: "Strateška podrška dugoročnom razvoju kluba i mladih generacija.",
  },
];

export default function PartneriPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Partneri
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Uložite u budućnost dece.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            KK Borča ne traži samo sponzore. Tražimo partnere koji veruju da
            sport može da oblikuje zdraviju, odgovorniju i povezaniju zajednicu.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-9 py-4 font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Postanite partner
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="border-l-4 border-yellow-400 pl-6">
                <p className="text-5xl font-black text-blue-700">
                  {stat.number}
                </p>
                <p className="mt-3 font-bold uppercase tracking-wide text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Zašto podržati KK Borča?
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Vaša podrška postaje deo dečijeg odrastanja.
            </h2>

            <p className="mt-6 text-xl leading-9 text-slate-700">
              Svaki trening, svako putovanje, svaka lopta, svaki dres i svaka
              utakmica deo su šire priče: stvaranja zdravih navika, timskog duha
              i zajednice u kojoj deca rastu uz prave vrednosti.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-black text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Postanite partner u razvoju budućih generacija.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            Zajedno možemo omogućiti još bolje uslove za više od 160 dece koja
            svake nedelje treniraju, uče i odrastaju kroz košarku.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </main>
  );
}