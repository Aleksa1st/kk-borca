
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
  games?: NextGame[];
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
    games: [
      {
        homeTeam: "KK Fleš",
        awayTeam: "KK Borča",
        date: "2026-11-23",
        time: "21:20",
        venue:
          "Voždovac – Bora Stanković, Paunova 19a",
      },
    ],
    officialUrl: "https://www.ksb.rs/takmicenje1210/",
  },

  {
    id: "mladji-pioniri-u13-druga-beogradska-liga-2026-27",
    teamCategory: "Mlađi pioniri",
    team: "Mlađi pioniri U13",
    season: "2026/27",
    competition: "2. beogradska liga U13 – Grupa 3",
    status: "active",
    description:
      "Mlađi pioniri KK Borča takmiče se u 2. beogradskoj ligi U13, Grupa 3. Naredni protivnik je KK Ras 4, a tačan termin utakmice još nije potvrđen.",
    officialUrl:
      "https://www.ksb.rs/takmicenje1231/grupa3/",
  },

  {
    id: "pioniri-u15-beogradska-liga-2026-27",
    teamCategory: "Pioniri",
    team: "Pioniri U15",
    season: "2026/27",
    competition: "Beogradska liga U15 – Grupa 3",
    status: "active",
    description:
      "Pioniri KK Borča takmiče se u Beogradskoj ligi U15, Grupa 3.",
    games: [
      {
        homeTeam: "ŠKK Zvezdara 3",
        awayTeam: "KK Borča",
        date: "2026-11-22",
        time: "12:50",
        venue:
          "Mirijevo – Pavle Savić, Koste Nađa 25",
      },
    ],
    officialUrl:
      "https://www.ksb.rs/takmicenje1228/grupa3/",
  },

  {
    id: "pionirke-u15-waba-2026-27",
    teamCategory: "Pionirke",
    team: "Pionirke U15",
    season: "2026/27",
    competition: "WABA U15",
    status: "active",
    description:
      "Pionirke KK Borča nastupaju u regionalnoj WABA U15 ligi. Utakmice se prikazuju prema zvaničnom rasporedu takmičenja.",
    games: [
      {
        homeTeam: "Borča Partizan 1953",
        awayTeam: "Realway",
        date: "2026-11-21",
        time: "15:20",
        venue: "Padinska Skela",
      },
      {
        homeTeam: "Borča Partizan 1953",
        awayTeam: "Play Off",
        date: "2026-11-22",
        time: "13:20",
        venue: "Padinska Skela",
      },
    ],
    officialUrl:
      "https://waba-league.com/season/schedule-3/?leagueId=32033",
  },

  {
    id: "pionirke-u15-kvalitetna-beogradska-2026-27",
    teamCategory: "Pionirke",
    team: "Pionirke U15",
    season: "2026/27",
    competition: "Kvalitetna beogradska liga",
    status: "active",
    description:
      "Pionirke KK Borča takmiče se u Kvalitetnoj beogradskoj ligi. Naredni protivnik je ŽKK Ras, a tačan termin utakmice još nije potvrđen.",
    officialUrl:
      "https://www.ksb.rs/takmicenje1218/",
  },

  {
    id: "kadetkinje-u17-beogradska-liga-2026-27",
    teamCategory: "Kadetkinje",
    team: "Kadetkinje U17",
    season: "2026/27",
    competition: "Ženska kadetska liga Beograda",
    status: "active",
    description:
      "Kadetkinje KK Borča takmiče se u Ženskoj kadetskoj ligi Beograda.",
    games: [
      {
        homeTeam: "ŽKK Borča",
        awayTeam: "ŽKK Rudar 22",
        date: "2026-11-24",
        time: "19:20",
        venue:
          "Hala Padinska Skela, Dejana Smiljkovića 121",
      },
    ],
    officialUrl:
      "https://www.ksb.rs/takmicenje1221/",
  },

  {
    id: "kadeti-u17-kvalifikacije-kvalitetna-liga-2026-27",
    teamCategory: "Kadeti",
    team: "Kadeti U17",
    season: "2026/27",
    competition:
      "Kvalifikacije za Kvalitetnu ligu Beograda – Grupa 5",
    status: "active",
    description:
      "Kadeti KK Borča nastupali su u kvalifikacijama za Kvalitetnu ligu Beograda, Grupa 5. Prikazane kvalifikacione utakmice su završene. Čeka se potvrda narednog takmičarskog rasporeda.",
    officialUrl:
      "https://www.ksb.rs/takmicenje1215/grupa5/",
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
  return competitions.filter(
    (competition) => competition.status === "active",
  );
}

export function getCompetitionById(
  id: string,
): Competition | undefined {
  return competitions.find(
    (competition) => competition.id === id,
  );
}
