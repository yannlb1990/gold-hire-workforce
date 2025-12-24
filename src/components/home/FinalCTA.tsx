import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gold relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 stripe-accent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-xl text-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="body-xl text-navy/80 mb-10">
            Whether you need workers tomorrow or you're planning ahead, 
            we're here to help. Get in touch for a no-obligation chat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="navy" size="xl" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              asChild 
              className="border-navy text-navy hover:bg-navy hover:text-concrete"
            >
              <Link to="/request-labour">
                Request Labour Online
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="text-navy/60 text-sm mt-8">
            Response within 1 hour during business hours
          </p>
        </div>
      </div>
    </section>
  );
}
