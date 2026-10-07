import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ServiceCard } from "../components/Cards";
import CTASection from "../components/CTASection";
import { getPageImages, listServices } from "../services/content";

export default function Services() {
  const services = listServices();
  const { hero } = getPageImages("services");

  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Practical construction solutions across building, civil, finishing, management and infrastructure works."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Five Core Service Lines"
            description="Each service is delivered within Tial's professional scope and capacity, with a focus on quality, safety and client communication."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard service={service} index={i} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
