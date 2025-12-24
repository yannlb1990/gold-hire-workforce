import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function Plasterers() {
  return <TradePageTemplate trade={TRADE_DATA.plasterers} />;
}
