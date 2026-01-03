import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FIFO_ROSTERS, getFIFORoster } from "@/lib/fifoCalculations";
import { OVERTIME_MULTIPLIERS, getOvertimeMultiplier } from "@/lib/overtimeCalculations";
import { InfoTooltip } from "./CalculatorTooltips";
import { Plane, Clock, Sparkles, Car, Wrench, UtensilsCrossed } from "lucide-react";
import { formatCurrency } from "@/lib/taxCalculations";

interface AdvancedOptionsProps {
  // FIFO settings
  fifoEnabled: boolean;
  onFifoEnabledChange: (enabled: boolean) => void;
  fifoRoster: string;
  onFifoRosterChange: (roster: string) => void;
  // Overtime settings
  overtimeEnabled: boolean;
  onOvertimeEnabledChange: (enabled: boolean) => void;
  overtimeHours: number;
  onOvertimeHoursChange: (hours: number) => void;
  overtimeMultiplier: string;
  onOvertimeMultiplierChange: (multiplier: string) => void;
  // Allowances settings
  allowancesEnabled: boolean;
  onAllowancesEnabledChange: (enabled: boolean) => void;
  carAllowance: number;
  onCarAllowanceChange: (amount: number) => void;
  toolAllowance: number;
  onToolAllowanceChange: (amount: number) => void;
  mealAllowanceDays: number;
  onMealAllowanceDaysChange: (days: number) => void;
  mealAllowanceRate: number;
  onMealAllowanceRateChange: (rate: number) => void;
  // For display calculations
  hourlyRate: number;
  weeksPerYear: number;
}

export function AdvancedOptions({
  fifoEnabled,
  onFifoEnabledChange,
  fifoRoster,
  onFifoRosterChange,
  overtimeEnabled,
  onOvertimeEnabledChange,
  overtimeHours,
  onOvertimeHoursChange,
  overtimeMultiplier,
  onOvertimeMultiplierChange,
  allowancesEnabled,
  onAllowancesEnabledChange,
  carAllowance,
  onCarAllowanceChange,
  toolAllowance,
  onToolAllowanceChange,
  mealAllowanceDays,
  onMealAllowanceDaysChange,
  mealAllowanceRate,
  onMealAllowanceRateChange,
  hourlyRate,
  weeksPerYear,
}: AdvancedOptionsProps) {
  const selectedRoster = getFIFORoster(fifoRoster);
  const selectedMultiplier = getOvertimeMultiplier(overtimeMultiplier);

  // Calculate preview values
  const overtimePreviewValue = overtimeEnabled && selectedMultiplier
    ? overtimeHours * hourlyRate * selectedMultiplier.rate * weeksPerYear
    : 0;

  // Calculate allowances preview
  const allowancesPreviewValue = allowancesEnabled
    ? (carAllowance + toolAllowance + (mealAllowanceDays * mealAllowanceRate)) * weeksPerYear
    : 0;

  return (
    <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border-2 border-amber-500/30 rounded-xl md:rounded-2xl p-4 md:p-6">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading font-bold text-sm md:text-base text-foreground">Advanced Options</h3>
          <p className="text-[10px] md:text-xs text-muted-foreground truncate">FIFO, overtime & allowances</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* FIFO Toggle Section */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-1.5 min-w-0 flex-wrap">
              <Plane className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500 shrink-0" />
              <Label className="text-xs md:text-sm font-medium">FIFO</Label>
              <InfoTooltip tooltipKey="fifo" />
            </div>
            <Switch
              className="shrink-0"
              checked={fifoEnabled}
              onCheckedChange={onFifoEnabledChange}
            />
          </div>

          {fifoEnabled && (
            <div className="pl-6 space-y-4 border-l-2 border-amber-500/20">
              {/* Roster Selector */}
              <div className="space-y-2">
                <Label className="text-sm text-muted-foreground">Roster Pattern</Label>
                <Select value={fifoRoster} onValueChange={onFifoRosterChange}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select roster" />
                  </SelectTrigger>
                  <SelectContent>
                    {FIFO_ROSTERS.map((roster) => (
                      <SelectItem key={roster.id} value={roster.id}>
                        <span className="font-medium">{roster.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedRoster && (
                  <div className="bg-amber-500/10 rounded-lg p-3 space-y-1">
                    <p className="text-xs text-muted-foreground">{selectedRoster.description}</p>
                    <p className="text-sm font-medium text-amber-600">
                      {selectedRoster.workingWeeksPerYear} working weeks/year
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-border/50 pt-6" />

        {/* Overtime Toggle Section */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-1.5 min-w-0 flex-wrap">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500 shrink-0" />
              <Label className="text-xs md:text-sm font-medium">Overtime</Label>
              <InfoTooltip tooltipKey="overtime" />
            </div>
            <Switch
              className="shrink-0"
              checked={overtimeEnabled}
              onCheckedChange={onOvertimeEnabledChange}
            />
          </div>

          {overtimeEnabled && (
            <div className="pl-6 space-y-4 border-l-2 border-amber-500/20">
              {/* Overtime Hours Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <Label className="text-sm text-muted-foreground min-w-0">Hours Per Week</Label>
                  <span className="text-lg font-semibold text-foreground shrink-0">
                    {overtimeHours} hrs
                  </span>
                </div>
                <Slider
                  value={[overtimeHours]}
                  onValueChange={(value) => onOvertimeHoursChange(value[0])}
                  min={0}
                  max={40}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 hrs</span>
                  <span>40 hrs</span>
                </div>
              </div>

              {/* Rate Multiplier Selector */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label className="text-sm text-muted-foreground">Rate Multiplier</Label>
                  <InfoTooltip tooltipKey="overtimeMultiplier" />
                </div>
                <Select value={overtimeMultiplier} onValueChange={onOvertimeMultiplierChange}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select rate" />
                  </SelectTrigger>
                  <SelectContent>
                    {OVERTIME_MULTIPLIERS.map((mult) => (
                      <SelectItem key={mult.id} value={mult.id}>
                        <span className="font-medium">{mult.name}</span>
                        <span className="text-muted-foreground ml-2">({mult.description})</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Overtime Preview */}
              {overtimeHours > 0 && selectedMultiplier && (
                <div className="bg-amber-500/10 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Estimated annual overtime</p>
                  <p className="text-lg font-bold text-amber-600">
                    +{formatCurrency(overtimePreviewValue)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ({overtimeHours} hrs × ${(hourlyRate * selectedMultiplier.rate).toFixed(2)}/hr × {weeksPerYear} wks)
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-border/50 pt-6" />

        {/* Allowances Toggle Section */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-1.5 min-w-0 flex-wrap">
              <Car className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500 shrink-0" />
              <Label className="text-xs md:text-sm font-medium">Allowances</Label>
              <InfoTooltip tooltipKey="allowances" />
            </div>
            <Switch
              className="shrink-0"
              checked={allowancesEnabled}
              onCheckedChange={onAllowancesEnabledChange}
            />
          </div>

          {allowancesEnabled && (
            <div className="pl-6 space-y-4 border-l-2 border-amber-500/20">
              {/* Car Allowance */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Car className="w-3.5 h-3.5 text-muted-foreground" />
                    <Label className="text-sm text-muted-foreground">Car Allowance</Label>
                  </div>
                  <span className="text-sm font-semibold text-foreground shrink-0">
                    ${carAllowance}/wk
                  </span>
                </div>
                <Slider
                  value={[carAllowance]}
                  onValueChange={(value) => onCarAllowanceChange(value[0])}
                  min={0}
                  max={200}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$200/wk</span>
                </div>
              </div>

              {/* Tool Allowance */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Wrench className="w-3.5 h-3.5 text-muted-foreground" />
                    <Label className="text-sm text-muted-foreground">Tool Allowance</Label>
                  </div>
                  <span className="text-sm font-semibold text-foreground shrink-0">
                    ${toolAllowance}/wk
                  </span>
                </div>
                <Slider
                  value={[toolAllowance]}
                  onValueChange={(value) => onToolAllowanceChange(value[0])}
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$0</span>
                  <span>$100/wk</span>
                </div>
              </div>

              {/* Meal Allowance */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-muted-foreground" />
                    <Label className="text-sm text-muted-foreground">Meal Allowance</Label>
                  </div>
                  <span className="text-sm font-semibold text-foreground shrink-0">
                    {mealAllowanceDays} days × ${mealAllowanceRate}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Days/week</Label>
                    <Slider
                      value={[mealAllowanceDays]}
                      onValueChange={(value) => onMealAllowanceDaysChange(value[0])}
                      min={0}
                      max={7}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">$/day</Label>
                    <Slider
                      value={[mealAllowanceRate]}
                      onValueChange={(value) => onMealAllowanceRateChange(value[0])}
                      min={15}
                      max={50}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Allowances Preview */}
              {allowancesPreviewValue > 0 && (
                <div className="bg-amber-500/10 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Estimated annual allowances (taxable)</p>
                  <p className="text-lg font-bold text-amber-600">
                    +{formatCurrency(allowancesPreviewValue)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    (${(carAllowance + toolAllowance + (mealAllowanceDays * mealAllowanceRate)).toFixed(0)}/wk × {weeksPerYear} wks)
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
