import type { SchemaDatabase } from "../types/learning";

export const schemas: SchemaDatabase[] = [
  {
    id: "school-database",
    name: "School Database",
    difficulty: "Beginner",
    description:
      "Practice student records, course enrollment, teachers, grades, and basic joins.",
    tables: [
      {
        name: "students",
        columns: [
          { name: "id", type: "number" },
          { name: "first_name", type: "text" },
          { name: "last_name", type: "text" },
          { name: "grade_level", type: "number" },
        ],
      },
      {
        name: "courses",
        columns: [
          { name: "id", type: "number" },
          { name: "course_name", type: "text" },
          { name: "teacher_id", type: "number" },
        ],
      },
      {
        name: "enrollments",
        columns: [
          { name: "id", type: "number" },
          { name: "student_id", type: "number" },
          { name: "course_id", type: "number" },
        ],
      },
      {
        name: "teachers",
        columns: [
          { name: "id", type: "number" },
          { name: "first_name", type: "text" },
          { name: "last_name", type: "text" },
        ],
      },
    ],
    relationships: [
      {
        from: "students.id",
        to: "enrollments.student_id",
      },
      {
        from: "courses.id",
        to: "enrollments.course_id",
      },
      {
        from: "teachers.id",
        to: "courses.teacher_id",
      },
    ],
  },
  {
    id: "store-database",
    name: "Store Database",
    difficulty: "Intermediate",
    description:
      "Analyze customers, orders, products, order items, revenue, and inventory behavior.",
    tables: [
      {
        name: "customers",
        columns: [
          { name: "id", type: "number" },
          { name: "name", type: "text" },
          { name: "email", type: "text" },
        ],
      },
      {
        name: "orders",
        columns: [
          { name: "id", type: "number" },
          { name: "customer_id", type: "number" },
          { name: "order_date", type: "date" },
        ],
      },
      {
        name: "order_items",
        columns: [
          { name: "id", type: "number" },
          { name: "order_id", type: "number" },
          { name: "product_id", type: "number" },
          { name: "quantity", type: "number" },
        ],
      },
      {
        name: "products",
        columns: [
          { name: "id", type: "number" },
          { name: "name", type: "text" },
          { name: "price", type: "number" },
        ],
      },
    ],
    relationships: [
      {
        from: "customers.id",
        to: "orders.customer_id",
      },
      {
        from: "orders.id",
        to: "order_items.order_id",
      },
      {
        from: "products.id",
        to: "order_items.product_id",
      },
    ],
  },
  {
    id: "movie-database",
    name: "Movie Database",
    difficulty: "Intermediate",
    description:
      "Explore movies, actors, directors, casts, many-to-many relationships, and entertainment analytics.",
    tables: [
      {
        name: "movies",
        columns: [
          { name: "id", type: "number" },
          { name: "title", type: "text" },
          { name: "release_year", type: "number" },
          { name: "director_id", type: "number" },
        ],
      },
      {
        name: "actors",
        columns: [
          { name: "id", type: "number" },
          { name: "name", type: "text" },
        ],
      },
      {
        name: "directors",
        columns: [
          { name: "id", type: "number" },
          { name: "name", type: "text" },
        ],
      },
      {
        name: "movie_cast",
        columns: [
          { name: "movie_id", type: "number" },
          { name: "actor_id", type: "number" },
          { name: "role_name", type: "text" },
        ],
      },
    ],
    relationships: [
      {
        from: "directors.id",
        to: "movies.director_id",
      },
      {
        from: "movies.id",
        to: "movie_cast.movie_id",
      },
      {
        from: "actors.id",
        to: "movie_cast.actor_id",
      },
    ],
  },
  {
    id: "finance-database",
    name: "Finance Database",
    difficulty: "Advanced",
    description:
      "Practice account balances, transactions, categories, budgets, reporting, and financial analysis.",
    tables: [
      {
        name: "accounts",
        columns: [
          { name: "id", type: "number" },
          { name: "account_name", type: "text" },
          { name: "account_type", type: "text" },
        ],
      },
      {
        name: "transactions",
        columns: [
          { name: "id", type: "number" },
          { name: "account_id", type: "number" },
          { name: "category_id", type: "number" },
          { name: "amount", type: "number" },
          { name: "transaction_date", type: "date" },
        ],
      },
      {
        name: "categories",
        columns: [
          { name: "id", type: "number" },
          { name: "name", type: "text" },
        ],
      },
      {
        name: "budgets",
        columns: [
          { name: "id", type: "number" },
          { name: "category_id", type: "number" },
          { name: "monthly_limit", type: "number" },
        ],
      },
    ],
    relationships: [
      {
        from: "accounts.id",
        to: "transactions.account_id",
      },
      {
        from: "categories.id",
        to: "transactions.category_id",
      },
      {
        from: "categories.id",
        to: "budgets.category_id",
      },
    ],
  },
];
