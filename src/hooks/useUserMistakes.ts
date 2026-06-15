import { useMemo, useSyncExternalStore } from "react";
import {
  readUserMistakes,
  USER_MISTAKES_STORAGE_EVENT,
  type UserMistake,
} from "../utils/userMistakes";

function getSnapshot() {
  return JSON.stringify(readUserMistakes());
}

function getServerSnapshot() {
  return JSON.stringify([]);
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(USER_MISTAKES_STORAGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(USER_MISTAKES_STORAGE_EVENT, callback);
  };
}

export function useUserMistakes() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return useMemo(() => JSON.parse(snapshot) as UserMistake[], [snapshot]);
}
