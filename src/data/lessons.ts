import { advancedLessons } from "./lessons/advancedLessons";
import { architectLevelLessons } from "./lessons/architectLevelLessons";
import { beginnerLessons } from "./lessons/beginnerLessons";
import { bossLevelLessons } from "./lessons/bossLevelLessons";
import { intermediateLessons } from "./lessons/intermediateLessons";

export const lessons = [
  ...beginnerLessons,
  ...intermediateLessons,
  ...advancedLessons,
  ...bossLevelLessons,
  ...architectLevelLessons,
];

export function getLessonById(lessonId: string | undefined) {
  return lessons.find((lesson) => lesson.id === lessonId);
}

export function getLessonCardsForModule(pathId: string, moduleId: string) {
  return lessons
    .filter(
      (lesson) => lesson.pathId === pathId && lesson.moduleId === moduleId,
    )
    .map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      status: lesson.status,
      xp: lesson.xp,
    }));
}

export { studentsTable } from "./lessons/sharedTables";
