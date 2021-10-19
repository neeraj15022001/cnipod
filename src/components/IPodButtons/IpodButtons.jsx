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
import tone from "../../assets/tone.mp3";

class IpodButtons extends React.Component {
  constructor() {
    super();
    this.audio = new Audio(tone);
    this.state = {
      path: "/coverflow",
    };
  }
  componentDidMount() {
    // if /music is directly accessed
    if (this.props.renderedFrom === "/music") {
      this.setState({ path: "/allSongs" });
    }
    // Rotating Wheel Event handled
    const { isActive } = this.props;
    if (isActive) {
      var containerElement = document.querySelector(".buttons-rotater");
      var activeRegion = new ZingTouch.Region(containerElement);
      var childElement = document.querySelector(".buttons-container-element");
      let changeInAngle = 0;
      activeRegion.bind(childElement, "rotate", (event) => {
        const buttons = document.querySelectorAll(".screen-menu-list-items");
        changeInAngle += event.detail.distanceFromLast;
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].classList.contains("active-item")) {
            if (changeInAngle > 15 || changeInAngle < -15) {
              changeInAngle = 0;
              // console.log("chaging item");
              buttons[i].classList.remove("active-item");
              if (event.detail.distanceFromLast > 0) {
                if (i === buttons.length - 1) {
                  i = -1;
                }
                buttons[i + 1].classList.add("active-item");
                // console.log(buttons[i + 1].innerHTML);
                this.setState({ path: `/${buttons[i + 1].innerHTML}` });
              } else {
                if (i === 0) {
                  i = buttons.length;
                }
                buttons[i - 1].classList.add("active-item");
                // console.log(buttons[i - 1].innerHTML);
                this.setState({ path: `/${buttons[i - 1].innerHTML}` });
              }
              break;
            }
          }
        }
      });
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Edge Cases when routing between screens
    if (
      prevProps.renderedFrom === "/coverflow" &&
      this.props.renderedFrom === "/music"
    ) {
      this.setState({ path: "/allSongs" });
    } else if (
      prevProps.renderedFrom !== "/coverflow" &&
      this.props.renderedFrom === "/coverflow"
    ) {
      this.setState({ path: this.props.renderedFrom });
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { prevProps, prevState };
  }
  componentWillUnmount() {
    // Unmounting component and detaching event listeners and audio elements
    console.log("unmounting");
    this.audio.remove();
    var containerElement = document.querySelector(".buttons-rotater");
    var activeRegion = ZingTouch.Region(containerElement);
    var childElement = document.querySelector(".buttons-container-element");
    activeRegion.unbind(childElement, "rotate");
  }
  render() {
    // checking if /allSongs is directly accessed - will fail as Chrome changed it's policy for autoplay
    if (this.props.renderedFrom === "/allSongs") {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    return (
      <div className="buttons-container">
        <Tilt options={{ max: -25 }} style={{ height: 200, width: 200 }}>
          <div className="buttons-rotater">
            <Link to={this.state.path} replace>
              <div className="rotater-center"></div>
            </Link>
            <div className="buttons-container-element">
              <button className="menu rotater-button">
                <span>
                  <Link
                    className="button-label"
                    to={{ pathname: "/", state: { path: "/coverflow" } }}
                    replace
                  >
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
