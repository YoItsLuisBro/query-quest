import type { SchemaDatabase } from "../../types/learning";
import BrutalistButton from "../ui/BrutalistButton";
import TerminalPanel from "../ui/TerminalPanel";
import SchemaDiagram from "../sql/SchemaDiagram";

interface SchemaCardProps {
  schema: SchemaDatabase;
}

export default function SchemaCard({ schema }: SchemaCardProps) {
  return (
    <TerminalPanel eyebrow="Schema Loaded" title={schema.name} accent="cyan">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3">
          <span className="border-2 border-slate-100 bg-cyan-300 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#a78bfa]">
            {schema.difficulty}
          </span>

          <span className="border-2 border-slate-100 bg-slate-900 px-3 py-2 text-xs font-black uppercase text-slate-100 shadow-[3px_3px_0px_#22d3ee]">
            {schema.tables.length} Tables
          </span>
        </div>

        <p className="leading-7 text-slate-300">{schema.description}</p>

        <SchemaDiagram schema={schema} />

        <div className="border-2 border-slate-700 bg-slate-950 p-4">
          <p className="text-xs font-black uppercase text-emerald-300">
            Relationships
          </p>

          <div className="mt-3 grid gap-2">
            {schema.relationships.map((relationship) => (
              <p
                key={`${relationship.from}-${relationship.to}`}
                className="border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300"
              >
                <span className="text-cyan-300">{relationship.from}</span>
                <span className="mx-2 text-slate-500">→</span>
                <span className="text-violet-300">{relationship.to}</span>
              </p>
            ))}
          </div>
        </div>

        <BrutalistButton variant="emerald">Practice Schema</BrutalistButton>
      </div>
    </TerminalPanel>
  );
}
