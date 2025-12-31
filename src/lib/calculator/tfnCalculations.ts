// TFN (Employee) Wage Calculations

import {
  calculateTotalTax,
  calculateEffectiveTaxRate,
  calculateMarginalTaxRate,
  SUPER_GUARANTEE_RATE,
  type TaxOptions,
} from "./taxCalculations";
import {
  calculateOvertimeEarnings,
  calculateAllowances,
  calculateFIFOBenefits,
  type OvertimeConfig,
  type AllowancesConfig,
  type FIFOConfig,
} from "./allowancesAndOvertime";

export interface TFNInputs {
  hourlyRate: number;
  hoursPerWeek: number;
  weeksPerYear: number;

  // Advanced options
  overtimeConfig?: OvertimeConfig;
  allowancesConfig?: AllowancesConfig;
  fifoConfig?: FIFOConfig;
  taxOptions?: TaxOptions;
}

export interface TFNResults {
  // Gross income (base + overtime)
  grossAnnual: number;
  grossWeekly: number;
  grossFortnightly: number;
  grossMonthly: number;

  // Income breakdown
  baseIncome: number;
  overtimeIncome: number;
  publicHolidayIncome: number;

  // Allowances
  totalAllowances: number;
  taxFreeAllowances: number;
  taxableAllowances: number;

  // FIFO benefits
  fifoBenefits: number;
  accommodationValue: number;
  mealsValue: number;

  // Taxable income (gross + taxable allowances)
  taxableIncome: number;

  // Tax breakdown
  incomeTax: number;
  medicareLevy: number;
  medicareLevySurcharge: number;
  hecsRepayment: number;
  taxOffsets: number;
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

  // Total package (gross + super + allowances + FIFO benefits)
  totalPackage: number;
  actualWorkingWeeks: number;
}

/**
 * Calculate TFN (employee) wages and deductions
 */
export function calculateTFN(inputs: TFNInputs): TFNResults {
  // Handle FIFO roster adjustments
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
  const wageIncome = overtimeResults.totalEarnings;

  // Calculate allowances
  const allowancesResults = inputs.allowancesConfig
    ? calculateAllowances(inputs.allowancesConfig, actualWeeks)
    : {
        carAllowance: 0,
        toolAllowance: 0,
        mealAllowance: 0,
        travelAllowance: 0,
        otherAllowances: 0,
        totalAllowances: 0,
        taxFreeAllowances: 0,
        taxableAllowances: 0,
      };

  // Gross income = wages + FIFO paid travel
  const grossAnnual = wageIncome + fifoResults.paidTravelEarnings;

  // Taxable income = gross + taxable allowances (tax-free allowances excluded)
  const taxableIncome = grossAnnual + allowancesResults.taxableAllowances;

  // Calculate tax with advanced options
  const taxResults = calculateTotalTax(taxableIncome, inputs.taxOptions || {});

  // Net income = gross + tax-free allowances + FIFO benefits - tax
  const netAnnual =
    grossAnnual +
    allowancesResults.taxFreeAllowances +
    fifoResults.totalLAFHA -
    taxResults.totalTax;

  const netWeekly = netAnnual / actualWeeks;
  const netFortnightly = netWeekly * 2;
  const netMonthly = netAnnual / 12;

  const grossWeekly = grossAnnual / actualWeeks;
  const grossFortnightly = grossWeekly * 2;
  const grossMonthly = grossAnnual / 12;

  // Calculate superannuation (employer contribution on top of gross salary)
  const superAnnual = grossAnnual * SUPER_GUARANTEE_RATE;
  const superWeekly = superAnnual / actualWeeks;

  // Calculate tax rates
  const effectiveTaxRate = calculateEffectiveTaxRate(taxableIncome, taxResults.totalTax);
  const marginalTaxRate = calculateMarginalTaxRate(taxableIncome);

  // Total package value (all benefits)
  const totalPackage =
    grossAnnual +
    superAnnual +
    allowancesResults.totalAllowances +
    fifoResults.totalLAFHA +
    fifoResults.accommodationValue +
    fifoResults.mealsValue;

  return {
    grossAnnual,
    grossWeekly,
    grossFortnightly,
    grossMonthly,
    baseIncome,
    overtimeIncome,
    publicHolidayIncome,
    totalAllowances: allowancesResults.totalAllowances,
    taxFreeAllowances: allowancesResults.taxFreeAllowances,
    taxableAllowances: allowancesResults.taxableAllowances,
    fifoBenefits: fifoResults.totalLAFHA + fifoResults.paidTravelEarnings,
    accommodationValue: fifoResults.accommodationValue,
    mealsValue: fifoResults.mealsValue,
    taxableIncome,
    incomeTax: taxResults.incomeTax,
    medicareLevy: taxResults.medicareLevy,
    medicareLevySurcharge: taxResults.medicareLevySurcharge,
    hecsRepayment: taxResults.hecsRepayment,
    taxOffsets: taxResults.taxOffsets,
    totalTax: taxResults.totalTax,
    netAnnual,
    netWeekly,
    netFortnightly,
    netMonthly,
    superAnnual,
    superWeekly,
    effectiveTaxRate,
    marginalTaxRate,
    totalPackage,
    actualWorkingWeeks: actualWeeks,
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
