import { useState } from "react";
import type { LessonChallenge } from "../../types/learning";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import BrutalistButton from "../ui/BrutalistButton";
import QueryBlock from "../ui/QueryBlock";
import ResultTable from "../ui/ResultTable";
import TerminalPanel from "../ui/TerminalPanel";

interface ChallengeCardProps {
  challenge: LessonChallenge;
}

interface SavedChallengeState {
  selectedOption: string | null;
  userResponse: string;
  isCompleted: boolean;
}

function getChallengeAccent(challenge: LessonChallenge) {
  if (challenge.type === "debug") return "rose";
  if (challenge.type === "mission") return "emerald";
  if (challenge.type === "review") return "amber";
  if (challenge.type === "predict") return "violet";
  return "cyan";
}

function shouldShowTextInput(challenge: LessonChallenge) {
  return ["debug", "write", "explain", "mission", "review"].includes(
    challenge.type,
  );
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const [savedState, setSavedState] = useLocalStorage<SavedChallengeState>(
    `query-quest:challenge:${challenge.id}`,
    {
      selectedOption: null,
      userResponse: "",
      isCompleted: false,
    },
  );

  const [showHints, setShowHints] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const hasOptions = Boolean(challenge.options?.length);
  const hasHints = Boolean(challenge.hints?.length);
  const hasAnswer = Boolean(challenge.answer);
  const hasTextInput = shouldShowTextInput(challenge);

  const selectedCorrectly =
    savedState.selectedOption !== null &&
    savedState.selectedOption === challenge.answer;

  function handleSelectOption(option: string) {
    setSavedState((current) => ({
      ...current,
      selectedOption: option,
    }));
  }

  function handleUserResponseChange(value: string) {
    setSavedState((current) => ({
      ...current,
      userResponse: value,
    }));
  }

  function handleComplete() {
    setSavedState((current) => ({
      ...current,
      isCompleted: true,
    }));
  }

  function handleReset() {
    setSavedState({
      selectedOption: null,
      userResponse: "",
      isCompleted: false,
    });

    setShowHints(false);
    setShowAnswer(false);
  }

  return (
    <TerminalPanel
      eyebrow={savedState.isCompleted ? "Completed" : challenge.type}
      title={challenge.title}
      accent={
        savedState.isCompleted ? "emerald" : getChallengeAccent(challenge)
      }
    >
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={[
              "border-2 border-slate-100 px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#22d3ee]",
              savedState.isCompleted
                ? "bg-emerald-400 text-slate-950"
                : "bg-slate-900 text-slate-100",
            ].join(" ")}
          >
            {savedState.isCompleted ? "Challenge Complete" : "Training Mode"}
          </span>

          <span className="border-2 border-slate-100 bg-cyan-300 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#a78bfa]">
            {challenge.type}
          </span>

          {savedState.userResponse || savedState.selectedOption ? (
            <span className="border-2 border-slate-100 bg-violet-400 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
              Saved Locally
            </span>
          ) : null}
        </div>

        <p className="leading-7 text-slate-300">{challenge.prompt}</p>

        {challenge.query ? <QueryBlock query={challenge.query} /> : null}

        {challenge.table ? (
          <ResultTable
            title={`${challenge.table.name} Table`}
            columns={challenge.table.columns.map((column) => ({
              key: column.name,
              label: `${column.name} (${column.type})`,
            }))}
            rows={challenge.table.rows.map((row) => row.values)}
          />
        ) : null}

        {hasOptions ? (
          <div className="grid gap-2">
            {challenge.options?.map((option) => {
              const isSelected = savedState.selectedOption === option;
              const isCorrectAnswer = option === challenge.answer;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelectOption(option)}
                  className={[
                    "border-2 p-3 text-left text-sm font-bold transition-transform hover:translate-x-1 hover:translate-y-1",
                    isSelected && isCorrectAnswer
                      ? "border-emerald-300 bg-emerald-400 text-slate-950"
                      : isSelected
                        ? "border-rose-300 bg-rose-500 text-white"
                        : "border-slate-700 bg-slate-950 text-slate-300",
                  ].join(" ")}
                >
                  {option}
                </button>
              );
            })}

            {savedState.selectedOption ? (
              <div
                className={[
                  "border-2 p-4 text-sm font-black uppercase",
                  selectedCorrectly
                    ? "border-emerald-300 bg-emerald-950 text-emerald-300"
                    : "border-rose-300 bg-rose-950 text-rose-300",
                ].join(" ")}
              >
                {selectedCorrectly
                  ? "Correct. Result predicted."
                  : "Not quite. Review the query and try again."}
              </div>
            ) : null}
          </div>
        ) : null}

        {hasTextInput ? (
          <div>
            <label
              htmlFor={`response-${challenge.id}`}
              className="text-xs font-black uppercase text-cyan-300"
            >
              Your Response
            </label>

            <textarea
              id={`response-${challenge.id}`}
              value={savedState.userResponse}
              onChange={(event) => handleUserResponseChange(event.target.value)}
              placeholder="Write your query, explanation, or notes here..."
              className="mt-2 min-h-40 w-full resize-y border-2 border-slate-600 bg-slate-950 p-4 font-mono text-sm leading-7 text-cyan-200 outline-none focus:border-cyan-300"
              spellCheck={false}
            />
          </div>
        ) : null}

        <div className="flex flex-wrap gap-4">
          {hasHints ? (
            <BrutalistButton
              type="button"
              variant="slate"
              onClick={() => setShowHints((current) => !current)}
            >
              {showHints ? "Hide Hints" : "Show Hints"}
            </BrutalistButton>
          ) : null}

          {hasAnswer ? (
            <BrutalistButton
              type="button"
              variant="violet"
              onClick={() => setShowAnswer((current) => !current)}
            >
              {showAnswer ? "Hide Answer" : "Reveal Answer"}
            </BrutalistButton>
          ) : null}

          <BrutalistButton
            type="button"
            variant="emerald"
            onClick={handleComplete}
          >
            Mark Complete
          </BrutalistButton>

          <BrutalistButton type="button" variant="rose" onClick={handleReset}>
            Reset Challenge
          </BrutalistButton>
        </div>

        {showHints && challenge.hints ? (
          <div className="border-2 border-amber-300 bg-slate-950 p-4">
            <p className="text-xs font-black uppercase text-amber-300">Hints</p>

            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-300">
              {challenge.hints.map((hint) => (
                <li key={hint}>{hint}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {showAnswer && challenge.answer ? (
          <div className="border-2 border-emerald-300 bg-slate-950 p-4">
            <p className="text-xs font-black uppercase text-emerald-300">
              Expected Answer
            </p>

            <pre className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-200">
              {challenge.answer}
            </pre>
          </div>
        ) : null}
      </div>
    </TerminalPanel>
  );
}
