import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, FileText, Phone, ArrowRight } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function Insurances() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Insurance Coverage | Precision Site Solutions",
    description: "Comprehensive insurance coverage for labour hire including public liability, workers compensation, and professional indemnity.",
  };

  return (
    <Layout>
      <Helmet>
        <title>Insurance Coverage | Labour Hire Insurance | Precision Site Solutions</title>
        <meta name="description" content="Fully insured labour hire with public liability, workers compensation and professional indemnity coverage. Certificates available on request." />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/insurances" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="badge-gold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Fully Insured
            </div>
            <h1 className="heading-xl text-concrete mb-6">
              Comprehensive <span className="text-gradient-gold">Insurance Coverage</span>
            </h1>
            <p className="body-lg text-concrete/80">
              Peace of mind for you and your projects. We maintain comprehensive 
              insurance coverage that meets industry standards and client requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-navy text-center mb-12">Our Insurance Coverage</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-elevated">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-navy text-center mb-4">Public Liability</h3>
              <p className="text-charcoal/70 text-center mb-4">
                Comprehensive public liability insurance to protect against third-party 
                claims for personal injury or property damage.
              </p>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">$20M</p>
                <p className="text-sm text-charcoal/60">Coverage</p>
              </div>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-navy text-center mb-4">Workers Compensation</h3>
              <p className="text-charcoal/70 text-center mb-4">
                All workers are covered by workers compensation insurance as required 
                by law in QLD and NSW jurisdictions.
              </p>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">100%</p>
                <p className="text-sm text-charcoal/60">Workers Covered</p>
              </div>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-gold" />
              </div>
              <h3 className="heading-sm text-navy text-center mb-4">Professional Indemnity</h3>
              <p className="text-charcoal/70 text-center mb-4">
                Professional indemnity insurance to cover claims arising from 
                professional services and advice.
              </p>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">✓</p>
                <p className="text-sm text-charcoal/60">Fully Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Requests */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-concrete mb-6">Certificate of Currency</h2>
            <p className="text-concrete/80 mb-8">
              Need a copy of our insurance certificates for your records or prequalification? 
              We're happy to provide current certificates of currency on request.
            </p>
            <div className="space-y-4 text-left bg-navy-light/50 rounded-2xl p-8 border border-steel-blue/20">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-concrete/80">
                  Certificates provided within 24 hours of request
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-concrete/80">
                  Named insured certificates available for major projects
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-concrete/80">
                  Coverage summaries available for prequalification submissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/compliance"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-concrete rounded-lg hover:bg-navy-light transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Compliance & Safety
            </Link>
            <Link
              to="/labour-hire-licensing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-concrete rounded-lg hover:bg-navy-light transition-colors"
            >
              <FileText className="w-5 h-5" />
              Labour Hire Licensing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-lg text-navy mb-4">Need Insurance Certificates?</h2>
          <p className="body-lg text-navy/80 mb-8 max-w-2xl mx-auto">
            Get in touch and we'll send you current certificates of currency.
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
                Request Certificates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
