import React, { useState, useEffect } from "react";

const ExitPopup = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem("popupDismissed")) return;

    // Show on exit intent (mouse leaves top of page)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 5) {
        setShow(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    // Also show after 45 seconds
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("popupDismissed")) {
        setShow(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("popupDismissed", "true");
    onClose && onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { FORMSPREE_ENDPOINT } = await import("../config/formspree");
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: `Exit Popup Lead — ${email}` }),
      });
    } catch {}
    setSubmitted(true);
    sessionStorage.setItem("popupDismissed", "true");
    setTimeout(handleClose, 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-brand-navy border border-white/15 rounded-3xl max-w-lg w-full p-8 shadow-2xl shadow-brand-blue/20">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm transition-colors"
        >
          ✕
        </button>

        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-electric rounded-t-3xl" />

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">Awesome!</h3>
            <p className="text-brand-gray">
              Your free audit request is confirmed. Check your inbox!
            </p>
          </div>
        ) : (
          <>
            {/* Urgency badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-sm font-semibold">
                Wait! Before you leave...
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Get a FREE Website Audit{" "}
              <span className="gradient-text">Worth $500</span>
            </h3>

            <p className="text-brand-gray leading-relaxed mb-6">
              We'll analyze your website's speed, SEO, and conversion rate — and
              show you exactly how much revenue you're leaving on the table.{" "}
              <span className="text-white font-semibold">
                100% free, no strings attached.
              </span>
            </p>

            {/* What's included */}
            <ul className="space-y-2 mb-6">
              {[
                "✓ Page speed & Core Web Vitals analysis",
                "✓ SEO audit (where you rank vs competitors)",
                "✓ Conversion rate review",
                "✓ Custom action plan delivered to your inbox",
              ].map((item) => (
                <li key={item} className="text-white/80 text-sm">
                  {item}
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email..."
                className="form-input flex-1"
              />
              <button type="submit" className="btn-orange whitespace-nowrap">
                Get Free Audit
              </button>
            </form>

            <p className="text-brand-gray text-xs text-center mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitPopup;
