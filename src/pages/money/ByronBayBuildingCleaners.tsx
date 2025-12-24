import { MoneyPageTemplate } from "./MoneyPageTemplate";
import { MONEY_PAGE_LOCATIONS, MONEY_PAGE_TRADES } from "@/data/moneyPages";

export default function ByronBayBuildingCleaners() {
  return (
    <MoneyPageTemplate
      location={MONEY_PAGE_LOCATIONS["byron-bay"]}
      trade={MONEY_PAGE_TRADES["building-cleaners"]}
    />
  );
}
