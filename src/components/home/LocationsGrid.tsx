import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

export function LocationsGrid() {
  const locations = [
    { name: "Gold Coast", slug: "gold-coast", suburbs: "Surfers Paradise, Robina, Southport..." },
    { name: "Brisbane", slug: "brisbane", suburbs: "CBD, South Brisbane, Fortitude Valley..." },
    { name: "Byron Bay", slug: "byron-bay", suburbs: "Byron Bay, Bangalow, Mullumbimby..." },
    { name: "Logan", slug: "logan", suburbs: "Logan Central, Springwood, Beenleigh..." },
    { name: "Ipswich", slug: "ipswich", suburbs: "Springfield, Goodna, Redbank Plains..." },
    { name: "Tweed Heads", slug: "tweed-heads", suburbs: "Tweed Heads, Banora Point, Kingscliff..." },
  ];

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-navy mb-3 md:mb-4">Areas We Service</h2>
          <p className="text-base md:text-lg lg:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Covering South-East QLD and Northern NSW.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Link
              key={index}
              to={`/locations/${location.slug}`}
              className="location-card group min-h-[100px] p-4 md:p-6"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
                <h3 className="font-semibold text-sm md:text-base text-concrete group-hover:text-gold transition-colors">
                  {location.name}
                </h3>
              </div>
              <p className="text-concrete/60 text-xs md:text-sm line-clamp-2">{location.suburbs}</p>
              <div className="flex items-center gap-1 mt-3 md:mt-4 text-gold text-xs md:text-sm font-medium">
                View area
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-bright font-medium transition-colors min-h-[44px] px-4"
          >
            View All Locations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
