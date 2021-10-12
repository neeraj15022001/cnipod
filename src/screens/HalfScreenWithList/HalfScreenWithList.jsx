import React from "react";
import "./HalfScreenWithList.css";

function HalfScreenWithList({ isActive, title, listItems = [] }) {
  return (
    <div className="screen-menu">
      <h3 className="screen-menu-headline">{title}</h3>
      <ul className="screen-menu-list">
        {listItems.map((item, index) => (
          <li
            className={
              isActive
                ? `screen-menu-list-items ${index === 0 ? "active-item" : ""}`
                : "screen-menu-list-items-disabled"
            }
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HalfScreenWithList;
