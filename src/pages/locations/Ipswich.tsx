import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

const Ipswich = () => {
  const services = [
    { name: "Skilled Labour Hire", href: "/services#labour" },
    { name: "Carpenters", href: "/services#carpenters" },
    { name: "Commercial Cleaning", href: "/services#cleaning" },
    { name: "Demolition Crews", href: "/services#demolition" },
  ];

  const suburbs = [
    "Ipswich CBD", "Booval", "Bundamba", "Goodna", "Redbank Plains", "Springfield",
    "Springfield Lakes", "Ripley", "Augustine Heights", "Brookwater", "Yamanto",
    "Brassall", "North Ipswich", "Silkstone", "Raceview", "Karalee"
  ];

  const faqs = [
    {
      question: "How do you service Ipswich's growing western corridor?",
      answer: "We have strong coverage across Ipswich's western growth areas including Ripley, Springfield, Augustine Heights and surrounding new estates. Our workforce expands with the region's development."
    },
    {
      question: "Do you work with Ipswich industrial clients?",
      answer: "Yes. We supply labour to Ipswich's established industrial areas including Bundamba, Swanbank and Wulkuraka, as well as newer industrial developments throughout the corridor."
    },
    {
      question: "What about Springfield and surrounds?",
      answer: "Springfield's growth is remarkable. We service Springfield Central, Springfield Lakes and surrounding developments with construction labour, cleaning crews and maintenance workers."
    },
    {
      question: "Can you supply for infrastructure projects?",
      answer: "Absolutely. Ipswich is experiencing significant infrastructure investment and we supply labour for civil, road and rail-adjacent projects throughout the region."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Labour Hire Ipswich | Western Corridor Workers | Precision Site Solutions</title>
        <meta
          name="description"
          content="Labour hire Ipswich and western corridor. Skilled labourers for construction, industrial and commercial projects in Ipswich, Springfield and surrounds."
        />
        <meta name="keywords" content="labour hire ipswich, ipswich workers, springfield labour hire, western corridor labour, construction workers ipswich" />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/locations/ipswich" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Precision Site Solutions - Ipswich",
            "description": "Labour hire services in Ipswich and Western Corridor, Queensland",
            "url": "https://precisionsitesolutions.com.au/locations/ipswich",
            "telephone": "04XX XXX XXX",
            "areaServed": {
              "@type": "City",
              "name": "Ipswich",
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
                Ipswich & Western Corridor
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Labour Hire <span className="text-gradient-gold">Ipswich</span>
              </h1>
              <p className="body-lg text-concrete/70 mb-8">
                Queensland's western growth corridor demands workforce solutions 
                that keep pace. From established Ipswich industry to booming 
                Springfield developments, we supply skilled workers across the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">
                    Request Ipswich Labour
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
                  Powering Ipswich's Growth
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/70">
                  <p className="mb-4">
                    Ipswich and its western corridor represent one of Australia's fastest-growing 
                    regions. Springfield's emergence as a major urban centre, Ripley Valley's 
                    residential expansion and Ipswich's industrial heritage create diverse 
                    workforce demands.
                  </p>
                  <p className="mb-4">
                    We've built strong relationships across the Ipswich region, from heritage 
                    CBD projects to new estate construction, from established manufacturing 
                    to emerging industrial precincts. Our workers know the region and 
                    understand what Ipswich clients expect.
                  </p>
                  <p>
                    With significant infrastructure investment transforming the corridor, 
                    including Cross River Rail connections and road upgrades, reliable 
                    workforce supply is essential. We're positioned to support this growth.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="card-elevated sticky top-32">
                  <h3 className="font-heading font-bold text-navy text-xl mb-6">
                    Ipswich Services
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
                      Get Ipswich Quote
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-navy mb-4">Ipswich Industries We Support</h2>
              <p className="body-lg text-charcoal/70">
                From traditional industry to new urban development, we cover Ipswich's diverse economy.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Residential Construction", desc: "New estates in Ripley, Springfield Lakes, Augustine Heights and established suburbs" },
                { title: "Commercial Development", desc: "Office, retail and mixed-use projects in Springfield Central and Ipswich CBD" },
                { title: "Industrial & Manufacturing", desc: "Established industrial precincts and new logistics hubs across the region" },
                { title: "Infrastructure", desc: "Civil works, road construction and rail-adjacent projects" },
                { title: "Education & Health", desc: "Supporting construction and maintenance at major institutions" },
                { title: "Property Management", desc: "Cleaning, grounds and maintenance for commercial portfolios" }
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
            <h2 className="heading-md text-navy mb-8 text-center">Ipswich Areas We Service</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {suburbs.map((suburb) => (
                <span key={suburb} className="px-4 py-2 bg-concrete rounded-full text-sm text-charcoal/70">
                  {suburb}
                </span>
              ))}
              <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                + Entire Western Corridor
              </span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-12 text-center">Ipswich Labour Hire FAQs</h2>
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
              Western Corridor Workforce Solutions
            </h2>
            <p className="body-lg text-concrete/70 mb-8 max-w-2xl mx-auto">
              From Ipswich to Springfield and beyond — skilled workers, fast deployment.
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

export default Ipswich;
