import type { QueryMistake } from "../../types/learning";
import BrutalistButton from "../ui/BrutalistButton";
import QueryBlock from "../ui/QueryBlock";
import TerminalPanel from "../ui/TerminalPanel";

interface MistakeCardProps {
  mistake: QueryMistake;
}

export default function MistakeCard({ mistake }: MistakeCardProps) {
  return (
    <TerminalPanel
      eyebrow="Review Required"
      title={mistake.title}
      accent="rose"
    >
      <div className="space-y-5">
        <span className="inline-flex border-2 border-slate-100 bg-rose-500 px-3 py-2 text-xs font-black uppercase text-white shadow-[3px_3px_0px_#22d3ee]">
          Topic: {mistake.topic}
        </span>

        <QueryBlock label="Syntax Error" query={mistake.brokenQuery} />

        <QueryBlock label="Fixed Query" query={mistake.fixedQuery} />

        <div className="border-2 border-slate-700 bg-slate-950 p-4">
          <p className="text-xs font-black uppercase text-cyan-300">
            Explanation
          </p>

          <p className="mt-3 leading-7 text-slate-300">{mistake.explanation}</p>
        </div>

        <BrutalistButton variant="rose">Review Mistake</BrutalistButton>
      </div>
    </TerminalPanel>
  );
}
