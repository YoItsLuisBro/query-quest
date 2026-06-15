import type { Project } from "../../types/learning";
import BrutalistButton from "../ui/BrutalistButton";
import TerminalPanel from "../ui/TerminalPanel";

interface ProjectCardProps {
  project: Project;
}

function getAccent(project: Project) {
  if (project.difficulty === "Beginner") return "cyan";
  if (project.difficulty === "Intermediate") return "emerald";
  return "violet";
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TerminalPanel
      eyebrow="Database Mission"
      title={project.title}
      accent={getAccent(project)}
    >
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3">
          <span className="border-2 border-slate-100 bg-cyan-300 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#a78bfa]">
            {project.difficulty}
          </span>

          <span className="border-2 border-slate-100 bg-slate-900 px-3 py-2 text-xs font-black uppercase text-slate-100 shadow-[3px_3px_0px_#22d3ee]">
            {project.starterSchema}
          </span>
        </div>

        <div>
          <p className="text-xs font-black uppercase text-cyan-300">
            Skills Practiced
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="border border-slate-700 bg-slate-950 px-2 py-1 text-xs uppercase text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-2 border-slate-700 bg-slate-950 p-4">
          <p className="text-xs font-black uppercase text-emerald-300">
            Required Queries
          </p>

          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
            {project.requiredQueries.map((query) => (
              <li key={query}>{query}</li>
            ))}
          </ul>
        </div>

        <div className="border-2 border-slate-700 bg-slate-950 p-4">
          <p className="text-xs font-black uppercase text-violet-300">
            Completion Checklist
          </p>

          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
            {project.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <BrutalistButton variant="emerald">Open Project</BrutalistButton>
      </div>
    </TerminalPanel>
  );
}
