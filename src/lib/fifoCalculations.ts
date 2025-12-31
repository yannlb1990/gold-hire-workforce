// FIFO (Fly-In Fly-Out) Calculation Logic

export interface FIFORoster {
  id: string;
  name: string;
  weeksOn: number;
  weeksOff: number;
  workingWeeksPerYear: number;
  description: string;
}

// Common FIFO roster patterns
export const FIFO_ROSTERS: FIFORoster[] = [
  {
    id: "2-1",
    name: "2 weeks on / 1 week off",
    weeksOn: 2,
    weeksOff: 1,
    workingWeeksPerYear: Math.round((2 / 3) * 52), // ~35 weeks
    description: "Common for local FIFO work",
  },
  {
    id: "3-1",
    name: "3 weeks on / 1 week off",
    weeksOn: 3,
    weeksOff: 1,
    workingWeeksPerYear: Math.round((3 / 4) * 52), // ~39 weeks
    description: "Standard QLD mining roster",
  },
  {
    id: "4-2",
    name: "4 weeks on / 2 weeks off",
    weeksOn: 4,
    weeksOff: 2,
    workingWeeksPerYear: Math.round((4 / 6) * 52), // ~35 weeks
    description: "Popular WA mining roster",
  },
  {
    id: "8-6",
    name: "8 weeks on / 6 weeks off",
    weeksOn: 8,
    weeksOff: 6,
    workingWeeksPerYear: Math.round((8 / 14) * 52), // ~30 weeks
    description: "Remote/international projects",
  },
];

// LAFHA (Living Away From Home Allowance) rates
// These are tax-free for TFN employees when conditions are met
export const LAFHA_ACCOMMODATION_DAILY = 280; // $280/day accommodation
export const LAFHA_MEALS_DAILY = 120; // $120/day meals
export const LAFHA_TOTAL_DAILY = LAFHA_ACCOMMODATION_DAILY + LAFHA_MEALS_DAILY; // $400/day total

// ABN FIFO deduction rates (as percentage of working income)
export const ABN_FIFO_TRAVEL_EXPENSE_RATE = 0.08; // 8% for travel costs
export const ABN_FIFO_ACCOMMODATION_RATE = 0.12; // 12% for accommodation when working

/**
 * Get a FIFO roster by ID
 */
export function getFIFORoster(rosterId: string): FIFORoster | undefined {
  return FIFO_ROSTERS.find((roster) => roster.id === rosterId);
}

/**
 * Calculate actual working weeks for a FIFO roster
 */
export function calculateFIFOWorkingWeeks(rosterId: string): number {
  const roster = getFIFORoster(rosterId);
  return roster?.workingWeeksPerYear ?? 48; // Default to standard 48 if not found
}

/**
 * Calculate LAFHA value for TFN employees
 * LAFHA is tax-free when employee maintains a home elsewhere
 */
export function calculateLAFHAValue(
  rosterId: string,
  hoursPerWeek: number
): number {
  const roster = getFIFORoster(rosterId);
  if (!roster) return 0;

  // Calculate working days per year (assuming 5-day work weeks on site)
  const workingDaysPerWeek = Math.min(hoursPerWeek / 8, 7); // Cap at 7 days
  const workingDaysPerYear = roster.workingWeeksPerYear * workingDaysPerWeek;

  // LAFHA value (tax-free for TFN employees)
  return workingDaysPerYear * LAFHA_TOTAL_DAILY;
}

/**
 * Calculate FIFO-specific business deductions for ABN contractors
 */
export function calculateFIFODeductions(
  grossAnnual: number,
  rosterId: string
): number {
  const roster = getFIFORoster(rosterId);
  if (!roster) return 0;

  // Travel and accommodation deductions
  const travelDeductions = grossAnnual * ABN_FIFO_TRAVEL_EXPENSE_RATE;
  const accommodationDeductions = grossAnnual * ABN_FIFO_ACCOMMODATION_RATE;

  return travelDeductions + accommodationDeductions;
}

/**
 * Check if a roster is valid
 */
export function isValidFIFORoster(rosterId: string): boolean {
  return FIFO_ROSTERS.some((roster) => roster.id === rosterId);
}
