import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { CandidateCTASection } from "@/components/home/CandidateCTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Labour Hire Gold Coast, Brisbane & Byron Bay | The Gold Hire Company</title>
        <meta
          name="description"
          content="Skilled labour hire, carpenters, painters, commercial cleaning and landscaping support across Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay. Systems-driven workforce solutions with clear communication."
        />
        <meta
          name="keywords"
          content="labour hire gold coast, labour hire brisbane, labour hire byron bay, labour hire tweed heads, skilled labour hire seq, hiring company brisbane"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Gold Hire Company",
            "description": "Labour hire and workforce solutions across South-East Queensland",
            "url": "https://thegoldhirecompany.com.au",
            "telephone": "04XX XXX XXX",
            "email": "enquiries@thegoldhirecompany.com.au",
            "areaServed": [
              { "@type": "City", "name": "Gold Coast" },
              { "@type": "City", "name": "Brisbane" },
              { "@type": "City", "name": "Logan" },
              { "@type": "City", "name": "Ipswich" },
              { "@type": "City", "name": "Tweed Heads" },
              { "@type": "City", "name": "Byron Bay" }
            ],
            "serviceType": [
              "Labour Hire",
              "Carpentry Services",
              "Painting Services",
              "Commercial Cleaning",
              "Landscaping Services"
            ]
          })}
        </script>
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ServiceAreasSection />
        <CandidateCTASection />
      </Layout>
    </>
  );
};

export default Index;
