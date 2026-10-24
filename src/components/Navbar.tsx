import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import siteConfig from "../site.config.json";
import { scrollToSection } from "../lib/utils";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Book Appointment", id: "book-appointment" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      id="navbar"
      className={`sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-left py-1 text-foreground focus:outline-none min-h-[44px] flex flex-col justify-center rounded-full"
          aria-label={`${siteConfig.businessName} - Home`}
        >
          <span className="font-bold text-base sm:text-lg leading-tight line-clamp-1">
            {siteConfig.businessName}
          </span>
          {siteConfig.tagline && (
            <span className="text-xs text-muted-foreground line-clamp-1">
              {siteConfig.tagline}
            </span>
          )}
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1 text-base text-muted-foreground"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="min-h-[44px] px-3.5 rounded-full hover:text-primary hover:bg-muted/50 transition-colors font-medium flex items-center"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Quick Call Button (Desktop) */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-5 py-2 rounded-full border border-border text-foreground hover:bg-muted/50 transition-all duration-150 ease-out hover:brightness-95 active:scale-[0.98] text-base font-medium"
            aria-label="Call clinic"
          >
            <Phone size={18} strokeWidth={2} className="text-primary" />
            <span>Call</span>
          </button>

          {/* Quick Book Button (Desktop) */}
          <button
            onClick={() => handleNavClick("book-appointment")}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-full bg-primary text-primary-foreground transition-all duration-150 ease-out hover:brightness-95 active:scale-[0.98] text-base font-medium"
            aria-label="Book appointment"
          >
            <span>Book</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-full text-foreground hover:bg-muted/50 transition-all duration-150 ease-out active:scale-[0.98] flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left min-h-[44px] px-4 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-full transition-colors flex items-center"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick("book-appointment")}
              className="w-full inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-150 ease-out hover:brightness-95 active:scale-[0.98]"
            >
              <span>Book Appointment</span>
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full border border-border text-foreground font-medium text-base hover:bg-muted transition-all duration-150 ease-out hover:brightness-95 active:scale-[0.98]"
            >
              <Phone size={18} strokeWidth={2} className="text-primary" />
              <span>Contact Clinic</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
