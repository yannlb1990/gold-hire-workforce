import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { EmployerShortForm } from "@/components/forms/EmployerShortForm";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, ArrowRight, HardHat } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

interface MoneyPageProps {
  location: {
    readonly name: string;
    readonly slug: string;
    readonly suburbs: readonly string[];
  };
  trade: {
    readonly name: string;
    readonly slug: string;
    readonly singularName: string;
  };
}

export function MoneyPageTemplate({ location, trade }: MoneyPageProps) {
  const pageTitle = `${trade.name} Labour Hire ${location.name} | Precision Site Solutions`;
  const pageDescription = `Hire experienced ${trade.name.toLowerCase()} in ${location.name}. Reliable, qualified workers available for short-term or ongoing placements. Call now for fast response.`;
  const canonicalUrl = `https://precisionsitesolutions.com.au/${location.slug}/${trade.slug}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${trade.name} Labour Hire ${location.name}`,
    description: pageDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Precision Site Solutions",
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    serviceType: `${trade.name} Labour Hire`,
  };

  const faqs = [
    {
      question: `How quickly can you supply ${trade.name.toLowerCase()} in ${location.name}?`,
      answer: `We can typically have qualified ${trade.name.toLowerCase()} on-site within 24-48 hours for urgent requirements in the ${location.name} area.`,
    },
    {
      question: `What qualifications do your ${trade.name.toLowerCase()} have?`,
      answer: `All our ${trade.name.toLowerCase()} hold current White Cards and relevant tickets. Many have trade qualifications or extensive industry experience.`,
    },
    {
      question: `Do you cover all suburbs in ${location.name}?`,
      answer: `Yes, we cover all suburbs including ${location.suburbs.slice(0, 4).join(", ")} and surrounding areas.`,
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${trade.name.toLowerCase()} ${location.name.toLowerCase()}, ${trade.name.toLowerCase()} hire ${location.name.toLowerCase()}, labour hire ${location.name.toLowerCase()}, construction workers ${location.name.toLowerCase()}`} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="badge-gold mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                {location.name}
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                {trade.name} Labour Hire in{" "}
                <span className="text-gradient-gold">{location.name}</span>
              </h1>
              <p className="body-lg text-concrete/80 mb-8">
                Need reliable {trade.name.toLowerCase()} for your {location.name} project? 
                We supply experienced, site-ready workers for short-term and ongoing placements.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>White Card certified workers</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>24-48 hour placement</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Fully insured and compliant</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Same-day replacement guarantee</span>
                </div>
              </div>

              <Button variant="hero" size="lg" asChild className="mb-4">
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE_NUMBER}
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="heading-sm text-foreground mb-2">
                Request {trade.name}
              </h2>
              <p className="text-muted-foreground mb-6">
                Tell us what you need. We'll call you back within an hour.
              </p>
              <EmployerShortForm defaultLocation={location.slug} defaultTrade={trade.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-navy text-center mb-4">
            {trade.name} Available Across {location.name}
          </h2>
          <p className="text-charcoal/70 text-center mb-8 max-w-2xl mx-auto">
            We supply {trade.name.toLowerCase()} to projects throughout the {location.name} region, 
            including these suburbs:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {location.suburbs.map((suburb) => (
              <span
                key={suburb}
                className="px-4 py-2 bg-card rounded-full text-sm text-charcoal border border-border"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-concrete text-center mb-12">
            Why Hire {trade.name} Through Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-dark text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-concrete mb-2">Quality Workers</h3>
              <p className="text-concrete/70">
                Every {trade.singularName.toLowerCase()} is screened for skills, 
                tickets and reliability before placement.
              </p>
            </div>
            <div className="card-dark text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-concrete mb-2">Fast Response</h3>
              <p className="text-concrete/70">
                Workers on-site within 24-48 hours. We understand construction timelines.
              </p>
            </div>
            <div className="card-dark text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-concrete mb-2">Local Knowledge</h3>
              <p className="text-concrete/70">
                We know {location.name} and can match workers who live nearby 
                for better reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elevated">
                <h3 className="heading-sm text-navy mb-2">{faq.question}</h3>
                <p className="text-charcoal/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={`/locations/${location.slug}`}
              className="text-navy hover:text-gold font-medium transition-colors"
            >
              All trades in {location.name} →
            </Link>
            <Link
              to={`/trades/${trade.slug}`}
              className="text-navy hover:text-gold font-medium transition-colors"
            >
              {trade.name} in all locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-lg text-navy mb-4">
            Ready to Hire {trade.name} in {location.name}?
          </h2>
          <p className="body-lg text-navy/80 mb-8 max-w-2xl mx-auto">
            Call now for same-day quotes and fast placement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="navy" size="lg" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-navy text-navy hover:bg-navy hover:text-concrete">
              <Link to="/request-labour">
                Submit Request Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
