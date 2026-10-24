import React from "react";
import siteConfig from "../site.config.json";
import { SectionLayout } from "./SectionLayout";

export const Services: React.FC = () => {
  const services = siteConfig.services;
  if (!services?.items?.length) return null;

  return (
    <SectionLayout
      id="services"
      title={services.title || "Our Services"}
      subtitle="Comprehensive clinical treatments and specialized care"
      bgAlt={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.items.map((svc, idx) => (
          <div
            key={svc.title || idx}
            className="bg-card rounded-[16px] card-shadow card-interactive p-6 border border-border flex flex-col justify-start text-left"
          >
            <h3 className="font-bold text-foreground text-lg mb-3">
              {svc.title}
            </h3>

            {svc.items && svc.items.length > 0 && (
              <ul className="space-y-2.5">
                {svc.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-base text-foreground leading-relaxed max-w-[65ch]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
