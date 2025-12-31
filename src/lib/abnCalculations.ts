// ABN (Contractor) Calculation Logic

import {
  calculateTotalTax,
  calculateMedicareLevy,
  SUPER_GUARANTEE_RATE,
  calculateGrossAnnual,
} from "./taxCalculations";

export interface ABNCalculationResult {
  grossAnnual: number;
  gstCollected: number;
  businessExpenses: number;
  taxableIncome: number;
  taxPayable: number;
  medicareLevy: number;
  selfFundedSuper: number;
  insuranceCosts: number;
  netTakeHome: number;
  weeklyTakeHome: number;
  effectiveTaxRate: number;
  totalCostsExcludingTax: number;
}

// Default expense percentages
export const DEFAULT_BUSINESS_EXPENSE_RATE = 0.15; // 15% of gross for tools, ute, materials
export const GST_RATE = 0.10; // 10% GST

// Insurance costs (annual estimates)
export const PUBLIC_LIABILITY_INSURANCE = 800; // $800 p.a.
export const INCOME_PROTECTION_RATE = 0.02; // 2% of gross income

/**
 * Calculate insurance costs for ABN holders
 */
export function calculateInsuranceCosts(grossAnnual: number): number {
  const incomeProtection = grossAnnual * INCOME_PROTECTION_RATE;
  return PUBLIC_LIABILITY_INSURANCE + incomeProtection;
}

/**
 * Calculate full ABN/contractor scenario
 */
export function calculateABNScenario(
  hourlyRate: number,
  hoursPerWeek: number,
  weeksPerYear: number,
  businessExpenseRate: number = DEFAULT_BUSINESS_EXPENSE_RATE,
  includeSuperContribution: boolean = true
): ABNCalculationResult {
  // Gross annual income
  const grossAnnual = calculateGrossAnnual(hourlyRate, hoursPerWeek, weeksPerYear);

  // GST collected (if registered for GST - required if > $75k)
  const gstCollected = grossAnnual * GST_RATE;

  // Business expenses (deductible)
  const businessExpenses = grossAnnual * businessExpenseRate;

  // Insurance costs
  const insuranceCosts = calculateInsuranceCosts(grossAnnual);

  // Self-funded super (optional but recommended)
  const selfFundedSuper = includeSuperContribution
    ? grossAnnual * SUPER_GUARANTEE_RATE
    : 0;

  // Taxable income after deductions
  // Note: Super contributions to your own fund are deductible
  const taxableIncome = Math.max(
    0,
    grossAnnual - businessExpenses - insuranceCosts - selfFundedSuper
  );

  // Tax calculations on taxable income
  const taxPayable = calculateTotalTax(taxableIncome);
  const medicareLevy = calculateMedicareLevy(taxableIncome);

  // Total costs excluding tax (for comparison)
  const totalCostsExcludingTax =
    businessExpenses + insuranceCosts + selfFundedSuper;

  // Net take-home after all deductions and tax
  // GST is collected and remitted, so not included in take-home
  const netTakeHome =
    grossAnnual - taxPayable - medicareLevy - totalCostsExcludingTax;

  // Weekly take-home (based on 52 weeks)
  const weeklyTakeHome = netTakeHome / 52;

  // Effective tax rate on gross income
  const effectiveTaxRate =
    grossAnnual > 0 ? ((taxPayable + medicareLevy) / grossAnnual) * 100 : 0;

  return {
    grossAnnual,
    gstCollected,
    businessExpenses,
    taxableIncome,
    taxPayable,
    medicareLevy,
    selfFundedSuper,
    insuranceCosts,
    netTakeHome,
    weeklyTakeHome,
    effectiveTaxRate,
    totalCostsExcludingTax,
  };
}
