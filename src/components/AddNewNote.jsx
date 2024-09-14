import React, { useState } from "react";

function AddNewNote({ AddNote }) {
  const [labelInput, setLabelInput] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setLabelInput((prevLabelInput) => ({
      ...prevLabelInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!labelInput.title || !labelInput.description) return null;
    const newNote = {
      ...labelInput,
      id: Date.now(),
      completed: false,
      createAt: new Date().toISOString(),
    };
    setLabelInput({ title: "", description: "" });
    AddNote(newNote);
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          name="title"
          value={labelInput.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="text-field"
          name="description"
          value={labelInput.description}
          onChange={handleInputChange}
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
