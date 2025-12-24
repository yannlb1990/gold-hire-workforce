import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function Demolition() {
  return <TradePageTemplate trade={TRADE_DATA.demolition} />;
}
