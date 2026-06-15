import { useMemo, useSyncExternalStore } from "react";
import type { BossBattle } from "../types/learning";
import {
  BOSS_BATTLE_STORAGE_EVENT,
  countCompletedBossStages,
  getComputedBossBattleStatus,
} from "../utils/bossBattleProgress";

interface BossBattleProgress {
  completedStages: number;
  totalStages: number;
  percentage: number;
  computedStatus: "Locked" | "Unlocked" | "Completed";
}

function createBossBattleSnapshot(battle: BossBattle): BossBattleProgress {
  const completedStages = countCompletedBossStages(battle);
  const totalStages = battle.stages.length;
  const percentage =
    totalStages === 0 ? 0 : Math.round((completedStages / totalStages) * 100);

  return {
    completedStages,
    totalStages,
    percentage,
    computedStatus: getComputedBossBattleStatus(battle),
  };
}

function getServerSnapshot() {
  return JSON.stringify({
    completedStages: 0,
    totalStages: 0,
    percentage: 0,
    computedStatus: "Locked",
  });
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(BOSS_BATTLE_STORAGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(BOSS_BATTLE_STORAGE_EVENT, callback);
  };
}

export function useBossBattleProgress(battle: BossBattle) {
  const battleKey = battle.stages.map((stage) => stage.id).join("|");

  const snapshot = useSyncExternalStore(
    subscribe,
    () => JSON.stringify(createBossBattleSnapshot(battle)),
    getServerSnapshot,
  );

  return useMemo(
    () => JSON.parse(snapshot) as BossBattleProgress,
    [snapshot, battleKey],
  );
}
