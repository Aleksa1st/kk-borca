import Link from "next/link";

export default function JoinClub() {
  return (
    <section className="relative overflow-hidden bg-blue-950 py-24 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-yellow-400 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-yellow-300 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
          POSTANI DEO KK BORČA
        </p>

        <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
          Prvi trening je početak
          <br />
          jednog velikog putovanja.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
          Više od <strong>2.500 dečaka i devojčica</strong> tokom proteklih
          30 godina napravilo je svoje prve sportske korake upravo u KK Borča.
        </p>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-200">
          Pozivamo sve dečake i devojčice da nam se pridruže, upoznaju nove
          prijatelje i postanu deo kluba u kojem se odrastanje meri osmehom,
          trudom i zajedništvom.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <Link
            href="/postani-clan"
            className="rounded-full bg-yellow-400 px-10 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Prijavi dete
          </Link>

          <Link
            href="/kontakt"
            className="rounded-full border-2 border-white px-10 py-4 text-lg font-bold transition hover:bg-white hover:text-blue-950"
          >
            Kontaktiraj nas
          </Link>
        </div>
      </div>
    </section>
  );
}