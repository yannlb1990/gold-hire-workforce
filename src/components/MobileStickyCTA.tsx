import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_HREF } from "@/lib/constants";
import { Link } from "react-router-dom";

export function MobileStickyCTA() {
  const handleCallClick = () => {
    // Fire analytics event
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "call_click",
        event_category: "engagement",
        event_label: "mobile_sticky_cta",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-steel-blue/30 p-3 safe-area-pb">
      <div className="flex gap-3">
        <Button
          asChild
          variant="gold"
          className="flex-1 h-14 text-base font-semibold"
          onClick={handleCallClick}
        >
          <a href={PHONE_HREF}>
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button
          asChild
          variant="navy"
          className="flex-1 h-14 text-base font-semibold bg-steel-blue hover:bg-steel-blue-light text-concrete"
        >
          <Link to="/request-labour">
            <FileText className="mr-2 h-5 w-5" />
            Request Labour
          </Link>
        </Button>
      </div>
    </div>
  );
}
