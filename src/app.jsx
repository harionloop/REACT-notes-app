import React, { useState, useEffect } from "react";
import NotesContainer from "./Components/NotesContainer/notesContainer";
import Sidebar from "./Components/Sidebar/sidebar";
import "./app.css";

export default function App() {
  let [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color) => {
    let tempNotes = [...notes];
    tempNotes.unshift({
      id: Math.random() * 99.9,
      text: "",
      color,
      date: Date(),
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    let tempNotes = [...notes];
    tempNotes = tempNotes.filter((e) => e.id !== id);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    let tempNotes = [...notes];
    let index = tempNotes.findIndex((e) => e.id === id);
    tempNotes[index].text = text;
    setNotes(tempNotes);
    console.log(text);
  };

  return (
    <div className="app ">
      <Sidebar addNote={addNote} />
      <NotesContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}
