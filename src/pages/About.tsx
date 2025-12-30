import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Shield, MessageSquare, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: MessageSquare,
    title: "Communication First",
    description: "We own every conversation. Clear, direct communication between clients, workers, supervisors and management.",
  },
  {
    icon: Shield,
    title: "Compliance Always",
    description: "QLD and NSW labour hire licences, WHS documentation, Fair Work compliance. No shortcuts, ever.",
  },
  {
    icon: Target,
    title: "Outcome Focused",
    description: "We don't just supply labour. We manage outcomes with SOPs, KPIs and accountability at every level.",
  },
  {
    icon: Users,
    title: "People Matter",
    description: "Our workers are trained, respected and supported. That's how we deliver consistent quality to clients.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Labour Hire Company Gold Coast Brisbane | Precision Site Solutions</title>
        <meta
          name="description"
          content="Precision Site Solutions is a management-led, systems-driven labour hire company serving Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                About Us
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Management-Led,{" "}
                <span className="text-gradient-gold">Systems-Driven</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Precision Site Solutions is a labour hire company built on communication, 
                compliance and accountability. We don't just supply workers — we manage outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-lg text-navy mb-6">
                  Our Approach
                </h2>
                <div className="divider-gold mb-6" />
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Most labour hire companies send workers and hope for the best. We take a 
                  different approach. Every worker we deploy understands our SOPs, communication 
                  expectations and quality standards before they arrive on site.
                </p>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Our management team maintains direct communication with clients, supervisors 
                  and workers. Issues are escalated and resolved quickly. Replacements are 
                  arranged within hours, not days. And every shift is documented and reviewed.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  That's what management-led, systems-driven labour hire looks like.
                </p>
              </div>

              <div className="grid gap-4">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4 p-6 rounded-xl bg-secondary">
                    <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy mb-1">
                        {value.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-24 section-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-concrete mb-6">
                What Sets Us Apart
              </h2>
              <p className="body-lg text-concrete/70">
                We're not the cheapest labour hire company. We're the one that gets the job done properly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Direct management communication",
                "Documented SOPs for every worker",
                "Fast replacements within hours",
                "Weekly summaries and reporting",
                "Transparent, itemised invoicing",
                "Full WHS and compliance documentation",
                "Trained and site-ready workers",
                "Issue escalation protocols",
                "QLD & NSW licensed operations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 rounded-lg bg-navy-light/30">
                  <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-concrete font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="heading-md text-navy mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-charcoal/70 mb-8 max-w-xl mx-auto">
              Whether you need labour or you're looking for work, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="navy-outline" size="xl" asChild>
                <Link to="/careers">Join Our Workforce</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
