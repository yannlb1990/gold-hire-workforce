import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileCheck, Shield, ExternalLink, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function LabourHireLicensing() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Labour Hire Licensing | Precision Site Solutions",
    description: "Licensed labour hire provider compliant with QLD Labour Hire Licensing Act and NSW requirements.",
  };

  return (
    <Layout>
      <Helmet>
        <title>Labour Hire Licensing | Licensed Provider | Precision Site Solutions</title>
        <meta name="description" content="Licensed labour hire provider compliant with Queensland Labour Hire Licensing Act. Operating legally across QLD and NSW." />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/labour-hire-licensing" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="badge-gold mb-6">
              <FileCheck className="w-4 h-4 mr-2" />
              Licensed Provider
            </div>
            <h1 className="heading-xl text-concrete mb-6">
              Labour Hire <span className="text-gradient-gold">Licensing</span>
            </h1>
            <p className="body-lg text-concrete/80">
              We operate as a licensed labour hire provider in compliance with 
              Queensland's Labour Hire Licensing Act and meet all regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* QLD Licensing */}
      <section className="py-16 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md text-navy mb-6">Queensland Labour Hire Licence</h2>
              <p className="text-charcoal/70 mb-6">
                Precision Site Solutions holds a current Queensland Labour Hire Licence 
                as required under the Labour Hire Licensing Act 2017. This licence 
                demonstrates our commitment to:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-charcoal/70">
                    Meeting all financial obligations including superannuation and tax
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-charcoal/70">
                    Complying with workplace health and safety laws
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-charcoal/70">
                    Maintaining appropriate workers compensation insurance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-charcoal/70">
                    Operating with integrity and meeting fit and proper person requirements
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-10 h-10 text-gold" />
                </div>
                <h3 className="heading-sm text-navy">QLD Licence Status</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-charcoal/70">Status</span>
                  <span className="font-semibold text-gold">Active</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-charcoal/70">Jurisdiction</span>
                  <span className="font-semibold text-navy">Queensland</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-charcoal/70">Compliance</span>
                  <span className="font-semibold text-gold">✓ Current</span>
                </div>
              </div>
              <a
                href="https://www.labourhire.qld.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-bright mt-6"
              >
                Verify on QLD Government Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NSW Operations */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-concrete text-center mb-6">
              NSW Operations
            </h2>
            <p className="text-concrete/80 text-center mb-8">
              While New South Wales does not currently have a labour hire licensing scheme, 
              we apply the same high standards across all our operations in NSW, including 
              our Byron Bay and Tweed Heads service areas.
            </p>
            <div className="bg-navy-light/50 rounded-2xl p-8 border border-steel-blue/20">
              <h3 className="heading-sm text-concrete mb-4">Our NSW Commitment</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-concrete/80">
                    Full compliance with NSW workplace laws and regulations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-concrete/80">
                    Workers compensation coverage through icare NSW scheme
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-concrete/80">
                    Same screening, safety and compliance standards as QLD operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-navy text-center mb-12">
            Why Licensing Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-elevated">
              <h3 className="heading-sm text-navy mb-3">For Host Employers</h3>
              <p className="text-charcoal/70">
                Using a licensed provider protects your business. In Queensland, 
                using an unlicensed labour hire provider can result in significant penalties. 
                Our licence gives you confidence you're working with a compliant operator.
              </p>
            </div>
            <div className="card-elevated">
              <h3 className="heading-sm text-navy mb-3">For Workers</h3>
              <p className="text-charcoal/70">
                Licensed providers must meet strict standards around pay, superannuation, 
                and workplace safety. This protects worker rights and ensures fair treatment 
                on every placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/compliance"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-concrete rounded-lg hover:bg-navy-light transition-colors"
            >
              <Shield className="w-5 h-5" />
              Compliance & Safety
            </Link>
            <Link
              to="/insurances"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-concrete rounded-lg hover:bg-navy-light transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Insurance Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-lg text-navy mb-4">Questions About Licensing?</h2>
          <p className="body-lg text-navy/80 mb-8 max-w-2xl mx-auto">
            We're happy to provide licence verification or discuss compliance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="navy" size="lg" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-navy text-navy hover:bg-navy hover:text-concrete">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
