import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p>Rating:{movie.vote_average}</p>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
