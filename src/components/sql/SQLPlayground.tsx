import { useState } from "react";
import BrutalistButton from "../ui/BrutalistButton";
import QueryBlock from "../ui/QueryBlock";
import ResultTable from "../ui/ResultTable";
import TerminalPanel from "../ui/TerminalPanel";

const defaultQuery = `SELECT name, price
FROM products
WHERE price > 50;`;

const exampleQueries = [
  `SELECT name, price
FROM products;`,
  `SELECT name, price
FROM products
WHERE price > 50;`,
  `SELECT category, COUNT(*) AS total_products
FROM products
GROUP BY category;`,
];

const productRows = [
  { id: 1, name: "Mechanical Keyboard", category: "Accessories", price: 120 },
  { id: 2, name: "USB-C Cable", category: "Accessories", price: 15 },
  { id: 3, name: "Monitor", category: "Displays", price: 220 },
  { id: 4, name: "Mouse Pad", category: "Accessories", price: 20 },
  { id: 5, name: "Laptop Stand", category: "Desk Setup", price: 65 },
];

const schemaColumns = [
  { key: "column", label: "column" },
  { key: "type", label: "type" },
];

const schemaRows = [
  { column: "id", type: "number" },
  { column: "name", type: "text" },
  { column: "category", type: "text" },
  { column: "price", type: "number" },
];

function runMockQuery(query: string) {
  const normalizedQuery = query.toLowerCase();

  if (
    normalizedQuery.includes("count") &&
    normalizedQuery.includes("group by")
  ) {
    return {
      columns: [
        { key: "category", label: "category" },
        { key: "total_products", label: "total_products" },
      ],
      rows: [
        { category: "Accessories", total_products: 3 },
        { category: "Displays", total_products: 1 },
        { category: "Desk Setup", total_products: 1 },
      ],
    };
  }

  if (normalizedQuery.includes("price > 50")) {
    return {
      columns: [
        { key: "name", label: "name" },
        { key: "price", label: "price" },
      ],
      rows: productRows
        .filter((product) => product.price > 50)
        .map((product) => ({
          name: product.name,
          price: product.price,
        })),
    };
  }

  if (normalizedQuery.includes("select name, price")) {
    return {
      columns: [
        { key: "name", label: "name" },
        { key: "price", label: "price" },
      ],
      rows: productRows.map((product) => ({
        name: product.name,
        price: product.price,
      })),
    };
  }

  return {
    columns: [
      { key: "id", label: "id" },
      { key: "name", label: "name" },
      { key: "category", label: "category" },
      { key: "price", label: "price" },
    ],
    rows: productRows,
  };
}

export default function SQLPlayground() {
  const [query, setQuery] = useState(defaultQuery);
  const [result, setResult] = useState(runMockQuery(defaultQuery));

  function handleRunQuery() {
    // This is intentionally mocked for now.
    // If real SQL execution is added later, it should run in a sandboxed engine.
    setResult(runMockQuery(query));
  }

  function handleReset() {
    setQuery(defaultQuery);
    setResult(runMockQuery(defaultQuery));
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
        <TerminalPanel eyebrow="SQL Editor" title="Query Input" accent="cyan">
          <div className="space-y-5">
            <textarea
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-h-72 w-full resize-y border-2 border-slate-600 bg-slate-950 p-4 font-mono text-sm leading-7 text-cyan-200 outline-none focus:border-cyan-300"
              spellCheck={false}
              aria-label="SQL query editor"
            />

            <div className="flex flex-wrap gap-4">
              <BrutalistButton onClick={handleRunQuery} variant="emerald">
                Run Query
              </BrutalistButton>

              <BrutalistButton onClick={handleReset} variant="slate">
                Reset
              </BrutalistButton>
            </div>
          </div>
        </TerminalPanel>

        <TerminalPanel
          eyebrow="Schema Reference"
          title="products"
          accent="violet"
        >
          <ResultTable
            title="products Schema"
            columns={schemaColumns}
            rows={schemaRows}
          />
        </TerminalPanel>
      </section>

      <TerminalPanel
        eyebrow="Example Queries"
        title="Load a Pattern"
        accent="amber"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {exampleQueries.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => setQuery(example)}
              className="border-2 border-slate-700 bg-slate-950 p-4 text-left text-sm text-cyan-200 transition-colors hover:border-cyan-300"
            >
              <pre className="whitespace-pre-wrap">
                <code>{example}</code>
              </pre>
            </button>
          ))}
        </div>
      </TerminalPanel>

      <TerminalPanel
        eyebrow="Result Set"
        title="Mock Query Output"
        accent="emerald"
      >
        <div className="space-y-5">
          <QueryBlock query={query} label="Last Executed Query" />
          <ResultTable columns={result.columns} rows={result.rows} />
        </div>
      </TerminalPanel>
    </div>
  );
}
