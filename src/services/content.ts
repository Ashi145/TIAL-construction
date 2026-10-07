import {
  ABOUT_TEASER_POINTS,
  APPROACH_STEPS,
  COMPANY,
  CREDENTIALS,
  EQUIPMENT,
  EQUIPMENT_NOTE,
  FAQS,
  FOOTER_SERVICE_LINKS,
  HOME_SAFETY_FEATURES,
  INSIGHTS,
  LAYOUT_IMAGES,
  NAV_LINKS,
  OPEN_ROLES,
  PAGE_IMAGES,
  PROJECTS,
  SAFETY_PILLARS,
  SERVICES,
  SUSTAINABILITY_POINTS,
  STATS,
  TEAM,
  TESTIMONIALS,
  TESTIMONIAL_NOTE,
  VALUES,
} from "../data/content";
import type {
  ApproachStep,
  Company,
  Credential,
  Equipment,
  FAQ,
  FeatureItem,
  Insight,
  JobOpening,
  LayoutImages,
  NavLink,
  PageImageKey,
  PageImages,
  Project,
  SafetyPillar,
  Service,
  Stat,
  TeamMember,
  Testimonial,
  Value,
} from "../data/types";

export function getCompany(): Company {
  return COMPANY;
}

export function getValues(): Value[] {
  return VALUES;
}

export function getStats(): Stat[] {
  return STATS;
}

export function getNavLinks(): NavLink[] {
  return NAV_LINKS;
}

export function getFooterServiceLinks(): NavLink[] {
  return FOOTER_SERVICE_LINKS;
}

export function listServices(): Service[] {
  return SERVICES;
}

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function listProjects(): Project[] {
  return PROJECTS;
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function listFeaturedProjects(limit = 3): Project[] {
  return PROJECTS.filter((project) => project.featured).slice(0, limit);
}

export function listRelatedProjects(project: Project, limit = 3): Project[] {
  return PROJECTS.filter((candidate) => candidate.slug !== project.slug && candidate.category === project.category).slice(
    0,
    limit
  );
}

export function listTeamMembers(): TeamMember[] {
  return TEAM;
}

export function listEquipment(): Equipment[] {
  return EQUIPMENT;
}

export function getEquipmentNote(): string {
  return EQUIPMENT_NOTE;
}

export function listCredentials(): Credential[] {
  return CREDENTIALS;
}

export function listTestimonials(): Testimonial[] {
  return TESTIMONIALS;
}

export function getTestimonialNote(): string {
  return TESTIMONIAL_NOTE;
}

export function listInsights(): Insight[] {
  return INSIGHTS;
}

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((insight) => insight.slug === slug);
}

export function listFaqs(): FAQ[] {
  return FAQS;
}

export function listJobOpenings(): JobOpening[] {
  return OPEN_ROLES;
}

export function getSafetyPillars(): SafetyPillar[] {
  return SAFETY_PILLARS;
}

export function getSustainabilityPoints(): string[] {
  return SUSTAINABILITY_POINTS;
}

export function getHomeSafetyFeatures(): FeatureItem[] {
  return HOME_SAFETY_FEATURES;
}

export function getApproachSteps(): ApproachStep[] {
  return APPROACH_STEPS;
}

export function getAboutTeaserPoints(): string[] {
  return ABOUT_TEASER_POINTS;
}

export function getPageImages<K extends PageImageKey>(page: K): PageImages[K] {
  return PAGE_IMAGES[page];
}

export function getLayoutImages(): LayoutImages {
  return LAYOUT_IMAGES;
}
