import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I am Frontend Developer From India.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="footer-sub">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Siddharth Pandey. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
