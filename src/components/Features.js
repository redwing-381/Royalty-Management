// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Get Your Crown?</h2>
      <div className="feature-item">
        <h3>Smart Contracts</h3>
        <p>Utilizes blockchain-based smart contracts to automate royalty payments.</p>
      </div>
      <div className="feature-item">
        <h3>Transparent Ledger</h3>
        <p>Blockchain's immutable ledger allows for a transparent and tamper-proof record of all transactions.</p>
      </div>
      <div className="feature-item">
        <h3>Tokenization</h3>
        <p>Royalty rights are represented using digital rights.</p>
      </div>
      <div className="feature-item">
        <h3>Real-time Tracking</h3>
        <p> Blockchain technology can provide real-time tracking of usage and sales data.</p>
      </div>
      <div className="feature-item">
        <h3>Global Reach</h3>
        <p>Cryptocurrency can facilitate cross-border payments, reducing transaction fees.</p>
      </div>
    </section>
  );
};

export default Features;
