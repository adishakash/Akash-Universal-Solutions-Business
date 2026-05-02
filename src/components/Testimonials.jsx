import React from "react";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    name: "David Chen",
    title: "CEO, PrimeShield Insurance",
    location: "Chicago, IL",
    avatar: "DC",
    rating: 5,
    text: "We hired Akash Universal to rebuild our lead capture system. Within 60 days, our cost per lead dropped by 44% and our sales team is actually using the CRM now. Best tech investment we've made in years.",
    result: "44% lower cost per lead",
    service: "Business Automation",
  },
  {
    name: "Jennifer Martinez",
    title: "Owner, Bright Smile Dentistry",
    location: "Austin, TX",
    avatar: "JM",
    rating: 5,
    text: "My website was embarrassingly slow. After Akash's team worked on it, it now loads in under 2 seconds. I rank higher on Google and get 3x more appointment requests through the site. The ROI was clear within 30 days.",
    result: "3x more appointment bookings",
    service: "Website Optimization",
  },
  {
    name: "Robert Thompson",
    title: "VP Operations, FreshRoute Logistics",
    location: "Atlanta, GA",
    avatar: "RT",
    rating: 5,
    text: "We needed a custom driver portal and nothing on the market fit our needs. Akash built exactly what we envisioned at 1/5th the price a local firm quoted. Communication was excellent throughout the project.",
    result: "Built for 80% less than US quotes",
    service: "Custom App Development",
  },
  {
    name: "Amanda Foster",
    title: "Marketing Director, ProBuild Contractors",
    location: "Phoenix, AZ",
    avatar: "AF",
    rating: 5,
    text: "I was skeptical about outsourcing to India, but Akash's team completely changed my perspective. They work US hours, communicate clearly, and deliver faster than any agency I've worked with here. Highly recommend.",
    result: "+67% website traffic in 3 months",
    service: "SEO & Optimization",
  },
  {
    name: "Marcus Williams",
    title: "Founder, CloudStack SaaS",
    location: "Seattle, WA",
    avatar: "MW",
    rating: 5,
    text: "Needed a full-stack MVP built fast. Akash's team understood our requirements from day one, asked the right questions, and delivered on time. The quality is exceptional. We're now on our third project with them.",
    result: "MVP delivered in 10 weeks",
    service: "Custom Development",
  },
  {
    name: "Lisa Park",
    title: "Director, Prestige Real Estate Group",
    location: "Miami, FL",
    avatar: "LP",
    rating: 5,
    text: "The automation they built for our follow-up process is a game changer. Our agents used to manually follow up with 50+ leads a week. Now it's 100% automated and our response time went from 6 hours to 2 minutes.",
    result: "Response time: 6hrs → 2 mins",
    service: "Business Automation",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 bg-brand-navy/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mb-4">Client Testimonials</div>
          <h2 className="section-title mb-4">
            US Business Owners{" "}
            <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="section-subtitle">
            150+ US businesses have grown with Akash Universal Solutions. Here's
            what they say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card glow-card flex flex-col transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-electric flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm truncate">{t.name}</p>
                  <p className="text-brand-gray text-xs truncate">{t.title}</p>
                  <p className="text-brand-gray/60 text-xs">{t.location}</p>
                </div>
                <Stars count={t.rating} />
              </div>

              {/* Service badge */}
              <span className="text-xs font-semibold text-brand-electric bg-brand-electric/10 border border-brand-electric/20 px-3 py-1 rounded-full mb-4 self-start">
                {t.service}
              </span>

              {/* Quote */}
              <p className="text-white/75 text-sm leading-relaxed mb-5 flex-1">
                "{t.text}"
              </p>

              {/* Result */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-green-400 text-sm font-bold">
                  📈 {t.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge row */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {[
            { icon: "🔒", text: "NDA Protected" },
            { icon: "⭐", text: "4.9/5 Average Rating" },
            { icon: "🏆", text: "150+ Projects Delivered" },
            { icon: "🇺🇸", text: "US-Focused Team" },
            { icon: "💬", text: "24hr Response Guarantee" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-brand-gray text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
