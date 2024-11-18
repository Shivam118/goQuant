"use client";
import { SymbolContext } from "@/context/SymbolContext";
import { symbolID } from "@/utils/env";
import React, { useState } from "react";

const App = ({ children }) => {
  const [symbolId, setSymbolId] = useState(symbolID);
  return (
    <SymbolContext.Provider value={{ symbolId, setSymbolId }}>
      {children}
    </SymbolContext.Provider>
  );
};

export default App;
