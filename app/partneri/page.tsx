import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  HeartHandshake,
  MapPin,
  Shirt,
  Trophy,
  Users,
} from "lucide-react";

const SITE_URL = "https://kkborca.rs";

export const metadata: Metadata = {
  title: "Partneri – podržite razvoj mladih sportista",

  description:
    "Saznajte kako vaša kompanija može postati partner KK Borča i podržati razvoj više od 160 mladih sportista kroz sport, obrazovanje i zajednicu.",

  alternates: {
    canonical: `${SITE_URL}/partneri`,
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/partneri`,
    siteName: "KK Borča",
    title:
      "Partneri KK Borča | Postanite partner u razvoju mladih sportista",
    description:
      "Saznajte kako vaša kompanija može postati partner KK Borča i podržati razvoj više od 160 mladih sportista kroz sport, obrazovanje i zajednicu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Partnerstvo sa KK Borča u razvoju mladih sportista",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Partneri KK Borča",
    description:
      "Postanite partner KK Borča i podržite razvoj više od 160 mladih sportista.",
    images: ["/og-image.png"],
  },
};

const partnershipBenefits = [
  {
    icon: Users,
    title: "Više od 160 mladih sportista",
    text: "Podrška klubu direktno doprinosi radu sa dečacima i devojčicama uzrasta od 6 do 17 godina.",
  },
  {
    icon: MapPin,
    title: "Snažna lokalna zajednica",
    text: "KK Borča je gotovo tri decenije deo Borče i mesto okupljanja dece, roditelja i prijatelja sporta.",
  },
  {
    icon: Trophy,
    title: "Takmičarske selekcije",
    text: "Naše ekipe nastupaju u beogradskim ligama, Kvalitetnoj ligi i regionalnoj WABA U15 ligi.",
  },
  {
    icon: HeartHandshake,
    title: "Partnerstvo sa svrhom",
    text: "Saradnja sa klubom predstavlja ulaganje u sport, zdravo odrastanje i razvoj novih generacija.",
  },
];

const supportAreas = [
  {
    icon: Shirt,
    title: "Sportska oprema",
    text: "Dresovi, trenerke, lopte i druga oprema za naše selekcije.",
  },
  {
    icon: Building2,
    title: "Termini sportskih sala",
    text: "Podrška u obezbeđivanju kvalitetnih uslova za trening tokom cele sezone.",
  },
  {
    icon: Trophy,
    title: "Takmičenja i putovanja",
    text: "Kotizacije, prevoz i organizacija nastupa na domaćim i regionalnim takmičenjima.",
  },
  {
    icon: Users,
    title: "Razvoj mlađih kategorija",
    text: "Ulaganje u razvojne grupe i stvaranje dostupnijih uslova za bavljenje košarkom.",
  },
];

export default function PartneriPage() {
  return (
    <main>
      <section className="bg-blue-950 px-6 pb-28 pt-48 text-white lg:pt-52">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Partneri KK Borča
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Zajedno gradimo sledeću generaciju.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Partnerstvo sa KK Borča nije samo prisustvo logotipa. To je podrška
            deci, sportu i zajednici koja već trideset godina raste uz košarku.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-9 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Postanite partner
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Zašto KK Borča
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Partnerstvo koje ima stvaran uticaj.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              Podrška partnera omogućava nam da deci obezbedimo bolje uslove za
              trening, takmičenje i razvoj.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnershipBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-blue-950">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {benefit.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
              Gde je podrška najpotrebnija
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Svako partnerstvo pretvaramo u bolje uslove za decu.
            </h2>

            <p className="mt-7 text-xl leading-9 text-blue-100">
              Klub danas organizuje veliki broj treninga i takmičarskih
              aktivnosti za više uzrasnih kategorija. Rast kluba donosi i nove
              potrebe.
            </p>

            <p className="mt-5 text-xl font-bold leading-9">
              Naš cilj je jednostavan: da nijedno dete ne dobije manje
              kvalitetne uslove samo zato što klub nema dovoljno resursa.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl bg-white p-7 text-blue-950 shadow-xl"
                >
                  <Icon size={30} className="text-blue-700" />

                  <h3 className="mt-5 text-xl font-black">{area.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {area.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
              Model saradnje
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              Partnerstvo prilagođeno zajedničkim ciljevima.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              Ne nudimo unapred definisane pakete koji su isti za sve. Sa
              svakim partnerom razgovaramo o ciljevima i obliku saradnje koji
              donosi vrednost i klubu i partneru.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                Podrška selekciji
              </p>

              <h3 className="mt-5 text-2xl font-black text-blue-950">
                Budite deo puta jedne generacije.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Podrška određenoj selekciji, opremi, pripremama ili
                takmičarskoj sezoni.
              </p>
            </article>

            <article className="rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
                Partner kluba
              </p>

              <h3 className="mt-5 text-2xl font-black">
                Dugoročno partnerstvo sa KK Borča.
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                Saradnja usmerena na razvoj kluba, mladih sportista i
                zajedničkih aktivnosti.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                Projektna podrška
              </p>

              <h3 className="mt-5 text-2xl font-black text-blue-950">
                Podržite konkretnu ideju.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Turniri, putovanja, humanitarne aktivnosti i projekti namenjeni
                deci i lokalnoj zajednici.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            Naši partneri
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Hvala svima koji veruju u naš rad.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            Ovaj prostor namenjen je kompanijama i organizacijama koje zajedno
            sa nama podržavaju razvoj mladih sportista.
          </p>

          <div className="mt-14 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 px-8 py-16">
            <p className="text-xl font-bold text-slate-500">
              Logotipi partnera biće predstavljeni ovde.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-300">
            Postanite deo naše priče
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Hajde da zajedno stvorimo bolje uslove za novu generaciju.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-blue-100">
            Razgovarajmo o partnerstvu koje odgovara vašoj kompaniji i
            potrebama mladih sportista KK Borča.
          </p>

          <Link
            href="/kontakt"
            className="mt-10 inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-300"
          >
            Razgovarajmo o saradnji
          </Link>
        </div>
      </section>
    </main>
  );
}