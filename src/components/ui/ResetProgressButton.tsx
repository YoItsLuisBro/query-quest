import { useState } from "react";
import { resetAllChallengeProgress } from "../../utils/challengeProgress";
import BrutalistButton from "./BrutalistButton";

export default function ResetProgressButton() {
  const [isConfirming, setIsConfirming] = useState(false);

  function handleReset() {
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }

    resetAllChallengeProgress();
    setIsConfirming(false);
  }

  function handleCancel() {
    setIsConfirming(false);
  }

  return (
    <div className="border-2 border-rose-300 bg-slate-950 p-4">
      <p className="text-xs font-black uppercase text-rose-300">Danger Zone</p>

      <h3 className="mt-2 text-xl font-black uppercase text-white">
        Reset All Local Progress
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        This clears all saved challenge answers, completed challenge states, and
        local XP progress from this browser.
      </p>

      <div className="mt-5 flex flex-wrap gap-4">
        <BrutalistButton type="button" variant="rose" onClick={handleReset}>
          {isConfirming ? "Confirm Reset" : "Reset Progress"}
        </BrutalistButton>

        {isConfirming ? (
          <BrutalistButton type="button" variant="slate" onClick={handleCancel}>
            Cancel
          </BrutalistButton>
        ) : null}
      </div>
    </div>
  );
}
