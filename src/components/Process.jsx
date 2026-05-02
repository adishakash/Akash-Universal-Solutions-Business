import React from "react";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Free Audit",
    desc: "We review your website, tech stack, and business goals. You get a detailed report showing exactly what's costing you money.",
    duration: "Day 1–2",
    color: "from-brand-blue to-cyan-400",
  },
  {
    number: "02",
    icon: "🗺️",
    title: "Strategy & Roadmap",
    desc: "We create a custom action plan with priorities ranked by ROI. You decide what to fix first based on your budget and goals.",
    duration: "Day 3–5",
    color: "from-purple-500 to-brand-blue",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Execution",
    desc: "Our team gets to work. You get weekly updates, live demos, and a dedicated Slack channel. No guesswork, full transparency.",
    duration: "Week 2–6",
    color: "from-brand-electric to-green-400",
  },
  {
    number: "04",
    icon: "📈",
    title: "Results & Growth",
    desc: "We measure everything. After delivery, we show you the numbers — more leads, faster load, higher conversions. Then we plan what's next.",
    duration: "Ongoing",
    color: "from-brand-orange to-yellow-400",
  },
];

const Process = () => {
  const { ref, inView } = useInView();

  return (
    <section id="process" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mb-4">Our Process</div>
          <h2 className="section-title mb-4">
            From <span className="gradient-text">Audit to Results</span> in
            Weeks, Not Months
          </h2>
          <p className="section-subtitle">
            A simple, transparent 4-step process designed to deliver measurable
            outcomes fast.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative group transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-blue/40 to-transparent z-10" />
              )}

              <div className="card glow-card h-full">
                {/* Number + Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl flex-shrink-0`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-5xl font-black text-white/10 leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Duration badge */}
                <span className="text-xs font-bold text-brand-electric bg-brand-electric/10 border border-brand-electric/20 px-3 py-1 rounded-full mb-3 inline-block">
                  {step.duration}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-brand-gray mb-6">
            Ready to start? Most projects kick off within{" "}
            <span className="text-white font-semibold">48 hours</span> of your first call.
          </p>
          <a href="#contact" className="btn-primary text-base px-10 py-4">
            Start Your Free Audit →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
