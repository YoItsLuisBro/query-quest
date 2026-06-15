import { Link } from "react-router";
import type { LessonStatus } from "../../types/learning";
import type { LessonSearchItem } from "../../utils/lessonSearch";
import { useLessonProgress } from "../../hooks/useLessonProgress";
import ProgressBar from "../ui/ProgressBar";
import XPBadge from "../ui/XPBadge";

interface LessonSearchCardProps {
  item: LessonSearchItem;
  statusFilter: LessonStatus | "All";
}

const statusClasses: Record<LessonStatus, string> = {
  "Not Started": "bg-slate-900 text-slate-300",
  "In Progress": "bg-cyan-300 text-slate-950",
  Completed: "bg-emerald-400 text-slate-950",
  "Review Needed": "bg-amber-300 text-slate-950",
};

export default function LessonSearchCard({
  item,
  statusFilter,
}: LessonSearchCardProps) {
  const lessonProgress = useLessonProgress(item.challengeIds, item.xp);

  const dynamicStatus =
    item.challengeIds.length > 0 ? lessonProgress.status : item.status;

  if (statusFilter !== "All" && dynamicStatus !== statusFilter) {
    return null;
  }

  return (
    <Link
      to={`/lessons/${item.id}`}
      className="block border-2 border-slate-100 bg-slate-900 p-5 shadow-[5px_5px_0px_#22d3ee] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span
          className={[
            "border-2 border-slate-100 px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#22d3ee]",
            statusClasses[dynamicStatus],
          ].join(" ")}
        >
          {dynamicStatus}
        </span>

        <XPBadge xp={lessonProgress.earnedXp} label="Earned XP" />
      </div>

      <h3 className="mt-4 text-xl font-black uppercase text-white">
        {item.title}
      </h3>

      <p className="mt-2 text-xs font-black uppercase text-cyan-300">
        {item.pathTitle}
      </p>

      <p className="mt-1 text-xs font-black uppercase text-violet-300">
        {item.moduleTitle}
      </p>

      <div className="mt-4">
        <ProgressBar
          value={lessonProgress.completedChallenges}
          max={lessonProgress.totalChallenges}
          label="Challenge Progress"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.moduleTopics.slice(0, 5).map((topic) => (
          <span
            key={topic}
            className="border border-slate-700 bg-slate-950 px-2 py-1 text-xs uppercase text-slate-300"
          >
            {topic}
          </span>
        ))}
      </div>
    </Link>
  );
}
