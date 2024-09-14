import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        {/* <div className="add-new-note">add new note form</div> */}
        <AddNewNote AddNote={handleAddNote} />
        <div className="note-container">notes</div>
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App;
