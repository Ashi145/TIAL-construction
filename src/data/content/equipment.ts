import type { Equipment } from "../types";
import { IMAGES } from "../images";

export const EQUIPMENT: Equipment[] = [
  {
    name: "Excavators",
    category: "Earthworks",
    description: "Used for excavation, trenching and bulk earthworks on civil and building sites.",
    image: IMAGES.excavatorSite,
  },
  {
    name: "Wheel Loaders",
    category: "Earthworks & Materials Handling",
    description: "Deployed for material handling, loading and site clearance activities.",
    image: IMAGES.loader,
  },
  {
    name: "Compactors / Rollers",
    category: "Roadworks",
    description: "Used for sub-base and surface compaction on road and pavement works.",
    image: IMAGES.roadRoller,
  },
  {
    name: "Concrete Mixing & Handling Equipment",
    category: "Structural Works",
    description: "Supports consistent, quality-controlled concrete production and placement on site.",
    image: IMAGES.excavatorSand,
  },
  {
    name: "Scaffolding & Access Systems",
    category: "Building Works",
    description: "Provides safe working access for building construction, finishing and facade works.",
    image: IMAGES.heroCrane,
  },
  {
    name: "Site Support Vehicles & Tools",
    category: "General",
    description: "Supporting vehicles, power tools and site equipment for day-to-day construction activity.",
    image: IMAGES.roadMachinery,
  },
];

export const EQUIPMENT_NOTE =
  "Equipment listed reflects categories of plant and machinery used or accessed by Tial Construction Ltd through ownership, hire or sub-contracted partners. Exact fleet details, quantities and specifications should be confirmed and substantiated by Tial before publication.";
