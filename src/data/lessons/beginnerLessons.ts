import { createLessonsFromSeeds, type LessonSeed } from "./lessonBlueprint";
import { productsTable, studentsTable } from "./sharedTables";

const pathId = "sql-fundamentals";

const seeds: LessonSeed[] = [
  {
    id: "what-is-a-database",
    pathId,
    moduleId: "database-basics",
    title: "What Is a Database?",
    description: "Learn what databases are and why structured data matters.",
    xp: 25,
    table: studentsTable,
    focus: "database basics",
    exampleQuery: `SELECT *
FROM students;`,
    predictCorrect: "Returns every row and every column from students",
  },
  {
    id: "tables-rows-columns",
    pathId,
    moduleId: "database-basics",
    title: "Tables, Rows, and Columns",
    description: "Understand records, fields, rows, and columns.",
    xp: 25,
    table: studentsTable,
    focus: "tables, rows, and columns",
    exampleQuery: `SELECT first_name, grade
FROM students;`,
    predictCorrect: "Returns the first_name and grade columns",
  },
  {
    id: "primary-keys",
    pathId,
    moduleId: "database-basics",
    title: "Primary Keys",
    description: "Learn how primary keys uniquely identify rows.",
    xp: 30,
    table: studentsTable,
    focus: "primary keys",
    exampleQuery: `SELECT id, first_name, last_name
FROM students;`,
    predictCorrect: "Returns each student's id and name fields",
  },
  {
    id: "foreign-keys",
    pathId,
    moduleId: "database-basics",
    title: "Foreign Keys",
    description: "Learn how foreign keys connect related tables.",
    xp: 30,
    table: studentsTable,
    focus: "foreign keys",
    exampleQuery: `SELECT id, first_name
FROM students;`,
    predictCorrect: "Returns student identifiers and first names",
  },
  {
    id: "select-basics",
    pathId,
    moduleId: "select-queries",
    title: "SELECT Basics",
    description: "Use SELECT and FROM to retrieve columns from a table.",
    xp: 50,
    table: studentsTable,
    focus: "SELECT statements",
    exampleQuery: `SELECT first_name, last_name
FROM students;`,
    predictCorrect: "Returns only first_name and last_name from students",
    brokenQuery: `SELECT first_name last_name
students;`,
    fixedQuery: `SELECT first_name, last_name
FROM students;`,
  },
  {
    id: "select-specific-columns",
    pathId,
    moduleId: "select-queries",
    title: "Selecting Specific Columns",
    description: "Return only the columns needed for a result.",
    xp: 40,
    table: productsTable,
    focus: "specific column selection",
    exampleQuery: `SELECT name, price
FROM products;`,
    predictCorrect: "Returns only product names and prices",
  },
  {
    id: "select-star",
    pathId,
    moduleId: "select-queries",
    title: "Using SELECT Star",
    description: "Understand when SELECT * is useful and when to avoid it.",
    xp: 35,
    table: productsTable,
    focus: "SELECT * usage",
    exampleQuery: `SELECT *
FROM products;`,
    predictCorrect: "Returns every column from products",
  },
  {
    id: "aliases-with-as",
    pathId,
    moduleId: "select-queries",
    title: "Aliases With AS",
    description: "Rename output columns with aliases.",
    xp: 40,
    table: productsTable,
    focus: "column aliases",
    exampleQuery: `SELECT name AS product_name, price AS product_price
FROM products;`,
    predictCorrect: "Returns renamed output columns",
  },
  {
    id: "distinct-values",
    pathId,
    moduleId: "select-queries",
    title: "DISTINCT Values",
    description: "Remove duplicate values from query results.",
    xp: 40,
    table: productsTable,
    focus: "DISTINCT",
    exampleQuery: `SELECT DISTINCT category
FROM products;`,
    predictCorrect: "Returns each product category once",
  },
  {
    id: "where-basics",
    pathId,
    moduleId: "filtering-data",
    title: "WHERE Basics",
    description: "Filter rows with WHERE conditions.",
    xp: 50,
    table: studentsTable,
    focus: "WHERE filtering",
    exampleQuery: `SELECT first_name, grade
FROM students
WHERE grade >= 90;`,
    predictCorrect: "Returns students with grade 90 or higher",
  },
  {
    id: "comparison-operators",
    pathId,
    moduleId: "filtering-data",
    title: "Comparison Operators",
    description: "Use =, !=, >, <, >=, and <= in filters.",
    xp: 45,
    table: productsTable,
    focus: "comparison operators",
    exampleQuery: `SELECT name, price
FROM products
WHERE price > 50;`,
    predictCorrect: "Returns products priced above 50",
  },
  {
    id: "and-or-not",
    pathId,
    moduleId: "filtering-data",
    title: "AND, OR, and NOT",
    description: "Combine multiple WHERE conditions.",
    xp: 50,
    table: studentsTable,
    focus: "compound conditions",
    exampleQuery: `SELECT first_name, grade
FROM students
WHERE grade >= 80 AND enrolled = true;`,
    predictCorrect: "Returns enrolled students with grade 80 or higher",
  },
  {
    id: "between-filter",
    pathId,
    moduleId: "filtering-data",
    title: "BETWEEN Filters",
    description: "Filter values inside a range.",
    xp: 45,
    table: productsTable,
    focus: "BETWEEN",
    exampleQuery: `SELECT name, price
FROM products
WHERE price BETWEEN 25 AND 150;`,
    predictCorrect: "Returns products priced between 25 and 150",
  },
  {
    id: "in-filter",
    pathId,
    moduleId: "filtering-data",
    title: "IN Filters",
    description: "Match values from a list.",
    xp: 45,
    table: productsTable,
    focus: "IN",
    exampleQuery: `SELECT name, category
FROM products
WHERE category IN ('Accessories', 'Displays');`,
    predictCorrect: "Returns products in Accessories or Displays",
  },
  {
    id: "like-filter",
    pathId,
    moduleId: "filtering-data",
    title: "LIKE Pattern Matching",
    description: "Search text patterns with LIKE.",
    xp: 45,
    table: studentsTable,
    focus: "LIKE",
    exampleQuery: `SELECT first_name, last_name
FROM students
WHERE last_name LIKE 'C%';`,
    predictCorrect: "Returns students whose last_name starts with C",
  },
  {
    id: "order-by-basics",
    pathId,
    moduleId: "sorting-limiting",
    title: "ORDER BY Basics",
    description: "Sort results with ORDER BY.",
    xp: 45,
    table: productsTable,
    focus: "ORDER BY",
    exampleQuery: `SELECT name, price
FROM products
ORDER BY price DESC;`,
    predictCorrect: "Returns products sorted from highest price to lowest",
  },
  {
    id: "limit-results",
    pathId,
    moduleId: "sorting-limiting",
    title: "LIMIT Results",
    description: "Restrict how many rows are returned.",
    xp: 40,
    table: productsTable,
    focus: "LIMIT",
    exampleQuery: `SELECT name, price
FROM products
ORDER BY price DESC
LIMIT 3;`,
    predictCorrect: "Returns the three most expensive products",
  },
  {
    id: "count-basics",
    pathId,
    moduleId: "aggregate-basics",
    title: "COUNT Basics",
    description: "Count rows with COUNT.",
    xp: 50,
    table: studentsTable,
    focus: "COUNT",
    exampleQuery: `SELECT COUNT(*) AS total_students
FROM students;`,
    predictCorrect: "Returns the number of rows in students",
  },
  {
    id: "sum-avg-basics",
    pathId,
    moduleId: "aggregate-basics",
    title: "SUM and AVG Basics",
    description: "Calculate totals and averages.",
    xp: 55,
    table: productsTable,
    focus: "SUM and AVG",
    exampleQuery: `SELECT AVG(price) AS average_price
FROM products;`,
    predictCorrect: "Returns the average product price",
  },
  {
    id: "min-max-basics",
    pathId,
    moduleId: "aggregate-basics",
    title: "MIN and MAX Basics",
    description: "Find lowest and highest values.",
    xp: 55,
    table: productsTable,
    focus: "MIN and MAX",
    exampleQuery: `SELECT MIN(price) AS lowest_price, MAX(price) AS highest_price
FROM products;`,
    predictCorrect: "Returns the lowest and highest product prices",
  },
];

export const beginnerLessons = createLessonsFromSeeds(seeds);
