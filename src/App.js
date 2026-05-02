import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ExitPopup from "./components/ExitPopup";
import AuditModal from "./components/AuditModal";

function App() {
  const [showAuditModal, setShowAuditModal] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <main>
        <Hero onOpenAudit={() => setShowAuditModal(true)} />
        <Services />
        <WhyUs />
        <Process />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        {/* Mid-page CTA Banner */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-brand-blue/20 to-brand-electric/10 border-y border-brand-blue/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Turn Your Website Into a{" "}
              <span className="gradient-text">Lead Machine?</span>
            </h2>
            <p className="text-brand-gray text-lg mb-8 max-w-2xl mx-auto">
              Join 150+ US businesses that chose Akash Universal Solutions to
              grow smarter. Get your free audit today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowAuditModal(true)}
                className="btn-orange text-base px-10 py-4 w-full sm:w-auto justify-center"
              >
                🔍 Get Free Audit Now
              </button>
              <a
                href="#contact"
                className="btn-secondary text-base px-10 py-4 w-full sm:w-auto justify-center"
              >
                📞 Book a Strategy Call
              </a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <ExitPopup />
      {showAuditModal && (
        <AuditModal onClose={() => setShowAuditModal(false)} />
      )}
    </div>
  );
}

export default App;
