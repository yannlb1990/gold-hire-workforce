import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function Concreters() {
  return <TradePageTemplate trade={TRADE_DATA.concreters} />;
}
