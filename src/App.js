import React, { useState } from "react";
import MovieList from "./components/movielist";
import Filter from "./components/filter";
import AddMovie from "./components/Addmovie";
import "./App.css";

function App() {
  // Initial movies
  const [movies, setMovies] = useState([
    {
      title: "Modern-Family",
      description: "Three modern-day families from California try to deal with their kids, quirky spouses and jobs in their own unique ways, often falling into hilarious situations .",
      posterURL:
        "/images/modern-family.jpg",
      rating: 5,
    },
    {
      title: "Friends",
      description: "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.",
      posterURL:
        "/images/friends.jfif",
      rating: 4,
    },
  ]);

  // Filter states
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  // Add new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Apply filters
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>

      <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />

      <AddMovie addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
