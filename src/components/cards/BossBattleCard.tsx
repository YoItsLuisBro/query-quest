import type { BossBattle } from "../../types/learning";
import BrutalistButton from "../ui/BrutalistButton";
import TerminalPanel from "../ui/TerminalPanel";
import XPBadge from "../ui/XPBadge";

interface BossBattleCardProps {
  boss: BossBattle;
}

const statusClasses: Record<BossBattle["status"], string> = {
  Locked: "bg-slate-800 text-slate-300 shadow-[3px_3px_0px_#64748b]",
  Unlocked: "bg-cyan-300 text-slate-950 shadow-[3px_3px_0px_#a78bfa]",
  Completed: "bg-emerald-400 text-slate-950 shadow-[3px_3px_0px_#22d3ee]",
};

export default function BossBattleCard({ boss }: BossBattleCardProps) {
  const isLocked = boss.status === "Locked";

  return (
    <TerminalPanel
      eyebrow={boss.status === "Locked" ? "Boss Locked" : "Boss Unlocked"}
      title={boss.title}
      accent={isLocked ? "rose" : "violet"}
    >
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3">
          <XPBadge xp={boss.xp} />

          <span
            className={[
              "border-2 border-slate-100 px-3 py-2 text-xs font-black uppercase",
              statusClasses[boss.status],
            ].join(" ")}
          >
            {boss.status}
          </span>

          <span className="border-2 border-slate-100 bg-violet-400 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
            {boss.difficulty}
          </span>
        </div>

        <p className="leading-7 text-slate-300">{boss.description}</p>

        <div>
          <p className="text-xs font-black uppercase text-cyan-300">
            Required Skills
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {boss.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="border border-slate-700 bg-slate-950 px-2 py-1 text-xs uppercase text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <BrutalistButton
          variant={isLocked ? "slate" : "violet"}
          disabled={isLocked}
        >
          {isLocked ? "Locked" : "Start Battle"}
        </BrutalistButton>
      </div>
    </TerminalPanel>
  );
}
