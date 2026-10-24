import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import siteConfig from "../site.config.json";
import { SectionLayout } from "./SectionLayout";

interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const hoursString =
    siteConfig.contact?.hours && siteConfig.contact.hours.length > 0
      ? siteConfig.contact.hours.join(" | ")
      : "Daily morning and evening consultation sessions.";

  const servicesString =
    siteConfig.services?.items && siteConfig.services.items.length > 0
      ? siteConfig.services.items.map((s) => s.title).join(", ")
      : "ENT treatments, gynecology, and general hospital consultations.";

  const faqs: FaqItem[] = [
    {
      q: `How do I book an appointment at ${siteConfig.businessName}?`,
      a: `You can schedule an appointment by messaging our team on WhatsApp or calling our front desk at ${siteConfig.contact.phone}. You can also use the Book Appointment section above.`,
    },
    {
      q: "What are the doctor consultation hours?",
      a: `Our current consultation hours are: ${hoursString}. Please feel free to confirm by calling before your visit.`,
    },
    {
      q: "What medical specialties and treatments are offered?",
      a: `We provide comprehensive specialized care including ${servicesString}. Our doctors specialize in ENT surgery and gynecology & maternity care.`,
    },
    {
      q: "Where is the clinic located?",
      a: `We are located at ${siteConfig.contact.address}. Directions are available in our Contact section via Google Maps.`,
    },
    {
      q: "Are walk-in consultations accepted?",
      a: "Yes, walk-ins are accepted during clinical consultation hours. However, scheduling in advance helps minimize waiting time for you and your family.",
    },
  ];

  return (
    <SectionLayout
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Helpful information about our doctors, clinic timings, and appointments"
      bgAlt={true}
    >
      <div className="space-y-4 text-left">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-card border border-border rounded-[16px] card-shadow overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left min-h-[44px] px-5 py-4 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-foreground text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className={`text-muted-foreground shrink-0 transition-transform duration-200 ease-out ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {/* Smooth open and close via CSS grid row transition */}
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-4 pt-1 border-t border-border/50 text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
};
