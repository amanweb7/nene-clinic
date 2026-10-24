import React from "react";
import { Phone, MapPin } from "lucide-react";
import siteConfig from "../site.config.json";
import { scrollToSection } from "../lib/utils";

export const Hero: React.FC = () => {
  const hero = siteConfig.hero;
  if (!hero) return null;

  const mapsUrl = siteConfig.contact?.mapsUrl;

  return (
    <section
      id="hero"
      className="py-16 md:py-20 scroll-mt-16 md:scroll-mt-20 w-full bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-left hero-fade-in">
        {/* Rating text */}
        {hero.rating && (
          <div className="text-sm font-medium opacity-90 mb-3">
            {hero.rating} {hero.reviewCount ? `· ${hero.reviewCount}` : ""}
          </div>
        )}

        {/* Hero Title (h1) */}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4 max-w-[65ch]">
          {hero.title}
        </h1>

        {/* Hero Description - Left-aligned, < 70ch */}
        {hero.description && (
          <p className="text-base sm:text-lg opacity-90 mb-8 max-w-[65ch] leading-relaxed">
            {hero.description}
          </p>
        )}

        {/* Action Buttons - Fully rounded pill, min-h-[44px], subtle press & hover */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3">
          {/* Book Appointment CTA */}
          <button
            onClick={() => scrollToSection("book-appointment")}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-full font-medium text-base bg-primary-foreground text-primary btn-pill shadow-sm"
          >
            <span>Book Appointment</span>
          </button>

          {/* Call CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-full font-medium text-base border border-primary-foreground/30 text-primary-foreground btn-pill hover:bg-primary-foreground/10"
          >
            <Phone size={18} strokeWidth={2} />
            <span>Call Now</span>
          </button>

          {/* Directions CTA */}
          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-full font-medium text-base border border-primary-foreground/30 text-primary-foreground btn-pill hover:bg-primary-foreground/10"
            >
              <MapPin size={18} strokeWidth={2} />
              <span>Directions</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
