import { HardHat, ShieldCheck, Leaf, ClipboardCheck, Users2, AlertTriangle } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { IMAGES } from "../data/images";

const PILLARS = [
  {
    icon: HardHat,
    title: "Site Safety & PPE",
    text: "Mandatory personal protective equipment, site induction and clear access control for all workers and visitors.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    text: "Regular site risk assessments and toolbox talks to identify and manage hazards before they become incidents.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    text: "Structured inspection checkpoints at each stage of construction to confirm work meets specification.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    text: "Responsible management of site waste, materials and surrounding environment throughout construction.",
  },
  {
    icon: Users2,
    title: "Trained Supervision",
    text: "Experienced site supervisors overseeing day-to-day safety compliance and workmanship on every project.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Reporting",
    text: "Clear procedures for reporting, recording and acting on safety observations and near-misses on site.",
  },
];

export default function HealthSafety() {
  return (
    <div>
      <PageHero
        title="Health, Safety & Quality"
        subtitle="Our commitment to safety, quality control and environmental responsibility."
        image={IMAGES.helmetCloseup}
        crumbs={[{ label: "Home", to: "/" }, { label: "Health, Safety & Quality" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Safety and Quality at the Centre of Delivery"
            description="We place responsible site practices at the centre of every project, and we aim for workmanship and outcomes that create lasting value for our clients and communities."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border border-charcoal-100 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-charcoal-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-900 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <img
            src={IMAGES.workersDiscuss}
            alt="Site safety briefing"
            className="h-[400px] w-full rounded-2xl object-cover shadow-xl"
          />
          <div>
            <SectionHeading
              eyebrow="Sustainability"
              title="Environmental & Sustainability Approach"
              light
              description="We aim to manage construction activity responsibly, minimizing disruption and waste on and around our sites while supporting durable, long-lasting construction outcomes."
            />
            <ul className="mt-6 space-y-3 text-sm text-charcoal-200">
              {[
                "Responsible handling and disposal of construction waste",
                "Efficient use of materials to reduce unnecessary wastage",
                "Dust, noise and traffic management on active sites",
                "Consideration of durability and maintenance needs in construction choices",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
