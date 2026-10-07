import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Image from "../components/Image";
import { getEquipmentNote, getPageImages, listEquipment } from "../services/content";

export default function Capacity() {
  const equipment = listEquipment();
  const note = getEquipmentNote();
  const { hero } = getPageImages("capacity");

  return (
    <div>
      <PageHero
        title="Capacity & Equipment"
        subtitle="Plant, machinery and technical capacity supporting our project delivery."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Capacity & Equipment" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Capability"
            title="Equipment & Technical Capacity"
            description="Tial Construction accesses a range of plant, machinery and technical resources — through ownership, hire or trusted partners — to deliver building, civil and road projects safely and efficiently."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-xl border border-charcoal-100 shadow-sm">
                <Image
                  image={item.image}
                  alt={item.name}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{item.category}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-charcoal-900">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-lg border border-gold-200 bg-gold-50 p-5 text-sm leading-relaxed text-charcoal-700">
            <strong>Note: </strong>
            {note}
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
