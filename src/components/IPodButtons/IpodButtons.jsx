import React from "react";
import "./IpodButtons.css";
import ZingTouch from "zingtouch";
import {
  SkipBackwardFill,
  SkipEndFill,
  SkipForwardFill,
} from "react-bootstrap-icons";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

class IpodButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      path: "/coverflow",
    };
  }
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
            if (event.detail.distanceFromOrigin % 15 > 14) {
              buttons[i].classList.remove("active-item");
              if (event.detail.distanceFromLast > 0) {
                if (i === buttons.length) {
                  i = -1;
                }
                buttons[i + 1].classList.add("active-item");
                console.log(buttons[i + 1].innerHTML);
                this.setState({ path: `/${buttons[i + 1].innerHTML}` });
              } else {
                if (i === 0) {
                  i = buttons.length + 1;
                }
                buttons[i - 1].classList.add("active-item");
                console.log(buttons[i - 1].innerHTML);
                this.setState({ path: `/${buttons[i - 1].innerHTML}` });
              }
              break;
            }
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
        <Tilt options={{ max: -25 }} style={{ height: 200, width: 200 }}>
          <div className="buttons-rotater">
            <Link to={this.state.path}>
              <div className="rotater-center"></div>
            </Link>
            <div className="buttons-container-element">
              <button className="menu rotater-button" onClick={this.takeHome}>
                <span>
                  <Link className="button-label" to="/">
                    MENU
                  </Link>
                </span>
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
        </Tilt>
      </div>
    );
  }
}

export default IpodButtons;
