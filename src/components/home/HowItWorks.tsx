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
    <section className="py-20 bg-concrete">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy mb-4">How It Works</h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            Getting reliable labour is simpler than you think. Three steps to workers on site.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gold/30" />
              )}
              
              <div className="card-feature text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gold text-navy flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <span className="text-gold/50 font-bold text-sm tracking-wider">{step.number}</span>
                <h3 className="heading-sm text-navy mt-2 mb-3">{step.title}</h3>
                <p className="text-charcoal/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
