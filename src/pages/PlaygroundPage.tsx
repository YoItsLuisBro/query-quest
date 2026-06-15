import SQLPlayground from "../components/sql/SQLPlayground";
import PageShell from "../components/ui/PageShell";

export default function PlaygroundPage() {
  return (
    <PageShell
      eyebrow="Query Arena"
      title="SQL Playground"
      description="Write mock SQL queries, inspect schemas, run simulated results, and practice without needing a real database yet."
    >
      <SQLPlayground />
    </PageShell>
  );
}
