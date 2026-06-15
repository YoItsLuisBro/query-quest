import type { ReactNode } from 'react';

interface PageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <section className="border-2 border-slate-100 bg-slate-950 p-6 shadow-[8px_8px_0px_#22d3ee] md:p-8">
      <p className="text-sm font-black uppercase text-cyan-300">{eyebrow}</p>

      <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
        {description}
      </p>

      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
