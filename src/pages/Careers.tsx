import { useState, type ReactNode } from "react";
import { Briefcase, Mail, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { getCompany, getPageImages, listJobOpenings } from "../services/content";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const company = getCompany();
  const openRoles = listJobOpenings();
  const { hero } = getPageImages("careers");

  return (
    <div>
      <PageHero
        title="Careers at Tial Construction"
        subtitle="Build your career with a team that values trust, integrity, accountability and leadership."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Join Our Team"
            title="Current Opportunities"
            description="Vacancies listed below are indicative of the roles Tial Construction typically recruits for. Please confirm current openings with our office before applying."
          />
          <div className="mt-10 overflow-hidden rounded-xl border border-charcoal-100">
            {openRoles.map((role, i) => (
              <div
                key={role.title}
                className={`flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center ${
                  i % 2 === 0 ? "bg-white" : "bg-charcoal-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-charcoal-900">{role.title}</h3>
                    <p className="text-xs text-charcoal-500">
                      {role.type} · {role.location}
                    </p>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="rounded-md border border-brand-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-700 transition hover:bg-brand-600 hover:text-white"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-charcoal-50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How to Apply"
              title="Submit Your Application"
              description="Complete the form with your details and the role you're interested in, or email your CV directly to our recruitment team."
            />
            <a
              href={`mailto:${company.email}?subject=Job Application`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700"
            >
              <Mail className="h-4 w-4" /> {company.email}
            </a>
          </div>

          <div className="rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-600" />
                <h3 className="mt-4 font-display text-xl font-bold text-charcoal-900">Application Received</h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  Thank you for your interest. Our HR team will review your application and contact you if shortlisted.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input required type="text" className="form-input" placeholder="Jane Doe" />
                  </Field>
                  <Field label="Phone Number" required>
                    <input required type="tel" className="form-input" placeholder="+256 7XX XXX XXX" />
                  </Field>
                </div>
                <Field label="Email Address" required>
                  <input required type="email" className="form-input" placeholder="you@example.com" />
                </Field>
                <Field label="Position Applying For" required>
                  <select required className="form-input">
                    <option value="">Select a role</option>
                    {openRoles.map((r) => (
                      <option key={r.title}>{r.title}</option>
                    ))}
                    <option>Other / General Application</option>
                  </select>
                </Field>
                <Field label="Cover Note">
                  <textarea rows={4} className="form-input" placeholder="Briefly tell us about your experience" />
                </Field>
                <Field label="Upload CV (PDF)">
                  <input type="file" accept="application/pdf" className="form-input file:mr-3 file:rounded file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-700" />
                </Field>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300"
                >
                  Submit Application <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">
        {label} {required && <span className="text-gold-600">*</span>}
      </span>
      {children}
    </label>
  );
}
