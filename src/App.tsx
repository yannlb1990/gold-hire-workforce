import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ClientTools from "./pages/ClientTools";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Locations from "./pages/locations";
import Brisbane from "./pages/locations/Brisbane";
import GoldCoast from "./pages/locations/GoldCoast";
import TweedHeads from "./pages/locations/TweedHeads";
import ByronBay from "./pages/locations/ByronBay";
import Logan from "./pages/locations/Logan";
import Ipswich from "./pages/locations/Ipswich";

// Trade Pages - Core 4 Services
import Labourers from "./pages/trades/Labourers";
import Demolition from "./pages/trades/Demolition";
import Carpenters from "./pages/trades/Carpenters";
import BuildingCleaners from "./pages/trades/BuildingCleaners";

// Conversion Pages
import RequestLabour from "./pages/RequestLabour";
import FindWork from "./pages/FindWork";
import ThankYouEmployer from "./pages/ThankYouEmployer";
import ThankYouWorker from "./pages/ThankYouWorker";

// Trust Pages
import Compliance from "./pages/Compliance";
import Insurances from "./pages/Insurances";
import LabourHireLicensing from "./pages/LabourHireLicensing";

// Blog Articles
import LabourHireRatesGoldCoast from "./pages/blog/LabourHireRatesGoldCoast";
import HiringCarpentersBrisbane from "./pages/blog/HiringCarpentersBrisbane";
import WhiteCardChecklist from "./pages/blog/WhiteCardChecklist";
import ShutdownMobilisation from "./pages/blog/ShutdownMobilisation";
import LabourHireQldGuide from "./pages/blog/LabourHireQldGuide";
import AvoidingNoShows from "./pages/blog/AvoidingNoShows";
import ResidentialVsCommercial from "./pages/blog/ResidentialVsCommercial";
import WhsOnboarding from "./pages/blog/WhsOnboarding";

// Money Pages
import GoldCoastLabourers from "./pages/money/GoldCoastLabourers";
import GoldCoastDemolition from "./pages/money/GoldCoastDemolition";
import GoldCoastCarpenters from "./pages/money/GoldCoastCarpenters";
import GoldCoastBuildingCleaners from "./pages/money/GoldCoastBuildingCleaners";
import BrisbaneLabourers from "./pages/money/BrisbaneLabourers";
import BrisbaneDemolition from "./pages/money/BrisbaneDemolition";
import BrisbaneCarpenters from "./pages/money/BrisbaneCarpenters";
import BrisbaneBuildingCleaners from "./pages/money/BrisbaneBuildingCleaners";
import ByronBayLabourers from "./pages/money/ByronBayLabourers";
import ByronBayDemolition from "./pages/money/ByronBayDemolition";
import ByronBayCarpenters from "./pages/money/ByronBayCarpenters";
import ByronBayBuildingCleaners from "./pages/money/ByronBayBuildingCleaners";
import LoganLabourers from "./pages/money/LoganLabourers";
import LoganDemolition from "./pages/money/LoganDemolition";
import LoganCarpenters from "./pages/money/LoganCarpenters";
import LoganBuildingCleaners from "./pages/money/LoganBuildingCleaners";
import TweedHeadsLabourers from "./pages/money/TweedHeadsLabourers";
import TweedHeadsDemolition from "./pages/money/TweedHeadsDemolition";
import TweedHeadsCarpenters from "./pages/money/TweedHeadsCarpenters";
import TweedHeadsBuildingCleaners from "./pages/money/TweedHeadsBuildingCleaners";
import IpswichLabourers from "./pages/money/IpswichLabourers";
import IpswichDemolition from "./pages/money/IpswichDemolition";
import IpswichCarpenters from "./pages/money/IpswichCarpenters";
import IpswichBuildingCleaners from "./pages/money/IpswichBuildingCleaners";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/client-tools" element={<ClientTools />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/work-with-us" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Blog Articles */}
            <Route path="/blog/labour-hire-rates-gold-coast" element={<LabourHireRatesGoldCoast />} />
            <Route path="/blog/hiring-carpenters-brisbane" element={<HiringCarpentersBrisbane />} />
            <Route path="/blog/white-card-checklist-qld-nsw" element={<WhiteCardChecklist />} />
            <Route path="/blog/shutdown-crew-mobilisation" element={<ShutdownMobilisation />} />
            <Route path="/blog/labour-hire-qld-guide" element={<LabourHireQldGuide />} />
            <Route path="/blog/avoiding-no-shows" element={<AvoidingNoShows />} />
            <Route path="/blog/residential-vs-commercial" element={<ResidentialVsCommercial />} />
            <Route path="/blog/whs-onboarding-checklist" element={<WhsOnboarding />} />
            
            {/* Conversion Pages */}
            <Route path="/request-labour" element={<RequestLabour />} />
            <Route path="/find-work" element={<FindWork />} />
            <Route path="/thank-you/request-labour" element={<ThankYouEmployer />} />
            <Route path="/thank-you/find-work" element={<ThankYouWorker />} />
            
            {/* Trust Pages */}
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/insurances" element={<Insurances />} />
            <Route path="/labour-hire-licensing" element={<LabourHireLicensing />} />
            
            {/* Trade Pages - Core 4 Services */}
            <Route path="/trades/labourers" element={<Labourers />} />
            <Route path="/trades/carpenters" element={<Carpenters />} />
            <Route path="/trades/building-cleaners" element={<BuildingCleaners />} />
            <Route path="/trades/demolition" element={<Demolition />} />
            
            {/* Location Pages */}
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/brisbane" element={<Brisbane />} />
            <Route path="/locations/gold-coast" element={<GoldCoast />} />
            <Route path="/locations/tweed-heads" element={<TweedHeads />} />
            <Route path="/locations/byron-bay" element={<ByronBay />} />
            <Route path="/locations/logan" element={<Logan />} />
            <Route path="/locations/ipswich" element={<Ipswich />} />
            <Route path="/labour-hire-brisbane" element={<Brisbane />} />
            <Route path="/labour-hire-gold-coast" element={<GoldCoast />} />
            <Route path="/labour-hire-byron-bay" element={<ByronBay />} />
            
            {/* Money Pages - Gold Coast */}
            <Route path="/gold-coast/labourers" element={<GoldCoastLabourers />} />
            <Route path="/gold-coast/demolition" element={<GoldCoastDemolition />} />
            <Route path="/gold-coast/carpenters" element={<GoldCoastCarpenters />} />
            <Route path="/gold-coast/building-cleaners" element={<GoldCoastBuildingCleaners />} />
            
            {/* Money Pages - Brisbane */}
            <Route path="/brisbane/labourers" element={<BrisbaneLabourers />} />
            <Route path="/brisbane/demolition" element={<BrisbaneDemolition />} />
            <Route path="/brisbane/carpenters" element={<BrisbaneCarpenters />} />
            <Route path="/brisbane/building-cleaners" element={<BrisbaneBuildingCleaners />} />
            
            {/* Money Pages - Byron Bay */}
            <Route path="/byron-bay/labourers" element={<ByronBayLabourers />} />
            <Route path="/byron-bay/demolition" element={<ByronBayDemolition />} />
            <Route path="/byron-bay/carpenters" element={<ByronBayCarpenters />} />
            <Route path="/byron-bay/building-cleaners" element={<ByronBayBuildingCleaners />} />
            
            {/* Money Pages - Logan */}
            <Route path="/logan/labourers" element={<LoganLabourers />} />
            <Route path="/logan/demolition" element={<LoganDemolition />} />
            <Route path="/logan/carpenters" element={<LoganCarpenters />} />
            <Route path="/logan/building-cleaners" element={<LoganBuildingCleaners />} />
            
            {/* Money Pages - Tweed Heads */}
            <Route path="/tweed-heads/labourers" element={<TweedHeadsLabourers />} />
            <Route path="/tweed-heads/demolition" element={<TweedHeadsDemolition />} />
            <Route path="/tweed-heads/carpenters" element={<TweedHeadsCarpenters />} />
            <Route path="/tweed-heads/building-cleaners" element={<TweedHeadsBuildingCleaners />} />
            
            {/* Money Pages - Ipswich */}
            <Route path="/ipswich/labourers" element={<IpswichLabourers />} />
            <Route path="/ipswich/demolition" element={<IpswichDemolition />} />
            <Route path="/ipswich/carpenters" element={<IpswichCarpenters />} />
            <Route path="/ipswich/building-cleaners" element={<IpswichBuildingCleaners />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
