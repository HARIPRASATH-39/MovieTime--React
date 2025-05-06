import React, { useEffect, useState } from "react";
import { Movierender } from "./MovieRender";
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
      <div className="SearchBar mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for Movies..."
          value={searchterm}
          onChange={searchvalue}
        ></input>
      </div>
      <div>
        <button className="btn btn-secondary" onClick={() => sorthelp("name")}>
          SORT BY NAME
        </button>
        <button className="btn btn-info" onClick={() => sorthelp("year")}>
          SORT BY YEAR
        </button>
      </div>
      <div className="row md-3">
        {filteredMovies.length == 0 ? (
          <p className="nomovies">NO MOVIES AVAILABLE</p>
        ) : (
          sortedMovies.map((movie) => (
            <div key={movie.id} className="col md-3 mb-3">
              <div className="card  shadow-lg custom">
                <Movierender movie={movie} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
