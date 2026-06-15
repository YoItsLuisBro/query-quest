import { useState, type FormEvent } from "react";
import { saveUserMistake } from "../../utils/userMistakes";
import BrutalistButton from "../ui/BrutalistButton";

const initialFormState = {
  title: "",
  topic: "",
  brokenQuery: "",
  fixedQuery: "",
  explanation: "",
};

export default function UserMistakeForm() {
  const [formState, setFormState] = useState(initialFormState);

  function updateField(field: keyof typeof initialFormState, value: string) {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formState.title.trim() ||
      !formState.topic.trim() ||
      !formState.brokenQuery.trim() ||
      !formState.fixedQuery.trim() ||
      !formState.explanation.trim()
    ) {
      return;
    }

    saveUserMistake({
      title: formState.title.trim(),
      topic: formState.topic.trim(),
      brokenQuery: formState.brokenQuery.trim(),
      fixedQuery: formState.fixedQuery.trim(),
      explanation: formState.explanation.trim(),
    });

    setFormState(initialFormState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-slate-100 bg-slate-900 p-5 shadow-[5px_5px_0px_#f43f5e]"
    >
      <p className="text-xs font-black uppercase text-rose-300">
        Save a Mistake
      </p>

      <h3 className="mt-2 text-2xl font-black uppercase text-white">
        Add SQL Mistake
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        Save the broken query, corrected query, and what you learned from the
        mistake.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="mistake-title"
            className="text-xs font-black uppercase text-cyan-300"
          >
            Mistake Title
          </label>

          <input
            id="mistake-title"
            value={formState.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="Example: Forgot GROUP BY"
            className="mt-2 w-full border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-cyan-200 outline-none focus:border-cyan-300"
          />
        </div>

        <div>
          <label
            htmlFor="mistake-topic"
            className="text-xs font-black uppercase text-cyan-300"
          >
            Topic
          </label>

          <input
            id="mistake-topic"
            value={formState.topic}
            onChange={(event) => updateField("topic", event.target.value)}
            placeholder="Example: GROUP BY"
            className="mt-2 w-full border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-cyan-200 outline-none focus:border-cyan-300"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div>
          <label
            htmlFor="broken-query"
            className="text-xs font-black uppercase text-rose-300"
          >
            Broken Query
          </label>

          <textarea
            id="broken-query"
            value={formState.brokenQuery}
            onChange={(event) => updateField("brokenQuery", event.target.value)}
            placeholder="Paste the incorrect SQL here..."
            rows={8}
            className="mt-2 w-full resize-y border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-rose-200 outline-none focus:border-rose-300"
          />
        </div>

        <div>
          <label
            htmlFor="fixed-query"
            className="text-xs font-black uppercase text-emerald-300"
          >
            Fixed Query
          </label>

          <textarea
            id="fixed-query"
            value={formState.fixedQuery}
            onChange={(event) => updateField("fixedQuery", event.target.value)}
            placeholder="Paste the corrected SQL here..."
            rows={8}
            className="mt-2 w-full resize-y border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-emerald-200 outline-none focus:border-emerald-300"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="mistake-explanation"
          className="text-xs font-black uppercase text-amber-300"
        >
          Explanation
        </label>

        <textarea
          id="mistake-explanation"
          value={formState.explanation}
          onChange={(event) => updateField("explanation", event.target.value)}
          placeholder="What went wrong? What fixed it?"
          rows={5}
          className="mt-2 w-full resize-y border-2 border-slate-600 bg-slate-950 px-4 py-3 text-sm text-slate-200 outline-none focus:border-amber-300"
        />
      </div>

      <div className="mt-6">
        <BrutalistButton type="submit" variant="rose">
          Save Mistake
        </BrutalistButton>
      </div>
    </form>
  );
}
