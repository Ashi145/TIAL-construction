import { useParams, Navigate, Link } from "react-router-dom";
import { MapPin, Calendar, User, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { ProjectCard } from "../components/Cards";
import { PROJECTS } from "../data/content";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const related = PROJECTS.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3);

  return (
    <div>
      <PageHero
        title={project.title}
        subtitle={`${project.category} · ${project.status}`}
        image={project.image}
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: project.title }]}
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold text-charcoal-900">Project Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600">{project.description}</p>

            <h3 className="mt-10 font-display text-xl font-bold text-charcoal-900">Scope of Works</h3>
            <ul className="mt-5 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-charcoal-100 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-bold text-charcoal-900">Project Gallery</h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} photo ${i + 1}`}
                  className="h-48 w-full rounded-xl object-cover shadow-sm"
                />
              ))}
            </div>

            <Link to="/projects" className="mt-10 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
              <ArrowLeft className="h-4 w-4" /> Back to All Projects
            </Link>
          </div>

          <aside>
            <div className="sticky top-28 rounded-2xl border border-charcoal-100 p-6">
              <h4 className="font-display font-bold text-charcoal-900">Project Details</h4>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-brand-600" />
                  <div>
                    <dt className="font-semibold text-charcoal-900">Location</dt>
                    <dd className="text-charcoal-600">{project.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 text-brand-600" />
                  <div>
                    <dt className="font-semibold text-charcoal-900">Timeline</dt>
                    <dd className="text-charcoal-600">{project.year}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="mt-0.5 h-4 w-4 text-brand-600" />
                  <div>
                    <dt className="font-semibold text-charcoal-900">Client</dt>
                    <dd className="text-charcoal-600">{project.client}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-6 rounded-lg bg-brand-50 p-3 text-center text-xs font-bold uppercase tracking-wide text-brand-700">
                Status: {project.status}
              </div>
              <Link
                to="/quote"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-4 py-3 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
              >
                Start a Similar Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-charcoal-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="font-display text-2xl font-extrabold text-charcoal-900">Related Projects</h3>
            <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard project={p} key={p.slug} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
