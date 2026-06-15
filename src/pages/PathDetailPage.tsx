import { useParams } from "react-router";
import ModuleCard from "../components/cards/ModuleCard";
import PageShell from "../components/ui/PageShell";
import ProgressBar from "../components/ui/ProgressBar";
import XPBadge from "../components/ui/XPBadge";
import { getPathById } from "../data/paths";

export default function PathDetailPage() {
  const { pathId } = useParams();
  const path = getPathById(pathId);

  if (!path) {
    return (
      <PageShell
        eyebrow="Path Missing"
        title="404: Path Not Found"
        description="The requested SQL path does not exist."
      />
    );
  }

  return (
    <PageShell
      eyebrow="Path Loaded"
      title={path.title}
      description={path.description}
    >
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-4">
          <XPBadge xp={path.xp} />

          <span className="border-2 border-slate-100 bg-violet-400 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
            {path.difficulty}
          </span>
        </div>

        <ProgressBar
          value={path.completedLessons}
          max={path.totalLessons}
          label="Path Progress"
        />

        <div className="grid gap-6">
          {path.modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
