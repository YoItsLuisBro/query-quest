import { useState } from "react";
import type { BossBattle } from "../../types/learning";
import { useBossBattleProgress } from "../../hooks/useBossBattleProgress";
import { resetBossBattleProgress } from "../../utils/bossBattleProgress";
import BossBattleStageCard from "./BossBattleStageCard";
import BrutalistButton from "../ui/BrutalistButton";
import ProgressBar from "../ui/ProgressBar";
import XPBadge from "../ui/XPBadge";

interface BossBattleCardProps {
  battle: BossBattle;
}

const statusClasses: Record<BossBattle["status"], string> = {
  Locked: "bg-slate-900 text-slate-300",
  Unlocked: "bg-cyan-300 text-slate-950",
  Completed: "bg-emerald-300 text-slate-950",
};

export default function BossBattleCard({ battle }: BossBattleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = useBossBattleProgress(battle);

  function toggleExpanded() {
    setIsExpanded((currentValue) => !currentValue);
  }

  function handleResetBattle() {
    resetBossBattleProgress(battle);
  }

  return (
    <article className="border-2 border-slate-100 bg-slate-900 p-6 shadow-[6px_6px_0px_#f43f5e]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span
          className={[
            "border-2 border-slate-100 px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#22d3ee]",
            statusClasses[progress.computedStatus],
          ].join(" ")}
        >
          {progress.computedStatus}
        </span>

        <XPBadge xp={battle.xp} label="Battle XP" />
      </div>

      <p className="mt-5 text-xs font-black uppercase text-rose-300">
        Enemy: {battle.enemyName}
      </p>

      <h3 className="mt-2 text-2xl font-black uppercase text-white">
        {battle.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {battle.description}
      </p>

      <div className="mt-5 border-2 border-slate-700 bg-slate-950 p-4">
        <p className="text-xs font-black uppercase text-cyan-300">Scenario</p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {battle.scenario}
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="border-2 border-slate-700 bg-slate-950 p-4">
          <p className="text-xs font-black uppercase text-violet-300">
            Required Skills
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {battle.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="border border-slate-700 bg-slate-900 px-2 py-1 text-xs font-black uppercase text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-2 border-slate-700 bg-slate-950 p-4">
          <p className="text-xs font-black uppercase text-amber-300">
            Battle Tables
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {battle.tables.map((table) => (
              <span
                key={table}
                className="border border-slate-700 bg-slate-900 px-2 py-1 text-xs font-black uppercase text-slate-300"
              >
                {table}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <ProgressBar
          value={progress.completedStages}
          max={progress.totalStages}
          label="Battle Completion"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <BrutalistButton
          type="button"
          variant="rose"
          onClick={toggleExpanded}
          disabled={progress.computedStatus === "Locked"}
        >
          {isExpanded ? "Collapse Battle" : "Start Battle"}
        </BrutalistButton>

        <BrutalistButton
          type="button"
          variant="slate"
          onClick={handleResetBattle}
          disabled={progress.computedStatus === "Locked"}
        >
          Reset Battle
        </BrutalistButton>
      </div>

      {isExpanded ? (
        <div className="mt-8 space-y-6">
          {battle.stages.map((stage, index) => (
            <BossBattleStageCard
              key={stage.id}
              stage={stage}
              stageNumber={index + 1}
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
