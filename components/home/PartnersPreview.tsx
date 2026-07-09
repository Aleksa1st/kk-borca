import Link from "next/link";

export default function PartnersPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              PARTNERI
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Partneri koji ulažu u budućnost dece.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              KK Borča ne traži samo sponzore. Tražimo partnere koji veruju da
              sport može da oblikuje zdraviju, odgovorniju i povezaniju
              zajednicu.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Vaša podrška omogućava treninge, opremu, turnire, putovanja i
              bolji razvoj za više od 160 aktivnih članova kluba.
            </p>

            <Link
              href="/partneri"
              className="mt-10 inline-block rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Postanite partner
            </Link>
          </div>

          <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
              Vaš uticaj
            </p>

            <div className="mt-8 space-y-6">
              <div className="border-l-4 border-yellow-300 pl-5">
                <p className="text-4xl font-black text-yellow-300">160+</p>
                <p className="mt-1 text-blue-100">aktivne dece u klubu</p>
              </div>

              <div className="border-l-4 border-yellow-300 pl-5">
                <p className="text-4xl font-black text-yellow-300">25</p>
                <p className="mt-1 text-blue-100">treninga svake nedelje</p>
              </div>

              <div className="border-l-4 border-yellow-300 pl-5">
                <p className="text-4xl font-black text-yellow-300">8</p>
                <p className="mt-1 text-blue-100">takmičarskih selekcija</p>
              </div>

              <div className="border-l-4 border-yellow-300 pl-5">
                <p className="text-4xl font-black text-yellow-300">30</p>
                <p className="mt-1 text-blue-100">godina poverenja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}