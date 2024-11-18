"use client";
import axios from "axios";
import { apiKey, apiUrl } from "./env";
import { useContext, useEffect, useState } from "react";
import { SymbolContext } from "@/context/SymbolContext";

export default function GetOrderBook() {
  const { symbolId } = useContext(SymbolContext);
  const [data, setData] = useState(null);

  const fetchOrderBook = async () => {
    try {
      const resp = await axios.get(
        `${apiUrl}/v1/orderbooks/${symbolId}/current?limit_levels=10`,
        { headers: { "X-CoinAPI-Key": apiKey } }
      );
      if (resp.status !== 200) {
        throw new Error("Failed to fetch order book data");
      }
      const orderbook = resp.data;
      return orderbook;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrderBook();
    const interval = setInterval(async () => {
      const orderBook = await fetchOrderBook();
      setData(orderBook);
    }, 1000);
    return () => clearInterval(interval);
  }, [symbolId]);

  return data;
}
