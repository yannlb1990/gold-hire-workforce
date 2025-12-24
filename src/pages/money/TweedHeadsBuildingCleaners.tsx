import { MoneyPageTemplate } from "./MoneyPageTemplate";
import { MONEY_PAGE_LOCATIONS, MONEY_PAGE_TRADES } from "@/data/moneyPages";

export default function TweedHeadsBuildingCleaners() {
  return (
    <MoneyPageTemplate
      location={MONEY_PAGE_LOCATIONS["tweed-heads"]}
      trade={MONEY_PAGE_TRADES["building-cleaners"]}
    />
  );
}
