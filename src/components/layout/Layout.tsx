import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

interface LayoutProps {
  children: React.ReactNode;
  showMobileCTA?: boolean;
}

export function Layout({ children, showMobileCTA = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      {showMobileCTA && <MobileStickyCTA />}
    </div>
  );
}
