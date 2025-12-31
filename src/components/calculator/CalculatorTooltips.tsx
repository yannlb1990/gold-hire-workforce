import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipItem {
  id: string;
  title: string;
  content: string;
}

export const CALCULATOR_TOOLTIPS: Record<string, TooltipItem> = {
  abn: {
    id: "abn",
    title: "What is an ABN?",
    content:
      "An Australian Business Number (ABN) identifies you as a business/contractor. You invoice for work, handle your own tax, super, and insurance. You have more flexibility but also more responsibilities.",
  },
  tfn: {
    id: "tfn",
    title: "What is a TFN?",
    content:
      "A Tax File Number (TFN) is used when employed by a company. Your employer handles tax (PAYG), super, and you receive leave entitlements. Less admin but also less flexibility.",
  },
  gst: {
    id: "gst",
    title: "GST Obligations",
    content:
      "If your ABN income exceeds $75,000/year, you must register for GST. You'll charge 10% GST on invoices and remit it to the ATO quarterly via BAS lodgment.",
  },
  super: {
    id: "super",
    title: "Superannuation",
    content:
      "As an employee, your employer pays 11.5% super on top of your salary. As a contractor, you should self-fund super contributions (which are tax-deductible).",
  },
  leaveEntitlements: {
    id: "leaveEntitlements",
    title: "Leave Entitlements",
    content:
      "Employees receive paid leave: 4 weeks annual leave, 10 days sick leave, and 10 public holidays. Contractors don't receive paid leave but can build this into their rate.",
  },
  businessExpenses: {
    id: "businessExpenses",
    title: "Business Expenses",
    content:
      "As a contractor, you can claim tax deductions for work-related expenses: tools, vehicle costs, phone, insurance, PPE, and home office. These reduce your taxable income.",
  },
  insurance: {
    id: "insurance",
    title: "Insurance Requirements",
    content:
      "Contractors typically need Public Liability Insurance ($10-20M cover) and should consider Income Protection Insurance. These are tax-deductible business expenses.",
  },
  shamContracting: {
    id: "shamContracting",
    title: "Sham Contracting Warning",
    content:
      "If you work regular hours, use employer's tools, and have no control over how work is done, you may be an employee despite having an ABN. This is illegal 'sham contracting' and you may be entitled to employee benefits.",
  },
  effectiveTaxRate: {
    id: "effectiveTaxRate",
    title: "Effective Tax Rate",
    content:
      "Your effective tax rate is the total tax you pay as a percentage of your gross income. It's typically lower than your marginal tax rate due to the progressive tax system.",
  },
  medicareLevy: {
    id: "medicareLevy",
    title: "Medicare Levy",
    content:
      "A 2% levy on taxable income to help fund Australia's public health system. Low-income earners may receive a reduction or exemption.",
  },
  // FIFO tooltips
  fifo: {
    id: "fifo",
    title: "FIFO (Fly-In Fly-Out)",
    content:
      "FIFO arrangements involve flying to remote work sites for set periods (e.g., 2 weeks on, 1 week off). TFN employees often receive tax-free LAFHA (Living Away From Home Allowance), while ABN contractors can claim travel and accommodation as deductions.",
  },
  lafha: {
    id: "lafha",
    title: "LAFHA (Living Away From Home Allowance)",
    content:
      "A tax-free allowance for TFN employees who temporarily live away from home for work. Covers accommodation (~$280/day) and meals (~$120/day). Must maintain a home elsewhere to qualify.",
  },
  rosterPattern: {
    id: "rosterPattern",
    title: "Roster Pattern",
    content:
      "The work schedule for FIFO roles showing weeks on-site vs off-site. Common patterns: 2-1 (2 weeks on, 1 off), 3-1, 4-2, and 8-6. Longer on-site periods typically mean higher pay but more time away from home.",
  },
  // Overtime tooltips
  overtime: {
    id: "overtime",
    title: "Overtime",
    content:
      "Additional hours worked beyond the standard 38-hour week. Overtime is typically paid at higher rates: time-and-a-half (1.5x), double-time (2x), or double-time-and-a-half (2.5x) for public holidays.",
  },
  overtimeMultiplier: {
    id: "overtimeMultiplier",
    title: "Overtime Rate Multiplier",
    content:
      "The pay rate for overtime hours. Time-and-a-half (1.5x) is standard for weekday overtime, double-time (2x) for Sundays, and double-time-and-a-half (2.5x) for public holidays.",
  },
  fifoDeductions: {
    id: "fifoDeductions",
    title: "FIFO Deductions (ABN)",
    content:
      "As an ABN contractor on FIFO work, you can claim travel costs, flights, accommodation, and meal expenses as tax-deductible business expenses. Keep detailed records and receipts.",
  },
};

interface InfoTooltipProps {
  tooltipKey: keyof typeof CALCULATOR_TOOLTIPS;
  className?: string;
}

export function InfoTooltip({ tooltipKey, className = "" }: InfoTooltipProps) {
  const tooltip = CALCULATOR_TOOLTIPS[tooltipKey];

  if (!tooltip) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={`inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted hover:bg-muted/80 transition-colors ${className}`}
          aria-label={`Info about ${tooltip.title}`}
        >
          <Info className="w-3 h-3 text-muted-foreground" />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs p-3 bg-popover text-popover-foreground"
      >
        <p className="font-semibold text-sm mb-1">{tooltip.title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {tooltip.content}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}

export function EducationalSection() {
  return (
    <div className="bg-muted/50 rounded-xl p-6 space-y-4">
      <h3 className="font-heading font-bold text-lg text-foreground">
        Understanding ABN vs TFN
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            ABN (Contractor)
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• You invoice clients for work</li>
            <li>• Higher gross rate (no leave loading)</li>
            <li>• Handle your own tax, BAS, super</li>
            <li>• Need insurance coverage</li>
            <li>• Claim business expense deductions</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-accent flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            TFN (Employee)
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Employer handles PAYG tax</li>
            <li>• 11.5% super paid on top</li>
            <li>• 4 weeks paid annual leave</li>
            <li>• 10 days paid sick leave</li>
            <li>• Workers compensation coverage</li>
          </ul>
        </div>
      </div>
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          <strong className="text-destructive">Important:</strong> This calculator provides estimates only. 
          Consult a registered tax agent for personalised advice. Calculations based on 2024-25 Australian tax rates.
        </p>
      </div>
    </div>
  );
}
