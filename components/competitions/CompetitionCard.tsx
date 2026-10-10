import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import type { Competition } from "@/data/competitions";

type CompetitionCardProps = {
  competition: Competition;
};

export default function CompetitionCard({
  competition,
}: CompetitionCardProps) {
  const { nextGame } = competition;

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-blue-950 px-7 py-6 text-white md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
              {competition.teamCategory}
            </p>

            <h2 className="mt-2 text-3xl font-black">
              {competition.team}
            </h2>
          </div>

          <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            Sezona {competition.season}
          </div>
        </div>
      </div>

      <div className="p-7 md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
          Takmičenje
        </p>

        <h3 className="mt-2 text-2xl font-black text-blue-950">
          {competition.competition}
        </h3>

        {competition.description && (
          <p className="mt-4 leading-7 text-slate-600">
            {competition.description}
          </p>
        )}

        {nextGame && (
          <div className="mt-7 rounded-2xl bg-slate-100 p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Sledeća utakmica
            </p>

            <div className="mt-4">
              <p className="text-xl font-black text-blue-950">
                {nextGame.homeTeam} – {nextGame.awayTeam}
              </p>

              <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    className="h-5 w-5 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <span>
                    {nextGame.date} · {nextGame.time}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    className="h-5 w-5 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <span>{nextGame.venue}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-7">
          {competition.officialUrl && (
            <a
              href={competition.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 font-black text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              Tabela i rezultati
              <ExternalLink
                className="h-5 w-5"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}