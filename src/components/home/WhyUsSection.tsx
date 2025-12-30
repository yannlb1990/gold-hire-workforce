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
  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 badge-gold mb-6">
              Why Choose Us
            </div>
            <h2 className="heading-lg text-concrete mb-6">
              We Don't Just Supply Labour —{" "}
              <span className="text-gradient-gold">We Manage Outcomes</span>
            </h2>
            <p className="body-lg text-concrete/70 mb-8">
              Precision Site Solutions is a management-led, systems-driven labour hire company. 
              Our strength is communication ownership across clients, supervisors, workers and management.
            </p>
            <div className="divider-gold mb-8" />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-dark p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-concrete mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-concrete/60 text-sm leading-relaxed">
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
