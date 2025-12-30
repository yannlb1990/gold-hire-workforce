import { Link } from "react-router-dom";
import { ArrowRight, HardHat, FileCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: HardHat,
    title: "Professional Environment",
    description: "Work with a team that values communication, safety and professionalism.",
  },
  {
    icon: FileCheck,
    title: "Clear Expectations",
    description: "SOPs, training tools and proper handovers. Know exactly what's expected.",
  },
  {
    icon: Users,
    title: "Consistent Work",
    description: "Regular shifts with quality clients. Build your career, not just chase jobs.",
  },
];

export function CandidateCTASection() {
  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 badge-gold mb-6">
              Join Our Workforce
            </div>
            <h2 className="heading-lg text-concrete mb-6">
              Looking for{" "}
              <span className="text-gradient-gold">Consistent Work?</span>
            </h2>
            <p className="body-lg text-concrete/70 mb-8">
              Precision Site Solutions connects skilled workers with quality clients across 
              Gold Coast, Brisbane and Byron Bay. Join our team and experience a 
              communication-led, professional work environment.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-concrete mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-concrete/60 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gold" size="xl" asChild>
              <Link to="/careers">
                Apply to Work With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="card-dark p-8 lg:p-10">
              <h3 className="text-2xl font-heading font-bold text-concrete mb-6">
                What We Offer
              </h3>
              <ul className="space-y-4">
                {[
                  "Competitive pay rates",
                  "Regular shift availability",
                  "Work across multiple industries",
                  "Training and development",
                  "Clear communication from management",
                  "Safe work environments",
                  "Weekly pay cycles",
                  "Career growth opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-concrete/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl border border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
