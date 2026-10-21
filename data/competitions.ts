export type CompetitionStatus = "active" | "upcoming";

export type NextGame = {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
};

export type Competition = {
  id: string;
  teamCategory: string;
  team: string;
  season: string;
  competition: string;
  status: CompetitionStatus;
  description?: string;
  startDate?: string;
  nextGame?: NextGame;
  officialUrl?: string;
};

const competitions: Competition[] = [
  {
    id: "seniori-2-mrl-centar-2026-27",
    teamCategory: "Seniori",
    team: "Seniori",
    season: "2026/27",
    competition: "2. MRL Centar",
    status: "active",
    description:
      "Seniorska ekipa KK Borča takmiči se u 2. MRL Centar u sezoni 2026/27.",
    nextGame: {
      homeTeam: "KK Borča",
      awayTeam: "KK Cerak",
      date: "24.10.2026.",
      time: "17:30",
      venue: "Hala Padinska Skela",
    },
    officialUrl: "https://www.ksb.rs/takmicenje1210/",
  },

  {
    id: "pionirke-u15-waba-2026-27",
    teamCategory: "Pionirke",
    team: "Pionirke U15",
    season: "2026/27",
    competition: "WABA U15",
    status: "active",
    description:
      "Pionirke KK Borča takmiče se u WABA U15 ligi u sezoni 2026/27.",
    officialUrl:
      "https://waba-league.com/season/standings/?leagueId=32033",
  },

  {
    id: "pionirke-u15-kvalitetna-beogradska-2026-27",
    teamCategory: "Pionirke",
    team: "Pionirke U15",
    season: "2026/27",
    competition: "Kvalitetna beogradska liga",
    status: "active",
    description:
      "Pionirke KK Borča takmiče se i u Kvalitetnoj beogradskoj ligi u sezoni 2026/27.",
    officialUrl: "https://www.ksb.rs/takmicenje1218/",
  },

  {
    id: "kadetkinje-u17-beogradska-liga-2026-27",
    teamCategory: "Kadetkinje",
    team: "Kadetkinje U17",
    season: "2026/27",
    competition: "Ženska kadetska liga Beograda",
    status: "upcoming",
    startDate: "24. oktobar 2026.",
    description:
      "Kadetkinje KK Borča takmiče se u Ženskoj kadetskoj ligi Beograda u sezoni 2026/27.",
    nextGame: {
      homeTeam: "KK Borča",
      awayTeam: "ŽKK Radnički",
      date: "24.10.2026.",
      time: "15:15",
      venue: "Hala Padinska Skela",
    },
    officialUrl: "https://www.ksb.rs/takmicenje1221/",
  },

  {
    id: "kadeti-u17-kvalifikacije-kvalitetna-liga-2026-27",
    teamCategory: "Kadeti",
    team: "Kadeti U17",
    season: "2026/27",
    competition: "Kvalifikacije za Kvalitetnu ligu Beograda – Grupa 5",
    status: "upcoming",
    startDate: "24. oktobar 2026.",
    description:
      "Kadeti KK Borča započinju sezonu 2026/27 u kvalifikacijama za Kvalitetnu ligu Beograda. Ekipa se takmiči u Grupi 5.",
    nextGame: {
      homeTeam: "KK Paragon (Lazarevac)",
      awayTeam: "KK Borča",
      date: "24.10.2026.",
      time: "12:30",
      venue: "Železnik – Hala FMP, Darinke Radović 8a",
    },
    officialUrl: "https://www.ksb.rs/takmicenje1215/grupa5/",
  },
];

export function getCurrentCompetitions(): Competition[] {
  return competitions.filter(
    (competition) =>
      competition.status === "active" ||
      competition.status === "upcoming",
  );
}

export function getActiveCompetitions(): Competition[] {
  return getCurrentCompetitions();
}

export function getCompetitionById(
  id: string,
): Competition | undefined {
  return competitions.find(
    (competition) => competition.id === id,
  );
}