import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { TeamCard } from "../components/Cards";
import CTASection from "../components/CTASection";
import { getPageImages, listTeamMembers } from "../services/content";

export default function Team() {
  const members = listTeamMembers();
  const { hero } = getPageImages("team");

  return (
    <div>
      <PageHero
        title="Our Team"
        subtitle="The people behind Tial Construction's project delivery."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Team" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Leadership & Key Personnel"
            title="Meet the Tial Construction Team"
            description="Our directors, engineers and project managers bring together the technical and management skills needed to deliver projects safely and to specification. Professional qualifications and registration details will be updated once confirmed by Tial for publication."
          />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <TeamCard member={member} key={member.id} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
