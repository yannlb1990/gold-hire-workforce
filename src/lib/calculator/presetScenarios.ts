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
