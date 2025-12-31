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
 * Calculate total tax (income tax + Medicare levy)
 */
export function calculateTotalTax(taxableIncome: number): {
  incomeTax: number;
  medicareLevy: number;
  totalTax: number;
} {
  const incomeTax = calculateIncomeTax(taxableIncome);
  const medicareLevy = calculateMedicareLevy(taxableIncome);

  return {
    incomeTax,
    medicareLevy,
    totalTax: incomeTax + medicareLevy,
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
