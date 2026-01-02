import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Phone, Clock, Users, Building, Hammer } from "lucide-react";
import { PHONE_YANN, PHONE_YANN_HREF } from "@/lib/constants";

const GoldCoast = () => {
  const services = [
    { name: "Skilled Labour Hire", href: "/services#labour" },
    { name: "Carpenters", href: "/services#carpenters" },
    { name: "Commercial Cleaning", href: "/services#cleaning" },
    { name: "Demolition Crews", href: "/services#demolition" },
  ];

  const suburbs = [
    "Surfers Paradise", "Southport", "Broadbeach", "Burleigh Heads", "Robina", "Varsity Lakes",
    "Coomera", "Helensvale", "Nerang", "Ashmore", "Bundall", "Mudgeeraba", "Palm Beach",
    "Coolangatta", "Currumbin", "Tugun", "Miami", "Mermaid Beach", "Main Beach", "Hope Island"
  ];

  const faqs = [
    {
      question: "What makes Gold Coast labour hire different?",
      answer: "The Gold Coast construction and tourism sectors demand flexibility and quality. Our local workforce understands seasonal demands, high-rise projects and resort-standard expectations. We maintain a substantial Gold Coast-based team ready for rapid deployment."
    },
    {
      question: "Do you service northern Gold Coast?",
      answer: "Absolutely. We cover the entire Gold Coast corridor from Coolangatta to Coomera and Hope Island. Our workers are positioned across the coast for efficient site access."
    },
    {
      question: "Can you handle large construction projects?",
      answer: "Yes. We've supplied labour to major Gold Coast developments including high-rise residential, commercial precincts and infrastructure projects. We can scale from single workers to full crews."
    },
    {
      question: "What about body corporate and strata work?",
      answer: "We work extensively with property managers and body corporates across the Gold Coast, providing cleaning crews, grounds maintenance and general labour for residential and commercial complexes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Labour Hire Gold Coast | Skilled Workers & Trades | Precision Site Solutions</title>
        <meta
          name="description"
          content="Gold Coast labour hire specialists. Skilled labourers, carpenters, demolition crews and building cleaners. Local workforce, fast response, compliance-first approach."
        />
        <meta name="keywords" content="labour hire gold coast, gold coast labour hire, skilled labour gold coast, construction workers gold coast, cleaning labour gold coast" />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/locations/gold-coast" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Precision Site Solutions - Gold Coast",
            "description": "Labour hire services on the Gold Coast, Queensland",
            "url": "https://precisionsitesolutions.com.au/locations/gold-coast",
            "telephone": PHONE_YANN,
            "areaServed": {
              "@type": "City",
              "name": "Gold Coast",
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-up">
                <div className="inline-flex items-center gap-2 badge-gold mb-6">
                  <MapPin size={16} />
                  Gold Coast, Queensland
                </div>
                <h1 className="heading-xl text-concrete mb-6">
                  Labour Hire <span className="text-gradient-gold">Gold Coast</span>
                </h1>
                <p className="body-lg text-concrete/70 mb-8">
                  Australia's fastest-growing city needs workforce solutions that keep pace. 
                  From Coolangatta to Coomera, we supply skilled workers across the entire 
                  Gold Coast corridor with local knowledge and rapid response.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="xl" asChild>
                    <Link to="/contact">
                      Request Gold Coast Labour
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
                    <div className="text-2xl font-heading font-bold text-concrete">Same Day</div>
                    <div className="text-sm text-concrete/60">Often Available</div>
                  </div>
                  <div className="card-dark p-6">
                    <Users className="w-8 h-8 text-gold mb-3" />
                    <div className="text-2xl font-heading font-bold text-concrete">200+</div>
                    <div className="text-sm text-concrete/60">Local Workers</div>
                  </div>
                  <div className="card-dark p-6">
                    <Building className="w-8 h-8 text-gold mb-3" />
                    <div className="text-2xl font-heading font-bold text-concrete">60+</div>
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

        {/* Gold Coast Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3">
                <h2 className="heading-md text-navy mb-6">
                  Gold Coast's Local Labour Hire Experts
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/70">
                  <p className="mb-4">
                    The Gold Coast is experiencing unprecedented growth. High-rise developments, 
                    infrastructure projects, commercial precincts and residential communities 
                    are transforming the city. Behind every successful project is a reliable 
                    workforce — and that's where we come in.
                  </p>
                  <p className="mb-4">
                    We're not just another labour hire company servicing the Gold Coast from 
                    Brisbane. We're embedded in the Gold Coast community with local workers 
                    who understand the unique demands of coastal construction, tourism-driven 
                    timelines and the standards expected on the Coast.
                  </p>
                  <p>
                    Whether you're building the next iconic tower in Surfers Paradise, managing 
                    a body corporate in Broadbeach or running a commercial facility in Robina, 
                    our team delivers workers who are site-ready, compliant and backed by 
                    management-level accountability.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="card-elevated sticky top-32">
                  <h3 className="font-heading font-bold text-navy text-xl mb-6">
                    Gold Coast Services
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
                      Get Gold Coast Quote
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Most Requested */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-navy mb-4">Most Requested on the Gold Coast</h2>
              <p className="body-lg text-charcoal/70">
                These are the workforce solutions Gold Coast clients request most frequently.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "High-Rise Construction Labour", desc: "Experienced workers for vertical construction projects with safety credentials and high-rise experience" },
                { title: "Post-Construction Cleaning", desc: "Builder's cleans and handover cleaning for residential and commercial developments" },
                { title: "Body Corporate Maintenance", desc: "Ongoing grounds maintenance, cleaning and general labour for strata complexes" },
                { title: "Commercial Fit-Out Support", desc: "Skilled labourers and trades for retail, office and hospitality fit-outs" },
                { title: "Event & Venue Labour", desc: "Setup, pack-down and operational support for Gold Coast events and venues" },
                { title: "Resort & Hotel Support", desc: "Maintenance and cleaning crews familiar with hospitality standards" }
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
            <h2 className="heading-md text-navy mb-8 text-center">Gold Coast Areas We Service</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {suburbs.map((suburb) => (
                <span key={suburb} className="px-4 py-2 bg-concrete rounded-full text-sm text-charcoal/70">
                  {suburb}
                </span>
              ))}
              <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                + Entire Gold Coast
              </span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-12 text-center">Gold Coast Labour Hire FAQs</h2>
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
              Get Gold Coast Workers Tomorrow
            </h2>
            <p className="body-lg text-concrete/70 mb-8 max-w-2xl mx-auto">
              Local workforce, rapid response, management-led delivery. Experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour Now
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href={PHONE_YANN_HREF}>
                  <Phone className="mr-2" size={20} />
                  Call {PHONE_YANN}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default GoldCoast;
