import React from "react";
import siteConfig from "../site.config.json";
import { cleanTel } from "../lib/utils";

export const Footer: React.FC = () => {
  const contact = siteConfig.contact;
  const phoneLink = cleanTel(contact?.phone);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-border py-12 md:py-16 bg-card text-foreground w-full"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-left space-y-3">
        <h3 className="font-bold text-foreground text-lg">
          {siteConfig.businessName}
        </h3>

        {contact?.address && (
          <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
            {contact.address}
          </p>
        )}

        {contact?.phone && (
          <p className="text-base text-muted-foreground">
            Phone:{" "}
            <a
              href={`tel:${phoneLink}`}
              className="text-primary hover:underline"
              aria-label={`Call ${contact.phone}`}
            >
              {contact.phone}
            </a>
          </p>
        )}

        <div className="pt-4 border-t border-border/60">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
