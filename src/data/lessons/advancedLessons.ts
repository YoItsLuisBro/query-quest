import { createLessonsFromSeeds, type LessonSeed } from "./lessonBlueprint";
import { employeesTable, ordersTable, productsTable } from "./sharedTables";

const pathId = "advanced-sql";

const seeds: LessonSeed[] = [
  {
    id: "cte-basics",
    pathId,
    moduleId: "ctes",
    title: "CTE Basics",
    description: "Use WITH to name temporary result sets.",
    xp: 75,
    table: ordersTable,
    focus: "CTEs",
    exampleQuery: `WITH large_orders AS (
  SELECT id, customer_id, order_total
  FROM orders
  WHERE order_total >= 100
)
SELECT *
FROM large_orders;`,
    predictCorrect: "Returns orders from the large_orders CTE",
  },
  {
    id: "multiple-ctes",
    pathId,
    moduleId: "ctes",
    title: "Multiple CTEs",
    description: "Chain multiple named query steps together.",
    xp: 85,
    table: ordersTable,
    focus: "multiple CTEs",
    exampleQuery: `WITH large_orders AS (
  SELECT *
  FROM orders
  WHERE order_total >= 100
),
customer_totals AS (
  SELECT customer_id, SUM(order_total) AS total_spent
  FROM large_orders
  GROUP BY customer_id
)
SELECT *
FROM customer_totals;`,
    predictCorrect: "Returns customer totals based on large orders",
  },
  {
    id: "cte-vs-subquery",
    pathId,
    moduleId: "ctes",
    title: "CTEs vs Subqueries",
    description: "Compare readability between CTEs and subqueries.",
    xp: 80,
    table: ordersTable,
    focus: "CTEs versus subqueries",
    exampleQuery: `WITH average_order AS (
  SELECT AVG(order_total) AS avg_total
  FROM orders
)
SELECT orders.id, orders.order_total
FROM orders, average_order
WHERE orders.order_total > average_order.avg_total;`,
    predictCorrect: "Returns orders above the average order total",
  },
  {
    id: "recursive-cte-concept",
    pathId,
    moduleId: "ctes",
    title: "Recursive CTE Concept",
    description: "Understand the idea behind recursive CTEs.",
    xp: 95,
    table: ordersTable,
    focus: "recursive CTE concepts",
    exampleQuery: `WITH number_list AS (
  SELECT 1 AS n
)
SELECT n
FROM number_list;`,
    predictCorrect: "Returns the starting number from the CTE",
  },
  {
    id: "row-number-basics",
    pathId,
    moduleId: "window-functions",
    title: "ROW_NUMBER Basics",
    description: "Assign unique row numbers.",
    xp: 90,
    table: employeesTable,
    focus: "ROW_NUMBER",
    exampleQuery: `SELECT name, salary,
  ROW_NUMBER() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;`,
    predictCorrect: "Ranks employees by salary with unique row numbers",
  },
  {
    id: "rank-basics",
    pathId,
    moduleId: "window-functions",
    title: "RANK Basics",
    description: "Rank rows while allowing gaps after ties.",
    xp: 90,
    table: employeesTable,
    focus: "RANK",
    exampleQuery: `SELECT name, salary,
  RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;`,
    predictCorrect: "Ranks employees by salary",
  },
  {
    id: "dense-rank-basics",
    pathId,
    moduleId: "window-functions",
    title: "DENSE_RANK Basics",
    description: "Rank rows without gaps after ties.",
    xp: 90,
    table: employeesTable,
    focus: "DENSE_RANK",
    exampleQuery: `SELECT name, salary,
  DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;`,
    predictCorrect: "Ranks employees by salary without skipped ranks",
  },
  {
    id: "partition-by-basics",
    pathId,
    moduleId: "window-functions",
    title: "PARTITION BY Basics",
    description: "Restart window calculations by group.",
    xp: 95,
    table: employeesTable,
    focus: "PARTITION BY",
    exampleQuery: `SELECT department, name, salary,
  ROW_NUMBER() OVER (
    PARTITION BY department
    ORDER BY salary DESC
  ) AS department_rank
FROM employees;`,
    predictCorrect: "Ranks employees separately inside each department",
  },
  {
    id: "running-totals",
    pathId,
    moduleId: "window-functions",
    title: "Running Totals",
    description: "Calculate cumulative totals with window functions.",
    xp: 100,
    table: ordersTable,
    focus: "running totals",
    exampleQuery: `SELECT order_date, order_total,
  SUM(order_total) OVER (ORDER BY order_date) AS running_total
FROM orders;`,
    predictCorrect: "Returns order totals with a cumulative running total",
  },
  {
    id: "top-n-queries",
    pathId,
    moduleId: "advanced-analytics",
    title: "Top-N Queries",
    description: "Return the highest or lowest N rows.",
    xp: 85,
    table: productsTable,
    focus: "Top-N queries",
    exampleQuery: `SELECT name, price
FROM products
ORDER BY price DESC
LIMIT 3;`,
    predictCorrect: "Returns the three most expensive products",
  },
  {
    id: "date-grouping",
    pathId,
    moduleId: "advanced-analytics",
    title: "Date Grouping",
    description: "Group records by date parts.",
    xp: 90,
    table: ordersTable,
    focus: "date grouping",
    exampleQuery: `SELECT order_date, SUM(order_total) AS daily_sales
FROM orders
GROUP BY order_date;`,
    predictCorrect: "Returns total sales by order date",
  },
  {
    id: "conditional-aggregation",
    pathId,
    moduleId: "advanced-analytics",
    title: "Conditional Aggregation",
    description: "Use CASE inside aggregates.",
    xp: 95,
    table: ordersTable,
    focus: "conditional aggregation",
    exampleQuery: `SELECT
  SUM(CASE WHEN order_total >= 100 THEN 1 ELSE 0 END) AS large_order_count
FROM orders;`,
    predictCorrect: "Counts orders whose total is at least 100",
  },
  {
    id: "percentages-ratios",
    pathId,
    moduleId: "advanced-analytics",
    title: "Percentages and Ratios",
    description: "Calculate ratios in SQL reports.",
    xp: 95,
    table: ordersTable,
    focus: "percentages and ratios",
    exampleQuery: `SELECT customer_id,
  order_total,
  order_total / 100.0 AS ratio_to_100
FROM orders;`,
    predictCorrect: "Returns each order as a ratio compared to 100",
  },
  {
    id: "index-basics",
    pathId,
    moduleId: "performance-concepts",
    title: "Index Basics",
    description: "Understand how indexes speed up lookups.",
    xp: 75,
    table: productsTable,
    focus: "indexes",
    exampleQuery: `CREATE INDEX idx_products_category
ON products (category);`,
    predictCorrect: "Creates an index on products.category",
  },
  {
    id: "query-plan-concept",
    pathId,
    moduleId: "performance-concepts",
    title: "Query Plan Concept",
    description: "Understand how databases plan query execution.",
    xp: 85,
    table: productsTable,
    focus: "query plans",
    exampleQuery: `EXPLAIN
SELECT name, price
FROM products
WHERE category = 'Accessories';`,
    predictCorrect: "Shows how the database may execute the query",
  },
  {
    id: "avoid-select-star",
    pathId,
    moduleId: "performance-concepts",
    title: "Avoiding SELECT Star",
    description: "Select only the columns you need.",
    xp: 75,
    table: productsTable,
    focus: "performance-focused column selection",
    exampleQuery: `SELECT name, price
FROM products
WHERE category = 'Accessories';`,
    predictCorrect: "Returns only needed columns for matching products",
  },
  {
    id: "filter-before-join",
    pathId,
    moduleId: "performance-concepts",
    title: "Filtering Before Joining",
    description: "Reduce rows early for cleaner query habits.",
    xp: 85,
    table: ordersTable,
    focus: "filtering before joins",
    exampleQuery: `SELECT customer_id, order_total
FROM orders
WHERE order_total >= 100;`,
    predictCorrect: "Filters orders before further analysis",
  },
  {
    id: "normalization-basics",
    pathId,
    moduleId: "database-design",
    title: "Normalization Basics",
    description: "Reduce duplicate data by designing related tables.",
    xp: 90,
    table: ordersTable,
    focus: "normalization",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Reconnects normalized customer and order data",
  },
  {
    id: "denormalization-concept",
    pathId,
    moduleId: "database-design",
    title: "Denormalization Concept",
    description: "Understand when duplicated data may help reporting.",
    xp: 90,
    table: ordersTable,
    focus: "denormalization",
    exampleQuery: `SELECT customer_id, order_total
FROM orders;`,
    predictCorrect:
      "Returns order data that could be used in a reporting table",
  },
  {
    id: "schema-design-review",
    pathId,
    moduleId: "database-design",
    title: "Schema Design Review",
    description: "Review clean table design and relationships.",
    xp: 100,
    table: ordersTable,
    focus: "schema design",
    exampleQuery: `SELECT id, customer_id, order_total
FROM orders;`,
    predictCorrect: "Returns key order fields used in schema analysis",
  },
];

export const advancedLessons = createLessonsFromSeeds(seeds);
