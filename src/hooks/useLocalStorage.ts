import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { notifyChallengeStorageUpdated } from "../utils/challengeProgress";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): readonly [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
      notifyChallengeStorageUpdated();
    } catch {
      // localStorage may fail in private browsing or restricted environments.
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
