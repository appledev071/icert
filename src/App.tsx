
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VpnInfo from "./pages/VpnInfo";
import NotFound from "./pages/NotFound";
import DeveloperCertificateInfo from "./pages/DeveloperCertificateInfo";
import InstallationGuide from "./pages/InstallationGuide";
import FAQ from "./pages/FAQ";
import WikiIndex from "./pages/WikiIndex";
import AboutUs from "./pages/AboutUs";
import VpnPricing from "./pages/VpnPricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vpn-info" element={<VpnInfo />} />
          <Route path="/vpn-pricing" element={<VpnPricing />} />
          <Route path="/developer-certificate-info" element={<DeveloperCertificateInfo />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/wiki" element={<WikiIndex />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
