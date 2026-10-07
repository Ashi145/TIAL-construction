import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FacebookIcon, LinkedinIcon, InstagramIcon, TikTokIcon, TwitterIcon } from "./SocialIcons";
import Logo from "./Logo";
import { getCompany, getFooterServiceLinks, getNavLinks } from "../services/content";

export default function Footer() {
  const company = getCompany();
  const navLinks = getNavLinks();
  const footerServiceLinks = getFooterServiceLinks();
  const contactLinks = [
    { label: "X", href: company.social.twitter, Icon: TwitterIcon },
    { label: "TikTok", href: company.social.tiktok, Icon: TikTokIcon },
    { label: "Email", href: `mailto:${company.email}`, Icon: Mail },
    { label: "WhatsApp", href: `https://wa.me/${company.whatsapp}`, Icon: MessageCircle },
  ];

  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-charcoal-400">
            {company.tagline} We deliver general building construction, civil and structural works, renovations,
            project management and roadworks across Uganda.
          </p>
          <div className="mt-5 flex gap-3">
            {[
            { Icon: FacebookIcon, href: company.social.facebook },
            { Icon: LinkedinIcon, href: company.social.linkedin },
            { Icon: InstagramIcon, href: company.social.instagram },
            { Icon: TikTokIcon, href: company.social.tiktok },
            { Icon: TwitterIcon, href: company.social.twitter },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-700 text-charcoal-300 transition hover:border-gold-400 hover:text-gold-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-gold-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-gold-300 transition hover:bg-gold-400 hover:text-charcoal-900"
                aria-label={label}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/careers" className="transition hover:text-gold-400">Careers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerServiceLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="font-semibold text-gold-400 hover:text-gold-300">
                Request a Quote →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${company.phone1.replace(/\s/g, "")}`} className="hover:text-gold-400">
                {company.phone1}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${company.email}`} className="hover:text-gold-400">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-charcoal-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-gold-400">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-gold-400">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
