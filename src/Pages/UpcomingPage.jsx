import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`
      );
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    };
    fetchUpcomingMovies();
  }, [page]);

  return (
    <div className="container" style={{ marginTop: 80 }}>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default UpcomingPage;
