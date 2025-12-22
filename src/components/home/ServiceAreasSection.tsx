import { MapPin } from "lucide-react";

const areas = [
  { name: "Gold Coast", description: "From Coolangatta to Coomera" },
  { name: "Brisbane", description: "CBD, suburbs and surrounds" },
  { name: "Logan", description: "Full coverage across Logan City" },
  { name: "Ipswich", description: "Ipswich and greater region" },
  { name: "Tweed Heads", description: "Northern Rivers service area" },
  { name: "Byron Bay", description: "Byron shire and surrounds" },
];

export function ServiceAreasSection() {
  return (
    <section className="py-24 lg:py-32 section-light relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-6">
            <MapPin size={16} />
            Service Areas
          </div>
          <h2 className="heading-lg text-navy mb-6">
            Labour Hire Across{" "}
            <span className="text-gradient-gold">South-East Queensland</span>
          </h2>
          <p className="body-lg text-charcoal/70">
            Serving the Gold Coast, Brisbane, and Northern Rivers region. 
            Fast deployment and local expertise wherever you need us.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <div
              key={area.name}
              className="group p-6 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-elevated text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-1">
                {area.name}
              </h3>
              <p className="text-charcoal/60 text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-navy text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div>
              <div className="text-4xl font-heading font-bold text-gold mb-1">500+</div>
              <div className="text-concrete/70 text-sm">Clients Served</div>
            </div>
            <div className="w-px h-12 bg-steel-blue/30 hidden lg:block" />
            <div>
              <div className="text-4xl font-heading font-bold text-gold mb-1">10,000+</div>
              <div className="text-concrete/70 text-sm">Shifts Completed</div>
            </div>
            <div className="w-px h-12 bg-steel-blue/30 hidden lg:block" />
            <div>
              <div className="text-4xl font-heading font-bold text-gold mb-1">98%</div>
              <div className="text-concrete/70 text-sm">Client Retention</div>
            </div>
            <div className="w-px h-12 bg-steel-blue/30 hidden lg:block" />
            <div>
              <div className="text-4xl font-heading font-bold text-gold mb-1">4hr</div>
              <div className="text-concrete/70 text-sm">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
