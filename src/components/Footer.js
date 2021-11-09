import React from "react";

const Footer = () => (
  <div class="container">
      <div className="footer">
        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.datasciencegt.org" style = {{color: "grey"}}> datasciencegt.org </a>
      </div>
  </div>
  
  
);

export default Footer;