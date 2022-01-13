import React, { useState } from "react";
import "./sidebar.css";
import plusIcon from "../../assests/plus-circle.svg";

export default function Sidebar(props) {
  const colours = ["#fe9b72", "#fec971", "#00c4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} onClick={() => setListOpen(!listOpen)} alt="Add" />
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colours.map((item, id) => (
          <li
            className="sidebar-list-item"
            key={id}
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
