import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import type { Service, Project, TeamMember, Testimonial } from "../data/content";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-charcoal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-400 text-charcoal-900 shadow">
          <ServiceIcon icon={service.icon} className="h-5 w-5" />
        </span>
        <span className="absolute bottom-3 right-4 font-display text-4xl font-black text-white/20">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-charcoal-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{service.short}</p>

        <div className="mt-4 flex-1">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">How we work</p>
          <ul className="space-y-2 text-sm text-charcoal-700">
            {service.process.map((step) => (
              <li key={step} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition group-hover:gap-2.5"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-charcoal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            project.status === "Completed" ? "bg-brand-500 text-white" : "bg-gold-400 text-charcoal-900"
          }`}
        >
          {project.status}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal-800">
          {project.category}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
          <p className="flex items-center gap-1 text-xs text-charcoal-200">
            <MapPin className="h-3 w-3" /> {project.location}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex-1 text-sm leading-relaxed text-charcoal-600 line-clamp-3">{project.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-charcoal-100 pt-4">
          <span className="flex items-center gap-1 text-xs font-semibold text-charcoal-500">
            <Calendar className="h-3.5 w-3.5" /> {project.year}
          </span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition group-hover:gap-2.5"
          >
            View Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-charcoal-100 bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
          <p className="text-sm font-semibold text-gold-300">{member.title}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-charcoal-600">{member.bio}</p>
        <ul className="mt-3 space-y-1 border-t border-charcoal-100 pt-3 text-xs text-charcoal-500">
          {member.qualifications.map((q) => (
            <li key={q}>• {q}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-charcoal-100 bg-white p-6 shadow-sm">
      <div className="mb-3 flex gap-1 text-gold-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.73.99-5.8-4.21-4.1 5.82-.85L10 1.5Z" />
          </svg>
        ))}
      </div>
      <p className="flex-1 text-sm italic leading-relaxed text-charcoal-700">“{testimonial.quote}”</p>
      <div className="mt-4 border-t border-charcoal-100 pt-4">
        <p className="text-sm font-bold text-charcoal-900">{testimonial.name}</p>
        <p className="text-xs text-charcoal-500">{testimonial.role}</p>
      </div>
    </div>
  );
}
