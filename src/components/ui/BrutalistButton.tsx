import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

type ButtonVariant = "cyan" | "emerald" | "violet" | "rose" | "slate";

interface BrutalistButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  cyan: "bg-cyan-300 text-slate-950 shadow-[4px_4px_0px_#a78bfa]",
  emerald: "bg-emerald-400 text-slate-950 shadow-[4px_4px_0px_#22d3ee]",
  violet: "bg-violet-400 text-slate-950 shadow-[4px_4px_0px_#10b981]",
  rose: "bg-rose-500 text-white shadow-[4px_4px_0px_#22d3ee]",
  slate: "bg-slate-900 text-slate-100 shadow-[4px_4px_0px_#22d3ee]",
};

export default function BrutalistButton({
  children,
  variant = "cyan",
  href,
  className = "",
  disabled,
  ...props
}: BrutalistButtonProps) {
  const classes = [
    "inline-flex items-center justify-center border-2 border-slate-100 px-4 py-3 text-sm font-black uppercase transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950",
    disabled
      ? "cursor-not-allowed opacity-50"
      : "hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
    variantClasses[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
