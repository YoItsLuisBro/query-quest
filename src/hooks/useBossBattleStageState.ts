import { useMemo, useSyncExternalStore } from "react";
import {
  BOSS_BATTLE_STORAGE_EVENT,
  readBossStageState,
  saveBossStageState,
  type SavedBossBattleStageState,
} from "../utils/bossBattleProgress";

function getServerSnapshot() {
  return JSON.stringify({
    userQuery: "",
    isCompleted: false,
    isSolutionVisible: false,
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

export function useBossBattleStageState(stageId: string) {
  const snapshot = useSyncExternalStore(
    subscribe,
    () => JSON.stringify(readBossStageState(stageId)),
    getServerSnapshot,
  );

  const stageState = useMemo(
    () => JSON.parse(snapshot) as SavedBossBattleStageState,
    [snapshot],
  );

  function setStageState(nextState: SavedBossBattleStageState) {
    saveBossStageState(stageId, nextState);
  }

  return [stageState, setStageState] as const;
}
