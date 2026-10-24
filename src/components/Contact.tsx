import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import siteConfig from "../site.config.json";
import { SectionLayout } from "./SectionLayout";
import { cleanTel } from "../lib/utils";

export const Contact: React.FC = () => {
  const contact = siteConfig.contact;
  if (!contact) return null;

  const phoneLink = cleanTel(contact.phone);
  const hours = Array.isArray(contact.hours)
    ? contact.hours
    : contact.hours
    ? [contact.hours]
    : [];

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    contact.address || siteConfig.businessName
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <SectionLayout
      id="contact"
      title="Visit & Contact Us"
      subtitle="Find our clinic location or reach out directly for consultation assistance"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Contact Info Card */}
        <div className="bg-card border border-border rounded-[16px] card-shadow p-6 space-y-6">
          {/* Address */}
          {contact.address && (
            <div className="flex items-start gap-3">
              <MapPin size={18} strokeWidth={2} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">
                  Clinic Address
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                  {contact.address}
                </p>
              </div>
            </div>
          )}

          {/* Phone */}
          {contact.phone && (
            <div className="flex items-start gap-3">
              <Phone size={18} strokeWidth={2} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">
                  Direct Telephone
                </h3>
                <a
                  href={`tel:${phoneLink}`}
                  className="min-h-[44px] inline-flex items-center text-base text-primary font-medium hover:underline"
                  aria-label={`Call ${contact.phone}`}
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          )}

          {/* Hours */}
          {hours.length > 0 && (
            <div className="flex items-start gap-3">
              <Clock size={18} strokeWidth={2} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">
                  Doctor Consultation Hours
                </h3>
                <div className="space-y-1 mt-1">
                  {hours.map((h, i) => (
                    <p key={i} className="text-base text-muted-foreground max-w-[65ch]">
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile "Open in Google Maps" Button (below 768px only) */}
          {contact.mapsUrl && (
            <div className="pt-2 md:hidden">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full font-medium text-base bg-primary text-primary-foreground btn-pill"
              >
                <MapPin size={18} strokeWidth={2} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          )}
        </div>

        {/* Embedded Map: Desktop Only (>= 768px) */}
        <div className="hidden md:block bg-card border border-border rounded-[16px] card-shadow overflow-hidden h-[360px] w-full">
          <iframe
            title="Clinic Location Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </SectionLayout>
  );
};
