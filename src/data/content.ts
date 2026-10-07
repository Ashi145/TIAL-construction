import { IMAGES } from "./images";

export const COMPANY = {
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
  values: ["Trust", "Integrity", "Accountability", "Leadership"],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  points: string[];
  process: string[];
  icon: "building" | "structure" | "finish" | "management" | "road";
};

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
    short:
      "Refurbishment and finishing works that improve function, appearance and durability.",
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
    short:
      "Coordination, supervision and construction consultancy within our professional scope.",
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
    short:
      "Road and infrastructure works delivered with focus on quality, durability and safety.",
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

export type Project = {
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Civil" | "Renovation" | "Roads" | "Infrastructure";
  status: "Completed" | "Ongoing";
  location: string;
  client: string;
  year: string;
  description: string;
  scope: string[];
  image: string;
  gallery: string[];
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "residential-area-development",
    title: "Residential Area Development",
    category: "Residential",
    status: "Ongoing",
    location: "Kampala, Uganda",
    client: "Private Developer",
    year: "2024 – Present",
    description:
      "Construction of a modern residential housing development progressing through structural works, façade finishing and site coordination. The project reflects our emphasis on quality residential construction and safe delivery in urban communities.",
    scope: [
      "Substructure and superstructure concrete works",
      "Blockwork and residential wall construction",
      "Facade and finishing coordination",
      "Site safety supervision",
    ],
    image: IMAGES.homepageBuilding,
    gallery: [IMAGES.homepageBuilding, IMAGES.building2, IMAGES.building5],
    featured: true,
  },
  {
    slug: "commercial-development",
    title: "Commercial Area Development",
    category: "Commercial",
    status: "Ongoing",
    location: "Kampala Metropolitan Area",
    client: "Confidential",
    year: "2023 – Present",
    description:
      "A commercial building development involving concrete frame construction, site logistics and phased delivery for a fast-moving business environment. The project is structured to meet high-traffic commercial use and operational efficiency standards.",
    scope: [
      "Reinforced concrete frame construction",
      "Commercial building envelope works",
      "Scaffolding and access management",
      "Coordination of trades and site logistics",
    ],
    image: IMAGES.building1,
    gallery: [IMAGES.building1, IMAGES.building4, IMAGES.building2],
    featured: true,
  },
  {
    slug: "commercial-office-finishing",
    title: "Commercial Office Finishing Works",
    category: "Commercial",
    status: "Completed",
    location: "Kampala, Uganda",
    client: "Corporate Client",
    year: "2023",
    description:
      "Full interior finishing and remodeling of a commercial office space, including partitioning, painting, ceiling works and fit-out coordination, delivered on a tight occupancy timeline.",
    scope: [
      "Interior partitioning and ceiling works",
      "Painting and wall finishes",
      "Fixtures, fittings and carpentry",
      "Snagging and quality handover",
    ],
    image: IMAGES.building4,
    gallery: [IMAGES.building4, IMAGES.interiorRoom, IMAGES.interiorPainting],
    featured: true,
  },
  {
    slug: "estate-access-road-rehabilitation",
    title: "Estate Access Road Rehabilitation",
    category: "Roads",
    status: "Completed",
    location: "Wakiso District, Uganda",
    client: "Private Estate",
    year: "2023",
    description:
      "Rehabilitation of estate access roads including base preparation, compaction, drainage improvement and surface works to improve all-weather accessibility for residents.",
    scope: [
      "Road base preparation and compaction",
      "Drainage and culvert installation",
      "Grading and surface works",
      "Site safety and traffic management",
    ],
    image: IMAGES.roadRoller,
    gallery: [IMAGES.roadRoller, IMAGES.roadMachinery, IMAGES.roadHeavyMachinery],
    featured: true,
  },
  {
    slug: "institutional-building-renovation",
    title: "Institutional Building Renovation",
    category: "Renovation",
    status: "Completed",
    location: "Central Region, Uganda",
    client: "Institutional Client",
    year: "2022",
    description:
      "Refurbishment of an institutional building including structural repairs, re-roofing elements, finishing works and general upgrade of facilities to improve durability and usability.",
    scope: [
      "Structural assessment and repair works",
      "Finishing and interior upgrade works",
      "Electrical and plumbing coordination",
      "Final inspection and handover",
    ],
    image: IMAGES.apartmentFacade,
    gallery: [IMAGES.apartmentFacade, IMAGES.apartmentBalconies, IMAGES.apartmentLowAngle],
    featured: false,
  },
  {
    slug: "civil-earthworks-drainage",
    title: "Civil Earthworks & Drainage Package",
    category: "Civil",
    status: "Completed",
    location: "Kampala, Uganda",
    client: "Private Developer",
    year: "2022",
    description:
      "Civil works package covering site earthworks, excavation and drainage installation ahead of building construction, carried out with close attention to site safety and ground conditions.",
    scope: [
      "Bulk and detailed excavation",
      "Drainage pipe and culvert installation",
      "Soil management and compaction",
      "Coordination with structural contractor",
    ],
    image: IMAGES.excavatorSite,
    gallery: [IMAGES.excavatorSite, IMAGES.excavatorSand, IMAGES.loader],
    featured: false,
  },
];

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  qualifications: string[];
};

export const TEAM: TeamMember[] = [
  {
    name: "[Name To Confirm]",
    title: "Managing Director",
    bio: "Leads the overall strategic direction of Tial Construction Ltd, overseeing business development, client relationships and company-wide delivery standards.",
    photo: IMAGES.manPortrait2,
    qualifications: ["To confirm professional qualifications", "To confirm years of experience"],
  },
  {
    name: "[Name To Confirm]",
    title: "Head of Projects / Site Engineer",
    bio: "Responsible for technical oversight of ongoing projects, coordinating site teams, consultants and subcontractors to maintain quality and schedule.",
    photo: IMAGES.manPortrait1,
    qualifications: ["To confirm professional qualifications", "To confirm registration/membership"],
  },
  {
    name: "[Name To Confirm]",
    title: "Quantity Surveyor",
    bio: "Manages cost planning, procurement and contract administration to keep projects within budget and aligned with client expectations.",
    photo: IMAGES.womanPortrait1,
    qualifications: ["To confirm professional qualifications", "To confirm registration/membership"],
  },
  {
    name: "[Name To Confirm]",
    title: "Health, Safety & Quality Officer",
    bio: "Oversees site safety compliance, quality control procedures and environmental practice across all active project sites.",
    photo: IMAGES.manPortrait3,
    qualifications: ["To confirm professional qualifications", "To confirm certifications"],
  },
];

export type Equipment = {
  name: string;
  category: string;
  description: string;
  image: string;
};

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

export type Credential = {
  name: string;
  issuer: string;
  note: string;
};

export const CREDENTIALS: Credential[] = [
  {
    name: "Certificate of Incorporation",
    issuer: "Uganda Registration Services Bureau (URSB)",
    note: "To confirm registration number before publication.",
  },
  {
    name: "Trading Licence",
    issuer: "Local Municipal / City Authority",
    note: "To confirm licence number and validity before publication.",
  },
  {
    name: "Tax Identification (TIN) Compliance",
    issuer: "Uganda Revenue Authority (URA)",
    note: "To confirm tax compliance certificate details before publication.",
  },
  {
    name: "NSSF Compliance",
    issuer: "National Social Security Fund (NSSF)",
    note: "To confirm compliance certificate before publication.",
  },
  {
    name: "Professional / Contractor Registration",
    issuer: "Relevant works/contractor registration body",
    note: "To confirm registration category and grading before publication.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  permission: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Private Client",
    role: "Residential Project Owner",
    quote:
      "Tial Construction managed our home project with clear communication from start to finish. We always knew what stage the work was at and what to expect next.",
    permission: false,
  },
  {
    name: "Corporate Client",
    role: "Office Fit-Out Project",
    quote:
      "The team delivered our office finishing works on schedule and kept the site clean and organised throughout. Professional from day one.",
    permission: false,
  },
  {
    name: "Developer Partner",
    role: "Apartment Development",
    quote:
      "Reliable site supervision and a construction team that takes safety and quality seriously. We have been glad to work with Tial on this development.",
    permission: false,
  },
];

export const TESTIMONIAL_NOTE =
  "Client names shown are illustrative placeholders. Actual client testimonials will be published only with written permission, per Tial's content and legal guidelines.";

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  cover: string;
  excerpt: string;
  body: string[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "choosing-the-right-contractor-in-uganda",
    title: "Choosing the Right Construction Contractor in Uganda",
    category: "Client Guidance",
    date: "2025-03-10",
    author: "Tial Construction Team",
    cover: IMAGES.engineersSite,
    excerpt:
      "What private clients, developers and institutions should check before awarding a construction contract.",
    body: [
      "Selecting the right contractor is one of the most important decisions in any construction project. Beyond price, clients should assess a contractor's track record, technical capacity, safety culture and ability to communicate clearly throughout the build.",
      "At Tial Construction, we encourage prospective clients to review completed and ongoing projects, ask about site supervision structures, and confirm how a contractor manages quality control and safety on site before signing a contract.",
      "A transparent scope of work, realistic timelines and clear payment milestones also protect both the client and the contractor, reducing the risk of disputes during the build.",
    ],
  },
  {
    slug: "site-safety-best-practices",
    title: "Site Safety: Best Practices on Every Tial Project",
    category: "Health & Safety",
    date: "2025-01-22",
    author: "Tial Construction Team",
    cover: IMAGES.helmetCloseup,
    excerpt: "An overview of the safety culture we apply across every active construction site.",
    body: [
      "Safety is a non-negotiable part of how we deliver projects. Every Tial site operates with clear induction procedures, personal protective equipment requirements and regular safety briefings for all workers and visitors.",
      "We believe a safe site is also a more efficient and higher-quality site, which is why safety considerations are built into our planning from day one rather than treated as an afterthought.",
    ],
  },
  {
    slug: "stages-of-a-building-project",
    title: "Understanding the Stages of a Building Project",
    category: "Construction Insights",
    date: "2024-11-05",
    author: "Tial Construction Team",
    cover: IMAGES.blueprintReview,
    excerpt:
      "A simple breakdown of what happens from groundbreaking to handover on a typical building project.",
    body: [
      "Most building projects move through distinct stages: site preparation, substructure, superstructure, roofing, finishing and handover. Each stage requires different trades, inspections and quality checks.",
      "Understanding these stages helps clients plan their budgets, anticipate timelines and know what questions to ask their contractor at each point in the build.",
    ],
  },
];

export const STATS = [
  { label: "Core Service Lines", value: "5" },
  { label: "Core Company Values", value: "4" },
  { label: "Project Categories Delivered", value: "5+" },
  { label: "Commitment to Safety", value: "100%" },
];

export const NAV_LINKS = [
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

export const FOOTER_SERVICE_LINKS = SERVICES.map((s) => ({ label: s.title, to: `/services/${s.slug}` }));
