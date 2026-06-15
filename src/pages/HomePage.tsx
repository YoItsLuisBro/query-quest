import PathCard from "../components/cards/PathCard";
import BrutalistButton from "../components/ui/BrutalistButton";
import ProgressBar from "../components/ui/ProgressBar";
import QueryBlock from "../components/ui/QueryBlock";
import ResultTable from "../components/ui/ResultTable";
import SectionHeader from "../components/ui/SectionHeader";
import TerminalPanel from "../components/ui/TerminalPanel";
import XPBadge from "../components/ui/XPBadge";
import { bossBattles } from "../data/bossBattles";
import { dailyChallenges } from "../data/dailyChallenges";
import { learningPaths } from "../data/paths";
import { progress } from "../data/progress";
import { projects } from "../data/projects";
import { schemas } from "../data/schemas";
import { getRankProgress } from "../utils/ranks";

const queryLoop = [
  ["01", "Learn", "Tiny SQL concept explanation."],
  ["02", "Read", "Study a sample table and query."],
  ["03", "Predict", "Guess what rows the query returns."],
  ["04", "Fix", "Repair broken SQL syntax or logic."],
  ["05", "Write", "Create your own query from a prompt."],
  ["06", "Analyze", "Explain why the query works."],
  ["07", "Build", "Solve a real data mission."],
  ["08", "Review", "Save weak topics and retry later."],
];

const resultColumns = [
  { key: "first_name", label: "first_name" },
  { key: "grade", label: "grade" },
];

const resultRows = [
  { first_name: "Maya", grade: 92 },
  { first_name: "James", grade: 98 },
];

export default function HomePage() {
  const featuredPaths = learningPaths.slice(0, 3);
  const dailyPreview = dailyChallenges[0];
  const firstUnlockedBoss =
    bossBattles.find((boss) => boss.status !== "Locked") ?? bossBattles[0];
  const schemaPreview = schemas[0];
  const rankProgress = getRankProgress(progress.totalXp);

  const totalLessons = learningPaths.reduce(
    (sum, path) => sum + path.totalLessons,
    0,
  );

  return (
    <div className="space-y-10">
      <TerminalPanel eyebrow="Query Active" accent="cyan" className="md:p-10">
        <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
          QUERY//QUEST
        </h1>

        <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-slate-300">
          Learn SQL by writing queries, breaking databases, fixing joins, and
          solving real data missions.
        </p>

        <p className="mt-4 max-w-3xl text-slate-400">
          No passive tutorials. No endless videos. Just tables, queries, bugs,
          feedback, and mastery.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <BrutalistButton href="/paths/sql-fundamentals">
            Start SQL Basics
          </BrutalistButton>

          <BrutalistButton href="/daily-query" variant="emerald">
            Open Daily Query
          </BrutalistButton>

          <BrutalistButton href="/playground" variant="violet">
            Enter SQL Playground
          </BrutalistButton>
        </div>
      </TerminalPanel>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          `${learningPaths.length} Learning Paths`,
          `${totalLessons}+ Lessons`,
          `${dailyChallenges.length} Daily Drills`,
          `${projects.length}+ Projects`,
          `${bossBattles.length} Boss Battles`,
          `${schemas.length} Schema Databases`,
        ].map((stat) => (
          <div
            key={stat}
            className="border-2 border-slate-100 bg-slate-900 p-5 shadow-[5px_5px_0px_#22d3ee]"
          >
            <p className="text-sm font-black uppercase text-cyan-300">
              System Stat
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase text-white">
              {stat}
            </h2>
          </div>
        ))}
      </section>

      <TerminalPanel
        eyebrow="Training Method"
        title="The Query Loop"
        accent="violet"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {queryLoop.map(([number, title, text]) => (
            <article
              key={number}
              className="border-2 border-slate-700 bg-slate-900 p-4"
            >
              <p className="text-xs font-black uppercase text-cyan-300">
                {number}
              </p>

              <h3 className="mt-2 text-xl font-black uppercase text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </TerminalPanel>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Choose Your Path"
          title="Featured Learning Paths"
          description="Start with SQL Fundamentals, then move into joins, intermediate querying, and advanced database work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredPaths.map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </div>

        <BrutalistButton href="/paths" variant="slate">
          View All Paths
        </BrutalistButton>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <TerminalPanel
          eyebrow="Daily Query Preview"
          title="5 Minute Workout"
          accent="emerald"
        >
          <div className="space-y-5">
            <XPBadge xp={75} label="Daily XP" />

            {dailyPreview ? (
              <>
                <p className="text-sm leading-6 text-slate-300">
                  {dailyPreview.prompt}
                </p>

                {dailyPreview.query ? (
                  <QueryBlock query={dailyPreview.query} />
                ) : null}
              </>
            ) : null}

            <ResultTable columns={resultColumns} rows={resultRows} />

            <BrutalistButton href="/daily-query" variant="emerald">
              Start Daily Query
            </BrutalistButton>
          </div>
        </TerminalPanel>

        <TerminalPanel
          eyebrow="Progress Preview"
          title={rankProgress.currentRank.title}
          accent="amber"
        >
          <div className="space-y-5">
            <XPBadge xp={progress.totalXp} label="Total XP" />

            <p className="text-sm leading-6 text-slate-300">
              {rankProgress.currentRank.description}
            </p>

            <ProgressBar
              value={progress.completedLessons}
              max={totalLessons}
              label="Completed Lessons"
            />

            <ProgressBar
              value={progress.schemasMastered.length}
              max={schemas.length}
              label="Schemas Mastered"
            />

            <p className="text-sm leading-6 text-slate-300">
              Current streak:{" "}
              <span className="font-black text-cyan-300">
                {progress.currentStreak} days
              </span>
            </p>

            <BrutalistButton href="/dashboard" variant="slate">
              Open Dashboard
            </BrutalistButton>
          </div>
        </TerminalPanel>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <TerminalPanel
          eyebrow={
            firstUnlockedBoss?.status === "Locked"
              ? "Boss Locked"
              : "Boss Unlocked"
          }
          title={firstUnlockedBoss?.title ?? "Boss Battle"}
          accent="rose"
        >
          {firstUnlockedBoss ? (
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <XPBadge xp={firstUnlockedBoss.xp} />

                <span className="border-2 border-slate-100 bg-violet-400 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
                  {firstUnlockedBoss.difficulty}
                </span>

                <span className="border-2 border-slate-100 bg-slate-900 px-3 py-2 text-xs font-black uppercase text-slate-100 shadow-[3px_3px_0px_#22d3ee]">
                  {firstUnlockedBoss.status}
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-300">
                {firstUnlockedBoss.description}
              </p>

              <BrutalistButton href="/boss-battles" variant="violet">
                View Boss Battles
              </BrutalistButton>
            </div>
          ) : null}
        </TerminalPanel>

        <TerminalPanel
          eyebrow="Schema Library Preview"
          title={schemaPreview?.name ?? "Schema Library"}
          accent="cyan"
        >
          {schemaPreview ? (
            <div className="space-y-5">
              <p className="text-sm leading-6 text-slate-300">
                {schemaPreview.description}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {schemaPreview.tables.map((table) => (
                  <div
                    key={table.name}
                    className="border-2 border-slate-700 bg-slate-950 p-4"
                  >
                    <p className="font-black uppercase text-cyan-300">
                      {table.name}
                    </p>

                    <p className="mt-2 text-xs uppercase text-slate-400">
                      {table.columns.length} columns
                    </p>
                  </div>
                ))}
              </div>

              <BrutalistButton href="/schemas" variant="cyan">
                Open Schema Library
              </BrutalistButton>
            </div>
          ) : null}
        </TerminalPanel>
      </section>
    </div>
  );
}
