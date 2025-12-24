import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function BuildingCleaners() {
  return <TradePageTemplate trade={TRADE_DATA["building-cleaners"]} />;
}
