import { Link } from "react-router-dom";
import { ArrowRight, Hammer, HardHat, Wrench, Paintbrush, Building, Construction } from "lucide-react";

export function TradesGrid() {
  const trades = [
    { icon: Hammer, name: "Carpenters", slug: "carpenters", description: "Framing, fitout & formwork" },
    { icon: HardHat, name: "Labourers", slug: "labourers", description: "General construction support" },
    { icon: Wrench, name: "Demolition", slug: "demolition", description: "Strip-outs & site clearing" },
    { icon: Building, name: "Fitout Crews", slug: "fitout-crews", description: "Commercial & retail fitouts" },
    { icon: Paintbrush, name: "Plasterers", slug: "plasterers", description: "Plasterboard & rendering" },
    { icon: Construction, name: "Concreters", slug: "concreters", description: "Pouring & finishing" },
  ];

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-concrete mb-4">Trades We Supply</h2>
          <p className="body-lg text-concrete/70 max-w-2xl mx-auto">
            From skilled tradespeople to general labour, we've got your project covered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trades.map((trade, index) => (
            <Link
              key={index}
              to={`/trades/${trade.slug}`}
              className="card-dark group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <trade.icon className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-concrete group-hover:text-gold transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-concrete/60 text-sm mt-1">{trade.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-steel-blue group-hover:text-gold transition-colors mt-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-bright font-medium transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
