export type ResponsiveImage = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  source?: string;
};

export type NavLink = { label: string; to: string };

export type Stat = { label: string; value: string };

export type ValueName = "Trust" | "Integrity" | "Accountability" | "Leadership";

export type Value = { name: ValueName; description: string };

export type Company = {
  name: string;
  tagline: string;
  shortName: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
  tenderEmail: string;
  address: string;
  poBox: string;
  hours: string;
  social: {
    facebook: string;
    linkedin: string;
    instagram: string;
    twitter: string;
    tiktok: string;
  };
  mission: string;
  vision: string;
};

export type ServiceIconName = "building" | "structure" | "finish" | "management" | "road";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: ResponsiveImage;
  points: string[];
  process: string[];
  icon: ServiceIconName;
};

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Civil"
  | "Renovation"
  | "Roads"
  | "Infrastructure";

export type ProjectStatus = "Completed" | "Ongoing";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  client: string;
  year: string;
  description: string;
  scope: string[];
  image: ResponsiveImage;
  gallery: ResponsiveImage[];
  featured: boolean;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: ResponsiveImage;
  qualifications: string[];
};

export type Equipment = {
  name: string;
  category: string;
  description: string;
  image: ResponsiveImage;
};

export type Credential = {
  name: string;
  issuer: string;
  note: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  permission: boolean;
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  cover: ResponsiveImage;
  excerpt: string;
  body: string[];
};

export type FAQ = { question: string; answer: string };

export type JobOpening = { title: string; type: string; location: string };

export type SafetyPillarIcon = "ppe" | "risk" | "quality" | "environment" | "supervision" | "incident";

export type SafetyPillar = { icon: SafetyPillarIcon; title: string; text: string };

export type FeatureIcon = "hardhat" | "shield" | "check" | "award";

export type FeatureItem = { icon: FeatureIcon; label: string };

export type ApproachStep = { step: string; title: string; text: string };

type SimplePageImages = { hero: ResponsiveImage };

export type PageImages = {
  home: {
    hero: ResponsiveImage;
    about: ResponsiveImage;
    valuesBackdrop: ResponsiveImage;
    safety: ResponsiveImage;
  };
  about: { hero: ResponsiveImage; profile: ResponsiveImage; approach: ResponsiveImage };
  healthSafety: { hero: ResponsiveImage; sustainability: ResponsiveImage };
  services: SimplePageImages;
  projects: SimplePageImages;
  team: SimplePageImages;
  capacity: SimplePageImages;
  credentials: SimplePageImages;
  insights: SimplePageImages;
  careers: SimplePageImages;
  contact: SimplePageImages;
  quote: SimplePageImages;
  privacy: SimplePageImages;
  terms: SimplePageImages;
};

export type PageImageKey = keyof PageImages;

export type LayoutImages = {
  logo: ResponsiveImage;
  ctaBackground: ResponsiveImage;
};
