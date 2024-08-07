// src/RoyaltyContext.js
import React, { createContext, useState } from "react";

export const RoyaltyContext = createContext();

export const RoyaltyProvider = ({ children }) => {
  const [royalties, setRoyalties] = useState([
    {
      title: "Lo-Fi Hip-Hop Sound Recording Royalties",
      price: "0.05 BTC",
      details: "This is a great song.",
      info: "Published in 2023.",
      image: null,
    },
    {
      title: "Spider-Man Movie",
      price: "0.1 BTC",
      details: "Blockbuster movie.",
      info: "Released in 2022.",
      image: null,
    },
  ]);

  const addRoyalty = (royalty) => {
    setRoyalties((prevRoyalties) => [...prevRoyalties, royalty]);
  };

  return (
    <RoyaltyContext.Provider value={{ royalties, addRoyalty }}>
      {children}
    </RoyaltyContext.Provider>
  );
};
