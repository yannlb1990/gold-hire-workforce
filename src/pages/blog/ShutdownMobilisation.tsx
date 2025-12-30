import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Calendar, User, CheckCircle2 } from "lucide-react";

export default function ShutdownMobilisation() {
  return (
    <>
      <Helmet>
        <title>Shutdown Crew Mobilisation Checklist 2025 | Turnaround Labour Planning | Precision Site Solutions</title>
        <meta
          name="description"
          content="Complete checklist for mobilising shutdown and turnaround crews in SEQ. Planning labour for maintenance shutdowns across Gold Coast, Brisbane, and industrial sites."
        />
        <meta
          name="keywords"
          content="shutdown labour hire, maintenance shutdown, turnaround crews, industrial labour hire, shutdown planning checklist"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/blog/shutdown-crew-mobilisation" />
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
                Shutdown Crew Mobilisation:{" "}
                <span className="text-gradient-gold">Complete Planning Checklist</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Everything you need to plan and execute successful shutdown labour mobilisation for maintenance turnarounds and industrial projects.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Planned maintenance shutdowns and turnaround projects require careful labour planning to ensure all work is completed within tight timeframes. Whether you are managing a manufacturing facility shutdown on the Gold Coast, industrial maintenance in Brisbane, or equipment turnaround work across South East Queensland, having the right workforce mobilised and ready is critical to project success.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                This guide provides a comprehensive checklist for planning and executing shutdown crew mobilisation, covering everything from initial labour planning through to demobilisation and project review. Use this as your reference guide to ensure nothing is missed when planning your next shutdown project.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Understanding Shutdown Labour Requirements</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Shutdown and turnaround projects differ from standard construction work in several key ways. The work is typically time-critical, often running 24/7 or extended hours to minimise production downtime. Labour requirements can spike dramatically, requiring rapid mobilisation of large crews who must be immediately productive.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                The cost of production downtime often far exceeds the cost of additional labour, making it economically sensible to over-resource shutdown projects rather than risk delays. This creates unique challenges for workforce planning and highlights the importance of working with labour hire providers who understand shutdown environments and can deliver reliable workers at scale.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Pre-Shutdown Planning Phase</h2>

              <h3 className="heading-sm text-foreground mt-10 mb-4">4-6 Weeks Before Shutdown</h3>
              
              <div className="bg-cream rounded-3xl p-8 my-8">
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">Early Planning Checklist</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Define scope of work and create detailed work breakdown structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Identify labour requirements by trade and skill level for each phase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Determine shift patterns and working hours for the shutdown period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Contact labour hire providers to confirm availability and capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>List all required certifications and site-specific induction requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Confirm budget allocation for labour hire and overtime provisions</span>
                  </li>
                </ul>
              </div>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Early engagement with your labour hire provider is essential for shutdown projects. Quality providers will start pre-screening workers, verifying certifications, and building a roster of available personnel. This early engagement also allows time to arrange any specialised training or site-specific inductions that workers will need.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">2-3 Weeks Before Shutdown</h3>
              
              <div className="bg-cream rounded-3xl p-8 my-8">
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">Finalisation Checklist</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Confirm final headcount requirements with labour hire provider</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Receive and verify worker certification documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Schedule site induction sessions for all incoming workers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Confirm accommodation arrangements if workers are travelling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Prepare PPE and equipment requirements list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Establish communication protocols and reporting lines</span>
                  </li>
                </ul>
              </div>

              <h2 className="heading-md text-foreground mt-12 mb-6">Mobilisation Phase</h2>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Day Before Shutdown Commences</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The day before shutdown commencement is critical for final preparations. Conduct a final headcount check with your labour hire provider, confirming all workers are available and have completed any required pre-work inductions or medical checks.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Ensure all workers have clear instructions on first-day reporting location, start time, parking arrangements, and what to bring. Miscommunication at this stage can result in delays and confusion on the first morning of shutdown when time is most critical.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">First Day of Shutdown</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Allow additional time on the first day for site inductions, safety briefings, and work area familiarisation. Rushing through these critical activities increases safety risk and often results in lower productivity over the shutdown period as workers are unclear on expectations and procedures.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Assign experienced supervisors to manage new workers and provide guidance during the initial settling-in period. Labour hire workers who feel well-supported and understand their role will be more productive and reliable throughout the shutdown.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">During Shutdown Operations</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Maintain regular communication with your labour hire provider throughout the shutdown period. Report any worker performance issues promptly so they can be addressed. A quality provider will have backup workers on standby to replace any personnel who are not meeting standards or who become unavailable.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Monitor fatigue management carefully, particularly on extended hour or 24/7 operations. Tired workers make more mistakes and are at higher risk of injury. Rotating crews and enforcing adequate rest periods protects both workers and project outcomes.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Demobilisation and Review</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                As shutdown work completes, plan for staged demobilisation rather than releasing all workers simultaneously. Retain key personnel for final clean-up, punch list completion, and handover activities.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Conduct a post-shutdown review with your labour hire provider, providing feedback on worker performance and identifying any improvements for future shutdowns. This information helps the provider improve their selection and preparation for your next project.
              </p>

              <div className="bg-oil rounded-3xl p-8 my-12 text-center">
                <h3 className="heading-sm text-concrete mb-4">Planning a Shutdown Project?</h3>
                <p className="text-concrete/70 mb-6">We provide experienced shutdown crews across Gold Coast, Brisbane, and SEQ. Contact us early to ensure availability.</p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/request-labour">
                    Discuss Your Requirements
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
