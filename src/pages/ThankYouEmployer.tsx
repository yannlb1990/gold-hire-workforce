import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function ThankYouEmployer() {
  return (
    <Layout>
      <Helmet>
        <title>Request Received | Precision Site Solutions</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="min-h-[80vh] flex items-center section-dark">
        <div className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-gold" />
            </div>
            
            <h1 className="heading-xl text-concrete mb-6">
              Request Received!
            </h1>
            
            <p className="body-lg text-concrete/80 mb-8">
              Thanks for getting in touch. One of our team will call you shortly to discuss 
              your labour requirements and get your booking confirmed.
            </p>

            <div className="bg-navy-light/30 rounded-2xl p-8 border border-steel-blue/20 mb-8">
              <h2 className="heading-sm text-concrete mb-4">What Happens Next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-sm">1</span>
                  </div>
                  <p className="text-concrete/80">We'll review your request and match suitable workers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-sm">2</span>
                  </div>
                  <p className="text-concrete/80">A team member will call to confirm details and rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-sm">3</span>
                  </div>
                  <p className="text-concrete/80">Workers arrive on-site, ready to work</p>
                </div>
              </div>
            </div>

            <p className="text-concrete/70 mb-6">Need workers urgently?</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE_NUMBER}
                </a>
              </Button>
              <Button variant="navy" size="lg" asChild>
                <Link to="/">
                  Back to Home
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
