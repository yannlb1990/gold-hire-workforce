import { Phone, Users, HardHat } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Tell Us What You Need",
      description: "Call or submit a request with your trade requirements, timeline and site details.",
    },
    {
      icon: Users,
      number: "02",
      title: "We Match & Confirm",
      description: "We select the right workers from our screened pool and confirm availability.",
    },
    {
      icon: HardHat,
      number: "03",
      title: "Workers On Site",
      description: "Qualified, site-ready workers arrive on time with correct PPE and tickets.",
    },
  ];

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Floating organic shapes */}
      <div className="absolute top-20 -left-20 w-80 h-80 rounded-blob bg-gold/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-2xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 badge-gold mb-4">
            Simple Process
          </div>
          <h2 className="heading-lg text-navy mb-4">How It Works</h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            Getting reliable labour is simpler than you think. Three steps to workers on site.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - curved organic style */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1">
                  <svg className="w-full h-8" viewBox="0 0 200 32" fill="none" preserveAspectRatio="none">
                    <path 
                      d="M0 16 Q50 0 100 16 Q150 32 200 16" 
                      stroke="hsl(var(--gold))" 
                      strokeWidth="2" 
                      strokeDasharray="8 4"
                      strokeOpacity="0.4"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
              
              <div className="card-feature text-center relative z-10 h-full flex flex-col">
                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-gold text-navy flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <step.icon className="w-10 h-10" />
                </div>
                <span className="text-gold/50 font-bold text-sm tracking-wider">{step.number}</span>
                <h3 className="heading-sm text-navy mt-2 mb-3">{step.title}</h3>
                <p className="text-charcoal/70 flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
