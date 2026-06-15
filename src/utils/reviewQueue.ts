import { lessons } from "../data/lessons";
import type { LessonChallenge } from "../types/learning";
import { readChallengeState } from "./challengeProgress";

export interface ReviewQueueItem {
  id: string;
  lessonId: string;
  lessonTitle: string;
  lessonXp: number;
  challengeId: string;
  challengeTitle: string;
  challengeType: LessonChallenge["type"];
  prompt: string;
  status: "Not Started" | "In Progress";
  reason: string;
}

function hasSavedAttempt(challengeId: string) {
  const state = readChallengeState(challengeId);

  return Boolean(
    state.userResponse.trim().length > 0 ||
    state.selectedOption ||
    state.isCompleted,
  );
}

export function getAutomaticReviewQueue(): ReviewQueueItem[] {
  const inProgressItems: ReviewQueueItem[] = [];
  const nextIncompleteItems: ReviewQueueItem[] = [];

  lessons.forEach((lesson) => {
    const incompleteChallenges = lesson.challenges.filter((challenge) => {
      const state = readChallengeState(challenge.id);
      return !state.isCompleted;
    });

    incompleteChallenges.forEach((challenge) => {
      const attempted = hasSavedAttempt(challenge.id);

      if (attempted) {
        inProgressItems.push({
          id: `${lesson.id}-${challenge.id}`,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          lessonXp: lesson.xp,
          challengeId: challenge.id,
          challengeTitle: challenge.title,
          challengeType: challenge.type,
          prompt: challenge.prompt,
          status: "In Progress",
          reason: "You started this challenge but have not marked it complete.",
        });
      }
    });

    const nextIncompleteChallenge = incompleteChallenges.find(
      (challenge) => !hasSavedAttempt(challenge.id),
    );

    if (nextIncompleteChallenge) {
      nextIncompleteItems.push({
        id: `${lesson.id}-${nextIncompleteChallenge.id}`,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonXp: lesson.xp,
        challengeId: nextIncompleteChallenge.id,
        challengeTitle: nextIncompleteChallenge.title,
        challengeType: nextIncompleteChallenge.type,
        prompt: nextIncompleteChallenge.prompt,
        status: "Not Started",
        reason: "This is the next incomplete challenge in this lesson.",
      });
    }
  });

  return [...inProgressItems, ...nextIncompleteItems];
}

export function getReviewQueueSummary() {
  const queue = getAutomaticReviewQueue();

  return {
    totalItems: queue.length,
    inProgressItems: queue.filter((item) => item.status === "In Progress")
      .length,
    notStartedItems: queue.filter((item) => item.status === "Not Started")
      .length,
  };
}
