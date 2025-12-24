import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function Landscaping() {
  return <TradePageTemplate trade={TRADE_DATA["landscaping"]} />;
}
