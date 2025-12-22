import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Phone, Clock, Users } from "lucide-react";

const TweedHeads = () => {
  const services = [
    { name: "Skilled Labour Hire", href: "/services#labour" },
    { name: "Carpenters", href: "/services#carpenters" },
    { name: "Painters", href: "/services#painters" },
    { name: "Commercial Cleaning", href: "/services#cleaning" },
    { name: "Landscaping & Grounds", href: "/services#landscaping" },
  ];

  const areas = [
    "Tweed Heads", "Tweed Heads South", "Tweed Heads West", "Banora Point", "Terranora",
    "Bilambil Heights", "Cobaki", "Chinderah", "Kingscliff", "Fingal Head", "Casuarina", "Pottsville"
  ];

  const faqs = [
    {
      question: "Do you hold NSW labour hire licences?",
      answer: "Yes. We maintain both Queensland and New South Wales labour hire licences, allowing us to operate seamlessly across the Tweed region regardless of which side of the border your site is located."
    },
    {
      question: "How do you handle cross-border projects?",
      answer: "The Tweed is unique in straddling the QLD/NSW border. Our compliance systems handle both jurisdictions, and our workers understand the regulatory differences between the two states."
    },
    {
      question: "Can you service Kingscliff and surrounding areas?",
      answer: "Absolutely. We cover the entire Tweed Shire including Kingscliff, Casuarina, Pottsville, Murwillumbah and all surrounding localities."
    },
    {
      question: "What industries are you strongest in around Tweed?",
      answer: "We work extensively with residential builders, commercial developers, property managers and facilities teams across the Tweed. The region's growth means strong demand for construction labour, cleaning crews and maintenance workers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Labour Hire Tweed Heads | Cross-Border Workforce | The Gold Hire Company</title>
        <meta
          name="description"
          content="Labour hire Tweed Heads and Tweed Shire. QLD and NSW licensed. Skilled labourers, trades, cleaning and grounds maintenance across the Tweed region."
        />
        <meta name="keywords" content="labour hire tweed heads, tweed shire labour hire, cross border labour hire, construction workers tweed, kingscliff labour hire" />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/locations/tweed-heads" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Gold Hire Company - Tweed Heads",
            "description": "Cross-border labour hire services in Tweed Heads region",
            "url": "https://thegoldhirecompany.com.au/locations/tweed-heads",
            "telephone": "04XX XXX XXX",
            "areaServed": {
              "@type": "City",
              "name": "Tweed Heads"
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
                Tweed Heads & Tweed Shire
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Labour Hire <span className="text-gradient-gold">Tweed Heads</span>
              </h1>
              <p className="body-lg text-concrete/70 mb-8">
                Cross-border labour hire expertise. Licensed in both Queensland and 
                New South Wales, we service the entire Tweed region from Coolangatta 
                to Kingscliff and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">
                    Request Tweed Labour
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Speak With a Manager</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-concrete/70 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  QLD Licensed
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  NSW Licensed
                </div>
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
                  Cross-Border Labour Hire Specialists
                </h2>
                <div className="prose prose-lg max-w-none text-charcoal/70">
                  <p className="mb-4">
                    The Tweed region sits at the junction of Queensland and New South Wales, 
                    creating unique challenges for businesses needing compliant labour. Many 
                    labour hire companies struggle with cross-border compliance — we don't.
                  </p>
                  <p className="mb-4">
                    We hold valid labour hire licences in both states and understand the 
                    regulatory nuances that apply to cross-border work. Whether your site 
                    is in Tweed Heads (NSW), Coolangatta (QLD) or anywhere in between, 
                    we've got you covered.
                  </p>
                  <p>
                    The Tweed's population boom is driving massive construction activity. 
                    From new residential estates in Kingscliff to commercial developments 
                    in Tweed City, our workforce is ready to support your projects with 
                    the professionalism and communication you expect.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="card-elevated sticky top-32">
                  <h3 className="font-heading font-bold text-navy text-xl mb-6">
                    Tweed Services
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
                      Get Tweed Quote
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-8 text-center">Tweed Areas We Service</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span key={area} className="px-4 py-2 bg-card rounded-full text-sm text-charcoal/70">
                  {area}
                </span>
              ))}
              <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                + Entire Tweed Shire
              </span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-md text-navy mb-12 text-center">Tweed Heads Labour Hire FAQs</h2>
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
              Cross-Border Compliance Made Simple
            </h2>
            <p className="body-lg text-concrete/70 mb-8 max-w-2xl mx-auto">
              Licensed in both QLD and NSW. Get compliant labour for your Tweed projects.
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

export default TweedHeads;
