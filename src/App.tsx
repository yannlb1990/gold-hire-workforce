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
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/brisbane" element={<Brisbane />} />
            <Route path="/locations/gold-coast" element={<GoldCoast />} />
            <Route path="/locations/tweed-heads" element={<TweedHeads />} />
            <Route path="/locations/byron-bay" element={<ByronBay />} />
            <Route path="/locations/logan" element={<Logan />} />
            <Route path="/locations/ipswich" element={<Ipswich />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
