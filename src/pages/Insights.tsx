import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Image from "../components/Image";
import { getPageImages, listInsights } from "../services/content";

export default function Insights() {
  const insights = listInsights();
  const { hero } = getPageImages("insights");

  return (
    <div>
      <PageHero
        title="Insights & News"
        subtitle="Company updates, project milestones and useful construction insights."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="From Our Team" title="Latest Articles" />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-charcoal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    image={post.cover}
                    alt={post.title}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{post.category}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-charcoal-900">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 border-t border-charcoal-100 pt-4 text-xs text-charcoal-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" /> {post.author}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition group-hover:gap-2.5">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
