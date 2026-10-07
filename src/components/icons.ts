import {
  AlertTriangle,
  Award,
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  Leaf,
  ShieldCheck,
  Users,
  Users2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FeatureIcon, SafetyPillarIcon, ValueName } from "../data/types";

export const VALUE_ICONS = {
  Trust: ShieldCheck,
  Integrity: Award,
  Accountability: CheckCircle2,
  Leadership: Users,
} satisfies Record<ValueName, LucideIcon>;

export const SAFETY_PILLAR_ICONS = {
  ppe: HardHat,
  risk: ShieldCheck,
  quality: ClipboardCheck,
  environment: Leaf,
  supervision: Users2,
  incident: AlertTriangle,
} satisfies Record<SafetyPillarIcon, LucideIcon>;

export const FEATURE_ICONS = {
  hardhat: HardHat,
  shield: ShieldCheck,
  check: CheckCircle2,
  award: Award,
} satisfies Record<FeatureIcon, LucideIcon>;
