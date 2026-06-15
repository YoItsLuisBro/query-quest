import { getLessonById } from "../data/lessons";
import type { Difficulty, LearningPath, LessonStatus } from "../types/learning";

export interface LessonSearchItem {
  id: string;
  title: string;
  status: LessonStatus;
  xp: number;
  pathId: string;
  pathTitle: string;
  pathDifficulty: Difficulty;
  moduleId: string;
  moduleTitle: string;
  moduleTopics: string[];
  challengeIds: string[];
  searchText: string;
}

export function createLessonSearchItems(paths: LearningPath[]) {
  return paths.flatMap((path) =>
    path.modules.flatMap((module) =>
      module.lessons.map((lesson) => {
        const fullLesson = getLessonById(lesson.id);
        const challengeIds =
          fullLesson?.challenges.map((challenge) => challenge.id) ?? [];

        const searchText = [
          lesson.title,
          lesson.status,
          lesson.xp,
          path.title,
          path.description,
          path.difficulty,
          module.title,
          module.description,
          ...module.topics,
        ]
          .join(" ")
          .toLowerCase();

        return {
          id: lesson.id,
          title: lesson.title,
          status: lesson.status,
          xp: lesson.xp,
          pathId: path.id,
          pathTitle: path.title,
          pathDifficulty: path.difficulty,
          moduleId: module.id,
          moduleTitle: module.title,
          moduleTopics: module.topics,
          challengeIds,
          searchText,
        };
      }),
    ),
  );
}

export function filterLessonSearchItems(
  items: LessonSearchItem[],
  searchTerm: string,
  difficulty: Difficulty | "All",
) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return items.filter((item) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      item.searchText.includes(normalizedSearch);

    const matchesDifficulty =
      difficulty === "All" || item.pathDifficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });
}
