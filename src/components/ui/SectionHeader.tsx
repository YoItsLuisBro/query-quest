interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div>
      <p className="text-sm font-black uppercase text-cyan-300">{eyebrow}</p>

      <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
