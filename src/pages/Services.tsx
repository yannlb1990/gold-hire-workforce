import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Paintbrush, Sparkles, Trees, Users, Wrench, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "labour",
    icon: Users,
    title: "Skilled Labour Hire",
    subtitle: "General Labourers & Site Workers",
    description: "Trained, reliable general labourers for construction sites, warehouses, events and commercial projects. Our workers arrive site-ready with proper PPE, safety inductions and clear communication protocols.",
    features: [
      "Construction site labour",
      "Warehouse & logistics support",
      "Event setup and pack-down",
      "Manufacturing assistance",
      "General maintenance support",
    ],
    forWho: "Builders, construction managers, warehouse operators, event companies and facilities managers.",
  },
  {
    id: "carpenters",
    icon: Hammer,
    title: "Carpenters",
    subtitle: "Qualified Trade Professionals",
    description: "Qualified carpenters for residential and commercial projects. From framing and formwork to fit-outs and finishing work, our carpenters deliver quality craftsmanship with professionalism.",
    features: [
      "Residential framing",
      "Commercial fit-outs",
      "Formwork specialists",
      "Second fix carpentry",
      "Renovation projects",
    ],
    forWho: "Builders, developers, project managers and renovation companies across SEQ.",
  },
  {
    id: "painters",
    icon: Paintbrush,
    title: "Painters",
    subtitle: "Professional Painting Services",
    description: "Professional painters for internal and external projects. Commercial, residential and industrial painting services delivered with attention to detail and proper surface preparation.",
    features: [
      "Internal painting",
      "External & facade work",
      "Commercial repaints",
      "Industrial coatings",
      "Specialty finishes",
    ],
    forWho: "Property managers, builders, body corporates and commercial property owners.",
  },
  {
    id: "cleaning",
    icon: Sparkles,
    title: "Commercial Cleaning",
    subtitle: "Post-Construction & Commercial",
    description: "Post-construction and commercial cleaning crews ready for builders, property managers and facilities teams. Thorough cleaning to handover standard with documented processes.",
    features: [
      "Post-construction cleans",
      "Builder's cleans",
      "Commercial office cleaning",
      "Window cleaning",
      "Pressure washing",
    ],
    forWho: "Builders, developers, property managers and body corporates.",
  },
  {
    id: "landscaping",
    icon: Trees,
    title: "Landscaping & Grounds",
    subtitle: "Basic Maintenance Services",
    description: "Basic landscaping and grounds maintenance for commercial properties and estates. Grass cutting, garden bed maintenance, debris removal and external area upkeep.",
    features: [
      "Grass cutting & mowing",
      "Leaf & debris removal",
      "Garden bed maintenance",
      "Basic planting",
      "External common areas",
    ],
    forWho: "Property managers, body corporates, commercial estates and facilities managers.",
    note: "Note: We do not provide structural or licensed landscaping works.",
  },
  {
    id: "facilities",
    icon: Wrench,
    title: "Facilities Support",
    subtitle: "General Maintenance Workers",
    description: "General maintenance and facilities support workers for property managers, commercial buildings and estates. Reliable support for ongoing maintenance needs.",
    features: [
      "General repairs",
      "Preventive maintenance",
      "Building inspections support",
      "Minor installations",
      "Handyman services",
    ],
    forWho: "Property managers, commercial building owners and facilities management companies.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Labour Hire Services | Carpenters, Painters, Cleaning | The Gold Hire Company</title>
        <meta
          name="description"
          content="Skilled labour hire services across Gold Coast, Brisbane & Byron Bay. Carpenters, painters, commercial cleaning, landscaping and facilities support."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                Our Services
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Skilled Workforce Solutions for{" "}
                <span className="text-gradient-gold">Every Project</span>
              </h1>
              <p className="body-lg text-concrete/70">
                From single-day labour to ongoing workforce partnerships. We deliver 
                trained, compliant workers with management-level accountability across 
                Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-navy flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h2 className="heading-md text-navy mb-2">{service.title}</h2>
                    <p className="text-gold font-medium mb-4">{service.subtitle}</p>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-charcoal/60 text-sm mb-6">
                      <strong className="text-navy">Who it's for:</strong> {service.forWho}
                    </p>
                    {service.note && (
                      <p className="text-charcoal/60 text-sm mb-6 italic">{service.note}</p>
                    )}
                    <Button variant="gold" size="lg" asChild>
                      <Link to="/contact">
                        Request {service.title.split(" ")[0]}
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </div>
                  <div className={`card-elevated ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-heading font-bold text-navy text-lg mb-4">
                      What We Deliver
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                          <span className="text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-heading font-bold text-gold">24hr</div>
                          <div className="text-xs text-charcoal/60">Response</div>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div className="text-center">
                          <div className="text-2xl font-heading font-bold text-gold">100%</div>
                          <div className="text-xs text-charcoal/60">Compliant</div>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div className="text-center">
                          <div className="text-2xl font-heading font-bold text-gold">Fast</div>
                          <div className="text-xs text-charcoal/60">Replacements</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 section-dark">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="heading-md text-concrete mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-concrete/70 mb-8 max-w-xl mx-auto">
              Tell us about your project and we'll have the right workers ready for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour Today
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Speak With a Manager</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
