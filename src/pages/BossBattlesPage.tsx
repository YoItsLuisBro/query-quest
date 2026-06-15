import BossBattleCard from "../components/cards/BossBattleCard";
import PageShell from "../components/ui/PageShell";
import TerminalPanel from "../components/ui/TerminalPanel";
import { bossBattles } from "../data/bossBattles";

export default function BossBattlesPage() {
  const totalBattles = bossBattles.length;
  const totalStages = bossBattles.reduce(
    (total, battle) => total + battle.stages.length,
    0,
  );

  return (
    <PageShell
      eyebrow="Boss Battles"
      title="SQL Boss Battles"
      description="Fight larger SQL missions that combine multiple query skills into multi-stage battles."
    >
      <div className="space-y-8">
        <section className="grid gap-6 md:grid-cols-3">
          <TerminalPanel
            eyebrow="Battles Loaded"
            title={`${totalBattles}`}
            accent="rose"
          >
            <p className="text-sm leading-6 text-slate-300">
              Each battle contains multiple SQL stages.
            </p>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Total Stages"
            title={`${totalStages}`}
            accent="cyan"
          >
            <p className="text-sm leading-6 text-slate-300">
              Every stage has a prompt, starter query, hints, and solution.
            </p>
          </TerminalPanel>

          <TerminalPanel
            eyebrow="Battle Mode"
            title="Playable"
            accent="emerald"
          >
            <p className="text-sm leading-6 text-slate-300">
              Your typed answers and completed stages are saved locally.
            </p>
          </TerminalPanel>
        </section>

        <section className="grid gap-8">
          {bossBattles.map((battle) => (
            <BossBattleCard key={battle.id} battle={battle} />
          ))}
        </section>
      </div>
    </PageShell>
  );
}
