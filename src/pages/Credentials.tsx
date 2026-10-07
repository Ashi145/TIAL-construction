import { BadgeCheck, FileCheck2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { CREDENTIALS, COMPANY } from "../data/content";
import { IMAGES } from "../data/images";

export default function Credentials() {
  return (
    <div>
      <PageHero
        title="Credentials"
        subtitle="Company registration, professional memberships and certifications."
        image={IMAGES.blueprintReview}
        crumbs={[{ label: "Home", to: "/" }, { label: "Credentials" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Verified & Compliant"
            title="Company Registration & Credentials"
            description={`${COMPANY.name} maintains company records that support prequalification and tender processes. Specific registration numbers, certificate copies and validity dates will be published once confirmed and approved by Tial.`}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <div key={c.name} className="rounded-xl border border-charcoal-100 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-charcoal-900">{c.name}</h3>
                <p className="mt-1 text-sm font-semibold text-charcoal-500">{c.issuer}</p>
                <p className="mt-3 text-xs italic text-charcoal-400">{c.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-charcoal-900 p-8 text-white sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-400 text-charcoal-900">
              <FileCheck2 className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Need Our Company Profile for a Tender?</h3>
              <p className="mt-1 text-sm text-charcoal-300">
                Contact us for a downloadable company profile and supporting documentation for prequalification or
                tender submissions.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY.tenderEmail}`}
              className="ml-auto shrink-0 rounded-md bg-gold-400 px-5 py-3 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
            >
              Email Tenders Desk
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
