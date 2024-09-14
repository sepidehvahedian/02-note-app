import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useState } from "react";
import NoteStatus from "./components/NoteStatus";
function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDelete = (id) => {
    const filteredNote = notes.filter((note) => note.id !== id);
    setNotes(filteredNote);
  };

  const handleToggle = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((n) =>
    //   n.id === noteId ? { ...n, completed: !n.completed } : n
    // );
    // setNotes(newNotes);
    setNotes((prevNotes) =>
      prevNotes.map((n) =>
        n.id === noteId ? { ...n, completed: !n.completed } : n
      )
    );
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote AddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            onDelete={handleDelete}
            onComplete={handleToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
