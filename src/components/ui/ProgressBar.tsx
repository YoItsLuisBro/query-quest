interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  label = "Progress",
}: ProgressBarProps) {
  const percentage = Math.min(
    100,
    Math.max(0, Math.round((value / max) * 100)),
  );

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="text-xs font-black uppercase text-slate-300">{label}</p>
        <p className="text-xs font-black uppercase text-cyan-300">
          {percentage}%
        </p>
      </div>

      <div className="h-5 border-2 border-slate-100 bg-slate-950">
        <div
          className="h-full bg-cyan-300"
          style={{ width: `${percentage}%` }}
          aria-label={`${label}: ${percentage}%`}
        />
      </div>
    </div>
  );
}
