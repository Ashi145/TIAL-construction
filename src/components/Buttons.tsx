import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({
  to,
  href,
  children,
  className = "",
  onClick,
}: BaseProps & { to?: string; href?: string; onClick?: () => void }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md bg-gold-400 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal-900 shadow-lg shadow-gold-900/10 transition hover:bg-gold-300 active:scale-[0.98] ${className}`;
  if (to) return <Link to={to} className={classes} onClick={onClick}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={onClick}>{children}</a>;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  to,
  href,
  children,
  className = "",
  onClick,
}: BaseProps & { to?: string; href?: string; onClick?: () => void }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/80 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-brand-800 active:scale-[0.98] ${className}`;
  if (to) return <Link to={to} className={classes} onClick={onClick}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={onClick}>{children}</a>;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export function OutlineDarkButton({ to, children, className = "" }: BaseProps & { to: string }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-md border-2 border-brand-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-700 transition hover:bg-brand-700 hover:text-white active:scale-[0.98] ${className}`}
    >
      {children}
    </Link>
  );
}
