"use client";
import React from "react";
import GetOrderBook from "@/utils/orderBook";

const BidAndAsk = () => {
  const data = GetOrderBook();

  return (
    <div className="border border-[#ccc] rounded-sm max-w-[600px] shadow-md mx-auto m-5">
      <div className="flex justify-between bg-[#f0f0f0] items-center">
        <div className="w-1/2 text-center">Bids</div>
        <div className="w-1/2 text-center">Asks</div>
      </div>
      <div className="flex">
        <div className="w-1/2 text-red-700">
          {data &&
            data.bids.map((bid, idx) => (
              <div
                key={idx}
                className={`flex justify-between px-2 py-1 ${
                  idx % 2 === 0 ? "bg-[#f0f0f0]" : ""
                }`}
              >
                <div>{bid.price}</div>
                <div>{bid.size}</div>
              </div>
            ))}
        </div>
        <div className="w-1/2 text-green-700">
          {data &&
            data.asks.map((ask, idx) => (
              <div
                key={idx}
                className={`flex justify-between px-2 py-1 ${
                  idx % 2 === 0 ? "bg-[#f0f0f0]" : ""
                }`}
              >
                <div>{ask.price}</div>
                <div>{ask.size}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BidAndAsk;
