import { useMemo, useSyncExternalStore } from "react";
import type { LessonStatus } from "../types/learning";
import {
  CHALLENGE_STORAGE_EVENT,
  readLessonProgressStats,
} from "../utils/challengeProgress";

interface LessonProgress {
  completedChallenges: number;
  totalChallenges: number;
  percentage: number;
  earnedXp: number;
  remainingXp: number;
  status: LessonStatus;
}

function getLessonStatus(
  completedChallenges: number,
  totalChallenges: number,
): LessonStatus {
  if (totalChallenges === 0 || completedChallenges === 0) {
    return "Not Started";
  }

  if (completedChallenges === totalChallenges) {
    return "Completed";
  }

  return "In Progress";
}

function createLessonProgressSnapshot(challengeIds: string[], totalXp: number) {
  const stats = readLessonProgressStats(challengeIds, totalXp);

  return JSON.stringify({
    ...stats,
    status: getLessonStatus(stats.completedChallenges, stats.totalChallenges),
  });
}

function getServerSnapshot() {
  return JSON.stringify({
    completedChallenges: 0,
    totalChallenges: 0,
    percentage: 0,
    earnedXp: 0,
    remainingXp: 0,
    status: "Not Started",
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

export function useLessonProgress(challengeIds: string[], totalXp = 0) {
  const challengeKey = challengeIds.join("|");

  const snapshot = useSyncExternalStore(
    subscribe,
    () => createLessonProgressSnapshot(challengeIds, totalXp),
    getServerSnapshot,
  );

  return useMemo(
    () => JSON.parse(snapshot) as LessonProgress,
    [snapshot, challengeKey],
  );
}
