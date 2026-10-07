import type { NavLink } from "../types";
import { SERVICES } from "./services";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Capacity", to: "/capacity" },
  { label: "Credentials", to: "/credentials" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = SERVICES.map((service) => ({
  label: service.title,
  to: `/services/${service.slug}`,
}));
