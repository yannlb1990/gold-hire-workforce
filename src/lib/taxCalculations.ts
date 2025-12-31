// Australian 2024-25 Tax Calculation Utilities

export interface TaxBracket {
  min: number;
  max: number;
  rate: number;
  baseTax: number;
}

// 2024-25 Australian tax brackets (Stage 3 tax cuts applied)
export const TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 18200, rate: 0, baseTax: 0 },
  { min: 18201, max: 45000, rate: 0.16, baseTax: 0 },
  { min: 45001, max: 135000, rate: 0.30, baseTax: 4288 },
  { min: 135001, max: 190000, rate: 0.37, baseTax: 31288 },
  { min: 190001, max: Infinity, rate: 0.45, baseTax: 51638 },
];

// Medicare levy rate
export const MEDICARE_LEVY_RATE = 0.02;
export const MEDICARE_LEVY_THRESHOLD = 26000; // Approx threshold for reduced levy

// Superannuation guarantee rate 2024-25
export const SUPER_GUARANTEE_RATE = 0.115; // 11.5%

// Low Income Tax Offset (LITO) 2024-25
export const LITO_MAX = 700;
export const LITO_THRESHOLD_1 = 37500;
export const LITO_THRESHOLD_2 = 45000;
export const LITO_PHASE_OUT_1 = 0.05; // 5c per dollar
export const LITO_PHASE_OUT_2 = 0.015; // 1.5c per dollar

/**
 * Calculate income tax based on 2024-25 brackets
 */
export function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;

  for (let i = TAX_BRACKETS.length - 1; i >= 0; i--) {
    const bracket = TAX_BRACKETS[i];
    if (taxableIncome >= bracket.min) {
      if (i === 0) return 0;
      return bracket.baseTax + (taxableIncome - bracket.min + 1) * bracket.rate;
    }
  }

  return 0;
}

/**
 * Calculate Low Income Tax Offset
 */
export function calculateLITO(taxableIncome: number): number {
  if (taxableIncome <= LITO_THRESHOLD_1) {
    return LITO_MAX;
  }

  if (taxableIncome <= LITO_THRESHOLD_2) {
    const reduction = (taxableIncome - LITO_THRESHOLD_1) * LITO_PHASE_OUT_1;
    return Math.max(0, LITO_MAX - reduction);
  }

  // Above $45,000 - LITO fully phased out under new system
  return 0;
}

/**
 * Calculate Medicare Levy
 */
export function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= MEDICARE_LEVY_THRESHOLD) {
    // Shade-in range - simplified calculation
    return 0;
  }

  return taxableIncome * MEDICARE_LEVY_RATE;
}

/**
 * Calculate total tax payable including LITO
 */
export function calculateTotalTax(taxableIncome: number): number {
  const baseTax = calculateIncomeTax(taxableIncome);
  const lito = calculateLITO(taxableIncome);
  return Math.max(0, baseTax - lito);
}

/**
 * Calculate net income after tax and Medicare
 */
export function calculateNetIncome(grossIncome: number): number {
  const tax = calculateTotalTax(grossIncome);
  const medicare = calculateMedicareLevy(grossIncome);
  return grossIncome - tax - medicare;
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate gross annual income from hourly rate
 */
export function calculateGrossAnnual(
  hourlyRate: number,
  hoursPerWeek: number,
  weeksPerYear: number
): number {
  return hourlyRate * hoursPerWeek * weeksPerYear;
}
