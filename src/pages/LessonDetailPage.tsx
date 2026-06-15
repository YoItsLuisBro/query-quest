import { useParams } from "react-router";
import ChallengeCard from "../components/cards/ChallengeCard";
import PageShell from "../components/ui/PageShell";
import ProgressBar from "../components/ui/ProgressBar";
import TerminalPanel from "../components/ui/TerminalPanel";
import XPBadge from "../components/ui/XPBadge";
import { getLessonById } from "../data/lessons";
import { useLessonProgress } from "../hooks/useLessonProgress";

export default function LessonDetailPage() {
  const { lessonId } = useParams();
  const lesson = getLessonById(lessonId);
  const challengeIds =
    lesson?.challenges.map((challenge) => challenge.id) ?? [];
  const lessonProgress = useLessonProgress(challengeIds, lesson?.xp ?? 0);

  if (!lesson) {
    return (
      <PageShell
        eyebrow="Lesson Missing"
        title="404: Lesson Not Found"
        description="The requested SQL lesson does not exist yet."
      />
    );
  }

  return (
    <PageShell
      eyebrow="Lesson Active"
      title={lesson.title}
      description={lesson.description}
    >
      <div className="space-y-6">
        <TerminalPanel
          eyebrow="Lesson Progress"
          title={lessonProgress.status}
          accent="emerald"
        >
          <div className="space-y-5">
            <div className="flex flex-wrap gap-4">
              <XPBadge xp={lessonProgress.earnedXp} label="XP Earned" />

              <span className="border-2 border-slate-100 bg-cyan-300 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#a78bfa]">
                {lessonProgress.completedChallenges}/
                {lessonProgress.totalChallenges} Challenges
              </span>

              <span className="border-2 border-slate-100 bg-violet-400 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
                {lessonProgress.remainingXp} XP Remaining
              </span>
            </div>

            <ProgressBar
              value={lessonProgress.completedChallenges}
              max={lessonProgress.totalChallenges}
              label="Lesson Completion"
            />

            <p className="text-sm leading-6 text-slate-300">
              Complete every challenge to earn the full{" "}
              <span className="font-black text-emerald-300">
                {lesson.xp} XP
              </span>{" "}
              reward for this lesson.
            </p>
          </div>
        </TerminalPanel>

        {lesson.challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </PageShell>
  );
}
