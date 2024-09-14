import React from "react";

function NoteStatus({ notes }) {
  const status = ["All", "Completed", "Open"];

  const allNotes = notes.length;
  const completedNotesCount = notes.filter((note) => note.completed).length;
  const openNotesCount = notes.filter((note) => !note.completed).length;

  if (!allNotes) return <h2>No Notes has already been added.</h2>;
  return (
    <ul className="note-status">
      {status.map((s, index) => (
        <li key={index}>
          {s}
          <span>
            {s === "All"
              ? notes.length
              : s === "Completed"
              ? completedNotesCount
              : openNotesCount}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default NoteStatus;
