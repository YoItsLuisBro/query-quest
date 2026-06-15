import type { ReactNode } from "react";

interface TerminalPanelProps {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  accent?: "cyan" | "emerald" | "violet" | "rose" | "amber";
  className?: string;
}

const accentClasses = {
  cyan: "shadow-[8px_8px_0px_#22d3ee]",
  emerald: "shadow-[8px_8px_0px_#10b981]",
  violet: "shadow-[8px_8px_0px_#a78bfa]",
  rose: "shadow-[8px_8px_0px_#f43f5e]",
  amber: "shadow-[8px_8px_0px_#f59e0b]",
};

const eyebrowClasses = {
  cyan: "text-cyan-300",
  emerald: "text-emerald-300",
  violet: "text-violet-300",
  rose: "text-rose-300",
  amber: "text-amber-300",
};

export default function TerminalPane({
  eyebrow,
  title,
  children,
  accent = "cyan",
  className = "",
}: TerminalPanelProps) {
  return (
    <section
      className={[
        "border-2 border-slate-100 bg-slate-500 p-6",
        accentClasses[accent],
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <p
          className={[
            "text-sm font-black uppercase",
            eyebrowClasses[accent],
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <h2 className="mt-2 text-3xl font-black uppercase text-white">
          {title}
        </h2>
      ) : null}

      <div className={title || eyebrow ? "mt-6" : "not-[]:"}>{children}</div>
    </section>
  );
}
