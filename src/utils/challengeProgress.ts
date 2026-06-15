export interface SavedChallengeState {
  selectedOption: string | null;
  userResponse: string;
  isCompleted: boolean;
}

export interface ChallengeProgressSummary {
  completedChallenges: number;
  savedResponses: number;
  savedChallenges: number;
}

export const CHALLENGE_STORAGE_PREFIX = "query-quest:challenge:";
export const CHALLENGE_STORAGE_EVENT = "query-quest:challenge-storage-updated";

export function getChallengeStorageKey(challengeId: string) {
  return `${CHALLENGE_STORAGE_PREFIX}${challengeId}`;
}

export function getDefaultChallengeState(): SavedChallengeState {
  return {
    selectedOption: null,
    userResponse: "",
    isCompleted: false,
  };
}

export function readChallengeState(challengeId: string): SavedChallengeState {
  if (typeof window === "undefined") {
    return getDefaultChallengeState();
  }

  try {
    const rawValue = window.localStorage.getItem(
      getChallengeStorageKey(challengeId),
    );

    if (!rawValue) {
      return getDefaultChallengeState();
    }

    return JSON.parse(rawValue) as SavedChallengeState;
  } catch {
    return getDefaultChallengeState();
  }
}

export function readChallengeProgressSummary(): ChallengeProgressSummary {
  if (typeof window === "undefined") {
    return {
      completedChallenges: 0,
      savedResponses: 0,
      savedChallenges: 0,
    };
  }

  try {
    const keys = Object.keys(window.localStorage).filter((key) =>
      key.startsWith(CHALLENGE_STORAGE_PREFIX),
    );

    let completedChallenges = 0;
    let savedResponses = 0;

    keys.forEach((key) => {
      const rawValue = window.localStorage.getItem(key);

      if (!rawValue) {
        return;
      }

      const parsed = JSON.parse(rawValue) as SavedChallengeState;

      if (parsed.isCompleted) {
        completedChallenges += 1;
      }

      if (parsed.userResponse.trim().length > 0 || parsed.selectedOption) {
        savedResponses += 1;
      }
    });

    return {
      completedChallenges,
      savedResponses,
      savedChallenges: keys.length,
    };
  } catch {
    return {
      completedChallenges: 0,
      savedResponses: 0,
      savedChallenges: 0,
    };
  }
}

export function countCompletedChallenges(challengeIds: string[]) {
  return challengeIds.filter((challengeId) => {
    const savedState = readChallengeState(challengeId);
    return savedState.isCompleted;
  }).length;
}

export function notifyChallengeStorageUpdated() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(CHALLENGE_STORAGE_EVENT));
}

export function calculateEarnedXp(
  completedChallenges: number,
  totalChallenges: number,
  totalXp: number,
) {
  if (totalChallenges === 0) {
    return 0;
  }

  return Math.round((completedChallenges / totalChallenges) * totalXp);
}

export function readLessonProgressStats(challengeIds: string[], totalXp = 0) {
  const totalChallenges = challengeIds.length;
  const completedChallenges = countCompletedChallenges(challengeIds);
  const percentage =
    totalChallenges === 0
      ? 0
      : Math.round((completedChallenges / totalChallenges) * 100);

  const earnedXp = calculateEarnedXp(
    completedChallenges,
    totalChallenges,
    totalXp,
  );

  return {
    completedChallenges,
    totalChallenges,
    percentage,
    earnedXp,
    remainingXp: Math.max(0, totalXp - earnedXp),
  };
}

export function resetAllChallengeProgress() {
  if (typeof window === "undefined") {
    return;
  }

  const keys = Object.keys(window.localStorage).filter((key) =>
    key.startsWith(CHALLENGE_STORAGE_PREFIX),
  );

  keys.forEach((key) => {
    window.localStorage.removeItem(key);
  });

  notifyChallengeStorageUpdated();
}

export function completeLessonChallenges(challengeIds: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  challengeIds.forEach((challengeId) => {
    const currentState = readChallengeState(challengeId);

    window.localStorage.setItem(
      getChallengeStorageKey(challengeId),
      JSON.stringify({
        ...currentState,
        isCompleted: true,
      }),
    );
  });

  notifyChallengeStorageUpdated();
}

export function resetLessonChallenges(challengeIds: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  challengeIds.forEach((challengeId) => {
    window.localStorage.removeItem(getChallengeStorageKey(challengeId));
  });

  notifyChallengeStorageUpdated();
}
