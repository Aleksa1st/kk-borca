import Image from "next/image";
import Link from "next/link";

const milestones = [
  {
    year: "1996",
    title: "Osnivanje KK Borča",
    text: "Klub je osnovan sa idejom da deci iz Borče pruži mesto za sport, razvoj, druženje i odrastanje.",
  },
  {
    year: "2000+",
    title: "Rast novih generacija",
    text: "Klub nastavlja da okuplja dečake i devojčice i razvija mlađe takmičarske selekcije.",
  },
  {
    year: "2024",
    title: "Uspeh ženskih selekcija",
    text: "Devojčice KK Borča ostvaruju zapažene rezultate i potvrđuju kontinuitet rada sa mladim igračicama.",
  },
  {
    year: "2026",
    title: "Trideset godina kluba",
    text: "Više od 2.500 dece prošlo je kroz KK Borča, dok klub danas okuplja više od 160 aktivnih članova.",
  },
];

const values = [
  {
    title: "Košarka",
    text: "Razvijamo tehniku, razumevanje igre, radne navike i ljubav prema sportu.",
  },
  {
    title: "Karakter",
    text: "Disciplina, odgovornost, poštovanje i timski duh važni su koliko i rezultat.",
  },
  {
    title: "Prijateljstvo",
    text: "Treninzi, utakmice i putovanja stvaraju uspomene i odnose koji ostaju.",
  },
  {
    title: "Zajednica",
    text: "Klub pripada Borči i nastoji da bude mesto okupljanja dece, roditelja i prijatelja sporta.",
  },
];

export default function OKlubuPage() {
  return (
    <main>
      <section className="relative min-h-[75vh] overflow-hidden px-6 pb-24 pt-48 text-white lg:pt-52">
        <Image
          src="/images/home/branislav.jpg"
          alt="Branislav Vujičić sa igračima KK Borča"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/45 to-transparent" />

        <div className="relative mx-auto flex min-h-[45vh] max-w-7xl items-center">
          <div className="max-w-4xl">
            <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
              O nama
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Trideset godina stvaranja generacija.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
              Od 1996. godine razvijamo dečake i devojčice kroz košarku,
              prijateljstvo, odgovornost i zajedništvo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/home/karakter.jpg"
              alt="Rad sa mladim igračima KK Borča"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Branislav Vujičić
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-blue-950 md:text-5xl">
              Trener koji je izabrao dug put.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-700">
              Branislav Vujičić verovao je da najveća pobeda nije samo osvojeni
              pehar, već dete koje uz košarku postane odgovoran, disciplinovan i
              dobar čovek.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Iz te ideje nastao je KK Borča — klub koji već tri decenije
              okuplja decu, trenere, roditelje i generacije prijatelja košarke.
            </p>

            <p className="mt-6 text-xl font-black leading-9 text-blue-950">
              Naša najveća pobeda su ljudi koje zajedno gradimo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Istorija kluba
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Od prve generacije do današnje akademije.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <article
                key={milestone.year}
                className="rounded-3xl bg-white p-8 text-blue-950 shadow-xl"
              >
                <p className="text-4xl font-black text-blue-700">
                  {milestone.year}
                </p>

                <h3 className="mt-5 text-2xl font-black">
                  {milestone.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {milestone.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Naše vrednosti
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Više od košarke od prvog dana.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              Rezultat je važan, ali razvoj deteta ostaje najvažniji cilj našeg
              rada.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >
                <h3 className="text-2xl font-black text-blue-950">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl">
            <Image
              src="/images/home/kkborca-1996.png"
              alt="Počeci KK Borča"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl">
            <Image
              src="/images/home/Galerija-2008.jpg"
              alt="Generacije KK Borča"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl">
            <Image
              src="/images/home/devojcice-nas-ponos.jpg"
              alt="Današnje generacije KK Borča"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Nova generacija
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Postanite deo priče koja traje od 1996. godine.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            Pozivamo dečake i devojčice uzrasta od 6 do 17 godina da upoznaju
            klub i dođu na besplatan probni trening.
          </p>

          <Link
            href="/postani-clan"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Postani član
          </Link>
        </div>
      </section>
    </main>
  );
}