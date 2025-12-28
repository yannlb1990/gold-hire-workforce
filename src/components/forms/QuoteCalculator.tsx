import { useState, useMemo } from "react";
import { Calculator, Users, MapPin, Clock, CalendarDays, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { TRADES, LOCATIONS } from "@/lib/constants";

// Estimated hourly rate ranges by trade
const RATE_RANGES: Record<string, { min: number; max: number }> = {
  labourers: { min: 38, max: 48 },
  demolition: { min: 42, max: 55 },
  carpenters: { min: 55, max: 75 },
  "building-cleaners": { min: 35, max: 45 },
  landscaping: { min: 38, max: 50 },
  maintenance: { min: 40, max: 55 },
};

// Location multipliers (some areas have higher demand)
const LOCATION_MULTIPLIERS: Record<string, number> = {
  "gold-coast": 1.0,
  brisbane: 1.05,
  logan: 0.95,
  ipswich: 0.95,
  "tweed-heads": 1.0,
  "byron-bay": 1.1,
};

const DURATION_OPTIONS = [
  { value: "1-day", label: "1 Day", multiplier: 1.0 },
  { value: "1-week", label: "1 Week", multiplier: 0.95 },
  { value: "2-4-weeks", label: "2-4 Weeks", multiplier: 0.9 },
  { value: "ongoing", label: "Ongoing (1+ months)", multiplier: 0.85 },
];

interface QuoteCalculatorProps {
  onGetQuote?: (data: { trade: string; location: string; workers: number; duration: string }) => void;
}

export function QuoteCalculator({ onGetQuote }: QuoteCalculatorProps) {
  const [trade, setTrade] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [workers, setWorkers] = useState<number>(1);
  const [duration, setDuration] = useState<string>("");

  const estimate = useMemo(() => {
    if (!trade || !location || !duration) return null;

    const baseRate = RATE_RANGES[trade] || { min: 40, max: 55 };
    const locationMult = LOCATION_MULTIPLIERS[location] || 1.0;
    const durationMult = DURATION_OPTIONS.find(d => d.value === duration)?.multiplier || 1.0;

    const minHourly = Math.round(baseRate.min * locationMult * durationMult);
    const maxHourly = Math.round(baseRate.max * locationMult * durationMult);

    // Assume 8-hour day
    const minDaily = minHourly * 8 * workers;
    const maxDaily = maxHourly * 8 * workers;

    return {
      minHourly,
      maxHourly,
      minDaily,
      maxDaily,
      workers,
    };
  }, [trade, location, workers, duration]);

  const handleGetQuote = () => {
    if (trade && location && duration && onGetQuote) {
      onGetQuote({ trade, location, workers, duration });
    }
  };

  const isComplete = trade && location && duration;

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-blob bg-gold/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-gold/5 blur-xl" />

      <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-foreground text-xl">Quote Calculator</h3>
            <p className="text-muted-foreground text-sm">Get an instant estimate for your project</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Inputs */}
          <div className="space-y-5">
            {/* Trade Selection */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                Trade Type
              </Label>
              <Select value={trade} onValueChange={setTrade}>
                <SelectTrigger className="rounded-xl h-12">
                  <SelectValue placeholder="Select trade..." />
                </SelectTrigger>
                <SelectContent>
                  {TRADES.map((t) => (
                    <SelectItem key={t.id} value={t.slug}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location Selection */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                Location
              </Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="rounded-xl h-12">
                  <SelectValue placeholder="Select location..." />
                </SelectTrigger>
                <SelectContent>
                  {LOCATIONS.map((l) => (
                    <SelectItem key={l.id} value={l.slug}>
                      {l.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Workers Slider */}
            <div className="space-y-3">
              <Label className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  Number of Workers
                </span>
                <span className="font-bold text-gold text-lg">{workers}</span>
              </Label>
              <Slider
                value={[workers]}
                onValueChange={(value) => setWorkers(value[0])}
                min={1}
                max={20}
                step={1}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1</span>
                <span>20+</span>
              </div>
            </div>

            {/* Duration Selection */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-gold" />
                Duration
              </Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="rounded-xl h-12">
                  <SelectValue placeholder="Select duration..." />
                </SelectTrigger>
                <SelectContent>
                  {DURATION_OPTIONS.map((d) => (
                    <SelectItem key={d.value} value={d.value}>
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Column - Estimate Display */}
          <div className="flex flex-col">
            <div className={`flex-grow rounded-2xl p-6 transition-all duration-300 ${
              isComplete ? "bg-oil text-concrete" : "bg-muted"
            }`}>
              {estimate ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Estimated Rates</span>
                  </div>
                  
                  <div>
                    <p className="text-concrete/70 text-sm mb-1">Hourly Rate (per worker)</p>
                    <p className="font-heading font-bold text-2xl text-concrete">
                      ${estimate.minHourly} - ${estimate.maxHourly}/hr
                    </p>
                  </div>

                  <div className="border-t border-roman-coffee/30 pt-4">
                    <p className="text-concrete/70 text-sm mb-1">
                      Daily Estimate ({estimate.workers} worker{estimate.workers > 1 ? "s" : ""} × 8hrs)
                    </p>
                    <p className="font-heading font-bold text-3xl text-gold">
                      ${estimate.minDaily.toLocaleString()} - ${estimate.maxDaily.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-concrete/60 text-xs mt-4">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>
                      Estimate only. Final rates depend on specific requirements, 
                      certifications needed, and start date.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Calculator className="w-12 h-12 text-muted-foreground/30 mb-3" />
                  <p className="text-muted-foreground">
                    Select trade, location and duration to see your estimate
                  </p>
                </div>
              )}
            </div>

            <Button
              variant="gold"
              size="lg"
              className="w-full mt-4 rounded-xl"
              disabled={!isComplete}
              onClick={handleGetQuote}
            >
              Get Exact Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
