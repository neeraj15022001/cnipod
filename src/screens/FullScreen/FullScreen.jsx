import React from "react";
import "./FullScreen.css";

function FullScreen({title, imgURL = null}) {
    return (
        <div className="screen-menu-fullscreen">
            <div className="screen-menu-content-container">
                {imgURL && (
                    <img src={imgURL} alt={title} className="sreen-menu-image"/>
                )}
                <h2 className="screen-menu-headline-fullscreen"
                    style={{color: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)} )`}}>{title}</h2>
            </div>
        </div>
    );
}

export default FullScreen;
