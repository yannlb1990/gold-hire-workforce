import { Phone, FileText, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_HREF } from "@/lib/constants";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function MobileStickyCTA() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleCallClick = () => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "call_click",
        event_category: "engagement",
        event_label: "mobile_sticky_cta",
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-steel-blue/30 p-2 xs:p-3 safe-area-pb">
      <div className="flex gap-2 xs:gap-3">
        {!isHomePage && (
          <>
            <Button
              variant="outline"
              className="flex-1 h-12 xs:h-14 text-xs xs:text-sm font-semibold min-w-0 px-2 xs:px-3 border-steel-blue/50 text-concrete hover:bg-steel-blue/20"
              onClick={handleBack}
            >
              <ArrowLeft className="h-4 w-4 xs:h-5 xs:w-5 shrink-0" />
              <span className="hidden xs:inline ml-1">Back</span>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 h-12 xs:h-14 text-xs xs:text-sm font-semibold min-w-0 px-2 xs:px-3 border-steel-blue/50 text-concrete hover:bg-steel-blue/20"
            >
              <Link to="/">
                <Home className="h-4 w-4 xs:h-5 xs:w-5 shrink-0" />
                <span className="hidden xs:inline ml-1">Home</span>
              </Link>
            </Button>
          </>
        )}
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
