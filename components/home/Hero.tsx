import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/hero.jpg')",
        }}
      />

      {/* Darker overlay */}
      <div className="absolute inset-0 bg-black/58" />

      {/* Left side darker for text, right side more visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/55 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-48 lg:px-8 lg:pb-28 lg:pt-52">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-blue-950">
            KK Borča • Od 1996. godine
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Više od košarke.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-blue-100 md:text-2xl">
            Skoro tri decenije razvijamo decu kroz sport, prijateljstvo,
            karakter i prave životne vrednosti.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/postani-clan"
              className="rounded-full bg-yellow-400 px-8 py-4 text-center font-bold text-blue-950 shadow-lg transition hover:bg-yellow-300"
            >
              Pridruži se treningu
            </Link>

            <Link
              href="/o-klubu"
              className="rounded-full border border-white/40 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-blue-950"
            >
              Upoznaj klub
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-black text-yellow-300">160+</p>
              <p className="text-sm text-blue-100">dece u klubu</p>
            </div>

            <div>
              <p className="text-3xl font-black text-yellow-300">8</p>
              <p className="text-sm text-blue-100">takmičarskih ekipa</p>
            </div>

            <div>
              <p className="text-3xl font-black text-yellow-300">5</p>
              <p className="text-sm text-blue-100">trenera</p>
            </div>

            <div>
              <p className="text-3xl font-black text-yellow-300">25</p>
              <p className="text-sm text-blue-100">treninga nedeljno</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}