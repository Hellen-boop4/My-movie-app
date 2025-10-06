import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDescription({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <h3>⭐ Rating: {movie.rating}</h3>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Link to="/">
        <button>⬅ Back to Home</button>
      </Link>
    </div>
  );
}

export default MovieDescription;
