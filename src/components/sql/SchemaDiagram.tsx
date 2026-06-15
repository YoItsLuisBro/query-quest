import type { SchemaDatabase } from "../../types/learning";

interface SchemaDiagramProps {
  schema: SchemaDatabase;
}

export default function SchemaDiagram({ schema }: SchemaDiagramProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {schema.tables.map((table) => (
        <div
          key={table.name}
          className="border-2 border-slate-700 bg-slate-950"
        >
          <div className="border-b-2 border-slate-700 bg-slate-800 px-4 py-3">
            <h4 className="font-black uppercase text-cyan-300">{table.name}</h4>
          </div>

          <div className="divide-y divide-slate-800">
            {table.columns.map((column) => (
              <div
                key={`${table.name}-${column.name}`}
                className="flex items-center justify-between gap-4 px-4 py-2 text-sm"
              >
                <span className="font-bold text-slate-200">{column.name}</span>
                <span className="text-xs uppercase text-slate-500">
                  {column.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
