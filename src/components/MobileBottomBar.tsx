import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import siteConfig from "../site.config.json";
import { cleanTel, scrollToSection } from "../lib/utils";

export const MobileBottomBar: React.FC = () => {
  const contact = siteConfig.contact;
  if (!contact) return null;

  const phoneLink = cleanTel(contact.phone);
  const whatsappNum = cleanTel(contact.whatsapp || contact.phone);

  const handleCall = () => {
    scrollToSection("contact");
  };

  return (
    <div
      role="toolbar"
      aria-label="Quick Actions"
      className="fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-md border-t border-border p-3 flex md:hidden items-center gap-3"
    >
      {/* Call Button */}
      <a
        href={phoneLink ? `tel:${phoneLink}` : "#contact"}
        onClick={handleCall}
        className="min-h-[44px] flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium text-base bg-primary text-primary-foreground btn-pill"
        aria-label="Call clinic"
      >
        <Phone size={18} strokeWidth={2} />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      {whatsappNum && (
        <a
          href={`https://wa.me/${whatsappNum}`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-medium text-base bg-emerald-600 text-white btn-pill"
          aria-label="Contact clinic on WhatsApp"
        >
          <MessageCircle size={18} strokeWidth={2} />
          <span>WhatsApp</span>
        </a>
      )}
    </div>
  );
};
