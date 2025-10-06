import React from "react";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.posterURL} alt={movie.title} width="200" />
          <h3>{movie.title}</h3>
          <p>⭐ {movie.rating}</p>
          <Link to={`/movie/${movie.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
