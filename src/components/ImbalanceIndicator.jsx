import GetOrderBook from "@/utils/orderBook";
import React, { useEffect, useState } from "react";

const ImbalanceIndicator = () => {
  const orderBook = GetOrderBook();
  const [imbalance, setImbalance] = useState(0);

  const calculateOrderbookImbalance = (bids, asks) => {
    const totalBidsVolume = bids.reduce((sum, bid) => sum + bid.size, 0);
    const totalAsksVolume = asks.reduce((sum, ask) => sum + ask.size, 0);

    const imbalance =
      (totalBidsVolume - totalAsksVolume) / (totalBidsVolume + totalAsksVolume);

    return imbalance.toFixed(2);
  };

  useEffect(() => {
    if (orderBook) {      
      const { bids, asks } = orderBook;
      const calculatedImbalance = calculateOrderbookImbalance(bids, asks);
      setImbalance(calculatedImbalance);
    }
  }, [orderBook]);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h3>Orderbook Imbalance Indicator</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          margin: "0 auto",
          height: "30px",
          background: "#ddd",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        {/* Bar for bids */}
        <div
          style={{
            flex: imbalance > 0 ? imbalance : 0,
            background: "green",
            height: "100%",
            transition: "flex 0.5s ease",
          }}
        ></div>
        {/* Bar for asks */}
        <div
          style={{
            flex: imbalance < 0 ? -imbalance : 0,
            background: "red",
            height: "100%",
            transition: "flex 0.5s ease",
          }}
        ></div>
      </div>
      <p>
        {imbalance > 0
          ? `Buyers dominate (${imbalance * 100}%)`
          : imbalance < 0
          ? `Sellers dominate (${Math.abs(imbalance * 100)}%)`
          : "Perfectly balanced"}
      </p>
    </div>
  );
};

export default ImbalanceIndicator;
