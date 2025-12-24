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

// Trade Pages
import Carpenters from "./pages/trades/Carpenters";
import Labourers from "./pages/trades/Labourers";
import Demolition from "./pages/trades/Demolition";
import FitoutCrews from "./pages/trades/FitoutCrews";
import Plasterers from "./pages/trades/Plasterers";
import Concreters from "./pages/trades/Concreters";
import SteelFixers from "./pages/trades/SteelFixers";

// Conversion Pages
import RequestLabour from "./pages/RequestLabour";
import FindWork from "./pages/FindWork";
import ThankYouEmployer from "./pages/ThankYouEmployer";
import ThankYouWorker from "./pages/ThankYouWorker";

// Trust Pages
import Compliance from "./pages/Compliance";
import Insurances from "./pages/Insurances";
import LabourHireLicensing from "./pages/LabourHireLicensing";

// Money Pages
import GoldCoastCarpenters from "./pages/money/GoldCoastCarpenters";
import GoldCoastLabourers from "./pages/money/GoldCoastLabourers";
import GoldCoastDemolition from "./pages/money/GoldCoastDemolition";
import GoldCoastFitoutCrews from "./pages/money/GoldCoastFitoutCrews";
import GoldCoastPlasterers from "./pages/money/GoldCoastPlasterers";
import GoldCoastConcreters from "./pages/money/GoldCoastConcreters";
import GoldCoastSteelFixers from "./pages/money/GoldCoastSteelFixers";
import BrisbaneCarpenters from "./pages/money/BrisbaneCarpenters";
import BrisbaneLabourers from "./pages/money/BrisbaneLabourers";
import BrisbaneDemolition from "./pages/money/BrisbaneDemolition";
import BrisbaneFitoutCrews from "./pages/money/BrisbaneFitoutCrews";
import BrisbanePlasterers from "./pages/money/BrisbanePlasterers";
import BrisbaneConcreters from "./pages/money/BrisbaneConcreters";
import BrisbaneSteelFixers from "./pages/money/BrisbaneSteelFixers";
import ByronBayCarpenters from "./pages/money/ByronBayCarpenters";
import ByronBayLabourers from "./pages/money/ByronBayLabourers";
import ByronBayDemolition from "./pages/money/ByronBayDemolition";
import ByronBayFitoutCrews from "./pages/money/ByronBayFitoutCrews";
import ByronBayPlasterers from "./pages/money/ByronBayPlasterers";
import ByronBayConcreters from "./pages/money/ByronBayConcreters";
import ByronBaySteelFixers from "./pages/money/ByronBaySteelFixers";

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
            
            {/* Conversion Pages */}
            <Route path="/request-labour" element={<RequestLabour />} />
            <Route path="/find-work" element={<FindWork />} />
            <Route path="/thank-you/request-labour" element={<ThankYouEmployer />} />
            <Route path="/thank-you/find-work" element={<ThankYouWorker />} />
            
            {/* Trust Pages */}
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/insurances" element={<Insurances />} />
            <Route path="/labour-hire-licensing" element={<LabourHireLicensing />} />
            
            {/* Trade Pages */}
            <Route path="/trades/carpenters" element={<Carpenters />} />
            <Route path="/trades/labourers" element={<Labourers />} />
            <Route path="/trades/demolition" element={<Demolition />} />
            <Route path="/trades/fitout-crews" element={<FitoutCrews />} />
            <Route path="/trades/plasterers" element={<Plasterers />} />
            <Route path="/trades/concreters" element={<Concreters />} />
            <Route path="/trades/steel-fixers" element={<SteelFixers />} />
            
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
            <Route path="/gold-coast/carpenters" element={<GoldCoastCarpenters />} />
            <Route path="/gold-coast/labourers" element={<GoldCoastLabourers />} />
            <Route path="/gold-coast/demolition" element={<GoldCoastDemolition />} />
            <Route path="/gold-coast/fitout-crews" element={<GoldCoastFitoutCrews />} />
            <Route path="/gold-coast/plasterers" element={<GoldCoastPlasterers />} />
            <Route path="/gold-coast/concreters" element={<GoldCoastConcreters />} />
            <Route path="/gold-coast/steel-fixers" element={<GoldCoastSteelFixers />} />
            
            {/* Money Pages - Brisbane */}
            <Route path="/brisbane/carpenters" element={<BrisbaneCarpenters />} />
            <Route path="/brisbane/labourers" element={<BrisbaneLabourers />} />
            <Route path="/brisbane/demolition" element={<BrisbaneDemolition />} />
            <Route path="/brisbane/fitout-crews" element={<BrisbaneFitoutCrews />} />
            <Route path="/brisbane/plasterers" element={<BrisbanePlasterers />} />
            <Route path="/brisbane/concreters" element={<BrisbaneConcreters />} />
            <Route path="/brisbane/steel-fixers" element={<BrisbaneSteelFixers />} />
            
            {/* Money Pages - Byron Bay */}
            <Route path="/byron-bay/carpenters" element={<ByronBayCarpenters />} />
            <Route path="/byron-bay/labourers" element={<ByronBayLabourers />} />
            <Route path="/byron-bay/demolition" element={<ByronBayDemolition />} />
            <Route path="/byron-bay/fitout-crews" element={<ByronBayFitoutCrews />} />
            <Route path="/byron-bay/plasterers" element={<ByronBayPlasterers />} />
            <Route path="/byron-bay/concreters" element={<ByronBayConcreters />} />
            <Route path="/byron-bay/steel-fixers" element={<ByronBaySteelFixers />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
