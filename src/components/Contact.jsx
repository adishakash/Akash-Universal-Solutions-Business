import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Info */}
          <div>
            <div className="badge mb-4">Get In Touch</div>
            <h2 className="section-title mb-4">
              Ready to Stop Losing{" "}
              <span className="gradient-text">Revenue?</span>
            </h2>
            <p className="section-subtitle mb-8">
              Get a free, no-obligation audit of your website and tech stack. We'll
              show you exactly where you're losing money — and how to fix it.
            </p>

            {/* What you get */}
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: "🔍",
                  title: "Free Website Audit",
                  desc: "Speed, SEO, conversion, and mobile analysis",
                },
                {
                  icon: "📋",
                  title: "Custom Action Plan",
                  desc: "Prioritized fixes ranked by revenue impact",
                },
                {
                  icon: "💰",
                  title: "Cost Estimate",
                  desc: "Transparent pricing with no surprises",
                },
                {
                  icon: "📞",
                  title: "Strategy Call",
                  desc: "30-min call with a senior consultant",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-brand-gray text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <a
                href="mailto:adish@akashuniversalsolutions.com"
                className="flex items-center gap-3 text-brand-gray hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-blue/40 transition-colors">
                  ✉️
                </div>
                <span>adish@akashuniversalsolutions.com</span>
              </a>
              <a
                href="https://wa.me/919186028356"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-gray hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-green-500/40 transition-colors">
                  💬
                </div>
                <span>WhatsApp: +1 (555) 000-0000</span>
              </a>
              <div className="flex items-center gap-3 text-brand-gray">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  🕐
                </div>
                <span>Available EST & PST Business Hours</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  You're All Set!
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  We've received your message and will have your free audit
                  ready within{" "}
                  <span className="text-white font-semibold">24 hours</span>.
                  Check your inbox for a confirmation.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-2">
                  Get Your Free Audit
                </h3>
                <p className="text-brand-gray text-sm mb-6">
                  Takes 2 minutes. No credit card required.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-medium mb-1.5 block">
                        Your Name *
                      </label>
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
                      <label className="text-white/60 text-xs font-medium mb-1.5 block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your Company LLC"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">
                      What Can We Help With?
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="" className="bg-brand-dark">Select a service...</option>
                      <option value="website" className="bg-brand-dark">Website Optimization</option>
                      <option value="automation" className="bg-brand-dark">Business Automation</option>
                      <option value="app" className="bg-brand-dark">Custom App Development</option>
                      <option value="analytics" className="bg-brand-dark">Data & Analytics</option>
                      <option value="maintenance" className="bg-brand-dark">Maintenance & Support</option>
                      <option value="other" className="bg-brand-dark">Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-medium mb-1.5 block">
                      Tell Us About Your Business
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's your biggest tech challenge right now? What results are you looking for?"
                      className="form-input resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "🚀 Get My Free Audit Now"
                    )}
                  </button>
                  <p className="text-brand-gray text-xs text-center">
                    100% free. No spam. We'll respond within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
