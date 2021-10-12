import React from "react";
import "./IpodButtons.css";
import ZingTouch from "zingtouch";
import {
  SkipBackwardFill,
  SkipEndFill,
  SkipForwardFill,
} from "react-bootstrap-icons";

class IpodButtons extends React.Component {
  componentDidMount() {
    const { isActive } = this.props;
    if (isActive) {
      var containerElement = document.querySelector(".buttons-rotater");
      var activeRegion = new ZingTouch.Region(containerElement);
      var childElement = document.querySelector(".buttons-container-element");
      activeRegion.bind(childElement, "rotate", (event) => {
        const buttons = document.querySelectorAll(".screen-menu-list-items");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].classList.contains("active-item")) {
            // console.log(i);
            buttons[i].classList.remove("active-item");
            if (event.detail.distanceFromLast > 0) {
              if (i === 3) {
                i = -1;
              }
              buttons[i + 1].classList.add("active-item");
            } else {
              if (i === 0) {
                i = 4;
              }
              buttons[i - 1].classList.add("active-item");
            }
            break;
          }
        }
      });
    }
  }
  componentWillUnmount() {
    console.log("unmounting");
    var containerElement = document.querySelector(".buttons-rotater");
    var activeRegion = ZingTouch.Region(containerElement);
    var childElement = document.querySelector(".buttons-container-element");
    activeRegion.unbind(childElement, "rotate");
  }
  render() {
    return (
      <div className="buttons-container">
        <div className="buttons-rotater">
          <div className="rotater-center"></div>
          <div className="buttons-container-element">
            <button className="menu rotater-button">
              <span className="button-icons">MENU</span>
            </button>
            <button className="seek-next rotater-button">
              <SkipForwardFill color="silver" className="button-icons" />
            </button>
            <button className="seek-prev rotater-button">
              <SkipBackwardFill color="silver" className="button-icons" />
            </button>
            <button className="play-pause rotater-button">
              <SkipEndFill color="silver" className="button-icons" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IpodButtons;
