// src/views/SellerPage.js
import React, { useState, useContext } from "react";
import { RoyaltyContext } from "../RoyaltyContext";
import "./SellerPage.css";

const SellerPage = () => {
  const { addRoyalty } = useContext(RoyaltyContext);
  const [formData, setFormData] = useState({
    title: "",
    priceRange: "",
    details: "",
    info: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRoyalty(formData);
    alert("Royalty details submitted successfully!");
    setFormData({
      title: "",
      priceRange: "",
      details: "",
      info: "",
      image: null,
    });
  };

  return (
    <div className="seller-page">
      <div className="container">
        <h2>Sell Your Royalties</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="priceRange">Price Range</label>
            <input
              type="text"
              id="priceRange"
              name="priceRange"
              value={formData.priceRange}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="info">Additional Info</label>
            <textarea
              id="info"
              name="info"
              value={formData.info}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
