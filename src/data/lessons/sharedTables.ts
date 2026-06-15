import type { SampleTable } from "../../types/learning";

export const studentsTable: SampleTable = {
  name: "students",
  columns: [
    { name: "id", type: "number" },
    { name: "first_name", type: "text" },
    { name: "last_name", type: "text" },
    { name: "grade", type: "number" },
    { name: "enrolled", type: "boolean" },
  ],
  rows: [
    {
      id: "1",
      values: {
        id: 1,
        first_name: "Maya",
        last_name: "Chen",
        grade: 92,
        enrolled: true,
      },
    },
    {
      id: "2",
      values: {
        id: 2,
        first_name: "Luis",
        last_name: "Rivera",
        grade: 85,
        enrolled: true,
      },
    },
    {
      id: "3",
      values: {
        id: 3,
        first_name: "Nora",
        last_name: "Smith",
        grade: 74,
        enrolled: false,
      },
    },
    {
      id: "4",
      values: {
        id: 4,
        first_name: "James",
        last_name: "Cole",
        grade: 98,
        enrolled: true,
      },
    },
  ],
};

export const productsTable: SampleTable = {
  name: "products",
  columns: [
    { name: "id", type: "number" },
    { name: "name", type: "text" },
    { name: "category", type: "text" },
    { name: "price", type: "number" },
    { name: "in_stock", type: "boolean" },
  ],
  rows: [
    {
      id: "1",
      values: {
        id: 1,
        name: "Keyboard",
        category: "Accessories",
        price: 120,
        in_stock: true,
      },
    },
    {
      id: "2",
      values: {
        id: 2,
        name: "USB-C Cable",
        category: "Accessories",
        price: 15,
        in_stock: true,
      },
    },
    {
      id: "3",
      values: {
        id: 3,
        name: "Monitor",
        category: "Displays",
        price: 220,
        in_stock: false,
      },
    },
    {
      id: "4",
      values: {
        id: 4,
        name: "Laptop Stand",
        category: "Desk Setup",
        price: 65,
        in_stock: true,
      },
    },
  ],
};

export const customersTable: SampleTable = {
  name: "customers",
  columns: [
    { name: "id", type: "number" },
    { name: "name", type: "text" },
    { name: "email", type: "text" },
    { name: "city", type: "text" },
  ],
  rows: [
    {
      id: "1",
      values: {
        id: 1,
        name: "Ava Stone",
        email: "ava@example.com",
        city: "Miami",
      },
    },
    {
      id: "2",
      values: {
        id: 2,
        name: "Noah Cruz",
        email: "noah@example.com",
        city: "Orlando",
      },
    },
    {
      id: "3",
      values: {
        id: 3,
        name: "Mia King",
        email: "mia@example.com",
        city: "Tampa",
      },
    },
  ],
};

export const ordersTable: SampleTable = {
  name: "orders",
  columns: [
    { name: "id", type: "number" },
    { name: "customer_id", type: "number" },
    { name: "order_total", type: "number" },
    { name: "order_date", type: "date" },
  ],
  rows: [
    {
      id: "1",
      values: {
        id: 1,
        customer_id: 1,
        order_total: 180,
        order_date: "2026-01-05",
      },
    },
    {
      id: "2",
      values: {
        id: 2,
        customer_id: 1,
        order_total: 60,
        order_date: "2026-01-12",
      },
    },
    {
      id: "3",
      values: {
        id: 3,
        customer_id: 2,
        order_total: 320,
        order_date: "2026-02-02",
      },
    },
  ],
};

export const employeesTable: SampleTable = {
  name: "employees",
  columns: [
    { name: "id", type: "number" },
    { name: "name", type: "text" },
    { name: "department", type: "text" },
    { name: "salary", type: "number" },
  ],
  rows: [
    {
      id: "1",
      values: {
        id: 1,
        name: "Elena Brooks",
        department: "Engineering",
        salary: 92000,
      },
    },
    {
      id: "2",
      values: {
        id: 2,
        name: "Marcus Lee",
        department: "Finance",
        salary: 78000,
      },
    },
    {
      id: "3",
      values: {
        id: 3,
        name: "Sofia Diaz",
        department: "Engineering",
        salary: 98000,
      },
    },
    {
      id: "4",
      values: {
        id: 4,
        name: "Owen Hill",
        department: "Support",
        salary: 56000,
      },
    },
  ],
};
