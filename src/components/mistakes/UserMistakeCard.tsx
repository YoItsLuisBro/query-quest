import type { UserMistake } from "../../utils/userMistakes";
import { deleteUserMistake } from "../../utils/userMistakes";
import BrutalistButton from "../ui/BrutalistButton";
import QueryBlock from "../ui/QueryBlock";

interface UserMistakeCardProps {
  mistake: UserMistake;
}

export default function UserMistakeCard({ mistake }: UserMistakeCardProps) {
  const createdDate = new Date(mistake.createdAt).toLocaleDateString();

  return (
    <article className="border-2 border-slate-100 bg-slate-900 p-5 shadow-[5px_5px_0px_#fb7185]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="border-2 border-slate-100 bg-rose-300 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
          {mistake.topic}
        </span>

        <span className="text-xs font-black uppercase text-slate-400">
          Saved {createdDate}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-black uppercase text-white">
        {mistake.title}
      </h3>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-black uppercase text-rose-300">
            Broken Query
          </p>
          <QueryBlock query={mistake.brokenQuery} />
        </div>

        <div>
          <p className="mb-2 text-xs font-black uppercase text-emerald-300">
            Fixed Query
          </p>
          <QueryBlock query={mistake.fixedQuery} />
        </div>
      </div>

      <div className="mt-5 border-2 border-slate-700 bg-slate-950 p-4">
        <p className="text-xs font-black uppercase text-amber-300">
          Lesson Learned
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {mistake.explanation}
        </p>
      </div>

      <div className="mt-5">
        <BrutalistButton
          type="button"
          variant="slate"
          onClick={() => deleteUserMistake(mistake.id)}
        >
          Delete Saved Mistake
        </BrutalistButton>
      </div>
    </article>
  );
}
