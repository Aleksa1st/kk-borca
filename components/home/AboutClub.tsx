import Image from "next/image";
import Link from "next/link";

export default function AboutClub() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Image
            src="/images/home/branislav.jpg"
            alt="Branislav Vujičić sa dečacima KK Borča"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            O KLUBU
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-blue-950 md:text-6xl">
            Priča koja traje tri decenije.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-700">
            Krajem osamdesetih godina, kada su mnogi klubovi nastajali i
            nestajali u potrazi za brzim rezultatima, jedan trener je doneo
            drugačiju odluku.
          </p>

          <p className="mt-8 text-xl leading-9 text-slate-700">
            Branislav Vujičić verovao je da najveća pobeda nije osvojeni pehar,
            već dete koje uz košarku postane dobar čovek.
          </p>

          <p className="mt-8 text-xl leading-9 text-slate-700">
            Tako je 1996. godine nastao KK Borča — klub koji danas okuplja više
            od 160 dečaka i devojčica, razvija mlade igrače, trenere i
            prijateljstva koja traju ceo život.
          </p>

          <p className="mt-8 text-xl leading-9 text-slate-700">
            Naša najveća pobeda nisu medalje.
          </p>

          <p className="mt-2 text-xl font-bold leading-9 text-blue-950">
            Naša najveća pobeda su ljudi koje zajedno gradimo.
          </p>

          <Link
            href="/o-klubu"
            className="mt-10 inline-block rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
          >
            Pročitaj našu priču
          </Link>
        </div>
      </div>
    </section>
  );
}