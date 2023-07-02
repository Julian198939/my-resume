import React from "react";
import "./Footer.css";
import imageSrc from "../../../assets/Home/shape-bg.png";
export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={imageSrc} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
