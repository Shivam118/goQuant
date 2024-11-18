"use client";
import React from "react";
import GetOrderBook from "@/utils/orderBook";

const BidAndAsk = () => {
  const data = GetOrderBook();
  return (
    <div className="bg-[#222] rounded-xl w-full shadow-md mx-auto m-5 min-h-[400px] col-span-2 lg:col-span-1">
      <div className="flex justify-between text-[#ccc] text-base md:text-lg items-center">
        <div className="w-1/2 text-center">Bids</div>
        <div className="w-1/2 text-center">Asks</div>
      </div>
      <br/>
      <div className="flex p-2 text-xs md:text-base">
        <div className="w-1/2 text-red-700">
          {data &&
            data.bids.map((bid, idx) => (
              <div
                key={idx}
                className={`flex justify-between px-2 py-1 ${
                  idx % 2 === 0 ? "bg-[#333]" : ""
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
                  idx % 2 === 0 ? "bg-[#333]" : ""
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
