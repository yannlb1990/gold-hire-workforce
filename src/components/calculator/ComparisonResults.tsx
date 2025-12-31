import { TFNCalculationResult } from "@/lib/tfnCalculations";
import { ABNCalculationResult } from "@/lib/abnCalculations";
import { formatCurrency } from "@/lib/taxCalculations";
import { InfoTooltip } from "./CalculatorTooltips";
import { ArrowUp, ArrowDown, Minus, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonResultsProps {
  tfnResult: TFNCalculationResult;
  abnResult: ABNCalculationResult;
  fifoEnabled?: boolean;
  overtimeEnabled?: boolean;
}

interface ComparisonRowProps {
  label: string;
  tfnValue: number;
  abnValue: number;
  tooltipKey?: string;
  isBold?: boolean;
  isPositive?: boolean;
  showDifference?: boolean;
  invertComparison?: boolean;
}

function ComparisonRow({
  label,
  tfnValue,
  abnValue,
  tooltipKey,
  isBold = false,
  showDifference = false,
  invertComparison = false,
}: ComparisonRowProps) {
  const difference = abnValue - tfnValue;
  const betterForABN = invertComparison ? difference < 0 : difference > 0;

  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-4 py-3 border-b border-border/50 last:border-b-0",
        isBold && "bg-muted/30 -mx-4 px-4"
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "text-sm",
            isBold ? "font-bold text-foreground" : "text-muted-foreground"
          )}
        >
          {label}
        </span>
        {tooltipKey && (
          <InfoTooltip tooltipKey={tooltipKey as keyof typeof import("./CalculatorTooltips").CALCULATOR_TOOLTIPS} />
        )}
      </div>
      <div className="text-right">
        <span
          className={cn(
            "text-sm",
            isBold ? "font-bold text-foreground" : "text-foreground"
          )}
        >
          {formatCurrency(tfnValue)}
        </span>
      </div>
      <div className="text-right flex items-center justify-end gap-2">
        <span
          className={cn(
            "text-sm",
            isBold ? "font-bold text-foreground" : "text-foreground"
          )}
        >
          {formatCurrency(abnValue)}
        </span>
        {showDifference && difference !== 0 && (
          <span
            className={cn(
              "text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5",
              betterForABN
                ? "bg-primary/10 text-primary"
                : "bg-accent/10 text-accent"
            )}
          >
            {difference > 0 ? (
              <ArrowUp className="w-3 h-3" />
            ) : (
              <ArrowDown className="w-3 h-3" />
            )}
            {formatCurrency(Math.abs(difference))}
          </span>
        )}
      </div>
    </div>
  );
}

export function ComparisonResults({
  tfnResult,
  abnResult,
  fifoEnabled = false,
  overtimeEnabled = false,
}: ComparisonResultsProps) {
  const netDifference = abnResult.netTakeHome - tfnResult.netTakeHome;
  const abnBetter = netDifference > 0;
  const weeklyDifference = abnResult.weeklyTakeHome - tfnResult.weeklyTakeHome;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted-foreground">TFN (Employee)</span>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-foreground">
              {formatCurrency(tfnResult.netTakeHome)}
            </p>
            <p className="text-sm text-muted-foreground">
              {formatCurrency(tfnResult.weeklyTakeHome)}/week
            </p>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">ABN (Contractor)</span>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-foreground">
              {formatCurrency(abnResult.netTakeHome)}
            </p>
            <p className="text-sm text-muted-foreground">
              {formatCurrency(abnResult.weeklyTakeHome)}/week
            </p>
          </div>
        </div>
      </div>

      {/* Difference Banner */}
      <div
        className={cn(
          "rounded-xl p-4 flex items-center justify-between",
          abnBetter
            ? "bg-primary/10 border border-primary/20"
            : "bg-accent/10 border border-accent/20"
        )}
      >
        <div className="flex items-center gap-3">
          {abnBetter ? (
            <TrendingUp className="w-6 h-6 text-primary" />
          ) : (
            <TrendingDown className="w-6 h-6 text-accent" />
          )}
          <div>
            <p className="font-semibold text-foreground">
              {abnBetter ? "ABN" : "TFN"} is better by{" "}
              <span className={abnBetter ? "text-primary" : "text-accent"}>
                {formatCurrency(Math.abs(netDifference))}/year
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              That's {formatCurrency(Math.abs(weeklyDifference))} more per week
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-heading font-bold text-lg mb-4 text-foreground">
          Detailed Breakdown
        </h3>
        
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 pb-3 border-b-2 border-border mb-2">
          <div className="text-sm font-semibold text-muted-foreground">Category</div>
          <div className="text-sm font-semibold text-muted-foreground text-right">
            TFN (Employee)
          </div>
          <div className="text-sm font-semibold text-muted-foreground text-right">
            ABN (Contractor)
          </div>
        </div>

        {/* Rows */}
        <ComparisonRow
          label="Gross Annual"
          tfnValue={tfnResult.grossAnnual}
          abnValue={abnResult.grossAnnual}
        />
        <ComparisonRow
          label="Tax Payable"
          tfnValue={tfnResult.taxPayable}
          abnValue={abnResult.taxPayable}
          invertComparison
        />
        <ComparisonRow
          label="Medicare Levy"
          tfnValue={tfnResult.medicareLevy}
          abnValue={abnResult.medicareLevy}
          tooltipKey="medicareLevy"
          invertComparison
        />
        <ComparisonRow
          label="Super Contribution"
          tfnValue={tfnResult.superContribution}
          abnValue={abnResult.selfFundedSuper}
          tooltipKey="super"
        />
        <ComparisonRow
          label="Business Expenses"
          tfnValue={0}
          abnValue={abnResult.businessExpenses}
          tooltipKey="businessExpenses"
        />
        <ComparisonRow
          label="Insurance Costs"
          tfnValue={0}
          abnValue={abnResult.insuranceCosts}
          tooltipKey="insurance"
        />
        <ComparisonRow
          label="Leave Entitlements Value"
          tfnValue={tfnResult.leaveEntitlementsValue}
          abnValue={0}
          tooltipKey="leaveEntitlements"
        />
        <ComparisonRow
          label="Net Take-Home"
          tfnValue={tfnResult.netTakeHome}
          abnValue={abnResult.netTakeHome}
          isBold
          showDifference
        />
        <ComparisonRow
          label="Weekly Take-Home"
          tfnValue={tfnResult.weeklyTakeHome}
          abnValue={abnResult.weeklyTakeHome}
          isBold
          showDifference
        />

        {/* Effective Tax Rate */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Effective Tax Rate</span>
            <InfoTooltip tooltipKey="effectiveTaxRate" />
          </div>
          <div className="text-right">
            <span className="text-sm text-foreground">
              {tfnResult.effectiveTaxRate.toFixed(1)}%
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm text-foreground">
              {abnResult.effectiveTaxRate.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
