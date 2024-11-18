"use client";
import BidAndAsk from "@/components/BidAndAsk";
import ImbalanceIndicator from "@/components/ImbalanceIndicator";
import MarketDepth from "@/components/MarketDepth";
import SpreadIndicator from "@/components/SpreadIndicator";
import { SymbolContext } from "@/context/SymbolContext";
import GetOrderBook from "@/utils/orderBook";
import React, { useContext, useEffect } from "react";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-3">
      <SpreadIndicator />
      <BidAndAsk />
      <ImbalanceIndicator />
      <MarketDepth />
    </div>
  );
};

export default Page;
