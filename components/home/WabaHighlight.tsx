import Image from "next/image";
import Link from "next/link";

const wabaArticle =
  "https://waba-league.com/waba-u15-sa-17-klubova/";

export default function WabaHighlight() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-blue-700 shadow-2xl lg:grid-cols-2">
        <div className="relative min-h-[380px]">
          <Image
            src="/images/home/devojcice-nas-ponos.jpg"
            alt="Pionirke KK Borča"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
        </div>

        <div className="flex flex-col justify-center p-8 text-white md:p-12">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Međunarodno takmičenje
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Pionirke KK Borča u regionalnoj WABA U15 ligi.
          </h2>

          <p className="mt-6 text-xl leading-9 text-blue-100">
            Naše pionirke nastupaće u sezoni 2026/27 u regionalnom takmičenju
            koje okuplja 17 klubova iz šest zemalja.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/takmicenja"
              className="rounded-full bg-yellow-400 px-7 py-4 text-center font-black text-blue-950 transition hover:bg-yellow-300"
            >
              Pogledaj takmičenja
            </Link>

            <a
              href={wabaArticle}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-blue-700"
            >
              Pročitaj na WABA sajtu ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}