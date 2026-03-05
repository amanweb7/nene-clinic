import { Phone, MapPin, Star, Clock } from "lucide-react";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <div>
          <h1 className="text-lg font-semibold font-heading text-foreground">Shree Ram Clinic</h1>
          <p className="text-xs text-muted-foreground">Dr. Arkesh Shukal</p>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("treatments")} className="hover:text-primary transition-colors">Treatments</button>
          <button onClick={() => scrollTo("reviews")} className="hover:text-primary transition-colors">Reviews</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
        </nav>
        <a href="tel:09824064573" className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90 transition-opacity">
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
        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
        <span className="text-sm ml-2 opacity-80">5.0 · 58 Reviews</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-5">
        Experienced & Trusted Medical Care in Vadodara
      </h2>
      <p className="text-lg opacity-85 mb-8 max-w-xl mx-auto leading-relaxed">
        Providing reliable diagnosis and effective treatment for acute and chronic illnesses with years of trusted patient care.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="tel:09824064573" className="rounded-md bg-primary-foreground text-primary px-6 py-3 font-medium hover:opacity-90 transition-opacity">
          Book Consultation
        </a>
        <a href="tel:09824064573" className="rounded-md border border-primary-foreground/30 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors">
          <Phone size={16} className="inline mr-2" />Call Now
        </a>
        <a href="https://maps.google.com/?q=Shree+Ram+Clinic+Vadodara" target="_blank" rel="noopener noreferrer" className="rounded-md border border-primary-foreground/30 px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors">
          <MapPin size={16} className="inline mr-2" />Get Directions
        </a>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">About Dr. Arkesh Shukal</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Dr. Arkesh Shukal is a highly experienced physician known for his accurate diagnosis and effective treatment methods. Patients appreciate his calm nature, deep medical knowledge, and respectful approach toward people.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Many families in Vadodara trust him as their family doctor for years.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {["Accurate diagnosis", "Quick recovery treatments", "Deep knowledge of illnesses", "Respectful and humble behaviour", "Trusted family doctor"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const strengths = [
  { icon: "🧠", title: "Accurate Diagnosis", desc: "Understands illness quickly and prescribes effective medicine." },
  { icon: "⚡", title: "Fast Recovery", desc: "Many reviews say medicines show results within 1 day." },
  { icon: "👨‍⚕️", title: "Experienced Doctor", desc: "Families visiting for many years." },
  { icon: "🤝", title: "Respectful Behavior", desc: "Treats patients politely and respectfully." },
  { icon: "💊", title: "Chronic Disease Support", desc: "Good results in long-term illnesses." },
];

const StrengthsSection = () => (
  <section className="py-16 md:py-24 bg-section-alt">
    <div className="container max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">Why Patients Trust Us</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

const treatments = [
  "General medical consultation", "Fever treatment", "Dengue treatment",
  "Chronic disease treatment", "Kidney related health support", "Family medicine", "Homeopathy treatment"
];

const TreatmentsSection = () => (
  <section id="treatments" className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">Treatments & Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {treatments.map((t) => (
          <div key={t} className="flex items-center gap-3 border border-border rounded-lg p-4 bg-card">
            <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
            <span className="text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  "Very experienced doctor. Our family doctor for years. Always gives the right diagnosis and treatment.",
  "Dr. Arkesh really understands illnesses and provides the best treatment. Medicines work wonders.",
  "My mother survived more than 3 years without dialysis because of his treatment.",
  "Best homeopath according to my experience. Excellent results in chronic diseases.",
];

const TestimonialsSection = () => (
  <section id="reviews" className="py-16 md:py-24 bg-section-alt">
    <div className="container max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10 text-center">Patient Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        {["⭐ 5.0 Google Rating", "58+ Verified Reviews", "Trusted Family Doctor", "Experienced Medical Practice"].map((s) => (
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
            <p className="text-muted-foreground text-sm">7, Bhuvaneshwari Society, Ajwa Rd, near Dudheshwar Society Bus Stop, beside Indian Oil Petrol Pump, Vadodara, Gujarat 390019</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Phone</p>
            <a href="tel:09824064573" className="text-primary text-sm hover:underline">098240 64573</a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Google Map Code</p>
            <p className="text-muted-foreground text-sm">863G+4M Vadodara</p>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Shree+Ram+Clinic+Vadodara" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition-opacity">
          <MapPin size={14} /> Get Directions on Google Maps
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8 bg-card">
    <div className="container text-center space-y-2">
      <p className="font-heading font-semibold text-foreground">Shree Ram Clinic</p>
      <p className="text-sm text-muted-foreground">Dr. Arkesh Shukal · Medical & Homeopathy Clinic · Vadodara</p>
      <p className="text-xs text-muted-foreground pt-2">Website designed & developed by Aman Web Studio</p>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <StrengthsSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
