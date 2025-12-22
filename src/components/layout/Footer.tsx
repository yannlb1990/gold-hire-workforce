import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  services: [
    { name: "Skilled Labour Hire", href: "/services#labour" },
    { name: "Carpenters", href: "/services#carpenters" },
    { name: "Painters", href: "/services#painters" },
    { name: "Commercial Cleaning", href: "/services#cleaning" },
    { name: "Landscaping & Grounds", href: "/services#landscaping" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Client Tools", href: "/client-tools" },
    { name: "Join Our Team", href: "/careers" },
    { name: "Blog & Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Compliance", href: "/compliance" },
  ],
};

const serviceAreas = [
  "Gold Coast",
  "Brisbane",
  "Logan",
  "Ipswich",
  "Tweed Heads",
  "Byron Bay",
];

export function Footer() {
  return (
    <footer className="bg-navy text-concrete">
      {/* CTA Section */}
      <div className="border-b border-steel-blue/20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="heading-md text-concrete mb-3">
                Ready to Get <span className="text-gradient-gold">Labour Fast?</span>
              </h3>
              <p className="text-concrete/70 text-lg max-w-xl">
                Clear communication guaranteed. Systems-driven labour hire for Gold Coast, Brisbane & Byron Bay.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/careers">Join Our Workforce</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center shadow-gold">
                <span className="text-navy font-heading font-bold text-2xl">G</span>
              </div>
              <div>
                <span className="text-concrete font-heading font-bold text-xl leading-tight block">
                  The Gold Hire
                </span>
                <span className="text-gold text-xs font-medium tracking-wider uppercase">
                  Company
                </span>
              </div>
            </Link>
            <p className="text-concrete/70 mb-6 max-w-sm">
              A management-led, systems-driven labour hire company delivering skilled workers 
              with clear communication, fast replacements and compliance-first systems.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:0400000000"
                className="flex items-center gap-3 text-concrete/70 hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold" />
                <span>04XX XXX XXX</span>
              </a>
              <a
                href="mailto:enquiries@thegoldhirecompany.com.au"
                className="flex items-center gap-3 text-concrete/70 hover:text-gold transition-colors"
              >
                <Mail size={18} className="text-gold" />
                <span>enquiries@thegoldhirecompany.com.au</span>
              </a>
              <div className="flex items-start gap-3 text-concrete/70">
                <MapPin size={18} className="text-gold mt-1" />
                <span>Gold Coast | Brisbane | Logan | Ipswich | Tweed Heads | Byron Bay</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-concrete mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-concrete/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-bold text-concrete mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-concrete/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="font-heading font-bold text-concrete mb-4 text-lg">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-concrete/70 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-blue/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-concrete/60">
              <span>© {new Date().getFullYear()} The Gold Hire Company</span>
              <span className="hidden md:inline">•</span>
              <span>ABN: XX XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-concrete/60 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
