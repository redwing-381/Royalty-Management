// src/views/BuyerPage.js
import React, { useContext } from "react";
import { RoyaltyContext } from "../RoyaltyContext";
import "./BuyerPage.css";

const BuyerPage = () => {
  const { royalties } = useContext(RoyaltyContext);

  return (
    <div className="buyer-page">
      <div className="container">
        <h2>Available Royalties</h2>
        <div className="royalty-list">
          {royalties.map((royalty, index) => (
            <div key={index} className="royalty-item">
              <h3>{royalty.title}</h3>
              <p>Price Range: {royalty.priceRange}</p>
              <p>Details: {royalty.details}</p>
              <p>Additional Info: {royalty.info}</p>
              {royalty.image && (
                <img
                  src={URL.createObjectURL(royalty.image)}
                  alt={royalty.title}
                  className="royalty-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyerPage;
