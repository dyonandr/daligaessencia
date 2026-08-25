import { MessageCircle } from "lucide-react";
import { WA } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WA.home}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ink text-gold shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={24} />
    </a>
  );
}
