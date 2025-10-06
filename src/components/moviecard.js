import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterURL} alt={movie.title} />
      </Link>
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
