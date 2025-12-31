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
  // FIFO settings
  fifoEnabled?: boolean;
  fifoRoster?: string;
  // Overtime settings
  overtimeEnabled?: boolean;
  overtimeHours?: number;
  overtimeMultiplier?: string;
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
  // FIFO Presets
  {
    id: "fifo-labourer-2-1",
    name: "FIFO Labourer (2-1)",
    hourlyRateMin: 35,
    hourlyRateMax: 55,
    defaultHourlyRate: 45,
    typicalHours: 50,
    typicalExpenseRate: 0.12,
    description: "2 weeks on / 1 week off FIFO roster",
    fifoEnabled: true,
    fifoRoster: "2-1",
    overtimeEnabled: true,
    overtimeHours: 10,
    overtimeMultiplier: "1.5x",
  },
  {
    id: "fifo-carpenter-4-2",
    name: "FIFO Carpenter (4-2)",
    hourlyRateMin: 50,
    hourlyRateMax: 80,
    defaultHourlyRate: 65,
    typicalHours: 50,
    typicalExpenseRate: 0.18,
    description: "4 weeks on / 2 weeks off WA mining",
    fifoEnabled: true,
    fifoRoster: "4-2",
    overtimeEnabled: true,
    overtimeHours: 12,
    overtimeMultiplier: "1.5x",
  },
  {
    id: "fifo-electrician-3-1",
    name: "FIFO Electrician (3-1)",
    hourlyRateMin: 55,
    hourlyRateMax: 100,
    defaultHourlyRate: 78,
    typicalHours: 50,
    typicalExpenseRate: 0.15,
    description: "3 weeks on / 1 week off QLD mining",
    fifoEnabled: true,
    fifoRoster: "3-1",
    overtimeEnabled: true,
    overtimeHours: 10,
    overtimeMultiplier: "1.5x",
  },
  {
    id: "remote-mine-worker",
    name: "Remote Mine Worker (8-6)",
    hourlyRateMin: 45,
    hourlyRateMax: 75,
    defaultHourlyRate: 58,
    typicalHours: 56,
    typicalExpenseRate: 0.10,
    description: "8 weeks on / 6 weeks off remote project",
    fifoEnabled: true,
    fifoRoster: "8-6",
    overtimeEnabled: true,
    overtimeHours: 16,
    overtimeMultiplier: "1.5x",
  },
  // Overtime Presets
  {
    id: "builder-overtime",
    name: "Builder with Overtime",
    hourlyRateMin: 45,
    hourlyRateMax: 75,
    defaultHourlyRate: 58,
    typicalHours: 40,
    typicalExpenseRate: 0.18,
    description: "Standard builder with regular overtime",
    overtimeEnabled: true,
    overtimeHours: 10,
    overtimeMultiplier: "1.5x",
  },
  {
    id: "weekend-tradie",
    name: "Weekend Tradie",
    hourlyRateMin: 40,
    hourlyRateMax: 65,
    defaultHourlyRate: 52,
    typicalHours: 38,
    typicalExpenseRate: 0.15,
    description: "Trades with regular weekend work at double time",
    overtimeEnabled: true,
    overtimeHours: 16,
    overtimeMultiplier: "2.0x",
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
  // FIFO settings
  fifoEnabled?: boolean;
  fifoRoster?: string;
  // Overtime settings
  overtimeEnabled?: boolean;
  overtimeHours?: number;
  overtimeMultiplier?: string;
}

export function generateScenarioId(): string {
  return `scenario-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function getTradePreset(tradeId: string): TradePreset | undefined {
  return TRADE_PRESETS.find((preset) => preset.id === tradeId);
}
