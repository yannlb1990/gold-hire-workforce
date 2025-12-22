import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

const Logan = () => {
  const services = [
    { name: "Skilled Labour Hire", href: "/services#labour" },
    { name: "Carpenters", href: "/services#carpenters" },
    { name: "Painters", href: "/services#painters" },
    { name: "Commercial Cleaning", href: "/services#cleaning" },
    { name: "Landscaping & Grounds", href: "/services#landscaping" },
  ];

  const suburbs = [
    "Logan Central", "Springwood", "Beenleigh", "Shailer Park", "Daisy Hill", "Marsden",
    "Underwood", "Slacks Creek", "Woodridge", "Kingston", "Loganholme", "Meadowbrook",
    "Browns Plains", "Crestmead", "Park Ridge", "Jimboomba"
  ];

  const faqs = [
    {
      question: "How quickly can you get workers to Logan sites?",
      answer: "We maintain a substantial Logan-based workforce and can typically supply workers within 24 hours. Our central location between Brisbane and the Gold Coast means excellent coverage across the Logan LGA."
    },
    {
      question: "Do you service the Logan industrial areas?",
      answer: "Yes. We work extensively in Logan's industrial precincts including Meadowbrook, Slacks Creek, Berrinba and surrounding areas. Our workers are experienced in warehouse, manufacturing and logistics environments."
    },
    {
      question: "What about new residential developments?",
      answer: "Logan's residential growth is significant. We supply labour to builders and developers across new estates in Jimboomba, Park Ridge, Yarrabilba and established suburbs throughout Logan."
    },
    {
      question: "Can you handle ongoing contract work?",
      answer: "Absolutely. Many of our Logan clients have ongoing labour requirements. We establish long-term relationships with consistent worker supply and dedicated account management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Labour Hire Logan | Industrial & Construction Workers | The Gold Hire Company</title>
        <meta
          name="description"
          content="Labour hire Logan City and surrounds. Skilled labourers for construction, industrial, warehouse and commercial projects. Fast deployment, compliant workers."
        />
        <meta name="keywords" content="labour hire logan, logan city workers, industrial labour hire logan, construction workers logan, warehouse labour logan" />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/locations/logan" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Gold Hire Company - Logan",
            "description": "Labour hire services in Logan City, Queensland",
            "url": "https://thegoldhirecompany.com.au/locations/logan",
            "telephone": "04XX XXX XXX",
            "areaServed": {
              "@type": "City",
              "name": "Logan City",
              "containedIn": "Queensland, Australia"
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
                Logan City, Queensland
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Labour Hire <span className="text-gradient-gold">Logan</span>
              </h1>
              <p className="body-lg text-concrete/70 mb-8">
                From Beenleigh to Jimboomba, Springwood to Slacks Creek — Logan's 
                diverse industrial and residential growth demands reliable workforce 
                solutions. We deliver skilled workers with speed and accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">
                    Request Logan Labour
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
                  Logan's Industrial Workforce Partner
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/70">
                  <p className="mb-4">
                    Logan City sits at the heart of South-East Queensland's growth corridor. 
                    With major industrial precincts, rapidly expanding residential developments 
                    and infrastructure projects, Logan's demand for skilled labour continues 
                    to grow.
                  </p>
                  <p className="mb-4">
                    We understand Logan's diverse economy. From the warehouses of Meadowbrook 
                    to the new estates of Yarrabilba, from commercial projects in Springwood 
                    to manufacturing in Berrinba — our workers know Logan and deliver 
                    consistent results across all sectors.
                  </p>
                  <p>
                    Our central location allows rapid deployment throughout Logan and 
                    seamless coverage of the Brisbane-Gold Coast corridor. When you 
                    need workers fast, we respond.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="card-elevated sticky top-32">
                  <h3 className="font-heading font-bold text-navy text-xl mb-6">
                    Logan Services
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
                      Get Logan Quote
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
              <h2 className="heading-md text-navy mb-4">Logan Industries We Support</h2>
              <p className="body-lg text-charcoal/70">
                From industrial warehouses to residential developments, we've got Logan covered.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Warehouse & Logistics", desc: "Distribution centres, freight operations and logistics hubs throughout Logan" },
                { title: "Manufacturing", desc: "Production facilities, assembly operations and industrial plants" },
                { title: "Construction", desc: "Residential, commercial and infrastructure projects across the LGA" },
                { title: "Commercial Property", desc: "Office buildings, retail centres and commercial maintenance" },
                { title: "New Estates", desc: "Supporting builders in Logan's rapidly growing residential corridors" },
                { title: "Facilities Management", desc: "Ongoing maintenance and cleaning for commercial and industrial clients" }
              ].map((item) => (
                <div key={item.title} className="card-elevated">
                  <h3 className="font-heading font-bold text-navy text-lg mb-3">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suburbs */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-8 text-center">Logan Areas We Service</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {suburbs.map((suburb) => (
                <span key={suburb} className="px-4 py-2 bg-concrete rounded-full text-sm text-charcoal/70">
                  {suburb}
                </span>
              ))}
              <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                + All Logan suburbs
              </span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-12 text-center">Logan Labour Hire FAQs</h2>
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
              Fast Labour for Logan Projects
            </h2>
            <p className="body-lg text-concrete/70 mb-8 max-w-2xl mx-auto">
              Rapid deployment, skilled workers, management-led accountability.
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

export default Logan;
