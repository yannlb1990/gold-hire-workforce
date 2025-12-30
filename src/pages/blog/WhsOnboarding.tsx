import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Calendar, User, CheckCircle2 } from "lucide-react";

export default function WhsOnboarding() {
  return (
    <>
      <Helmet>
        <title>Safe Onboarding WHS Checklist 2025 | Construction Induction Guide | Precision Site Solutions</title>
        <meta
          name="description"
          content="Complete WHS onboarding checklist for construction workers in Queensland and NSW. Safe induction procedures for Gold Coast, Brisbane, Byron Bay, and Tweed Heads sites."
        />
        <meta
          name="keywords"
          content="whs checklist, workplace safety, construction induction, safe onboarding, construction safety australia"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/blog/whs-onboarding-checklist" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-concrete/70 hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-concrete/60 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  December 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min read
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Precision Site Solutions
                </span>
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Safe Onboarding WHS Checklist:{" "}
                <span className="text-gradient-gold">Construction Induction Guide</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Complete checklist for safely inducting workers onto construction sites, ensuring compliance and worker safety from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Properly inducting workers onto construction sites is not just a legal requirement but a critical step in maintaining workplace safety. Whether you are managing a residential build on the Gold Coast, a commercial fitout in Brisbane, or a renovation project in Byron Bay, having a systematic approach to worker onboarding protects both workers and your business.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                This comprehensive WHS onboarding checklist covers all the essential elements of safe worker induction for construction sites across Queensland and New South Wales.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Before Workers Arrive on Site</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Safe onboarding begins before the worker sets foot on site. Preparation ensures the induction process runs smoothly and nothing is missed.
              </p>

              <div className="bg-cream rounded-3xl p-8 my-8">
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">Pre-Arrival Checklist</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Verify White Card certification is current and valid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Confirm any additional certifications required for the role (Working at Heights, EWP, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Prepare site-specific induction materials and sign-in documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Ensure PPE requirements are clearly communicated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Arrange for a supervisor or site safety officer to conduct the induction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Communicate arrival time, parking location, and who to report to</span>
                  </li>
                </ul>
              </div>

              <h2 className="heading-md text-foreground mt-12 mb-6">Site-Specific Induction Content</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                While workers hold a White Card demonstrating general construction safety knowledge, each site has specific hazards and procedures that must be communicated during induction.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Emergency Procedures</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Every worker must understand what to do in an emergency before they commence work. Cover the location of first aid facilities and who the designated first aiders are, emergency assembly points and evacuation routes, how to raise an alarm in case of emergency, and the location of fire extinguishers and other emergency equipment.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Site-Specific Hazards</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Walk the worker through the current site hazards and control measures in place. This includes any excavations, floor openings, or edge protection, overhead hazards such as cranes or suspended loads, electrical hazards and isolation procedures, traffic management and vehicle movement areas, and any hazardous materials present on site.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Site Rules and Procedures</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Cover the specific rules that apply on your site including working hours and break times, sign-in and sign-out procedures, designated smoking and eating areas, mobile phone usage policies, and any restricted access areas.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">PPE Requirements</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Personal Protective Equipment requirements should be clearly communicated and verified during induction.
              </p>

              <div className="bg-cream rounded-3xl p-8 my-8">
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">Standard Construction Site PPE</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Hard hat:</strong> Must meet AS/NZS 1801 standards and be in good condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Safety boots:</strong> Steel-capped boots meeting AS/NZS 2210.3 standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>High-visibility clothing:</strong> Day/night rated if required for site conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Safety glasses:</strong> Required for specific tasks as identified in risk assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Hearing protection:</strong> Available and required for high-noise tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Gloves:</strong> Task-appropriate gloves for handling materials</span>
                  </li>
                </ul>
              </div>

              <h2 className="heading-md text-foreground mt-12 mb-6">Communication and Reporting</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Ensure workers understand how to communicate safety concerns and report incidents.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Cover who to report safety concerns or hazards to, the incident reporting procedure including near-misses, how to participate in toolbox talks and safety meetings, and the process for refusing unsafe work if necessary.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Documentation and Record Keeping</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Proper documentation of inductions is essential for compliance and liability protection.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Records should include the worker's name and contact details, date and time of induction, topics covered during induction, signature confirming understanding and agreement to comply with site rules, and name of the person who conducted the induction.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Keep induction records for the duration of the project and for at least seven years afterwards. These records may be required for workplace inspections, incident investigations, or insurance claims.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Ongoing Safety Management</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Induction is just the beginning of safety management. Ensure new workers are appropriately supervised during their initial period on site, and provide opportunities for them to ask questions as they become familiar with site conditions.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Regular toolbox talks reinforce safety messages and address any new hazards as the project progresses. Include all workers including labour hire personnel in these discussions.
              </p>

              <div className="bg-oil rounded-3xl p-8 my-12 text-center">
                <h3 className="heading-sm text-concrete mb-4">Need Site-Ready Workers?</h3>
                <p className="text-concrete/70 mb-6">Our workers arrive with verified certifications and are ready for your site induction across Gold Coast, Brisbane, and Byron Bay.</p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/request-labour">
                    Request Workers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
