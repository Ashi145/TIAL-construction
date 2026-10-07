import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  HardHat,
  Award,
  Users,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import SectionHeading from "../components/SectionHeading";
import { ServiceCard, ProjectCard, TestimonialCard } from "../components/Cards";
import CTASection from "../components/CTASection";
import { COMPANY, SERVICES, PROJECTS, TESTIMONIALS, STATS } from "../data/content";
import { IMAGES } from "../data/images";

const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "We build confidence through reliable service, honest communication and consistent delivery.",
  },
  {
    icon: Award,
    title: "Integrity",
    text: "We value honesty, transparency and professional conduct in every client and site relationship.",
  },
  {
    icon: CheckCircle2,
    title: "Accountability",
    text: "We take responsibility for every stage of project delivery, from planning through to handover.",
  },
  {
    icon: Users,
    title: "Leadership",
    text: "We seek better ways to deliver quality construction solutions for our clients and communities.",
  },
];

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-charcoal-950">
        <img
          src={IMAGES.heroCrane}
          alt="Tial Construction building project under construction"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-28">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-300 ring-1 ring-gold-400/40">
              General Building · Civil Works · Infrastructure
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building with Trust.
              <br /> Delivering with <span className="text-gold-400">Integrity.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-200">
              Tial Construction Ltd delivers quality building, civil, structural and infrastructure solutions
              with a commitment to professionalism, safety, accountability and lasting value.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton to="/projects">
                View Our Projects <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton to="/quote">Request a Quote</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-charcoal-100 bg-brand-800">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-extrabold text-gold-400 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src={IMAGES.workersDiscuss}
              alt="Tial Construction site team reviewing project plans"
              className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-xl bg-white p-5 shadow-xl sm:block">
              <p className="font-display text-sm font-bold text-charcoal-900">TIAL stands for:</p>
              <p className="mt-1 text-sm text-charcoal-600">Trust · Integrity · Accountability · Leadership</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About Tial Construction"
              title="A construction partner built on clear values and real accountability"
              description="Tial Construction Ltd is a construction, civil works and infrastructure company dedicated to delivering projects that meet client needs while upholding high standards of professionalism, safety and innovation."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Clear communication from first enquiry to final handover",
                "Disciplined site supervision and quality control",
                "Safety-first culture across every active site",
                "A growing portfolio of building, civil and road projects",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SecondaryButtonDark />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-charcoal-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Core Services"
            description="From groundbreaking to handover, Tial Construction offers a focused range of services covering building, civil, finishing, management and infrastructure works."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ServiceCard service={service} index={i} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Work"
              title="Featured Projects"
              description="A selection of building, civil and road projects reflecting our current scope and delivery capability."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:gap-2.5"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard project={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tial */}
      <section className="relative overflow-hidden bg-charcoal-900 py-20">
        <img src={IMAGES.highRiseCloud} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Choose Tial"
            title="Delivery strengths our clients can rely on"
            description="Our name is our promise. Every project is guided by the same four principles that define how we work."
            align="center"
            light
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition hover:border-gold-400/50 hover:bg-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-400">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety teaser */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Health, Safety & Quality"
              title="Safety-conscious, quality-focused construction"
              description="We place responsible site practices at the centre of project delivery and aim for workmanship and project outcomes that create lasting value."
            />
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: HardHat, label: "PPE & site induction for every worker and visitor" },
                { icon: ShieldCheck, label: "Regular safety briefings and toolbox talks" },
                { icon: CheckCircle2, label: "Structured quality control checkpoints" },
                { icon: Award, label: "Environmentally responsible site management" },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3 rounded-lg border border-charcoal-100 p-4">
                  <f.icon className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-charcoal-700">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/health-safety"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:gap-2.5"
              >
                Learn About Our Safety Approach <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <img
            src={IMAGES.helmetCloseup}
            alt="Construction site safety helmet"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Clients Say"
            align="center"
            description="Illustrative client feedback themes. Verified testimonials will be published with written client permission."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard testimonial={t} key={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Contact teaser */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Talk to Tial About Your Project"
              description="Reach out by phone, email or WhatsApp, or send us your project details and our team will respond promptly."
            />
            <div className="mt-6 space-y-4">
              <a
                href={`tel:${COMPANY.phone1.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-lg border border-charcoal-100 p-4 transition hover:border-brand-400"
              >
                <Phone className="h-5 w-5 text-brand-600" />
                <div>
                  <p className="text-sm font-bold text-charcoal-900">Call Us</p>
                  <p className="text-sm text-charcoal-600">{COMPANY.phone1}</p>
                </div>
              </a>
              <PrimaryButton to="/contact" className="w-full sm:w-auto">
                Contact Us <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-charcoal-100 shadow">
            <iframe
              title="Tial Construction Location"
              src="https://maps.google.com/maps?q=Kampala%20Uganda&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SecondaryButtonDark() {
  return (
    <Link
      to="/about"
      className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-brand-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-700 transition hover:bg-brand-700 hover:text-white"
    >
      Learn More About Us <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
