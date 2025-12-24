import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Calendar, User, CheckCircle2 } from "lucide-react";

export default function LabourHireQldGuide() {
  return (
    <>
      <Helmet>
        <title>How Labour Hire Works in QLD 2025 | Builder's Checklist | The Gold Hire Company</title>
        <meta
          name="description"
          content="Complete guide to using labour hire in Queensland. Understand QLD labour hire licensing, legal obligations, and how to work effectively with labour hire providers in Brisbane and Gold Coast."
        />
        <meta
          name="keywords"
          content="labour hire queensland, qld labour hire licence, builder checklist, construction labour hire qld, labour hire regulations australia"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/blog/labour-hire-qld-guide" />
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
                  13 min read
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  The Gold Hire Company
                </span>
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                How Labour Hire Works in QLD:{" "}
                <span className="text-gradient-gold">Builder's Complete Guide</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Everything Queensland builders need to know about using labour hire legally and effectively, including licensing requirements and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Labour hire is an essential workforce solution for Queensland builders and construction companies, providing flexibility to scale teams based on project demands while reducing the administrative burden of direct employment. However, Queensland has specific legislation governing labour hire that both providers and users must understand and comply with.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                This comprehensive guide explains how labour hire works in Queensland, the legal framework governing the industry, and practical advice for builders wanting to use labour hire effectively on their Gold Coast, Brisbane, Logan, and Ipswich projects.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Understanding Labour Hire in Queensland</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Labour hire is an arrangement where workers are employed by a labour hire provider and supplied to host employers to perform work under the host's direction and control. The labour hire provider handles all employment obligations including wages, superannuation, workers compensation insurance, and payroll tax.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                For Queensland builders, this arrangement provides significant advantages. You get access to pre-screened, qualified workers without the administrative overhead of direct employment. You can scale your workforce up or down based on project demands without the complexities of hiring and termination. And you transfer certain employment risks to the labour hire provider.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Queensland Labour Hire Licensing</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Queensland has a mandatory labour hire licensing scheme administered by the Office of Industrial Relations. Since 2018, it has been illegal for unlicensed providers to supply workers, and illegal for businesses to use unlicensed labour hire providers.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Why Licensing Matters</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The licensing scheme was introduced to address exploitation and non-compliance in the labour hire industry. Licensed providers must demonstrate financial viability, compliance with workplace laws, and appropriate insurance coverage. This provides protection for both workers and host employers.
              </p>

              <div className="bg-cream rounded-3xl p-8 my-8">
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">What Licensed Providers Must Demonstrate</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Compliance with all workplace laws including fair work, WHS, and industrial relations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Current workers compensation insurance covering all supplied workers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Financial capacity to meet ongoing obligations including wages and superannuation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>Fit and proper person requirements for company directors</span>
                  </li>
                </ul>
              </div>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Your Obligations as a Host Employer</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                As a builder using labour hire in Queensland, you have a legal obligation to only use licensed providers. Before engaging any labour hire company, verify their licence status on the Queensland Labour Hire Licensing Register, which is publicly accessible online.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Penalties for using unlicensed providers can be significant, with maximum penalties of over $130,000 for individuals and $650,000 for corporations. Beyond legal penalties, using unlicensed providers exposes you to reputational risk and potential liability if workers are injured or underpaid.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">How the Relationship Works</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Understanding the three-way relationship between labour hire provider, worker, and host employer is important for effective workforce management.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">The Labour Hire Provider's Role</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The labour hire provider is the legal employer of the worker. They are responsible for recruiting, screening, and selecting workers. They handle all payroll including wages, superannuation, and tax withholding. They maintain workers compensation insurance and handle any claims. They manage employment conditions, leave entitlements, and termination.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Your Role as Host Employer</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                As the host employer, you direct and control the worker's daily activities. You are responsible for providing a safe workplace and appropriate supervision. You must conduct site inductions and ensure the worker understands site-specific requirements. You provide necessary tools and equipment unless otherwise agreed. You communicate work requirements and performance expectations.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">The Worker's Position</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The worker is employed by the labour hire provider but works under your direction on site. They follow your instructions regarding the work to be performed but look to their employer (the labour hire provider) for employment matters like pay, leave, and workplace issues not related to on-site safety.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Workplace Health and Safety Responsibilities</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                WHS responsibilities are shared between the labour hire provider and host employer. Understanding this shared responsibility is crucial for managing safety on your construction sites.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                As the host employer, you have the primary duty of care for the worker while they are on your site. This includes providing safe plant and structures, safe systems of work, adequate facilities, and any necessary information, training, instruction, or supervision. The labour hire provider shares this duty and must consult with you about WHS matters affecting their workers.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Getting the Best from Labour Hire</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Effective use of labour hire requires clear communication and good relationship management with your provider. Here are practical tips for Queensland builders to maximise value from labour hire arrangements.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Be clear about your requirements when booking workers. Specify the skills, certifications, and experience level needed. Provide information about site conditions, working hours, and any specific requirements. The more information you provide, the better your provider can match workers to your needs.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Give prompt feedback on worker performance. If a worker is not meeting expectations, communicate this early so the provider can address it or arrange a replacement. Similarly, let the provider know when workers perform well so they can prioritise those workers for your future bookings.
              </p>

              <div className="bg-oil rounded-3xl p-8 my-12 text-center">
                <h3 className="heading-sm text-concrete mb-4">Need Labour Hire in Queensland?</h3>
                <p className="text-concrete/70 mb-6">The Gold Hire Company is fully licensed in Queensland. We supply skilled workers across Gold Coast, Brisbane, Logan, and Ipswich.</p>
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
