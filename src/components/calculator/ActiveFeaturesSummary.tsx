import { Plane, Clock, DollarSign, Calendar, Shield } from "lucide-react";
import { formatCurrency } from "@/lib/taxCalculations";
import { getFIFORoster } from "@/lib/fifoCalculations";
import { getOvertimeMultiplier } from "@/lib/overtimeCalculations";

interface ActiveFeaturesSummaryProps {
  fifoEnabled: boolean;
  fifoRoster: string;
  overtimeEnabled: boolean;
  overtimeHours: number;
  overtimeMultiplier: string;
  hourlyRate: number;
  weeksPerYear: number;
  actualWorkingWeeks: number;
  lafhaValue?: number;
}

export function ActiveFeaturesSummary({
  fifoEnabled,
  fifoRoster,
  overtimeEnabled,
  overtimeHours,
  overtimeMultiplier,
  hourlyRate,
  weeksPerYear,
  actualWorkingWeeks,
  lafhaValue = 0,
}: ActiveFeaturesSummaryProps) {
  // Only render if at least one feature is active
  if (!fifoEnabled && !overtimeEnabled) {
    return null;
  }

  const selectedRoster = getFIFORoster(fifoRoster);
  const selectedMultiplier = getOvertimeMultiplier(overtimeMultiplier);

  // Calculate overtime value
  const overtimeValue = overtimeEnabled && selectedMultiplier
    ? overtimeHours * hourlyRate * selectedMultiplier.rate * (fifoEnabled ? actualWorkingWeeks : weeksPerYear)
    : 0;

  return (
    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <h3 className="font-heading font-semibold text-foreground text-sm">
          Active Features Summary
        </h3>
      </div>

      <div className="space-y-4">
        {/* FIFO Summary */}
        {fifoEnabled && selectedRoster && (
          <div className="bg-background/60 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-sm text-foreground">FIFO Roster</span>
            </div>
            
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Pattern:</span>
                <span className="text-sm font-medium text-foreground">{selectedRoster.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Working:</span>
                <span className="text-sm font-medium text-foreground">~{actualWorkingWeeks} weeks/year</span>
              </div>
            </div>

            {lafhaValue > 0 && (
              <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                <Shield className="w-3.5 h-3.5 text-green-600" />
                <span className="text-sm text-muted-foreground">Tax-free LAFHA:</span>
                <span className="text-sm font-semibold text-green-600">{formatCurrency(lafhaValue)}/year</span>
              </div>
            )}
          </div>
        )}

        {/* Overtime Summary */}
        {overtimeEnabled && overtimeHours > 0 && selectedMultiplier && (
          <div className="bg-background/60 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-sm text-foreground">Overtime</span>
            </div>
            
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Hours:</span>
                <span className="text-sm font-medium text-foreground">{overtimeHours} hrs/week</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Rate:</span>
                <span className="text-sm font-medium text-foreground">{selectedMultiplier.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-border/50">
              <DollarSign className="w-3.5 h-3.5 text-green-600" />
              <span className="text-sm text-muted-foreground">Est. annual earnings:</span>
              <span className="text-sm font-semibold text-green-600">+{formatCurrency(overtimeValue)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
