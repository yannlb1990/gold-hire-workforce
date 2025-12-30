import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TradesGrid } from "@/components/home/TradesGrid";
import { LocationsGrid } from "@/components/home/LocationsGrid";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CandidateCTASection } from "@/components/home/CandidateCTASection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PHONE_NUMBER } from "@/lib/constants";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Labour Hire Gold Coast, Brisbane & Byron Bay | Precision Site Solutions</title>
        <meta
          name="description"
          content="Skilled labour hire for construction across Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay. Labourers, demolition crews, carpenters, building cleaners, landscaping and maintenance workers. Fast response, fully insured."
        />
        <meta
          name="keywords"
          content="labour hire gold coast, labour hire brisbane, labour hire byron bay, construction workers, carpenters hire, labourers hire, demolition crews, building cleaners gold coast, landscaping workers brisbane"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Precision Site Solutions",
            "description": "Labour hire and workforce solutions for construction across South-East Queensland and Northern NSW",
            "url": "https://thegoldhirecompany.com.au",
            "telephone": PHONE_NUMBER,
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
              "Skilled Labourers",
              "Demolition Crews",
              "Carpenter Hire",
              "Building Cleaners",
              "Landscaping Workers",
              "Maintenance Ground Workers"
            ]
          })}
        </script>
      </Helmet>
      <Layout>
        <HeroSection />
        <TrustBar />
        <HowItWorks />
        <TradesGrid />
        <LocationsGrid />
        <WhyUsSection />
        <CandidateCTASection />
        <FinalCTA />
      </Layout>
    </>
  );
};

export default Index;
