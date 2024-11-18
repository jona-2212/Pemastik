import React from "react";
import "./Footer.css"; // Pastikan Anda membuat file CSS untuk styling khusus

const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <h1 className="footer-title">
            <span className="footer-k">K</span>ONTENQ
          </h1>
          <p className="footer-tagline">Analyze Create Grow Your journey to impactful content starts here.</p>
        </div>
        <img className="footer-image" src="footer.png" alt="Footer Background" />
      </footer>
    );
  };
  

export default Footer;
