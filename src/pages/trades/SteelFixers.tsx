import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function SteelFixers() {
  return <TradePageTemplate trade={TRADE_DATA["steel-fixers"]} />;
}
