import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Alwaleed</p>
      <div className="footer-links">
        <a
          href="https://github.com/waleed199c"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alwaleed-alshaghnoubi"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:alwaleedshg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
