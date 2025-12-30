import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Hammer, Sparkles, Trees, Wrench, Bomb, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "labourers",
    icon: Users,
    title: "Skilled Labourers",
    subtitle: "General & Skilled Site Workers",
    description: "Trained, reliable labourers for construction sites, warehouses, events and commercial projects. Our workers arrive site-ready with proper PPE, safety inductions and clear communication protocols.",
    features: [
      "Construction site labour",
      "Warehouse & logistics support",
      "Event setup and pack-down",
      "Manufacturing assistance",
      "General maintenance support",
    ],
    forWho: "Builders, construction managers, warehouse operators, event companies and facilities managers.",
    link: "/trades/labourers",
  },
  {
    id: "demolition",
    icon: Bomb,
    title: "Demolition Crews",
    subtitle: "Strip-Out & Demolition Specialists",
    description: "Experienced demolition and strip-out crews for residential and commercial projects. Safe, efficient removal of structures with proper waste management and site cleanup.",
    features: [
      "Internal strip-outs",
      "Structural demolition",
      "Asbestos-aware workers",
      "Waste removal coordination",
      "Site restoration prep",
    ],
    forWho: "Builders, developers, renovation companies and commercial property owners.",
    link: "/trades/demolition",
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
    link: "/trades/carpenters",
  },
  {
    id: "building-cleaners",
    icon: Sparkles,
    title: "Building Cleaners",
    subtitle: "Post-Construction & Builder's Cleans",
    description: "Professional cleaning crews for post-construction and builder's cleans. Thorough cleaning to handover standard with documented processes and quality assurance.",
    features: [
      "Post-construction cleans",
      "Builder's cleans",
      "Window cleaning",
      "Pressure washing",
      "Final handover preparation",
    ],
    forWho: "Builders, developers, property managers and body corporates.",
    link: "/trades/building-cleaners",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Labour Hire Services | Labourers, Carpenters, Demolition | Precision Site Solutions</title>
        <meta
          name="description"
          content="Skilled labour hire services across Gold Coast, Brisbane & Byron Bay. Labourers, demolition crews, carpenters and building cleaners."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          {/* Floating organic shapes */}
          <div className="absolute top-10 right-20 w-72 h-72 rounded-blob bg-gold/5 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-gold/10 blur-2xl" />
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

        {/* Curved divider */}
        <div className="bg-oil h-16 relative">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-background" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
        </div>

        {/* Services List */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
          
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
                    <div className="w-20 h-20 rounded-[1.5rem] bg-navy flex items-center justify-center mb-6 shadow-elevated">
                      <service.icon className="w-10 h-10 text-gold" />
                    </div>
                    <h2 className="heading-md text-navy mb-2">{service.title}</h2>
                    <p className="text-gold font-medium mb-4">{service.subtitle}</p>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-charcoal/60 text-sm mb-6">
                      <strong className="text-navy">Who it's for:</strong> {service.forWho}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="gold" size="lg" asChild>
                        <Link to="/contact">
                          Request {service.title.split(" ")[0]}
                          <ArrowRight className="ml-2" size={18} />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to={service.link}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className={`card-feature ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-heading font-bold text-navy text-lg mb-4">
                      What We Deliver
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-gold" />
                          </div>
                          <span className="text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="text-center flex-1">
                          <div className="text-2xl font-heading font-bold text-gold">24hr</div>
                          <div className="text-xs text-charcoal/60">Response</div>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div className="text-center flex-1">
                          <div className="text-2xl font-heading font-bold text-gold">100%</div>
                          <div className="text-xs text-charcoal/60">Compliant</div>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div className="text-center flex-1">
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
        <section className="py-16 section-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl -translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative">
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
