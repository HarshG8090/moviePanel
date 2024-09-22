import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) navigate(`/search/${query}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          Movie Panel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Popular Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top-rated">
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">
                Upcoming
              </Link>
            </li>
          </ul>
          <form className="d-flex ml-auto" onSubmit={handleSearch}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn btn-secondary my-2 my-sm-0 mx-md-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
