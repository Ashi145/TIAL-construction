import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { ServiceIcon } from "../components/ServiceIcon";
import { PrimaryButton, OutlineDarkButton } from "../components/Buttons";
import { getService, listServices } from "../services/content";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = listServices().filter((s) => s.slug !== slug);

  return (
    <div>
      <PageHero
        title={service.title}
        subtitle={service.short}
        image={service.image}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700 text-white">
              <ServiceIcon icon={service.icon} className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-extrabold text-charcoal-900 sm:text-3xl">
              Service Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600">{service.description}</p>

            <h3 className="mt-10 font-display text-xl font-bold text-charcoal-900">What This Service Covers</h3>
            <ul className="mt-5 space-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-lg border border-charcoal-100 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-charcoal-700">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton to="/quote">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <OutlineDarkButton to="/projects">View Related Projects</OutlineDarkButton>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-charcoal-100 p-6">
              <h4 className="font-display font-bold text-charcoal-900">Other Services</h4>
              <ul className="mt-4 space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-charcoal-700 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {s.title} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-800 p-6 text-white">
              <h4 className="font-display font-bold">Need This Service?</h4>
              <p className="mt-2 text-sm text-brand-100">
                Tell us about your project and our team will respond with next steps.
              </p>
              <Link
                to="/quote"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-4 py-3 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
              >
                Start a Project
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-charcoal-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Explore More" title="Other Services We Offer" align="center" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-xl border border-charcoal-100 bg-white p-5 transition hover:border-brand-400 hover:shadow-md"
              >
                <ServiceIcon icon={s.icon} className="h-6 w-6 text-brand-600" />
                <h4 className="mt-3 font-display text-sm font-bold text-charcoal-900">{s.title}</h4>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand-700">
                  Learn More <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
