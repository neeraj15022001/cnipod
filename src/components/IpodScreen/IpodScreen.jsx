import React from "react";
import "./IpodScreen.css";

function IpodScreen({ isActive, subComponent }) {
  return (
    <div className="screen-container">
      <div className="screen-bg"></div>
      <div className="screen-menu-container">{subComponent}</div>
    </div>
  );
}

export default IpodScreen;
