import React from "react";
import { useInView } from "../hooks/useInView";

const reasons = [
  {
    icon: "💰",
    title: "Save Up to 60% vs US Agencies",
    desc: "Get the same senior-level expertise at a fraction of the cost. Our India-based team delivers US-quality work without the US price tag.",
    stat: "60% cheaper",
  },
  {
    icon: "⚡",
    title: "Fast, Reliable Delivery",
    desc: "We kick off projects within 48 hours, deliver on time, and communicate clearly throughout. No surprises, no delays.",
    stat: "48hr kickoff",
  },
  {
    icon: "🎯",
    title: "Results-Focused, Not Activity-Focused",
    desc: "We measure success by your revenue and growth — not by hours billed. Every decision we make is tied to a business outcome.",
    stat: "ROI-driven",
  },
  {
    icon: "🇺🇸",
    title: "Built for the US Market",
    desc: "We understand how US businesses operate. Our team is trained in US business culture, timezones, and communication standards.",
    stat: "US-aligned",
  },
  {
    icon: "🔒",
    title: "Experienced & Vetted IT Team",
    desc: "10+ years of experience building for US clients. Every developer is vetted, English-proficient, and specialized in their domain.",
    stat: "10+ yrs exp",
  },
  {
    icon: "📞",
    title: "Dedicated US Business Hours Support",
    desc: "We're available EST/PST during your business hours. Slack, email, Zoom — however you prefer to communicate.",
    stat: "Always on",
  },
];

const comparison = [
  { item: "Senior Developer", us: "$15k–25k/mo", them: "$3k–6k/mo" },
  { item: "Website Revamp", us: "$15k–50k", them: "$3k–8k" },
  { item: "App Development", us: "$100k+", them: "$15k–40k" },
  { item: "Monthly Maintenance", us: "$3k–8k/mo", them: "$500–1.5k/mo" },
];

const WhyUs = () => {
  const { ref, inView } = useInView();

  return (
    <section id="why-us" className="py-24 px-4 md:px-8 bg-brand-navy/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mb-4">Why Choose Us</div>
          <h2 className="section-title mb-4">
            Why Top US Businesses Choose{" "}
            <span className="gradient-text">IT Outsourcing from India</span>
          </h2>
          <p className="section-subtitle">
            The smart businesses aren't cutting corners — they're finding a
            smarter way to get premium results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`card glow-card group transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{r.icon}</div>
                <div>
                  <div className="text-xs font-bold text-brand-electric bg-brand-electric/10 px-2 py-1 rounded mb-3 inline-block">
                    {r.stat}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Comparison Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <div className="p-6 md:p-8 border-b border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Cost Comparison: US Agency vs Akash Universal Solutions
            </h3>
            <p className="text-brand-gray">
              See how much you could save without sacrificing quality.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left p-4 text-brand-gray font-medium text-sm">Service</th>
                  <th className="text-center p-4 text-brand-gray font-medium text-sm">
                    🇺🇸 US Agency
                  </th>
                  <th className="text-center p-4 text-brand-electric font-bold text-sm">
                    ✅ Akash Universal
                  </th>
                  <th className="text-center p-4 text-green-400 font-bold text-sm">You Save</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => {
                  const usCost = parseFloat(row.us.replace(/[^0-9]/g, "").slice(0, 3));
                  const ourCost = parseFloat(row.them.replace(/[^0-9]/g, "").slice(0, 3));
                  const savePct = Math.round(((usCost - ourCost) / usCost) * 100);
                  return (
                    <tr
                      key={row.item}
                      className={`border-t border-white/5 ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      } hover:bg-white/5 transition-colors`}
                    >
                      <td className="p-4 text-white font-medium">{row.item}</td>
                      <td className="p-4 text-center text-brand-gray line-through">{row.us}</td>
                      <td className="p-4 text-center text-brand-electric font-bold">{row.them}</td>
                      <td className="p-4 text-center">
                        <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-full text-sm">
                          ~{savePct > 0 ? savePct : 60}% off
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="p-6 md:p-8 border-t border-white/10 text-center">
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              Calculate Your Savings →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
