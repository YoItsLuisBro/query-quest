import BossBattleCard from "../components/cards/BossBattleCard";
import PageShell from "../components/ui/PageShell";
import { bossBattles } from "../data/bossBattles";

export default function BossBattlePage() {
  return (
    <PageShell
      eyebrow="Boss Locked"
      title="Boss Battles"
      description="Take on larger SQL missions that combine multiple skills into real database challenges."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {bossBattles.map((boss) => (
          <BossBattleCard key={boss.id} boss={boss}/>
        ))}
      </div>
    </PageShell>
  )
}