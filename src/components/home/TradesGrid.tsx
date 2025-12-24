import { Link } from "react-router-dom";
import { ArrowRight, Hammer, HardHat, Wrench, Sparkles, Trees, Settings } from "lucide-react";

export function TradesGrid() {
  const trades = [
    { icon: HardHat, name: "Skilled Labourers", slug: "labourers", description: "General construction support" },
    { icon: Wrench, name: "Demolition Crews", slug: "demolition", description: "Strip-outs & site clearing" },
    { icon: Hammer, name: "Carpenters", slug: "carpenters", description: "Framing, fitout & formwork" },
    { icon: Sparkles, name: "Building Cleaners", slug: "building-cleaners", description: "Post-construction cleans" },
    { icon: Trees, name: "Landscaping Workers", slug: "landscaping", description: "Grounds & garden maintenance" },
    { icon: Settings, name: "Maintenance Workers", slug: "maintenance", description: "Facilities support" },
  ];

  return (
    <section className="py-20 section-dark rounded-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-concrete mb-4">Services We Provide</h2>
          <p className="body-lg text-concrete/70 max-w-2xl mx-auto">
            From skilled tradespeople to general labour, we have got your project covered.
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
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <trade.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-concrete group-hover:text-gold transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-concrete/60 text-sm mt-1">{trade.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-roman-coffee group-hover:text-gold transition-colors mt-1" />
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
