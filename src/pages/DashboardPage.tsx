import PageShell from "../components/ui/PageShell";
import ProgressBar from "../components/ui/ProgressBar";
import TerminalPanel from "../components/ui/TerminalPanel";
import XPBadge from "../components/ui/XPBadge";
import { bossBattles } from "../data/bossBattles";
import { progress } from "../data/progress";
import { projects } from "../data/projects";
import { schemas } from "../data/schemas";
import { useChallengeProgressSummary } from "../hooks/useChallengeProgressSummary";
import { useLocalLearningSummary } from "../hooks/useLocalLearningSummary";
import { getRankProgress, rankLevels } from "../utils/ranks";
import ResetProgressButton from "../components/ui/ResetProgressButton";

export default function DashboardPage() {
  const localProgress = useChallengeProgressSummary();
  const localLearning = useLocalLearningSummary();
  const rankProgress = getRankProgress(localLearning.earnedXp);

  const unlockedBosses = bossBattles.filter(
    (boss) => boss.status !== "Locked",
  ).length;

  return (
    <PageShell
      eyebrow="Progress Scan"
      title="Progress Dashboard"
      description="Track XP, ranks, completed lessons, current streak, weak SQL topics, review queue, and schema mastery."
    >
      <div className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-4">
          <TerminalPanel
            eyebrow="Local XP"
            title={`${localLearning.earnedXp}`}
            accent="emerald"
          >
            <XPBadge
              xp={localLearning.availableXp}
              label="Available Lesson XP"
            />
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Current Rank"
            title={rankProgress.currentRank.title}
            accent="cyan"
          >
            <p className="text-sm leading-6 text-slate-300">
              {rankProgress.currentRank.description}
            </p>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Next Rank"
            title={rankProgress.nextRank?.title ?? "Max Rank"}
            accent="amber"
          >
            <p className="text-sm leading-6 text-slate-300">
              {rankProgress.nextRank
                ? `${rankProgress.xpNeeded} XP needed to reach the next rank.`
                : "You have reached the highest rank in the current system."}
            </p>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Practice Saved"
            title={`${localProgress.completedChallenges}/${localLearning.totalChallenges}`}
            accent="violet"
          >
            <p className="text-sm leading-6 text-slate-300">
              Completed challenge progress is saved in localStorage.
            </p>
          </TerminalPanel>
        </section>

        <TerminalPanel
          eyebrow="Rank Meter"
          title="Next Upgrade Progress"
          accent="emerald"
        >
          <div className="space-y-5">
            <ProgressBar
              value={rankProgress.percentage}
              max={100}
              label={
                rankProgress.nextRank
                  ? `Progress to ${rankProgress.nextRank.title}`
                  : "Maximum Rank Achieved"
              }
            />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="border-2 border-slate-700 bg-slate-950 p-4">
                <p className="text-xs font-black uppercase text-cyan-300">
                  Current XP
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {localLearning.earnedXp}
                </p>
              </div>

              <div className="border-2 border-slate-700 bg-slate-950 p-4">
                <p className="text-xs font-black uppercase text-emerald-300">
                  XP Into Rank
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {rankProgress.currentRankXp}
                </p>
              </div>

              <div className="border-2 border-slate-700 bg-slate-950 p-4">
                <p className="text-xs font-black uppercase text-amber-300">
                  XP Needed
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {rankProgress.xpNeeded}
                </p>
              </div>
            </div>
          </div>
        </TerminalPanel>

        <TerminalPanel
          eyebrow="Rank Ladder"
          title="SQL Progression"
          accent="violet"
        >
          <div className="grid gap-3">
            {rankLevels.map((rank) => {
              const isCurrentRank = rank.id === rankProgress.currentRank.id;
              const isUnlocked = localLearning.earnedXp >= rank.minXp;

              return (
                <div
                  key={rank.title}
                  className={[
                    "border-2 p-3 text-sm font-black uppercase",
                    isCurrentRank
                      ? "border-cyan-300 bg-cyan-300 text-slate-950"
                      : isUnlocked
                        ? "border-emerald-300 bg-emerald-950 text-emerald-300"
                        : "border-slate-700 bg-slate-950 text-slate-300",
                  ].join(" ")}
                >
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <span>{rank.title}</span>
                    <span>
                      {rank.maxXp === null
                        ? `${rank.minXp}+ XP`
                        : `${rank.minXp}-${rank.maxXp} XP`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </TerminalPanel>

        <section className="grid gap-6 lg:grid-cols-2">
          <TerminalPanel
            eyebrow="Lesson Scan"
            title="Completion Status"
            accent="cyan"
          >
            <div className="space-y-5">
              <ProgressBar
                value={localLearning.earnedXp}
                max={localLearning.availableXp}
                label="Local XP Earned"
              />

              <ProgressBar
                value={localLearning.completedLessons}
                max={localLearning.totalLessons}
                label="Lessons Completed"
              />

              <ProgressBar
                value={localLearning.completedChallenges}
                max={localLearning.totalChallenges}
                label="Challenges Completed"
              />

              <ProgressBar
                value={progress.bossBattlesCompleted}
                max={bossBattles.length}
                label="Boss Battles Completed"
              />
            </div>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Weak Topics"
            title="Review Required"
            accent="rose"
          >
            <div className="flex flex-wrap gap-2">
              {progress.weakTopics.map((topic) => (
                <span
                  key={topic}
                  className="border-2 border-slate-700 bg-slate-950 px-3 py-2 text-xs font-black uppercase text-rose-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </TerminalPanel>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <TerminalPanel
            eyebrow="Review Queue"
            title="Retry These"
            accent="amber"
          >
            <ul className="list-inside list-disc space-y-2 text-sm text-slate-300">
              {progress.reviewQueue.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Local Answers"
            title={`${localProgress.savedResponses} Saved`}
            accent="emerald"
          >
            <p className="text-sm leading-6 text-slate-300">
              Saved responses include selected multiple-choice answers and typed
              SQL practice responses.
            </p>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="System Totals"
            title="Content Loaded"
            accent="cyan"
          >
            <div className="space-y-2 text-sm text-slate-300">
              <p>Schemas: {schemas.length}</p>
              <p>Boss Battles: {bossBattles.length}</p>
              <p>Projects: {projects.length}</p>
              <p>Lessons in Data: {localLearning.totalLessons}</p>
              <p>Total Challenges: {localLearning.totalChallenges}</p>
              <p>Saved Challenge Records: {localProgress.savedChallenges}</p>
              <p>Unlocked Bosses: {unlockedBosses}</p>
            </div>
          </TerminalPanel>
        </section>
        <TerminalPanel
          eyebrow="Development Tools"
          title="Reset System"
          accent="rose"
        >
          <ResetProgressButton />
        </TerminalPanel>
      </div>
    </PageShell>
  );
}
