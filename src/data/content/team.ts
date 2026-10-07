import type { TeamMember } from "../types";
import { IMAGES } from "../images";

export const TEAM: TeamMember[] = [
  {
    id: "managing-director",
    name: "Alfred Erobu",
    title: "Managing Director",
    bio: "Leads the overall strategic direction of Tial Construction Ltd, overseeing business development, client relationships and company-wide delivery standards.",
    photo: IMAGES.managingDirector,
    qualifications: ["To confirm professional qualifications", "To confirm years of experience"],
  },
  {
    id: "general-secretary",
    name: "Philomine Aguti",
    title: "General Secretary",
    bio: "Coordinates company administration, records and day-to-day office operations, supporting the directors and the project teams.",
    photo: IMAGES.generalSecretary,
    qualifications: ["To confirm professional qualifications", "To confirm years of experience"],
  },
  {
    id: "project-manager",
    name: "Devis Byamukama",
    title: "Project Manager",
    bio: "Responsible for technical oversight of ongoing projects, coordinating site teams, consultants and subcontractors to maintain quality and schedule.",
    photo: IMAGES.projectManager,
    qualifications: ["To confirm professional qualifications", "To confirm registration/membership"],
  },
];
