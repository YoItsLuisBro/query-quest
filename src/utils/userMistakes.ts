import type { QueryMistake } from "../types/learning";

export interface UserMistake extends QueryMistake {
  createdAt: string;
}

export type UserMistakeInput = Omit<QueryMistake, "id">;

export const USER_MISTAKES_STORAGE_KEY = "query-quest:user-mistakes";
export const USER_MISTAKES_STORAGE_EVENT = "query-quest:user-mistakes-updated";

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `mistake-${Date.now()}`;
}

export function notifyUserMistakesUpdated() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(USER_MISTAKES_STORAGE_EVENT));
}

export function readUserMistakes(): UserMistake[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedMistakes = window.localStorage.getItem(
      USER_MISTAKES_STORAGE_KEY,
    );

    if (!storedMistakes) {
      return [];
    }

    return JSON.parse(storedMistakes) as UserMistake[];
  } catch {
    return [];
  }
}

export function saveUserMistake(input: UserMistakeInput) {
  const currentMistakes = readUserMistakes();

  const newMistake: UserMistake = {
    id: createId(),
    createdAt: new Date().toISOString(),
    ...input,
  };

  window.localStorage.setItem(
    USER_MISTAKES_STORAGE_KEY,
    JSON.stringify([newMistake, ...currentMistakes]),
  );

  notifyUserMistakesUpdated();

  return newMistake;
}

export function deleteUserMistake(mistakeId: string) {
  const currentMistakes = readUserMistakes();

  const nextMistakes = currentMistakes.filter(
    (mistake) => mistake.id !== mistakeId,
  );

  window.localStorage.setItem(
    USER_MISTAKES_STORAGE_KEY,
    JSON.stringify(nextMistakes),
  );

  notifyUserMistakesUpdated();
}

export function resetUserMistakes() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(USER_MISTAKES_STORAGE_KEY);
  notifyUserMistakesUpdated();
}
