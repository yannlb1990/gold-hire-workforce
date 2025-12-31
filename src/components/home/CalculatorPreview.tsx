import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TRADE_PRESETS, getTradePreset } from "@/data/calculatorPresets";
import { calculateTFNScenario } from "@/lib/tfnCalculations";
import { calculateABNScenario } from "@/lib/abnCalculations";
import { formatCurrency } from "@/lib/taxCalculations";
import { Calculator, ArrowRight, TrendingUp, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

export function CalculatorPreview() {
  const [selectedTrade, setSelectedTrade] = useState("general-labourer");
  const [hourlyRate, setHourlyRate] = useState(35);

  const tradePreset = getTradePreset(selectedTrade);

  const handleTradeChange = (tradeId: string) => {
    setSelectedTrade(tradeId);
    const preset = getTradePreset(tradeId);
    if (preset) {
      setHourlyRate(preset.defaultHourlyRate);
    }
  };

  const tfnResult = useMemo(
    () => calculateTFNScenario(hourlyRate, 40, 48),
    [hourlyRate]
  );

  const abnResult = useMemo(
    () => calculateABNScenario(hourlyRate, 40, 48, 0.15, true),
    [hourlyRate]
  );

  const netDifference = abnResult.netTakeHome - tfnResult.netTakeHome;
  const abnBetter = netDifference > 0;

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Free Tool
          </div>
          <h2 className="heading-lg text-concrete mb-4">
            ABN vs TFN <span className="text-gradient-green">Calculator</span>
          </h2>
          <p className="text-concrete/70 max-w-2xl mx-auto">
            Compare your take-home pay as a contractor (ABN) versus employee (TFN).
            See which option puts more money in your pocket.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-light/50 border border-steel-blue/20 rounded-2xl p-6 md:p-8">
            {/* Input Row */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {/* Trade Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-concrete/80">
                  Your Trade
                </label>
                <Select value={selectedTrade} onValueChange={handleTradeChange}>
                  <SelectTrigger className="bg-navy border-steel-blue/30 text-concrete">
                    <SelectValue placeholder="Select a trade" />
                  </SelectTrigger>
                  <SelectContent>
                    {TRADE_PRESETS.slice(0, 4).map((trade) => (
                      <SelectItem key={trade.id} value={trade.id}>
                        {trade.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Hourly Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-concrete/80">
                    Hourly Rate
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <Slider
                  value={[hourlyRate]}
                  onValueChange={(value) => setHourlyRate(value[0])}
                  min={25}
                  max={80}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Results Row */}
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              {/* TFN Result */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 text-center">
                <p className="text-xs text-concrete/60 mb-1">TFN (Employee)</p>
                <p className="text-2xl font-bold text-concrete">
                  {formatCurrency(tfnResult.netTakeHome)}
                </p>
                <p className="text-xs text-concrete/60">
                  {formatCurrency(tfnResult.weeklyTakeHome)}/week
                </p>
              </div>

              {/* ABN Result */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                <p className="text-xs text-concrete/60 mb-1">ABN (Contractor)</p>
                <p className="text-2xl font-bold text-concrete">
                  {formatCurrency(abnResult.netTakeHome)}
                </p>
                <p className="text-xs text-concrete/60">
                  {formatCurrency(abnResult.weeklyTakeHome)}/week
                </p>
              </div>

              {/* Difference */}
              <div
                className={cn(
                  "rounded-xl p-4 text-center flex flex-col items-center justify-center",
                  abnBetter
                    ? "bg-primary/20 border border-primary/30"
                    : "bg-accent/20 border border-accent/30"
                )}
              >
                <TrendingUp
                  className={cn(
                    "w-5 h-5 mb-1",
                    abnBetter ? "text-primary" : "text-accent"
                  )}
                />
                <p className="text-xs text-concrete/60 mb-1">
                  {abnBetter ? "ABN" : "TFN"} pays more
                </p>
                <p
                  className={cn(
                    "text-xl font-bold",
                    abnBetter ? "text-primary" : "text-accent"
                  )}
                >
                  +{formatCurrency(Math.abs(netDifference))}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/wage-calculator">
                  Full Calculator with Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-xs text-concrete/50 mt-3">
                Includes super, leave, insurance, and business expense calculations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
