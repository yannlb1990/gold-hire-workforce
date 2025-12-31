// Overtime Calculation Logic

export interface OvertimeMultiplier {
  id: string;
  name: string;
  rate: number;
  description: string;
}

// Common overtime rate multipliers
export const OVERTIME_MULTIPLIERS: OvertimeMultiplier[] = [
  {
    id: "1.5x",
    name: "Time and a half",
    rate: 1.5,
    description: "Standard overtime rate",
  },
  {
    id: "2.0x",
    name: "Double time",
    rate: 2.0,
    description: "Weekend/Sunday rates",
  },
  {
    id: "2.5x",
    name: "Double time and a half",
    rate: 2.5,
    description: "Public holiday rates",
  },
];

// Standard work week hours
export const STANDARD_WEEK_HOURS = 38;

/**
 * Get an overtime multiplier by ID
 */
export function getOvertimeMultiplier(multiplierId: string): OvertimeMultiplier | undefined {
  return OVERTIME_MULTIPLIERS.find((m) => m.id === multiplierId);
}

/**
 * Calculate overtime pay value
 * @param hourlyRate Base hourly rate
 * @param overtimeHours Hours of overtime per week
 * @param multiplierId The overtime rate multiplier ID
 * @param weeksPerYear Number of weeks worked per year
 */
export function calculateOvertimePay(
  hourlyRate: number,
  overtimeHours: number,
  multiplierId: string,
  weeksPerYear: number
): number {
  if (overtimeHours <= 0) return 0;

  const multiplier = getOvertimeMultiplier(multiplierId);
  if (!multiplier) return 0;

  const overtimeRate = hourlyRate * multiplier.rate;
  const weeklyOvertimePay = overtimeHours * overtimeRate;

  return weeklyOvertimePay * weeksPerYear;
}

/**
 * Calculate the effective hourly rate when including overtime
 */
export function calculateEffectiveHourlyRate(
  hourlyRate: number,
  standardHours: number,
  overtimeHours: number,
  multiplierId: string
): number {
  if (overtimeHours <= 0) return hourlyRate;

  const multiplier = getOvertimeMultiplier(multiplierId);
  if (!multiplier) return hourlyRate;

  const totalHours = standardHours + overtimeHours;
  const standardPay = hourlyRate * standardHours;
  const overtimePay = hourlyRate * multiplier.rate * overtimeHours;
  const totalPay = standardPay + overtimePay;

  return totalPay / totalHours;
}

/**
 * Check if a multiplier is valid
 */
export function isValidOvertimeMultiplier(multiplierId: string): boolean {
  return OVERTIME_MULTIPLIERS.some((m) => m.id === multiplierId);
}
