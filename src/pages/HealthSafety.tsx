import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Image from "../components/Image";
import { SAFETY_PILLAR_ICONS } from "../components/icons";
import { getPageImages, getSafetyPillars, getSustainabilityPoints } from "../services/content";

export default function HealthSafety() {
  const pillars = getSafetyPillars();
  const sustainabilityPoints = getSustainabilityPoints();
  const { hero, sustainability } = getPageImages("healthSafety");

  return (
    <div>
      <PageHero
        title="Health, Safety & Quality"
        subtitle="Our commitment to safety, quality control and environmental responsibility."
        image={hero}
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
            {pillars.map((pillar) => {
              const Icon = SAFETY_PILLAR_ICONS[pillar.icon];
              return (
                <div key={pillar.title} className="rounded-xl border border-charcoal-100 p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-charcoal-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-900 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Image
            image={sustainability}
            alt="Site safety briefing"
            sizes="(min-width: 1024px) 600px, 100vw"
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
              {sustainabilityPoints.map((item) => (
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
