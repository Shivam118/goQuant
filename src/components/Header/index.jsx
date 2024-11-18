"use client";
import { SymbolContext } from "@/context/SymbolContext";
import React, { useContext } from "react";

const Header = () => {
  const { setSymbolId } = useContext(SymbolContext);
  return (
    <div className="flex items-center justify-between px-5">
      <h6 className="text-white text-2xl font-medium py-5 text-center">
        Order Book
      </h6>
      <select
        className="bg-[#333] text-white p-2 rounded-md"
        onChange={(e) => setSymbolId(e.target.value)}
      >
        <option value="BITSTAMP_SPOT_BTC_USD">BTC-USD</option>
        <option value="BITSTAMP_SPOT_ETH_USD">ETH-USD</option>
        <option value="BITSTAMP_SPOT_XRP_USD">XRP-USD</option>
      </select>
    </div>
  );
};

export default Header;
