import { useMemo, useSyncExternalStore } from "react";
import { CHALLENGE_STORAGE_EVENT } from "../utils/challengeProgress";
import {
  getAutomaticReviewQueue,
  getReviewQueueSummary,
  type ReviewQueueItem,
} from "../utils/reviewQueue";

interface ReviewQueueSnapshot {
  items: ReviewQueueItem[];
  totalItems: number;
  inProgressItems: number;
  notStartedItems: number;
}

function readSnapshot(): ReviewQueueSnapshot {
  const items = getAutomaticReviewQueue();
  const summary = getReviewQueueSummary();

  return {
    items,
    totalItems: summary.totalItems,
    inProgressItems: summary.inProgressItems,
    notStartedItems: summary.notStartedItems,
  };
}

function getSnapshot() {
  return JSON.stringify(readSnapshot());
}

function getServerSnapshot() {
  return JSON.stringify({
    items: [],
    totalItems: 0,
    inProgressItems: 0,
    notStartedItems: 0,
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

export function useReviewQueue() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return useMemo(() => JSON.parse(snapshot) as ReviewQueueSnapshot, [snapshot]);
}
