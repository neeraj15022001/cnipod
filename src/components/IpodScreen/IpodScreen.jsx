import React from "react";
import "./IpodScreen.css";
import Clock from "react-live-clock";

function IpodScreen({isActive, subComponent}) {
    const wallpapers = ["https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?cs=srgb&dl=pexels-pixabay-207518.jpg&fm=jpg", "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?cs=srgb&dl=pexels-ralph-w-lambrecht-1446076.jpg&fm=jpg", "https://images.pexels.com/photos/248812/pexels-photo-248812.jpeg?cs=srgb&dl=pexels-pixabay-248812.jpg&fm=jpg"]
    return (
        <div className="screen-container">
            <div style={{
                position: "absolute",
                top: 34,
                right: 34,
                zIndex: 100,
                backgroundColor: `rgb(${Math.floor(Math.random() * (50 + 1) + 100)},${Math.floor(Math.random() * (50 + 1) + 100)},${Math.floor(Math.random() * (50 + 1) + 100)} )`,
                borderRadius: 5,
                padding: 5
            }}><Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Kolkata"} style={{color:"#fff"}}/></div>
            <div
                className="screen-bg"
                style={{
                    backgroundColor: "#fff",
                    backgroundImage:
                        `url(${wallpapers[parseInt(Math.random() * wallpapers.length)]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="screen-menu-container">{subComponent}</div>
        </div>
    );
}

export default IpodScreen;
