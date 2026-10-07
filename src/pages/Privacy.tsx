import PageHero from "../components/PageHero";
import { COMPANY } from "../data/content";
import { IMAGES } from "../data/images";

export default function Privacy() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How Tial Construction Ltd collects, uses and protects your information."
        image={IMAGES.blueprintReview}
        crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-sm leading-relaxed text-charcoal-700">
          <p className="text-charcoal-500">Last updated: {new Date().getFullYear()}</p>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">1. Introduction</h2>
            <p className="mt-3">
              {COMPANY.name} ("Tial", "we", "us") respects your privacy and is committed to protecting the personal
              information you share with us through this website, including via our contact, quote and careers
              forms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">2. Information We Collect</h2>
            <p className="mt-3">We collect only the information necessary to respond to your enquiry, including:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Name, phone number and email address</li>
              <li>Company or organization name, where provided</li>
              <li>Project details such as type, location, description, budget and timeline</li>
              <li>Documents or files voluntarily uploaded (e.g. drawings, BOQs, CVs)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">3. How We Use Your Information</h2>
            <p className="mt-3">
              Information submitted through our forms is used solely to respond to enquiries, prepare quotations,
              evaluate job applications and improve our services. We do not sell personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">4. Data Storage & Security</h2>
            <p className="mt-3">
              We take reasonable technical and organizational measures to protect submitted information from
              unauthorized access, loss or misuse. Access to enquiry data is restricted to authorized Tial staff.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">5. Data Retention</h2>
            <p className="mt-3">
              We retain enquiry and application data only for as long as necessary to respond to your request or as
              required for legitimate business or legal purposes, after which it will be securely deleted or
              anonymized.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">6. Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal information held by us by
              contacting us at {COMPANY.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">7. Contact Us</h2>
            <p className="mt-3">
              For any questions about this Privacy Policy, please contact {COMPANY.name} at {COMPANY.email} or{" "}
              {COMPANY.phone1}.
            </p>
          </div>

          <p className="rounded-lg border border-gold-200 bg-gold-50 p-4 text-xs italic text-charcoal-500">
            This Privacy Policy is a general template and should be reviewed by Tial Construction Ltd's legal
            advisor to ensure compliance with applicable data protection laws before final publication.
          </p>
        </div>
      </section>
    </div>
  );
}
