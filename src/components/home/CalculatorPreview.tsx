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
    <section className="py-12 md:py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-3 md:mb-4">
            <Calculator className="w-3 h-3 md:w-4 md:h-4" />
            Free Tool
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-concrete mb-3 md:mb-4">
            ABN vs TFN <span className="text-gradient-green">Calculator</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-concrete/70 max-w-2xl mx-auto leading-relaxed">
            Compare your take-home pay as contractor vs employee.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-light/50 border border-steel-blue/20 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
            {/* Input Row */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 mb-6 md:mb-8">
              {/* Trade Selector */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-concrete/80">
                  Your Trade
                </label>
                <Select value={selectedTrade} onValueChange={handleTradeChange}>
                  <SelectTrigger className="bg-navy border-steel-blue/30 text-concrete h-12 text-base">
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
                  <label className="text-xs md:text-sm font-medium text-concrete/80">
                    Hourly Rate
                  </label>
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <Slider
                  value={[hourlyRate]}
                  onValueChange={(value) => setHourlyRate(value[0])}
                  min={25}
                  max={80}
                  step={1}
                  className="w-full py-2"
                />
              </div>
            </div>

            {/* Results Row */}
            <div className="grid gap-2 xs:gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 mb-4 md:mb-6">
              {/* TFN Result */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg md:rounded-xl p-2 xs:p-3 md:p-4 text-center">
                <p className="text-[9px] xs:text-[10px] md:text-xs text-concrete/60 mb-0.5 md:mb-1">TFN</p>
                <p className="text-base xs:text-lg md:text-2xl font-bold text-concrete break-words">
                  {formatCurrency(tfnResult.netTakeHome)}
                </p>
                <p className="text-[9px] xs:text-[10px] md:text-xs text-concrete/60">
                  {formatCurrency(tfnResult.weeklyTakeHome)}/wk
                </p>
              </div>

              {/* ABN Result */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg md:rounded-xl p-2 xs:p-3 md:p-4 text-center">
                <p className="text-[9px] xs:text-[10px] md:text-xs text-concrete/60 mb-0.5 md:mb-1">ABN</p>
                <p className="text-base xs:text-lg md:text-2xl font-bold text-concrete break-words">
                  {formatCurrency(abnResult.netTakeHome)}
                </p>
                <p className="text-[9px] xs:text-[10px] md:text-xs text-concrete/60">
                  {formatCurrency(abnResult.weeklyTakeHome)}/wk
                </p>
              </div>

              {/* Difference */}
              <div
                className={cn(
                  "rounded-lg md:rounded-xl p-3 md:p-4 text-center flex flex-col items-center justify-center col-span-2 md:col-span-1",
                  abnBetter
                    ? "bg-primary/20 border border-primary/30"
                    : "bg-accent/20 border border-accent/30"
                )}
              >
                <TrendingUp
                  className={cn(
                    "w-4 h-4 md:w-5 md:h-5 mb-0.5 md:mb-1",
                    abnBetter ? "text-primary" : "text-accent"
                  )}
                />
                <p className="text-[10px] md:text-xs text-concrete/60 mb-0.5 md:mb-1">
                  {abnBetter ? "ABN" : "TFN"} pays more
                </p>
                <p
                  className={cn(
                    "text-lg md:text-xl font-bold",
                    abnBetter ? "text-primary" : "text-accent"
                  )}
                >
                  +{formatCurrency(Math.abs(netDifference))}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="default" size="lg" className="w-full sm:w-auto min-h-[48px]" asChild>
                <Link to="/wage-calculator">
                  Full Calculator
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
              <p className="text-[10px] md:text-xs text-concrete/50 mt-2 md:mt-3">
                Includes super, leave & expense calculations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
