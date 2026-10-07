import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { TeamCard } from "../components/Cards";
import CTASection from "../components/CTASection";
import { TEAM } from "../data/content";
import { IMAGES } from "../data/images";

export default function Team() {
  return (
    <div>
      <PageHero
        title="Our Team"
        subtitle="The people behind Tial Construction's project delivery."
        image={IMAGES.teamDiscussion}
        crumbs={[{ label: "Home", to: "/" }, { label: "Team" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Leadership & Key Personnel"
            title="Meet the Tial Construction Team"
            description="Our directors, engineers and project managers bring together the technical and management skills needed to deliver projects safely and to specification. Profiles shown reflect roles within the company; names, photographs and qualifications will be updated once approved by Tial for publication."
          />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <TeamCard member={member} key={member.name + member.title} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
