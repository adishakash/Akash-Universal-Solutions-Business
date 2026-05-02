import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy/50 border-t border-white/10 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <a href="#">
                <div className="inline-block bg-white rounded-xl px-4 py-2">
                  <img
                    src="/assets/bb95409e-b957-4bd5-8239-c292ec5304f6-Picsart-BackgroundRemover.png"
                    alt="Akash Universal Solutions"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              </a>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed mb-4">
              Premium IT outsourcing for US businesses. We help you grow faster,
              cut costs, and scale smarter.
            </p>
            <p className="text-brand-gray text-xs mb-4">
              🌐 www.akashuniversalsolutions.com
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", href: "#", icon: "in" },
                { name: "Twitter", href: "#", icon: "𝕏" },
                { name: "YouTube", href: "#", icon: "▶" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-white hover:border-brand-blue/40 transition-all text-sm font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Website Optimization",
                "Business Automation",
                "Custom App Development",
                "Data Dashboards",
                "Maintenance & Support",
                "SEO Services",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-brand-gray text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-brand-gray text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:adish@akashuniversalsolutions.com"
                  className="text-brand-gray text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  ✉️ adish@akashuniversalsolutions.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919186028356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gray text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  💬 WhatsApp Us
                </a>
              </li>
              <li className="text-brand-gray text-sm flex items-center gap-2">
                🕐 EST & PST Business Hours
              </li>
            </ul>

            {/* Final CTA */}
            <div className="mt-6 p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl">
              <p className="text-white text-sm font-semibold mb-2">
                Ready to grow?
              </p>
              <a href="#contact" className="btn-primary text-sm py-2 px-4 w-full justify-center">
                Free Audit →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-gray text-sm">
              © {currentYear} Akash Universal Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-brand-gray text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
