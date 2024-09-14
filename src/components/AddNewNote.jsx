import React, { useState } from "react";

function AddNewNote() {
  const [notes, setNotes] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setNotes((prevNotes) => ({
      ...prevNotes,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      ...notes,
      id: Date.now(),
      completed: false,
      createAt: new Date().toISOString(),
    };
    // Add your submit logic here
    console.log(newNote);
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          name="title"
          value={notes.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="text-field"
          name="description"
          value={notes.description}
          onChange={handleInputChange}
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
