import { useState } from "react";
import { SavedScenario, generateScenarioId } from "@/data/calculatorPresets";
import { calculateTFNScenario } from "@/lib/tfnCalculations";
import { calculateABNScenario } from "@/lib/abnCalculations";
import { formatCurrency } from "@/lib/taxCalculations";
import { Button } from "@/components/ui/button";
import { Plus, X, Save, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ScenarioComparisonProps {
  currentScenario: {
    trade: string;
    hourlyRate: number;
    hoursPerWeek: number;
    weeksPerYear: number;
    expenseRate: number;
    includeSuper: boolean;
  };
  onLoadScenario?: (scenario: SavedScenario) => void;
}

const MAX_SCENARIOS = 3;

export function ScenarioComparison({
  currentScenario,
  onLoadScenario,
}: ScenarioComparisonProps) {
  const [savedScenarios, setSavedScenarios] = useState<SavedScenario[]>([]);
  const [showChart, setShowChart] = useState(false);

  const saveCurrentScenario = () => {
    if (savedScenarios.length >= MAX_SCENARIOS) {
      return;
    }

    const newScenario: SavedScenario = {
      id: generateScenarioId(),
      name: `Scenario ${savedScenarios.length + 1}`,
      ...currentScenario,
      timestamp: Date.now(),
    };

    setSavedScenarios([...savedScenarios, newScenario]);
  };

  const removeScenario = (id: string) => {
    setSavedScenarios(savedScenarios.filter((s) => s.id !== id));
  };

  const getScenarioResults = (scenario: SavedScenario) => {
    const tfn = calculateTFNScenario(
      scenario.hourlyRate,
      scenario.hoursPerWeek,
      scenario.weeksPerYear
    );
    const abn = calculateABNScenario(
      scenario.hourlyRate,
      scenario.hoursPerWeek,
      scenario.weeksPerYear,
      scenario.expenseRate,
      scenario.includeSuper
    );
    return { tfn, abn };
  };

  const chartData = savedScenarios.map((scenario) => {
    const { tfn, abn } = getScenarioResults(scenario);
    return {
      name: scenario.name,
      "TFN Take-Home": tfn.netTakeHome,
      "ABN Take-Home": abn.netTakeHome,
      "TFN Weekly": tfn.weeklyTakeHome,
      "ABN Weekly": abn.weeklyTakeHome,
    };
  });

  if (savedScenarios.length === 0) {
    return (
      <div className="bg-muted/30 border border-border rounded-xl p-6 text-center">
        <BarChart3 className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
        <h3 className="font-heading font-bold text-foreground mb-2">
          Compare Scenarios
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Save up to {MAX_SCENARIOS} scenarios to compare different rate and hour
          combinations side by side.
        </p>
        <Button onClick={saveCurrentScenario} variant="outline" size="sm">
          <Save className="w-4 h-4 mr-2" />
          Save Current Scenario
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg text-foreground">
          Saved Scenarios
        </h3>
        <div className="flex items-center gap-2">
          {savedScenarios.length > 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChart(!showChart)}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              {showChart ? "Hide Chart" : "Show Chart"}
            </Button>
          )}
          {savedScenarios.length < MAX_SCENARIOS && (
            <Button variant="outline" size="sm" onClick={saveCurrentScenario}>
              <Plus className="w-4 h-4 mr-2" />
              Add Scenario
            </Button>
          )}
        </div>
      </div>

      {/* Saved Scenarios Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {savedScenarios.map((scenario, index) => {
          const { tfn, abn } = getScenarioResults(scenario);
          const abnBetter = abn.netTakeHome > tfn.netTakeHome;

          return (
            <div
              key={scenario.id}
              className={cn(
                "bg-card border rounded-xl p-4 relative",
                index === 0 && "border-primary/30",
                index === 1 && "border-accent/30",
                index === 2 && "border-orange-500/30"
              )}
            >
              <button
                onClick={() => removeScenario(scenario.id)}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
                aria-label="Remove scenario"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              <h4 className="font-semibold text-sm text-foreground mb-2">
                {scenario.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                ${scenario.hourlyRate}/hr • {scenario.hoursPerWeek}hrs/wk •{" "}
                {scenario.weeksPerYear}wks/yr
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">TFN:</span>
                  <span className="font-medium">
                    {formatCurrency(tfn.netTakeHome)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">ABN:</span>
                  <span className="font-medium">
                    {formatCurrency(abn.netTakeHome)}
                  </span>
                </div>
                <div
                  className={cn(
                    "text-xs px-2 py-1 rounded text-center",
                    abnBetter
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  )}
                >
                  {abnBetter ? "ABN" : "TFN"} better by{" "}
                  {formatCurrency(Math.abs(abn.netTakeHome - tfn.netTakeHome))}
                </div>
              </div>

              {onLoadScenario && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-3"
                  onClick={() => onLoadScenario(scenario)}
                >
                  Load Scenario
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {/* Comparison Chart */}
      {showChart && savedScenarios.length > 1 && (
        <div className="bg-card border border-border rounded-xl p-6">
          <h4 className="font-heading font-semibold text-foreground mb-4">
            Annual Take-Home Comparison
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => formatCurrency(value)}
              />
              <Legend />
              <Bar
                dataKey="TFN Take-Home"
                fill="hsl(var(--accent))"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="ABN Take-Home"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
