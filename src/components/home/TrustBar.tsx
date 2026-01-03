import { Shield, Clock, RefreshCcw, Users } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    { icon: Shield, label: "Fully Insured", sublabel: "$20M Public Liability" },
    { icon: Clock, label: "24hr Response", sublabel: "Same-day quotes" },
    { icon: RefreshCcw, label: "Replacements", sublabel: "No-questions guarantee" },
    { icon: Users, label: "Screened Workers", sublabel: "Verified & compliant" },
  ];

  return (
    <section className="bg-navy-light py-4 md:py-6 border-y border-steel-blue/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3 justify-center md:justify-start p-2 md:p-0">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              </div>
              <div className="min-w-0">
                <p className="text-concrete font-semibold text-xs md:text-sm truncate">{item.label}</p>
                <p className="text-concrete/60 text-[10px] md:text-xs truncate hidden sm:block">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
