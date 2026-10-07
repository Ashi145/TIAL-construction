import logoImage from "../../TIAL LOGO-W.png";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
};

export default function Logo({ variant = "dark", className = "", showText = true }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-charcoal-900";
  const subTextColor = variant === "light" ? "text-brand-200" : "text-brand-600";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoImage}
        alt="Tial Construction Logo"
        className="h-10 w-auto shrink-0 object-contain"
      />
      {showText && (
        <div className="leading-tight">
          <div className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
            TIAL <span className="text-gold-500">CONSTRUCTION</span>
          </div>
          <div className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${subTextColor}`}>
            Limited
          </div>
        </div>
      )}
    </div>
  );
}
