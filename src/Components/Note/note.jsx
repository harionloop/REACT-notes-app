import React from "react";
import "./note.css";
import deleteIcon from "../../assests/minus-square.svg";

export default function Note(props) {
  let timer = 500,
    timeout;

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text custom-scrollbar"
        defaultValue={props.note.text}
        placeholder="Type..."
        onChange={(event) => updateText(event.target.value, props.note.id)}
      ></textarea>
      <div className="note_footer">
        <p>{props.note.date}</p>
        <img
          src={deleteIcon}
          alt="Delete"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}
