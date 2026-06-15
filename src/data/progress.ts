import type { ProgressData } from "../types/learning";

export const progress: ProgressData = {
  totalXp: 125,
  currentRank: "Rank 1: SELECT Rookie",
  completedLessons: 2,
  currentStreak: 4,
  weakTopics: ["JOIN conditions", "HAVING vs WHERE", "Query formatting"],
  bossBattlesCompleted: 0,
  reviewQueue: [
    "SELECT Basics",
    "WHERE Basics",
    "Forgot FROM mistake",
    "Missing comma mistake",
  ],
  schemasMastered: ["School Database"],
};

export const ranks = [
  "Rank 1: SELECT Rookie",
  "Rank 2: WHERE Operator",
  "Rank 3: Join Initiate",
  "Rank 4: Aggregate Analyst",
  "Rank 5: Subquery Specialist",
  "Rank 6: CTE Commander",
  "Rank 7: Window Function Warden",
  "Rank 8: Database Architect",
];
