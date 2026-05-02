import React, { useState } from "react";
import { useInView } from "../hooks/useInView";

const caseStudies = [
  {
    client: "Denver HVAC Company",
    industry: "Home Services",
    icon: "🏠",
    problem:
      "Website loading in 8 seconds. 72% mobile bounce rate. Only 3–4 leads per month from web.",
    solution:
      "Full website speed optimization, mobile-first redesign, Google Ads landing page, local SEO overhaul.",
    results: [
      { metric: "+287%", label: "More Monthly Leads" },
      { metric: "1.8s", label: "Load Time (from 8s)" },
      { metric: "+41%", label: "Conversion Rate" },
      { metric: "3 months", label: "To See Full ROI" },
    ],
    quote:
      '"Akash\'s team transformed our website. We went from 3 leads/month to 18+ within 90 days. Worth every penny."',
    author: "Mike R., Owner",
    tag: "Website Optimization",
    color: "from-brand-blue to-cyan-400",
  },
  {
    client: "NYC Real Estate Brokerage",
    industry: "Real Estate",
    icon: "🏙️",
    problem:
      "Agents spending 15+ hours/week manually following up with leads. No CRM, all on spreadsheets.",
    solution:
      "Custom CRM setup, automated email/SMS follow-up sequences, AI lead scoring, chatbot for instant response.",
    results: [
      { metric: "18hrs", label: "Saved Per Week/Agent" },
      { metric: "3x", label: "Faster Lead Response" },
      { metric: "+52%", label: "Lead-to-Show Rate" },
      { metric: "$12k/mo", label: "Staff Cost Savings" },
    ],
    quote:
      '"Our agents now spend zero time on follow-ups. The automation handles it all. Our close rate jumped overnight."',
    author: "Sarah T., Broker",
    tag: "Business Automation",
    color: "from-purple-500 to-brand-blue",
  },
  {
    client: "Texas Logistics Startup",
    industry: "Logistics / SaaS",
    icon: "🚛",
    problem:
      "Using 4 different tools that didn't talk to each other. Needed a custom portal for drivers and clients.",
    solution:
      "Built a custom web app — driver tracking portal, client dashboard, automated invoicing, real-time notifications.",
    results: [
      { metric: "4 tools", label: "Replaced by 1 Platform" },
      { metric: "40%", label: "Ops Cost Reduction" },
      { metric: "$180k", label: "Saved vs US Dev Quote" },
      { metric: "14 weeks", label: "Full Build Delivery" },
    ],
    quote:
      '"They built in 14 weeks what US developers quoted at $220k and 8 months. We paid $42k and launched faster."',
    author: "James L., CEO",
    tag: "Custom App Dev",
    color: "from-green-500 to-brand-electric",
  },
];

const CaseStudies = () => {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  return (
    <section id="case-studies" className="py-24 px-4 md:px-8 bg-brand-navy/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mb-4">Case Studies</div>
          <h2 className="section-title mb-4">
            Real Results for{" "}
            <span className="gradient-text">Real US Businesses</span>
          </h2>
          <p className="section-subtitle">
            Don't take our word for it — see the numbers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {caseStudies.map((c, i) => (
            <button
              key={c.client}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === i
                  ? "bg-brand-blue border-brand-blue text-white"
                  : "bg-white/5 border-white/15 text-brand-gray hover:border-brand-blue/40 hover:text-white"
              }`}
            >
              {c.icon} {c.client}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div
          ref={ref}
          className={`bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Top bar */}
          <div
            className={`h-1 bg-gradient-to-r ${cs.color}`}
          />

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Problem + Solution */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{cs.icon}</span>
                  <div>
                    <div className="text-xs font-bold text-brand-electric bg-brand-electric/10 px-3 py-1 rounded-full mb-1 inline-block">
                      {cs.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{cs.client}</h3>
                    <p className="text-brand-gray text-sm">{cs.industry}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-brand-orange font-bold text-sm uppercase tracking-wider mb-3">
                    ❌ The Problem
                  </h4>
                  <p className="text-white/80 leading-relaxed">{cs.problem}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-brand-electric font-bold text-sm uppercase tracking-wider mb-3">
                    ✅ Our Solution
                  </h4>
                  <p className="text-white/80 leading-relaxed">{cs.solution}</p>
                </div>

                <blockquote className="border-l-2 border-brand-blue pl-4 italic text-brand-gray text-sm leading-relaxed">
                  {cs.quote}
                  <footer className="text-white font-semibold mt-2 not-italic">
                    — {cs.author}
                  </footer>
                </blockquote>
              </div>

              {/* Right: Results */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">
                  📈 The Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-brand-blue/30 transition-all"
                    >
                      <div
                        className={`text-4xl font-black bg-gradient-to-r ${cs.color} bg-clip-text text-transparent mb-1`}
                      >
                        {r.metric}
                      </div>
                      <div className="text-brand-gray text-sm">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl">
                  <p className="text-white font-semibold mb-4">
                    Want results like these?
                  </p>
                  <a href="#contact" className="btn-primary w-full justify-center">
                    Get Your Free Audit →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
