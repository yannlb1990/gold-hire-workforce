import { MoneyPageTemplate } from "./MoneyPageTemplate";
import { MONEY_PAGE_LOCATIONS, MONEY_PAGE_TRADES } from "@/data/moneyPages";

export default function LoganLandscaping() {
  return (
    <MoneyPageTemplate
      location={MONEY_PAGE_LOCATIONS["logan"]}
      trade={MONEY_PAGE_TRADES["landscaping"]}
    />
  );
}
