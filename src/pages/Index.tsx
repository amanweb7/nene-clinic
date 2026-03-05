import { Phone, MapPin, Star, Clock, Stethoscope, Baby, Hospital } from "lucide-react";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <div>
          <h1 className="text-lg font-semibold font-heading text-foreground">Nene Clinic</h1>
          <p className="text-xs text-muted-foreground">ENT · Gynecology · Hospital</p>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("doctors")} className="hover:text-primary transition-colors">Doctors</button>
          <button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollTo("reviews")} className="hover:text-primary transition-colors">Reviews</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
        </nav>
        <a href="tel:09824094947" className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90 transition-opacity">
          <Phone size={14} />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="bg-primary text-primary-foreground py-20 md:py-28">
    <div className="container text-center max-w-3xl">
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(3)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
        <Star size={16} className="fill-current opacity-50" />
        <span className="text-sm ml-2 opacity-80">3.4 · 161 Reviews</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-5">
        Specialist ENT & Maternity Care in Vadodara
      </h2>
      <p className="text-lg opacity-85 mb-8 max-w-xl mx-auto leading-relaxed">
        Trusted ENT surgery and gynecology services by experienced specialists. Comprehensive hospital care for the whole family.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="tel:09824094947" className="rounded-md bg-primary-foreground text-primary px-6 py-3 font-medium hover:opacity-90 transition-opacity">
          Book Appointment
        </a>
        <a href="tel:09824094947" className="rounded-md border border-primary-foreground/30 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors">
          <Phone size={16} className="inline mr-2" />Call Now
        </a>
        <a href="https://maps.google.com/?q=Nene+Clinic+Gotri+Vadodara" target="_blank" rel="noopener noreferrer" className="rounded-md border border-primary-foreground/30 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors">
          <MapPin size={16} className="inline mr-2" />Get Directions
        </a>
      </div>
    </div>
  </section>
);

const DoctorsSection = () => (
  <section id="doctors" className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">Our Specialists</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <Stethoscope size={28} className="text-primary mb-3" />
          <h4 className="font-heading font-bold text-foreground text-lg mb-1">Dr. Milind Nene</h4>
          <p className="text-sm text-primary font-medium mb-3">ENT Specialist / Surgeon</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Experienced ENT surgeon specializing in sinus surgery, ear drum repair, and pediatric ENT care. Known for handling children patiently during procedures.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <Baby size={28} className="text-primary mb-3" />
          <h4 className="font-heading font-bold text-foreground text-lg mb-1">Dr. Suchitra Nene</h4>
          <p className="text-sm text-primary font-medium mb-3">Gynecologist / Maternity Care</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Experienced gynecologist providing comprehensive maternity care, pregnancy consultation, and women's health treatment.
          </p>
        </div>
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
  <section className="py-16 md:py-24 bg-section-alt">
    <div className="container max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">Why Patients Trust Us</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-6 border border-border">
            <span className="text-2xl mb-3 block">{s.icon}</span>
            <h4 className="font-heading font-semibold text-foreground mb-1">{s.title}</h4>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="container max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope size={20} className="text-primary" />
            <h4 className="font-heading font-bold text-foreground">ENT Treatments</h4>
          </div>
          <div className="space-y-3">
            {["Ear infections & ear pain", "Ear wax removal", "Sinus treatment", "Endoscopic sinus surgery", "Nose surgery (DNS)", "Hearing related issues"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Baby size={20} className="text-primary" />
            <h4 className="font-heading font-bold text-foreground">Gynecology & Maternity</h4>
          </div>
          <div className="space-y-3">
            {["Pregnancy consultation", "Delivery care", "Women's health treatment", "Maternity support"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Hospital size={20} className="text-primary" />
            <h4 className="font-heading font-bold text-foreground">General Hospital</h4>
          </div>
          <div className="space-y-3">
            {["Diagnostic consultation", "Minor surgeries", "Follow-up treatments"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
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
  <section id="reviews" className="py-16 md:py-24 bg-section-alt">
    <div className="container max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">Patient Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-lg p-6 border border-border">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-primary text-primary" />)}
            </div>
            <p className="text-foreground leading-relaxed italic">"{t}"</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
        {["⭐ 3.4 Google Rating", "161+ Reviews", "Specialist Doctors", "Established Hospital"].map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Visit Us</h3>
      <div className="bg-card border border-border rounded-lg p-8 space-y-5">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Address</p>
            <p className="text-muted-foreground text-sm">Sarita Sangam Society, 32, Gotri Rd, Gotri, Vadodara, Gujarat 390021</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Phone</p>
            <a href="tel:09824094947" className="text-primary text-sm hover:underline">098240 94947</a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Consultation Hours</p>
            <p className="text-muted-foreground text-sm">Dr. Suchitra Nene: 9–11am / 6–8pm</p>
            <p className="text-muted-foreground text-sm">Dr. Milind Nene: 11am–1pm / 5–7pm</p>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Nene+Clinic+Gotri+Vadodara" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition-opacity">
          <MapPin size={14} /> Get Directions on Google Maps
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8 bg-card">
    <div className="container text-center space-y-2">
      <p className="font-heading font-semibold text-foreground">Nene Clinic</p>
      <p className="text-sm text-muted-foreground">Dr. Milind Nene · ENT Specialist | Dr. Suchitra Nene · Gynecologist · Vadodara</p>
      <p className="text-xs text-muted-foreground pt-2">Website designed & developed by Aman Web Studio</p>
    </div>
  </footer>
);

const Index = () => {
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
