import React, { useEffect, useState } from "react";
import { Movierender } from "./Movierender";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Movies.css";

export function Movies() {
  const [movies, setmovies] = useState([]);
  const [searchterm, setsearchterm] = useState("");
  const [sortorder, setsortorder] = useState("");
  const [sortField, setsortField] = useState("name");

  useEffect(() => {
    fetch("Movies.json")
      .then((response) => response.json())
      .then((data) => setmovies(data));
  }, []);

  const searchvalue = (e) => {
    setsearchterm(e.target.value);
  };

  const sorthelp = (field) => {
    if (sortField === field) {
      setsortorder(sortorder === "asc" ? "desc" : "asc");
    } else {
      setsortField(field);
      setsortorder("asc");
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchterm.toLowerCase())
  );

  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortorder === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });
  return (
    <div className="">
      <h1>
        Welcome to <span className="Title">Movie</span> Time....
      </h1>
      <div className="SearchBar mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for Movies..."
          value={searchterm}
          onChange={searchvalue}
        ></input>
      </div>
      <div className="sort-button">
        <button
          className="btn btn-secondary mb-3"
          onClick={() => sorthelp("name")}
        >
          SORT BY NAME
        </button>

        <button className="btn btn-info mb-3" onClick={() => sorthelp("year")}>
          SORT BY YEAR
        </button>
      </div>
      <div className="row">
        {filteredMovies.length === 0 ? (
          <div className="empty-list">
            <p className="nomovies">NO MOVIES AVAILABLE</p>
          </div>
        ) : (
          sortedMovies.map((movie) => (
            <div key={movie.id} className="col md-3 mb-3">
              <div className="card shadow-lg custom">
                <Movierender movie={movie} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
