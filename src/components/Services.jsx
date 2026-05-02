import React from "react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: "⚡",
    problem: "Your website loads slow and visitors leave before converting",
    title: "Website Optimization",
    solution:
      "We optimize speed, mobile experience, and conversion rate so every visitor has a reason to stay and buy.",
    benefits: ["+35% more conversions", "3x faster load speed", "Mobile-first fixes"],
    color: "from-brand-blue to-cyan-500",
    badge: "Most Popular",
  },
  {
    icon: "🤖",
    problem: "You're doing repetitive work manually — it's costing you hours",
    title: "Business Automation",
    solution:
      "CRM setup, chatbots, workflow automation — we remove busywork so you focus on growing revenue.",
    benefits: ["Save 20+ hrs/week", "Auto-qualify leads", "Instant response bots"],
    color: "from-purple-500 to-brand-blue",
    badge: "High ROI",
  },
  {
    icon: "📱",
    problem: "Off-the-shelf tools don't fit your business — you need custom",
    title: "Custom Web & Mobile Apps",
    solution:
      "We build scalable web and mobile applications tailored to your exact workflow and brand.",
    benefits: ["Fully custom builds", "iOS + Android", "Scalable architecture"],
    color: "from-brand-electric to-brand-blue",
    badge: "",
  },
  {
    icon: "📊",
    problem: "You're making decisions blind — no real data on what's working",
    title: "Data Dashboards & Analytics",
    solution:
      "We turn your raw data into clear dashboards so you can make fast, confident business decisions.",
    benefits: ["Real-time dashboards", "Sales & traffic insights", "KPI tracking"],
    color: "from-green-500 to-brand-electric",
    badge: "",
  },
  {
    icon: "🛡️",
    problem: "Your tech is breaking — and you have no one to call",
    title: "Maintenance & Support",
    solution:
      "Monthly retainer plans covering updates, bug fixes, security patches, and dedicated support.",
    benefits: ["24/7 monitoring", "Same-day bug fixes", "Dedicated account manager"],
    color: "from-brand-orange to-yellow-500",
    badge: "Best Value",
  },
];

const Services = () => {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mb-4">Our Services</div>
          <h2 className="section-title mb-4">
            Stop Losing Revenue to{" "}
            <span className="gradient-text">Tech Problems</span>
          </h2>
          <p className="section-subtitle">
            Every service we offer is designed around one goal: making your
            business more profitable.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card glow-card relative overflow-hidden group transition-all duration-500 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 text-xs font-bold bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full border border-brand-orange/30">
                  {service.badge}
                </span>
              )}

              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Problem */}
              <p className="text-brand-orange text-sm font-medium mb-3 italic">
                "{service.problem}"
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Solution */}
              <p className="text-brand-gray text-sm leading-relaxed mb-5">
                {service.solution}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-4 h-4 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-electric text-xs">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-brand-electric text-sm font-semibold hover:gap-3 transition-all duration-200 group"
              >
                Fix This Problem →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
