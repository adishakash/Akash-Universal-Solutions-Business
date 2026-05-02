import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const plans = [
  {
    name: "Starter",
    tagline: "For businesses getting started",
    price: "$799",
    period: "/month",
    desc: "Perfect for small businesses that need a solid digital foundation without breaking the bank.",
    features: [
      "Website speed & mobile optimization",
      "Basic SEO setup (on-page)",
      "Monthly performance report",
      "2 rounds of revisions/month",
      "Email & chat support",
      "Basic analytics dashboard",
    ],
    notIncluded: ["Custom development", "Automation setup", "Dedicated account manager"],
    cta: "Start with Starter",
    color: "from-brand-gray/20 to-brand-gray/10",
    accent: "border-white/15",
    badge: "",
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale",
    price: "$1,999",
    period: "/month",
    desc: "For growing businesses that want automation, better leads, and a competitive advantage.",
    features: [
      "Everything in Starter",
      "CRM setup & automation",
      "Lead capture & chatbot",
      "Email/SMS follow-up sequences",
      "Advanced SEO + local SEO",
      "Monthly strategy call",
      "Dedicated account manager",
      "Priority support (24hr response)",
    ],
    notIncluded: ["Custom app development"],
    cta: "Start Growing Now",
    color: "from-brand-blue/30 to-brand-blue/10",
    accent: "border-brand-blue",
    badge: "Most Popular",
    highlighted: true,
  },
  {
    name: "Pro",
    tagline: "For businesses that want it all",
    price: "$4,999",
    period: "/month",
    desc: "Full-service IT partnership. We become your outsourced tech team and handle everything.",
    features: [
      "Everything in Growth",
      "Custom web/mobile app development",
      "Data dashboard & analytics",
      "Advanced automations & integrations",
      "Unlimited revision requests",
      "Bi-weekly strategy calls",
      "Dedicated developer assigned",
      "Same-day support & bug fixes",
      "Quarterly ROI review",
    ],
    notIncluded: [],
    cta: "Go Pro Today",
    color: "from-brand-orange/20 to-brand-orange/10",
    accent: "border-brand-orange/50",
    badge: "Best Value",
  },
];

const Pricing = () => {
  const { ref, inView } = useInView();
  const [annual, setAnnual] = useState(false);

  const getPrice = (p) => {
    if (!annual) return p;
    const num = parseInt(p.replace("$", "").replace(",", ""));
    return "$" + Math.round(num * 0.8).toLocaleString();
  };

  return (
    <section id="pricing" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge mb-4">Transparent Pricing</div>
          <h2 className="section-title mb-4">
            Simple Plans,{" "}
            <span className="gradient-text">Serious Results</span>
          </h2>
          <p className="section-subtitle mb-8">
            No hidden fees. Cancel anytime. Pick the plan that fits where you
            are today.
          </p>

          {/* Annual toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/15 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual
                  ? "bg-brand-blue text-white"
                  : "text-brand-gray hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                annual
                  ? "bg-brand-blue text-white"
                  : "text-brand-gray hover:text-white"
              }`}
            >
              Annual
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition-all duration-500 ${
                plan.highlighted
                  ? "bg-brand-blue/10 border-brand-blue scale-105 shadow-2xl shadow-brand-blue/20"
                  : `bg-white/5 ${plan.accent}`
              } ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 ${
                    plan.highlighted
                      ? "bg-brand-blue text-white"
                      : "bg-brand-orange text-white"
                  } text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap`}
                >
                  ⭐ {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-brand-gray text-sm mb-4">{plan.tagline}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-black text-white">
                    {getPrice(plan.price)}
                  </span>
                  <span className="text-brand-gray mb-2">{plan.period}</span>
                </div>
                {annual && (
                  <p className="text-green-400 text-xs font-semibold">
                    You save 20% with annual billing
                  </p>
                )}
                <p className="text-brand-gray text-sm mt-3 leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-bold py-3 px-6 rounded-xl mb-6 transition-all ${
                  plan.highlighted
                    ? "bg-brand-blue hover:bg-blue-600 text-white"
                    : plan.badge === "Best Value"
                    ? "bg-brand-orange hover:bg-orange-600 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                }`}
              >
                {plan.cta} →
              </a>

              {/* Features */}
              <div>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">
                  What's included
                </p>
                <ul className="space-y-3 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                {plan.notIncluded.length > 0 && (
                  <ul className="space-y-2">
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="text-white/20 mt-0.5 flex-shrink-0">✕</span>
                        <span className="text-white/30">{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Custom note */}
        <div className="mt-12 text-center p-6 bg-white/3 border border-white/10 rounded-2xl">
          <p className="text-white font-semibold mb-2">
            Need a custom project quote?
          </p>
          <p className="text-brand-gray text-sm mb-4">
            One-time projects, custom builds, and enterprise plans available. We'll create a
            tailored proposal within 24 hours.
          </p>
          <a href="#contact" className="btn-secondary text-sm px-6 py-2.5">
            Request Custom Quote →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
