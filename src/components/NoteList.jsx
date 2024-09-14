import React from "react";

function NoteList({ notes }) {
  return <div>{JSON.stringify(notes)}</div>;
}

export default NoteList;
