"use client";
import BidAndAsk from "@/components/BidAndAsk";
import Header from "@/components/Header";
import ImbalanceIndicator from "@/components/ImbalanceIndicator";
import MarketDepth from "@/components/MarketDepth";
import SpreadIndicator from "@/components/SpreadIndicator";
import React, { useContext, useEffect } from "react";

const Page = () => {



  return (
    <div>
      <BidAndAsk />
      <SpreadIndicator />
      <ImbalanceIndicator />
      <MarketDepth />
    </div>
  );
};

export default Page;
