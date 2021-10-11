import React from "react";
import { IpodBody } from "./import";
import "./App.css";
function App() {
  return (
    <div className="app">
      <IpodBody />
      <IpodBody
        additionalStyle={{
          transform: "rotate(180deg)",
          opacity: 0.2,
          position: "absolute",
          bottom: -390,
        }}
      />
    </div>
  );
}

export default App;
