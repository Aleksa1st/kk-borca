export default function OKlubuPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            O nama
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Naša priča počinje decom.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Od 1996. godine KK Borča razvija dečake i devojčice kroz košarku,
            karakter, prijateljstvo i zajedništvo.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <img
            src="/images/home/branislav.jpg"
            alt="Branislav Vujičić sa igračima KK Borča"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Branislav Vujičić
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Trener koji je izabrao dug put.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Krajem osamdesetih godina, kada su mnogi klubovi tražili brz
              uspeh, Branislav Vujičić je izabrao drugačiji put — rad sa decom,
              strpljenje i stvaranje generacija.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Godine 1996. sa grupom entuzijasta osnovao je KK Borča, klub koji
              traje i danas i kroz koji je prošlo više od 2.500 dečaka i
              devojčica.
            </p>

            <p className="mt-5 text-lg font-bold leading-8 text-blue-950">
              Naša najveća pobeda su ljudi koje zajedno gradimo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Vrednosti
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black text-blue-950 md:text-5xl">
            Više od košarke od prvog dana.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              "Sport",
              "Karakter",
              "Obrazovanje",
              "Zajednica",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-black text-blue-950">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}