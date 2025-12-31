import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Skilled Labourers", href: "/trades/labourers" },
    { name: "Carpenters", href: "/trades/carpenters" },
    { name: "Building Cleaners", href: "/trades/building-cleaners" },
    { name: "Demolition Crews", href: "/trades/demolition" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Client Tools", href: "/client-tools" },
    { name: "Wage Calculator", href: "/wage-calculator" },
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
                Ready to Get <span className="text-gradient-green">Labour Fast?</span>
              </h3>
              <p className="text-concrete/70 text-lg max-w-xl">
                Clear communication guaranteed. Systems-driven labour hire for Gold Coast, Brisbane & Byron Bay.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Request Labour
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-concrete/30 text-concrete hover:bg-concrete/10" asChild>
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
            <Link to="/" className="mb-6 inline-block overflow-hidden h-20">
              <img 
                src={logo} 
                alt="Precision Site Solutions" 
                className="h-60 w-auto -my-20"
              />
            </Link>
            <p className="text-concrete/70 mb-6 max-w-sm">
              A management-led, systems-driven labour hire company delivering skilled workers 
              with clear communication, fast replacements and compliance-first systems.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:0400000000"
                className="flex items-center gap-3 text-concrete/70 hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-primary" />
                <span>04XX XXX XXX</span>
              </a>
              <a
                href="mailto:enquiries@precisionsitesolutions.com.au"
                className="flex items-center gap-3 text-concrete/70 hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary" />
                <span>enquiries@precisionsitesolutions.com.au</span>
              </a>
              <div className="flex items-start gap-3 text-concrete/70">
                <MapPin size={18} className="text-primary mt-1" />
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
                    className="text-concrete/70 hover:text-primary transition-colors text-sm"
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
                    className="text-concrete/70 hover:text-primary transition-colors text-sm"
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
              <span>© {new Date().getFullYear()} Precision Site Solutions</span>
              <span className="hidden md:inline">•</span>
              <span>ABN: XX XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-concrete/60 hover:text-primary transition-colors"
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
