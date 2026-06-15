import type { Project } from "../types/learning";

export const projects: Project[] = [
  {
    id: "student-report-query-pack",
    title: "Student Report Query Pack",
    difficulty: "Beginner",
    skills: ["SELECT", "WHERE", "ORDER BY"],
    starterSchema: "School Database",
    requiredQueries: [
      "List all students.",
      "Find students above a target grade.",
      "Sort students by last name.",
    ],
    checklist: [
      "Write at least 3 SELECT queries.",
      "Use WHERE once.",
      "Use ORDER BY once.",
      "Explain one query in plain English.",
    ],
  },
  {
    id: "product-filter-queries",
    title: "Product Filter Queries",
    difficulty: "Beginner",
    skills: ["SELECT", "WHERE", "Comparison operators"],
    starterSchema: "Store Database",
    requiredQueries: [
      "Find products over a certain price.",
      "Find products under a certain price.",
      "Return only product names and prices.",
    ],
    checklist: [
      "Use comparison operators.",
      "Avoid SELECT *.",
      "Format each query clearly.",
    ],
  },
  {
    id: "employee-directory-search",
    title: "Employee Directory Search",
    difficulty: "Beginner",
    skills: ["LIKE", "ORDER BY", "Aliases"],
    starterSchema: "Mock Employee Database",
    requiredQueries: [
      "Search employees by name.",
      "Sort employees by department.",
      "Create readable aliases.",
    ],
    checklist: ["Use LIKE.", "Use AS aliases.", "Sort the final results."],
  },
  {
    id: "store-revenue-dashboard",
    title: "Store Revenue Dashboard Queries",
    difficulty: "Intermediate",
    skills: ["JOIN", "GROUP BY", "SUM"],
    starterSchema: "Store Database",
    requiredQueries: [
      "Calculate revenue by order.",
      "Calculate revenue by product.",
      "Calculate total store revenue.",
    ],
    checklist: [
      "Join at least 3 tables.",
      "Use SUM.",
      "Use GROUP BY.",
      "Name calculated columns with aliases.",
    ],
  },
  {
    id: "customer-order-history",
    title: "Customer Order History",
    difficulty: "Intermediate",
    skills: ["INNER JOIN", "LEFT JOIN", "Filtering joined data"],
    starterSchema: "Store Database",
    requiredQueries: [
      "Show every customer order.",
      "Find customers with no orders.",
      "List products inside each order.",
    ],
    checklist: [
      "Use INNER JOIN.",
      "Use LEFT JOIN.",
      "Explain why each join type was used.",
    ],
  },
  {
    id: "monthly-financial-report",
    title: "Monthly Financial Report",
    difficulty: "Advanced",
    skills: ["Date grouping", "Conditional aggregation", "CTEs"],
    starterSchema: "Finance Database",
    requiredQueries: [
      "Group spending by month.",
      "Compare spending by category.",
      "Calculate budget remaining.",
    ],
    checklist: [
      "Use a CTE.",
      "Group by month.",
      "Use conditional aggregation.",
      "Create readable report columns.",
    ],
  },
  {
    id: "leaderboard-ranking-system",
    title: "Leaderboard Ranking System",
    difficulty: "Advanced",
    skills: ["Window functions", "RANK", "PARTITION BY"],
    starterSchema: "Competition Database",
    requiredQueries: [
      "Rank players by score.",
      "Rank players within teams.",
      "Handle tied scores.",
    ],
    checklist: [
      "Use RANK.",
      "Use DENSE_RANK.",
      "Use PARTITION BY.",
      "Explain the difference between ranking functions.",
    ],
  },
];
