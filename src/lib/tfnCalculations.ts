// TFN (Employee/PAYG) Calculation Logic

import {
  calculateTotalTax,
  calculateMedicareLevy,
  SUPER_GUARANTEE_RATE,
  calculateGrossAnnual,
} from "./taxCalculations";
import { calculateLAFHAValue, calculateFIFOWorkingWeeks } from "./fifoCalculations";
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
}

// Leave entitlements calculation
const ANNUAL_LEAVE_WEEKS = 4;
const SICK_LEAVE_DAYS = 10;
const PUBLIC_HOLIDAYS = 10;

/**
 * Calculate the value of leave entitlements
 */
export function calculateLeaveEntitlementsValue(
  hourlyRate: number,
  hoursPerWeek: number
): number {
  const annualLeaveValue = hourlyRate * hoursPerWeek * ANNUAL_LEAVE_WEEKS;
  const sickLeaveValue = hourlyRate * (hoursPerWeek / 5) * SICK_LEAVE_DAYS;
  const publicHolidaysValue = hourlyRate * (hoursPerWeek / 5) * PUBLIC_HOLIDAYS;

  return annualLeaveValue + sickLeaveValue + publicHolidaysValue;
}

export interface TFNScenarioOptions {
  fifoEnabled?: boolean;
  fifoRoster?: string;
  overtimeEnabled?: boolean;
  overtimeHours?: number;
  overtimeMultiplier?: string;
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
  } = options;

  // Calculate actual working weeks (FIFO adjusts this)
  const actualWorkingWeeks = fifoEnabled
    ? calculateFIFOWorkingWeeks(fifoRoster)
    : weeksPerYear;

  // Base gross annual based on actual weeks worked
  const baseGross = calculateGrossAnnual(hourlyRate, hoursPerWeek, actualWorkingWeeks);

  // Calculate overtime pay
  const overtimePay = overtimeEnabled
    ? calculateOvertimePay(hourlyRate, overtimeHours, overtimeMultiplier, actualWorkingWeeks)
    : 0;

  // Total gross including overtime
  const grossAnnual = baseGross + overtimePay;

  // Tax calculations
  const taxPayable = calculateTotalTax(grossAnnual);
  const medicareLevy = calculateMedicareLevy(grossAnnual);

  // Employer-paid super (on top of salary, not deducted)
  const superContribution = grossAnnual * SUPER_GUARANTEE_RATE;

  // Leave entitlements value
  const leaveEntitlementsValue = calculateLeaveEntitlementsValue(
    hourlyRate,
    hoursPerWeek
  );

  // LAFHA value (tax-free for FIFO TFN employees)
  const lafhaValue = fifoEnabled
    ? calculateLAFHAValue(fifoRoster, hoursPerWeek)
    : 0;

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
  };
}
