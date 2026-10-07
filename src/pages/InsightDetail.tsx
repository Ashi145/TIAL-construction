import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { getInsight } from "../services/content";

export default function InsightDetail() {
  const { slug } = useParams();
  const post = slug ? getInsight(slug) : undefined;

  if (!post) return <Navigate to="/insights" replace />;

  return (
    <div>
      <PageHero
        title={post.title}
        subtitle={post.category}
        image={post.cover}
        crumbs={[{ label: "Home", to: "/" }, { label: "Insights", to: "/insights" }, { label: post.title }]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-5 border-b border-charcoal-100 pb-6 text-sm text-charcoal-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
          </div>
          <div className="prose mt-8 max-w-none">
            {post.body.map((para, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-charcoal-700">
                {para}
              </p>
            ))}
          </div>
          <Link to="/insights" className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
