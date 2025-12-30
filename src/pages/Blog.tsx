import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    slug: "labour-hire-rates-gold-coast",
    title: "Labour Hire Rates Gold Coast 2025: Complete Pricing Guide",
    excerpt: "Comprehensive guide to labour hire rates across Gold Coast. Understand current pricing for labourers, carpenters, demolition crews and more.",
    category: "Pricing",
    date: "December 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop",
  },
  {
    slug: "hiring-carpenters-brisbane",
    title: "Hiring Carpenters in Brisbane: What Builders Need to Know",
    excerpt: "Expert tips for hiring quality carpenters in Brisbane. Learn about rates, qualifications, and how to find reliable trade professionals.",
    category: "Hiring Guide",
    date: "December 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
  },
  {
    slug: "white-card-checklist-qld-nsw",
    title: "White Card & Construction Tickets Checklist: QLD & NSW",
    excerpt: "Complete checklist of required tickets and certifications for construction workers in Queensland and New South Wales.",
    category: "Compliance",
    date: "December 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
  },
  {
    slug: "shutdown-crew-mobilisation",
    title: "Shutdown Crew Mobilisation: How to Plan Large Scale Labour",
    excerpt: "Step by step guide to mobilising large crews for shutdowns, turnarounds and major construction projects.",
    category: "Operations",
    date: "December 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&auto=format&fit=crop",
  },
  {
    slug: "labour-hire-qld-guide",
    title: "Labour Hire Queensland: The Complete Business Guide",
    excerpt: "Everything businesses need to know about labour hire in Queensland, from licensing to compliance requirements.",
    category: "Guides",
    date: "November 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
  },
  {
    slug: "avoiding-no-shows",
    title: "Avoiding No Shows: How to Ensure Reliable Labour Hire",
    excerpt: "Practical strategies to minimise no shows and ensure your labour hire workers show up on time, every time.",
    category: "Best Practices",
    date: "November 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
  },
  {
    slug: "residential-vs-commercial",
    title: "Residential vs Commercial Construction: Labour Requirements",
    excerpt: "Understanding the different labour requirements for residential and commercial construction projects.",
    category: "Industry Insights",
    date: "November 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop",
  },
  {
    slug: "whs-onboarding-checklist",
    title: "WHS Onboarding Checklist for Labour Hire Workers",
    excerpt: "Complete workplace health and safety onboarding checklist for integrating labour hire workers into your site.",
    category: "Safety",
    date: "October 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Insights | Labour Hire Industry News | Precision Site Solutions</title>
        <meta
          name="description"
          content="Industry insights, guides and news about labour hire in Queensland and NSW. Tips for hiring, compliance updates and workforce management."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 section-dark relative overflow-hidden">
          {/* Floating organic shapes */}
          <div className="absolute top-20 right-10 w-64 h-64 rounded-blob bg-gold/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gold/10 blur-2xl" />
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
        <section className="py-24 relative overflow-hidden">
          {/* Decorative curved divider */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-oil -translate-y-1" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
          
          <div className="container mx-auto px-4 lg:px-8 pt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  to={`/blog/${article.slug}`}
                  key={article.slug}
                  className="card-feature group block overflow-hidden"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 mb-6 -mx-10 -mt-10 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-earth-green text-white text-xs font-medium">
                        {article.category}
                      </div>
                    </div>
                  </div>

                  <h2 className="font-heading font-bold text-navy text-xl mb-3 group-hover:text-earth-green transition-colors line-clamp-2">
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
                  <div className="mt-4 flex items-center gap-2 text-earth-green font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Article <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 section-dark relative overflow-hidden">
          <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-gold/10 blur-xl" />
          <div className="container mx-auto px-4 lg:px-8 text-center relative">
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
