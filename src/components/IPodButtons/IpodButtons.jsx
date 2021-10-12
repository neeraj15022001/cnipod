import React from "react";
import "./IpodButtons.css";
import { GrChapterNext, GrChapterPrevious, GrPlay } from "react-icons/gr";
function IpodButtons() {
  return (
    <div className="buttons-container">
      <div className="buttons-rotater">
        <div className="rotater-center"></div>
        <button className="menu rotater-button">MENU</button>
        <button className="seek-next rotater-button">
          <GrChapterNext />
        </button>
        <button className="seek-prev rotater-button">
          <GrChapterPrevious />
        </button>
        <button className="play-pause rotater-button">
          <GrPlay />
        </button>
      </div>
    </div>
  );
}

export default IpodButtons;
