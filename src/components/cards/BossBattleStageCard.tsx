import type { BossBattleStage } from "../../types/learning";
import { useBossBattleStageState } from "../../hooks/useBossBattleStageState";
import BrutalistButton from "../ui/BrutalistButton";
import QueryBlock from "../ui/QueryBlock";

interface BossBattleStageCardProps {
  stage: BossBattleStage;
  stageNumber: number;
}

export default function BossBattleStageCard({
  stage,
  stageNumber,
}: BossBattleStageCardProps) {
  const [stageState, setStageState] = useBossBattleStageState(stage.id);

  function updateUserQuery(userQuery: string) {
    setStageState({
      ...stageState,
      userQuery,
    });
  }

  function toggleSolution() {
    setStageState({
      ...stageState,
      isSolutionVisible: !stageState.isSolutionVisible,
    });
  }

  function markComplete() {
    setStageState({
      ...stageState,
      isCompleted: true,
    });
  }

  function resetStage() {
    setStageState({
      userQuery: "",
      isCompleted: false,
      isSolutionVisible: false,
    });
  }

  return (
    <article className="border-2 border-slate-100 bg-slate-950 p-5 shadow-[5px_5px_0px_#f43f5e]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="border-2 border-slate-100 bg-rose-300 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
          Stage {stageNumber}
        </span>

        <span
          className={[
            "border-2 border-slate-100 px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#a78bfa]",
            stageState.isCompleted
              ? "bg-emerald-300 text-slate-950"
              : "bg-slate-900 text-slate-300",
          ].join(" ")}
        >
          {stageState.isCompleted ? "Completed" : "Unfinished"}
        </span>
      </div>

      <h4 className="mt-4 text-xl font-black uppercase text-white">
        {stage.title}
      </h4>

      <p className="mt-2 text-sm font-black uppercase text-cyan-300">
        Objective: {stage.objective}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-300">{stage.prompt}</p>

      <div className="mt-5">
        <p className="mb-2 text-xs font-black uppercase text-violet-300">
          Starter Query
        </p>
        <QueryBlock query={stage.starterQuery} />
      </div>

      <div className="mt-5">
        <label
          htmlFor={`${stage.id}-answer`}
          className="text-xs font-black uppercase text-cyan-300"
        >
          Your Battle Query
        </label>

        <textarea
          id={`${stage.id}-answer`}
          value={stageState.userQuery}
          onChange={(event) => updateUserQuery(event.target.value)}
          placeholder="Write your SQL battle query here..."
          rows={8}
          className="mt-2 w-full resize-y border-2 border-slate-600 bg-slate-900 px-4 py-3 font-mono text-sm text-cyan-200 outline-none focus:border-cyan-300"
        />
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="border-2 border-slate-700 bg-slate-900 p-4">
          <p className="text-xs font-black uppercase text-amber-300">Hints</p>

          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
            {stage.hints.map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ul>
        </div>

        <div className="border-2 border-slate-700 bg-slate-900 p-4">
          <p className="text-xs font-black uppercase text-emerald-300">
            Success Criteria
          </p>

          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
            {stage.successCriteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </div>
      </div>

      {stageState.isSolutionVisible ? (
        <div className="mt-5">
          <p className="mb-2 text-xs font-black uppercase text-emerald-300">
            Boss Solution
          </p>
          <QueryBlock query={stage.solution} />
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <BrutalistButton type="button" variant="cyan" onClick={markComplete}>
          Mark Stage Complete
        </BrutalistButton>

        <BrutalistButton type="button" variant="slate" onClick={toggleSolution}>
          {stageState.isSolutionVisible ? "Hide Solution" : "Reveal Solution"}
        </BrutalistButton>

        <BrutalistButton type="button" variant="rose" onClick={resetStage}>
          Reset Stage
        </BrutalistButton>
      </div>
    </article>
  );
}
