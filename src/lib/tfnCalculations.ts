// TFN (Employee/PAYG) Calculation Logic

import {
  calculateTotalTax,
  calculateMedicareLevy,
  calculateLITO,
  SUPER_GUARANTEE_RATE,
  calculateGrossAnnual,
} from "./taxCalculations";
import { calculateLAFHAValue, calculateFIFOWorkingWeeks, LAFHA_ACCOMMODATION_DAILY, LAFHA_MEALS_DAILY, getFIFORoster } from "./fifoCalculations";
import { calculateOvertimePay } from "./overtimeCalculations";

export interface TFNCalculationResult {
  grossAnnual: number;
  taxPayable: number;
  medicareLevy: number;
  superContribution: number;
  leaveEntitlementsValue: number;
  netTakeHome: number;
  weeklyTakeHome: number;
  effectiveTaxRate: number;
  totalPackageValue: number;
  // FIFO fields
  lafhaValue: number;
  fifoRoster: string | null;
  actualWorkingWeeks: number;
  // Overtime fields
  overtimePay: number;
  // NEW: Detailed breakdown fields
  baseWages: number;
  publicHolidayPay: number;
  taxFreeAllowances: number;
  taxableAllowances: number;
  fifoAccommodationValue: number;
  fifoMealsValue: number;
  litoOffset: number;
  annualLeaveValue: number;
  sickLeaveValue: number;
  // Allowance breakdown
  carAllowanceAnnual: number;
  toolAllowanceAnnual: number;
  mealAllowanceAnnual: number;
}

// Leave entitlements calculation
const ANNUAL_LEAVE_WEEKS = 4;
const SICK_LEAVE_DAYS = 10;
const PUBLIC_HOLIDAYS = 10;

/**
 * Calculate the value of leave entitlements with breakdown
 */
export function calculateLeaveEntitlementsValue(
  hourlyRate: number,
  hoursPerWeek: number
): { total: number; annualLeave: number; sickLeave: number; publicHolidays: number } {
  const annualLeaveValue = hourlyRate * hoursPerWeek * ANNUAL_LEAVE_WEEKS;
  const sickLeaveValue = hourlyRate * (hoursPerWeek / 5) * SICK_LEAVE_DAYS;
  const publicHolidaysValue = hourlyRate * (hoursPerWeek / 5) * PUBLIC_HOLIDAYS;

  return {
    total: annualLeaveValue + sickLeaveValue + publicHolidaysValue,
    annualLeave: annualLeaveValue,
    sickLeave: sickLeaveValue,
    publicHolidays: publicHolidaysValue,
  };
}

export interface TFNScenarioOptions {
  fifoEnabled?: boolean;
  fifoRoster?: string;
  overtimeEnabled?: boolean;
  overtimeHours?: number;
  overtimeMultiplier?: string;
  // Allowances
  allowancesEnabled?: boolean;
  carAllowance?: number; // $/week
  toolAllowance?: number; // $/week
  mealAllowanceDays?: number; // days/week
  mealAllowanceRate?: number; // $/day
}

/**
 * Calculate full TFN/employee scenario
 */
export function calculateTFNScenario(
  hourlyRate: number,
  hoursPerWeek: number,
  weeksPerYear: number,
  options: TFNScenarioOptions = {}
): TFNCalculationResult {
  const {
    fifoEnabled = false,
    fifoRoster = "2-1",
    overtimeEnabled = false,
    overtimeHours = 0,
    overtimeMultiplier = "1.5x",
    allowancesEnabled = false,
    carAllowance = 0,
    toolAllowance = 0,
    mealAllowanceDays = 0,
    mealAllowanceRate = 25,
  } = options;

  // Calculate actual working weeks (FIFO adjusts this)
  const actualWorkingWeeks = fifoEnabled
    ? calculateFIFOWorkingWeeks(fifoRoster)
    : weeksPerYear;

  // Base gross annual based on actual weeks worked (base wages)
  const baseWages = calculateGrossAnnual(hourlyRate, hoursPerWeek, actualWorkingWeeks);

  // Calculate overtime pay
  const overtimePay = overtimeEnabled
    ? calculateOvertimePay(hourlyRate, overtimeHours, overtimeMultiplier, actualWorkingWeeks)
    : 0;

  // Total gross including overtime (allowances will be added separately as they're taxable income)
  const baseGrossAnnual = baseWages + overtimePay;

  // Leave entitlements breakdown
  const leaveBreakdown = calculateLeaveEntitlementsValue(hourlyRate, hoursPerWeek);
  const leaveEntitlementsValue = leaveBreakdown.total;
  const publicHolidayPay = leaveBreakdown.publicHolidays;
  const annualLeaveValue = leaveBreakdown.annualLeave;
  const sickLeaveValue = leaveBreakdown.sickLeave;

  // LAFHA value (tax-free for FIFO TFN employees)
  const lafhaValue = fifoEnabled
    ? calculateLAFHAValue(fifoRoster, hoursPerWeek)
    : 0;

  // Calculate FIFO non-cash benefit breakdown
  let fifoAccommodationValue = 0;
  let fifoMealsValue = 0;
  if (fifoEnabled) {
    const roster = getFIFORoster(fifoRoster);
    if (roster) {
      const workingDaysPerWeek = Math.min(hoursPerWeek / 8, 7);
      const workingDaysPerYear = roster.workingWeeksPerYear * workingDaysPerWeek;
      fifoAccommodationValue = workingDaysPerYear * LAFHA_ACCOMMODATION_DAILY;
      fifoMealsValue = workingDaysPerYear * LAFHA_MEALS_DAILY;
    }
  }

  // Calculate allowances (these are taxable income for employees)
  const carAllowanceAnnual = allowancesEnabled ? carAllowance * actualWorkingWeeks : 0;
  const toolAllowanceAnnual = allowancesEnabled ? toolAllowance * actualWorkingWeeks : 0;
  const mealAllowanceAnnual = allowancesEnabled ? mealAllowanceDays * mealAllowanceRate * actualWorkingWeeks : 0;
  const totalAllowances = carAllowanceAnnual + toolAllowanceAnnual + mealAllowanceAnnual;

  // Tax-free allowances = LAFHA (when FIFO)
  const taxFreeAllowances = lafhaValue;
  // Taxable allowances = Car, Tools, Meals (these are added to taxable income)
  const taxableAllowances = totalAllowances;

  // Gross annual including taxable allowances
  const grossAnnual = baseGrossAnnual + taxableAllowances;

  // Tax calculations (on gross income including taxable allowances, LAFHA is tax-free)
  const taxPayable = calculateTotalTax(grossAnnual);
  const medicareLevy = calculateMedicareLevy(grossAnnual);
  
  // LITO offset (already factored into taxPayable, but we calculate for display)
  const litoOffset = calculateLITO(grossAnnual);

  // Employer-paid super (on base gross, not on allowances typically)
  const superContribution = baseGrossAnnual * SUPER_GUARANTEE_RATE;

  // Net take-home after tax and Medicare, plus LAFHA (tax-free)
  const netTakeHome = grossAnnual - taxPayable - medicareLevy + lafhaValue;

  // Weekly take-home (based on 52 weeks)
  const weeklyTakeHome = netTakeHome / 52;

  // Effective tax rate (on taxable income only, LAFHA excluded)
  const effectiveTaxRate =
    grossAnnual > 0 ? ((taxPayable + medicareLevy) / grossAnnual) * 100 : 0;

  // Total package value including super, leave, and LAFHA
  const totalPackageValue = grossAnnual + superContribution + leaveEntitlementsValue + lafhaValue;

  return {
    grossAnnual,
    taxPayable,
    medicareLevy,
    superContribution,
    leaveEntitlementsValue,
    netTakeHome,
    weeklyTakeHome,
    effectiveTaxRate,
    totalPackageValue,
    lafhaValue,
    fifoRoster: fifoEnabled ? fifoRoster : null,
    actualWorkingWeeks,
    overtimePay,
    // Detailed fields
    baseWages,
    publicHolidayPay,
    taxFreeAllowances,
    taxableAllowances,
    fifoAccommodationValue,
    fifoMealsValue,
    litoOffset,
    annualLeaveValue,
    sickLeaveValue,
    // Allowance breakdown
    carAllowanceAnnual,
    toolAllowanceAnnual,
    mealAllowanceAnnual,
  };
}
