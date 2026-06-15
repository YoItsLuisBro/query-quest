import type { LessonChallenge } from "../types/learning";

export const dailyChallenges: LessonChallenge[] = [
  {
    id: "daily-predict-products",
    type: "predict",
    title: "Predict One Result",
    prompt: "Which rows would this query return?",
    query: `SELECT name, price
FROM products
WHERE price > 50;`,
    options: [
      "A. All products",
      "B. Only products with price greater than 50",
      "C. Only products with price less than 50",
      "D. Only the price column",
    ],
    answer: "B. Only products with price greater than 50",
  },
  {
    id: "daily-fix-select",
    type: "debug",
    title: "Fix One Query",
    prompt: "Fix the broken SQL query.",
    query: `SELECT name price
products;`,
    answer: `SELECT name, price
FROM products;`,
    hints: [
      "Separate selected columns with a comma.",
      "Use FROM before the table name.",
    ],
  },
  {
    id: "daily-write-query",
    type: "write",
    title: "Write One Query",
    prompt:
      "Write a query that returns name and price from products where price is greater than 25.",
    answer: `SELECT name, price
FROM products
WHERE price > 25;`,
    hints: [
      "Use SELECT name, price.",
      "Read from the products table.",
      "Use WHERE price > 25.",
    ],
  },
];
