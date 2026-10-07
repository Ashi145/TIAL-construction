type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
          {align === "center" ? null : <span className="h-px w-8 bg-gold-500" />}
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-charcoal-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-charcoal-100" : "text-charcoal-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
