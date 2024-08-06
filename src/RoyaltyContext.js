// src/RoyaltyContext.js
import React, { createContext, useState } from "react";

export const RoyaltyContext = createContext();

export const RoyaltyProvider = ({ children }) => {
  const [royalties, setRoyalties] = useState([]);

  const addRoyalty = (royalty) => {
    setRoyalties((prevRoyalties) => [...prevRoyalties, royalty]);
  };

  return (
    <RoyaltyContext.Provider value={{ royalties, addRoyalty }}>
      {children}
    </RoyaltyContext.Provider>
  );
};
