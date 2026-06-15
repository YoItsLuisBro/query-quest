import { useMemo, useSyncExternalStore } from "react";
import {
  CHALLENGE_STORAGE_EVENT,
  readChallengeProgressSummary,
  type ChallengeProgressSummary,
} from "../utils/challengeProgress";

function getSnapshot() {
  return JSON.stringify(readChallengeProgressSummary());
}

function getServerSnapshot() {
  return JSON.stringify({
    completedChallenges: 0,
    savedResponses: 0,
    savedChallenges: 0,
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

export function useChallengeProgressSummary() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return useMemo(
    () => JSON.parse(snapshot) as ChallengeProgressSummary,
    [snapshot],
  );
}
