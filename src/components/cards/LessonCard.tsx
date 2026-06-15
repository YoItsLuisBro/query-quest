import { Link } from "react-router";
import type { LessonStatus } from "../../types/learning";
import XPBadge from "../ui/XPBadge";

interface LessonCardProps {
  id: string;
  title: string;
  status: LessonStatus;
  xp: number;
}

const statusClasses: Record<LessonStatus, string> = {
  "Not Started": "text-slate-400",
  "In Progress": "text-cyan-300",
  Completed: "text-emerald-300",
  "Review Needed": "text-amber-300",
};

export default function LessonCard({ id, title, status, xp }: LessonCardProps) {
  return (
    <Link
      to={`/lessons/${id}`}
      className="flex flex-col justify-between gap-3 border-2 border-slate-700 bg-slate-950 p-4 transition-colors hover:border-cyan-300 sm:flex-row sm:items-center"
    >
      <div>
        <h3 className="font-black uppercase text-white">{title}</h3>

        <p
          className={[
            "mt-1 text-xs font-black uppercase",
            statusClasses[status],
          ].join(" ")}
        >
          {status}
        </p>
      </div>

      <XPBadge xp={xp} />
    </Link>
  );
}
