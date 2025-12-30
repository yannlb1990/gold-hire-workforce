import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Calendar, User } from "lucide-react";

export default function ResidentialVsCommercial() {
  return (
    <>
      <Helmet>
        <title>Residential vs Commercial Labour Hire 2025 | Key Differences | Precision Site Solutions</title>
        <meta
          name="description"
          content="Understand the key differences between residential and commercial labour hire for construction. Guide for Brisbane, Gold Coast, and Byron Bay builders choosing the right workers."
        />
        <meta
          name="keywords"
          content="residential builders, commercial construction, labour hire differences, construction labour types, building workforce"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au/blog/residential-vs-commercial" />
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
                  12 min read
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Precision Site Solutions
                </span>
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Residential vs Commercial Labour Hire:{" "}
                <span className="text-gradient-gold">Key Differences</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Understanding how labour requirements differ between residential and commercial construction helps you source the right workers for your projects.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                While construction is construction, the labour requirements for residential and commercial projects differ in important ways. Workers experienced in one sector may not be the best fit for the other without additional training and adaptation. Understanding these differences helps construction companies across Gold Coast, Brisbane, Byron Bay, and the broader SEQ region source appropriate workers for their specific project types.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                This guide explores the key differences between residential and commercial labour hire, helping builders and project managers make informed decisions about workforce sourcing.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Site Environment Differences</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                The physical environment of residential and commercial sites creates different working conditions and requirements.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Residential Construction Sites</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Residential construction sites are typically smaller and more intimate. Workers on residential sites often have direct interaction with homeowners or their representatives. The work environment is less formal but requires adaptability as workers move between different homes, often working on multiple sites per week or even per day.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Parking is usually easier, access is straightforward, and the informal nature means workers often arrive and leave without formal sign-in procedures. However, working in residential neighbourhoods requires awareness of noise restrictions, respect for neighbours, and maintaining a professional appearance that reflects well on the builder.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Commercial Construction Sites</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Commercial construction sites are typically larger with more formal structures. Workers must navigate security checkpoints, formal sign-in procedures, and often multi-level induction requirements. Parking may be restricted or off-site, requiring workers to plan their arrival accordingly.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Commercial sites operate with stricter safety protocols, more supervision layers, and formal toolbox talks and safety meetings. Workers must be comfortable operating within these structures and following established procedures.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Skill Requirements</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                While the fundamental trade skills remain similar, the application of those skills differs between residential and commercial contexts.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Carpentry Differences</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Residential carpenters typically work across all phases of a home build, from framing through to finishing. They need broad skills covering timber framing, roofing, cladding, doors, windows, and finishing details. The ability to work independently and problem-solve on the spot is valuable.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Commercial carpenters often specialise in specific areas. Formwork carpenters focus exclusively on concrete forming. Fitout carpenters work on partitions, ceilings, and joinery installation. Commercial work often involves steel framing rather than timber, and the scale and precision requirements can be more demanding.
              </p>

              <h3 className="heading-sm text-foreground mt-10 mb-4">Labourer Differences</h3>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Residential labourers need to be adaptable and capable of supporting various trades throughout a home build. They may be cleaning the site one day and assisting with brick delivery the next. A willingness to do whatever is needed and ability to take direction from multiple tradespeople is essential.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Commercial labourers often have more defined roles within larger teams. They may be assigned to specific duties like crane signals, material distribution to floors, or supporting a single trade. Physical fitness requirements may be higher due to the scale of material handling.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Certification Requirements</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Commercial construction typically requires more extensive certifications than residential work.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Both sectors require the White Card, but commercial sites more frequently require Working at Heights certification, EWP tickets, and additional site-specific inductions. Commercial projects involving cranes, hoists, or scaffolding may require specific tickets for workers interacting with this equipment.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                When sourcing labour for commercial projects, verify that workers have all necessary certifications before they arrive on site. The time spent obtaining additional tickets or completing inductions after arrival is costly.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Working Hours and Conditions</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Working patterns differ significantly between residential and commercial construction.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Residential construction typically follows standard daytime hours, though weekend work may be required to meet completion deadlines. Start times are often flexible, and work continues until good weather allows or tasks are complete.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Commercial construction may involve extended hours, shift work, or weekend work to minimise disruption to building occupants or meet project deadlines. Night work is common for fitouts in operational buildings. Workers must be available for the hours required, which may change throughout the project.
              </p>

              <h2 className="heading-md text-foreground mt-12 mb-6">Choosing Workers for Your Project Type</h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-6">
                When engaging a labour hire provider, be clear about your project type and specific requirements. A provider experienced in both residential and commercial construction can match workers with relevant experience to your needs.
              </p>

              <p className="text-charcoal/80 leading-relaxed mb-6">
                Workers transitioning between sectors may need time to adapt to different working conditions and expectations. An experienced residential carpenter may need guidance on commercial site procedures, while a commercial specialist may need coaching on the broader skill application required in residential builds.
              </p>

              <div className="bg-oil rounded-3xl p-8 my-12 text-center">
                <h3 className="heading-sm text-concrete mb-4">Need Workers for Your Project?</h3>
                <p className="text-concrete/70 mb-6">We supply workers experienced in both residential and commercial construction across Gold Coast, Brisbane, and Byron Bay.</p>
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
