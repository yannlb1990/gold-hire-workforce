// ABN (Contractor) Calculation Logic

import {
  calculateTotalTax,
  calculateMedicareLevy,
  calculateLITO,
  SUPER_GUARANTEE_RATE,
  calculateGrossAnnual,
} from "./taxCalculations";
import { calculateFIFODeductions, calculateFIFOWorkingWeeks, ABN_FIFO_TRAVEL_EXPENSE_RATE, ABN_FIFO_ACCOMMODATION_RATE } from "./fifoCalculations";
import { calculateOvertimePay } from "./overtimeCalculations";

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
  // FIFO fields
  fifoDeductions: number;
  fifoRoster: string | null;
  actualWorkingWeeks: number;
  // Overtime fields
  overtimePay: number;
  // NEW: Detailed breakdown fields
  baseIncome: number;
  fifoPaidTravel: number;
  fifoAccommodation: number;
  litoOffset: number;
  publicLiabilityInsurance: number;
  incomeProtection: number;
}

// Default expense percentages
export const DEFAULT_BUSINESS_EXPENSE_RATE = 0.15; // 15% of gross for tools, ute, materials
export const GST_RATE = 0.10; // 10% GST

// Insurance costs (annual estimates)
export const PUBLIC_LIABILITY_INSURANCE = 800; // $800 p.a.
export const INCOME_PROTECTION_RATE = 0.02; // 2% of gross income

/**
 * Calculate insurance costs for ABN holders with breakdown
 */
export function calculateInsuranceCosts(grossAnnual: number): { total: number; publicLiability: number; incomeProtection: number } {
  const incomeProtection = grossAnnual * INCOME_PROTECTION_RATE;
  return {
    total: PUBLIC_LIABILITY_INSURANCE + incomeProtection,
    publicLiability: PUBLIC_LIABILITY_INSURANCE,
    incomeProtection,
  };
}

export interface ABNScenarioOptions {
  fifoEnabled?: boolean;
  fifoRoster?: string;
  overtimeEnabled?: boolean;
  overtimeHours?: number;
  overtimeMultiplier?: string;
}

/**
 * Calculate full ABN/contractor scenario
 */
export function calculateABNScenario(
  hourlyRate: number,
  hoursPerWeek: number,
  weeksPerYear: number,
  businessExpenseRate: number = DEFAULT_BUSINESS_EXPENSE_RATE,
  includeSuperContribution: boolean = true,
  options: ABNScenarioOptions = {}
): ABNCalculationResult {
  const {
    fifoEnabled = false,
    fifoRoster = "2-1",
    overtimeEnabled = false,
    overtimeHours = 0,
    overtimeMultiplier = "1.5x",
  } = options;

  // Calculate actual working weeks (FIFO adjusts this)
  const actualWorkingWeeks = fifoEnabled
    ? calculateFIFOWorkingWeeks(fifoRoster)
    : weeksPerYear;

  // Base gross annual income (before overtime)
  const baseIncome = calculateGrossAnnual(hourlyRate, hoursPerWeek, actualWorkingWeeks);

  // Calculate overtime pay
  const overtimePay = overtimeEnabled
    ? calculateOvertimePay(hourlyRate, overtimeHours, overtimeMultiplier, actualWorkingWeeks)
    : 0;

  // Total gross including overtime
  const grossAnnual = baseIncome + overtimePay;

  // GST collected (if registered for GST - required if > $75k)
  const gstCollected = grossAnnual * GST_RATE;

  // Business expenses (deductible)
  const businessExpenses = grossAnnual * businessExpenseRate;

  // FIFO-specific deductions breakdown
  let fifoPaidTravel = 0;
  let fifoAccommodation = 0;
  let fifoDeductions = 0;
  if (fifoEnabled) {
    fifoPaidTravel = grossAnnual * ABN_FIFO_TRAVEL_EXPENSE_RATE;
    fifoAccommodation = grossAnnual * ABN_FIFO_ACCOMMODATION_RATE;
    fifoDeductions = fifoPaidTravel + fifoAccommodation;
  }

  // Insurance costs with breakdown
  const insuranceBreakdown = calculateInsuranceCosts(grossAnnual);
  const insuranceCosts = insuranceBreakdown.total;

  // Self-funded super (optional but recommended)
  const selfFundedSuper = includeSuperContribution
    ? grossAnnual * SUPER_GUARANTEE_RATE
    : 0;

  // Taxable income after deductions
  // Note: Super contributions to your own fund are deductible
  const taxableIncome = Math.max(
    0,
    grossAnnual - businessExpenses - fifoDeductions - insuranceCosts - selfFundedSuper
  );

  // Tax calculations on taxable income
  const taxPayable = calculateTotalTax(taxableIncome);
  const medicareLevy = calculateMedicareLevy(taxableIncome);
  
  // LITO offset (already factored into taxPayable, but we calculate for display)
  const litoOffset = calculateLITO(taxableIncome);

  // Total costs excluding tax (for comparison)
  const totalCostsExcludingTax =
    businessExpenses + fifoDeductions + insuranceCosts + selfFundedSuper;

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
    fifoDeductions,
    fifoRoster: fifoEnabled ? fifoRoster : null,
    actualWorkingWeeks,
    overtimePay,
    // NEW detailed fields
    baseIncome,
    fifoPaidTravel,
    fifoAccommodation,
    litoOffset,
    publicLiabilityInsurance: insuranceBreakdown.publicLiability,
    incomeProtection: insuranceBreakdown.incomeProtection,
  };
}
