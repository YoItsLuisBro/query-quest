import { useState } from "react";
import type { LessonChallenge } from "../../types/learning";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import BrutalistButton from "../ui/BrutalistButton";
import QueryBlock from "../ui/QueryBlock";
import ResultTable from "../ui/ResultTable";

interface SavedChallengeState {
  selectedOption: string | null;
  userResponse: string;
  isCompleted: boolean;
}

interface ChallengeCardProps {
  challenge: LessonChallenge;
  completionMode?: "challenge" | "lesson";
}

export default function ChallengeCard({
  challenge,
  completionMode = "challenge",
}: ChallengeCardProps) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [areHintsVisible, setAreHintsVisible] = useState(false);

  const [savedState, setSavedState] = useLocalStorage<SavedChallengeState>(
    `query-quest:challenge:${challenge.id}`,
    {
      selectedOption: null,
      userResponse: "",
      isCompleted: false,
    },
  );

  const isLessonControlled = completionMode === "lesson";

  function selectOption(option: string) {
    setSavedState({
      ...savedState,
      selectedOption: option,
    });
  }

  function updateUserResponse(userResponse: string) {
    setSavedState({
      ...savedState,
      userResponse,
    });
  }

  function markChallengeComplete() {
    setSavedState({
      ...savedState,
      isCompleted: true,
    });
  }

  function resetChallenge() {
    setSavedState({
      selectedOption: null,
      userResponse: "",
      isCompleted: false,
    });
  }

  function clearPracticeAnswer() {
    setSavedState({
      ...savedState,
      selectedOption: null,
      userResponse: "",
    });
  }

  return (
    <article className="border-2 border-slate-100 bg-slate-900 p-5 shadow-[5px_5px_0px_#22d3ee]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="border-2 border-slate-100 bg-violet-400 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
          {challenge.type}
        </span>

        {isLessonControlled ? (
          <span className="border-2 border-slate-100 bg-slate-950 px-3 py-2 text-xs font-black uppercase text-slate-300 shadow-[3px_3px_0px_#a78bfa]">
            Lesson Controlled
          </span>
        ) : (
          <span
            className={[
              "border-2 border-slate-100 px-3 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_#a78bfa]",
              savedState.isCompleted
                ? "bg-emerald-300 text-slate-950"
                : "bg-slate-950 text-slate-300",
            ].join(" ")}
          >
            {savedState.isCompleted ? "Completed" : "Unfinished"}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-xl font-black uppercase text-white">
        {challenge.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {challenge.prompt}
      </p>

      {challenge.table ? (
        <div className="mt-5">
          <ResultTable table={challenge.table} />
        </div>
      ) : null}

      {challenge.query ? (
        <div className="mt-5">
          <p className="mb-2 text-xs font-black uppercase text-cyan-300">
            Query
          </p>
          <QueryBlock query={challenge.query} />
        </div>
      ) : null}

      {challenge.options ? (
        <div className="mt-5 space-y-3">
          <p className="text-xs font-black uppercase text-cyan-300">
            Choose an answer
          </p>

          {challenge.options.map((option) => {
            const isSelected = savedState.selectedOption === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => selectOption(option)}
                className={[
                  "block w-full border-2 px-4 py-3 text-left text-sm font-black uppercase transition-transform hover:translate-x-1 hover:translate-y-1",
                  isSelected
                    ? "border-cyan-300 bg-cyan-300 text-slate-950 shadow-[4px_4px_0px_#a78bfa]"
                    : "border-slate-700 bg-slate-950 text-slate-300 hover:border-cyan-300 hover:text-cyan-300",
                ].join(" ")}
              >
                {option}
              </button>
            );
          })}
        </div>
      ) : null}

      {["debug", "write", "explain", "mission", "review"].includes(
        challenge.type,
      ) ? (
        <div className="mt-5">
          <label
            htmlFor={`${challenge.id}-response`}
            className="text-xs font-black uppercase text-cyan-300"
          >
            Your Response
          </label>

          <textarea
            id={`${challenge.id}-response`}
            value={savedState.userResponse}
            onChange={(event) => updateUserResponse(event.target.value)}
            placeholder="Write your answer here..."
            rows={7}
            className="mt-2 w-full resize-y border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-cyan-200 outline-none focus:border-cyan-300"
          />
        </div>
      ) : null}

      {areHintsVisible && challenge.hints ? (
        <div className="mt-5 border-2 border-slate-700 bg-slate-950 p-4">
          <p className="text-xs font-black uppercase text-amber-300">Hints</p>

          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
            {challenge.hints.map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {isAnswerVisible && challenge.answer ? (
        <div className="mt-5">
          <p className="mb-2 text-xs font-black uppercase text-emerald-300">
            Answer
          </p>

          <QueryBlock query={challenge.answer} />
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        {challenge.hints ? (
          <BrutalistButton
            type="button"
            variant="slate"
            onClick={() => setAreHintsVisible((current) => !current)}
          >
            {areHintsVisible ? "Hide Hints" : "Show Hints"}
          </BrutalistButton>
        ) : null}

        {challenge.answer ? (
          <BrutalistButton
            type="button"
            variant="slate"
            onClick={() => setIsAnswerVisible((current) => !current)}
          >
            {isAnswerVisible ? "Hide Answer" : "Reveal Answer"}
          </BrutalistButton>
        ) : null}

        {isLessonControlled ? (
          <BrutalistButton
            type="button"
            variant="slate"
            onClick={clearPracticeAnswer}
          >
            Clear Practice Answer
          </BrutalistButton>
        ) : (
          <>
            <BrutalistButton
              type="button"
              variant="cyan"
              onClick={markChallengeComplete}
            >
              Mark Complete
            </BrutalistButton>

            <BrutalistButton
              type="button"
              variant="rose"
              onClick={resetChallenge}
            >
              Reset Challenge
            </BrutalistButton>
          </>
        )}
      </div>
    </article>
  );
}
