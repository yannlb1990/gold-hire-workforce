import { Shield, Clock, RefreshCcw, Users } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    { icon: Shield, label: "Fully Insured", sublabel: "$20M Public Liability" },
    { icon: Clock, label: "24hr Response", sublabel: "Same-day quotes" },
    { icon: RefreshCcw, label: "Replacements", sublabel: "No-questions guarantee" },
    { icon: Users, label: "Screened Workers", sublabel: "Verified & compliant" },
  ];

  return (
    <section className="bg-navy-light py-6 border-y border-steel-blue/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-concrete font-semibold text-sm">{item.label}</p>
                <p className="text-concrete/60 text-xs">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
