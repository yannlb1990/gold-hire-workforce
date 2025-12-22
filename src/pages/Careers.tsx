import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, HardHat, FileCheck, Users, DollarSign, Shield, Clock, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Fair rates paid weekly. No waiting around for your money.",
  },
  {
    icon: Clock,
    title: "Regular Shifts",
    description: "Consistent work with quality clients across SEQ.",
  },
  {
    icon: Shield,
    title: "Safe Environments",
    description: "WHS compliant sites with proper safety protocols.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Work with a company that values communication.",
  },
];

const roles = [
  "General Labourers",
  "Skilled Labourers",
  "Carpenters",
  "Painters",
  "Commercial Cleaners",
  "Grounds Maintenance",
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Join Our Workforce | Labour Hire Jobs Gold Coast Brisbane | The Gold Hire Company</title>
        <meta
          name="description"
          content="Looking for consistent work? Join The Gold Hire Company workforce. Labour hire jobs across Gold Coast, Brisbane, Logan, Tweed Heads and Byron Bay."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                Join Our Team
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Looking for{" "}
                <span className="text-gradient-gold">Consistent Work?</span>
              </h1>
              <p className="body-lg text-concrete/70 mb-8">
                The Gold Hire Company connects skilled workers with quality clients across 
                Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay. Join our team 
                and experience a communication-led, professional work environment.
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-navy mb-6">
                Why Work With Us
              </h2>
              <p className="body-lg text-charcoal/70">
                We're not just another labour hire company. We're management-led and systems-driven, 
                which means better communication, better conditions and better outcomes for our workers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="card-elevated text-center">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="py-24 section-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg text-concrete mb-6">
                  Roles We're Hiring
                </h2>
                <p className="body-lg text-concrete/70 mb-8">
                  We're always looking for reliable, skilled workers to join our team. 
                  Whether you're experienced or just starting out, we have opportunities across multiple trades and industries.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {roles.map((role) => (
                    <div key={role} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-concrete">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark p-8">
                <h3 className="text-2xl font-heading font-bold text-concrete mb-6">
                  What We Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    "Reliable and punctual",
                    "Strong work ethic",
                    "Good communication skills",
                    "Commitment to safety",
                    "Professional attitude",
                    "Valid ID and work rights",
                    "Relevant tickets/licenses (trade roles)",
                    "Own transport preferred",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-concrete/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-gradient-to-r from-navy to-steel-blue rounded-2xl p-12 text-center">
              <h2 className="heading-md text-concrete mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-concrete/70 mb-8 max-w-xl mx-auto">
                Submit your application today and one of our team will be in touch.
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Apply Now
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;
