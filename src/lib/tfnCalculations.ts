// TFN (Employee/PAYG) Calculation Logic

import {
  calculateTotalTax,
  calculateMedicareLevy,
  SUPER_GUARANTEE_RATE,
  calculateGrossAnnual,
} from "./taxCalculations";

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

/**
 * Calculate full TFN/employee scenario
 */
export function calculateTFNScenario(
  hourlyRate: number,
  hoursPerWeek: number,
  weeksPerYear: number
): TFNCalculationResult {
  // Gross annual based on actual weeks worked
  const grossAnnual = calculateGrossAnnual(hourlyRate, hoursPerWeek, weeksPerYear);

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

  // Net take-home after tax and Medicare
  const netTakeHome = grossAnnual - taxPayable - medicareLevy;

  // Weekly take-home (based on 52 weeks)
  const weeklyTakeHome = netTakeHome / 52;

  // Effective tax rate
  const effectiveTaxRate =
    grossAnnual > 0 ? ((taxPayable + medicareLevy) / grossAnnual) * 100 : 0;

  // Total package value including super and leave
  const totalPackageValue = grossAnnual + superContribution + leaveEntitlementsValue;

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
  };
}
