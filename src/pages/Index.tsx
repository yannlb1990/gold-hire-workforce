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
        <title>Labour Hire Gold Coast, Brisbane & Byron Bay | The Gold Hire Company</title>
        <meta
          name="description"
          content="Skilled labour hire for construction across Gold Coast, Brisbane, Logan, Ipswich, Tweed Heads and Byron Bay. Carpenters, labourers, concreters, demolition crews. Fast response, fully insured."
        />
        <meta
          name="keywords"
          content="labour hire gold coast, labour hire brisbane, labour hire byron bay, construction workers, carpenters hire, labourers hire, demolition crews, concreters gold coast"
        />
        <link rel="canonical" href="https://thegoldhirecompany.com.au" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Gold Hire Company",
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
              "Carpenter Hire",
              "Labourer Hire",
              "Demolition Crews",
              "Concreter Hire",
              "Plasterer Hire",
              "Steel Fixer Hire"
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
