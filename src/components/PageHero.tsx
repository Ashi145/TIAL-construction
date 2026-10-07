import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { ResponsiveImage } from "../data/types";
import Image from "./Image";

type Crumb = { label: string; to?: string };

export default function PageHero({
  title,
  subtitle,
  image,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  image: ResponsiveImage;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[320px] items-end overflow-hidden bg-charcoal-900">
      <Image
        image={image}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 pt-28">
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-charcoal-300">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {c.to ? (
                <Link to={c.to} className="hover:text-gold-400">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold-400">{c.label}</span>
              )}
            </span>
          ))}
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-charcoal-200">{subtitle}</p>}
      </div>
    </section>
  );
}
