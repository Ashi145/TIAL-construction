import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";
import { getCompany, getPageImages, listFaqs } from "../services/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const company = getCompany();
  const faqs = listFaqs();
  const { hero } = getPageImages("contact");

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Call, email, WhatsApp or send us your enquiry — we're ready to help with your next project."
        image={hero}
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Get In Touch" title="We'd Love to Hear From You" />
            <div className="mt-8 space-y-4">
              <ContactRow icon={Phone} label="Phone" value={company.phone1} href={`tel:${company.phone1.replace(/\s/g, "")}`} />
              <ContactRow icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with our team"
                href={`https://wa.me/${company.whatsapp}`}
              />
              <ContactRow icon={MapPin} label="Address" value={company.address} />
              <ContactRow icon={Clock} label="Office Hours" value={company.hours} />
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal-100 shadow">
              <iframe
                title="Tial Construction Map"
                src="https://maps.google.com/maps?q=Haruna%20Towers%2C%20Kubiri%2C%20Bombo%20Road%2C%20Kampala%2C%20Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-charcoal-100 bg-white p-8 shadow-sm lg:col-span-3">
            <h3 className="font-display text-xl font-bold text-charcoal-900">Send Us a Message</h3>
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-brand-600" />
                <h4 className="mt-4 font-display text-xl font-bold text-charcoal-900">Message Sent</h4>
                <p className="mt-2 max-w-sm text-sm text-charcoal-600">
                  Thank you for contacting Tial Construction Ltd. A member of our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Full Name *</span>
                    <input required className="form-input" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Phone Number *</span>
                    <input required type="tel" className="form-input" placeholder="+256 7XX XXX XXX" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Email Address</span>
                  <input type="email" className="form-input" placeholder="you@example.com" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Subject</span>
                  <input className="form-input" placeholder="e.g. General Enquiry, Tender Question" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-charcoal-800">Message *</span>
                  <textarea required rows={5} className="form-input" placeholder="How can we help?" />
                </label>
                <label className="flex items-start gap-2 text-xs text-charcoal-500">
                  <input required type="checkbox" className="mt-0.5" />I consent to Tial Construction Ltd contacting
                  me regarding this enquiry, in line with the Privacy Policy.
                </label>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-charcoal-900 transition hover:bg-gold-300 sm:w-auto"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" align="center" />
          <div className="mt-10">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-lg border border-charcoal-100 p-4 transition hover:border-brand-400">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-charcoal-500">{label}</p>
        <p className="text-sm font-semibold text-charcoal-900">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
