import React from "react";
import { IpodBody } from "./import";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="ipod-container">
        <IpodBody />
        <IpodBody
          additionalStyle={{
            transform: "rotate(180deg)",
            opacity: 0.2,
            position: "absolute",
            bottom: -500,
          }}
          isActive={false}
        />
      </div>
    </div>
  );
}

export default App;
