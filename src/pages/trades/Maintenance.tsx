import { TradePageTemplate } from "./TradePageTemplate";
import { TRADE_DATA } from "@/data/trades";

export default function Maintenance() {
  return <TradePageTemplate trade={TRADE_DATA["maintenance"]} />;
}
