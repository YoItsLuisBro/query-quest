import { createLessonsFromSeeds, type LessonSeed } from "./lessonBlueprint";
import { customersTable, ordersTable, productsTable } from "./sharedTables";

const pathId = "intermediate-sql";

const seeds: LessonSeed[] = [
  {
    id: "relationship-basics",
    pathId,
    moduleId: "table-relationships",
    title: "Relationship Basics",
    description: "Understand how tables connect through keys.",
    xp: 50,
    table: ordersTable,
    focus: "table relationships",
    exampleQuery: `SELECT id, customer_id, order_total
FROM orders;`,
    predictCorrect: "Returns orders with their customer relationship field",
  },
  {
    id: "one-to-many-relationships",
    pathId,
    moduleId: "table-relationships",
    title: "One-to-Many Relationships",
    description: "Learn how one customer can have many orders.",
    xp: 55,
    table: ordersTable,
    focus: "one-to-many relationships",
    exampleQuery: `SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;`,
    predictCorrect: "Counts how many orders each customer has",
  },
  {
    id: "many-to-many-relationships",
    pathId,
    moduleId: "table-relationships",
    title: "Many-to-Many Relationships",
    description: "Understand bridge tables and many-to-many patterns.",
    xp: 60,
    table: ordersTable,
    focus: "many-to-many relationships",
    exampleQuery: `SELECT id, customer_id
FROM orders;`,
    predictCorrect: "Shows relationship identifiers used in joins",
  },
  {
    id: "join-logic",
    pathId,
    moduleId: "table-relationships",
    title: "Join Logic",
    description: "Understand how SQL matches rows between tables.",
    xp: 55,
    table: customersTable,
    focus: "join logic",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Returns customers with matching orders",
  },
  {
    id: "inner-join-basics",
    pathId,
    moduleId: "inner-joins",
    title: "INNER JOIN Basics",
    description: "Return rows that match in both tables.",
    xp: 60,
    table: customersTable,
    focus: "INNER JOIN",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Returns matching customer and order rows",
  },
  {
    id: "table-aliases",
    pathId,
    moduleId: "inner-joins",
    title: "Table Aliases",
    description: "Use short aliases to make joins easier to read.",
    xp: 55,
    table: customersTable,
    focus: "table aliases",
    exampleQuery: `SELECT c.name, o.order_total
FROM customers AS c
INNER JOIN orders AS o
ON c.id = o.customer_id;`,
    predictCorrect: "Returns joined data using table aliases",
  },
  {
    id: "joined-column-selection",
    pathId,
    moduleId: "inner-joins",
    title: "Selecting Joined Columns",
    description: "Select fields from multiple joined tables.",
    xp: 55,
    table: customersTable,
    focus: "joined column selection",
    exampleQuery: `SELECT customers.name, customers.city, orders.order_date
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Returns customer fields with matching order dates",
  },
  {
    id: "filtering-joined-data",
    pathId,
    moduleId: "inner-joins",
    title: "Filtering Joined Data",
    description: "Use WHERE after joins to filter combined results.",
    xp: 60,
    table: ordersTable,
    focus: "filtering joined data",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id
WHERE orders.order_total > 100;`,
    predictCorrect: "Returns joined orders above 100",
  },
  {
    id: "left-join-basics",
    pathId,
    moduleId: "outer-joins",
    title: "LEFT JOIN Basics",
    description: "Keep all rows from the left table.",
    xp: 60,
    table: customersTable,
    focus: "LEFT JOIN",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Returns all customers and any matching orders",
  },
  {
    id: "nulls-in-joins",
    pathId,
    moduleId: "outer-joins",
    title: "NULLs in Joins",
    description: "Understand missing matches in outer joins.",
    xp: 60,
    table: customersTable,
    focus: "NULL join results",
    exampleQuery: `SELECT customers.name, orders.id AS order_id
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
WHERE orders.id IS NULL;`,
    predictCorrect: "Returns customers without matching orders",
  },
  {
    id: "right-join-concept",
    pathId,
    moduleId: "outer-joins",
    title: "RIGHT JOIN Concept",
    description: "Understand right-side preservation in joins.",
    xp: 55,
    table: ordersTable,
    focus: "RIGHT JOIN concept",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
RIGHT JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Keeps all rows from the right table",
  },
  {
    id: "full-outer-join-concept",
    pathId,
    moduleId: "outer-joins",
    title: "FULL OUTER JOIN Concept",
    description: "Understand keeping unmatched rows from both sides.",
    xp: 65,
    table: customersTable,
    focus: "FULL OUTER JOIN concept",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
FULL OUTER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Keeps matched and unmatched rows from both tables",
  },
  {
    id: "three-table-joins",
    pathId,
    moduleId: "multi-table-joins",
    title: "Three Table Joins",
    description: "Join three related tables in one query.",
    xp: 75,
    table: ordersTable,
    focus: "three-table joins",
    exampleQuery: `SELECT customers.name, orders.order_date, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Returns customer and order information together",
  },
  {
    id: "bridge-table-joins",
    pathId,
    moduleId: "multi-table-joins",
    title: "Bridge Table Joins",
    description: "Use bridge tables to connect many-to-many data.",
    xp: 80,
    table: ordersTable,
    focus: "bridge table joins",
    exampleQuery: `SELECT customer_id, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_id;`,
    predictCorrect: "Summarizes relationship rows by customer",
  },
  {
    id: "join-order",
    pathId,
    moduleId: "multi-table-joins",
    title: "Join Order",
    description: "Learn how query readability changes with join order.",
    xp: 65,
    table: customersTable,
    focus: "join order",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Returns matched rows based on the join condition",
  },
  {
    id: "debugging-joins",
    pathId,
    moduleId: "join-debugging",
    title: "Debugging Joins",
    description: "Find and fix common join mistakes.",
    xp: 80,
    table: customersTable,
    focus: "join debugging",
    exampleQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    brokenQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.email = orders.customer_id;`,
    fixedQuery: `SELECT customers.name, orders.order_total
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    predictCorrect: "Returns correctly matched customer orders",
  },
  {
    id: "group-by-basics",
    pathId,
    moduleId: "grouping-aggregation",
    title: "GROUP BY Basics",
    description: "Group rows and calculate summaries.",
    xp: 60,
    table: productsTable,
    focus: "GROUP BY",
    exampleQuery: `SELECT category, COUNT(*) AS total_products
FROM products
GROUP BY category;`,
    predictCorrect: "Counts products by category",
  },
  {
    id: "having-basics",
    pathId,
    moduleId: "grouping-aggregation",
    title: "HAVING Basics",
    description: "Filter grouped aggregate results.",
    xp: 65,
    table: productsTable,
    focus: "HAVING",
    exampleQuery: `SELECT category, COUNT(*) AS total_products
FROM products
GROUP BY category
HAVING COUNT(*) > 1;`,
    predictCorrect: "Returns categories with more than one product",
  },
  {
    id: "case-basics",
    pathId,
    moduleId: "case-statements",
    title: "CASE Basics",
    description: "Create conditional labels in query results.",
    xp: 65,
    table: productsTable,
    focus: "CASE statements",
    exampleQuery: `SELECT name, price,
  CASE
    WHEN price >= 100 THEN 'premium'
    ELSE 'standard'
  END AS price_label
FROM products;`,
    predictCorrect: "Returns product labels based on price",
  },
  {
    id: "insert-basics",
    pathId,
    moduleId: "data-modification",
    title: "INSERT Basics",
    description: "Add rows to a table.",
    xp: 60,
    table: productsTable,
    focus: "INSERT",
    exampleQuery: `INSERT INTO products (name, category, price, in_stock)
VALUES ('Webcam', 'Accessories', 80, true);`,
    predictCorrect: "Adds a new product row",
  },
];

export const intermediateLessons = createLessonsFromSeeds(seeds);
