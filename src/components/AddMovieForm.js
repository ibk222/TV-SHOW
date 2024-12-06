import React, { useState } from "react";

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && year) {
      addMovie({ title, year });
      setTitle("");
      setYear("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        placeholder="Movie/Show Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovieForm;
