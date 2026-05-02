import React, { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919186028356?text=Hi%2C%20I%27d%20like%20a%20free%20website%20audit"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center text-2xl shadow-xl shadow-green-500/30 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Sticky CTA bar (mobile) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-brand-navy border-t border-white/15 p-3 flex gap-3">
          <a
            href="#contact"
            className="btn-primary flex-1 justify-center text-sm py-3"
          >
            🔍 Free Audit
          </a>
          <a
            href="https://wa.me/919186028356"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 hover:bg-green-400 rounded-xl flex items-center justify-center text-xl transition-colors flex-shrink-0"
          >
            💬
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
