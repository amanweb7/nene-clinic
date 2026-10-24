import { useEffect } from "react";
import siteConfig from "../site.config.json";
import { applyTheme } from "../lib/colors";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { BookAppointment } from "../components/BookAppointment";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { MobileBottomBar } from "../components/MobileBottomBar";

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
    <div className="min-h-screen bg-background text-foreground antialiased w-full pb-24 md:pb-0">
      {/* 1. Navbar (Sticky) */}
      <Navbar />

      <main className="w-full">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Services */}
        <Services />

        {/* 5. Book Appointment */}
        <BookAppointment />

        {/* 6. FAQ */}
        <FAQ />

        {/* 7. Contact with Map */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Bar */}
      <MobileBottomBar />
    </div>
  );
};

export default Index;
