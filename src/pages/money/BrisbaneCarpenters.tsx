import { MoneyPageTemplate } from "./MoneyPageTemplate";
import { MONEY_PAGE_LOCATIONS, MONEY_PAGE_TRADES } from "@/data/moneyPages";

export default function BrisbaneCarpenters() {
  return (
    <MoneyPageTemplate
      location={MONEY_PAGE_LOCATIONS["brisbane"]}
      trade={MONEY_PAGE_TRADES["carpenters"]}
    />
  );
}
