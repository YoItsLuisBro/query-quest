import { Link } from "react-router";
import type { ReviewQueueItem } from "../../utils/reviewQueue";
import XPBadge from "../ui/XPBadge";

interface ReviewQueueCardProps {
  item: ReviewQueueItem;
}

const statusClasses: Record<ReviewQueueItem["status"], string> = {
  "Not Started": "bg-slate-900 text-slate-300",
  "In Progress": "bg-amber-300 text-slate-950",
};

export default function ReviewQueueCard({ item }: ReviewQueueCardProps) {
  return (
    <article className="border-2 border-slate-100 bg-slate-900 p-5 shadow-[5px_5px_0px_#f59e0b]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span
          className={[
            "border-2 border-slate-100 px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#22d3ee]",
            statusClasses[item.status],
          ].join(" ")}
        >
          {item.status}
        </span>

        <XPBadge xp={item.lessonXp} label="Lesson XP" />
      </div>

      <p className="mt-4 text-xs font-black uppercase text-cyan-300">
        {item.lessonTitle}
      </p>

      <h3 className="mt-2 text-xl font-black uppercase text-white">
        {item.challengeTitle}
      </h3>

      <p className="mt-2 text-xs font-black uppercase text-violet-300">
        Type: {item.challengeType}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-300">{item.reason}</p>

      <div className="mt-4 border-2 border-slate-700 bg-slate-950 p-4">
        <p className="text-xs font-black uppercase text-amber-300">Prompt</p>

        <p className="mt-2 text-sm leading-6 text-slate-300">{item.prompt}</p>
      </div>

      <div className="mt-5">
        <Link
          to={`/lessons/${item.lessonId}`}
          className="inline-flex border-2 border-slate-100 bg-cyan-300 px-4 py-3 text-sm font-black uppercase text-slate-950 shadow-[4px_4px_0px_#a78bfa] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Continue Lesson
        </Link>
      </div>
    </article>
  );
}
