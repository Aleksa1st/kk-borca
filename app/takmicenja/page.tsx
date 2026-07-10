const wabaArticle =
  "https://waba-league.com/waba-u15-sa-17-klubova/";

const season2025 = [
  "Mlađi pioniri U13 – Beogradska liga",
  "Pioniri U15 – Beogradska liga",
  "Kadeti U17 – prvi u grupi 5",
  "Juniori U18 – Beogradska liga",
  "Pionirke U13 – dva tima u Beogradskoj ligi",
  "Pionirke U13 – jedan tim 1/4 finale, drugi tim 1/8 finale",
];

const season2026Boys = [
  "Mlađi pioniri U13",
  "Pioniri U15",
  "Kadeti U17",
  "Juniori U18",
];

const season2026Girls = [
  "Mlađe pionirke U13 – Beogradska liga",
  "Pionirke U15 – Kvalitetna Beogradska liga",
  "Pionirke U15 – WABA regionalna liga",
  "Kadetkinje U17 – Beogradska liga",
];

const wabaCountries = [
  "Italija",
  "Slovenija",
  "Hrvatska",
  "Bosna i Hercegovina",
  "Crna Gora",
  "Srbija",
];

export default function TakmicenjaPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Takmičenja i rezultati
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Takmičarski duh, razvoj i iskustvo.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Naše selekcije učestvuju u Beogradskim ligama, regionalnim
            takmičenjima i turnirima, sa ciljem da deca stiču iskustvo,
            samopouzdanje i ljubav prema igri.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Sezona 2025/26
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black text-blue-950 md:text-5xl">
            Rezultati koji pokazuju kontinuitet rada.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {season2025.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <p className="text-lg font-bold leading-7 text-blue-950">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
              Sezona 2026/27
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Nova sezona donosi nove izazove.
            </h2>

            <p className="mt-6 text-xl leading-9 text-blue-100">
              Tokom vansezonskog perioda pripremamo selekcije za novu
              takmičarsku godinu. Tačan raspored utakmica biće objavljen pre
              početka sezone.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 text-blue-950 shadow-xl">
              <h3 className="text-2xl font-black">Dečaci</h3>

              <ul className="mt-5 space-y-3">
                {season2026Boys.map((item) => (
                  <li key={item} className="font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-7 text-blue-950 shadow-xl">
              <h3 className="text-2xl font-black">Devojčice</h3>

              <ul className="mt-5 space-y-3">
                {season2026Girls.map((item) => (
                  <li key={item} className="font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              WABA U15
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Pionirke KK Borča na regionalnoj sceni.
            </h2>

            <p className="mt-6 text-xl leading-9 text-slate-700">
              U sezoni 2026/27 pionirke U15 učestvovaće u regionalnoj WABA
              ligi, koja okuplja 17 klubova iz šest zemalja.
            </p>

            <p className="mt-5 text-xl font-bold leading-9 text-blue-950">
              Pred našim igračicama je prilika da stiču međunarodno iskustvo i
              predstavljaju Borču i Srbiju na regionalnoj košarkaškoj sceni.
            </p>

            <a
              href={wabaArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-800"
            >
              Pročitaj zvaničnu WABA objavu ↗
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <p className="text-6xl font-black text-blue-700">17</p>

            <p className="mt-3 text-xl font-bold text-blue-950">
              klubova iz šest zemalja
            </p>

            <div className="mt-8 grid gap-3">
              {wabaCountries.map((country) => (
                <div
                  key={country}
                  className="rounded-2xl bg-slate-100 px-5 py-3 font-semibold text-slate-700"
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Razvojna grupa
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Prvi koraci pre prvih rezultata.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            U sezoni 2026/27 klub će imati dve razvojne grupe za decu uzrasta
            od 6 do 10 godina. Fokus je na igri, motorici, koordinaciji,
            timskom duhu i ljubavi prema košarci.
          </p>
        </div>
      </section>
    </main>
  );
}