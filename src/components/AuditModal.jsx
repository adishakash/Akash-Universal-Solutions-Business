import React, { useState } from "react";
import { FORMSPREE_ENDPOINT } from "../config/formspree";

const AuditModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", website: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Free Audit Request from ${form.name} — ${form.website}` }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email adish@akashuniversalsolutions.com directly.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-brand-navy border border-white/15 rounded-3xl max-w-md w-full p-8 shadow-2xl shadow-brand-blue/20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-blue rounded-t-3xl" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm transition-colors"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-3">Audit Request Received!</h3>
            <p className="text-brand-gray leading-relaxed">
              We'll have your complete website audit ready and delivered to your inbox within{" "}
              <span className="text-white font-semibold">24 business hours</span>.
            </p>
            <button onClick={onClose} className="btn-primary mt-6 px-8">
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-black text-white mb-1">Get Your Free Audit</h3>
            <p className="text-brand-gray text-sm mb-6">
              We'll analyze your website and deliver a full report within 24hrs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">Your Website URL *</label>
                <input
                  type="url"
                  name="website"
                  required
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="form-input"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-orange w-full justify-center py-3.5 text-base disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "🔍 Get My Free Audit"
                )}
              </button>
              <p className="text-brand-gray text-xs text-center">
                Free, no-obligation. We'll respond within 24 hours.
              </p>
              {error && (
                <p className="text-red-400 text-xs text-center mt-2">{error}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuditModal;
