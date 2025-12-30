import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, CheckCircle, FileCheck, Users, HardHat, 
  ClipboardCheck, Phone, ArrowRight, BadgeCheck 
} from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function Compliance() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Compliance & Safety | Precision Site Solutions",
    description: "Our commitment to WHS, worker screening, and regulatory compliance in construction labour hire.",
  };

  return (
    <Layout>
      <Helmet>
        <title>Compliance & Safety | Labour Hire Standards | Precision Site Solutions</title>
        <meta name="description" content="Learn about our commitment to WHS, worker screening, induction verification and regulatory compliance. Fully licensed and insured labour hire." />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/compliance" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="badge-gold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Compliance-First
            </div>
            <h1 className="heading-xl text-concrete mb-6">
              Compliance & Safety <span className="text-gradient-gold">Standards</span>
            </h1>
            <p className="body-lg text-concrete/80">
              We take compliance seriously. From worker screening to WHS protocols, 
              every placement meets the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Key Compliance Areas */}
      <section className="py-16 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="heading-md text-navy text-center mb-12">Our Compliance Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elevated">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-3">Licence Verification</h3>
              <p className="text-charcoal/70">
                Every worker's White Card, tickets and licences are verified before placement. 
                We maintain copies on file and check expiry dates proactively.
              </p>
            </div>

            <div className="card-elevated">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-3">Worker Screening</h3>
              <p className="text-charcoal/70">
                All workers complete our screening process including reference checks, 
                skills assessment and reliability history review.
              </p>
            </div>

            <div className="card-elevated">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <HardHat className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-3">PPE Standards</h3>
              <p className="text-charcoal/70">
                Workers arrive with appropriate PPE for their role. We verify PPE 
                condition and compliance with site requirements.
              </p>
            </div>

            <div className="card-elevated">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-3">Induction Support</h3>
              <p className="text-charcoal/70">
                We ensure workers complete site-specific inductions and understand 
                your WHS requirements before starting work.
              </p>
            </div>

            <div className="card-elevated">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-3">Drug & Alcohol Policy</h3>
              <p className="text-charcoal/70">
                Zero tolerance policy. Workers understand they may be subject to 
                testing and must maintain fitness for work.
              </p>
            </div>

            <div className="card-elevated">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <BadgeCheck className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-sm text-navy mb-3">Continuous Improvement</h3>
              <p className="text-charcoal/70">
                Regular performance reviews, feedback collection and training 
                updates ensure ongoing compliance excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHS Commitment */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md text-concrete mb-6">Our WHS Commitment</h2>
              <p className="text-concrete/80 mb-6">
                Workplace health and safety isn't just a box to tick — it's embedded in 
                everything we do. We believe every worker deserves to go home safe every day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-concrete/80">
                    Workers are briefed on WHS expectations before every placement
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-concrete/80">
                    Incident reporting systems with clear escalation procedures
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-concrete/80">
                    Regular safety communications and toolbox talk support
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-concrete/80">
                    Workers empowered to stop work if unsafe conditions exist
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-navy-light/50 rounded-2xl p-8 border border-steel-blue/20">
              <h3 className="heading-sm text-concrete mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-gold">100%</p>
                  <p className="text-concrete/70 text-sm">White Card Verified</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold">24hr</p>
                  <p className="text-concrete/70 text-sm">Incident Response</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold">0</p>
                  <p className="text-concrete/70 text-sm">Tolerance Policy</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold">★★★★★</p>
                  <p className="text-concrete/70 text-sm">Safety Focus</p>
                </div>
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
              to="/insurances"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-concrete rounded-lg hover:bg-navy-light transition-colors"
            >
              <Shield className="w-5 h-5" />
              View Our Insurances
            </Link>
            <Link
              to="/labour-hire-licensing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-concrete rounded-lg hover:bg-navy-light transition-colors"
            >
              <FileCheck className="w-5 h-5" />
              Labour Hire Licensing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="heading-lg text-navy mb-4">Questions About Compliance?</h2>
          <p className="body-lg text-navy/80 mb-8 max-w-2xl mx-auto">
            We're happy to discuss our compliance processes and provide documentation as needed.
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
