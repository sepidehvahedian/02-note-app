import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDelete = (id, notes) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote AddNote={handleAddNote} />
        <div className="note-container">
          <NoteList notes={notes} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
