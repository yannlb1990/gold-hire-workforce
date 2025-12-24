import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function Carpenters() {
  return <TradePageTemplate trade={TRADE_DATA.carpenters} />;
}
