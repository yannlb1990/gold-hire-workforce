// ABN (Contractor) Wage Calculations

import {
  calculateTotalTax,
  calculateEffectiveTaxRate,
  calculateMarginalTaxRate,
} from "./taxCalculations";

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
}

export interface ABNResults {
  // Gross income
  grossAnnual: number;
  grossWeekly: number;
  grossFortnightly: number;
  grossMonthly: number;

  // Business deductions
  businessExpenses: number;
  // Taxable income (gross - expenses)
  taxableIncome: number;

  // Tax breakdown
  incomeTax: number;
  medicareLevy: number;
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
}

/**
 * Calculate ABN (contractor) wages and deductions
 */
export function calculateABN(inputs: ABNInputs): ABNResults {
  // Calculate gross income
  const grossAnnual = inputs.hourlyRate * inputs.hoursPerWeek * inputs.weeksPerYear;
  const grossWeekly = grossAnnual / inputs.weeksPerYear;
  const grossFortnightly = grossWeekly * 2;
  const grossMonthly = grossAnnual / 12;

  // Calculate taxable income (gross - business expenses)
  const taxableIncome = Math.max(0, grossAnnual - inputs.businessExpenses);

  // Calculate tax on taxable income
  const { incomeTax, medicareLevy, totalTax } = calculateTotalTax(taxableIncome);

  // After-tax income (before super contribution)
  const afterTaxIncome = taxableIncome - totalTax;

  // Calculate self-funded superannuation contribution
  const superAnnual = (afterTaxIncome * inputs.superContribution) / 100;
  const superWeekly = superAnnual / inputs.weeksPerYear;

  // Calculate net income (after tax and super)
  const netAnnual = afterTaxIncome - superAnnual;
  const netWeekly = netAnnual / inputs.weeksPerYear;
  const netFortnightly = netWeekly * 2;
  const netMonthly = netAnnual / 12;

  // Calculate tax rates (based on taxable income)
  const effectiveTaxRate = calculateEffectiveTaxRate(taxableIncome, totalTax);
  const marginalTaxRate = calculateMarginalTaxRate(taxableIncome);

  // Estimate unpaid leave opportunity cost (4 weeks annual + 2 weeks sick)
  const weeksOfLeave = 6;
  const estimatedUnpaidLeave = inputs.accountForLeave
    ? inputs.hourlyRate * inputs.hoursPerWeek * weeksOfLeave
    : 0;

  // Total costs (expenses + opportunity cost of leave)
  const totalCosts = inputs.businessExpenses + estimatedUnpaidLeave;

  return {
    grossAnnual,
    grossWeekly,
    grossFortnightly,
    grossMonthly,
    businessExpenses: inputs.businessExpenses,
    taxableIncome,
    incomeTax,
    medicareLevy,
    totalTax,
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
