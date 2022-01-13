import React from "react";
import Note from "../Note/note";
import "./notesContainer.css";

export default function NotesContainer(props) {
  return (
    <div className="notes-container ">
      <h1>Keeping your Notes Here!</h1>
      <div className="note-container custom-scrollbar ">
        {props.notes.length > 0 ? (
          props.notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>Click on + icon to add Notes here:)</h3>
        )}
      </div>
    </div>
  );
}
