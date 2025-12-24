import { MoneyPageTemplate } from "./MoneyPageTemplate";
import { MONEY_PAGE_LOCATIONS, MONEY_PAGE_TRADES } from "@/data/moneyPages";

export default function GoldCoastSteelFixers() {
  return (
    <MoneyPageTemplate
      location={MONEY_PAGE_LOCATIONS["gold-coast"]}
      trade={MONEY_PAGE_TRADES["steel-fixers"]}
    />
  );
}
