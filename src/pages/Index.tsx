import { useState } from "react";
import { Phone, MapPin, Star, Clock, Stethoscope, Baby, Hospital, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="container flex items-center justify-between py-3 px-4 md:px-8">
        <div>
          <h1 className="text-base md:text-lg font-semibold font-heading text-foreground">Nene Clinic</h1>
          <p className="text-[11px] text-muted-foreground">ENT · Gynecology · Hospital</p>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {["doctors", "services", "reviews", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-primary transition-colors capitalize">{id}</button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:09824094947" className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs md:text-sm text-primary-foreground hover:opacity-90 transition-opacity">
            <Phone size={13} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1 animate-in slide-in-from-top-2">
          {["doctors", "services", "reviews", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left py-2 px-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md capitalize transition-colors">{id}</button>
          ))}
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="bg-primary text-primary-foreground py-14 md:py-28">
    <div className="container text-center max-w-3xl px-5">
      <div className="flex items-center justify-center gap-1 mb-3">
        {[...Array(3)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
        <Star size={14} className="fill-current opacity-50" />
        <span className="text-xs ml-1.5 opacity-80">3.4 · 161 Reviews</span>
      </div>
      <h2 className="text-2xl md:text-5xl font-heading font-bold leading-tight mb-4">
        Specialist ENT & Maternity Care in Vadodara
      </h2>
      <p className="text-sm md:text-lg opacity-85 mb-7 max-w-xl mx-auto leading-relaxed">
        Trusted ENT surgery and gynecology services by experienced specialists. Comprehensive hospital care for the whole family.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
        <a href="tel:09824094947" className="rounded-md bg-primary-foreground text-primary px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity text-center">
          Book Appointment
        </a>
        <a href="tel:09824094947" className="rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium hover:bg-primary-foreground/10 transition-colors text-center">
          <Phone size={14} className="inline mr-1.5" />Call Now
        </a>
        <a href="https://maps.google.com/?q=Nene+Clinic+Gotri+Vadodara" target="_blank" rel="noopener noreferrer" className="rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium hover:bg-primary-foreground/10 transition-colors text-center">
          <MapPin size={14} className="inline mr-1.5" />Directions
        </a>
      </div>
    </div>
  </section>
);

const DoctorsSection = () => (
  <section id="doctors" className="py-12 md:py-24">
    <div className="container max-w-3xl px-5">
      <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Our Specialists</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {[
          { icon: Stethoscope, name: "Dr. Milind Nene", role: "ENT Specialist / Surgeon", desc: "Experienced ENT surgeon specializing in sinus surgery, ear drum repair, and pediatric ENT care. Known for handling children patiently during procedures." },
          { icon: Baby, name: "Dr. Suchitra Nene", role: "Gynecologist / Maternity Care", desc: "Experienced gynecologist providing comprehensive maternity care, pregnancy consultation, and women's health treatment." },
        ].map((doc) => (
          <div key={doc.name} className="bg-card border border-border rounded-lg p-5 md:p-6">
            <doc.icon size={24} className="text-primary mb-2.5" />
            <h4 className="font-heading font-bold text-foreground text-base md:text-lg mb-0.5">{doc.name}</h4>
            <p className="text-xs md:text-sm text-primary font-medium mb-2.5">{doc.role}</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{doc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const strengths = [
  { icon: "🩺", title: "Experienced Doctors", desc: "Long experience and deep medical knowledge in ENT and gynecology." },
  { icon: "🔬", title: "Surgical Expertise", desc: "Successful ENT surgeries like sinus surgery and ear drum repair." },
  { icon: "🏥", title: "Clean Facility", desc: "Clinic is neat, well-maintained, and hygienic." },
  { icon: "👶", title: "Child-Friendly Care", desc: "Doctor handles children patiently during ENT procedures." },
];

const StrengthsSection = () => (
  <section className="py-12 md:py-24 bg-section-alt">
    <div className="container max-w-4xl px-5">
      <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Why Patients Trust Us</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {strengths.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-4 md:p-6 border border-border">
            <span className="text-xl md:text-2xl mb-2 block">{s.icon}</span>
            <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1">{s.title}</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const services = [
  { icon: Stethoscope, title: "ENT Treatments", items: ["Ear infections & ear pain", "Ear wax removal", "Sinus treatment", "Endoscopic sinus surgery", "Nose surgery (DNS)", "Hearing related issues"] },
  { icon: Baby, title: "Gynecology & Maternity", items: ["Pregnancy consultation", "Delivery care", "Women's health treatment", "Maternity support"] },
  { icon: Hospital, title: "General Hospital", items: ["Diagnostic consultation", "Minor surgeries", "Follow-up treatments"] },
];

const ServicesSection = () => (
  <section id="services" className="py-12 md:py-24">
    <div className="container max-w-4xl px-5">
      <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((svc) => (
          <div key={svc.title}>
            <div className="flex items-center gap-2 mb-3">
              <svc.icon size={18} className="text-primary" />
              <h4 className="font-heading font-bold text-foreground text-sm md:text-base">{svc.title}</h4>
            </div>
            <div className="space-y-2">
              {svc.items.map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs md:text-sm text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  "Dr. Milind Nene is excellent. My son was very scared of doctors but he handled him very patiently.",
  "I had sinus surgery here and the treatment and facilities were very good.",
  "Dr. Suchitra Nene is very experienced and approachable for maternity care.",
];

const TestimonialsSection = () => (
  <section id="reviews" className="py-12 md:py-24 bg-section-alt">
    <div className="container max-w-4xl px-5">
      <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Patient Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-lg p-5 md:p-6 border border-border">
            <div className="flex gap-0.5 mb-2.5">
              {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-primary text-primary" />)}
            </div>
            <p className="text-xs md:text-sm text-foreground leading-relaxed italic">"{t}"</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-8 text-xs md:text-sm text-muted-foreground">
        {["⭐ 3.4 Google Rating", "161+ Reviews", "Specialist Doctors", "Established Hospital"].map((s) => (
          <span key={s} className="bg-card border border-border rounded-full px-3 py-1">{s}</span>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-12 md:py-24">
    <div className="container max-w-3xl px-5">
      <h3 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-6 text-center">Visit Us</h3>
      <div className="bg-card border border-border rounded-lg p-5 md:p-8 space-y-4">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground text-sm">Address</p>
            <p className="text-muted-foreground text-xs md:text-sm">Sarita Sangam Society, 32, Gotri Rd, Gotri, Vadodara, Gujarat 390021</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={18} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground text-sm">Phone</p>
            <a href="tel:09824094947" className="text-primary text-xs md:text-sm hover:underline">098240 94947</a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={18} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground text-sm">Consultation Hours</p>
            <p className="text-muted-foreground text-xs md:text-sm">Dr. Suchitra Nene: 9–11am / 6–8pm</p>
            <p className="text-muted-foreground text-xs md:text-sm">Dr. Milind Nene: 11am–1pm / 5–7pm</p>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Nene+Clinic+Gotri+Vadodara" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs md:text-sm text-primary-foreground hover:opacity-90 transition-opacity">
          <MapPin size={13} /> Get Directions
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-6 md:py-8 bg-card">
    <div className="container text-center space-y-1.5 px-5">
      <p className="font-heading font-semibold text-foreground text-sm">Nene Clinic</p>
      <p className="text-xs text-muted-foreground">Dr. Milind Nene · ENT Specialist | Dr. Suchitra Nene · Gynecologist · Vadodara</p>
      <p className="text-[11px] text-muted-foreground pt-1.5">Website designed & developed by Aman Web Studio</p>
    </div>
  </footer>
);

const Index = () => (
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

export default Index;
