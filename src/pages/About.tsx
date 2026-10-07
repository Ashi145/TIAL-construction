import { Target, Eye } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Image from "../components/Image";
import { VALUE_ICONS } from "../components/icons";
import { getApproachSteps, getCompany, getPageImages, getValues } from "../services/content";

export default function About() {
  const company = getCompany();
  const values = getValues();
  const approachSteps = getApproachSteps();
  const { hero, profile, approach } = getPageImages("about");

  return (
    <div>
      <PageHero
        title="About Tial Construction Ltd"
        subtitle="Building on Trust, Leading with Integrity."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Image
            image={profile}
            alt="Tial Construction team on site"
            sizes="(min-width: 1024px) 600px, 100vw"
            className="h-[460px] w-full rounded-2xl object-cover shadow-xl"
          />
          <div>
            <SectionHeading eyebrow="Company Profile" title="Who We Are" />
            <p className="mt-5 text-base leading-relaxed text-charcoal-600">
              {company.name} is a registered limited liability company dedicated to delivering high-quality
              construction, civil works and infrastructure solutions. Our name, TIAL, reflects the values that
              guide our business: <strong>Trust, Integrity, Accountability and Leadership.</strong>
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600">
              We approach every project with a commitment to professionalism, safety, quality and responsible
              delivery. Our goal is to understand our clients' needs, provide practical construction solutions
              and deliver work that creates lasting value — for private clients, developers, institutions and
              procurement partners alike.
            </p>
            <p className="mt-4 text-sm italic leading-relaxed text-charcoal-400">
              Company history, registration details, location and professional credentials to be confirmed and
              added by Tial Construction Ltd prior to final publication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-charcoal-50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-charcoal-900">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{company.mission}</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-charcoal-900">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{company.vision}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            align="center"
            description="TIAL represents the four principles that guide how we work with clients, partners and each other."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = VALUE_ICONS[value.name];
              return (
                <div
                  key={value.name}
                  className="rounded-xl border border-charcoal-100 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-charcoal-900">{value.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-brand-800 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How We Work" title="Our Approach to Every Project" light />
            <div className="mt-6 space-y-5">
              {approachSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="font-display text-2xl font-black text-gold-400">{item.step}</span>
                  <div>
                    <h4 className="font-display font-bold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-brand-100">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            image={approach}
            alt="Engineers reviewing project plans on site"
            sizes="(min-width: 1024px) 600px, 100vw"
            className="h-[460px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
