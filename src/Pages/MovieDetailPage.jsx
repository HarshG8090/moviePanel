import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setMovie(movieResponse.data);
    };

    const fetchCastDetails = async () => {
      const castResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setCast(castResponse.data.cast);
    };

    fetchMovieDetails();
    fetchCastDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;
  const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="container" style={{ marginTop: 80 }}>
      <div
        className="single-movie-detail"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
        }}
      >
        <div className="movie-content">
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>
              <strong>Rating:</strong> {movie.vote_average} / 10
            </p>
            <p>
              <strong>Release Date:</strong>{" "}
              {new Date(movie.release_date).toDateString()}
            </p>
          </div>
          <div className="movie-overview">
            <h3>Overview</h3>
            <p className="text-truncate-5-lines">{movie.overview}</p>
          </div>
        </div>
      </div>

      <div className="cast-section">
        <h3>Cast</h3>
        <div className="row">
          {cast.slice(0, 12).map((actor) => (
            <div className="col-md-2 actor-card" key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className="img-fluid"
              />
              <p className="text-center mt-2">
                <strong>{actor.name}</strong>
              </p>
              <p className="text-center">as {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
