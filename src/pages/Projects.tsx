import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ProjectCard } from "../components/Cards";
import CTASection from "../components/CTASection";
import { PROJECTS } from "../data/content";
import { IMAGES } from "../data/images";

const CATEGORIES = ["All", "Residential", "Commercial", "Civil", "Renovation", "Roads", "Infrastructure"] as const;
const STATUSES = ["All", "Completed", "Ongoing"] as const;

export default function Projects() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) => (category === "All" || p.category === category) && (status === "All" || p.status === status)
      ),
    [category, status]
  );

  return (
    <div>
      <PageHero
        title="Our Projects"
        subtitle="A portfolio of completed and ongoing building, civil and road projects."
        image={IMAGES.apartmentBalconies}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Completed & Ongoing Projects"
            description="Filter by category or status to explore the type of work Tial Construction delivers."
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                    category === c
                      ? "border-brand-700 bg-brand-700 text-white"
                      : "border-charcoal-200 text-charcoal-600 hover:border-brand-400"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                    status === s
                      ? "border-gold-500 bg-gold-400 text-charcoal-900"
                      : "border-charcoal-200 text-charcoal-600 hover:border-gold-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-charcoal-500">No projects match the selected filters yet.</p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProjectCard project={p} key={p.slug} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
