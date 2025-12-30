import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock, Shield, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { EmployerShortForm } from "@/components/forms/EmployerShortForm";
import { LOCATIONS, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TradePageProps {
  trade: {
    readonly name: string;
    readonly slug: string;
    readonly description: string;
    readonly heroTitle: string;
    readonly heroSubtitle: string;
    readonly roles: readonly string[];
    readonly requirements: readonly string[];
    readonly industries: readonly string[];
    readonly faqs: readonly { readonly question: string; readonly answer: string }[];
  };
}

export function TradePageTemplate({ trade }: TradePageProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${trade.name} Labour Hire`,
    description: trade.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Precision Site Solutions",
      areaServed: ["Gold Coast", "Brisbane", "Byron Bay", "Logan", "Ipswich", "Tweed Heads"],
    },
    serviceType: "Labour Hire",
  };

  return (
    <Layout>
      <Helmet>
        <title>{trade.name} Labour Hire | Gold Coast, Brisbane, Byron Bay | Precision Site Solutions</title>
        <meta name="description" content={`Hire skilled ${trade.name.toLowerCase()} for construction projects across Gold Coast, Brisbane and Byron Bay. Screened, compliant workers with rapid mobilisation.`} />
        <meta name="keywords" content={`${trade.name.toLowerCase()} hire, ${trade.name.toLowerCase()} labour hire, ${trade.name.toLowerCase()} Gold Coast, ${trade.name.toLowerCase()} Brisbane`} />
        <link rel="canonical" href={`https://thegoldhirecompany.com.au/trades/${trade.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-gold mb-6">
                <Wrench className="w-4 h-4 mr-2" />
                {trade.name} Specialists
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                {trade.heroTitle}
              </h1>
              <p className="body-lg text-concrete/80 mb-8">
                {trade.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/request-labour">
                    Request {trade.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="navy" size="lg" asChild>
                  <a href={PHONE_HREF}>
                    <Phone className="mr-2 h-5 w-5" />
                    {PHONE_NUMBER}
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-concrete/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>Rapid Mobilisation</span>
                </div>
                <div className="flex items-center gap-2 text-concrete/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>Screened Workers</span>
                </div>
                <div className="flex items-center gap-2 text-concrete/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>Replacement Guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-navy-light/50 rounded-2xl p-8 border border-steel-blue/30">
              <h2 className="heading-sm text-concrete mb-6">Request {trade.name} Now</h2>
              <EmployerShortForm defaultTrade={trade.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details - Two Column Layout */}
      <section className="py-20 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Service Jobs */}
            <div>
              <h2 className="heading-lg text-navy mb-6">What We Deliver</h2>
              <p className="body-lg text-charcoal/70 mb-8">
                Our {trade.name.toLowerCase()} handle a wide range of responsibilities on site
              </p>
              <div className="space-y-4">
                {trade.roles.map((role, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-soft hover:shadow-elevated transition-all">
                    <div className="w-10 h-10 rounded-lg bg-earth-green/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-earth-green" />
                    </div>
                    <p className="text-charcoal font-medium flex-1 leading-relaxed">{role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Requirements & Industries */}
            <div className="space-y-8">
              {/* Tickets & Requirements */}
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h3 className="heading-sm text-navy mb-6">Tickets & Requirements</h3>
                <p className="text-charcoal/70 mb-6">
                  All our {trade.name.toLowerCase()} come with verified credentials and up-to-date tickets
                </p>
                <div className="space-y-4">
                  {trade.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3 text-charcoal">
                      <Shield className="w-5 h-5 text-earth-green flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Industries */}
              <div className="bg-gradient-green rounded-2xl p-8 shadow-green">
                <h3 className="heading-sm text-white mb-6">Best For These Industries</h3>
                <div className="space-y-4">
                  {trade.industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/90">
                      <Users className="w-5 h-5 text-white flex-shrink-0" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="py-20 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg text-navy mb-4">Hire {trade.name} By Location</h2>
            <p className="body-lg text-charcoal/70">
              We supply {trade.name.toLowerCase()} across South East Queensland and Northern NSW
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {LOCATIONS.filter(loc => ['gold-coast', 'brisbane', 'byron-bay'].includes(loc.slug)).map((location) => (
              <Link
                key={location.id}
                to={`/${location.slug}/${trade.slug}`}
                className="location-card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-gold" />
                  <h3 className="heading-sm text-concrete">{trade.name} {location.name}</h3>
                </div>
                <p className="text-concrete/70 mb-4">
                  Skilled {trade.name.toLowerCase()} available for hire in {location.name} and surrounding areas
                </p>
                <div className="flex items-center text-gold font-medium group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-concrete text-center mb-12">
              {trade.name} Hire FAQs
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {trade.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-navy-light/30 border border-steel-blue/20 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-concrete hover:text-gold text-left py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-concrete/70 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-lg text-navy mb-4">Ready to Hire {trade.name}?</h2>
          <p className="body-lg text-navy/80 mb-8 max-w-2xl mx-auto">
            Get skilled, screened {trade.name.toLowerCase()} on site within 24-48 hours. Call now or submit a request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="navy" size="lg" asChild>
              <Link to="/request-labour">
                Request Labour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-concrete" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
