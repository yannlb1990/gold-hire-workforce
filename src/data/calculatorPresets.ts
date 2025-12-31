// Preset scenarios for tradie roles

export interface TradePreset {
  id: string;
  name: string;
  hourlyRateMin: number;
  hourlyRateMax: number;
  defaultHourlyRate: number;
  typicalHours: number;
  typicalExpenseRate: number;
  description: string;
}

export const TRADE_PRESETS: TradePreset[] = [
  {
    id: "general-labourer",
    name: "General Labourer",
    hourlyRateMin: 28,
    hourlyRateMax: 42,
    defaultHourlyRate: 35,
    typicalHours: 40,
    typicalExpenseRate: 0.10,
    description: "Site labour, cleanup, material handling",
  },
  {
    id: "carpenter",
    name: "Carpenter",
    hourlyRateMin: 40,
    hourlyRateMax: 70,
    defaultHourlyRate: 55,
    typicalHours: 42,
    typicalExpenseRate: 0.20,
    description: "Residential & commercial carpentry",
  },
  {
    id: "demolition",
    name: "Demolition Worker",
    hourlyRateMin: 32,
    hourlyRateMax: 55,
    defaultHourlyRate: 42,
    typicalHours: 45,
    typicalExpenseRate: 0.12,
    description: "Strip-outs, structural demo, asbestos removal",
  },
  {
    id: "building-cleaner",
    name: "Building Cleaner",
    hourlyRateMin: 25,
    hourlyRateMax: 40,
    defaultHourlyRate: 32,
    typicalHours: 38,
    typicalExpenseRate: 0.08,
    description: "Construction cleaning, final cleans",
  },
  {
    id: "electrician",
    name: "Electrician",
    hourlyRateMin: 45,
    hourlyRateMax: 85,
    defaultHourlyRate: 65,
    typicalHours: 40,
    typicalExpenseRate: 0.18,
    description: "Licensed electrical work",
  },
  {
    id: "plumber",
    name: "Plumber",
    hourlyRateMin: 45,
    hourlyRateMax: 90,
    defaultHourlyRate: 68,
    typicalHours: 40,
    typicalExpenseRate: 0.22,
    description: "Licensed plumbing & gas fitting",
  },
  {
    id: "concrete-finisher",
    name: "Concrete Finisher",
    hourlyRateMin: 38,
    hourlyRateMax: 60,
    defaultHourlyRate: 48,
    typicalHours: 42,
    typicalExpenseRate: 0.15,
    description: "Concrete laying, finishing, formwork",
  },
  {
    id: "scaffolder",
    name: "Scaffolder",
    hourlyRateMin: 35,
    hourlyRateMax: 55,
    defaultHourlyRate: 45,
    typicalHours: 44,
    typicalExpenseRate: 0.12,
    description: "Scaffold erection & dismantling",
  },
];

export interface SavedScenario {
  id: string;
  name: string;
  trade: string;
  hourlyRate: number;
  hoursPerWeek: number;
  weeksPerYear: number;
  expenseRate: number;
  includeSuper: boolean;
  timestamp: number;
}

export function generateScenarioId(): string {
  return `scenario-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function getTradePreset(tradeId: string): TradePreset | undefined {
  return TRADE_PRESETS.find((preset) => preset.id === tradeId);
}
