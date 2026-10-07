import { Phone } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import Image from "./Image";
import { getCompany, getLayoutImages } from "../services/content";

export default function CTASection() {
  const company = getCompany();
  const { ctaBackground } = getLayoutImages();

  return (
    <section className="relative overflow-hidden bg-brand-800 py-16">
      <Image image={ctaBackground} sizes="100vw" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-diagonal-pattern" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          Let's Discuss Your Next Project
        </h2>
        <p className="max-w-2xl text-brand-100">
          Whether you're planning a new building, renovation or infrastructure project, our team is ready to
          understand your needs and provide a practical construction solution.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton to="/quote">Request a Quote</PrimaryButton>
          <SecondaryButton href={`tel:${company.phone1.replace(/\s/g, "")}`}>
            <Phone className="h-4 w-4" /> Call Us Now
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
