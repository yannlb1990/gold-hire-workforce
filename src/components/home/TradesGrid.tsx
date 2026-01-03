import { Link } from "react-router-dom";
import { ArrowRight, Hammer, HardHat, Wrench, Sparkles } from "lucide-react";

export function TradesGrid() {
  const trades = [
    { icon: HardHat, name: "Skilled Labourers", slug: "labourers", description: "General construction support" },
    { icon: Wrench, name: "Demolition Crews", slug: "demolition", description: "Strip-outs & site clearing" },
    { icon: Hammer, name: "Carpenters", slug: "carpenters", description: "Framing, fitout & formwork" },
    { icon: Sparkles, name: "Building Cleaners", slug: "building-cleaners", description: "Post-construction cleans" },
  ];

  return (
    <section className="py-12 md:py-20 section-dark rounded-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-concrete mb-3 md:mb-4">Services We Provide</h2>
          <p className="text-base md:text-lg lg:text-xl text-concrete/70 max-w-2xl mx-auto leading-relaxed">
            From skilled tradespeople to general labour, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {trades.map((trade, index) => (
            <Link
              key={index}
              to={`/trades/${trade.slug}`}
              className="card-dark group min-h-[80px] p-4 md:p-6"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <trade.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm md:text-base text-concrete group-hover:text-gold transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-concrete/60 text-xs md:text-sm mt-0.5 md:mt-1 truncate">{trade.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-roman-coffee group-hover:text-gold transition-colors flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-bright font-medium transition-colors min-h-[44px] px-4"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
