"use client";
import React, { useEffect } from "react";
import LiveBarChart from "./BarChart";
import GetOrderBook from "@/utils/orderBook";

const SpreadIndicator = () => {
  const [spreadData, setSpreadData] = React.useState([]);
  const orderBook = GetOrderBook();

  useEffect(() => {
    if (orderBook) {
      const bestAsk = orderBook?.asks[0]?.price || 0;
      const bestBid = orderBook?.bids[0]?.price || 0;
      const spread = bestAsk - bestBid;
      const timestamp = new Date().getTime();
      setSpreadData((prev) =>
        [...prev, { timestamp, spread }].filter(
          (data) => timestamp - data.timestamp <= 60000
        )
      );
    }
  }, [orderBook]);

  return <LiveBarChart data={spreadData} />;
};

export default SpreadIndicator;
