import { useMemo, useSyncExternalStore } from "react";
import { lessons } from "../data/lessons";
import {
  CHALLENGE_STORAGE_EVENT,
  readLessonProgressStats,
} from "../utils/challengeProgress";

interface LocalLearningSummary {
  earnedXp: number;
  availableXp: number;
  completedLessons: number;
  inProgressLessons: number;
  totalLessons: number;
  completedChallenges: number;
  totalChallenges: number;
}

function readLocalLearningSummary(): LocalLearningSummary {
  let earnedXp = 0;
  let availableXp = 0;
  let completedLessons = 0;
  let inProgressLessons = 0;
  let completedChallenges = 0;
  let totalChallenges = 0;

  lessons.forEach((lesson) => {
    const challengeIds = lesson.challenges.map((challenge) => challenge.id);
    const stats = readLessonProgressStats(challengeIds, lesson.xp);

    earnedXp += stats.earnedXp;
    availableXp += lesson.xp;
    completedChallenges += stats.completedChallenges;
    totalChallenges += stats.totalChallenges;

    if (
      stats.totalChallenges > 0 &&
      stats.completedChallenges === stats.totalChallenges
    ) {
      completedLessons += 1;
    } else if (stats.completedChallenges > 0) {
      inProgressLessons += 1;
    }
  });

  return {
    earnedXp,
    availableXp,
    completedLessons,
    inProgressLessons,
    totalLessons: lessons.length,
    completedChallenges,
    totalChallenges,
  };
}

function getSnapshot() {
  return JSON.stringify(readLocalLearningSummary());
}

function getServerSnapshot() {
  return JSON.stringify({
    earnedXp: 0,
    availableXp: 0,
    completedLessons: 0,
    inProgressLessons: 0,
    totalLessons: 0,
    completedChallenges: 0,
    totalChallenges: 0,
  });
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHALLENGE_STORAGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHALLENGE_STORAGE_EVENT, callback);
  };
}

export function useLocalLearningSummary() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return useMemo(
    () => JSON.parse(snapshot) as LocalLearningSummary,
    [snapshot],
  );
}
