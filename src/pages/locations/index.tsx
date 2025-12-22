import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Clock, CheckCircle2 } from "lucide-react";

const locations = [
  {
    name: "Brisbane",
    slug: "brisbane",
    description: "Queensland's capital. CBD, inner city, north, south and western suburbs.",
    workers: "150+",
    highlights: ["CBD High-Rises", "Commercial Projects", "Industrial Precincts"]
  },
  {
    name: "Gold Coast",
    slug: "gold-coast",
    description: "From Coolangatta to Coomera. High-rise, residential, commercial and tourism.",
    workers: "200+",
    highlights: ["High-Rise Construction", "Resort Maintenance", "Body Corporate"]
  },
  {
    name: "Tweed Heads",
    slug: "tweed-heads",
    description: "Cross-border coverage. QLD and NSW licensed for seamless service.",
    workers: "50+",
    highlights: ["Cross-Border Projects", "Residential Growth", "Commercial Cleaning"]
  },
  {
    name: "Byron Bay",
    slug: "byron-bay",
    description: "Boutique builds, hospitality and eco-development in Byron Shire.",
    workers: "40+",
    highlights: ["Boutique Residential", "Hospitality Venues", "Events & Festivals"]
  },
  {
    name: "Logan",
    slug: "logan",
    description: "Industrial heartland. Warehouses, manufacturing, new estates.",
    workers: "80+",
    highlights: ["Warehouse & Logistics", "Manufacturing", "New Estates"]
  },
  {
    name: "Ipswich",
    slug: "ipswich",
    description: "Western corridor growth. Springfield, Ripley and established industry.",
    workers: "60+",
    highlights: ["Springfield Growth", "Infrastructure", "Industrial Heritage"]
  }
];

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Labour Hire Locations | Brisbane, Gold Coast, Byron Bay | The Gold Hire Company</title>
        <meta
          name="description"
          content="Labour hire across South-East Queensland and Northern NSW. Brisbane, Gold Coast, Tweed Heads, Byron Bay, Logan and Ipswich. Local workers, fast response."
        />
        <meta name="keywords" content="labour hire brisbane, labour hire gold coast, labour hire byron bay, labour hire tweed heads, labour hire logan, labour hire ipswich, skilled labour hire seq" />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/locations" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-20 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl opacity-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                <MapPin size={16} />
                Service Areas
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Labour Hire Across{" "}
                <span className="text-gradient-gold">South-East Queensland & Northern NSW</span>
              </h1>
              <p className="body-lg text-concrete/70 mb-8">
                Local workers, local knowledge, rapid response. We maintain skilled 
                workforce pools across six key regions, ensuring you get quality 
                workers when and where you need them.
              </p>
              <div className="flex flex-wrap gap-6 text-concrete/70 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold" />
                  580+ Workers
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" />
                  24hr Response
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  QLD & NSW Licensed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Link
                  key={location.slug}
                  to={`/locations/${location.slug}`}
                  className="location-card group opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="heading-sm text-concrete group-hover:text-gold transition-colors">
                        {location.name}
                      </h2>
                      <div className="flex items-center gap-2 text-gold text-sm mt-1">
                        <Users size={14} />
                        {location.workers} Workers
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2" />
                  </div>
                  <p className="text-concrete/70 mb-6">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-steel-blue/30 text-concrete/80"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map Placeholder */}
        <section className="py-24 section-alternate">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-navy mb-4">Complete SEQ & Northern NSW Coverage</h2>
              <p className="body-lg text-charcoal/70">
                From Ipswich in the west to Byron Bay in the south, Brisbane in the north 
                to the Gold Coast — we've got South-East Queensland and Northern NSW covered.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-elevated text-center p-8">
                <div className="text-4xl font-heading font-bold text-gold mb-2">QLD</div>
                <div className="text-navy font-medium">Queensland Licensed</div>
                <div className="text-charcoal/60 text-sm mt-2">Full compliance with QLD labour hire licensing</div>
              </div>
              <div className="card-elevated text-center p-8">
                <div className="text-4xl font-heading font-bold text-gold mb-2">NSW</div>
                <div className="text-navy font-medium">New South Wales Licensed</div>
                <div className="text-charcoal/60 text-sm mt-2">Cross-border capability for Tweed & Byron</div>
              </div>
              <div className="card-elevated text-center p-8 md:col-span-2 lg:col-span-1">
                <div className="text-4xl font-heading font-bold text-gold mb-2">24hr</div>
                <div className="text-navy font-medium">Rapid Response</div>
                <div className="text-charcoal/60 text-sm mt-2">Same-day placement often available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-dark">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="heading-md text-concrete mb-4">
              Get Workers in Your Area
            </h2>
            <p className="body-lg text-concrete/70 mb-8 max-w-2xl mx-auto">
              Tell us where your site is and we'll have the right workers ready for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour Now
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Locations;
