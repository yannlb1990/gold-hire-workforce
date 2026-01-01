import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calculator, TrendingUp, AlertCircle, Plus, Trash2, Save, ChevronDown, Plane, Clock, Car, Wrench, UtensilsCrossed, DollarSign } from "lucide-react";
import { calculateTFN } from "@/lib/calculator/tfnCalculations";
import { calculateABN } from "@/lib/calculator/abnCalculations";
import { PRESET_SCENARIOS, type PresetScenario } from "@/lib/calculator/presetScenarios";
import { calculateTypicalExpenses } from "@/lib/calculator/abnCalculations";
import ComparisonResults from "@/components/calculator/ComparisonResults";
import TaxBracketsTable from "@/components/calculator/TaxBracketsTable";
import { Badge } from "@/components/ui/badge";

interface CalculatorInputs {
  // Common inputs
  hoursPerWeek: number;
  weeksPerYear: number;

  // TFN inputs
  tfnHourlyRate: number;

  // ABN inputs
  abnHourlyRate: number;
  businessExpenses: number;
  superContribution: number;
  accountForLeave: boolean;

  // Advanced options
  enableFIFO: boolean;
  fifoRoster: "2-1" | "3-1" | "4-2" | "8-6";
  enableOvertime: boolean;
  overtimeHours: number;
  overtimeRate: number;

  // Allowances
  enableAllowances: boolean;
  carAllowancePerWeek: number;
  toolAllowancePerWeek: number;
  mealAllowanceDaysPerWeek: number;
}

interface SavedScenario extends CalculatorInputs {
  id: string;
  name: string;
}

const WageCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    hoursPerWeek: 38,
    weeksPerYear: 48,
    tfnHourlyRate: 35,
    abnHourlyRate: 48,
    businessExpenses: 10000,
    superContribution: 10,
    accountForLeave: true,
    enableFIFO: false,
    fifoRoster: "2-1",
    enableOvertime: false,
    overtimeHours: 10,
    overtimeRate: 1.5,
    enableAllowances: false,
    carAllowancePerWeek: 150,
    toolAllowancePerWeek: 12,
    mealAllowanceDaysPerWeek: 5,
  });

  const [savedScenarios, setSavedScenarios] = useState<SavedScenario[]>([]);
  const [activeTab, setActiveTab] = useState<"single" | "compare">("single");
  const [useEstimatedExpenses, setUseEstimatedExpenses] = useState(false);

  // Calculate estimated expenses when ABN rate changes
  useEffect(() => {
    if (useEstimatedExpenses) {
      const estimated = calculateTypicalExpenses(inputs.abnHourlyRate);
      setInputs((prev) => ({ ...prev, businessExpenses: Math.round(estimated) }));
    }
  }, [inputs.abnHourlyRate, useEstimatedExpenses]);

  // Load preset scenario
  const loadPreset = (presetId: string) => {
    const preset = PRESET_SCENARIOS.find((p) => p.id === presetId);
    if (preset) {
      setInputs({
        hoursPerWeek: preset.hoursPerWeek,
        weeksPerYear: preset.weeksPerYear,
        tfnHourlyRate: preset.tfnHourlyRate,
        abnHourlyRate: preset.abnHourlyRate,
        businessExpenses: preset.estimatedBusinessExpenses,
        superContribution: preset.recommendedSuperContribution,
        accountForLeave: true,
        enableFIFO: preset.isFIFO || false,
        fifoRoster: preset.fifoRosterPattern || "2-1",
        enableOvertime: preset.hasOvertime || false,
        overtimeHours: preset.overtimeHoursPerWeek || 10,
        overtimeRate: preset.overtimeRate || 1.5,
        enableAllowances: preset.hasAllowances || false,
        carAllowancePerWeek: 150,
        toolAllowancePerWeek: 12,
        mealAllowanceDaysPerWeek: 5,
      });
    }
  };

  // Save current scenario for comparison
  const saveScenario = () => {
    const name = prompt("Enter a name for this scenario:");
    if (name) {
      const newScenario: SavedScenario = {
        ...inputs,
        id: Date.now().toString(),
        name,
      };
      setSavedScenarios((prev) => [...prev, newScenario]);
      setActiveTab("compare");
    }
  };

  // Delete saved scenario
  const deleteScenario = (id: string) => {
    setSavedScenarios((prev) => prev.filter((s) => s.id !== id));
  };

  // Calculate current results
  const tfnResults = calculateTFN({
    hourlyRate: inputs.tfnHourlyRate,
    hoursPerWeek: inputs.hoursPerWeek,
    weeksPerYear: inputs.weeksPerYear,
    overtimeConfig: inputs.enableOvertime
      ? {
          regularHoursPerWeek: inputs.hoursPerWeek,
          overtimeHoursPerWeek: inputs.overtimeHours,
          overtimeRate: inputs.overtimeRate,
        }
      : undefined,
    fifoConfig: inputs.enableFIFO
      ? {
          enabled: true,
          rosterPattern: inputs.fifoRoster,
          accommodationProvided: true,
          mealsProvided: true,
        }
      : undefined,
    allowancesConfig: inputs.enableAllowances
      ? {
          carAllowancePerWeek: inputs.carAllowancePerWeek,
          toolAllowancePerWeek: inputs.toolAllowancePerWeek,
          mealAllowanceDaysPerWeek: inputs.mealAllowanceDaysPerWeek,
          includesBreakfast: true,
          includesLunch: true,
          includesDinner: true,
        }
      : undefined,
  });

  const abnResults = calculateABN({
    hourlyRate: inputs.abnHourlyRate,
    hoursPerWeek: inputs.hoursPerWeek,
    weeksPerYear: inputs.weeksPerYear,
    businessExpenses: inputs.businessExpenses,
    superContribution: inputs.superContribution,
    accountForLeave: inputs.accountForLeave,
    overtimeConfig: inputs.enableOvertime
      ? {
          regularHoursPerWeek: inputs.hoursPerWeek,
          overtimeHoursPerWeek: inputs.overtimeHours,
          overtimeRate: inputs.overtimeRate,
        }
      : undefined,
    fifoConfig: inputs.enableFIFO
      ? {
          enabled: true,
          rosterPattern: inputs.fifoRoster,
          accommodationProvided: false,
          mealsProvided: false,
        }
      : undefined,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-concrete to-concrete-dark">
      <Helmet>
        <title>ABN vs TFN Wage Calculator | Precision Site Solutions</title>
        <meta
          name="description"
          content="Compare your earnings as an ABN contractor vs TFN employee. Calculate taxes, superannuation, and take-home pay for tradies across Australia."
        />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-semibold">Smart Wage Calculator</span>
            </div>
            <h1 className="heading-xl text-concrete mb-6">
              ABN vs TFN Wage Calculator
            </h1>
            <p className="text-xl text-concrete/80 max-w-2xl mx-auto mb-8">
              Make informed decisions about your career. Compare contractor (ABN) vs employee (TFN)
              earnings with real Australian tax rates for 2024-25.
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "single" | "compare")} className="max-w-7xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="single">Single Calculation</TabsTrigger>
              <TabsTrigger value="compare">
                Compare Scenarios {savedScenarios.length > 0 && `(${savedScenarios.length})`}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="single" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Input Panel */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Preset Scenarios */}
                  <Card className="shadow-elevated border-2 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Start</CardTitle>
                      <CardDescription>Load a preset scenario</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Select onValueChange={loadPreset}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a preset..." />
                        </SelectTrigger>
                        <SelectContent>
                          {PRESET_SCENARIOS.map((preset) => (
                            <SelectItem key={preset.id} value={preset.id}>
                              {preset.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>

                  {/* Work Details */}
                  <Card className="shadow-elevated border-2 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Work Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="hoursPerWeek">Hours per Week</Label>
                        <Input
                          id="hoursPerWeek"
                          type="number"
                          value={inputs.hoursPerWeek}
                          onChange={(e) =>
                            setInputs({ ...inputs, hoursPerWeek: Number(e.target.value) })
                          }
                          min="1"
                          max="80"
                        />
                      </div>
                      <div>
                        <Label htmlFor="weeksPerYear">Weeks per Year</Label>
                        <Input
                          id="weeksPerYear"
                          type="number"
                          value={inputs.weeksPerYear}
                          onChange={(e) =>
                            setInputs({ ...inputs, weeksPerYear: Number(e.target.value) })
                          }
                          min="1"
                          max="52"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Account for holidays and downtime
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* TFN Employee Rate */}
                  <Card className="shadow-elevated border-2 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">TFN (Employee)</CardTitle>
                      <CardDescription>Your hourly rate as an employee</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Label htmlFor="tfnRate">Hourly Rate</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                          <Input
                            id="tfnRate"
                            type="number"
                            value={inputs.tfnHourlyRate}
                            onChange={(e) =>
                              setInputs({ ...inputs, tfnHourlyRate: Number(e.target.value) })
                            }
                            className="pl-7"
                            min="20"
                            step="0.5"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ABN Contractor Details */}
                  <Card className="shadow-elevated border-2 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">ABN (Contractor)</CardTitle>
                      <CardDescription>Your details as a contractor</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="abnRate">Hourly Rate</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                          <Input
                            id="abnRate"
                            type="number"
                            value={inputs.abnHourlyRate}
                            onChange={(e) =>
                              setInputs({ ...inputs, abnHourlyRate: Number(e.target.value) })
                            }
                            className="pl-7"
                            min="20"
                            step="0.5"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label htmlFor="expenses">Business Expenses (Annual)</Label>
                          <div className="flex items-center gap-2">
                            <Label htmlFor="auto-expenses" className="text-xs text-muted-foreground">
                              Auto
                            </Label>
                            <Switch
                              id="auto-expenses"
                              checked={useEstimatedExpenses}
                              onCheckedChange={setUseEstimatedExpenses}
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                          <Input
                            id="expenses"
                            type="number"
                            value={inputs.businessExpenses}
                            onChange={(e) =>
                              setInputs({ ...inputs, businessExpenses: Number(e.target.value) })
                            }
                            className="pl-7"
                            disabled={useEstimatedExpenses}
                            min="0"
                            step="500"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Tools, vehicle, insurance, accountant, etc.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="super">Super Contribution (%)</Label>
                        <Input
                          id="super"
                          type="number"
                          value={inputs.superContribution}
                          onChange={(e) =>
                            setInputs({ ...inputs, superContribution: Number(e.target.value) })
                          }
                          min="0"
                          max="100"
                          step="1"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          How much of your net income to save for super
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="leave" className="text-sm">
                          Account for unpaid leave
                        </Label>
                        <Switch
                          id="leave"
                          checked={inputs.accountForLeave}
                          onCheckedChange={(checked) =>
                            setInputs({ ...inputs, accountForLeave: checked })
                          }
                        />
                      </div>
                      {inputs.accountForLeave && (
                        <p className="text-xs text-muted-foreground -mt-2">
                          Includes 6 weeks unpaid leave opportunity cost
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Advanced Options */}
                  <Card className="shadow-elevated border-2 border-gold/30">
                    <CardHeader className="bg-gold/5">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-gold" />
                        Advanced Options
                      </CardTitle>
                      <CardDescription>FIFO, overtime, and more</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      {/* FIFO Toggle */}
                      <Collapsible>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Plane className="w-4 h-4 text-earth-green" />
                            <Label htmlFor="enable-fifo" className="font-semibold">
                              FIFO (Fly-In Fly-Out)
                            </Label>
                          </div>
                          <Switch
                            id="enable-fifo"
                            checked={inputs.enableFIFO}
                            onCheckedChange={(checked) =>
                              setInputs({ ...inputs, enableFIFO: checked })
                            }
                          />
                        </div>

                        {inputs.enableFIFO && (
                          <CollapsibleContent className="mt-4 space-y-3 pl-6 border-l-2 border-earth-green/30">
                            <div>
                              <Label htmlFor="roster">Roster Pattern</Label>
                              <Select
                                value={inputs.fifoRoster}
                                onValueChange={(value: any) =>
                                  setInputs({ ...inputs, fifoRoster: value })
                                }
                              >
                                <SelectTrigger id="roster">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="2-1">2 weeks on, 1 week off</SelectItem>
                                  <SelectItem value="3-1">3 weeks on, 1 week off</SelectItem>
                                  <SelectItem value="4-2">4 weeks on, 2 weeks off</SelectItem>
                                  <SelectItem value="8-6">8 weeks on, 6 weeks off</SelectItem>
                                </SelectContent>
                              </Select>
                              <p className="text-xs text-muted-foreground mt-1">
                                Includes LAFHA (tax-free for TFN, deductible for ABN)
                              </p>
                            </div>
                          </CollapsibleContent>
                        )}
                      </Collapsible>

                      {/* Overtime Toggle */}
                      <div className="border-t pt-4">
                        <Collapsible>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-earth-green" />
                              <Label htmlFor="enable-overtime" className="font-semibold">
                                Overtime
                              </Label>
                            </div>
                            <Switch
                              id="enable-overtime"
                              checked={inputs.enableOvertime}
                              onCheckedChange={(checked) =>
                                setInputs({ ...inputs, enableOvertime: checked })
                              }
                            />
                          </div>

                          {inputs.enableOvertime && (
                            <CollapsibleContent className="mt-4 space-y-3 pl-6 border-l-2 border-earth-green/30">
                              <div>
                                <Label htmlFor="ot-hours">Overtime Hours per Week</Label>
                                <Input
                                  id="ot-hours"
                                  type="number"
                                  value={inputs.overtimeHours}
                                  onChange={(e) =>
                                    setInputs({ ...inputs, overtimeHours: Number(e.target.value) })
                                  }
                                  min="0"
                                  max="40"
                                  step="1"
                                />
                              </div>
                              <div>
                                <Label htmlFor="ot-rate">Overtime Rate Multiplier</Label>
                                <Select
                                  value={inputs.overtimeRate.toString()}
                                  onValueChange={(value) =>
                                    setInputs({ ...inputs, overtimeRate: Number(value) })
                                  }
                                >
                                  <SelectTrigger id="ot-rate">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1.5">Time and a half (1.5x)</SelectItem>
                                    <SelectItem value="2.0">Double time (2x)</SelectItem>
                                    <SelectItem value="2.5">Double time and a half (2.5x)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </CollapsibleContent>
                          )}
                        </Collapsible>
                      </div>

                      {/* Allowances Toggle */}
                      <div className="border-t pt-4">
                        <Collapsible>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-earth-green" />
                              <Label htmlFor="enable-allowances" className="font-semibold">
                                Allowances
                              </Label>
                            </div>
                            <Switch
                              id="enable-allowances"
                              checked={inputs.enableAllowances}
                              onCheckedChange={(checked) =>
                                setInputs({ ...inputs, enableAllowances: checked })
                              }
                            />
                          </div>

                          {inputs.enableAllowances && (
                            <CollapsibleContent className="mt-4 space-y-3 pl-6 border-l-2 border-earth-green/30">
                              <div>
                                <Label htmlFor="car-allowance" className="flex items-center gap-1">
                                  <Car className="w-3 h-3" />
                                  Car Allowance (per week)
                                </Label>
                                <div className="relative">
                                  <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">$</span>
                                  <Input
                                    id="car-allowance"
                                    type="number"
                                    value={inputs.carAllowancePerWeek}
                                    onChange={(e) =>
                                      setInputs({ ...inputs, carAllowancePerWeek: Number(e.target.value) })
                                    }
                                    className="pl-7"
                                    min="0"
                                    step="10"
                                  />
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Typical: $100-$300/week
                                </p>
                              </div>

                              <div>
                                <Label htmlFor="tool-allowance" className="flex items-center gap-1">
                                  <Wrench className="w-3 h-3" />
                                  Tool Allowance (per week)
                                </Label>
                                <div className="relative">
                                  <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">$</span>
                                  <Input
                                    id="tool-allowance"
                                    type="number"
                                    value={inputs.toolAllowancePerWeek}
                                    onChange={(e) =>
                                      setInputs({ ...inputs, toolAllowancePerWeek: Number(e.target.value) })
                                    }
                                    className="pl-7"
                                    min="0"
                                    step="1"
                                  />
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Typical: $8-$15/week
                                </p>
                              </div>

                              <div>
                                <Label htmlFor="meal-days" className="flex items-center gap-1">
                                  <UtensilsCrossed className="w-3 h-3" />
                                  Meal Allowance (days per week)
                                </Label>
                                <Input
                                  id="meal-days"
                                  type="number"
                                  value={inputs.mealAllowanceDaysPerWeek}
                                  onChange={(e) =>
                                    setInputs({ ...inputs, mealAllowanceDaysPerWeek: Number(e.target.value) })
                                  }
                                  min="0"
                                  max="7"
                                  step="1"
                                />
                                <p className="text-xs text-muted-foreground mt-1">
                                  Includes breakfast, lunch, dinner at ATO rates
                                </p>
                              </div>
                            </CollapsibleContent>
                          )}
                        </Collapsible>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Active Features Summary */}
                  {(inputs.enableFIFO || inputs.enableOvertime || inputs.enableAllowances) && (
                    <Card className="shadow-elevated border-2 border-earth-green/30 bg-earth-green/5">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-earth-green" />
                          Active Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {inputs.enableFIFO && (
                          <div className="flex items-start gap-2 text-sm">
                            <Plane className="w-4 h-4 text-earth-green mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="font-semibold">FIFO {inputs.fifoRoster} Roster</div>
                              <div className="text-xs text-muted-foreground">
                                {(() => {
                                  const patterns = { "2-1": "35 weeks/year", "3-1": "39 weeks/year", "4-2": "35 weeks/year", "8-6": "30 weeks/year" };
                                  return `Working ~${patterns[inputs.fifoRoster]} with tax-free allowances`;
                                })()}
                              </div>
                            </div>
                          </div>
                        )}
                        {inputs.enableOvertime && (
                          <div className="flex items-start gap-2 text-sm">
                            <Clock className="w-4 h-4 text-earth-green mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="font-semibold">Overtime: {inputs.overtimeHours}hrs/week @ {inputs.overtimeRate}x</div>
                              <div className="text-xs text-muted-foreground">
                                Est. +${((inputs.tfnHourlyRate * inputs.overtimeRate * inputs.overtimeHours * inputs.weeksPerYear) || 0).toLocaleString('en-AU', { maximumFractionDigits: 0 })}/year (TFN)
                              </div>
                            </div>
                          </div>
                        )}
                        {inputs.enableAllowances && (
                          <div className="flex items-start gap-2 text-sm">
                            <DollarSign className="w-4 h-4 text-earth-green mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="font-semibold">Allowances Enabled</div>
                              <div className="text-xs text-muted-foreground space-y-0.5">
                                {inputs.carAllowancePerWeek > 0 && <div>Car: ${inputs.carAllowancePerWeek}/week</div>}
                                {inputs.toolAllowancePerWeek > 0 && <div>Tools: ${inputs.toolAllowancePerWeek}/week</div>}
                                {inputs.mealAllowanceDaysPerWeek > 0 && <div>Meals: {inputs.mealAllowanceDaysPerWeek} days/week</div>}
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Tax Brackets Reference */}
                  <TaxBracketsTable />

                  {/* Save Scenario Button */}
                  <Button
                    onClick={saveScenario}
                    variant="outline"
                    className="w-full"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save for Comparison
                  </Button>
                </div>

                {/* Results Panel */}
                <div className="lg:col-span-2">
                  <ComparisonResults
                    tfnResults={tfnResults}
                    abnResults={abnResults}
                    inputs={inputs}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compare" className="space-y-8">
              {savedScenarios.length === 0 ? (
                <Card className="shadow-elevated">
                  <CardContent className="py-12 text-center">
                    <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Saved Scenarios</h3>
                    <p className="text-muted-foreground mb-6">
                      Save scenarios from the Single Calculation tab to compare them side-by-side
                    </p>
                    <Button onClick={() => setActiveTab("single")}>
                      Go to Calculator
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Compare Scenarios</h2>
                    <p className="text-sm text-muted-foreground">
                      {savedScenarios.length} scenario{savedScenarios.length !== 1 ? "s" : ""} saved
                    </p>
                  </div>

                  {/* Multi-Scenario Comparison Grid */}
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {savedScenarios.map((scenario) => {
                      const tfn = calculateTFN({
                        hourlyRate: scenario.tfnHourlyRate,
                        hoursPerWeek: scenario.hoursPerWeek,
                        weeksPerYear: scenario.weeksPerYear,
                      });
                      const abn = calculateABN({
                        hourlyRate: scenario.abnHourlyRate,
                        hoursPerWeek: scenario.hoursPerWeek,
                        weeksPerYear: scenario.weeksPerYear,
                        businessExpenses: scenario.businessExpenses,
                        superContribution: scenario.superContribution,
                        accountForLeave: scenario.accountForLeave,
                      });

                      const difference = abn.netAnnual - tfn.netAnnual;
                      const percentDiff = ((difference / tfn.netAnnual) * 100);

                      return (
                        <Card key={scenario.id} className="shadow-elevated border-2 border-border/50 relative">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-lg">{scenario.name}</CardTitle>
                                <CardDescription className="mt-1">
                                  ${scenario.tfnHourlyRate}/hr TFN • ${scenario.abnHourlyRate}/hr ABN
                                </CardDescription>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => deleteScenario(scenario.id)}
                                className="h-8 w-8"
                              >
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">TFN Net (Annual)</p>
                                <p className="text-lg font-bold text-navy">
                                  ${tfn.netAnnual.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">ABN Net (Annual)</p>
                                <p className="text-lg font-bold text-earth-green">
                                  ${abn.netAnnual.toLocaleString()}
                                </p>
                              </div>
                            </div>

                            {/* Difference */}
                            <div className={`p-3 rounded-lg ${difference >= 0 ? 'bg-earth-green/10' : 'bg-destructive/10'}`}>
                              <p className="text-xs text-muted-foreground mb-1">Difference</p>
                              <p className={`text-lg font-bold ${difference >= 0 ? 'text-earth-green' : 'text-destructive'}`}>
                                {difference >= 0 ? '+' : ''}${difference.toLocaleString()}
                                <span className="text-sm ml-2">({percentDiff >= 0 ? '+' : ''}{percentDiff.toFixed(1)}%)</span>
                              </p>
                            </div>

                            {/* Details */}
                            <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t">
                              <p>Hours: {scenario.hoursPerWeek}/week • {scenario.weeksPerYear} weeks</p>
                              <p>Business Expenses: ${scenario.businessExpenses.toLocaleString()}</p>
                              <p>Super: {scenario.superContribution}% of net income</p>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-concrete text-center mb-12">
              Understanding Your Options
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-xl text-earth-green">ABN Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>Higher hourly rates (typically 25-40% more)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>Claim business expense deductions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>Greater control over work schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>Tax deductions on tools, vehicle, phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>Flexibility to work for multiple clients</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-xl text-earth-green">TFN Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>11.5% employer super on top of wage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>4 weeks paid annual leave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>10 days paid sick leave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>Paid public holidays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth-green mt-0.5">✓</span>
                      <span>Workers' comp and job security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 shadow-elevated border-gold/30">
              <CardContent className="py-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-2">Important Note</p>
                    <p className="text-muted-foreground">
                      This calculator provides estimates based on 2024-25 Australian tax rates.
                      It does not account for HECS/HELP debt, tax offsets, or other individual circumstances.
                      Always consult a qualified tax professional for personalized advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WageCalculator;
