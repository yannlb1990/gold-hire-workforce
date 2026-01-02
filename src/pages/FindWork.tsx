import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, HardHat, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { WorkerRegistrationForm } from "@/components/forms/WorkerRegistrationForm";
import { PHONE_TOBI, PHONE_TOBI_HREF } from "@/lib/constants";

export default function FindWork() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Construction Labour - Multiple Positions",
    description: "Join our team of skilled construction workers. Carpenters, labourers, demolition crews and building cleaners needed across Gold Coast, Brisbane and Byron Bay.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Precision Site Solutions",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "QLD",
        addressCountry: "AU",
      },
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>Find Construction Work | Join Our Workforce | Precision Site Solutions</title>
        <meta name="description" content="Looking for construction work in Gold Coast, Brisbane or Byron Bay? Register with Precision Site Solutions for regular shifts and great rates." />
        <meta name="keywords" content="construction jobs gold coast, labour hire jobs brisbane, find construction work, labourer jobs seq, carpenter jobs gold coast" />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/find-work" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Find Construction Work | Join Our Workforce | Precision Site Solutions" />
        <meta property="og:description" content="Looking for construction work in Gold Coast, Brisbane or Byron Bay? Register with Precision Site Solutions for regular shifts and great rates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://precisionsitesolutions.com.au/find-work" />
        <meta property="og:image" content="https://precisionsitesolutions.com.au/og-image.jpg" />
        <meta property="og:site_name" content="Precision Site Solutions" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Find Construction Work | Precision Site Solutions" />
        <meta name="twitter:description" content="Looking for construction work in Gold Coast, Brisbane or Byron Bay? Register for regular shifts." />
        <meta name="twitter:image" content="https://precisionsitesolutions.com.au/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="badge-gold mb-6">
                <HardHat className="w-4 h-4 mr-2" />
                Now Recruiting
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Find Construction Work in SEQ & Northern NSW
              </h1>
              <p className="body-lg text-concrete/80 mb-8">
                Looking for regular shifts with reliable pay? Register with us and get access to 
                construction jobs across Gold Coast, Brisbane, Logan, Ipswich and Byron Bay.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Weekly pay, every week</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Variety of sites and projects</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Respect on every site</span>
                </div>
                <div className="flex items-center gap-3 text-concrete">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Support from our team</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-navy-light/30 rounded-xl p-4 border border-steel-blue/20 text-center">
                  <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-concrete text-sm">Gold Coast, Brisbane, Byron Bay +</p>
                </div>
                <div className="bg-navy-light/30 rounded-xl p-4 border border-steel-blue/20 text-center">
                  <Calendar className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-concrete text-sm">Flexible schedules available</p>
                </div>
                <div className="bg-navy-light/30 rounded-xl p-4 border border-steel-blue/20 text-center">
                  <HardHat className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-concrete text-sm">All trades welcome</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="heading-sm text-foreground mb-2">Register Your Interest</h2>
              <p className="text-muted-foreground mb-6">Tell us about your skills and availability.</p>
              <WorkerRegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-16 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-navy text-center mb-4">What We're Looking For</h2>
          <p className="text-charcoal/70 text-center mb-12 max-w-2xl mx-auto">
            We value reliability, attitude and skill. If you show up on time, work hard and 
            communicate well, you'll fit right in.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-elevated text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-2">White Card</h3>
              <p className="text-charcoal/70">You'll need a current White Card to work on construction sites in QLD and NSW.</p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-2">Own PPE</h3>
              <p className="text-charcoal/70">Basic PPE including steel cap boots, high-vis, hard hat and safety glasses.</p>
            </div>
            <div className="card-elevated text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-2">Reliable Transport</h3>
              <p className="text-charcoal/70">Ability to get to sites on time. Driver's licence preferred but not always required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-lg text-navy mb-4">Got Questions?</h2>
          <p className="body-lg text-navy/80 mb-8 max-w-2xl mx-auto">
            Give us a call to chat about opportunities and how we work.
          </p>
          <Button variant="navy" size="lg" asChild>
            <a href={PHONE_TOBI_HREF}>
              <Phone className="mr-2 h-5 w-5" />
              Call {PHONE_TOBI}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
