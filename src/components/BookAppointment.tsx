import React from "react";
import { MessageCircle, Phone, Clock } from "lucide-react";
import siteConfig from "../site.config.json";
import { SectionLayout } from "./SectionLayout";
import { cleanTel } from "../lib/utils";

export const BookAppointment: React.FC = () => {
  const contact = siteConfig.contact;
  if (!contact) return null;

  const phoneLink = cleanTel(contact.phone);
  const whatsappNum = cleanTel(contact.whatsapp || contact.phone);
  const hours = Array.isArray(contact.hours)
    ? contact.hours
    : contact.hours
    ? [contact.hours]
    : [];

  const appointmentMessage = encodeURIComponent(
    `Hello, I would like to schedule an appointment at ${siteConfig.businessName}.`
  );

  return (
    <SectionLayout
      id="book-appointment"
      title="Book an Appointment"
      subtitle="Schedule a consultation with our specialists quickly via WhatsApp or phone"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* WhatsApp Booking Card */}
        <div className="bg-card border border-border rounded-[16px] card-shadow card-interactive p-6 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <MessageCircle size={18} strokeWidth={2} className="text-emerald-600" />
              <h3 className="font-bold text-foreground text-lg">
                WhatsApp Booking
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
              Connect directly with our reception on WhatsApp for rapid scheduling and queries.
            </p>
          </div>
          {whatsappNum ? (
            <a
              href={`https://wa.me/${whatsappNum}?text=${appointmentMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full font-medium text-base bg-emerald-600 text-white btn-pill shadow-sm"
              aria-label="Book appointment via WhatsApp"
            >
              <MessageCircle size={18} strokeWidth={2} />
              <span>Book via WhatsApp</span>
            </a>
          ) : (
            <span className="text-base text-muted-foreground">Available by phone</span>
          )}
        </div>

        {/* Direct Call Card */}
        <div className="bg-card border border-border rounded-[16px] card-shadow card-interactive p-6 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Phone size={18} strokeWidth={2} className="text-primary" />
              <h3 className="font-bold text-foreground text-lg">
                Direct Phone Call
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
              Call our clinic front desk during working hours to speak with our staff.
            </p>
          </div>
          {phoneLink ? (
            <a
              href={`tel:${phoneLink}`}
              className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full font-medium text-base bg-primary text-primary-foreground btn-pill shadow-sm"
              aria-label={`Call ${contact.phone}`}
            >
              <Phone size={18} strokeWidth={2} />
              <span>Call {contact.phone}</span>
            </a>
          ) : (
            <span className="text-base text-muted-foreground">Phone unavailable</span>
          )}
        </div>

        {/* Consultation Timings Card */}
        <div className="bg-card border border-border rounded-[16px] card-shadow card-interactive p-6 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Clock size={18} strokeWidth={2} className="text-primary" />
              <h3 className="font-bold text-foreground text-lg">
                Consultation Hours
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-[65ch]">
              Regular doctor consultation shifts:
            </p>
            {hours.length > 0 ? (
              <ul className="space-y-2 mb-4">
                {hours.map((h, i) => (
                  <li
                    key={i}
                    className="text-base text-foreground font-medium bg-muted/40 rounded-[10px] p-2.5 border border-border max-w-[65ch]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base text-muted-foreground mb-4 max-w-[65ch]">
                Please call for daily doctor schedules.
              </p>
            )}
          </div>
          <p className="text-sm text-muted-foreground pt-1">
            Walk-ins and appointments welcome
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};
