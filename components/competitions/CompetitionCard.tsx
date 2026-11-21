
"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  ExternalLink,
  MapPin,
} from "lucide-react";
import type {
  Competition,
  NextGame,
} from "@/data/competitions";

type CompetitionCardProps = {
  competition: Competition;
};

function getBelgradeNow(): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Belgrade",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const getPart = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return (
    `${getPart("year")}-${getPart("month")}-${getPart("day")}` +
    `T${getPart("hour")}:${getPart("minute")}`
  );
}

function getNextGame(
  competition: Competition,
  now: string,
): NextGame | undefined {
  const games = competition.games ??
    (competition.nextGame ? [competition.nextGame] : []);

  return games
    .filter((game) => {
      const date = game.date;
      const time = game.time;

      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        !/^\d{2}:\d{2}$/.test(time)
      ) {
        return false;
      }

      return `${date}T${time}` >= now;
    })
    .sort((a, b) =>
      `${a.date}T${a.time}`.localeCompare(
        `${b.date}T${b.time}`,
      ),
    )[0];
}

function formatGameDate(date: string): string {
  const [year, month, day] = date.split("-");

  return `${day}.${month}.${year}.`;
}

export default function CompetitionCard({
  competition,
}: CompetitionCardProps) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const updateNow = () => {
      setNow(getBelgradeNow());
    };

    updateNow();

    const interval = window.setInterval(updateNow, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  const isActive = competition.status === "active";
  const isUpcoming = competition.status === "upcoming";

  const nextGame = now
    ? getNextGame(competition, now)
    : undefined;

  const hasScheduledGames =
    (competition.games?.length ?? 0) > 0 ||
    Boolean(competition.nextGame);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {/* HEADER */}
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

      {/* CONTENT */}
      <div className="p-7 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
            Takmičenje
          </p>

          {isActive && (
            <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-green-700">
              Takmičenje u toku
            </span>
          )}

          {isUpcoming && (
            <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-yellow-700">
              Uskoro počinje
            </span>
          )}
        </div>

        <h3 className="mt-2 text-2xl font-black text-blue-950">
          {competition.competition}
        </h3>

        {competition.description && (
          <p className="mt-4 leading-7 text-slate-600">
            {competition.description}
          </p>
        )}

        {/* UPCOMING COMPETITION */}
        {isUpcoming && (
          <div className="mt-7 rounded-2xl bg-slate-100 p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Početak sezone
            </p>

            <p className="mt-3 text-xl font-black text-blue-950">
              {competition.startDate ?? "Uskoro"}
            </p>
          </div>
        )}

        {/* NEXT GAME */}
        <div className="mt-7 rounded-2xl bg-slate-100 p-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            Sledeća utakmica
          </p>

          {nextGame ? (
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
                    {formatGameDate(nextGame.date)} ·{" "}
                    {nextGame.time}
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
          ) : (
            <p className="mt-3 leading-7 text-slate-600">
              {!now
                ? "Proveravamo raspored utakmica..."
                : hasScheduledGames
                  ? "Trenutno nemamo potvrđen termin naredne utakmice. Proverite zvanični raspored takmičenja."
                  : "Datum i vreme naredne utakmice još nisu potvrđeni. Proverite zvanični raspored takmičenja."}
            </p>
          )}
        </div>

        {/* OFFICIAL LINK */}
        {competition.officialUrl && (
          <div className="mt-7">
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
          </div>
        )}
      </div>
    </article>
  );
}
