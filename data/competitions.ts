export type Competition = {
  id: string;
  team: string;
  teamCategory: string;
  competition: string;
  season: string;

  status: "active" | "completed" | "upcoming";

  nextGame?: {
    opponent: string;
    date: string;
    time: string;
    venue: string;
    homeTeam: string;
    awayTeam: string;
  };

  officialUrl?: string;

  description?: string;
};

export const competitions: Competition[] = [
  {
    id: "seniori-2-mrl-centar-2026-27",
    team: "Seniori",
    teamCategory: "Seniori",
    competition: "2. MRL Centar",
    season: "2026/27",
    status: "active",

    nextGame: {
      opponent: "KK Grocka",
      date: "11. oktobar 2026.",
      time: "19:30",
      venue: "Hala Padinska Skela",
      homeTeam: "KK Borča",
      awayTeam: "KK Grocka",
    },

    officialUrl: "https://www.ksb.rs/takmicenje1210/",

    description:
      "Seniorska ekipa KK Borča takmiči se u 2. MRL Centar u sezoni 2026/27.",
  },

  {
    id: "pionirke-u15-waba-2026-27",
    team: "Pionirke U15",
    teamCategory: "Pionirke",
    competition: "WABA U15",
    season: "2026/27",
    status: "active",

    officialUrl:
       "https://waba-league.com/season/standings/?leagueId=32033",

    description:
      "Pionirke KK Borča takmiče se u WABA U15 ligi u sezoni 2026/27.",
  },
];

export function getActiveCompetitions(): Competition[] {
  return competitions.filter(
    (competition) => competition.status === "active"
  );
}

export function getCompetitionById(
  id: string
): Competition | undefined {
  return competitions.find(
    (competition) => competition.id === id
  );
}