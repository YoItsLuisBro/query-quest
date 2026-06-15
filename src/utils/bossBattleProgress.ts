import type { BossBattle } from "../types/learning";

export interface SavedBossBattleStageState {
  userQuery: string;
  isCompleted: boolean;
  isSolutionVisible: boolean;
}

export const BOSS_BATTLE_STORAGE_PREFIX = "query-quest:boss-battle:";
export const BOSS_BATTLE_STORAGE_EVENT = "query-quest:boss-battle-updated";

export function getBossStageStorageKey(stageId: string) {
  return `${BOSS_BATTLE_STORAGE_PREFIX}${stageId}`;
}

export function getDefaultBossStageState(): SavedBossBattleStageState {
  return {
    userQuery: "",
    isCompleted: false,
    isSolutionVisible: false,
  };
}

export function notifyBossBattleStorageUpdated() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(BOSS_BATTLE_STORAGE_EVENT));
}

export function readBossStageState(stageId: string): SavedBossBattleStageState {
  if (typeof window === "undefined") {
    return getDefaultBossStageState();
  }

  try {
    const storedValue = window.localStorage.getItem(
      getBossStageStorageKey(stageId),
    );

    if (!storedValue) {
      return getDefaultBossStageState();
    }

    return {
      ...getDefaultBossStageState(),
      ...JSON.parse(storedValue),
    };
  } catch {
    return getDefaultBossStageState();
  }
}

export function saveBossStageState(
  stageId: string,
  nextState: SavedBossBattleStageState,
) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    getBossStageStorageKey(stageId),
    JSON.stringify(nextState),
  );

  notifyBossBattleStorageUpdated();
}

export function resetBossBattleProgress(battle: BossBattle) {
  if (typeof window === "undefined") {
    return;
  }

  battle.stages.forEach((stage) => {
    window.localStorage.removeItem(getBossStageStorageKey(stage.id));
  });

  notifyBossBattleStorageUpdated();
}

export function countCompletedBossStages(battle: BossBattle) {
  return battle.stages.filter(
    (stage) => readBossStageState(stage.id).isCompleted,
  ).length;
}

export function getComputedBossBattleStatus(battle: BossBattle) {
  if (battle.status === "Locked") {
    return "Locked";
  }

  const completedStages = countCompletedBossStages(battle);

  if (completedStages === battle.stages.length) {
    return "Completed";
  }

  return "Unlocked";
}
