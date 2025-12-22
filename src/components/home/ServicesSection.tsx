import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Paintbrush, Sparkles, Trees, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users,
    title: "Skilled Labour Hire",
    description: "General labourers trained in safety, productivity and communication. Ready for construction, warehousing, events and more.",
    href: "/services#labour",
  },
  {
    icon: Hammer,
    title: "Carpenters",
    description: "Qualified carpenters for residential and commercial projects. Framing, fit-outs, formwork and finishing work.",
    href: "/services#carpenters",
  },
  {
    icon: Paintbrush,
    title: "Painters",
    description: "Professional painters for internal and external projects. Commercial, residential and industrial painting services.",
    href: "/services#painters",
  },
  {
    icon: Sparkles,
    title: "Commercial Cleaning",
    description: "Post-construction and commercial cleaning crews. Ready for builders, property managers and facilities teams.",
    href: "/services#cleaning",
  },
  {
    icon: Trees,
    title: "Landscaping & Grounds",
    description: "Basic landscaping and grounds maintenance. Mowing, garden beds, debris removal and external area upkeep.",
    href: "/services#landscaping",
  },
  {
    icon: Wrench,
    title: "Facilities Support",
    description: "General maintenance and facilities support workers. For property managers, commercial buildings and estates.",
    href: "/services#facilities",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 section-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-steel-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="heading-lg text-navy mb-6">
            Skilled Workforce Solutions for{" "}
            <span className="text-gradient-gold">Every Project</span>
          </h2>
          <p className="body-lg text-charcoal/70">
            From single-day labour to ongoing workforce partnerships. 
            We deliver trained, compliant workers with management-level accountability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group card-elevated hover:border-gold/20 border border-transparent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/70 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-gold font-medium text-sm">
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="navy" size="xl" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
