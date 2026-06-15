import BrutalistButton from "../components/ui/BrutalistButton";
import PageShell from "../components/ui/PageShell";
import QueryBlock from "../components/ui/QueryBlock";

export default function NotFoundPage() {
  return (
    <PageShell
      eyebrow="Syntax Error"
      title="404: Route Not Found"
      description="The requested page does not exist in the QUERY//QUEST database."
    >
      <div className="space-y-6">
        <QueryBlock
          label="Broken Route"
          query={`SELECT *
FROM pages
WHERE path = 'unknown';

-- ERROR: no matching route found`}
        />

        <div className="flex flex-wrap gap-4">
          <BrutalistButton href="/" variant="cyan">
            Return Home
          </BrutalistButton>

          <BrutalistButton href="/paths" variant="emerald">
            Choose Path
          </BrutalistButton>

          <BrutalistButton href="/playground" variant="violet">
            Open Playground
          </BrutalistButton>
        </div>
      </div>
    </PageShell>
  );
}
