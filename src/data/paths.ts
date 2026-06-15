import type { LearningPath } from "../types/learning";
import { getLessonCardsForModule } from "./lessons";


export const learningPaths: LearningPath[] = [
  {
    id: "sql-fundamentals",
    title: "SQL Fundamentals",
    description:
      "Start here. Learn databases, tables, rows, columns, SELECT statements, filtering, sorting, and aggregate basics.",
    difficulty: "Beginner",
    accent: "cyan",
    totalLessons: 20,
    completedLessons: 0,
    xp: 850,
    modules: [
      {
        id: "database-basics",
        title: "Module 1: Database Basics",
        description:
          "Learn what databases are and how tables, rows, columns, primary keys, and foreign keys work.",
        topics: [
          "Databases",
          "Tables",
          "Rows",
          "Columns",
          "Primary keys",
          "Foreign keys",
        ],
        lessons: getLessonCardsForModule("sql-fundamentals", "database-basics"),
      },
      {
        id: "select-queries",
        title: "Module 2: SELECT Queries",
        description:
          "Use SELECT and FROM to retrieve full tables, specific columns, aliases, and distinct values.",
        topics: [
          "SELECT",
          "FROM",
          "SELECT *",
          "Specific columns",
          "Aliases",
          "DISTINCT",
        ],
        lessons: getLessonCardsForModule("sql-fundamentals", "select-queries"),
      },
      {
        id: "filtering-data",
        title: "Module 3: Filtering Data",
        description:
          "Filter rows using WHERE, comparison operators, AND, OR, NOT, BETWEEN, IN, and LIKE.",
        topics: [
          "WHERE",
          "Comparison operators",
          "AND",
          "OR",
          "BETWEEN",
          "IN",
          "LIKE",
        ],
        lessons: getLessonCardsForModule("sql-fundamentals", "filtering-data"),
      },
      {
        id: "sorting-limiting",
        title: "Module 4: Sorting and Limiting",
        description: "Sort query results and limit how many rows are returned.",
        topics: ["ORDER BY", "ASC", "DESC", "LIMIT", "Top results"],
        lessons: getLessonCardsForModule(
          "sql-fundamentals",
          "sorting-limiting",
        ),
      },
      {
        id: "aggregate-basics",
        title: "Module 5: Aggregate Basics",
        description: "Use COUNT, SUM, AVG, MIN, and MAX to summarize rows.",
        topics: ["COUNT", "SUM", "AVG", "MIN", "MAX"],
        lessons: getLessonCardsForModule(
          "sql-fundamentals",
          "aggregate-basics",
        ),
      },
    ],
  },

  {
    id: "intermediate-sql",
    title: "Intermediate SQL",
    description:
      "Level up with relationships, joins, grouping, HAVING, CASE statements, and data modification.",
    difficulty: "Intermediate",
    accent: "emerald",
    totalLessons: 20,
    completedLessons: 0,
    xp: 1265,
    modules: [
      {
        id: "table-relationships",
        title: "Module 1: Table Relationships",
        description:
          "Understand how tables connect through primary keys, foreign keys, and relationship patterns.",
        topics: [
          "Relationships",
          "Primary keys",
          "Foreign keys",
          "One-to-many",
          "Many-to-many",
          "Join logic",
        ],
        lessons: getLessonCardsForModule(
          "intermediate-sql",
          "table-relationships",
        ),
      },
      {
        id: "inner-joins",
        title: "Module 2: Inner Joins",
        description:
          "Use INNER JOIN, aliases, joined column selection, and filters on joined data.",
        topics: [
          "INNER JOIN",
          "Table aliases",
          "Joined columns",
          "ON",
          "Filtering joined data",
        ],
        lessons: getLessonCardsForModule("intermediate-sql", "inner-joins"),
      },
      {
        id: "outer-joins",
        title: "Module 3: Outer Joins",
        description:
          "Use LEFT JOIN, understand NULLs in joins, and learn RIGHT/FULL OUTER JOIN concepts.",
        topics: [
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN",
          "NULL",
          "Missing matches",
        ],
        lessons: getLessonCardsForModule("intermediate-sql", "outer-joins"),
      },
      {
        id: "multi-table-joins",
        title: "Module 4: Multi-Table Joins",
        description:
          "Join multiple related tables and understand bridge tables and join order.",
        topics: [
          "Three-table joins",
          "Bridge tables",
          "Join order",
          "Many-to-many",
        ],
        lessons: getLessonCardsForModule(
          "intermediate-sql",
          "multi-table-joins",
        ),
      },
      {
        id: "join-debugging",
        title: "Module 5: Join Debugging",
        description:
          "Find and repair common join mistakes, wrong ON conditions, and relationship errors.",
        topics: [
          "Debugging joins",
          "ON conditions",
          "Wrong keys",
          "Missing matches",
        ],
        lessons: getLessonCardsForModule("intermediate-sql", "join-debugging"),
      },
      {
        id: "grouping-aggregation",
        title: "Module 6: Grouping and Aggregation",
        description:
          "Group rows and filter aggregate results with GROUP BY and HAVING.",
        topics: ["GROUP BY", "HAVING", "COUNT", "SUM", "AVG"],
        lessons: getLessonCardsForModule(
          "intermediate-sql",
          "grouping-aggregation",
        ),
      },
      {
        id: "case-statements",
        title: "Module 7: CASE Statements",
        description:
          "Create conditional labels and calculated categories using CASE.",
        topics: ["CASE", "WHEN", "THEN", "ELSE", "END"],
        lessons: getLessonCardsForModule("intermediate-sql", "case-statements"),
      },
      {
        id: "data-modification",
        title: "Module 8: Data Modification",
        description:
          "Learn how INSERT adds new rows and prepares you for UPDATE and DELETE later.",
        topics: ["INSERT", "INTO", "VALUES", "Data modification"],
        lessons: getLessonCardsForModule(
          "intermediate-sql",
          "data-modification",
        ),
      },
    ],
  },

  {
    id: "advanced-sql",
    title: "Advanced SQL",
    description:
      "Master CTEs, window functions, advanced analytics, performance concepts, and database design.",
    difficulty: "Advanced",
    accent: "amber",
    totalLessons: 20,
    completedLessons: 0,
    xp: 1740,
    modules: [
      {
        id: "ctes",
        title: "Module 1: CTEs",
        description:
          "Use WITH to create readable query steps, multiple CTEs, and CTE-based patterns.",
        topics: ["WITH", "CTEs", "Multiple CTEs", "Subqueries", "Readability"],
        lessons: getLessonCardsForModule("advanced-sql", "ctes"),
      },
      {
        id: "window-functions",
        title: "Module 2: Window Functions",
        description:
          "Use ROW_NUMBER, RANK, DENSE_RANK, PARTITION BY, and running totals.",
        topics: [
          "ROW_NUMBER",
          "RANK",
          "DENSE_RANK",
          "PARTITION BY",
          "Running totals",
        ],
        lessons: getLessonCardsForModule("advanced-sql", "window-functions"),
      },
      {
        id: "advanced-analytics",
        title: "Module 3: Advanced Analytics",
        description:
          "Build analytical reports with Top-N queries, date grouping, conditional aggregation, percentages, and ratios.",
        topics: [
          "Top-N",
          "Date grouping",
          "Conditional aggregation",
          "Percentages",
          "Ratios",
        ],
        lessons: getLessonCardsForModule("advanced-sql", "advanced-analytics"),
      },
      {
        id: "performance-concepts",
        title: "Module 4: Performance Concepts",
        description:
          "Learn indexes, query plans, SELECT column habits, and filtering before joins.",
        topics: [
          "Indexes",
          "Query plans",
          "Avoid SELECT *",
          "Filtering",
          "Performance",
        ],
        lessons: getLessonCardsForModule(
          "advanced-sql",
          "performance-concepts",
        ),
      },
      {
        id: "database-design",
        title: "Module 5: Database Design",
        description:
          "Practice normalization, denormalization concepts, and schema design review.",
        topics: [
          "Normalization",
          "Denormalization",
          "Schema design",
          "Relationships",
          "Keys",
        ],
        lessons: getLessonCardsForModule("advanced-sql", "database-design"),
      },
    ],
  },

  {
    id: "boss-level",
    title: "Boss Level SQL",
    description:
      "Large SQL missions that combine multiple skills into battle-style challenges.",
    difficulty: "Boss Level",
    accent: "rose",
    totalLessons: 20,
    completedLessons: 0,
    xp: 3000,
    modules: [
      {
        id: "beginner-bosses",
        title: "Module 1: Beginner Bosses",
        description:
          "Boss missions using SELECT, WHERE, ORDER BY, COUNT, and clean reports.",
        topics: ["SELECT", "WHERE", "ORDER BY", "COUNT", "Aliases"],
        lessons: getLessonCardsForModule("boss-level", "beginner-bosses"),
      },
      {
        id: "join-bosses",
        title: "Module 2: Join Bosses",
        description:
          "Boss missions using INNER JOIN, LEFT JOIN, NULL checks, and join debugging.",
        topics: ["INNER JOIN", "LEFT JOIN", "ON", "NULL", "Join debugging"],
        lessons: getLessonCardsForModule("boss-level", "join-bosses"),
      },
      {
        id: "aggregation-bosses",
        title: "Module 3: Aggregation Bosses",
        description:
          "Boss missions using GROUP BY, HAVING, COUNT, SUM, and AVG.",
        topics: ["GROUP BY", "HAVING", "COUNT", "SUM", "AVG"],
        lessons: getLessonCardsForModule("boss-level", "aggregation-bosses"),
      },
      {
        id: "case-bosses",
        title: "Module 4: CASE Bosses",
        description:
          "Boss missions using CASE to create conditional business labels.",
        topics: ["CASE", "WHEN", "THEN", "ELSE", "END"],
        lessons: getLessonCardsForModule("boss-level", "case-bosses"),
      },
      {
        id: "subquery-bosses",
        title: "Module 5: Subquery Bosses",
        description:
          "Boss missions using subqueries for above-average and threshold reports.",
        topics: ["Subqueries", "AVG", "WHERE", "Comparison filters"],
        lessons: getLessonCardsForModule("boss-level", "subquery-bosses"),
      },
      {
        id: "cte-bosses",
        title: "Module 6: CTE Bosses",
        description:
          "Boss missions using WITH and named temporary result sets.",
        topics: ["WITH", "CTEs", "Large orders", "Readable SQL"],
        lessons: getLessonCardsForModule("boss-level", "cte-bosses"),
      },
      {
        id: "analytics-bosses",
        title: "Module 7: Analytics Bosses",
        description:
          "Boss missions using Top-N logic, ratios, and reporting calculations.",
        topics: ["Top-N", "Ratios", "ORDER BY", "LIMIT", "Analytics"],
        lessons: getLessonCardsForModule("boss-level", "analytics-bosses"),
      },
      {
        id: "mixed-bosses",
        title: "Module 8: Mixed Bosses",
        description:
          "Final boss missions combining grouping, aggregates, HAVING, and report logic.",
        topics: ["Mixed SQL", "GROUP BY", "HAVING", "SUM", "COUNT"],
        lessons: getLessonCardsForModule("boss-level", "mixed-bosses"),
      },
    ],
  },

  {
    id: "architect-level",
    title: "Architect Level SQL",
    description:
      "Advanced SQL architecture, schema design, performance, analytics, and capstone missions.",
    difficulty: "Architect Level",
    accent: "violet",
    totalLessons: 20,
    completedLessons: 0,
    xp: 5000,
    modules: [
      {
        id: "window-architecture",
        title: "Module 1: Window Architecture",
        description:
          "Architect leaderboard, ranking, and running-total reports with window functions.",
        topics: [
          "RANK",
          "DENSE_RANK",
          "ROW_NUMBER",
          "PARTITION BY",
          "Running totals",
        ],
        lessons: getLessonCardsForModule(
          "architect-level",
          "window-architecture",
        ),
      },
      {
        id: "schema-architecture",
        title: "Module 2: Schema Architecture",
        description:
          "Design normalized schemas, understand normal forms, and connect entities through keys.",
        topics: ["1NF", "2NF", "3NF", "Primary keys", "Foreign keys"],
        lessons: getLessonCardsForModule(
          "architect-level",
          "schema-architecture",
        ),
      },
      {
        id: "performance-architecture",
        title: "Module 3: Performance Architecture",
        description:
          "Plan indexes, review query execution concepts, and filter large tables intentionally.",
        topics: [
          "Indexes",
          "Join indexes",
          "EXPLAIN",
          "Large tables",
          "Filtering",
        ],
        lessons: getLessonCardsForModule(
          "architect-level",
          "performance-architecture",
        ),
      },
      {
        id: "analytics-architecture",
        title: "Module 4: Analytics Architecture",
        description:
          "Design analytics reports using grouped metrics, cohorts, conditional metrics, and Top-N patterns.",
        topics: [
          "Metrics",
          "Cohorts",
          "Conditional aggregation",
          "Top-N",
          "Reports",
        ],
        lessons: getLessonCardsForModule(
          "architect-level",
          "analytics-architecture",
        ),
      },
      {
        id: "capstone-architecture",
        title: "Module 5: Capstone Architecture",
        description:
          "Complete final architecture missions using refactoring, reporting tables, data quality, and CTEs.",
        topics: [
          "Refactoring",
          "Reporting tables",
          "Data quality",
          "CTEs",
          "Capstone",
        ],
        lessons: getLessonCardsForModule(
          "architect-level",
          "capstone-architecture",
        ),
      },
    ],
  },
];

export function getPathById(pathId: string | undefined) {
  return learningPaths.find((path) => path.id === pathId);
}
