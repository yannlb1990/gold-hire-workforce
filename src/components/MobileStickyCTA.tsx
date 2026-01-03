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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-steel-blue/30 p-2 xs:p-3 safe-area-pb">
      <div className="flex gap-2 xs:gap-3">
        <Button
          asChild
          variant="gold"
          className="flex-1 h-12 xs:h-14 text-xs xs:text-sm sm:text-base font-semibold min-w-0 px-2 xs:px-4"
          onClick={handleCallClick}
        >
          <a href={PHONE_HREF}>
            <Phone className="mr-1 xs:mr-2 h-4 w-4 xs:h-5 xs:w-5 shrink-0" />
            <span className="truncate">Call</span>
          </a>
        </Button>
        <Button
          asChild
          variant="navy"
          className="flex-1 h-12 xs:h-14 text-xs xs:text-sm sm:text-base font-semibold bg-steel-blue hover:bg-steel-blue-light text-concrete min-w-0 px-2 xs:px-4"
        >
          <Link to="/request-labour">
            <FileText className="mr-1 xs:mr-2 h-4 w-4 xs:h-5 xs:w-5 shrink-0" />
            <span className="truncate">Request</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
