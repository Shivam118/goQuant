import { SymbolContext } from "@/context/SymbolContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { apiUrl, apiKey } from "@/utils/env";
import LiveLineChart from "./LineChart";
import GetOrderBook from "@/utils/orderBook";

const MarketDepth = () => {
  const [data, setData] = useState(null);
  const orderBook = GetOrderBook();

  function calculateMarketDepth(bids, asks) {
    const cum_bids = bids.reduce((acc, bid, i) => {
      const size = i === 0 ? bid.size : acc[i - 1].size + bid.size;
      acc.push({ price: bid.price, size, type: "Bid" });
      return acc;
    }, []);

    const cum_asks = asks.reduce((acc, ask, i) => {
      const size = i === 0 ? ask.size : acc[i - 1].size + ask.size;
      acc.push({ price: ask.price, size, type: "Ask" });
      return acc;
    }, []);

    // Combine bids and asks for Recharts
    return [...cum_bids, ...cum_asks];
  }

  useEffect(() => {
    if (orderBook) {
      const { bids, asks } = orderBook;
      const marketDepth = calculateMarketDepth(bids, asks);
      setData(marketDepth);
    }
  }, [orderBook]);

  return (
    <div>
      <LiveLineChart data={data} />
    </div>
  );
};

export default MarketDepth;