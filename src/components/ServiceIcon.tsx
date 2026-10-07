import { Building2, Layers3, PaintRoller, ClipboardList, Route } from "lucide-react";
import type { Service } from "../data/content";

export function ServiceIcon({ icon, className = "h-5 w-5" }: { icon: Service["icon"]; className?: string }) {
  switch (icon) {
    case "building":
      return <Building2 className={className} />;
    case "structure":
      return <Layers3 className={className} />;
    case "finish":
      return <PaintRoller className={className} />;
    case "management":
      return <ClipboardList className={className} />;
    case "road":
      return <Route className={className} />;
    default:
      return <Building2 className={className} />;
  }
}
