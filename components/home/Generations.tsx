import Link from "next/link";

export default function Generations() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/branislav.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-950/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
        <div className="max-w-4xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            30 godina tradicije
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
            Mi ne gradimo samo igrače.
            <br />
            Gradimo generacije.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-blue-100 md:text-2xl">
            Više od 2.500 dečaka i devojčica nosilo je dres KK Borča tokom
            proteklih 30 godina.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            Neki su postali vrhunski sportisti. Svi su poneli vrednosti koje
            ostaju za ceo život.
          </p>

          <Link
            href="/o-klubu"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-8 py-4 font-bold text-blue-950 shadow-lg transition hover:bg-yellow-300"
          >
            Upoznajte našu priču
          </Link>
        </div>
      </div>
    </section>
  );
}