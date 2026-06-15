interface XPBadgeProps {
  xp: number;
  label?: string;
}

export default function XPBadge({ xp, label = "XP Reward" }: XPBadgeProps) {
  return (
    <div className="inline-flex border-2 border-slate-100 bg-emerald-400 px-3 py-2 text-xs font-black uppercase text-slate-950 shadow-[3px_3px_0px_#22d3ee]">
      {label}: {xp}
    </div>
  );
}
