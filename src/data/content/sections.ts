import type { ApproachStep, FeatureItem, SafetyPillar } from "../types";

export const ABOUT_TEASER_POINTS: string[] = [
  "Clear communication from first enquiry to final handover",
  "Disciplined site supervision and quality control",
  "Safety-first culture across every active site",
  "A growing portfolio of building, civil and road projects",
];

export const HOME_SAFETY_FEATURES: FeatureItem[] = [
  { icon: "hardhat", label: "PPE & site induction for every worker and visitor" },
  { icon: "shield", label: "Regular safety briefings and toolbox talks" },
  { icon: "check", label: "Structured quality control checkpoints" },
  { icon: "award", label: "Environmentally responsible site management" },
];

export const SAFETY_PILLARS: SafetyPillar[] = [
  {
    icon: "ppe",
    title: "Site Safety & PPE",
    text: "Mandatory personal protective equipment, site induction and clear access control for all workers and visitors.",
  },
  {
    icon: "risk",
    title: "Risk Management",
    text: "Regular site risk assessments and toolbox talks to identify and manage hazards before they become incidents.",
  },
  {
    icon: "quality",
    title: "Quality Control",
    text: "Structured inspection checkpoints at each stage of construction to confirm work meets specification.",
  },
  {
    icon: "environment",
    title: "Environmental Responsibility",
    text: "Responsible management of site waste, materials and surrounding environment throughout construction.",
  },
  {
    icon: "supervision",
    title: "Trained Supervision",
    text: "Experienced site supervisors overseeing day-to-day safety compliance and workmanship on every project.",
  },
  {
    icon: "incident",
    title: "Incident Reporting",
    text: "Clear procedures for reporting, recording and acting on safety observations and near-misses on site.",
  },
];

export const SUSTAINABILITY_POINTS: string[] = [
  "Responsible handling and disposal of construction waste",
  "Efficient use of materials to reduce unnecessary wastage",
  "Dust, noise and traffic management on active sites",
  "Consideration of durability and maintenance needs in construction choices",
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Understand & Plan",
    text: "We start by understanding the client's needs, site conditions and project goals before planning the works.",
  },
  {
    step: "02",
    title: "Mobilize & Build",
    text: "Our teams mobilize with the right supervision, safety procedures and quality checks in place.",
  },
  {
    step: "03",
    title: "Monitor & Communicate",
    text: "We track progress, manage risks and keep clients informed at every key stage of the works.",
  },
  {
    step: "04",
    title: "Deliver & Handover",
    text: "We complete final checks and deliver a quality handover that meets the agreed specification.",
  },
];
