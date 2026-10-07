import type { Service } from "../types";
import { IMAGES } from "../images";

export const SERVICES: Service[] = [
  {
    slug: "general-building-construction",
    title: "General Building Construction",
    short:
      "Residential, commercial and institutional buildings delivered from groundbreaking to handover.",
    description:
      "We undertake the construction of residential, commercial and institutional buildings, managing every phase from project preparation and substructure works through to superstructure, finishes and final handover. Our teams coordinate closely with clients, consultants and suppliers to deliver buildings that are structurally sound, functional and built to specification, subject to the company's actual scope and capacity on each engagement.",
    image: IMAGES.highRise,
    points: [
      "Residential houses, apartments and gated communities",
      "Commercial and office building construction",
      "Institutional buildings (schools, clinics, worship centres)",
      "Site preparation, setting-out and groundworks",
      "Supervision from foundation to finishing and handover",
    ],
    process: [
      "Initial site assessment and project planning",
      "Structured scheduling, procurement, and site mobilisation",
      "Execution from foundation to finishing with quality checks at every stage",
    ],
    icon: "building",
  },
  {
    slug: "civil-and-structural-works",
    title: "Civil and Structural Works",
    short:
      "Engineering-led civil and structural works delivered with strict attention to quality and safety.",
    description:
      "Our civil and structural works are delivered with careful attention to engineering requirements, workmanship, quality control and site safety. From reinforced concrete structures to drainage, retaining structures and earthworks, we apply disciplined site supervision and sound construction practice on every project we undertake.",
    image: IMAGES.concreteBuilding,
    points: [
      "Reinforced concrete structural works",
      "Foundations, slabs, columns and beams",
      "Drainage, culverts and retaining structures",
      "Site earthworks and excavation",
      "Quality control and structural supervision",
    ],
    process: [
      "Engineering review of structural demands and ground conditions",
      "Safe excavation, reinforcement, formwork, and concrete placement",
      "Inspection, testing, and final structural verification before handover",
    ],
    icon: "structure",
  },
  {
    slug: "renovations-and-finishing",
    title: "Renovations and Finishing",
    short: "Refurbishment and finishing works that improve function, appearance and durability.",
    description:
      "We carry out renovation, refurbishment and finishing works aimed at improving the functionality, appearance and durability of existing spaces. Whether upgrading an aging building or completing high-quality interior and exterior finishes on a new structure, our teams are detail-oriented and committed to a clean, professional handover.",
    image: IMAGES.interiorPainting,
    points: [
      "Building renovation and refurbishment",
      "Interior and exterior finishing works",
      "Painting, tiling, ceilings and carpentry finishes",
      "Remodeling of existing commercial and residential spaces",
      "Snag-free, quality-checked handover",
    ],
    process: [
      "Inspection of existing structure and scope review",
      "Preparation, repair, and finishing works to meet design intent",
      "Final snagging and clean handover for functional, polished spaces",
    ],
    icon: "finish",
  },
  {
    slug: "project-management-and-consultancy",
    title: "Project Management and Consultancy",
    short: "Coordination, supervision and construction consultancy within our professional scope.",
    description:
      "We provide project coordination, supervision, planning and construction-related consultancy services within Tial's professional scope. This includes working alongside clients, architects and engineers to help plan, sequence and supervise construction activity so that projects progress safely, efficiently and in line with agreed specifications.",
    image: IMAGES.blueprintReview,
    points: [
      "Construction project planning and scheduling",
      "Site supervision and progress monitoring",
      "Contractor and subcontractor coordination",
      "Cost and quality monitoring support",
      "Construction consultancy for clients and partners",
    ],
    process: [
      "Understanding project objectives, timelines, and client expectations",
      "Coordinating consultants, subcontractors, and site progress reporting",
      "Monitoring quality, programme, and risk to keep delivery on track",
    ],
    icon: "management",
  },
  {
    slug: "roadworks-and-infrastructure-development",
    title: "Roadworks and Infrastructure Development",
    short: "Road and infrastructure works delivered with focus on quality, durability and safety.",
    description:
      "Tial delivers road and infrastructure works with a focus on quality, durability, safety and appropriate construction practices. Our approach to roadworks and related infrastructure follows sound engineering principles and responsible site management, scaled to the requirements of each project.",
    image: IMAGES.roadWorkCrew,
    points: [
      "Access road construction and rehabilitation",
      "Road base preparation and drainage works",
      "Culverts and small infrastructure installations",
      "Site access and estate road networks",
      "Infrastructure works in support of building projects",
    ],
    process: [
      "Surveying, planning, and ground preparation for safe access",
      "Road base formation, drainage, and structural layer works",
      "Compaction, finishing, and inspection for durable long-term performance",
    ],
    icon: "road",
  },
];
