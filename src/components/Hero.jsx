import React, { useEffect, useRef } from "react";

const stats = [
  { value: "150+", label: "US Clients Served" },
  { value: "60%", label: "Cost Savings vs US Agencies" },
  { value: "48hr", label: "Average Project Kickoff" },
  { value: "98%", label: "Client Retention Rate" },
];

const Hero = ({ onOpenAudit }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add("visible");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center hero-gradient grid-bg overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-electric/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-semibold px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Trusted by 150+ US Businesses
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Your Website Is{" "}
            <span className="relative">
              <span className="gradient-text">Losing You</span>
            </span>{" "}
            <br className="hidden md:block" />
            Customers Every Day
          </h1>

          {/* Subheadline */}
          <p className="text-brand-gray text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
            We fix slow websites, automate your business processes, and build
            custom software — so you{" "}
            <span className="text-white font-semibold">
              generate more leads, cut costs by 60%
            </span>
            , and scale faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenAudit}
              className="btn-orange text-base px-8 py-4 w-full sm:w-auto justify-center text-lg"
            >
              🔍 Get Free Website Audit
            </button>
            <a
              href="#contact"
              className="btn-secondary text-base px-8 py-4 w-full sm:w-auto justify-center text-lg"
            >
              📞 Book a Strategy Call
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex items-center justify-center gap-6 mb-16 flex-wrap">
            {["✅ No contracts", "✅ Results in 30 days", "✅ US business hours support"].map(
              (item) => (
                <span key={item} className="text-brand-gray text-sm font-medium">
                  {item}
                </span>
              )
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-brand-blue/40 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-brand-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-gray text-xs hidden md:flex">
          <span>Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-brand-blue to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
