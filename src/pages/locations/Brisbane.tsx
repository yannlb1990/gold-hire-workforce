import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Phone, Clock, Users, Building, Hammer } from "lucide-react";

const Brisbane = () => {
  const services = [
    { name: "Skilled Labour Hire", href: "/services#labour" },
    { name: "Carpenters", href: "/services#carpenters" },
    { name: "Painters", href: "/services#painters" },
    { name: "Commercial Cleaning", href: "/services#cleaning" },
    { name: "Landscaping & Grounds", href: "/services#landscaping" },
  ];

  const suburbs = [
    "Brisbane CBD", "Fortitude Valley", "South Brisbane", "West End", "Woolloongabba",
    "Newstead", "Teneriffe", "Hamilton", "Paddington", "Milton", "Toowong", "Indooroopilly",
    "Chermside", "Aspley", "Stafford", "Kedron", "Nundah", "Clayfield", "Ascot", "Bulimba"
  ];

  const faqs = [
    {
      question: "How quickly can you supply workers to Brisbane sites?",
      answer: "We maintain a local Brisbane workforce and can typically supply workers within 24-48 hours. For urgent requirements, same-day placement is often possible depending on availability."
    },
    {
      question: "Do you cover all Brisbane suburbs?",
      answer: "Yes, we service the entire Brisbane metropolitan area including CBD, inner suburbs, northern suburbs, southern suburbs and western corridors. Our workers are familiar with Brisbane traffic patterns and site access requirements."
    },
    {
      question: "What industries do you service in Brisbane?",
      answer: "We work with construction companies, commercial property managers, facilities management firms, event organisers, warehouses and manufacturing operations throughout Brisbane."
    },
    {
      question: "Are your Brisbane workers licensed and insured?",
      answer: "All our workers hold valid White Cards, relevant trade licences where applicable, and are covered by comprehensive insurance. We maintain strict compliance with Queensland labour hire licensing requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Labour Hire Brisbane | Skilled Workers & Trade Staff | Precision Site Solutions</title>
        <meta
          name="description"
          content="Brisbane labour hire specialists. Skilled labourers, carpenters, painters, commercial cleaners and grounds maintenance crews. Fast response, compliant workers, management-led service."
        />
        <meta name="keywords" content="labour hire brisbane, hiring company brisbane, skilled labour hire brisbane, construction labour brisbane, commercial cleaning brisbane" />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/locations/brisbane" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Precision Site Solutions - Brisbane",
            "description": "Labour hire services in Brisbane, Queensland",
            "url": "https://thegoldhirecompany.com.au/locations/brisbane",
            "telephone": "04XX XXX XXX",
            "areaServed": {
              "@type": "City",
              "name": "Brisbane",
              "containedIn": "Queensland, Australia"
            },
            "serviceType": ["Labour Hire", "Carpentry", "Painting", "Commercial Cleaning", "Landscaping"]
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-20 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-up">
                <div className="inline-flex items-center gap-2 badge-gold mb-6">
                  <MapPin size={16} />
                  Brisbane, Queensland
                </div>
                <h1 className="heading-xl text-concrete mb-6">
                  Labour Hire <span className="text-gradient-gold">Brisbane</span>
                </h1>
                <p className="body-lg text-concrete/70 mb-8">
                  Queensland's capital deserves workforce solutions that match its ambition. 
                  We supply skilled labourers, trade professionals and specialist crews 
                  across Brisbane's construction, commercial and industrial sectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="xl" asChild>
                    <Link to="/contact">
                      Request Brisbane Labour
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">Speak With a Manager</Link>
                  </Button>
                </div>
              </div>
              <div className="opacity-0 animate-slide-right animation-delay-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="card-dark p-6">
                    <Clock className="w-8 h-8 text-gold mb-3" />
                    <div className="text-2xl font-heading font-bold text-concrete">24hr</div>
                    <div className="text-sm text-concrete/60">Response Time</div>
                  </div>
                  <div className="card-dark p-6">
                    <Users className="w-8 h-8 text-gold mb-3" />
                    <div className="text-2xl font-heading font-bold text-concrete">150+</div>
                    <div className="text-sm text-concrete/60">Brisbane Workers</div>
                  </div>
                  <div className="card-dark p-6">
                    <Building className="w-8 h-8 text-gold mb-3" />
                    <div className="text-2xl font-heading font-bold text-concrete">50+</div>
                    <div className="text-sm text-concrete/60">Active Clients</div>
                  </div>
                  <div className="card-dark p-6">
                    <Hammer className="w-8 h-8 text-gold mb-3" />
                    <div className="text-2xl font-heading font-bold text-concrete">100%</div>
                    <div className="text-sm text-concrete/60">Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brisbane Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3">
                <h2 className="heading-md text-navy mb-6">
                  Brisbane's Trusted Labour Hire Partner
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/70">
                  <p className="mb-4">
                    As Brisbane continues to grow with major infrastructure projects, commercial developments 
                    and urban renewal, the demand for reliable skilled labour has never been higher. The Gold 
                    Hire Company delivers workforce solutions that keep Brisbane projects running on schedule.
                  </p>
                  <p className="mb-4">
                    From the CBD high-rises to suburban construction sites, from Fortitude Valley renovations 
                    to South Brisbane commercial fit-outs, our workers understand Brisbane. They know the city, 
                    the traffic, the site requirements and what it takes to perform at the highest level.
                  </p>
                  <p>
                    What sets us apart is communication. Every placement comes with management-level accountability. 
                    When you work with Precision Site Solutions, you're not just getting workers — you're getting 
                    a partner who takes ownership of outcomes.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="card-elevated sticky top-32">
                  <h3 className="font-heading font-bold text-navy text-xl mb-6">
                    Brisbane Services
                  </h3>
                  <ul className="space-y-4">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link 
                          to={service.href}
                          className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <hr className="my-6 border-border" />
                  <Button variant="gold" className="w-full" asChild>
                    <Link to="/contact">
                      Get Brisbane Labour Quote
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Clients */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-navy mb-4">Who We Work With in Brisbane</h2>
              <p className="body-lg text-charcoal/70">
                Our Brisbane clients span construction, commercial property, facilities management and more.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Builders & Developers", desc: "Residential and commercial construction projects throughout Brisbane" },
                { title: "Property Managers", desc: "Commercial buildings, body corporates and real estate portfolios" },
                { title: "Facilities Managers", desc: "Corporate offices, retail centres and industrial facilities" },
                { title: "Event Companies", desc: "Exhibition centres, stadiums and event venues across Brisbane" }
              ].map((client) => (
                <div key={client.title} className="card-elevated">
                  <h3 className="font-heading font-bold text-navy text-lg mb-3">{client.title}</h3>
                  <p className="text-charcoal/70 text-sm">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suburbs */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-8 text-center">Brisbane Areas We Service</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {suburbs.map((suburb) => (
                <span key={suburb} className="px-4 py-2 bg-concrete rounded-full text-sm text-charcoal/70">
                  {suburb}
                </span>
              ))}
              <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                + All Brisbane suburbs
              </span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-12 text-center">Brisbane Labour Hire FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item bg-card">
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-navy text-lg mb-3">{faq.question}</h3>
                    <p className="text-charcoal/70">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-dark">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="heading-md text-concrete mb-4">
              Ready for Reliable Brisbane Labour?
            </h2>
            <p className="body-lg text-concrete/70 mb-8 max-w-2xl mx-auto">
              Get skilled workers on your Brisbane site with communication-led delivery and fast replacements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour Now
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="tel:0400000000">
                  <Phone className="mr-2" size={20} />
                  Call Us Direct
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Brisbane;
