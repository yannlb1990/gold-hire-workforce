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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy mb-4">Areas We Service</h2>
          <p className="body-lg text-charcoal/70 max-w-2xl mx-auto">
            Covering South-East Queensland and Northern NSW with reliable labour hire.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Link
              key={index}
              to={`/locations/${location.slug}`}
              className="location-card group"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gold" />
                <h3 className="font-semibold text-concrete group-hover:text-gold transition-colors">
                  {location.name}
                </h3>
              </div>
              <p className="text-concrete/60 text-sm">{location.suburbs}</p>
              <div className="flex items-center gap-1 mt-4 text-gold text-sm font-medium">
                View area
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-bright font-medium transition-colors"
          >
            View All Locations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
