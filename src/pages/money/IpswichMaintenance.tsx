import { MoneyPageTemplate } from "./MoneyPageTemplate";
import { MONEY_PAGE_LOCATIONS, MONEY_PAGE_TRADES } from "@/data/moneyPages";

export default function IpswichMaintenance() {
  return (
    <MoneyPageTemplate
      location={MONEY_PAGE_LOCATIONS["ipswich"]}
      trade={MONEY_PAGE_TRADES["maintenance"]}
    />
  );
}
