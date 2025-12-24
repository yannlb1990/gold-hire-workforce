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
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
