import { useState } from "react";
import { Send, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { getCompany, getPageImages, listServices } from "../services/content";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const company = getCompany();
  const services = listServices();
  const { hero } = getPageImages("quote");

  return (
    <div>
      <PageHero
        title="Request a Quote"
        subtitle="Tell us about your project and our team will respond with next steps."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Request a Quote" }]}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Start a Project"
              title="Project Enquiry Form"
              description="The more detail you provide, the faster and more accurately our team can respond with an estimate and next steps."
            />

            <div className="mt-8 rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-brand-600" />
                  <h4 className="mt-4 font-display text-xl font-bold text-charcoal-900">Request Received</h4>
                  <p className="mt-2 max-w-sm text-sm text-charcoal-600">
                    Thank you for sharing your project details. Our team will review your request and respond
                    shortly to discuss next steps.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Full Name *</span>
                      <input required className="form-input" placeholder="Your name" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">
                        Company / Organization
                      </span>
                      <input className="form-input" placeholder="Optional" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Phone Number *</span>
                      <input required type="tel" className="form-input" placeholder="+256 7XX XXX XXX" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Email Address</span>
                      <input type="email" className="form-input" placeholder="you@example.com" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Project Type *</span>
                      <select required className="form-input">
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug}>{s.title}</option>
                        ))}
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">
                        Project Location *
                      </span>
                      <input required className="form-input" placeholder="e.g. Kampala, Wakiso" />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">
                      Brief Project Description *
                    </span>
                    <textarea
                      required
                      rows={5}
                      className="form-input"
                      placeholder="Tell us about the scope of work, size of project, and any specific requirements"
                    />
                  </label>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">
                        Estimated Budget (optional)
                      </span>
                      <input className="form-input" placeholder="e.g. UGX 50,000,000 – 100,000,000" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">
                        Desired Start Date / Timeline
                      </span>
                      <input className="form-input" placeholder="e.g. Within 3 months" />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">
                      Upload Drawings / BOQ / Photos (optional)
                    </span>
                    <input
                      type="file"
                      multiple
                      className="form-input file:mr-3 file:rounded file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-700"
                    />
                  </label>

                  <label className="flex items-start gap-2 text-xs text-charcoal-500">
                    <input required type="checkbox" className="mt-0.5" />I consent to be contacted by Tial
                    Construction Ltd regarding this project enquiry, in line with the Privacy Policy.
                  </label>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
                  >
                    Submit Project Enquiry <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-brand-800 p-6 text-white">
              <h4 className="font-display font-bold">Prefer to Talk Directly?</h4>
              <p className="mt-2 text-sm text-brand-100">
                Reach our team immediately by phone or WhatsApp for urgent project enquiries.
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href={`tel:${company.phone1.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" /> {company.phone1}
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-charcoal-100 p-6">
              <h4 className="font-display font-bold text-charcoal-900">What Happens Next?</h4>
              <ol className="mt-4 space-y-3 text-sm text-charcoal-600">
                <li className="flex gap-3">
                  <span className="font-display font-black text-brand-600">1.</span> We review your project details
                  and may contact you for clarification.
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-black text-brand-600">2.</span> We may schedule a site visit or
                  consultation call where appropriate.
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-black text-brand-600">3.</span> We share a proposal or estimate
                  based on your project scope.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
