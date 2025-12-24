import { MoneyPageTemplate } from "./MoneyPageTemplate";
import { MONEY_PAGE_LOCATIONS, MONEY_PAGE_TRADES } from "@/data/moneyPages";

export default function TweedHeadsDemolition() {
  return (
    <MoneyPageTemplate
      location={MONEY_PAGE_LOCATIONS["tweed-heads"]}
      trade={MONEY_PAGE_TRADES["demolition"]}
    />
  );
}
