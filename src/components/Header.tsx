import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { getCompany, getNavLinks, listServices } from "../services/content";

const navLinkClass = (isActive: boolean) =>
  [
    "relative rounded-md px-2.5 py-2 text-[13px] font-bold tracking-wide transition-colors min-[1280px]:px-3 min-[1280px]:text-sm",
    "after:absolute after:bottom-1 after:left-2.5 after:h-0.5 after:w-[calc(100%-1.25rem)] after:origin-left after:scale-x-0 after:bg-gold-400 after:transition-transform after:duration-300 after:content-[''] min-[1280px]:after:left-3 min-[1280px]:after:w-[calc(100%-1.5rem)]",
    "hover:bg-brand-50 hover:text-brand-700 hover:after:scale-x-100",
    isActive ? "text-brand-700 after:scale-x-100" : "text-charcoal-700",
  ].join(" ");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const company = getCompany();
  const navLinks = getNavLinks();
  const services = listServices();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-charcoal-900 text-charcoal-200 md:block">
        <div className="flex items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${company.phone1.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-gold-400">
              <Phone className="h-3.5 w-3.5" /> {company.phone1}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-gold-400">
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-charcoal-400">{company.tagline}</span>
            <Link to="/careers" className="hover:text-gold-400">Careers</Link>
          </div>
        </div>
      </div>

      <div className={`bg-white transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="flex items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="shrink-0">
            <Logo textClassName="hidden min-[1280px]:block" />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex min-[1280px]:gap-1">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `${navLinkClass(isActive)} flex items-center gap-1`
                    }
                  >
                    {link.label} <ChevronDown className="h-3.5 w-3.5" />
                  </NavLink>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full w-72 rounded-lg border border-charcoal-100 bg-white p-2 shadow-xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-charcoal-700 hover:bg-brand-50 hover:text-brand-700"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-md border border-brand-600 px-3 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white min-[1400px]:flex"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link
              to="/quote"
              className="rounded-md bg-gold-400 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-charcoal-900 shadow transition hover:bg-gold-300"
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="rounded-md p-2 text-charcoal-800 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-charcoal-100 bg-white px-6 pb-6 pt-2 shadow-lg lg:hidden">
          <nav className="flex flex-col divide-y divide-charcoal-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 text-sm font-bold tracking-wide text-charcoal-800 transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/careers"
              className="py-3 text-sm font-bold tracking-wide text-charcoal-800 transition-colors hover:text-brand-700"
            >
              Careers
            </Link>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-brand-600 px-4 py-3 text-sm font-semibold text-brand-700"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <Link
              to="/quote"
              className="rounded-md bg-gold-400 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-charcoal-900"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
