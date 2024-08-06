import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src="discord-icon.png" alt="Discord" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="github-icon.png" alt="GitHub" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="youtube-icon.png" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Your Company. All Rights Reserved.</p>
        <p>1234 Your Address St., Your City, Your State, Your Country</p>
      </div>
    </div>
  );
};

export default Footer;
