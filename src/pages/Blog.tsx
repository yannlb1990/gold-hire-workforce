import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const articles = [
  {
    slug: "labour-hire-vs-subcontractors",
    title: "Labour Hire vs Subcontractors: What's Right for Your Business in 2025",
    excerpt: "Understanding the key differences between labour hire and subcontracting arrangements, and when to use each for your construction or commercial projects.",
    category: "Industry Insights",
    date: "December 2024",
    readTime: "5 min read",
  },
  {
    slug: "choosing-labour-hire-company-brisbane",
    title: "How to Choose a Labour Hire Company in Brisbane & Gold Coast",
    excerpt: "What to look for when selecting a labour hire partner: compliance, communication, replacements and management accountability.",
    category: "Guides",
    date: "December 2024",
    readTime: "7 min read",
  },
  {
    slug: "commercial-cleaning-labour-property-managers",
    title: "Commercial Cleaning Labour for Property Managers",
    excerpt: "How to source reliable cleaning crews for post-construction cleans, commercial offices and body corporate common areas.",
    category: "Services",
    date: "November 2024",
    readTime: "4 min read",
  },
  {
    slug: "why-communication-fails-labour-hire",
    title: "Why Communication Fails in Labour Hire (And How to Fix It)",
    excerpt: "The common breakdown points in labour hire communication and what management-led companies do differently.",
    category: "Industry Insights",
    date: "November 2024",
    readTime: "6 min read",
  },
  {
    slug: "labour-hire-compliance-qld-nsw",
    title: "Labour Hire Compliance: QLD vs NSW Explained",
    excerpt: "A practical guide to labour hire licensing requirements in Queensland and New South Wales for businesses operating across state lines.",
    category: "Compliance",
    date: "October 2024",
    readTime: "8 min read",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Insights | Labour Hire Industry News | The Gold Hire Company</title>
        <meta
          name="description"
          content="Industry insights, guides and news about labour hire in Queensland and NSW. Tips for hiring, compliance updates and workforce management."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 badge-gold mb-6">
                Blog & Insights
              </div>
              <h1 className="heading-xl text-concrete mb-6">
                Industry Insights &{" "}
                <span className="text-gradient-gold">Expert Guides</span>
              </h1>
              <p className="body-lg text-concrete/70">
                Practical articles on labour hire, compliance, workforce management 
                and industry trends for businesses in Queensland and NSW.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.slug} className="card-elevated group cursor-pointer">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-medium mb-4">
                    {article.category}
                  </div>
                  <h2 className="font-heading font-bold text-navy text-xl mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-charcoal/50">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 section-dark">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="heading-md text-concrete mb-4">
              Need Labour Hire Expertise?
            </h2>
            <p className="text-concrete/70 mb-8 max-w-xl mx-auto">
              Our team is here to answer your questions about labour hire, compliance and workforce solutions.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Speak With Our Team
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
