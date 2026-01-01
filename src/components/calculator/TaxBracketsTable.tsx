import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Info } from "lucide-react";
import { TAX_BRACKETS, MEDICARE_LEVY_RATE, SUPER_GUARANTEE_RATE } from "@/lib/calculator/taxCalculations";
import { useState } from "react";

const TaxBracketsTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="shadow-elevated border-2 border-navy/20">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <CardHeader className="cursor-pointer hover:bg-navy/5 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-left">
                <Info className="w-5 h-5 text-navy flex-shrink-0" />
                <div>
                  <CardTitle className="text-base">2024-25 Tax Rates</CardTitle>
                  <CardDescription className="text-xs">Australian tax brackets and rates</CardDescription>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-4 pt-0">
            {/* Income Tax Brackets */}
            <div>
              <h4 className="font-semibold text-sm mb-2">Income Tax Brackets</h4>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-navy/10">
                    <tr>
                      <th className="text-left p-2 font-semibold">Taxable Income</th>
                      <th className="text-right p-2 font-semibold">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {TAX_BRACKETS.map((bracket, index) => (
                      <tr key={index} className="hover:bg-muted/50">
                        <td className="p-2">
                          {bracket.min === 0
                            ? `$0 - $${bracket.max?.toLocaleString('en-AU')}`
                            : bracket.max
                              ? `$${bracket.min.toLocaleString('en-AU')} - $${bracket.max.toLocaleString('en-AU')}`
                              : `$${bracket.min.toLocaleString('en-AU')}+`
                          }
                        </td>
                        <td className="p-2 text-right font-medium">
                          {bracket.rate === 0
                            ? 'Tax-free'
                            : `${(bracket.rate * 100).toFixed(0)}%`
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Other Taxes and Rates */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-navy/5 rounded-lg p-3">
                <div className="text-muted-foreground mb-1">Medicare Levy</div>
                <div className="font-bold text-base">{(MEDICARE_LEVY_RATE * 100).toFixed(1)}%</div>
                <div className="text-muted-foreground mt-1">Phase-in from $26,000</div>
              </div>

              <div className="bg-earth-green/10 rounded-lg p-3">
                <div className="text-muted-foreground mb-1">Super Guarantee</div>
                <div className="font-bold text-base">{(SUPER_GUARANTEE_RATE * 100).toFixed(1)}%</div>
                <div className="text-muted-foreground mt-1">Employer contribution</div>
              </div>
            </div>

            {/* LITO Information */}
            <div className="bg-gold/10 rounded-lg p-3 text-xs">
              <div className="font-semibold mb-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Low Income Tax Offset (LITO)
              </div>
              <div className="text-muted-foreground">
                Up to $700 tax offset for incomes under $66,667. Reduces tax owed (not refundable below $0).
              </div>
            </div>

            {/* HECS-HELP Note */}
            <div className="bg-navy/5 rounded-lg p-3 text-xs">
              <div className="font-semibold mb-1">HECS-HELP Repayment</div>
              <div className="text-muted-foreground">
                Starts at 1% for incomes over $54,435, increasing to 10% for incomes over $142,100.
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default TaxBracketsTable;
