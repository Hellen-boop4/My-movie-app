import React, { useState } from "react";

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !rating) {
      alert("Please fill all fields");
      return;
    }
    addMovie({ title, description, posterURL, rating });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (0-5)"
        value={rating}
        min="0"
        max="5"
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
