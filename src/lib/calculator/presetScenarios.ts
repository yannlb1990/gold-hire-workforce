// Preset Scenarios for Quick Comparison

export interface PresetScenario {
  id: string;
  name: string;
  description: string;
  // TFN inputs
  tfnHourlyRate: number;
  // ABN inputs
  abnHourlyRate: number;
  hoursPerWeek: number;
  weeksPerYear: number;
  estimatedBusinessExpenses: number;
  recommendedSuperContribution: number;

  // Advanced features
  isFIFO?: boolean;
  fifoRosterPattern?: "2-1" | "3-1" | "4-2" | "8-6";
  hasOvertime?: boolean;
  overtimeHoursPerWeek?: number;
  overtimeRate?: number;
  hasAllowances?: boolean;
}

export const PRESET_SCENARIOS: PresetScenario[] = [
  {
    id: "labourer-standard",
    name: "Skilled Labourer",
    description: "General construction labourer with White Card",
    tfnHourlyRate: 32,
    abnHourlyRate: 42,
    hoursPerWeek: 38,
    weeksPerYear: 48,
    estimatedBusinessExpenses: 8500,
    recommendedSuperContribution: 10,
  },
  {
    id: "carpenter-experienced",
    name: "Experienced Carpenter",
    description: "Qualified carpenter with 5+ years experience",
    tfnHourlyRate: 42,
    abnHourlyRate: 58,
    hoursPerWeek: 38,
    weeksPerYear: 48,
    estimatedBusinessExpenses: 12000,
    recommendedSuperContribution: 12,
  },
  {
    id: "demolition-crew",
    name: "Demolition Worker",
    description: "Demolition crew member with tickets",
    tfnHourlyRate: 38,
    abnHourlyRate: 50,
    hoursPerWeek: 40,
    weeksPerYear: 46,
    estimatedBusinessExpenses: 10000,
    recommendedSuperContribution: 10,
  },
  {
    id: "building-cleaner",
    name: "Building Cleaner",
    description: "Commercial building and site cleaner",
    tfnHourlyRate: 28,
    abnHourlyRate: 38,
    hoursPerWeek: 38,
    weeksPerYear: 50,
    estimatedBusinessExpenses: 6000,
    recommendedSuperContribution: 8,
  },
  {
    id: "high-earner",
    name: "Specialized Tradie (High Earner)",
    description: "Highly skilled specialist contractor",
    tfnHourlyRate: 55,
    abnHourlyRate: 75,
    hoursPerWeek: 40,
    weeksPerYear: 48,
    estimatedBusinessExpenses: 18000,
    recommendedSuperContribution: 15,
  },
  {
    id: "part-time",
    name: "Part-Time Contractor",
    description: "Part-time or casual arrangement",
    tfnHourlyRate: 35,
    abnHourlyRate: 48,
    hoursPerWeek: 25,
    weeksPerYear: 45,
    estimatedBusinessExpenses: 5000,
    recommendedSuperContribution: 8,
  },
  {
    id: "fifo-labourer",
    name: "FIFO Labourer (2-1 Roster)",
    description: "Fly-in fly-out worker, 2 weeks on / 1 week off",
    tfnHourlyRate: 42,
    abnHourlyRate: 58,
    hoursPerWeek: 60, // Long days on site (12hr days)
    weeksPerYear: 52,
    estimatedBusinessExpenses: 12000,
    recommendedSuperContribution: 12,
    isFIFO: true,
    fifoRosterPattern: "2-1",
    hasOvertime: true,
    overtimeHoursPerWeek: 22,
    overtimeRate: 1.5,
    hasAllowances: true,
  },
  {
    id: "fifo-carpenter-4-2",
    name: "FIFO Carpenter (4-2 Roster)",
    description: "Remote site carpenter, 4 weeks on / 2 weeks off",
    tfnHourlyRate: 48,
    abnHourlyRate: 68,
    hoursPerWeek: 70, // Long roster includes extra hours
    weeksPerYear: 52,
    estimatedBusinessExpenses: 15000,
    recommendedSuperContribution: 15,
    isFIFO: true,
    fifoRosterPattern: "4-2",
    hasOvertime: true,
    overtimeHoursPerWeek: 32,
    overtimeRate: 1.5,
    hasAllowances: true,
  },
  {
    id: "fifo-demolition-8-6",
    name: "FIFO Demolition (8-6 Mining)",
    description: "Remote mining demolition, 8 weeks on / 6 weeks off",
    tfnHourlyRate: 55,
    abnHourlyRate: 78,
    hoursPerWeek: 72,
    weeksPerYear: 52,
    estimatedBusinessExpenses: 18000,
    recommendedSuperContribution: 15,
    isFIFO: true,
    fifoRosterPattern: "8-6",
    hasOvertime: true,
    overtimeHoursPerWeek: 34,
    overtimeRate: 2.0,
    hasAllowances: true,
  },
  {
    id: "overtime-builder",
    name: "Builder with Regular Overtime",
    description: "Standard builder with consistent overtime hours",
    tfnHourlyRate: 38,
    abnHourlyRate: 52,
    hoursPerWeek: 38,
    weeksPerYear: 48,
    estimatedBusinessExpenses: 10000,
    recommendedSuperContribution: 10,
    hasOvertime: true,
    overtimeHoursPerWeek: 10,
    overtimeRate: 1.5,
    hasAllowances: true,
  },
];

/**
 * Get preset scenario by ID
 */
export function getPresetScenario(id: string): PresetScenario | undefined {
  return PRESET_SCENARIOS.find((scenario) => scenario.id === id);
}

/**
 * Calculate the percentage difference between ABN and TFN rates
 */
export function calculateRateIncrease(tfnRate: number, abnRate: number): number {
  return ((abnRate - tfnRate) / tfnRate) * 100;
}
