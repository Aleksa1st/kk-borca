export default function KontaktPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Kontakt
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black md:text-7xl">
            Javite nam se.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Za probni trening, informacije o članstvu ili partnerstvu sa KK Borča.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-100 p-8">
            <h2 className="text-2xl font-black text-blue-950">Lokacija</h2>
            <p className="mt-4 text-slate-600">Borča, Beograd</p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8">
            <h2 className="text-2xl font-black text-blue-950">Telefon</h2>
            <p className="mt-4 text-slate-600">Uskoro</p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8">
            <h2 className="text-2xl font-black text-blue-950">Email</h2>
            <p className="mt-4 text-slate-600">Uskoro</p>
          </div>
        </div>
      </section>
    </main>
  );
}