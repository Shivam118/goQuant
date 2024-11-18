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

  return (
    <div className="bg-[#222] rounded-xl w-full shadow-md mx-auto m-5 h-[250px] md:h-[400px] col-span-2 lg:col-span-1 p-2">
      <h2 className="text-center text-[#ccc]">Spread</h2>
      <LiveBarChart data={spreadData} />
    </div>
  );
};

export default SpreadIndicator;
