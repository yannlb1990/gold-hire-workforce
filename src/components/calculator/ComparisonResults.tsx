import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  PiggyBank,
  AlertCircle,
  Briefcase,
  Clock,
  Gift,
  Plane,
  Car,
  Wrench,
  UtensilsCrossed,
  ShieldCheck,
  Receipt
} from "lucide-react";
import type { TFNResults } from "@/lib/calculator/tfnCalculations";
import type { ABNResults } from "@/lib/calculator/abnCalculations";

interface ComparisonResultsProps {
  tfnResults: TFNResults;
  abnResults: ABNResults;
  inputs: {
    tfnHourlyRate: number;
    abnHourlyRate: number;
    hoursPerWeek: number;
    weeksPerYear: number;
  };
}

const ComparisonResults = ({ tfnResults, abnResults, inputs }: ComparisonResultsProps) => {
  // Calculate key differences
  const netDifference = abnResults.netAnnual - tfnResults.netAnnual;
  const netDifferencePercent = ((netDifference / tfnResults.netAnnual) * 100);
  const superDifference = tfnResults.superAnnual - abnResults.superAnnual;

  // Break-even analysis
  const abnIsBetter = netDifference > 0;
  const rateIncrease = ((inputs.abnHourlyRate - inputs.tfnHourlyRate) / inputs.tfnHourlyRate) * 100;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* TFN Summary */}
        <Card className="shadow-elevated border-2 border-navy/20 hover:border-navy/40 transition-colors">
          <CardHeader className="bg-navy/5 border-b">
            <CardTitle className="text-xl flex items-center justify-between">
              <span>TFN (Employee)</span>
              <span className="text-2xl font-bold text-navy">
                ${tfnResults.netWeekly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
              </span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">per week take-home</p>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {/* Income Breakdown */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Income Breakdown
              </h4>
              <div className="pl-6 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base Wages</span>
                  <span className="font-medium">
                    ${tfnResults.baseIncome.toLocaleString("en-AU")}
                  </span>
                </div>
                {tfnResults.overtimeIncome > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Overtime Pay
                    </span>
                    <span className="font-medium text-earth-green">
                      +${tfnResults.overtimeIncome.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {tfnResults.publicHolidayIncome > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Public Holiday Pay</span>
                    <span className="font-medium text-earth-green">
                      +${tfnResults.publicHolidayIncome.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {tfnResults.fifoBenefits > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Plane className="w-3 h-3" />
                      FIFO Benefits
                    </span>
                    <span className="font-medium text-earth-green">
                      +${tfnResults.fifoBenefits.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                <div className="border-t pt-1.5 flex justify-between font-semibold">
                  <span>Gross Wages</span>
                  <span>${tfnResults.grossAnnual.toLocaleString("en-AU")}</span>
                </div>
              </div>
            </div>

            {/* Allowances (if any) */}
            {tfnResults.totalAllowances > 0 && (
              <div className="bg-gold/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-4 h-4 text-gold" />
                  <span className="text-sm font-semibold">Allowances</span>
                </div>
                <div className="space-y-1 text-xs">
                  {tfnResults.taxFreeAllowances > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-earth-green" />
                        Tax-Free Allowances
                      </span>
                      <span className="font-semibold text-earth-green">
                        +${tfnResults.taxFreeAllowances.toLocaleString("en-AU")}
                      </span>
                    </div>
                  )}
                  {tfnResults.taxableAllowances > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Taxable Allowances</span>
                      <span className="font-medium">
                        ${tfnResults.taxableAllowances.toLocaleString("en-AU")}
                      </span>
                    </div>
                  )}
                  <div className="border-t pt-1 flex justify-between font-semibold">
                    <span>Total Allowances</span>
                    <span>${tfnResults.totalAllowances.toLocaleString("en-AU")}</span>
                  </div>
                </div>
              </div>
            )}

            {/* FIFO Details (if applicable) */}
            {(tfnResults.accommodationValue > 0 || tfnResults.mealsValue > 0) && (
              <div className="bg-navy/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Plane className="w-4 h-4 text-navy" />
                  <span className="text-sm font-semibold">FIFO Non-Cash Benefits</span>
                </div>
                <div className="space-y-1 text-xs">
                  {tfnResults.accommodationValue > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accommodation Provided</span>
                      <span className="font-medium">
                        ${tfnResults.accommodationValue.toLocaleString("en-AU")}
                      </span>
                    </div>
                  )}
                  {tfnResults.mealsValue > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Meals Provided</span>
                      <span className="font-medium">
                        ${tfnResults.mealsValue.toLocaleString("en-AU")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tax Breakdown */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Receipt className="w-4 h-4" />
                Tax Breakdown
              </h4>
              <div className="pl-6 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxable Income</span>
                  <span className="font-medium">
                    ${tfnResults.taxableIncome.toLocaleString("en-AU")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Income Tax</span>
                  <span className="text-destructive">
                    -${tfnResults.incomeTax.toLocaleString("en-AU")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Medicare Levy (2%)</span>
                  <span className="text-destructive">
                    -${tfnResults.medicareLevy.toLocaleString("en-AU")}
                  </span>
                </div>
                {tfnResults.medicareLevySurcharge > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Medicare Levy Surcharge</span>
                    <span className="text-destructive">
                      -${tfnResults.medicareLevySurcharge.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {tfnResults.hecsRepayment > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">HECS-HELP Repayment</span>
                    <span className="text-destructive">
                      -${tfnResults.hecsRepayment.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {tfnResults.taxOffsets > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax Offsets (LITO)</span>
                    <span className="text-earth-green">
                      +${tfnResults.taxOffsets.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                <div className="border-t pt-1.5 flex justify-between font-semibold">
                  <span>Total Tax ({tfnResults.effectiveTaxRate.toFixed(1)}%)</span>
                  <span className="text-destructive">
                    -${tfnResults.totalTax.toLocaleString("en-AU")}
                  </span>
                </div>
              </div>
            </div>

            {/* Net Income */}
            <div className="bg-navy/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-navy">Net Annual Income</span>
                <span className="text-2xl font-bold text-navy">
                  ${tfnResults.netAnnual.toLocaleString("en-AU")}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                <div>
                  <div>Weekly</div>
                  <div className="font-semibold text-foreground">
                    ${tfnResults.netWeekly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                  </div>
                </div>
                <div>
                  <div>Fortnightly</div>
                  <div className="font-semibold text-foreground">
                    ${tfnResults.netFortnightly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                  </div>
                </div>
                <div>
                  <div>Monthly</div>
                  <div className="font-semibold text-foreground">
                    ${tfnResults.netMonthly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                  </div>
                </div>
              </div>
            </div>

            {/* Superannuation */}
            <div className="bg-earth-green/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <PiggyBank className="w-4 h-4 text-earth-green" />
                <span className="text-sm font-semibold text-earth-green">
                  Employer Super (11.5%)
                </span>
              </div>
              <div className="text-xl font-bold text-earth-green">
                ${tfnResults.superAnnual.toLocaleString("en-AU")}
                <span className="text-sm text-muted-foreground ml-2">
                  (${tfnResults.superWeekly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}/week)
                </span>
              </div>
            </div>

            {/* Total Package */}
            <div className="border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">Total Package Value</span>
                <span className="text-lg font-bold">
                  ${tfnResults.totalPackage.toLocaleString("en-AU")}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ABN Summary */}
        <Card className="shadow-elevated border-2 border-earth-green/20 hover:border-earth-green/40 transition-colors">
          <CardHeader className="bg-earth-green/5 border-b">
            <CardTitle className="text-xl flex items-center justify-between">
              <span>ABN (Contractor)</span>
              <span className="text-2xl font-bold text-earth-green">
                ${abnResults.netWeekly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
              </span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">per week take-home</p>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {/* Income Breakdown */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Income Breakdown
              </h4>
              <div className="pl-6 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base Income</span>
                  <span className="font-medium">
                    ${abnResults.baseIncome.toLocaleString("en-AU")}
                  </span>
                </div>
                {abnResults.overtimeIncome > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Overtime Pay
                    </span>
                    <span className="font-medium text-earth-green">
                      +${abnResults.overtimeIncome.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {abnResults.publicHolidayIncome > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Public Holiday Pay</span>
                    <span className="font-medium text-earth-green">
                      +${abnResults.publicHolidayIncome.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {abnResults.fifoBenefits > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Plane className="w-3 h-3" />
                      FIFO Paid Travel
                    </span>
                    <span className="font-medium text-earth-green">
                      +${abnResults.fifoBenefits.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                <div className="border-t pt-1.5 flex justify-between font-semibold">
                  <span>Gross Income</span>
                  <span>${abnResults.grossAnnual.toLocaleString("en-AU")}</span>
                </div>
              </div>
            </div>

            {/* Business Expenses */}
            <div className="bg-gold/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Receipt className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold">Business Deductions</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax-Deductible Expenses</span>
                  <span className="font-semibold text-destructive">
                    -${abnResults.businessExpenses.toLocaleString("en-AU")}
                  </span>
                </div>
                <p className="text-muted-foreground italic">
                  Tools, vehicle, insurance, phone, etc.
                </p>
              </div>
            </div>

            {/* Tax Breakdown */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <Receipt className="w-4 h-4" />
                Tax Breakdown
              </h4>
              <div className="pl-6 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Taxable Income</span>
                  <span className="font-medium">
                    ${abnResults.taxableIncome.toLocaleString("en-AU")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Income Tax</span>
                  <span className="text-destructive">
                    -${abnResults.incomeTax.toLocaleString("en-AU")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Medicare Levy (2%)</span>
                  <span className="text-destructive">
                    -${abnResults.medicareLevy.toLocaleString("en-AU")}
                  </span>
                </div>
                {abnResults.medicareLevySurcharge > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Medicare Levy Surcharge</span>
                    <span className="text-destructive">
                      -${abnResults.medicareLevySurcharge.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {abnResults.hecsRepayment > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">HECS-HELP Repayment</span>
                    <span className="text-destructive">
                      -${abnResults.hecsRepayment.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                {abnResults.taxOffsets > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax Offsets (LITO)</span>
                    <span className="text-earth-green">
                      +${abnResults.taxOffsets.toLocaleString("en-AU")}
                    </span>
                  </div>
                )}
                <div className="border-t pt-1.5 flex justify-between font-semibold">
                  <span>Total Tax ({abnResults.effectiveTaxRate.toFixed(1)}%)</span>
                  <span className="text-destructive">
                    -${abnResults.totalTax.toLocaleString("en-AU")}
                  </span>
                </div>
              </div>
            </div>

            {/* Self-funded Super */}
            {abnResults.superAnnual > 0 && (
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Self-funded Super</span>
                  <span className="text-destructive">
                    -${abnResults.superAnnual.toLocaleString("en-AU")}
                  </span>
                </div>
              </div>
            )}

            {/* Net Income */}
            <div className="bg-earth-green/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-earth-green">Net Annual Income</span>
                <span className="text-2xl font-bold text-earth-green">
                  ${abnResults.netAnnual.toLocaleString("en-AU")}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                <div>
                  <div>Weekly</div>
                  <div className="font-semibold text-foreground">
                    ${abnResults.netWeekly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                  </div>
                </div>
                <div>
                  <div>Fortnightly</div>
                  <div className="font-semibold text-foreground">
                    ${abnResults.netFortnightly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                  </div>
                </div>
                <div>
                  <div>Monthly</div>
                  <div className="font-semibold text-foreground">
                    ${abnResults.netMonthly.toLocaleString("en-AU", { maximumFractionDigits: 0 })}
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity Costs */}
            {abnResults.estimatedUnpaidLeave > 0 && (
              <div className="bg-gold/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle className="w-4 h-4 text-gold" />
                  <span className="text-sm font-semibold">Unpaid Leave Cost</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ~${abnResults.estimatedUnpaidLeave.toLocaleString("en-AU")} opportunity cost (6 weeks)
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Head-to-Head Comparison */}
      <Card className="shadow-elevated border-2 border-gold/30">
        <CardHeader className="bg-gradient-gold">
          <CardTitle className="text-xl">Bottom Line Comparison</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {/* Net Income Comparison */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg">Annual Take-Home Pay</h3>
              <div className={`flex items-center gap-2 ${abnIsBetter ? 'text-earth-green' : 'text-destructive'}`}>
                {abnIsBetter ? (
                  <TrendingUp className="w-5 h-5" />
                ) : (
                  <TrendingDown className="w-5 h-5" />
                )}
                <span className="text-xl font-bold">
                  {abnIsBetter ? '+' : ''}${Math.abs(netDifference).toLocaleString("en-AU")}
                </span>
                <span className="text-sm">
                  ({abnIsBetter ? '+' : ''}{netDifferencePercent.toFixed(1)}%)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="text-center p-3 bg-navy/10 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">TFN</div>
                <div className="text-xl font-bold text-navy">
                  ${tfnResults.netAnnual.toLocaleString("en-AU")}
                </div>
              </div>
              <div className="text-center p-3 bg-earth-green/10 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">ABN</div>
                <div className="text-xl font-bold text-earth-green">
                  ${abnResults.netAnnual.toLocaleString("en-AU")}
                </div>
              </div>
            </div>

            {/* Visual Bar Comparison */}
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>TFN Take-Home</span>
                  <span>${tfnResults.netAnnual.toLocaleString("en-AU")}</span>
                </div>
                <Progress
                  value={(tfnResults.netAnnual / Math.max(tfnResults.netAnnual, abnResults.netAnnual)) * 100}
                  className="h-3 bg-navy/20"
                  indicatorClassName="bg-navy"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>ABN Take-Home</span>
                  <span>${abnResults.netAnnual.toLocaleString("en-AU")}</span>
                </div>
                <Progress
                  value={(abnResults.netAnnual / Math.max(tfnResults.netAnnual, abnResults.netAnnual)) * 100}
                  className="h-3 bg-earth-green/20"
                  indicatorClassName="bg-earth-green"
                />
              </div>
            </div>
          </div>

          {/* Superannuation Comparison */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Superannuation</h3>
              <div className={`flex items-center gap-2 ${superDifference > 0 ? 'text-earth-green' : 'text-destructive'}`}>
                <PiggyBank className="w-4 h-4" />
                <span className="font-bold">
                  {superDifference > 0 ? 'TFN Better by' : 'ABN Better by'} ${Math.abs(superDifference).toLocaleString("en-AU")}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-navy/5 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">TFN (Employer Paid)</div>
                <div className="text-lg font-bold">${tfnResults.superAnnual.toLocaleString("en-AU")}</div>
              </div>
              <div className="p-3 bg-earth-green/5 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">ABN (Self-Funded)</div>
                <div className="text-lg font-bold">${abnResults.superAnnual.toLocaleString("en-AU")}</div>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">Key Insights</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p>
                  ABN rate is <strong>{rateIncrease.toFixed(1)}% higher</strong> than TFN rate
                  (${inputs.abnHourlyRate}/hr vs ${inputs.tfnHourlyRate}/hr)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p>
                  ABN effective tax rate is <strong>{abnResults.effectiveTaxRate.toFixed(1)}%</strong> vs
                  TFN's <strong>{tfnResults.effectiveTaxRate.toFixed(1)}%</strong> due to business deductions
                </p>
              </div>
              {abnIsBetter ? (
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-earth-green mt-0.5 flex-shrink-0" />
                  <p className="text-earth-green font-semibold">
                    ABN provides <strong>${Math.abs(netDifference).toLocaleString("en-AU")} more</strong> annual
                    take-home pay ({netDifferencePercent.toFixed(1)}% increase)
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-2">
                  <TrendingDown className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-destructive font-semibold">
                    TFN provides <strong>${Math.abs(netDifference).toLocaleString("en-AU")} more</strong> annual
                    take-home pay when accounting for all costs
                  </p>
                </div>
              )}
              {tfnResults.superAnnual > abnResults.superAnnual && (
                <div className="flex items-start gap-2">
                  <PiggyBank className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <p>
                    TFN employer super contributions are <strong>${superDifference.toLocaleString("en-AU")} higher</strong> annually
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComparisonResults;
