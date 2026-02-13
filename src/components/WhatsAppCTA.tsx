import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Habitek!%20I%27m%20interested%20in%20your%20interior%20design%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform duration-300">
          <MessageCircle size={26} className="text-white" fill="white" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </div>
    </a>
  );
}
