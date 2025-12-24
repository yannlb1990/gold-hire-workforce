import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { EmployerShortForm } from "@/components/forms/EmployerShortForm";
import { PHONE_HREF, PHONE_NUMBER, TRADES, LOCATIONS } from "@/lib/constants";

export default function RequestLabour() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Labour Hire Request",
    provider: {
      "@type": "LocalBusiness",
      name: "The Gold Hire Company",
      telephone: PHONE_NUMBER,
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>Request Labour | Construction Labour Hire | The Gold Hire Company</title>
        <meta name="description" content="Request skilled construction labour for your project. Carpenters, labourers, concreters and more available across Gold Coast, Brisbane and Byron Bay." />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/request-labour" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="badge-gold mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Response Within Hours
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Request Skilled Labour for Your Project
              </h1>
              <p className="body-lg text-concrete/80 mb-8">
                Tell us what you need and we'll have screened, compliant workers ready for your site. 
                Most requests filled within 24-48 hours.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>All workers screened and verified</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>White Card and tickets checked</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Fast replacements if needed</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Competitive rates, no hidden fees</span>
                </div>
              </div>

              <div className="bg-navy-light/30 rounded-xl p-6 border border-steel-blue/20">
                <p className="text-concrete/80 mb-4">Prefer to speak with someone?</p>
                <Button variant="gold" size="lg" asChild>
                  <a href={PHONE_HREF}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {PHONE_NUMBER}
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="heading-sm text-foreground mb-2">Get Workers Fast</h2>
              <p className="text-muted-foreground mb-6">Fill out the form and we'll call you back within hours.</p>
              <EmployerShortForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trades We Supply */}
      <section className="py-16 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-navy text-center mb-8">Trades We Supply</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {TRADES.map((trade) => (
              <Link
                key={trade.id}
                to={`/trades/${trade.slug}`}
                className="bg-card rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-navy">{trade.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-concrete text-center mb-8">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                to={`/labour-hire-${location.slug}`}
                className="bg-navy-light/30 border border-steel-blue/20 rounded-lg p-4 text-center hover:border-gold/30 transition-colors"
              >
                <span className="font-medium text-concrete">{location.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
