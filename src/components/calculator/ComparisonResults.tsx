import { TFNCalculationResult } from "@/lib/tfnCalculations";
import { ABNCalculationResult } from "@/lib/abnCalculations";
import { formatCurrency } from "@/lib/taxCalculations";
import { InfoTooltip } from "./CalculatorTooltips";
import { 
  ArrowUp, 
  ArrowDown, 
  TrendingUp, 
  TrendingDown,
  Briefcase,
  Clock,
  Plane,
  Gift,
  Receipt,
  Shield,
  Calculator,
  Percent,
  Home,
  UtensilsCrossed
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonResultsProps {
  tfnResult: TFNCalculationResult;
  abnResult: ABNCalculationResult;
  fifoEnabled?: boolean;
  overtimeEnabled?: boolean;
}

// Section Header Component
function SectionHeader({ icon: Icon, title, className }: { icon: React.ElementType; title: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 mb-3 pb-2 border-b border-border/50", className)}>
      <Icon className="w-4 h-4 text-muted-foreground" />
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
    </div>
  );
}

// Income Row Component
function IncomeRow({ 
  label, 
  value, 
  isPositive = true, 
  icon: Icon,
  isSubItem = false 
}: { 
  label: string; 
  value: number; 
  isPositive?: boolean;
  icon?: React.ElementType;
  isSubItem?: boolean;
}) {
  if (value === 0) return null;
  
  return (
    <div className={cn("flex items-center justify-between py-1.5", isSubItem && "pl-4")}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-3.5 h-3.5 text-muted-foreground" />}
        <span className={cn("text-sm", isSubItem ? "text-muted-foreground" : "text-foreground")}>
          {label}
        </span>
      </div>
      <span className={cn(
        "text-sm font-medium",
        isPositive ? "text-green-600" : "text-red-600"
      )}>
        {isPositive ? "+" : "-"}{formatCurrency(Math.abs(value))}
      </span>
    </div>
  );
}

// Tax Row Component
function TaxRow({ 
  label, 
  value, 
  isDeduction = true,
  isTotal = false,
  showRate = false,
  rate = 0,
  tooltipKey
}: { 
  label: string; 
  value: number; 
  isDeduction?: boolean;
  isTotal?: boolean;
  showRate?: boolean;
  rate?: number;
  tooltipKey?: string;
}) {
  if (value === 0 && !isTotal) return null;
  
  return (
    <div className={cn(
      "flex items-center justify-between py-1.5",
      isTotal && "border-t border-border pt-2 mt-2"
    )}>
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-sm",
          isTotal ? "font-semibold text-foreground" : "text-muted-foreground"
        )}>
          {label}
        </span>
        {tooltipKey && (
          <InfoTooltip tooltipKey={tooltipKey as keyof typeof import("./CalculatorTooltips").CALCULATOR_TOOLTIPS} />
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-sm",
          isTotal ? "font-bold" : "font-medium",
          isDeduction ? "text-red-600" : "text-green-600"
        )}>
          {isDeduction && value > 0 ? "-" : value > 0 ? "+" : ""}{formatCurrency(Math.abs(value))}
        </span>
        {showRate && (
          <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
            {rate.toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}

// Highlighted Card Component
function HighlightedCard({ 
  children, 
  variant = "gold" 
}: { 
  children: React.ReactNode; 
  variant?: "gold" | "navy" | "green"; 
}) {
  const variantClasses = {
    gold: "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800/30",
    navy: "bg-slate-100 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/30",
    green: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800/30",
  };

  return (
    <div className={cn("rounded-lg border p-3 my-3", variantClasses[variant])}>
      {children}
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

      {/* Detailed Breakdown Cards */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* TFN Detailed Breakdown */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h3 className="font-heading font-bold text-foreground">TFN Breakdown</h3>
          </div>

          {/* Income Sources */}
          <SectionHeader icon={Briefcase} title="Income Sources" />
          <IncomeRow label="Base Wages" value={tfnResult.baseWages} icon={Briefcase} />
          {overtimeEnabled && tfnResult.overtimePay > 0 && (
            <IncomeRow label="Overtime Pay" value={tfnResult.overtimePay} icon={Clock} />
          )}
          {tfnResult.publicHolidayPay > 0 && (
            <IncomeRow label="Public Holiday Pay" value={tfnResult.publicHolidayPay} isSubItem />
          )}
          <div className="flex items-center justify-between py-2 border-t border-border/50 mt-2">
            <span className="text-sm font-semibold text-foreground">Gross Annual</span>
            <span className="text-sm font-bold text-foreground">{formatCurrency(tfnResult.grossAnnual)}</span>
          </div>

          {/* FIFO Allowances */}
          {fifoEnabled && tfnResult.lafhaValue > 0 && (
            <HighlightedCard variant="green">
              <SectionHeader icon={Shield} title="Tax-Free Allowances (LAFHA)" className="border-0 pb-0 mb-2" />
              <p className="text-xs text-muted-foreground mb-2">
                Living Away From Home Allowance - completely tax-free
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-700 dark:text-green-400">Total LAFHA</span>
                <span className="text-sm font-bold text-green-700 dark:text-green-400">
                  +{formatCurrency(tfnResult.lafhaValue)}
                </span>
              </div>
            </HighlightedCard>
          )}

          {/* FIFO Non-Cash Benefits */}
          {fifoEnabled && (tfnResult.fifoAccommodationValue > 0 || tfnResult.fifoMealsValue > 0) && (
            <HighlightedCard variant="navy">
              <SectionHeader icon={Gift} title="FIFO Non-Cash Benefits" className="border-0 pb-0 mb-2" />
              <p className="text-xs text-muted-foreground mb-2">
                Provided by employer (value included in LAFHA)
              </p>
              {tfnResult.fifoAccommodationValue > 0 && (
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <Home className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Accommodation</span>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {formatCurrency(tfnResult.fifoAccommodationValue)}
                  </span>
                </div>
              )}
              {tfnResult.fifoMealsValue > 0 && (
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Meals Provided</span>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {formatCurrency(tfnResult.fifoMealsValue)}
                  </span>
                </div>
              )}
            </HighlightedCard>
          )}

          {/* Tax Breakdown */}
          <div className="mt-4">
            <SectionHeader icon={Calculator} title="Tax Breakdown" />
            <div className="text-xs text-muted-foreground mb-2">
              Taxable Income: {formatCurrency(tfnResult.grossAnnual)}
            </div>
            <TaxRow label="Income Tax" value={tfnResult.taxPayable} />
            <TaxRow label="Medicare Levy (2%)" value={tfnResult.medicareLevy} tooltipKey="medicareLevy" />
            {tfnResult.litoOffset > 0 && (
              <TaxRow label="LITO Offset" value={tfnResult.litoOffset} isDeduction={false} />
            )}
            <TaxRow 
              label="Total Tax" 
              value={tfnResult.taxPayable + tfnResult.medicareLevy} 
              isTotal 
              showRate 
              rate={tfnResult.effectiveTaxRate}
            />
          </div>

          {/* Net Take-Home */}
          <div className="mt-4 pt-4 border-t-2 border-accent/30">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground">Net Take-Home</span>
              <span className="text-xl font-bold text-accent">{formatCurrency(tfnResult.netTakeHome)}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-muted-foreground">Per Week</span>
              <span className="text-sm font-semibold text-muted-foreground">{formatCurrency(tfnResult.weeklyTakeHome)}</span>
            </div>
          </div>

          {/* Additional Benefits Note */}
          <div className="mt-4 p-3 bg-accent/5 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>Plus employer-paid benefits:</strong> Super ({formatCurrency(tfnResult.superContribution)}), 
              Leave entitlements ({formatCurrency(tfnResult.leaveEntitlementsValue)})
            </p>
          </div>
        </div>

        {/* ABN Detailed Breakdown */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="font-heading font-bold text-foreground">ABN Breakdown</h3>
          </div>

          {/* Income Sources */}
          <SectionHeader icon={Briefcase} title="Income Sources" />
          <IncomeRow label="Base Income" value={abnResult.baseIncome} icon={Briefcase} />
          {overtimeEnabled && abnResult.overtimePay > 0 && (
            <IncomeRow label="Overtime Pay" value={abnResult.overtimePay} icon={Clock} />
          )}
          {fifoEnabled && abnResult.fifoPaidTravel > 0 && (
            <IncomeRow label="FIFO Travel Paid" value={abnResult.fifoPaidTravel} icon={Plane} />
          )}
          <div className="flex items-center justify-between py-2 border-t border-border/50 mt-2">
            <span className="text-sm font-semibold text-foreground">Gross Annual</span>
            <span className="text-sm font-bold text-foreground">{formatCurrency(abnResult.grossAnnual)}</span>
          </div>

          {/* Business Deductions */}
          <HighlightedCard variant="gold">
            <SectionHeader icon={Receipt} title="Business Deductions" className="border-0 pb-0 mb-2" />
            <p className="text-xs text-muted-foreground mb-2">
              Tools, materials, vehicle, PPE, and other work expenses
            </p>
            <IncomeRow label="Business Expenses" value={abnResult.businessExpenses} isPositive={false} />
            {fifoEnabled && abnResult.fifoDeductions > 0 && (
              <>
                <IncomeRow label="FIFO Travel Costs" value={abnResult.fifoPaidTravel} isPositive={false} isSubItem />
                <IncomeRow label="FIFO Accommodation" value={abnResult.fifoAccommodation} isPositive={false} isSubItem />
              </>
            )}
            <IncomeRow label="Public Liability Insurance" value={abnResult.publicLiabilityInsurance} isPositive={false} />
            <IncomeRow label="Income Protection" value={abnResult.incomeProtection} isPositive={false} />
            {abnResult.selfFundedSuper > 0 && (
              <IncomeRow label="Self-Funded Super" value={abnResult.selfFundedSuper} isPositive={false} />
            )}
            <div className="flex items-center justify-between pt-2 border-t border-amber-300 dark:border-amber-700 mt-2">
              <span className="text-sm font-semibold text-amber-800 dark:text-amber-300">Total Deductions</span>
              <span className="text-sm font-bold text-amber-800 dark:text-amber-300">
                -{formatCurrency(abnResult.totalCostsExcludingTax)}
              </span>
            </div>
          </HighlightedCard>

          {/* Tax Breakdown */}
          <div className="mt-4">
            <SectionHeader icon={Calculator} title="Tax Breakdown" />
            <div className="text-xs text-muted-foreground mb-2">
              Taxable Income (after deductions): {formatCurrency(abnResult.taxableIncome)}
            </div>
            <TaxRow label="Income Tax" value={abnResult.taxPayable} />
            <TaxRow label="Medicare Levy (2%)" value={abnResult.medicareLevy} tooltipKey="medicareLevy" />
            {abnResult.litoOffset > 0 && (
              <TaxRow label="LITO Offset" value={abnResult.litoOffset} isDeduction={false} />
            )}
            <TaxRow 
              label="Total Tax" 
              value={abnResult.taxPayable + abnResult.medicareLevy} 
              isTotal 
              showRate 
              rate={abnResult.effectiveTaxRate}
            />
          </div>

          {/* Net Take-Home */}
          <div className="mt-4 pt-4 border-t-2 border-primary/30">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground">Net Take-Home</span>
              <span className="text-xl font-bold text-primary">{formatCurrency(abnResult.netTakeHome)}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-muted-foreground">Per Week</span>
              <span className="text-sm font-semibold text-muted-foreground">{formatCurrency(abnResult.weeklyTakeHome)}</span>
            </div>
          </div>

          {/* Note about GST */}
          <div className="mt-4 p-3 bg-primary/5 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>GST Note:</strong> If earning over $75k, you collect {formatCurrency(abnResult.gstCollected)} 
              GST annually (remitted to ATO, not your income)
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Summary Table */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-heading font-bold text-lg mb-4 text-foreground flex items-center gap-2">
          <Percent className="w-5 h-5" />
          Quick Comparison
        </h3>
        
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 pb-3 border-b-2 border-border mb-2">
          <div className="text-sm font-semibold text-muted-foreground">Metric</div>
          <div className="text-sm font-semibold text-muted-foreground text-right">TFN</div>
          <div className="text-sm font-semibold text-muted-foreground text-right">ABN</div>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-2">
          <ComparisonMetric label="Gross Income" tfnValue={tfnResult.grossAnnual} abnValue={abnResult.grossAnnual} />
          <ComparisonMetric label="Total Tax" tfnValue={tfnResult.taxPayable + tfnResult.medicareLevy} abnValue={abnResult.taxPayable + abnResult.medicareLevy} invertBetter />
          <ComparisonMetric label="Effective Tax Rate" tfnValue={tfnResult.effectiveTaxRate} abnValue={abnResult.effectiveTaxRate} isPercent invertBetter />
          <ComparisonMetric label="Net Take-Home" tfnValue={tfnResult.netTakeHome} abnValue={abnResult.netTakeHome} isBold />
          <ComparisonMetric label="Weekly Take-Home" tfnValue={tfnResult.weeklyTakeHome} abnValue={abnResult.weeklyTakeHome} isBold />
        </div>
      </div>
    </div>
  );
}

// Comparison Metric Row
function ComparisonMetric({ 
  label, 
  tfnValue, 
  abnValue, 
  isPercent = false,
  isBold = false,
  invertBetter = false
}: { 
  label: string; 
  tfnValue: number; 
  abnValue: number;
  isPercent?: boolean;
  isBold?: boolean;
  invertBetter?: boolean;
}) {
  const difference = abnValue - tfnValue;
  const abnBetter = invertBetter ? difference < 0 : difference > 0;

  return (
    <div className={cn(
      "grid grid-cols-3 gap-4 py-2 border-b border-border/50 last:border-0",
      isBold && "bg-muted/30 -mx-4 px-4 rounded"
    )}>
      <div className={cn("text-sm", isBold ? "font-semibold text-foreground" : "text-muted-foreground")}>
        {label}
      </div>
      <div className="text-right">
        <span className={cn("text-sm", isBold ? "font-bold" : "")}>
          {isPercent ? `${tfnValue.toFixed(1)}%` : formatCurrency(tfnValue)}
        </span>
      </div>
      <div className="text-right flex items-center justify-end gap-2">
        <span className={cn("text-sm", isBold ? "font-bold" : "")}>
          {isPercent ? `${abnValue.toFixed(1)}%` : formatCurrency(abnValue)}
        </span>
        {!isPercent && difference !== 0 && (
          <span className={cn(
            "text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5",
            abnBetter ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
          )}>
            {difference > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
            {formatCurrency(Math.abs(difference))}
          </span>
        )}
      </div>
    </div>
  );
}
