import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Calendar, User, CheckCircle2 } from "lucide-react";

export default function WhiteCardChecklist() {
  return (
    <>
      <Helmet>
        <title>White Card & Construction Tickets Checklist QLD NSW 2025 | The Gold Hire Company</title>
        <meta
          name="description"
          content="Complete checklist of construction tickets and certifications required in Queensland and NSW. White Card, Working at Heights, EWP, and more for Gold Coast, Brisbane, Byron Bay workers."
        />
        <meta
          name="keywords"
          content="white card queensland, construction induction, building tickets, working at heights qld, ewp ticket, construction certifications australia"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/blog/white-card-checklist-qld-nsw" />
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
                  10 min read
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  The Gold Hire Company
                </span>
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                White Card & Construction Tickets:{" "}
                <span className="text-gradient-gold">Complete QLD/NSW Checklist</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Everything workers and employers need to know about construction certifications across Queensland and New South Wales.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Working on construction sites in Queensland or New South Wales requires specific certifications and tickets to ensure workplace safety and compliance. Whether you are a worker looking to enter the construction industry, or an employer verifying that your team meets site requirements, understanding these certifications is essential.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                This comprehensive guide covers all the key construction certifications required across Gold Coast, Brisbane, Byron Bay, Tweed Heads, Logan, and the broader SEQ and Northern NSW region. We explain what each ticket involves, how to obtain them, and when they are required on construction sites.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">White Card (Construction Induction)</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The White Card, officially known as the General Construction Induction Card, is the fundamental requirement for anyone working on a construction site in Australia. This certification is mandatory and must be obtained before you can legally set foot on a construction site as a worker.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">What the White Card Covers</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The White Card training covers essential workplace health and safety knowledge including hazard identification, risk management, communication on construction sites, and understanding of WHS legislation. The training ensures all workers have a baseline understanding of construction site safety before they commence work.
              </p>

              <div className="bg-cream rounded-3xl p-8 my-8">
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">White Card Key Facts</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Duration:</strong> One day (6-8 hours) for in-person training, or online options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Cost:</strong> Typically $80-150 depending on provider</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Validity:</strong> Does not expire, but must be kept current with regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Recognition:</strong> Nationally recognised across all Australian states and territories</span>
                  </li>
                </ul>
              </div>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Queensland vs NSW White Cards</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                White Cards are nationally recognised, meaning a card obtained in Queensland is valid in New South Wales and vice versa. This is particularly relevant for workers in the Tweed Heads and Byron Bay region who may work across the state border regularly.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                However, the card must be issued by a Registered Training Organisation (RTO) approved to deliver the training in the state where you complete it. Always verify that your training provider is properly accredited before enrolling.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Working at Heights Certification</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Working at Heights training is required for workers who will be working at any height where a fall could cause injury. This includes work on scaffolding, ladders, roof work, and any elevated work platforms.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                The training covers fall prevention strategies, correct use of fall protection equipment including harnesses and anchor points, risk assessment for height work, and rescue procedures. This certification is essential for many construction roles including carpenters, roofers, painters, and any workers accessing elevated areas.
              </p>

              <div className="bg-cream rounded-3xl p-8 my-8">
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">Working at Heights Key Facts</h4>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Duration:</strong> One day (approximately 8 hours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Cost:</strong> Typically $200-350 depending on provider</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Refresher:</strong> Recommended every 2 years, though not legally required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span><strong>Unit Code:</strong> RIIWHS204E - Work safely at heights</span>
                  </li>
                </ul>
              </div>

              <h2 className="heading-md text-foreground mt-12 mb-6">EWP (Elevated Work Platform) Licence</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                An EWP licence is required to operate elevated work platforms including boom lifts, scissor lifts, and cherry pickers with a boom length of 11 metres or more. This is a High Risk Work Licence issued by Workplace Health and Safety Queensland or SafeWork NSW.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                The training covers pre-operational checks, safe operation procedures, emergency procedures, and understanding of the machine's capabilities and limitations. EWP operators are in demand across construction sites on the Gold Coast, Brisbane, and Byron Bay, particularly for commercial construction, maintenance work, and tree services.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Forklift Licence</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                A forklift licence (LF class High Risk Work Licence) is required to operate forklifts on construction sites, warehouses, and industrial facilities. This certification is valuable for labourers and logistics workers who handle materials on construction sites.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                The licence covers safe forklift operation, load handling and stability, pre-operational checks, and hazard management. Workers with forklift licences are often in high demand during material delivery periods on construction projects.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Asbestos Awareness Training</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Asbestos Awareness training is required for workers who may encounter asbestos-containing materials during their work. This is particularly important for demolition workers, renovation specialists, and anyone working on buildings constructed before the mid-1980s.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                The training covers identification of potential asbestos-containing materials, understanding the health risks of asbestos exposure, correct procedures when asbestos is discovered, and legal requirements for asbestos handling. This is not a licence to remove asbestos, but provides essential awareness for workers who may encounter it.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Traffic Control Certification</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Traffic control certification is required for workers managing traffic around construction sites, roadworks, and events. This is commonly required on civil construction projects, road maintenance, and any works affecting public roads.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                The certification covers traffic control planning, sign placement, communication with drivers, and emergency procedures. Qualified traffic controllers are essential for any works that affect road access across Gold Coast, Brisbane, and Byron Bay regions.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">First Aid Certification</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                While not mandatory for all construction workers, First Aid certification is valuable and often required by employers. Construction sites must have designated first aiders, and workers with current First Aid certification are more employable and can take on additional responsibilities.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                The standard workplace First Aid course (HLTAID011) covers CPR, wound treatment, managing medical emergencies, and using an AED. This certification must be renewed every three years, with CPR component renewed annually.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Keeping Your Tickets Current</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Maintaining current certifications is essential for construction workers. While some tickets like the White Card do not technically expire, many employers and sites require refresher training to ensure workers knowledge is current with latest safety practices and regulations.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Keep copies of all your certifications in both physical and digital formats. Many sites now use electronic verification systems, and being able to quickly provide proof of your qualifications makes site access smoother.
              </p>

              <div className="bg-oil rounded-3xl p-8 my-12 text-center">
                <h3 className="heading-sm text-concrete mb-4">Looking for Work with Your Tickets?</h3>
                <p className="text-concrete/70 mb-6">We are always looking for qualified workers with current certifications across Gold Coast, Brisbane, and Byron Bay.</p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/find-work">
                    Register for Work
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
