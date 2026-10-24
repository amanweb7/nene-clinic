import React from "react";
import siteConfig from "../site.config.json";
import { SectionLayout } from "./SectionLayout";

export const About: React.FC = () => {
  const about = siteConfig.about;
  const strengths = siteConfig.strengths;
  const testimonials = siteConfig.testimonials;

  if (!about?.items?.length && !strengths?.items?.length) return null;

  return (
    <SectionLayout
      id="about"
      title={about?.title || "Our Specialists"}
      subtitle="Dedicated healthcare professionals providing expert medical care in Vadodara"
    >
      {/* Doctors Grid - Single column on mobile, 2 columns on tablet/desktop */}
      {about?.items && about.items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {about.items.map((doc, idx) => (
            <div
              key={doc.name || idx}
              className="bg-card border border-border rounded-[16px] card-shadow card-interactive p-6 flex flex-col justify-between text-left"
            >
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {doc.name}
                </h3>
                {doc.role && (
                  <p className="text-base text-primary font-medium mb-3">
                    {doc.role}
                  </p>
                )}
                {doc.desc && (
                  <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                    {doc.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Strengths / Why Patients Trust Us */}
      {strengths?.items && strengths.items.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-bold text-foreground text-left mb-6">
            {strengths.title || "Why Patients Trust Us"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strengths.items.map((s, idx) => (
              <div
                key={s.title || idx}
                className="bg-card rounded-[16px] card-shadow card-interactive p-5 border border-border flex flex-col text-left"
              >
                <h4 className="font-semibold text-foreground text-base mb-2">
                  {s.title}
                </h4>
                {s.desc && (
                  <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                    {s.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonials & Badges - Zero Emoji */}
      {testimonials && (
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-bold text-foreground text-left mb-6">
            {testimonials.title || "Patient Reviews"}
          </h3>
          {testimonials.items && testimonials.items.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.items.map((review, i) => (
                <div
                  key={i}
                  className="bg-card rounded-[16px] card-shadow card-interactive p-6 border border-border flex flex-col justify-between text-left"
                >
                  <p className="text-base text-foreground leading-relaxed italic max-w-[65ch]">
                    "{review}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {testimonials.badges && testimonials.badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {testimonials.badges.map((badge, i) => {
                // Strip any emojis from badges
                const cleanBadge = badge
                  .replace(/[\u{1F300}-\u{1F9FF}]|⭐/gu, "")
                  .trim();
                return (
                  <span
                    key={i}
                    className="bg-card border border-border rounded-[10px] px-3.5 py-1.5 text-sm font-medium text-muted-foreground"
                  >
                    {cleanBadge}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}
    </SectionLayout>
  );
};
