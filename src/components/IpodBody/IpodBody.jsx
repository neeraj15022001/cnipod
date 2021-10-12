import React from "react";
import "./IpodBody.css";
import {
  IpodScreen,
  IpodButtons,
  Home,
  CoverFlow,
  Music,
  Settings,
  Games,
} from "./imports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function IpodBody({ additionalStyle = {}, isActive = true }) {
  return (
    <div className="main-container">
      <div className="ipod-body" style={additionalStyle}>
        <Router>
          <Switch>
            <Route exact path="/">
              <IpodScreen
                isActive={isActive}
                subComponent={<Home isActive={isActive} />}
              />
            </Route>
            <Route path="/coverflow">
              <IpodScreen isActive={isActive} subComponent={<CoverFlow />} />
            </Route>
            <Route path="/music">
              <IpodScreen
                isActive={isActive}
                subComponent={<Music isActive={isActive} />}
              />
            </Route>
            <Route path="/games">
              <IpodScreen isActive={isActive} subComponent={<Games />} />
            </Route>
            <Route path="/settings">
              <IpodScreen isActive={isActive} subComponent={<Settings />} />
            </Route>
          </Switch>
        </Router>
        <IpodButtons isActive={isActive} />
      </div>
    </div>
  );
}

export default IpodBody;
