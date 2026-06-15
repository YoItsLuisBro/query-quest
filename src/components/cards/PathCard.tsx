import { Link } from "react-router";
import type { LearningPath } from "../../types/learning";
import ProgressBar from "../ui/ProgressBar";
import XPBadge from "../ui/XPBadge";

interface PathCardProps {
  path: LearningPath;
}

const accentShadow = {
  cyan: "shadow-[6px_6px_0px_#22d3ee]",
  emerald: "shadow-[6px_6px_0px_#10b981]",
  violet: "shadow-[6px_6px_0px_#a78bfa]",
  amber: "shadow-[6px_6px_0px_#f59e0b]",
  rose: "shadow-[6px_6px_0px_#f43f5e]",
};

const accentText = {
  cyan: "text-cyan-300",
  emerald: "text-emerald-300",
  violet: "text-violet-300",
  amber: "text-amber-300",
  rose: "text-rose-300",
};

export default function PathCard({ path }: PathCardProps) {
  return (
    <Link
      to={`/paths/${path.id}`}
      className={[
        "block border-2 border-slate-100 bg-slate-900 p-5 transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        accentShadow[path.accent],
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p
          className={[
            "text-xs font-black uppercase",
            accentText[path.accent],
          ].join(" ")}
        >
          {path.difficulty}
        </p>

        <XPBadge xp={path.xp} />
      </div>

      <h2 className="mt-4 text-2xl font-black uppercase text-white">
        {path.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {path.description}
      </p>

      <div className="mt-5">
        <ProgressBar
          value={path.completedLessons}
          max={path.totalLessons}
          label="Path Progress"
        />
      </div>

      <p className="mt-4 text-xs font-black uppercase text-slate-400">
        {path.modules.length} Modules / {path.totalLessons} Lessons
      </p>
    </Link>
  );
}
