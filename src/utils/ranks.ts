export interface RankLevel {
  id: number;
  title: string;
  minXp: number;
  maxXp: number | null;
  description: string;
}

export const rankLevels: RankLevel[] = [
  {
    id: 1,
    title: "Rank 1: SELECT Rookie",
    minXp: 0,
    maxXp: 49,
    description: "You are learning how to retrieve data from tables.",
  },
  {
    id: 2,
    title: "Rank 2: WHERE Operator",
    minXp: 50,
    maxXp: 149,
    description: "You are learning how to filter rows with conditions.",
  },
  {
    id: 3,
    title: "Rank 3: Join Initiate",
    minXp: 150,
    maxXp: 299,
    description: "You are preparing to connect tables with relationships.",
  },
  {
    id: 4,
    title: "Rank 4: Aggregate Analyst",
    minXp: 300,
    maxXp: 499,
    description: "You are learning how to summarize data with aggregate logic.",
  },
  {
    id: 5,
    title: "Rank 5: Subquery Specialist",
    minXp: 500,
    maxXp: 749,
    description: "You are ready for layered query thinking.",
  },
  {
    id: 6,
    title: "Rank 6: CTE Commander",
    minXp: 750,
    maxXp: 999,
    description: "You can break complex SQL into readable steps.",
  },
  {
    id: 7,
    title: "Rank 7: Window Function Warden",
    minXp: 1000,
    maxXp: 1499,
    description: "You are entering advanced analytics territory.",
  },
  {
    id: 8,
    title: "Rank 8: Database Architect",
    minXp: 1500,
    maxXp: null,
    description:
      "You are designing, querying, and reasoning like a database architect.",
  },
];

export function getRankForXp(xp: number) {
  return (
    rankLevels.find((rank) => {
      const aboveMinimum = xp >= rank.minXp;
      const belowMaximum = rank.maxXp === null || xp <= rank.maxXp;

      return aboveMinimum && belowMaximum;
    }) ?? rankLevels[0]
  );
}

export function getNextRank(xp: number) {
  return rankLevels.find((rank) => rank.minXp > xp) ?? null;
}

export function getRankProgress(xp: number) {
  const currentRank = getRankForXp(xp);
  const nextRank = getNextRank(xp);

  if (!nextRank) {
    return {
      currentRank,
      nextRank: null,
      currentRankXp: xp,
      xpNeeded: 0,
      percentage: 100,
    };
  }

  const rankStart = currentRank.minXp;
  const rankEnd = currentRank.minXp;
  const currentRankXp = Math.max(0, xp - rankStart);
  const xpNeeded = Math.max(0, rankEnd - xp);
  const percentage = Math.min(
    100,
    Math.round((currentRankXp / (rankEnd - rankStart)) * 100),
  );

  return {
    currentRank,
    nextRank,
    currentRankXp,
    xpNeeded,
    percentage,
  };
}
