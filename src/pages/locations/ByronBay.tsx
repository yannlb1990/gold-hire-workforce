import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

const ByronBay = () => {
  const services = [
    { name: "Skilled Labour Hire", href: "/services#labour" },
    { name: "Carpenters", href: "/services#carpenters" },
    { name: "Commercial Cleaning", href: "/services#cleaning" },
    { name: "Demolition Crews", href: "/services#demolition" },
  ];

  const areas = [
    "Byron Bay", "Suffolk Park", "Sunrise Beach", "Belongil", "Bangalow", "Mullumbimby",
    "Brunswick Heads", "Ocean Shores", "New Brighton", "Billinudgel", "Lennox Head", "Ballina"
  ];

  const faqs = [
    {
      question: "Do you service the entire Byron Shire?",
      answer: "Yes. We cover Byron Bay, Bangalow, Mullumbimby, Brunswick Heads, Ocean Shores and surrounding areas. We also service northern NSW including Lennox Head and Ballina."
    },
    {
      question: "What types of projects do you support in Byron?",
      answer: "Byron's unique development landscape includes boutique residential builds, hospitality fit-outs, eco-developments and commercial projects. We provide labour that understands Byron's standards and expectations."
    },
    {
      question: "Can you handle hospitality and event work?",
      answer: "Absolutely. Byron's events scene and hospitality industry require flexible, reliable workers. We supply crews for venue setups, hotel maintenance, festival support and commercial cleaning."
    },
    {
      question: "Are you familiar with Byron's planning requirements?",
      answer: "Our workers understand the unique nature of Byron construction, including working within residential areas, environmental considerations and the community's expectations around noise and site management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Labour Hire Byron Bay | Skilled Workers Northern NSW | Precision Site Solutions</title>
        <meta
          name="description"
          content="Byron Bay labour hire specialists. Skilled labourers, carpenters, demolition crews and building cleaners for Byron Shire projects."
        />
        <meta name="keywords" content="labour hire byron bay, byron bay workers, northern nsw labour hire, construction workers byron, cleaning crews byron bay" />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/locations/byron-bay" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Precision Site Solutions - Byron Bay",
            "description": "Labour hire services in Byron Bay and Northern NSW",
            "url": "https://precisionsitesolutions.com.au/locations/byron-bay",
            "telephone": "04XX XXX XXX",
            "areaServed": {
              "@type": "City",
              "name": "Byron Bay",
              "containedIn": "New South Wales, Australia"
            }
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-20 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl opacity-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                <MapPin size={16} />
                Byron Bay & Byron Shire
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Labour Hire <span className="text-gradient-gold">Byron Bay</span>
              </h1>
              <p className="body-lg text-concrete/70 mb-8">
                Workforce solutions for Australia's most iconic coastal region. From 
                boutique residential builds to hospitality venues, we supply skilled 
                workers who understand Byron's unique environment and expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">
                    Request Byron Labour
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Speak With a Manager</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3">
                <h2 className="heading-md text-navy mb-6">
                  Byron's Trusted Workforce Partner
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/70">
                  <p className="mb-4">
                    Byron Bay is unlike anywhere else in Australia. The combination of 
                    boutique development, environmental sensitivity and community 
                    expectations creates a unique operating environment that not every 
                    labour hire company understands.
                  </p>
                  <p className="mb-4">
                    We do. Our workers for Byron projects are selected for their professionalism, 
                    site presentation and ability to work within residential and environmentally 
                    sensitive areas. They understand that Byron clients expect more — and they deliver.
                  </p>
                  <p>
                    Whether you're building a luxury residence in Suffolk Park, fitting out 
                    a new restaurant in town or maintaining a holiday resort, our team 
                    brings the right attitude and skills to your project.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="card-elevated sticky top-32">
                  <h3 className="font-heading font-bold text-navy text-xl mb-6">
                    Byron Services
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
                      Get Byron Bay Quote
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-navy mb-4">Byron Industries We Support</h2>
              <p className="body-lg text-charcoal/70">
                From construction to hospitality, we supply workers across Byron's key sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Boutique Residential", desc: "High-end homes, renovations and architectural projects throughout Byron Shire" },
                { title: "Hospitality & Venues", desc: "Hotels, restaurants, bars and event venues across the region" },
                { title: "Retail & Commercial", desc: "Fit-outs, maintenance and cleaning for Byron's retail scene" },
                { title: "Property Management", desc: "Ongoing maintenance and cleaning for holiday rentals and body corporates" },
                { title: "Events & Festivals", desc: "Setup, operations and pack-down for Byron's famous events scene" },
                { title: "Eco-Development", desc: "Sustainable building projects with environmentally conscious practices" }
              ].map((item) => (
                <div key={item.title} className="card-elevated">
                  <h3 className="font-heading font-bold text-navy text-lg mb-3">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-8 text-center">Byron Areas We Service</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span key={area} className="px-4 py-2 bg-concrete rounded-full text-sm text-charcoal/70">
                  {area}
                </span>
              ))}
              <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                + Northern NSW
              </span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-12 text-center">Byron Bay Labour Hire FAQs</h2>
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
              Quality Workers for Byron Projects
            </h2>
            <p className="body-lg text-concrete/70 mb-8 max-w-2xl mx-auto">
              Professional, presentable workers who understand Byron's unique requirements.
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

export default ByronBay;
