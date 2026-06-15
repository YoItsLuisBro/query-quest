import { useState } from "react";
import ChallengeCard from "../components/cards/ChallengeCard";
import BrutalistButton from "../components/ui/BrutalistButton";
import PageShell from "../components/ui/PageShell";
import TerminalPanel from "../components/ui/TerminalPanel";
import XPBadge from "../components/ui/XPBadge";
import { dailyChallenges } from "../data/dailyChallenges";

export default function DailyQueryPage() {
  const [activeChallengeId, setActiveChallengeId] = useState(
    dailyChallenges[0]?.id ?? "",
  );

  const activeChallenge =
    dailyChallenges.find((challenge) => challenge.id === activeChallengeId) ??
    dailyChallenges[0];

  return (
    <PageShell
      eyebrow="5 Minute SQL Workout"
      title="Daily Query"
      description="Practice one prediction challenge, one broken query fix, and one query-writing mission."
    >
      <div className="space-y-8">
        <section className="grid gap-6 md:grid-cols-3">
          {dailyChallenges.map((challenge, index) => (
            <button
              key={challenge.id}
              type="button"
              onClick={() => setActiveChallengeId(challenge.id)}
              className={[
                "border-2 p-5 text-left transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
                activeChallengeId === challenge.id
                  ? "border-cyan-300 bg-cyan-300 text-slate-950 shadow-[5px_5px_0px_#a78bfa]"
                  : "border-slate-100 bg-slate-900 text-slate-100 shadow-[5px_5px_0px_#22d3ee]",
              ].join(" ")}
            >
              <p className="text-xs font-black uppercase">
                Daily Drill 0{index + 1}
              </p>

              <h2 className="mt-3 text-xl font-black uppercase">
                {challenge.title}
              </h2>

              <p className="mt-3 text-sm leading-6 opacity-80">
                {challenge.prompt}
              </p>
            </button>
          ))}
        </section>

        <TerminalPanel
          eyebrow="Workout Reward"
          title="Daily SQL XP"
          accent="emerald"
        >
          <div className="flex flex-wrap items-center gap-4">
            <XPBadge xp={75} label="Available XP" />

            <p className="text-sm leading-6 text-slate-300">
              Complete all three daily drills: predict one result, fix one
              query, and write one query.
            </p>
          </div>
        </TerminalPanel>

        {activeChallenge ? <ChallengeCard challenge={activeChallenge} /> : null}

        <div className="flex flex-wrap gap-4">
          <BrutalistButton href="/playground" variant="violet">
            Practice in Playground
          </BrutalistButton>

          <BrutalistButton href="/mistakes" variant="rose">
            Review Mistakes
          </BrutalistButton>
        </div>
      </div>
    </PageShell>
  );
}
