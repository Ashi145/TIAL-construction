import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-charcoal-100 rounded-xl border border-charcoal-100 bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-charcoal-900">{item.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && <div className="px-5 pb-5 text-sm leading-relaxed text-charcoal-600">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
