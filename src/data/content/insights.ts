import type { Insight } from "../types";
import { IMAGES } from "../images";

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
