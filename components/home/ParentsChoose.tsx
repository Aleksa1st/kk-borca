import {
  Heart,
  ShieldCheck,
  Trophy,
  Users,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "30 godina tradicije",
    text: "Od 1996. godine gradimo sportski kolektiv u kojem su odrasle generacije dečaka i devojčica.",
  },
  {
    icon: Users,
    title: "Stručni treneri",
    text: "Naš stručni tim radi sa decom svih uzrasta, razvijajući veštine, samopouzdanje i timski duh.",
  },
  {
    icon: ShieldCheck,
    title: "Bezbedno okruženje",
    text: "Svako dete zaslužuje sredinu u kojoj će se osećati sigurno, prihvaćeno i motivisano.",
  },
  {
    icon: Heart,
    title: "Karakter pre rezultata",
    text: "Disciplina, poštovanje i odgovornost za nas su jednako važni kao svaka pobeda.",
  },
  {
    icon: GraduationCap,
    title: "Prijateljstva za ceo život",
    text: "Na treninzima, utakmicama i putovanjima nastaju prijateljstva koja ostaju.",
  },
  {
    icon: CalendarDays,
    title: "Takmičenja i razvoj",
    text: "Učestvujemo u ligama, turnirima, kampovima i događajima koji deci daju iskustvo.",
  },
];

export default function ParentsChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-blue-700">
            POVERENJE RODITELJA
          </p>

          <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
            Zašto roditelji biraju KK Borča?
          </h2>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Zato što ovde deca ne uče samo košarku – uče odgovornost, timski duh
            i vrednosti koje ostaju za ceo život.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-yellow-300">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-blue-950">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}