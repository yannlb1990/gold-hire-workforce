// TFN (Employee) Wage Calculations

import {
  calculateTotalTax,
  calculateEffectiveTaxRate,
  calculateMarginalTaxRate,
  SUPER_GUARANTEE_RATE,
} from "./taxCalculations";

export interface TFNInputs {
  hourlyRate: number;
  hoursPerWeek: number;
  weeksPerYear: number;
}

export interface TFNResults {
  // Gross income
  grossAnnual: number;
  grossWeekly: number;
  grossFortnightly: number;
  grossMonthly: number;

  // Tax breakdown
  incomeTax: number;
  medicareLevy: number;
  totalTax: number;

  // Net income (after tax)
  netAnnual: number;
  netWeekly: number;
  netFortnightly: number;
  netMonthly: number;

  // Superannuation (employer contribution, not included in gross)
  superAnnual: number;
  superWeekly: number;

  // Tax rates
  effectiveTaxRate: number;
  marginalTaxRate: number;

  // Total package (gross + super)
  totalPackage: number;
}

/**
 * Calculate TFN (employee) wages and deductions
 */
export function calculateTFN(inputs: TFNInputs): TFNResults {
  // Calculate gross income
  const grossAnnual = inputs.hourlyRate * inputs.hoursPerWeek * inputs.weeksPerYear;
  const grossWeekly = grossAnnual / inputs.weeksPerYear;
  const grossFortnightly = grossWeekly * 2;
  const grossMonthly = grossAnnual / 12;

  // Calculate tax
  const { incomeTax, medicareLevy, totalTax } = calculateTotalTax(grossAnnual);

  // Calculate net income
  const netAnnual = grossAnnual - totalTax;
  const netWeekly = netAnnual / inputs.weeksPerYear;
  const netFortnightly = netWeekly * 2;
  const netMonthly = netAnnual / 12;

  // Calculate superannuation (employer contribution on top of gross salary)
  const superAnnual = grossAnnual * SUPER_GUARANTEE_RATE;
  const superWeekly = superAnnual / inputs.weeksPerYear;

  // Calculate tax rates
  const effectiveTaxRate = calculateEffectiveTaxRate(grossAnnual, totalTax);
  const marginalTaxRate = calculateMarginalTaxRate(grossAnnual);

  // Total package value
  const totalPackage = grossAnnual + superAnnual;

  return {
    grossAnnual,
    grossWeekly,
    grossFortnightly,
    grossMonthly,
    incomeTax,
    medicareLevy,
    totalTax,
    netAnnual,
    netWeekly,
    netFortnightly,
    netMonthly,
    superAnnual,
    superWeekly,
    effectiveTaxRate,
    marginalTaxRate,
    totalPackage,
  };
}

/**
 * Get TFN benefits description
 */
export function getTFNBenefits(): string[] {
  return [
    "Employer pays 11.5% superannuation on top of your wage",
    "Eligible for paid annual leave (4 weeks per year)",
    "Eligible for paid sick leave (10 days per year)",
    "Eligible for paid public holidays",
    "Workers' compensation insurance covered by employer",
    "Long service leave after 7-10 years",
    "Protections under Fair Work Act",
    "Potential for paid parental leave",
    "Job security and stability",
    "No need to manage business expenses or insurance",
  ];
}

/**
 * Get TFN considerations
 */
export function getTFNConsiderations(): string[] {
  return [
    "Fixed hourly rate with limited negotiation",
    "Tax withheld from each paycheck (PAYG)",
    "Less control over work schedule",
    "Cannot claim business expense deductions",
    "Limited tax minimization strategies",
    "Dependent on employer for work",
  ];
}
