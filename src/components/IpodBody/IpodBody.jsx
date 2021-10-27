import React, {useState} from "react";
import "./IpodBody.css";
import {
  IpodScreen,
  IpodButtons,
  Home,
  CoverFlow,
  Music,
  Settings,
  Games,
  Player,
  Artists,
  Albums,
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
              <IpodButtons isActive={isActive} renderedFrom="/coverflow" />
            </Route>
            <Route path="/coverflow">
              <IpodScreen isActive={isActive} subComponent={<CoverFlow />} />
              <IpodButtons isActive={isActive} renderedFrom="/coverflow" />
            </Route>
            <Route path="/music">
              <IpodScreen
                isActive={isActive}
                subComponent={<Music isActive={isActive} />}
              />
              <IpodButtons isActive={isActive} renderedFrom="/music" />
            </Route>
            <Route path="/games">
              <IpodScreen isActive={isActive} subComponent={<Games />} />
              <IpodButtons isActive={isActive} renderedFrom="/games" />
            </Route>
            <Route path="/settings">
              <IpodScreen isActive={isActive} subComponent={<Settings isActive={isActive} />} />
              <IpodButtons isActive={isActive} renderedFrom="/settings" />
            </Route>
            <Route path="/allSongs">
              <IpodScreen isActive={isActive} subComponent={<Player />} />
              <IpodButtons isActive={isActive} renderedFrom="/allSongs" />
            </Route>
            <Route path="/artists">
              <IpodScreen isActive={isActive} subComponent={<Artists />} />
              <IpodButtons isActive={isActive} renderedFrom="/artists" />
            </Route>
            <Route path="/albums">
              <IpodScreen isActive={isActive} subComponent={<Albums />} />
              <IpodButtons isActive={isActive} renderedFrom="/albums" />
            </Route>
          </Switch>
          {/* <IpodButtons isActive={isActive} /> */}
        </Router>
      </div>
    </div>
  );
}

export default IpodBody;
