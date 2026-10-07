import { MessageCircle } from "lucide-react";
import { getCompany } from "../services/content";

export default function WhatsAppButton() {
  const company = getCompany();

  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        "Hello Tial Construction, I would like to enquire about a project."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tial Construction on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
