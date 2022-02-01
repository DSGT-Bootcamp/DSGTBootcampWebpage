import React from "react";

const Footer = () => (
  <div className="container" style={{marginRight: "0px"}}>
      <div className="footer">
        {/* <p style={{right: "0"}}> */}
        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.datasciencegt.org" style = {{color: "white", textAlign: "right"}}> datasciencegt.org </a>
        {/* </p> */}
      </div>
  </div>
  
  
);

export default Footer;