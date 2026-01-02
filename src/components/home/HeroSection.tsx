import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWorker from "@/assets/hero-worker.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroWorker}
          alt="Professional construction worker at industrial site"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="heading-xl text-concrete mb-6 opacity-0 animate-fade-up animation-delay-100">
            Labour Hire in Gold Coast, Brisbane & Byron Bay — 
            <span className="text-gradient-gold"> Done Properly</span>
          </h1>

          {/* Subheading */}
          <p className="body-lg text-concrete/80 mb-10 max-w-2xl opacity-0 animate-fade-up animation-delay-200">
            Skilled labour, cleaning crews, carpenters, painters and landscaping support — 
            delivered with clear communication, fast replacements and compliance-first systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero-primary" size="xl" asChild>
              <Link to="/contact">
                Request Labour
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Speak With a Manager</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 opacity-0 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-concrete/80 text-sm">Fully Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-concrete/80 text-sm">24hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-concrete/80 text-sm">Fast Replacements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
        <div className="w-6 h-10 rounded-full border-2 border-concrete/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
