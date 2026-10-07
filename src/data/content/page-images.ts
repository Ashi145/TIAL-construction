import type { LayoutImages, PageImages } from "../types";
import { IMAGES } from "../images";

export const PAGE_IMAGES: PageImages = {
  home: {
    hero: IMAGES.heroCrane,
    about: IMAGES.workersDiscuss,
    valuesBackdrop: IMAGES.highRiseCloud,
    safety: IMAGES.helmetCloseup,
  },
  about: {
    hero: IMAGES.siteCranes,
    profile: IMAGES.workersSmiling,
    approach: IMAGES.engineersSite,
  },
  healthSafety: {
    hero: IMAGES.helmetCloseup,
    sustainability: IMAGES.workersDiscuss,
  },
  services: { hero: IMAGES.highRise },
  projects: { hero: IMAGES.apartmentBalconies },
  team: { hero: IMAGES.teamDiscussion },
  capacity: { hero: IMAGES.excavatorSand },
  credentials: { hero: IMAGES.blueprintReview },
  insights: { hero: IMAGES.aerialMarket },
  careers: { hero: IMAGES.shipyardWorkers },
  contact: { hero: IMAGES.roadMachinery },
  quote: { hero: IMAGES.highRiseCloud },
  privacy: { hero: IMAGES.blueprintReview },
  terms: { hero: IMAGES.concreteBuilding },
};

export const LAYOUT_IMAGES: LayoutImages = {
  logo: IMAGES.logo,
  ctaBackground: IMAGES.siteCranes,
};
