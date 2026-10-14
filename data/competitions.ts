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

  startDate?: string;
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

  {
    id: "pionirke-u15-kvalitetna-beogradska-liga-2026-27",
    team: "Pionirke U15",
    teamCategory: "Pionirke",
    competition: "Kvalitetna beogradska liga",
    season: "2026/27",
    status: "upcoming",

    officialUrl: "https://www.ksb.rs/takmicenje1218/",

    description:
      "Pionirke KK Borča se u sezoni 2026/27, pored WABA U15 lige, takmiče i u Kvalitetnoj beogradskoj ligi.",
    
    startDate: "Kraj oktobra 2026.",
  },

  {
    id: "kadetkinje-u17-beogradska-liga-2026-27",
    team: "Kadetkinje U17",
    teamCategory: "Kadetkinje U17",
    competition: "Beogradska liga",
    season: "2026/27",
    status: "upcoming",

    officialUrl: "https://www.ksb.rs/takmicenje1221/",

    description:
      "Kadetkinje U17 KK Borča takmiče se u Beogradskoj ligi u sezoni 2026/27.",

    startDate: "Kraj oktobra 2026.",
  },
];

export function getActiveCompetitions(): Competition[] {
  return competitions.filter(
    (competition) => competition.status === "active"
  );
}

export function getUpcomingCompetitions(): Competition[] {
  return competitions.filter(
    (competition) => competition.status === "upcoming"
  );
}

export function getCurrentCompetitions(): Competition[] {
  return competitions.filter(
    (competition) =>
      competition.status === "active" ||
      competition.status === "upcoming"
  );
}

export function getCompetitionById(
  id: string
): Competition | undefined {
  return competitions.find(
    (competition) => competition.id === id
  );
}