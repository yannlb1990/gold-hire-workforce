import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Shield, Clock, ClipboardCheck, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MessageSquare,
    title: "Communication Ownership",
    description: "Direct lines to management. No runaround. We own every conversation across clients, supervisors and workers.",
  },
  {
    icon: Shield,
    title: "Compliance-First",
    description: "QLD & NSW labour hire licences. WHS documentation. Fair Work compliance. Every worker, every time.",
  },
  {
    icon: Clock,
    title: "Fast Replacements",
    description: "Worker not right for the job? We'll have a replacement on-site within hours, not days.",
  },
  {
    icon: ClipboardCheck,
    title: "SOPs & KPIs",
    description: "Every worker follows documented procedures. Productivity is measured. Accountability is standard.",
  },
  {
    icon: Users,
    title: "Trained & Site-Ready",
    description: "Pre-start checklists, handover protocols and issue reporting. Workers arrive prepared, not confused.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Weekly summaries, shift confirmations and clear invoicing. You always know where things stand.",
  },
];

export function WhyUsSection() {
  // Show only 4 features on mobile for cleaner UX
  const mobileFeatures = features.slice(0, 4);

  return (
    <section className="py-16 md:py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 badge-gold mb-4 md:mb-6">
              Why Choose Us
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-concrete mb-4 md:mb-6">
              We Don't Just Supply Labour —{" "}
              <span className="text-gradient-gold">We Manage Outcomes</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-concrete/70 mb-6 md:mb-8 leading-relaxed">
              Management-led, systems-driven labour hire with communication ownership across all stakeholders.
            </p>
            <div className="divider-gold mb-6 md:mb-8 mx-auto lg:mx-0" />
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="xl" className="w-full sm:w-auto min-h-[48px]" asChild>
                <Link to="/contact">
                  Request Labour
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" className="w-full sm:w-auto min-h-[48px]" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Features Grid - 4 on mobile, 6 on desktop */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`card-dark p-4 md:p-6 ${index >= 4 ? 'hidden sm:block' : ''}`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-3 md:mb-4">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-concrete mb-1 md:mb-2 text-sm md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-concrete/60 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
