import type { Company, Stat, Value } from "../types";

export const COMPANY: Company = {
  name: "Tial Construction Ltd",
  tagline: "Building on Trust, Leading with Integrity.",
  shortName: "Tial Construction",
  phone1: "+256 759 965 087",
  phone2: "+256 759 965 087",
  whatsapp: "256759965087",
  email: "tialconstructionlimited@gmail.com",
  tenderEmail: "tenders@tialconstruction.com",
  address: "Haruna Towers, Kubiri, Bombo Road, Kampala, Uganda",
  poBox: "P.O. Box 0000, Kampala, Uganda",
  hours: "Mon – Fri: 8:00am – 5:30pm | Sat: 9:00am – 1:00pm",
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    tiktok: "https://www.tiktok.com/@tialconstruction",
  },
  mission:
    "To design, build, and deliver sustainable construction projects that meet client needs while upholding high standards of professionalism, safety and innovation.",
  vision:
    "To be a leading construction company in Uganda and the region, recognized for trust, quality and long-lasting impact.",
};

export const VALUES: Value[] = [
  {
    name: "Trust",
    description: "We build confidence through reliable service, honest communication and consistent delivery.",
  },
  {
    name: "Integrity",
    description: "We value honesty, transparency and professional conduct in every client and site relationship.",
  },
  {
    name: "Accountability",
    description: "We take responsibility for every stage of project delivery, from planning through to handover.",
  },
  {
    name: "Leadership",
    description: "We seek better ways to deliver quality construction solutions for our clients and communities.",
  },
];

export const STATS: Stat[] = [
  { label: "Core Service Lines", value: "5" },
  { label: "Core Company Values", value: "4" },
  { label: "Project Categories Delivered", value: "5+" },
  { label: "Commitment to Safety", value: "100%" },
];
