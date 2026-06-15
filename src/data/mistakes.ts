import type { QueryMistake } from "../types/learning";

export const mistakes: QueryMistake[] = [
  {
    id: "forgot-from",
    title: "Forgot FROM in a SELECT query.",
    brokenQuery: `SELECT first_name, last_name
students;`,
    fixedQuery: `SELECT first_name, last_name
FROM students;`,
    explanation:
      "FROM tells SQL which table to read data from. Without FROM, SQL does not know where the columns live.",
    topic: "SELECT",
  },
  {
    id: "missing-comma",
    title: "Forgot comma between selected columns.",
    brokenQuery: `SELECT first_name last_name
FROM students;`,
    fixedQuery: `SELECT first_name, last_name
FROM students;`,
    explanation:
      "When selecting multiple columns, separate each column name with a comma.",
    topic: "SELECT",
  },
  {
    id: "where-vs-having",
    title: "Used WHERE instead of HAVING with aggregate results.",
    brokenQuery: `SELECT department, COUNT(*) AS total_employees
FROM employees
WHERE COUNT(*) > 5
GROUP BY department;`,
    fixedQuery: `SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;`,
    explanation:
      "WHERE filters rows before grouping. HAVING filters groups after GROUP BY.",
    topic: "GROUP BY",
  },
  {
    id: "forgot-join-condition",
    title: "Joined tables without an ON condition.",
    brokenQuery: `SELECT customers.name, orders.id
FROM customers
INNER JOIN orders;`,
    fixedQuery: `SELECT customers.name, orders.id
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;`,
    explanation:
      "JOIN needs an ON condition so SQL knows how the two tables are related.",
    topic: "JOIN",
  },
  {
    id: "select-star-overuse",
    title: "Used SELECT * when only a few columns were needed.",
    brokenQuery: `SELECT *
FROM products;`,
    fixedQuery: `SELECT name, price
FROM products;`,
    explanation:
      "SELECT * returns every column. In real projects, selecting only the needed columns keeps results cleaner and can improve performance habits.",
    topic: "Performance",
  },
];
