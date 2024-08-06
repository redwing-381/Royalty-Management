// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Rylty?</h2>
      <div className="feature-item">
        <h3>Debt-free Funding</h3>
        <p>Access the funds you need without giving up control of your music.</p>
      </div>
      <div className="feature-item">
        <h3>Financial Security</h3>
        <p>Receive reliable payments directly to your wallet.</p>
      </div>
      <div className="feature-item">
        <h3>Artistic Freedom</h3>
        <p>Maintain full creative control while enjoying financial stability.</p>
      </div>
    </section>
  );
};

export default Features;
