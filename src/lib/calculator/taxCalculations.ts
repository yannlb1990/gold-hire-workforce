// Australian Tax Calculations for 2024-25 Financial Year

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
  baseTax: number;
}

// Australian Tax Brackets 2024-25
export const TAX_BRACKETS_2024_25: TaxBracket[] = [
  { min: 0, max: 18200, rate: 0, baseTax: 0 },
  { min: 18201, max: 45000, rate: 0.19, baseTax: 0 },
  { min: 45001, max: 120000, rate: 0.325, baseTax: 5092 },
  { min: 120001, max: 180000, rate: 0.37, baseTax: 29467 },
  { min: 180001, max: null, rate: 0.45, baseTax: 51667 },
];

// Medicare Levy Rate (2% of taxable income for most taxpayers)
export const MEDICARE_LEVY_RATE = 0.02;

// Medicare Levy Low Income Thresholds 2024-25
export const MEDICARE_LEVY_THRESHOLD = 24276;
export const MEDICARE_LEVY_SURCHARGE_THRESHOLD = 90000; // Single, no dependents

// Superannuation Guarantee Rate 2024-25
export const SUPER_GUARANTEE_RATE = 0.115; // 11.5%

// HECS-HELP Repayment Thresholds 2024-25
export const HECS_THRESHOLDS = [
  { min: 0, max: 54435, rate: 0 },
  { min: 54436, max: 62850, rate: 0.01 },
  { min: 62851, max: 66620, rate: 0.02 },
  { min: 66621, max: 70618, rate: 0.025 },
  { min: 70619, max: 74855, rate: 0.03 },
  { min: 74856, max: 79346, rate: 0.035 },
  { min: 79347, max: 84107, rate: 0.04 },
  { min: 84108, max: 89154, rate: 0.045 },
  { min: 89155, max: 94503, rate: 0.05 },
  { min: 94504, max: 100174, rate: 0.055 },
  { min: 100175, max: 106184, rate: 0.06 },
  { min: 106185, max: 112556, rate: 0.065 },
  { min: 112557, max: 119309, rate: 0.07 },
  { min: 119310, max: 126468, rate: 0.075 },
  { min: 126469, max: 134056, rate: 0.08 },
  { min: 134057, max: 142100, rate: 0.085 },
  { min: 142101, max: null, rate: 0.10 },
];

// Low Income Tax Offset (LITO) 2024-25
export const LITO_MAX = 700;
export const LITO_THRESHOLD_LOW = 37500;
export const LITO_THRESHOLD_HIGH = 45000;
export const LITO_PHASE_OUT_RATE = 0.05;

// Medicare Levy Surcharge (MLS) rates for those without private health insurance
export const MLS_RATES = [
  { min: 0, max: 90000, rate: 0 }, // No surcharge
  { min: 90001, max: 105000, rate: 0.01 }, // 1%
  { min: 105001, max: 140000, rate: 0.0125 }, // 1.25%
  { min: 140001, max: null, rate: 0.015 }, // 1.5%
];

/**
 * Calculate HECS-HELP repayment based on repayment income
 */
export function calculateHECSRepayment(repaymentIncome: number): number {
  if (repaymentIncome <= 0) return 0;

  for (const threshold of HECS_THRESHOLDS) {
    if (threshold.max === null || repaymentIncome <= threshold.max) {
      if (repaymentIncome >= threshold.min) {
        return repaymentIncome * threshold.rate;
      }
    }
  }
  return 0;
}

/**
 * Calculate Low Income Tax Offset (LITO)
 */
export function calculateLITO(taxableIncome: number): number {
  if (taxableIncome <= LITO_THRESHOLD_LOW) {
    return LITO_MAX;
  }

  if (taxableIncome >= LITO_THRESHOLD_HIGH) {
    return 0;
  }

  // Phase out between thresholds
  const excess = taxableIncome - LITO_THRESHOLD_LOW;
  const reduction = excess * LITO_PHASE_OUT_RATE;
  return Math.max(0, LITO_MAX - reduction);
}

/**
 * Calculate Medicare Levy Surcharge
 */
export function calculateMedicareLevySurcharge(
  taxableIncome: number,
  hasPrivateHealth: boolean
): number {
  if (hasPrivateHealth || taxableIncome <= 0) return 0;

  for (let i = MLS_RATES.length - 1; i >= 0; i--) {
    const tier = MLS_RATES[i];
    if (taxableIncome >= tier.min) {
      return taxableIncome * tier.rate;
    }
  }
  return 0;
}

/**
 * Calculate income tax based on taxable income
 */
export function calculateIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;

  let tax = 0;

  for (const bracket of TAX_BRACKETS_2024_25) {
    if (taxableIncome <= (bracket.min - 1)) {
      break;
    }

    if (bracket.max === null || taxableIncome >= bracket.max) {
      // Income extends into or beyond this bracket
      const taxableInBracket = bracket.max
        ? bracket.max - bracket.min + 1
        : taxableIncome - bracket.min + 1;

      tax = bracket.baseTax + (taxableInBracket * bracket.rate);

      if (bracket.max === null) break;
    } else {
      // Income falls within this bracket
      const taxableInBracket = taxableIncome - bracket.min + 1;
      tax = bracket.baseTax + (taxableInBracket * bracket.rate);
      break;
    }
  }

  return Math.max(0, tax);
}

/**
 * Calculate Medicare Levy
 */
export function calculateMedicareLevy(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;

  // Below threshold - no levy
  if (taxableIncome <= MEDICARE_LEVY_THRESHOLD) {
    return 0;
  }

  // Phase-in range (10% of threshold above the threshold)
  const phaseInThreshold = MEDICARE_LEVY_THRESHOLD * 1.1;

  if (taxableIncome <= phaseInThreshold) {
    // Gradual phase-in: 10% of the excess over the threshold
    const excess = taxableIncome - MEDICARE_LEVY_THRESHOLD;
    return excess * 0.1;
  }

  // Above phase-in threshold - full 2% levy
  return taxableIncome * MEDICARE_LEVY_RATE;
}

/**
 * Advanced tax calculation options
 */
export interface TaxOptions {
  hasHECS?: boolean;
  hasPrivateHealth?: boolean;
  applyLITO?: boolean;
}

/**
 * Calculate total tax (income tax + Medicare levy + optional HECS and MLS)
 */
export function calculateTotalTax(
  taxableIncome: number,
  options: TaxOptions = {}
): {
  incomeTax: number;
  medicareLevy: number;
  medicareLevySurcharge: number;
  hecsRepayment: number;
  taxOffsets: number;
  totalTax: number;
} {
  let incomeTax = calculateIncomeTax(taxableIncome);
  const medicareLevy = calculateMedicareLevy(taxableIncome);
  const medicareLevySurcharge = calculateMedicareLevySurcharge(
    taxableIncome,
    options.hasPrivateHealth ?? false
  );
  const hecsRepayment = options.hasHECS ? calculateHECSRepayment(taxableIncome) : 0;
  const taxOffsets = options.applyLITO ? calculateLITO(taxableIncome) : 0;

  // Apply tax offsets to reduce income tax (but not below zero)
  incomeTax = Math.max(0, incomeTax - taxOffsets);

  const totalTax =
    incomeTax + medicareLevy + medicareLevySurcharge + hecsRepayment;

  return {
    incomeTax,
    medicareLevy,
    medicareLevySurcharge,
    hecsRepayment,
    taxOffsets,
    totalTax,
  };
}

/**
 * Find which tax bracket an income falls into
 */
export function findTaxBracket(taxableIncome: number): TaxBracket {
  for (let i = TAX_BRACKETS_2024_25.length - 1; i >= 0; i--) {
    const bracket = TAX_BRACKETS_2024_25[i];
    if (taxableIncome >= bracket.min) {
      return bracket;
    }
  }
  return TAX_BRACKETS_2024_25[0];
}

/**
 * Calculate effective tax rate (total tax as percentage of gross income)
 */
export function calculateEffectiveTaxRate(grossIncome: number, totalTax: number): number {
  if (grossIncome <= 0) return 0;
  return (totalTax / grossIncome) * 100;
}

/**
 * Calculate marginal tax rate (rate on next dollar earned)
 */
export function calculateMarginalTaxRate(taxableIncome: number): number {
  const bracket = findTaxBracket(taxableIncome);
  // Marginal rate includes Medicare levy
  return (bracket.rate + MEDICARE_LEVY_RATE) * 100;
}
