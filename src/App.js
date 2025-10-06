import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/movielist";
import Filter from "./components/filter";
import AddMovie from "./components/Addmovie";
import MovieDescription from "./components/moviedescription";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Modern Family",
      description:
        "Three modern-day families from California try to deal with their kids, quirky spouses, and jobs in their own unique ways, often falling into hilarious situations.",
      posterURL: "/images/modern-family.jpg",
      rating: 5,
      trailerUrl: "https://www.youtube.com/embed/5DTWf8ZuOeg",
    },
    {
      id: 2,
      title: "Friends",
      description:
        "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.",
      posterURL: "/images/friends.jfif",
      rating: 4,
      trailerUrl: "https://www.youtube.com/embed/Lhpu3GdlV3w",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <Router>
      <div className="App">
        <h1>🎬 My Movie App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  setFilterTitle={setFilterTitle}
                  setFilterRate={setFilterRate}
                />
                <AddMovie addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
