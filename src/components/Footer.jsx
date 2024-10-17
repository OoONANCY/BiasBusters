import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/Home">Home</a>
          <a >About</a>
          <a >Resources</a>
          <a >Contact</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} Bias Busters
        </div>
      </div>
    </footer>
  );
};

export default Footer;
