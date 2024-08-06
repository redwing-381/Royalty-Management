// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Rylty</div>
      <nav>
        <Link to="/listings">Listings</Link>
        <Link to="/funding">Get Funding</Link>
        <Link to="/nft">NFT Your Music</Link>
        <Link to="/invest">Invest</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="auth-buttons">
        <button className="login">Log In</button>
        <button className="create-account">Create an Account</button>
      </div>
    </header>
  );
};

export default Header;
