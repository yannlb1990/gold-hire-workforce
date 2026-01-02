import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, MessageSquare, Users, FileText, AlertTriangle, BarChart3, Receipt, Shield } from "lucide-react";

const tools = [
  {
    icon: ClipboardList,
    title: "Labour Request & Approvals",
    description: "Submit labour requests online and receive confirmations within hours. Track approval status in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Shift Confirmations",
    description: "SMS and email confirmations for every shift. Know exactly who's arriving and when.",
  },
  {
    icon: Users,
    title: "Worker Profiles & Tickets",
    description: "Access worker profiles, competencies and tickets. Verify qualifications before they arrive on site.",
  },
  {
    icon: FileText,
    title: "Daily Site Notes",
    description: "Documented daily notes from supervisors. Track productivity and site updates in one place.",
  },
  {
    icon: AlertTriangle,
    title: "Issue Escalation",
    description: "Report issues directly to management. Fast response and resolution tracking.",
  },
  {
    icon: BarChart3,
    title: "Weekly Summaries",
    description: "Comprehensive weekly reports on labour hours, productivity and key metrics.",
  },
  {
    icon: Receipt,
    title: "Transparent Invoicing",
    description: "Clear, itemised invoices with full breakdowns. No surprises, no hidden fees.",
  },
  {
    icon: Shield,
    title: "Compliance Documentation",
    description: "Access compliance certificates, insurances and WHS documentation on demand.",
  },
];

const ClientTools = () => {
  return (
    <>
      <Helmet>
        <title>Client Tools & Portal | Labour Hire Management | Precision Site Solutions</title>
        <meta
          name="description"
          content="Manage your labour hire with our client portal. Labour requests, shift confirmations, worker profiles, issue escalation and transparent invoicing."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                Client Tools
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Operational Management,{" "}
                <span className="text-gradient-gold">Not Software Hype</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Simple, effective tools for managing your labour hire. Request workers, 
                confirm shifts, track productivity and handle issues — all with clear 
                communication from our management team.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <div key={tool.title} className="card-elevated group">
                  <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <tool.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 section-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg text-concrete mb-6">
                How It Works
              </h2>
              <p className="body-lg text-concrete/70">
                Getting started is simple. Here's what to expect when you work with us.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Request Labour", desc: "Tell us what you need, when and where." },
                { step: "02", title: "Get Confirmation", desc: "Receive worker details and shift confirmations." },
                { step: "03", title: "Workers Arrive", desc: "Site-ready workers with proper documentation." },
                { step: "04", title: "Ongoing Support", desc: "Management oversight throughout the project." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-5xl font-heading font-bold text-gold/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-concrete text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-concrete/60 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-navy rounded-2xl p-12 text-center">
              <h2 className="heading-md text-concrete mb-4">
                Ready to Streamline Your Labour Hire?
              </h2>
              <p className="text-concrete/70 mb-8 max-w-xl mx-auto">
                Get started today with a dedicated account manager and access to our client tools.
              </p>
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Labour
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

export default ClientTools;
