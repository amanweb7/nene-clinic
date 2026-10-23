import { useState, useEffect } from "react";
import { Phone, MapPin, Star, Clock, Menu, X, MessageCircle } from "lucide-react";
import siteConfig from "../site.config.json";
import { applyTheme } from "../lib/colors";
import { DynamicIcon } from "../components/DynamicIcon";

function cleanTel(phone?: string): string {
  if (!phone) return "";
  return phone.replace(/[^\d+]/g, "");
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks: { id: string; label: string }[] = [];
  if (siteConfig.about?.items?.length) navLinks.push({ id: "doctors", label: "doctors" });
  if (siteConfig.services?.items?.length) navLinks.push({ id: "services", label: "services" });
  if (siteConfig.testimonials?.items?.length) navLinks.push({ id: "reviews", label: "reviews" });
  if (siteConfig.contact) navLinks.push({ id: "contact", label: "contact" });

  const phoneLink = cleanTel(siteConfig.contact?.phone);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="container flex items-center justify-between py-3 px-4 md:px-8">
        <div>
          <h1 className="text-base md:text-lg font-semibold font-heading text-foreground">
            {siteConfig.businessName}
          </h1>
          {siteConfig.tagline && (
            <p className="text-[11px] text-muted-foreground">{siteConfig.tagline}</p>
          )}
        </div>
        {navLinks.length > 0 && (
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-primary transition-colors capitalize"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-2">
          {phoneLink && (
            <a
              href={`tel:${phoneLink}`}
              className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs md:text-sm text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Phone size={13} />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          )}
          {navLinks.length > 0 && (
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>
      {open && navLinks.length > 0 && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1 animate-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-2 px-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md capitalize transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  const hero = siteConfig.hero;
  if (!hero) return null;

  const phoneLink = cleanTel(siteConfig.contact?.phone);
  const whatsappNum = cleanTel(siteConfig.contact?.whatsapp || siteConfig.contact?.phone);
  const mapsUrl = siteConfig.contact?.mapsUrl;

  const ratingNum = typeof hero.rating === "number" ? hero.rating : parseFloat(hero.rating || "0");
  const starCount = Math.min(5, Math.max(0, Math.floor(ratingNum)));
  const hasHalf = ratingNum - starCount >= 0.25;

  return (
    <section className="bg-primary text-primary-foreground py-14 md:py-28">
      <div className="container text-center max-w-3xl px-5">
        {hero.rating && (
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(starCount)].map((_, i) => (
              <Star key={i} size={14} className="fill-current" />
            ))}
            {hasHalf && <Star size={14} className="fill-current opacity-50" />}
            {hero.reviewCount && (
              <span className="text-xs ml-1.5 opacity-80">
                {hero.rating} · {hero.reviewCount}
              </span>
            )}
          </div>
        )}
        <h2 className="text-2xl md:text-5xl font-heading font-bold leading-tight mb-4">
          {hero.title}
        </h2>
        {hero.description && (
          <p className="text-sm md:text-lg opacity-85 mb-7 max-w-xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
          {whatsappNum ? (
            <a
              href={`https://wa.me/${whatsappNum}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-foreground text-primary px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-1.5"
            >
              <MessageCircle size={14} />
              Book Appointment
            </a>
          ) : phoneLink ? (
            <a
              href={`tel:${phoneLink}`}
              className="rounded-md bg-primary-foreground text-primary px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity text-center"
            >
              Book Appointment
            </a>
          ) : null}
          {phoneLink && (
            <a
              href={`tel:${phoneLink}`}
              className="rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium hover:bg-primary-foreground/10 transition-colors text-center"
            >
              <Phone size={14} className="inline mr-1.5" />
              Call Now
            </a>
          )}
          {mapsUrl && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium hover:bg-primary-foreground/10 transition-colors text-center"
            >
              <MapPin size={14} className="inline mr-1.5" />
              Directions
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

const DoctorsSection = () => {
  const about = siteConfig.about;
  if (!about?.items?.length) return null;

  return (
    <section id="doctors" className="py-12 md:py-24">
      <div className="container max-w-3xl px-5">
        <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
          {about.title || "Our Specialists"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {about.items.map((doc, idx) => (
            <div key={doc.name || idx} className="bg-card border border-border rounded-lg p-5 md:p-6">
              <DynamicIcon name={doc.icon} size={24} className="text-primary mb-2.5" />
              <h4 className="font-heading font-bold text-foreground text-base md:text-lg mb-0.5">
                {doc.name}
              </h4>
              {doc.role && (
                <p className="text-xs md:text-sm text-primary font-medium mb-2.5">{doc.role}</p>
              )}
              {doc.desc && (
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{doc.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrengthsSection = () => {
  const strengths = siteConfig.strengths;
  if (!strengths?.items?.length) return null;

  return (
    <section className="py-12 md:py-24 bg-section-alt">
      <div className="container max-w-4xl px-5">
        <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
          {strengths.title || "Why Patients Trust Us"}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {strengths.items.map((s, idx) => (
            <div key={s.title || idx} className="bg-card rounded-lg p-4 md:p-6 border border-border">
              {s.icon && (
                <span className="text-xl md:text-2xl mb-2 block">
                  {s.icon.length <= 4 ? s.icon : <DynamicIcon name={s.icon} size={24} className="text-primary" />}
                </span>
              )}
              <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1">
                {s.title}
              </h4>
              {s.desc && (
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = siteConfig.services;
  if (!services?.items?.length) return null;

  return (
    <section id="services" className="py-12 md:py-24">
      <div className="container max-w-4xl px-5">
        <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
          {services.title || "Our Services"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.items.map((svc, idx) => (
            <div key={svc.title || idx}>
              <div className="flex items-center gap-2 mb-3">
                <DynamicIcon name={svc.icon} size={18} className="text-primary" />
                <h4 className="font-heading font-bold text-foreground text-sm md:text-base">
                  {svc.title}
                </h4>
              </div>
              {svc.items && svc.items.length > 0 && (
                <div className="space-y-2">
                  {svc.items.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = siteConfig.testimonials;
  const items = testimonials?.items || [];
  const badges = testimonials?.badges || [];
  if (!items.length && !badges.length) return null;

  return (
    <section id="reviews" className="py-12 md:py-24 bg-section-alt">
      <div className="container max-w-4xl px-5">
        <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
          {testimonials?.title || "Patient Reviews"}
        </h3>
        {items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {items.map((t, i) => (
              <div key={i} className="bg-card rounded-lg p-5 md:p-6 border border-border">
                <div className="flex gap-0.5 mb-2.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-foreground leading-relaxed italic">"{t}"</p>
              </div>
            ))}
          </div>
        )}
        {badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-8 text-xs md:text-sm text-muted-foreground">
            {badges.map((s, i) => (
              <span key={i} className="bg-card border border-border rounded-full px-3 py-1">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contact = siteConfig.contact;
  if (!contact) return null;

  const phoneLink = cleanTel(contact.phone);
  const hours = Array.isArray(contact.hours) ? contact.hours : contact.hours ? [contact.hours] : [];

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container max-w-3xl px-5">
        <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-6 text-center">
          Visit Us
        </h3>
        <div className="bg-card border border-border rounded-lg p-5 md:p-8 space-y-4">
          {contact.address && (
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Address</p>
                <p className="text-muted-foreground text-xs md:text-sm">{contact.address}</p>
              </div>
            </div>
          )}
          {contact.phone && (
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Phone</p>
                <a href={`tel:${phoneLink}`} className="text-primary text-xs md:text-sm hover:underline">
                  {contact.phone}
                </a>
              </div>
            </div>
          )}
          {hours.length > 0 && (
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Consultation Hours</p>
                {hours.map((h, i) => (
                  <p key={i} className="text-muted-foreground text-xs md:text-sm">
                    {h}
                  </p>
                ))}
              </div>
            </div>
          )}
          {contact.mapsUrl && (
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs md:text-sm text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <MapPin size={13} /> Get Directions
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footer = siteConfig.footer;
  return (
    <footer className="border-t border-border py-6 md:py-8 bg-card">
      <div className="container text-center space-y-1.5 px-5">
        <p className="font-heading font-semibold text-foreground text-sm">
          {siteConfig.businessName}
        </p>
        {footer?.subtitle && (
          <p className="text-xs text-muted-foreground">{footer.subtitle}</p>
        )}
        <p className="text-[11px] text-muted-foreground pt-1.5">
          {footer?.credit || "Website designed & developed by Aman Web Studio"}
        </p>
      </div>
    </footer>
  );
};

const Index = () => {
  useEffect(() => {
    applyTheme(siteConfig.colors);
    if (siteConfig.meta?.title) {
      document.title = siteConfig.meta.title;
    }
    if (siteConfig.meta?.description) {
      const metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) {
        metaEl.setAttribute("content", siteConfig.meta.description);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DoctorsSection />
      <StrengthsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
