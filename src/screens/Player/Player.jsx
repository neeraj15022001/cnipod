import React from "react";
import "./Player.css";

function Player() {
  return (
    <div className="screen-menu-fullscreen">
      <div className="player-container">
        <div className="player-content">
          <div className="song-image-container"></div>
          <div className="song-description-container">
            <h4>Work From Home</h4>
            <p>Fifth Harmony</p>
          </div>
        </div>
        <div className="player-seeker">
          <div className="player">
            <input type="range" name="player-seeker" max="100" min="0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
