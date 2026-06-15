import type { Module } from "../../types/learning";
import { getLessonById } from "../../data/lessons";
import { useLessonProgress } from "../../hooks/useLessonProgress";
import LessonCard from "./LessonCard";

interface ModuleCardProps {
  module: Module;
}

function ModuleLessonCard({ lesson }: { lesson: Module["lessons"][number] }) {
  const fullLesson = getLessonById(lesson.id);
  const challengeIds =
    fullLesson?.challenges.map((challenge) => challenge.id) ?? [];
  const lessonProgress = useLessonProgress(challengeIds, fullLesson?.xp ?? 0);

  return (
    <LessonCard
      id={lesson.id}
      title={lesson.title}
      status={challengeIds.length > 0 ? lessonProgress.status : lesson.status}
      xp={lesson.xp}
    />
  );
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <section className="border-2 border-slate-100 bg-slate-900 p-5 shadow-[6px_6px_0px_#a78bfa]">
      <p className="text-xs font-black uppercase text-cyan-300">
        Module Loaded
      </p>

      <h2 className="mt-2 text-2xl font-black uppercase text-white">
        {module.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {module.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {module.topics.map((topic) => (
          <span
            key={topic}
            className="border border-slate-600 bg-slate-950 px-2 py-1 text-xs uppercase text-slate-300"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        {module.lessons.map((lesson) => (
          <ModuleLessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
