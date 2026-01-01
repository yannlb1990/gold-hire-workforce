import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calculator, Percent, Info, Shield, GraduationCap } from "lucide-react";

export function TaxBracketsReference() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="tax-brackets" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Calculator className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-heading font-semibold text-foreground text-sm">
                  2024-25 Tax Brackets Reference
                </h3>
                <p className="text-xs text-muted-foreground">
                  Click to view Australian tax rates, Medicare levy & more
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6">
              {/* Income Tax Brackets */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm text-foreground">Income Tax Rates</h4>
                </div>
                <div className="rounded-lg border border-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="text-xs font-semibold">Taxable Income</TableHead>
                        <TableHead className="text-xs font-semibold text-right">Tax Rate</TableHead>
                        <TableHead className="text-xs font-semibold text-right">Tax on Bracket</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-sm">$0 – $18,200</TableCell>
                        <TableCell className="text-sm text-right font-medium text-green-600">0%</TableCell>
                        <TableCell className="text-sm text-right text-muted-foreground">Nil</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">$18,201 – $45,000</TableCell>
                        <TableCell className="text-sm text-right font-medium text-amber-600">16%</TableCell>
                        <TableCell className="text-sm text-right text-muted-foreground">16c per $1 over $18,200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">$45,001 – $135,000</TableCell>
                        <TableCell className="text-sm text-right font-medium text-orange-600">30%</TableCell>
                        <TableCell className="text-sm text-right text-muted-foreground">$4,288 + 30c per $1 over $45,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">$135,001 – $190,000</TableCell>
                        <TableCell className="text-sm text-right font-medium text-red-500">37%</TableCell>
                        <TableCell className="text-sm text-right text-muted-foreground">$31,288 + 37c per $1 over $135,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-sm">$190,001+</TableCell>
                        <TableCell className="text-sm text-right font-medium text-red-600">45%</TableCell>
                        <TableCell className="text-sm text-right text-muted-foreground">$51,638 + 45c per $1 over $190,000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Additional Rates */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Medicare & Super */}
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <h4 className="font-semibold text-sm text-foreground">Medicare & Super</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Medicare Levy</span>
                      <span className="text-sm font-semibold text-blue-600">2.0%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Super Guarantee</span>
                      <span className="text-sm font-semibold text-primary">11.5%</span>
                    </div>
                    <p className="text-xs text-muted-foreground pt-1">
                      Medicare exemption up to ~$26,000. Super paid on top of wages by employer.
                    </p>
                  </div>
                </div>

                {/* LITO & HECS */}
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-500" />
                    <h4 className="font-semibold text-sm text-foreground">Offsets & HECS</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">LITO (max)</span>
                      <span className="text-sm font-semibold text-green-600">$700</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">LITO phases out</span>
                      <span className="text-sm font-medium text-muted-foreground">$37,500–$45,000</span>
                    </div>
                    <p className="text-xs text-muted-foreground pt-1">
                      HECS-HELP repayments start at $54,435 (1%) and scale up to 10% at $159,663+.
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Note */}
              <div className="flex items-start gap-2 bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
                <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  These are the 2024-25 Australian tax rates with Stage 3 tax cuts applied. 
                  This calculator provides estimates only – consult a registered tax agent for personal advice.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
