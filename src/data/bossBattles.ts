import type { BossBattle } from "../types/learning";

export const bossBattles: BossBattle[] = [
  {
    id: "student-grade-report-boss",
    title: "Student Grade Report Boss",
    difficulty: "Boss Level",
    xp: 300,
    status: "Unlocked",
    enemyName: "The Registrar Warden",
    description:
      "Build a clean student grade report using SELECT, WHERE, ORDER BY, and COUNT.",
    scenario:
      "The school registrar needs a fast report showing enrolled students, their grades, and a summary count. The raw student table is messy, and your job is to extract the right records.",
    requiredSkills: ["SELECT", "WHERE", "ORDER BY", "COUNT"],
    tables: ["students"],
    stages: [
      {
        id: "student-grade-stage-1",
        title: "Stage 1: Enrolled Student Roster",
        objective: "Return only enrolled students with their names and grades.",
        prompt:
          "The registrar only wants students who are currently enrolled. Show first_name, last_name, and grade.",
        starterQuery: `SELECT
FROM students
WHERE;`,
        solution: `SELECT first_name, last_name, grade
FROM students
WHERE enrolled = true;`,
        hints: [
          "Use SELECT to choose the columns.",
          "Use FROM students.",
          "Use WHERE enrolled = true.",
        ],
        successCriteria: [
          "Selects first_name, last_name, and grade.",
          "Reads from students.",
          "Filters enrolled students only.",
        ],
      },
      {
        id: "student-grade-stage-2",
        title: "Stage 2: Highest Grades First",
        objective: "Sort enrolled students from highest grade to lowest.",
        prompt:
          "Now sort the enrolled students so the highest grades appear first.",
        starterQuery: `SELECT first_name, last_name, grade
FROM students
WHERE enrolled = true;`,
        solution: `SELECT first_name, last_name, grade
FROM students
WHERE enrolled = true
ORDER BY grade DESC;`,
        hints: [
          "Keep the enrolled filter.",
          "Use ORDER BY grade.",
          "DESC means highest to lowest.",
        ],
        successCriteria: [
          "Keeps enrolled = true.",
          "Uses ORDER BY grade DESC.",
          "Returns names and grades.",
        ],
      },
      {
        id: "student-grade-stage-3",
        title: "Stage 3: Count Enrolled Students",
        objective: "Count how many students are enrolled.",
        prompt:
          "The registrar also needs a count of currently enrolled students.",
        starterQuery: `SELECT COUNT(*)
FROM students;`,
        solution: `SELECT COUNT(*) AS enrolled_students
FROM students
WHERE enrolled = true;`,
        hints: [
          "Use COUNT(*).",
          "Add a clear alias.",
          "Filter with WHERE enrolled = true.",
        ],
        successCriteria: [
          "Uses COUNT(*).",
          "Filters enrolled students only.",
          "Uses a meaningful alias.",
        ],
      },
    ],
  },

  {
    id: "store-order-investigation-boss",
    title: "Store Order Investigation Boss",
    difficulty: "Boss Level",
    xp: 400,
    status: "Unlocked",
    enemyName: "The Join Phantom",
    description: "Investigate store orders by joining customers and orders.",
    scenario:
      "A store manager wants to understand which customers placed orders, when they ordered, and how much they spent. The data is split across customers and orders.",
    requiredSkills: ["INNER JOIN", "LEFT JOIN", "Aliases", "ORDER BY"],
    tables: ["customers", "orders"],
    stages: [
      {
        id: "order-investigation-stage-1",
        title: "Stage 1: Match Customers to Orders",
        objective: "Join customers to their matching orders.",
        prompt:
          "Return customer names with their order totals using an INNER JOIN.",
        starterQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders;`,
        solution: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
        hints: [
          "INNER JOIN needs an ON condition.",
          "customers.id connects to orders.customer_id.",
          "Select columns from both tables.",
        ],
        successCriteria: [
          "Uses INNER JOIN.",
          "Uses ON customers.id = orders.customer_id.",
          "Returns customer name and order total.",
        ],
      },
      {
        id: "order-investigation-stage-2",
        title: "Stage 2: Include Order Dates",
        objective: "Return customer names, order dates, and totals.",
        prompt:
          "Expand the report so the manager can see when each order happened.",
        starterQuery: `SELECT customers.name
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
        solution: `SELECT customers.name, orders.order_date, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
        hints: [
          "Add orders.order_date.",
          "Keep orders.order_total.",
          "Keep the same join condition.",
        ],
        successCriteria: [
          "Returns customer name.",
          "Returns order_date.",
          "Returns order_total.",
        ],
      },
      {
        id: "order-investigation-stage-3",
        title: "Stage 3: Biggest Orders First",
        objective: "Sort the joined report by highest order total.",
        prompt: "The manager wants the largest orders to appear first.",
        starterQuery: `SELECT customers.name, orders.order_date, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
        solution: `SELECT customers.name, orders.order_date, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id
ORDER BY orders.order_total DESC;`,
        hints: [
          "Use ORDER BY after the join.",
          "Sort by orders.order_total.",
          "Use DESC for highest first.",
        ],
        successCriteria: [
          "Keeps the join.",
          "Uses ORDER BY orders.order_total DESC.",
          "Returns the full report.",
        ],
      },
    ],
  },

  {
    id: "monthly-sales-summary-boss",
    title: "Monthly Sales Summary Boss",
    difficulty: "Boss Level",
    xp: 450,
    status: "Unlocked",
    enemyName: "The Aggregate Beast",
    description:
      "Summarize customer sales using GROUP BY, COUNT, SUM, and HAVING.",
    scenario:
      "Leadership needs a customer sales summary. You need to group orders by customer and calculate order count and total spending.",
    requiredSkills: ["GROUP BY", "COUNT", "SUM", "HAVING"],
    tables: ["orders"],
    stages: [
      {
        id: "sales-summary-stage-1",
        title: "Stage 1: Count Orders Per Customer",
        objective: "Count how many orders each customer placed.",
        prompt:
          "Return customer_id and the number of orders for each customer.",
        starterQuery: `SELECT customer_id, COUNT(*) AS order_count
FROM orders;`,
        solution: `SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;`,
        hints: [
          "You selected customer_id with COUNT(*).",
          "That means you need GROUP BY customer_id.",
          "GROUP BY creates one result row per customer.",
        ],
        successCriteria: [
          "Selects customer_id.",
          "Uses COUNT(*).",
          "Groups by customer_id.",
        ],
      },
      {
        id: "sales-summary-stage-2",
        title: "Stage 2: Total Spending Per Customer",
        objective: "Calculate total spending per customer.",
        prompt: "Add a SUM of order_total so each customer has total_spent.",
        starterQuery: `SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;`,
        solution: `SELECT customer_id,
  COUNT(*) AS order_count,
  SUM(order_total) AS total_spent
FROM orders
GROUP BY customer_id;`,
        hints: [
          "Use SUM(order_total).",
          "Give it the alias total_spent.",
          "Keep GROUP BY customer_id.",
        ],
        successCriteria: [
          "Uses SUM(order_total).",
          "Keeps COUNT(*).",
          "Groups by customer_id.",
        ],
      },
      {
        id: "sales-summary-stage-3",
        title: "Stage 3: High-Value Customers",
        objective: "Show only customers who spent more than 100.",
        prompt:
          "Filter the grouped results to customers whose total spending is greater than 100.",
        starterQuery: `SELECT customer_id,
  COUNT(*) AS order_count,
  SUM(order_total) AS total_spent
FROM orders
GROUP BY customer_id;`,
        solution: `SELECT customer_id,
  COUNT(*) AS order_count,
  SUM(order_total) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(order_total) > 100;`,
        hints: [
          "Use HAVING for aggregate filters.",
          "WHERE filters rows before grouping.",
          "HAVING filters groups after grouping.",
        ],
        successCriteria: [
          "Uses HAVING.",
          "Filters SUM(order_total) > 100.",
          "Keeps the grouped summary.",
        ],
      },
    ],
  },

  {
    id: "premium-product-label-boss",
    title: "Premium Product Label Boss",
    difficulty: "Boss Level",
    xp: 350,
    status: "Unlocked",
    enemyName: "The CASE Construct",
    description: "Create business labels using CASE expressions.",
    scenario:
      "The store wants a product report that labels items as premium, standard, available, or unavailable.",
    requiredSkills: ["CASE", "WHEN", "THEN", "ELSE", "END"],
    tables: ["products"],
    stages: [
      {
        id: "premium-products-stage-1",
        title: "Stage 1: Price Tier",
        objective: "Label products as premium or standard.",
        prompt:
          "Return product name, price, and a price tier. Products with price >= 100 should be premium.",
        starterQuery: `SELECT name, price
FROM products;`,
        solution: `SELECT name, price,
  CASE
    WHEN price >= 100 THEN 'premium'
    ELSE 'standard'
  END AS price_tier
FROM products;`,
        hints: [
          "Use CASE after selecting name and price.",
          "WHEN price >= 100 THEN 'premium'.",
          "Close the CASE with END.",
        ],
        successCriteria: [
          "Uses CASE.",
          "Labels price >= 100 as premium.",
          "Aliases the result as price_tier.",
        ],
      },
      {
        id: "premium-products-stage-2",
        title: "Stage 2: Stock Status",
        objective: "Label products as available or unavailable.",
        prompt: "Add a stock label based on the in_stock boolean column.",
        starterQuery: `SELECT name, in_stock
FROM products;`,
        solution: `SELECT name, in_stock,
  CASE
    WHEN in_stock = true THEN 'available'
    ELSE 'unavailable'
  END AS stock_status
FROM products;`,
        hints: [
          "Check in_stock = true.",
          "Return available when true.",
          "Use ELSE for unavailable.",
        ],
        successCriteria: [
          "Uses CASE.",
          "Checks in_stock.",
          "Aliases the label as stock_status.",
        ],
      },
      {
        id: "premium-products-stage-3",
        title: "Stage 3: Full Product Label Report",
        objective: "Create a full product report with both labels.",
        prompt:
          "Return name, price, price_tier, and stock_status in one query.",
        starterQuery: `SELECT name, price
FROM products;`,
        solution: `SELECT name, price,
  CASE
    WHEN price >= 100 THEN 'premium'
    ELSE 'standard'
  END AS price_tier,
  CASE
    WHEN in_stock = true THEN 'available'
    ELSE 'unavailable'
  END AS stock_status
FROM products;`,
        hints: [
          "You can use more than one CASE expression.",
          "Separate selected expressions with commas.",
          "Each CASE needs its own END and alias.",
        ],
        successCriteria: [
          "Creates price_tier.",
          "Creates stock_status.",
          "Returns one report from products.",
        ],
      },
    ],
  },

  {
    id: "cte-gauntlet-boss",
    title: "CTE Gauntlet Boss",
    difficulty: "Architect Level",
    xp: 600,
    status: "Unlocked",
    enemyName: "The WITH Overlord",
    description: "Use CTEs to break a larger analysis into readable steps.",
    scenario:
      "The analytics team needs a readable query that finds large orders, summarizes them by customer, and filters high-value customers.",
    requiredSkills: ["CTEs", "GROUP BY", "SUM", "HAVING"],
    tables: ["orders"],
    stages: [
      {
        id: "cte-gauntlet-stage-1",
        title: "Stage 1: Large Orders CTE",
        objective: "Create a CTE containing only large orders.",
        prompt:
          "Create a CTE named large_orders that returns orders with order_total >= 100.",
        starterQuery: `WITH large_orders AS (

)
SELECT *
FROM large_orders;`,
        solution: `WITH large_orders AS (
  SELECT *
  FROM orders
  WHERE order_total >= 100
)
SELECT *
FROM large_orders;`,
        hints: [
          "Start with WITH large_orders AS.",
          "The inner query reads from orders.",
          "Filter with WHERE order_total >= 100.",
        ],
        successCriteria: [
          "Creates large_orders CTE.",
          "Filters order_total >= 100.",
          "Selects from the CTE.",
        ],
      },
      {
        id: "cte-gauntlet-stage-2",
        title: "Stage 2: Customer Totals CTE",
        objective: "Summarize large orders by customer.",
        prompt: "Use large_orders to calculate total_spent for each customer.",
        starterQuery: `WITH large_orders AS (
  SELECT *
  FROM orders
  WHERE order_total >= 100
)
SELECT customer_id
FROM large_orders;`,
        solution: `WITH large_orders AS (
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
        hints: [
          "Add a second CTE after a comma.",
          "Use SUM(order_total).",
          "Group by customer_id.",
        ],
        successCriteria: [
          "Creates customer_totals CTE.",
          "Uses SUM(order_total).",
          "Groups by customer_id.",
        ],
      },
      {
        id: "cte-gauntlet-stage-3",
        title: "Stage 3: Final High-Value Report",
        objective: "Return only high-value customer totals.",
        prompt:
          "Filter the customer_totals CTE to customers whose total_spent is greater than 100.",
        starterQuery: `WITH large_orders AS (
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
        solution: `WITH large_orders AS (
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
FROM customer_totals
WHERE total_spent > 100;`,
        hints: [
          "The final SELECT reads from customer_totals.",
          "The alias total_spent can be filtered in the outer query.",
          "Use WHERE total_spent > 100.",
        ],
        successCriteria: [
          "Keeps both CTEs.",
          "Filters total_spent in the final SELECT.",
          "Returns high-value customer totals.",
        ],
      },
    ],
  },
];
