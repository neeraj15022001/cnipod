import React from "react";
import "./IpodBody.css";
import { IpodScreen } from "./imports";
import IpodButtons from "../IPodButtons/IpodButtons";

function IpodBody({ additionalStyle = {} }) {
  console.log(additionalStyle);
  return (
    <div className="main-container">
      <div className="ipod-body" style={additionalStyle}>
        <IpodScreen />
        <IpodButtons />
      </div>
    </div>
  );
}

export default IpodBody;
