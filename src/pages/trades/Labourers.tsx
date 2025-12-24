import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function Labourers() {
  return <TradePageTemplate trade={TRADE_DATA.labourers} />;
}
