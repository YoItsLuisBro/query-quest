import SchemaCard from "../components/cards/SchemaCard";
import PageShell from "../components/ui/PageShell";
import { schemas } from "../data/schemas";

export default function SchemaLibraryPage() {
  return (
    <PageShell
      eyebrow="Schema Loaded"
      title="Schema Library"
      description="Inspect sample databases, tables, relationships, difficulty levels, and practice-ready schemas."
    >
      <div className="grid gap-8">
        {schemas.map((schema) => (
          <SchemaCard key={schema.id} schema={schema} />
        ))}
      </div>
    </PageShell>
  );
}
