import type { BossBattle } from "../types/learning";

export const bossBattles: BossBattle[] = [
  {
    id: "student-grade-report",
    title: "Beginner Boss: Student Grade Report",
    difficulty: "Boss Level",
    xp: 150,
    requiredSkills: ["SELECT", "WHERE", "ORDER BY", "COUNT"],
    description:
      "Build a student grade report that filters enrolled students, sorts by grade, and summarizes class performance.",
    status: "Unlocked",
  },
  {
    id: "store-order-investigation",
    title: "Join Boss: Store Order Investigation",
    difficulty: "Boss Level",
    xp: 250,
    requiredSkills: [
      "INNER JOIN",
      "LEFT JOIN",
      "Aliases",
      "Filtering joined data",
    ],
    description:
      "Investigate customer orders by joining customers, orders, order_items, and products.",
    status: "Locked",
  },
  {
    id: "monthly-sales-summary",
    title: "Aggregation Boss: Monthly Sales Summary",
    difficulty: "Boss Level",
    xp: 300,
    requiredSkills: ["GROUP BY", "SUM", "COUNT", "HAVING"],
    description:
      "Create a monthly sales summary that groups transactions, calculates totals, and filters high-performing months.",
    status: "Locked",
  },
  {
    id: "high-value-customers",
    title: "Subquery Boss: High Value Customers",
    difficulty: "Boss Level",
    xp: 350,
    requiredSkills: ["Subqueries", "IN", "EXISTS", "Aggregates"],
    description:
      "Find customers whose total spending is above the store average using subqueries and aggregate logic.",
    status: "Locked",
  },
  {
    id: "leaderboard-rankings",
    title: "Window Function Boss: Leaderboard Rankings",
    difficulty: "Architect Level",
    xp: 450,
    requiredSkills: ["ROW_NUMBER", "RANK", "DENSE_RANK", "PARTITION BY"],
    description:
      "Build a ranking report that compares users across divisions and calculates leaderboard placement.",
    status: "Locked",
  },
  {
    id: "normalize-messy-spreadsheet",
    title: "Design Boss: Normalize the Messy Spreadsheet",
    difficulty: "Architect Level",
    xp: 500,
    requiredSkills: [
      "Normalization",
      "Primary keys",
      "Foreign keys",
      "Schema design",
    ],
    description:
      "Take a messy spreadsheet and redesign it into clean related tables with proper keys.",
    status: "Locked",
  },
];
