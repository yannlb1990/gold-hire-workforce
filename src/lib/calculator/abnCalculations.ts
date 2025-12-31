// ABN (Contractor) Wage Calculations

import {
  calculateTotalTax,
  calculateEffectiveTaxRate,
  calculateMarginalTaxRate,
  type TaxOptions,
} from "./taxCalculations";
import {
  calculateOvertimeEarnings,
  calculateFIFOBenefits,
  type OvertimeConfig,
  type FIFOConfig,
} from "./allowancesAndOvertime";

export interface ABNInputs {
  hourlyRate: number;
  hoursPerWeek: number;
  weeksPerYear: number;
  // Business expenses (annual)
  businessExpenses: number;
  // Self-funded super contribution (percentage of net income)
  superContribution: number; // 0-100 (percentage)
  // Whether to account for unpaid leave
  accountForLeave: boolean;

  // Advanced options
  overtimeConfig?: OvertimeConfig;
  fifoConfig?: FIFOConfig;
  taxOptions?: TaxOptions;
}

export interface ABNResults {
  // Gross income
  grossAnnual: number;
  grossWeekly: number;
  grossFortnightly: number;
  grossMonthly: number;

  // Income breakdown
  baseIncome: number;
  overtimeIncome: number;
  publicHolidayIncome: number;

  // FIFO benefits (contractors can claim these as deductions, not as tax-free income)
  fifoBenefits: number;

  // Business deductions
  businessExpenses: number;
  // Taxable income (gross - expenses)
  taxableIncome: number;

  // Tax breakdown
  incomeTax: number;
  medicareLevy: number;
  medicareLevySurcharge: number;
  hecsRepayment: number;
  taxOffsets: number;
  totalTax: number;

  // After tax, before super
  afterTaxIncome: number;

  // Superannuation (self-funded, deducted from net)
  superAnnual: number;
  superWeekly: number;

  // Net income (after tax and super)
  netAnnual: number;
  netWeekly: number;
  netFortnightly: number;
  netMonthly: number;

  // Tax rates
  effectiveTaxRate: number;
  marginalTaxRate: number;

  // Additional costs
  estimatedUnpaidLeave: number; // Opportunity cost
  totalCosts: number; // expenses + unpaid leave

  // Comparison metrics
  netIncomeBeforeSuper: number; // For fairer comparison with TFN
  actualWorkingWeeks: number;
}

/**
 * Calculate ABN (contractor) wages and deductions
 */
export function calculateABN(inputs: ABNInputs): ABNResults {
  // Handle FIFO roster adjustments (for contractors, FIFO mainly affects deductions)
  const fifoResults = inputs.fifoConfig
    ? calculateFIFOBenefits(
        inputs.fifoConfig,
        inputs.hourlyRate,
        inputs.hoursPerWeek,
        inputs.weeksPerYear
      )
    : {
        actualWorkingWeeks: inputs.weeksPerYear,
        lafhaAccommodation: 0,
        lafhaFood: 0,
        totalLAFHA: 0,
        paidTravelEarnings: 0,
        totalFIFOBenefits: 0,
        accommodationValue: 0,
        mealsValue: 0,
      };

  const actualWeeks = fifoResults.actualWorkingWeeks;

  // Calculate base income + overtime
  const overtimeResults = inputs.overtimeConfig
    ? calculateOvertimeEarnings(inputs.hourlyRate, inputs.overtimeConfig, actualWeeks)
    : {
        regularEarnings: inputs.hourlyRate * inputs.hoursPerWeek * actualWeeks,
        overtimeEarnings: 0,
        publicHolidayEarnings: 0,
        totalEarnings: inputs.hourlyRate * inputs.hoursPerWeek * actualWeeks,
        effectiveHourlyRate: inputs.hourlyRate,
      };

  const baseIncome = overtimeResults.regularEarnings;
  const overtimeIncome = overtimeResults.overtimeEarnings;
  const publicHolidayIncome = overtimeResults.publicHolidayEarnings;

  // Calculate gross income
  const grossAnnual = overtimeResults.totalEarnings + fifoResults.paidTravelEarnings;
  const grossWeekly = grossAnnual / actualWeeks;
  const grossFortnightly = grossWeekly * 2;
  const grossMonthly = grossAnnual / 12;

  // For contractors, FIFO accommodation/meals are business expenses (can be claimed as deductions)
  // Add FIFO costs to business expenses
  const totalBusinessExpenses = inputs.businessExpenses + fifoResults.accommodationValue + fifoResults.mealsValue;

  // Calculate taxable income (gross - business expenses)
  const taxableIncome = Math.max(0, grossAnnual - totalBusinessExpenses);

  // Calculate tax on taxable income with advanced options
  const taxResults = calculateTotalTax(taxableIncome, inputs.taxOptions || {});

  // After-tax income (before super contribution)
  const afterTaxIncome = taxableIncome - taxResults.totalTax;

  // Calculate self-funded superannuation contribution
  const superAnnual = (afterTaxIncome * inputs.superContribution) / 100;
  const superWeekly = superAnnual / actualWeeks;

  // Calculate net income (after tax and super)
  const netAnnual = afterTaxIncome - superAnnual;
  const netWeekly = netAnnual / actualWeeks;
  const netFortnightly = netWeekly * 2;
  const netMonthly = netAnnual / 12;

  // Calculate tax rates (based on taxable income)
  const effectiveTaxRate = calculateEffectiveTaxRate(taxableIncome, taxResults.totalTax);
  const marginalTaxRate = calculateMarginalTaxRate(taxableIncome);

  // Estimate unpaid leave opportunity cost (4 weeks annual + 2 weeks sick)
  const weeksOfLeave = 6;
  const estimatedUnpaidLeave = inputs.accountForLeave
    ? inputs.hourlyRate * inputs.hoursPerWeek * weeksOfLeave
    : 0;

  // Total costs (expenses + opportunity cost of leave)
  const totalCosts = totalBusinessExpenses + estimatedUnpaidLeave;

  return {
    grossAnnual,
    grossWeekly,
    grossFortnightly,
    grossMonthly,
    baseIncome,
    overtimeIncome,
    publicHolidayIncome,
    fifoBenefits: fifoResults.totalLAFHA,
    businessExpenses: totalBusinessExpenses,
    taxableIncome,
    incomeTax: taxResults.incomeTax,
    medicareLevy: taxResults.medicareLevy,
    medicareLevySurcharge: taxResults.medicareLevySurcharge,
    hecsRepayment: taxResults.hecsRepayment,
    taxOffsets: taxResults.taxOffsets,
    totalTax: taxResults.totalTax,
    afterTaxIncome,
    superAnnual,
    superWeekly,
    netAnnual,
    netWeekly,
    netFortnightly,
    netMonthly,
    effectiveTaxRate,
    marginalTaxRate,
    estimatedUnpaidLeave,
    totalCosts,
    netIncomeBeforeSuper: afterTaxIncome, // For comparison
    actualWorkingWeeks: actualWeeks,
  };
}

/**
 * Common business expenses for tradies
 */
export interface BusinessExpense {
  category: string;
  estimatedAnnual: number;
  description: string;
}

export function getTypicalTradieExpenses(hourlyRate: number): BusinessExpense[] {
  // Rough estimates based on hourly rate
  const grossAnnual = hourlyRate * 38 * 48; // Assume 38hrs/week, 48 weeks

  return [
    {
      category: "Tools & Equipment",
      estimatedAnnual: Math.min(5000, grossAnnual * 0.05),
      description: "Power tools, hand tools, safety equipment",
    },
    {
      category: "Vehicle Expenses",
      estimatedAnnual: Math.min(8000, grossAnnual * 0.08),
      description: "Fuel, maintenance, registration, insurance",
    },
    {
      category: "Insurance",
      estimatedAnnual: Math.min(3000, grossAnnual * 0.03),
      description: "Public liability, professional indemnity, income protection",
    },
    {
      category: "Accountant & Tax Agent",
      estimatedAnnual: 1500,
      description: "Annual tax return, BAS statements, bookkeeping",
    },
    {
      category: "Phone & Internet",
      estimatedAnnual: 1200,
      description: "Mobile phone, data, business communication",
    },
    {
      category: "Consumables & Materials",
      estimatedAnnual: Math.min(2000, grossAnnual * 0.02),
      description: "Small materials, safety gear, cleaning supplies",
    },
    {
      category: "Training & Licenses",
      estimatedAnnual: 1000,
      description: "Ticket renewals, upskilling, certification",
    },
    {
      category: "Marketing & Administration",
      estimatedAnnual: 500,
      description: "Website, business cards, advertising",
    },
  ];
}

/**
 * Calculate total typical expenses
 */
export function calculateTypicalExpenses(hourlyRate: number): number {
  const expenses = getTypicalTradieExpenses(hourlyRate);
  return expenses.reduce((total, exp) => total + exp.estimatedAnnual, 0);
}

/**
 * Get ABN benefits description
 */
export function getABNBenefits(): string[] {
  return [
    "Higher hourly rates (typically 25-40% more than employees)",
    "Claim business expense deductions (tools, vehicle, phone, etc.)",
    "Greater control over work schedule and clients",
    "Ability to work for multiple clients",
    "Tax deductions can significantly reduce taxable income",
    "Potential for business growth and scaling",
    "Choose your own superannuation fund and contribution rate",
    "Flexibility to structure income for tax efficiency",
    "Build business equity and reputation",
    "More autonomy and independence",
  ];
}

/**
 * Get ABN considerations and costs
 */
export function getABNConsiderations(): string[] {
  return [
    "No paid annual leave or sick leave",
    "No paid public holidays",
    "Must pay your own superannuation",
    "Must arrange your own insurance (public liability, income protection)",
    "Responsible for quarterly BAS/GST if registered",
    "Need to save for tax obligations throughout the year",
    "Less job security - work can be irregular",
    "Must manage own business expenses and cash flow",
    "Accountant fees for tax compliance",
    "No workers' compensation unless self-insured",
    "Irregular income during quiet periods",
  ];
}
