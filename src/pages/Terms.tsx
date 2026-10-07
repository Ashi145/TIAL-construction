import PageHero from "../components/PageHero";
import { getCompany, getPageImages } from "../services/content";

export default function Terms() {
  const company = getCompany();
  const { hero } = getPageImages("terms");
  return (
    <div>
      <PageHero
        title="Terms of Use"
        subtitle="Terms governing your use of the Tial Construction Ltd website."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Terms of Use" }]}
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-sm leading-relaxed text-charcoal-700">
          <p className="text-charcoal-500">Last updated: {new Date().getFullYear()}</p>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing and using this website, you agree to be bound by these Terms of Use. If you do not agree
              with these terms, please discontinue use of the site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">2. Website Content</h2>
            <p className="mt-3">
              Content on this website, including text, images, logos and project information, is provided for
              general informational purposes about {company.name} and its services. While we aim to keep
              information accurate and current, we do not guarantee that all content is free of errors at all
              times.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">3. No Professional Advice</h2>
            <p className="mt-3">
              Information published on this website, including service descriptions and insights articles, does
              not constitute professional construction, engineering or legal advice. Specific project advice should
              be obtained through direct consultation with our team.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">4. Intellectual Property</h2>
            <p className="mt-3">
              The Tial Construction name, logo and associated branding are the property of {company.name}. Content
              on this website may not be copied or reproduced without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">5. Project Enquiries & Quotes</h2>
            <p className="mt-3">
              Submission of a contact, quote or careers form does not constitute a binding contract. All project
              engagements will be formalized through separate written agreements between Tial Construction Ltd and
              the client.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">6. Limitation of Liability</h2>
            <p className="mt-3">
              {company.name} shall not be liable for any indirect or consequential loss arising from use of this
              website or reliance on its content.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-charcoal-900">7. Governing Law</h2>
            <p className="mt-3">These Terms of Use are governed by the laws of the Republic of Uganda.</p>
          </div>

          <p className="rounded-lg border border-gold-200 bg-gold-50 p-4 text-xs italic text-charcoal-500">
            This Terms of Use page is a general template and should be reviewed by Tial Construction Ltd's legal
            advisor before final publication.
          </p>
        </div>
      </section>
    </div>
  );
}
