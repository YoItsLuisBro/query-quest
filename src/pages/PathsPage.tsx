import { useMemo, useState, type FormEvent } from "react";
import LessonSearchCard from "../components/cards/LessonSearchCard";
import PathCard from "../components/cards/PathCard";
import BrutalistButton from "../components/ui/BrutalistButton";
import PageShell from "../components/ui/PageShell";
import TerminalPanel from "../components/ui/TerminalPanel";
import { learningPaths } from "../data/paths";
import type { Difficulty, LessonStatus } from "../types/learning";
import {
  createLessonSearchItems,
  filterLessonSearchItems,
} from "../utils/lessonSearch";

const difficultyOptions: Array<Difficulty | "All"> = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Boss Level",
  "Architect Level",
];

const statusOptions: Array<LessonStatus | "All"> = [
  "All",
  "Not Started",
  "In Progress",
  "Completed",
  "Review Needed",
];

interface LessonSearchFilters {
  searchTerm: string;
  difficultyFilter: Difficulty | "All";
  statusFilter: LessonStatus | "All";
}

const initialFilters: LessonSearchFilters = {
  searchTerm: "",
  difficultyFilter: "All",
  statusFilter: "All",
};

export default function PathsPage() {
  const [draftFilters, setDraftFilters] =
    useState<LessonSearchFilters>(initialFilters);

  const [submittedFilters, setSubmittedFilters] =
    useState<LessonSearchFilters>(initialFilters);

  const [hasSearched, setHasSearched] = useState(false);

  const lessonItems = useMemo(() => createLessonSearchItems(learningPaths), []);

  const filteredLessonItems = useMemo(() => {
    if (!hasSearched) {
      return [];
    }

    return filterLessonSearchItems(
      lessonItems,
      submittedFilters.searchTerm,
      submittedFilters.difficultyFilter,
    );
  }, [lessonItems, submittedFilters, hasSearched]);

  function updateDraftFilter<K extends keyof LessonSearchFilters>(
    key: K,
    value: LessonSearchFilters[K],
  ) {
    setDraftFilters((currentFilters) => ({
      ...currentFilters,
      [key]: value,
    }));
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedFilters(draftFilters);
    setHasSearched(true);
  }

  function handleResetFilters() {
    setDraftFilters(initialFilters);
    setSubmittedFilters(initialFilters);
    setHasSearched(false);
  }

  return (
    <PageShell
      eyebrow="Choose Your Path"
      title="Learning Paths"
      description="Select a SQL training path and move through structured modules, lessons, query drills, and missions."
    >
      <div className="space-y-10">
        <section className="grid gap-6 md:grid-cols-2">
          {learningPaths.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </section>

        <TerminalPanel
          eyebrow="Lesson Search"
          title="Find Your Next Query Drill"
          accent="violet"
        >
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label
                htmlFor="lesson-search"
                className="text-xs font-black uppercase text-cyan-300"
              >
                Search lessons, modules, topics, or paths
              </label>

              <input
                id="lesson-search"
                value={draftFilters.searchTerm}
                onChange={(event) =>
                  updateDraftFilter("searchTerm", event.target.value)
                }
                placeholder="Try: SELECT, JOIN, WHERE, GROUP BY, primary keys..."
                className="mt-2 w-full border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-cyan-200 outline-none focus:border-cyan-300"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="difficulty-filter"
                  className="text-xs font-black uppercase text-cyan-300"
                >
                  Difficulty
                </label>

                <select
                  id="difficulty-filter"
                  value={draftFilters.difficultyFilter}
                  onChange={(event) =>
                    updateDraftFilter(
                      "difficultyFilter",
                      event.target.value as Difficulty | "All",
                    )
                  }
                  className="mt-2 w-full border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-cyan-200 outline-none focus:border-cyan-300"
                >
                  {difficultyOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="status-filter"
                  className="text-xs font-black uppercase text-cyan-300"
                >
                  Status
                </label>

                <select
                  id="status-filter"
                  value={draftFilters.statusFilter}
                  onChange={(event) =>
                    updateDraftFilter(
                      "statusFilter",
                      event.target.value as LessonStatus | "All",
                    )
                  }
                  className="mt-2 w-full border-2 border-slate-600 bg-slate-950 px-4 py-3 font-mono text-sm text-cyan-200 outline-none focus:border-cyan-300"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-black uppercase text-slate-300">
                {hasSearched ? (
                  <>
                    Showing keyword/difficulty matches:{" "}
                    <span className="text-cyan-300">
                      {filteredLessonItems.length}
                    </span>
                  </>
                ) : (
                  "Search results are hidden until you run a search."
                )}
              </p>

              <div className="flex flex-wrap gap-3">
                <BrutalistButton type="submit" variant="cyan">
                  Search
                </BrutalistButton>

                <BrutalistButton
                  type="button"
                  variant="slate"
                  onClick={handleResetFilters}
                >
                  Reset Filters
                </BrutalistButton>
              </div>
            </div>
          </form>
        </TerminalPanel>

        {hasSearched ? (
          filteredLessonItems.length > 0 ? (
            <section className="grid gap-6 lg:grid-cols-2">
              {filteredLessonItems.map((item) => (
                <LessonSearchCard
                  key={`${item.pathId}-${item.moduleId}-${item.id}`}
                  item={item}
                  statusFilter={submittedFilters.statusFilter}
                />
              ))}
            </section>
          ) : (
            <TerminalPanel
              eyebrow="No Results"
              title="No Matching Lessons Found"
              accent="rose"
            >
              <p className="text-sm leading-6 text-slate-300">
                Try a different keyword, difficulty, or status filter.
              </p>
            </TerminalPanel>
          )
        ) : null}
      </div>
    </PageShell>
  );
}
