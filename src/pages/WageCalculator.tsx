import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TRADE_PRESETS, getTradePreset, SavedScenario } from "@/data/calculatorPresets";
import { calculateTFNScenario } from "@/lib/tfnCalculations";
import { calculateABNScenario } from "@/lib/abnCalculations";
import { ComparisonResults } from "@/components/calculator/ComparisonResults";
import { ScenarioComparison } from "@/components/calculator/ScenarioComparison";
import { EducationalSection, InfoTooltip } from "@/components/calculator/CalculatorTooltips";
import { AdvancedOptions } from "@/components/calculator/AdvancedOptions";
import { Calculator, DollarSign, Clock, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WageCalculator() {
  // Form state
  const [selectedTrade, setSelectedTrade] = useState("general-labourer");
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  const [expenseRate, setExpenseRate] = useState(0.15);
  const [includeSuper, setIncludeSuper] = useState(true);

  // FIFO state
  const [fifoEnabled, setFifoEnabled] = useState(false);
  const [fifoRoster, setFifoRoster] = useState("2-1");

  // Overtime state
  const [overtimeEnabled, setOvertimeEnabled] = useState(false);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [overtimeMultiplier, setOvertimeMultiplier] = useState("1.5x");

  // Get trade preset
  const tradePreset = getTradePreset(selectedTrade);

  // Handle trade change
  const handleTradeChange = (tradeId: string) => {
    setSelectedTrade(tradeId);
    const preset = getTradePreset(tradeId);
    if (preset) {
      setHourlyRate(preset.defaultHourlyRate);
      setHoursPerWeek(preset.typicalHours);
      setExpenseRate(preset.typicalExpenseRate);
      
      // Apply FIFO settings from preset
      setFifoEnabled(preset.fifoEnabled ?? false);
      setFifoRoster(preset.fifoRoster ?? "2-1");
      
      // Apply overtime settings from preset
      setOvertimeEnabled(preset.overtimeEnabled ?? false);
      setOvertimeHours(preset.overtimeHours ?? 0);
      setOvertimeMultiplier(preset.overtimeMultiplier ?? "1.5x");
    }
  };

  // Load saved scenario
  const handleLoadScenario = (scenario: SavedScenario) => {
    setSelectedTrade(scenario.trade);
    setHourlyRate(scenario.hourlyRate);
    setHoursPerWeek(scenario.hoursPerWeek);
    setWeeksPerYear(scenario.weeksPerYear);
    setExpenseRate(scenario.expenseRate);
    setIncludeSuper(scenario.includeSuper);
    
    // Load FIFO settings
    setFifoEnabled(scenario.fifoEnabled ?? false);
    setFifoRoster(scenario.fifoRoster ?? "2-1");
    
    // Load overtime settings
    setOvertimeEnabled(scenario.overtimeEnabled ?? false);
    setOvertimeHours(scenario.overtimeHours ?? 0);
    setOvertimeMultiplier(scenario.overtimeMultiplier ?? "1.5x");
  };

  // Calculate results with advanced options
  const tfnResult = useMemo(
    () => calculateTFNScenario(hourlyRate, hoursPerWeek, weeksPerYear, {
      fifoEnabled,
      fifoRoster,
      overtimeEnabled,
      overtimeHours,
      overtimeMultiplier,
    }),
    [hourlyRate, hoursPerWeek, weeksPerYear, fifoEnabled, fifoRoster, overtimeEnabled, overtimeHours, overtimeMultiplier]
  );

  const abnResult = useMemo(
    () => calculateABNScenario(hourlyRate, hoursPerWeek, weeksPerYear, expenseRate, includeSuper, {
      fifoEnabled,
      fifoRoster,
      overtimeEnabled,
      overtimeHours,
      overtimeMultiplier,
    }),
    [hourlyRate, hoursPerWeek, weeksPerYear, expenseRate, includeSuper, fifoEnabled, fifoRoster, overtimeEnabled, overtimeHours, overtimeMultiplier]
  );

  return (
    <Layout>
      <Helmet>
        <title>ABN vs TFN Calculator Australia 2024-25 | FIFO & Overtime | Precision Site Solutions</title>
        <meta
          name="description"
          content="Free ABN vs TFN wage calculator with FIFO rosters and overtime. Compare contractor vs employee take-home pay with 2024-25 tax rates, LAFHA, super, and leave."
        />
        <meta
          name="keywords"
          content="ABN vs TFN calculator, FIFO calculator, overtime calculator, contractor vs employee, Australian tax calculator, tradie wage calculator, LAFHA calculator"
        />
        <link rel="canonical" href="https://precisionsitesolutions.com.au/wage-calculator" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-navy via-navy-light to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Free Calculator Tool
            </div>
            <h1 className="heading-xl text-concrete mb-4">
              ABN vs TFN{" "}
              <span className="text-gradient-green">Wage Calculator</span>
            </h1>
            <p className="text-lg text-concrete/70 max-w-2xl mx-auto">
              Compare your take-home pay as a contractor (ABN) versus employee (TFN). 
              Now with FIFO rosters, LAFHA, and overtime calculations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Input Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h2 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Your Details
                </h2>

                <div className="space-y-6">
                  {/* Trade Selector */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Trade / Role</Label>
                    <Select value={selectedTrade} onValueChange={handleTradeChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a trade" />
                      </SelectTrigger>
                      <SelectContent>
                        {TRADE_PRESETS.map((trade) => (
                          <SelectItem key={trade.id} value={trade.id}>
                            {trade.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {tradePreset && (
                      <p className="text-xs text-muted-foreground">
                        {tradePreset.description}
                      </p>
                    )}
                  </div>

                  {/* Hourly Rate */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium flex items-center gap-2">
                        Hourly Rate
                        <DollarSign className="w-3.5 h-3.5 text-muted-foreground" />
                      </Label>
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-primary">
                          ${hourlyRate}
                        </span>
                        <span className="text-sm text-muted-foreground">/hr</span>
                      </div>
                    </div>
                    <Slider
                      value={[hourlyRate]}
                      onValueChange={(value) => setHourlyRate(value[0])}
                      min={20}
                      max={120}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$20</span>
                      <span>$120</span>
                    </div>
                  </div>

                  {/* Hours Per Week */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium flex items-center gap-2">
                        Hours Per Week
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                      </Label>
                      <span className="text-lg font-semibold text-foreground">
                        {hoursPerWeek} hrs
                      </span>
                    </div>
                    <Slider
                      value={[hoursPerWeek]}
                      onValueChange={(value) => setHoursPerWeek(value[0])}
                      min={20}
                      max={60}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>20 hrs</span>
                      <span>60 hrs</span>
                    </div>
                  </div>

                  {/* Weeks Per Year */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium flex items-center gap-2">
                        Weeks Per Year
                        <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                      </Label>
                      <span className="text-lg font-semibold text-foreground">
                        {weeksPerYear} wks
                      </span>
                    </div>
                    <Slider
                      value={[weeksPerYear]}
                      onValueChange={(value) => setWeeksPerYear(value[0])}
                      min={40}
                      max={52}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>40 wks</span>
                      <span>52 wks</span>
                    </div>
                  </div>

                  {/* ABN Specific Settings */}
                  <div className="pt-4 border-t border-border space-y-4">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      ABN Settings
                    </h3>

                    {/* Business Expenses */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium flex items-center gap-2">
                          Business Expenses
                          <InfoTooltip tooltipKey="businessExpenses" />
                        </Label>
                        <span className="text-lg font-semibold text-foreground">
                          {(expenseRate * 100).toFixed(0)}%
                        </span>
                      </div>
                      <Slider
                        value={[expenseRate * 100]}
                        onValueChange={(value) => setExpenseRate(value[0] / 100)}
                        min={5}
                        max={40}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>5%</span>
                        <span>40%</span>
                      </div>
                    </div>

                    {/* Include Super */}
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <Label className="text-sm font-medium">
                          Self-fund Super (11.5%)
                        </Label>
                        <InfoTooltip tooltipKey="super" />
                      </div>
                      <Switch
                        checked={includeSuper}
                        onCheckedChange={setIncludeSuper}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Options Card */}
              <AdvancedOptions
                fifoEnabled={fifoEnabled}
                onFifoEnabledChange={setFifoEnabled}
                fifoRoster={fifoRoster}
                onFifoRosterChange={setFifoRoster}
                overtimeEnabled={overtimeEnabled}
                onOvertimeEnabledChange={setOvertimeEnabled}
                overtimeHours={overtimeHours}
                onOvertimeHoursChange={setOvertimeHours}
                overtimeMultiplier={overtimeMultiplier}
                onOvertimeMultiplierChange={setOvertimeMultiplier}
                hourlyRate={hourlyRate}
                weeksPerYear={fifoEnabled ? tfnResult.actualWorkingWeeks : weeksPerYear}
              />
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-7 space-y-8">
              <ComparisonResults 
                tfnResult={tfnResult} 
                abnResult={abnResult}
                fifoEnabled={fifoEnabled}
                overtimeEnabled={overtimeEnabled}
              />

              <ScenarioComparison
                currentScenario={{
                  trade: selectedTrade,
                  hourlyRate,
                  hoursPerWeek,
                  weeksPerYear,
                  expenseRate,
                  includeSuper,
                  fifoEnabled,
                  fifoRoster,
                  overtimeEnabled,
                  overtimeHours,
                  overtimeMultiplier,
                }}
                onLoadScenario={handleLoadScenario}
              />

              <EducationalSection />

              {/* CTA Section */}
              <div className="bg-navy rounded-2xl p-8 text-center">
                <h3 className="heading-md text-concrete mb-3">
                  Need <span className="text-gradient-green">Reliable Workers?</span>
                </h3>
                <p className="text-concrete/70 mb-6 max-w-lg mx-auto">
                  Whether you need TFN employees or ABN contractors, we provide skilled
                  labour across Gold Coast, Brisbane & Byron Bay.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/request-labour">
                      Request Labour
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-concrete/30 text-concrete hover:bg-concrete/10" asChild>
                    <Link to="/careers">Find Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "ABN vs TFN Wage Calculator with FIFO & Overtime",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "AUD",
          },
          description:
            "Free calculator to compare take-home pay between ABN contractor and TFN employee arrangements for Australian tradies. Includes FIFO rosters, LAFHA, and overtime calculations.",
        })}
      </script>
    </Layout>
  );
}
