// Allowances and Overtime Calculations for Australian Tradies

/**
 * Overtime multipliers
 */
export const OVERTIME_RATES = {
  TIME_AND_HALF: 1.5,
  DOUBLE_TIME: 2.0,
  DOUBLE_TIME_AND_HALF: 2.5,
} as const;

/**
 * ATO reasonable allowance amounts (2024-25) - tax-free up to these amounts
 */
export const ATO_ALLOWANCE_LIMITS = {
  // Living Away From Home Allowance (LAFHA) - per week
  LAFHA_ACCOMMODATION: 350, // Per week for accommodation
  LAFHA_FOOD: 315, // Per week for food

  // Meal allowances - per meal
  BREAKFAST: 28.75,
  LUNCH: 33.25,
  DINNER: 59.00,

  // Travel allowance (varies by location, these are capital city rates)
  TRAVEL_DAILY: 315,

  // Tool allowance - typically $8-15 per week
  TOOL_ALLOWANCE_WEEKLY: 12,

  // Vehicle/Car allowance (cents per km for work-related travel)
  CAR_ALLOWANCE_PER_KM: 0.85, // 2024-25 rate
} as const;

/**
 * Overtime configuration
 */
export interface OvertimeConfig {
  regularHoursPerWeek: number;
  overtimeHoursPerWeek: number;
  overtimeRate: number; // 1.5, 2.0, or 2.5
  publicHolidayHoursPerYear?: number;
  publicHolidayRate?: number; // Usually 2.5
}

/**
 * Allowances configuration
 */
export interface AllowancesConfig {
  // Car/Vehicle
  carAllowancePerWeek?: number;
  carAllowanceIsTaxFree?: boolean;

  // Tool allowance
  toolAllowancePerWeek?: number;

  // Meal allowances (days per week)
  mealAllowanceDaysPerWeek?: number;
  includesBreakfast?: boolean;
  includesLunch?: boolean;
  includesDinner?: boolean;

  // Travel allowance
  travelAllowancePerWeek?: number;

  // First aid / Leading hand
  leadingHandAllowancePerWeek?: number;
  firstAidAllowancePerWeek?: number;
}

/**
 * FIFO (Fly-In Fly-Out) configuration
 */
export interface FIFOConfig {
  enabled: boolean;
  rosterPattern: "2-1" | "3-1" | "4-2" | "8-6" | "custom"; // e.g., 2 weeks on, 1 week off
  weeksOn?: number;
  weeksOff?: number;

  // LAFHA (Living Away From Home Allowance)
  accommodationProvided: boolean; // Employer provides accommodation
  mealsProvided: boolean; // Employer provides meals
  lafhaPerWeek?: number; // If custom LAFHA amount

  // Travel time
  paidTravelHours?: number; // Hours paid for travel to/from site
}

/**
 * Calculate overtime earnings
 */
export function calculateOvertimeEarnings(
  baseHourlyRate: number,
  config: OvertimeConfig,
  weeksPerYear: number
): {
  regularEarnings: number;
  overtimeEarnings: number;
  publicHolidayEarnings: number;
  totalEarnings: number;
  effectiveHourlyRate: number;
} {
  const regularEarnings = baseHourlyRate * config.regularHoursPerWeek * weeksPerYear;
  const overtimeEarnings =
    baseHourlyRate * config.overtimeRate * config.overtimeHoursPerWeek * weeksPerYear;

  const publicHolidayEarnings = config.publicHolidayHoursPerYear
    ? baseHourlyRate * (config.publicHolidayRate || 2.5) * config.publicHolidayHoursPerYear
    : 0;

  const totalEarnings = regularEarnings + overtimeEarnings + publicHolidayEarnings;

  const totalHours =
    config.regularHoursPerWeek * weeksPerYear +
    config.overtimeHoursPerWeek * weeksPerYear +
    (config.publicHolidayHoursPerYear || 0);

  const effectiveHourlyRate = totalHours > 0 ? totalEarnings / totalHours : baseHourlyRate;

  return {
    regularEarnings,
    overtimeEarnings,
    publicHolidayEarnings,
    totalEarnings,
    effectiveHourlyRate,
  };
}

/**
 * Calculate annual allowances
 */
export function calculateAllowances(
  config: AllowancesConfig,
  weeksPerYear: number
): {
  carAllowance: number;
  toolAllowance: number;
  mealAllowance: number;
  travelAllowance: number;
  otherAllowances: number;
  totalAllowances: number;
  taxFreeAllowances: number;
  taxableAllowances: number;
} {
  const carAllowance = (config.carAllowancePerWeek || 0) * weeksPerYear;
  const toolAllowance = (config.toolAllowancePerWeek || 0) * weeksPerYear;
  const travelAllowance = (config.travelAllowancePerWeek || 0) * weeksPerYear;

  // Calculate meal allowances
  const daysPerYear = (config.mealAllowanceDaysPerWeek || 0) * weeksPerYear;
  let mealAllowance = 0;
  if (config.includesBreakfast) mealAllowance += ATO_ALLOWANCE_LIMITS.BREAKFAST * daysPerYear;
  if (config.includesLunch) mealAllowance += ATO_ALLOWANCE_LIMITS.LUNCH * daysPerYear;
  if (config.includesDinner) mealAllowance += ATO_ALLOWANCE_LIMITS.DINNER * daysPerYear;

  const otherAllowances =
    (config.leadingHandAllowancePerWeek || 0) * weeksPerYear +
    (config.firstAidAllowancePerWeek || 0) * weeksPerYear;

  const totalAllowances =
    carAllowance + toolAllowance + mealAllowance + travelAllowance + otherAllowances;

  // Determine tax-free portion (within ATO reasonable limits)
  const taxFreeMeals = mealAllowance; // Meal allowances are tax-free up to reasonable amounts
  const taxFreeTools = Math.min(toolAllowance, ATO_ALLOWANCE_LIMITS.TOOL_ALLOWANCE_WEEKLY * weeksPerYear);
  const taxFreeCar = config.carAllowanceIsTaxFree ? carAllowance : 0;

  const taxFreeAllowances = taxFreeMeals + taxFreeTools + taxFreeCar;
  const taxableAllowances = totalAllowances - taxFreeAllowances;

  return {
    carAllowance,
    toolAllowance,
    mealAllowance,
    travelAllowance,
    otherAllowances,
    totalAllowances,
    taxFreeAllowances,
    taxableAllowances,
  };
}

/**
 * Calculate FIFO benefits and adjust working weeks
 */
export function calculateFIFOBenefits(
  config: FIFOConfig,
  baseHourlyRate: number,
  regularHoursPerWeek: number,
  nominalWeeksPerYear: number
): {
  actualWorkingWeeks: number;
  lafhaAccommodation: number;
  lafhaFood: number;
  totalLAFHA: number;
  paidTravelEarnings: number;
  totalFIFOBenefits: number;
  accommodationValue: number; // Non-cash benefit
  mealsValue: number; // Non-cash benefit
} {
  if (!config.enabled) {
    return {
      actualWorkingWeeks: nominalWeeksPerYear,
      lafhaAccommodation: 0,
      lafhaFood: 0,
      totalLAFHA: 0,
      paidTravelEarnings: 0,
      totalFIFOBenefits: 0,
      accommodationValue: 0,
      mealsValue: 0,
    };
  }

  // Calculate actual working weeks based on roster
  let weeksOn = config.weeksOn || 2;
  let weeksOff = config.weeksOff || 1;

  switch (config.rosterPattern) {
    case "2-1":
      weeksOn = 2;
      weeksOff = 1;
      break;
    case "3-1":
      weeksOn = 3;
      weeksOff = 1;
      break;
    case "4-2":
      weeksOn = 4;
      weeksOff = 2;
      break;
    case "8-6":
      weeksOn = 8;
      weeksOff = 6;
      break;
  }

  const cycleWeeks = weeksOn + weeksOff;
  const cyclesPerYear = Math.floor(52 / cycleWeeks);
  const actualWorkingWeeks = cyclesPerYear * weeksOn;

  // LAFHA (Living Away From Home Allowance) - tax-free
  const lafhaPerWeek = config.lafhaPerWeek || 0;
  const lafhaAccommodation = config.accommodationProvided
    ? 0
    : lafhaPerWeek || ATO_ALLOWANCE_LIMITS.LAFHA_ACCOMMODATION;
  const lafhaFood = config.mealsProvided ? 0 : lafhaPerWeek || ATO_ALLOWANCE_LIMITS.LAFHA_FOOD;

  const totalLAFHA = (lafhaAccommodation + lafhaFood) * actualWorkingWeeks;

  // Paid travel time
  const paidTravelEarnings = config.paidTravelHours
    ? baseHourlyRate * config.paidTravelHours * cyclesPerYear
    : 0;

  // Non-cash benefits (if employer provides accommodation/meals)
  const accommodationValue = config.accommodationProvided
    ? ATO_ALLOWANCE_LIMITS.LAFHA_ACCOMMODATION * actualWorkingWeeks
    : 0;

  const mealsValue = config.mealsProvided
    ? ATO_ALLOWANCE_LIMITS.LAFHA_FOOD * actualWorkingWeeks
    : 0;

  const totalFIFOBenefits = totalLAFHA + paidTravelEarnings;

  return {
    actualWorkingWeeks,
    lafhaAccommodation,
    lafhaFood,
    totalLAFHA,
    paidTravelEarnings,
    totalFIFOBenefits,
    accommodationValue,
    mealsValue,
  };
}

/**
 * Get description of roster pattern
 */
export function getRosterDescription(pattern: FIFOConfig["rosterPattern"]): string {
  switch (pattern) {
    case "2-1":
      return "2 weeks on, 1 week off";
    case "3-1":
      return "3 weeks on, 1 week off";
    case "4-2":
      return "4 weeks on, 2 weeks off";
    case "8-6":
      return "8 weeks on, 6 weeks off";
    case "custom":
      return "Custom roster";
    default:
      return "";
  }
}
