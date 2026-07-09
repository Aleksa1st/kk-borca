import Link from "next/link";

const benefits = [
  "30 godina tradicije",
  "Stručni treneri",
  "Bezbedno okruženje",
  "Nova prijateljstva",
  "Rad sa dečacima i devojčicama",
  "Besplatan probni trening",
];

const steps = [
  "Kontaktirajte nas",
  "Dođite na probni trening",
  "Postanite deo KK Borča",
];

const faqs = [
  {
    q: "Da li dete može da dođe ako nikada nije treniralo košarku?",
    a: "Da. Razvojna grupa je namenjena deci koja tek prave prve sportske korake.",
  },
  {
    q: "Šta dete treba da ponese na probni trening?",
    a: "Sportsku opremu, patike za salu, flašicu vode i dobru energiju.",
  },
  {
    q: "Kada će biti objavljen raspored treninga?",
    a: "Tačan raspored za sezonu 2026/27 biće objavljen pre početka sezone.",
  },
];

export default function PostaniClanPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-blue-950 px-6 py-32 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/home/hero.jpg"
            alt="Deca KK Borča"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Postani član
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Prvi trening može biti početak velikog putovanja.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Pozivamo dečake i devojčice uzrasta od 6 do 17 godina da dođu na
            besplatan probni trening i upoznaju KK Borča.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Prijavi dete
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-blue-950 md:text-5xl">
            Zašto roditelji biraju KK Borča?
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="text-2xl font-black text-blue-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Kako izgleda prijava?
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Tri jednostavna koraka.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white p-8 shadow-lg">
                <p className="text-5xl font-black text-yellow-400">
                  0{index + 1}
                </p>
                <h3 className="mt-6 text-2xl font-black text-blue-950">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Važno za roditelje
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Sve što treba da znate pre prvog treninga.
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-3xl bg-slate-100 p-7">
                <h3 className="text-xl font-black text-blue-950">{item.q}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Vidimo se na treningu!
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-blue-100">
            Javite nam se i rado ćemo vas uputiti u odgovarajuću selekciju i
            termin probnog treninga.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Kontakt za probni trening
          </Link>
        </div>
      </section>
    </main>
  );
}